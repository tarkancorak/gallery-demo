import {
  MediaRenderer,
  useActiveClaimCondition,
  useContract,
} from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import styles from "../styles/Home.module.css";
import Link from "next/link";

type NFTCardProps = {
  nft: NFT;
  contractId: string;
  href?: string;
};

const NFTCard = ({ nft, contractId, href }: NFTCardProps) => {
  const attributes = nft.metadata?.attributes ?? [];
  const title = (attributes as { value: string }[])[0]?.value;
  const creator = (attributes as { value: string }[])[1]?.value;
  const type = (attributes as { value: string }[])[2]?.value;
  const year = (attributes as { value: string }[])[3]?.value;

  return (
    <div className={styles.nftCard}>
      {href && (
        <Link
          key={nft.metadata.id}
          href={`/contracts/${contractId}/tokens/${nft.metadata.id}`}
        >
          <MediaRenderer src={nft.metadata.image} className='mb-2' />
        </Link>
      )}
      {!href && <MediaRenderer src={nft.metadata.image} className='mb-2' />}
      <div className='flex flex-row justify-between flex-nowrap'>
        <div>Title:</div>
        <div>{title}</div>
      </div>
      <div className='flex flex-row justify-between'>
        <div>Artist:</div>
        <div>{creator}</div>
      </div>
      <div className='flex flex-row justify-between'>
        <div>Type:</div>
        <div>{type}</div>
      </div>
      <div className='flex flex-row justify-between'>
        <div>Year:</div>
        <div>{year}</div>
      </div>
      <div className='flex flex-row justify-between'>
        <div>Contract:</div>
        <div>
          <a
            href={`https://sepolia.basescan.org/token/${contractId}?a=${nft?.metadata.id}`}
            target='_blank'
          >
            {contractId.substring(0, 6)}...{contractId.substring(38, 42)}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
