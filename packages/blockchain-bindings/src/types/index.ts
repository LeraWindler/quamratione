export type { Erc20 } from './Erc20';

export type { LensFollowNFT } from './LensFollowNFT';
export type { LensHub } from './LensHub';
export type { LensPeriphery } from './LensPeriphery';

export type ChainId = number;

// https://eips.ethereum.org/EIPS/eip-3085
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface AddEthereumChainParameter {
  chainId: string;
  blockExplorerUrls?: string[];
  chainName?: string;
  iconUrls?: string[];
  nativeCurrency?: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls?: string[];
}

export type RewardPercentiles = string[];

export type FeeHistoryResult = {
  baseFeePerGas: string[];
  gasUsedRatio: number[];
  oldestBlock: number;
  reward: RewardPercentiles[];
};
