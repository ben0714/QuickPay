import {createConfig} from '@alchemy/aa-alchemy/dist/types/config';
import {sepolia} from '@alchemy/aa-core';

export const config = createConfig({
  // required
  rpcUrl: '/api/rpc',
  chain: sepolia,
});
