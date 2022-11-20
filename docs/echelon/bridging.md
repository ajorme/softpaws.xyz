---
sidebar_position: 4
---

# Bridging and IBC

:::tip
Need to get funds to Osmosis? You can see Osmosis IBC channels [here](https://info.osmosis.zone/ibc) if you are coming from other chains. Or just go to the osmosis [assets page](https://app.osmosis.zone/assets) to easily bridge assets from other chains. Atom is available on most CEXs and is native to the Cosmos Hub. You can easily and cheaply bridge it to Osmosis using one of the methods above.
:::

:::caution
If you are unsure about bridging, or this is your first time, you can always try a small transaction first. You should also use chain explorers to ensure both chains are online.
:::

## Bridging Using the IBC Protocol

Make sure you have followed the [Connecting Keplr](/docs/echelon/wallet/keplr) guide

## Bridging using the Echelon Dapp

1. Go to https://app.ech.network/ibc
2. Select the network you are going to.
3. Press the transfer button and sign the transaction.

## Bridging Directly in the Keplr Wallet

### IBC from Osmosis to Echelon

Go to advanced settings in Keplr and enable "Show Advanced IBC Transfers"

1. On Keplr select the Echelon network. Copy your address that begins with "echelon"
2. On Keplr select the Osmosis network.
3. In the IBC Transfer section select "Transfer"
4. Choose "New IBC Transfer Channel" if you have not already set up the channel to Echelon.
5. Type `channel-403`
6. Choose the recipient. (Your address copied in step 1)
7. Click next
8. Select the desired token (ECH)
9. Select the amount.
10. Press Send

### IBC from Echelon to Osmosis

1. On Keplr select the Osmosis network. Copy your address that begins with "osmo"
2. On Keplr select the Echelon network.
3. In the IBC Transfer section select "Transfer"
4. Choose "New IBC Transfer Channel" if you have not already set up the channel to Echelon.
5. Type `channel-11`
6. Choose the recipient. (Your address copied in step 1)
7. Click next
8. Select the desired token (ECH)
9. Select the amount.
10. Press Send
