# Aavegotchi Autopet - Forked from (https://github.com/geeogi/aavegotchi-autopet)

This service will pet your [Aavegotchi](https://aavegotchi.com) twice daily. Get started:

### Simple Gotchi Petter Contract

https://polygonscan.com/address/0xa1cc069caa69ced0e0139201c2eb2d6d24c8f711

The Simple Aavegotchi petter lets you:
- set a list of Aavegotchi token ids to pet
- check the last time they were interacted with

The contract has a 'setTokens' function that allows you to set which gotchis to pet, this is mapped per sender address so anyone
can use this contract to specify a list of gotchis to pet

You must approve the contract as a PetOperator for your gotchi. You can approve a new PetOperator for your gotchi via the [AavegotchiFacet](https://louper.dev/?address=0x86935F11C86623deC8a25696E1C19a8659CbF95d&network=polygon) (you'll need to call `setPetOperatorForAll` directly on the diamond contract `0x86935f11c86623dec8a25696e1c19a8659cbf95d` which can be done via [louper.dev](https://louper.dev/?address=0x86935F11C86623deC8a25696E1C19a8659CbF95d&network=polygon)).

The PetOperator can't do anything else other than pet your gotchi. You can still continue to pet your gotchi manually if you wish. Take care when making transactions, dyor, not financial advice etc.

### Forking

If you want to run this script yourself you could fork the repo and run the action on Github. You could also run this script from the terminal or run it on a schedule (e.g. AWS lambda).

### Running via Github action

- Fork the repo
- Call 'setTokens' on the contract with the tokens you want to pet (https://polygonscan.com/address/0xa1cc069caa69ced0e0139201c2eb2d6d24c8f711#writeContract)
- Set a new secret on the repo called `PrivateKey` which is the private key of the PetOperator with funds to cover gas costs

### Running locally

- Set the following environment variables:

```bash
PRIVATE_KEY=0x46453... # private key of the pet operator with funds to cover gas costs
```

### Compilation

Use TSC to compile `index.ts` to javascript:

```
yarn tsc index.ts
```

### Run

Run the script with node:

```
node index.js
```
