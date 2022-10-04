---
sidebar_position: 4
---

# Bridging and IBC

:::caution
If you are unsure about bridging, or this is your first time, you can always try a small transaction first. You should also use chain explorers to ensure both chains are online. 
:::

## Bridging with SWFT
Just follow the [Using SWFT guide](/docs/echelon/buying-ech/swft)

## Bridging Using the IBC Protocol  
1. Make sure you have followed the [Connecting Keplr](/docs/echelon/wallet/keplr) guide
2. the settings of Keplr enable "Show Advanced IBC Transfer"

### IBC from Osmosis to Echelon
1. On Keplr select the Echelon network. Copy your address that begins with "echelon"
2. On Keplr select the Osmosis network. 
3. In the IBC Transfer section select "Transfer"
4. Choose "New IBC Transfer Channel" if you have not already set up the channel to Echelon. 
5. Type `channel-262`
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
5. Type `channel-8`
6. Choose the recipient. (Your address copied in step 1)
7. Click next
8. Select the desired token (ECH)
9. Select the amount. 
10. Press Send 

:::tip
If you don't have funds on Osmosis you can transfer ATOM from most centralized exchanges to the Cosmos Hub. Follow the steps above using channel-141 to transfer ATOM to Osmosis via IBC. You can see Osmosis IBC channels [here](https://info.osmosis.zone/ibc) if you are coming from other chains. 