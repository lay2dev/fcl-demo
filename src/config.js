import * as fcl from "@blocto/fcl";

fcl
  .config()
  // .put("accessNode.api", "http://localhost:8080") // local Flow emulator
  // .put("challenge.handshake", "http://localhost:8701/flow/authenticate") // local dev wallet
  .put("accessNode.api", "https://access-testnet.onflow.org") // Flow testnet
  .put("discovery.wallet", "https://test.flow.unipass.id/") // Blocto testnet wallet
  .put("discovery.wallet.method", "POP/RPC")
  .put("discovery.wallet.method.default", "POP/RPC");
