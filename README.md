# Garuda Coin (GAR)

Garuda Coin is an ERC-20 token prototype built with Solidity
and OpenZeppelin Contracts.

## Project Status

- Current status: Prototype
- Compilation: Successful using solcjs
- Local simulation: Deployed and tested in Remix VM
- Mainnet deployment: Not yet deployed
- Independent security audit: Not yet completed

## Token Information

| Property | Value |
|---|---|
| Token Name | Garuda Coin |
| Symbol | GAR |
| Standard | ERC-20 |
| Initial Total Supply | 1,000,000,000 GAR |
| Decimals | 18 |
| Additional Public Mint Function | None |

## Token Supply

The contract creates an initial supply of 1 billion GAR.
The entire initial supply is assigned to the deploying address.

The contract does not include an additional public mint function.

## Technology Stack

- Solidity
- OpenZeppelin Contracts
- solcjs
- Remix IDE for simulated testing

## Tests Performed

- [x] Contract compilation
- [x] ABI and bytecode file validation
- [x] Required ERC-20 functions checked
- [x] Deployment in Remix VM
- [x] Token information functions checked
- [x] Initial token balance checked
- [x] Token transfer tested
- [x] Transfer exceeding available balance rejected

These are initial manual tests, not a comprehensive test suite
or an independent security audit.

## Security and Risk Notice

Garuda Coin is an experimental project.

No claim is made that the contract is fully audited or
production-ready. Further automated testing, independent
security review, and testnet validation are needed before
considering a public deployment.

No investment return or token price is guaranteed.

## Roadmap

- [x] Create the ERC-20 token contract
- [x] Compile the contract
- [x] Perform initial Remix VM tests
- [ ] Add automated contract tests
- [ ] Review security and project documentation
- [ ] Test on a public testnet
- [ ] Evaluate deployment requirements
- [ ] Explore community and developer partnerships

## License

MIT
