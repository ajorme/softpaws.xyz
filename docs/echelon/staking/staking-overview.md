---
sidebar_position: 1
---

# Overview

## Two Ways to Stake

Since the Echelon network is built using Tendermint core and the Cosmos SDK that means you can utilize a Tendermint RPC and stake using Keplr. Since the Echelon network uses Ethermint to run an EVM you can stake using a EVM RPC with Metamask. Both will have the same end result, and both will result in the same yield. So, the choice is more a matter of preference.

## Key Parameters

| Parameter             | Value                                                             |
| --------------------- | ----------------------------------------------------------------- |
| Staking APR           | [Click here for the current APR](https://app.ech.network/staking) |
| Inflation             | Exponential decay algorithm                                       |
| Max Validators        | 100                                                               |
| Minimum Commission    | 5%                                                                |
| Block Time            | 5 seconds                                                         |
| Slash For Downtime    | .01%                                                              |
| Slash For Double Sign | 5%                                                                |
| Signed Blocks Window  | 13.8 hours (10,000 blocks)                                        |
| Unbonding Time        | 21 days (1,814,400 blocks)                                        |

:::tip
If you don't understand any of these parameters check the next sections.
:::

## Inflation

Inflation and staking APR are two parameters that are directly related. But, these are not the same number. We can break down inflation into the inflation distribution below:

| Parameter        | Value  |
| ---------------- | ------ |
| Staking Rewards  | 53.33% |
| Usage Incentives | 33.33% |
| Community Pool   | 13.33% |

### Staking Rewards

These are the rewards given out to those who are staking the coin. If you stake Echelon you will receive more Echelon from this pool of the inflation distribution.

### Usage Incentives

These are incentives that can be assigned for incentivizing the use of certain smart contracts deployed on the chain.

### Community Pool

These are funds that can be voted on by the community for usage.

:::caution
It's important to understand that inflation simply means new coins are being minted (created). It does not mean new liquidity is added to back the new coin being created. Meaning, inflation has a negative impact on the price of a coin. However the impact can be outweighed by buying pressure on the coin. Also, inflation rewards to a staker can outweigh the negative impact of price. You should understand the pros and cons of inflation before staking.
:::

## Validators

There are a maximum of 100 validators validating the chain. If a validator is unable to validate blocks for any reason they will be jailed after 10,0000 missed blocks (13.8 hours). This number is given by _signed blocks window_ parameter. If a validator is jailed all coins delegated to them will be slashed .01%. If a validator is signs a block twice, this is seen as a malicious action, and all coins delegated to them will be slashed 5%. Validators can set the commission for delegating with them. This is the percent of the staking rewards given to the validator you choose to delegate (stake) to. The minimum commission is 5%.

:::warning
Be careful when selecting a validator. Choosing a poor validator can result in your funds being slashed as shown above. Always check a validators commission rate. Validators can change their commission by up to 1% at a time.
:::

## Unbonding

Unbonding (unstaking) your coins requires 1,814,400 blocks to complete. This translates to 21 days provided there are no outages. No rewards are disbursed to you while you are unbonding.

## Redelagating

You can redelgate your coins instantly to another validator. After your first redelegation in a 21 period things get complicated. I suggest reading **[this article](https://medium.com/cosmostation/what-you-need-to-know-about-cosmos-atom-redelegation-e45ca7da6fdf)** for more information. Note that while this is written for the cosmos hub the same rules apply to Echelon.
