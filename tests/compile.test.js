const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const solc = require('solc');

const contractPath = path.join(
  __dirname,
  '..',
  'contracts',
  'GarudaCoin.sol'
);

function findImports(importPath) {
  const fullPath = path.join(
    __dirname,
    '..',
    'node_modules',
    importPath
  );

  try {
    return {
      contents: fs.readFileSync(fullPath, 'utf8')
    };
  } catch {
    return {
      error: `Import tidak ditemukan: ${importPath}`
    };
  }
}

test('GarudaCoin berhasil dikompilasi dan memiliki antarmuka ERC-20 yang benar', () => {
  const source = fs.readFileSync(contractPath, 'utf8');

  const input = {
    language: 'Solidity',
    sources: {
      'contracts/GarudaCoin.sol': {
        content: source
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['abi', 'evm.bytecode.object']
        }
      }
    }
  };

  const output = JSON.parse(
    solc.compile(JSON.stringify(input), { import: findImports })
  );

  const errors = (output.errors || []).filter(
    (error) => error.severity === 'error'
  );

  assert.deepEqual(
    errors,
    [],
    errors.map((error) => error.formattedMessage).join('\n')
  );

  const contract =
    output.contracts['contracts/GarudaCoin.sol'].GarudaCoin;

  assert.ok(contract.evm.bytecode.object.length > 0);

  const functions = contract.abi
    .filter((item) => item.type === 'function')
    .map((item) => item.name);

  for (const name of [
    'name',
    'symbol',
    'decimals',
    'totalSupply',
    'balanceOf',
    'transfer',
    'approve',
    'allowance',
    'transferFrom'
  ]) {
    assert.ok(functions.includes(name), `Fungsi ${name} tidak ditemukan`);
  }

  assert.ok(!functions.includes('mint'), 'Fungsi mint publik tidak diharapkan');

  const constructor = contract.abi.find(
    (item) => item.type === 'constructor'
  );

  assert.ok(constructor, 'Constructor kontrak tidak ditemukan');
});
