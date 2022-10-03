---
sidebar_position: 3
---

# Staking with Metamask

## Install Metamask

Go to [metamask.io](https://metamask.io/) for instructions on getting started with Metamask.

## Add the Echelon Network to Your Metamask

Navigate to the metamask app (screenshots shown for desktop) via the extension icon in your browser. Then click add a network.

<img src="/img/ech-staking/add-network.png"/>

Enter the network details listed below:

| Field           | Value                        |
| --------------- | ---------------------------- |
| Network name    | Echelon                      |
| New RPC URL     | https://ech-evm.softpaws.xyz |
| Chain ID        | 3000                         |
| Currency symbol | ECH                          |

:::tip
If you have trouble with the rpc above find a full list at https://cosmos.directory/echelon.
:::

## Stake Using the Dapp

1. Navigate to https://app.ech.network/staking
2. Find the _Delegate_ section
3. For validator search `SoftPaws` or enter `echelonvaloper15z5dphcvgvtd9c0q7e7wau782ac0hzengnx0ug` which is the SoftPaws validator address on echelon.
4. Choose the amount of ECH you want to delegate.
5. Click Delegate
6. Sign the transaction in metamask

<img src="/img/ech-staking/dapp.png"/>

:::danger
Plan carefully when staking. It will take 21 days to unbond (unstake) your ECH if you decide to. You will receive no rewards during this time.
:::

:::tip
If you would prefer to find a different validator use [Cosmos Directory](https://cosmos.directory/echelon/validators) to see a full list of validators with useful attributes. You can also use [Ping.Pub](https://ping.pub/echelon/uptime) to view the uptime of different validators.
:::
