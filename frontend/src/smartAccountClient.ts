import { createModularAccountAlchemyClient } from '@alchemy/aa-alchemy'
import { LocalAccountSigner, baseSepolia } from '@alchemy/aa-core'

export const chain = baseSepolia

export const GBSmartAccount = await createModularAccountAlchemyClient({
  apiKey: process.env.ALCHEMY_API_KEY,
  chain,
  // you can swap this out for any SmartAccountSigner
  signer: LocalAccountSigner.mnemonicToAccountSigner('OWNER_MNEMONIC'),
})
