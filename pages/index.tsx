import { useContract, useNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import {
  NFT_CONTRACT_ADDRESS_LEO_VINCI,
  NFT_CONTRACT_ADDRESS_VINCE_GO,
} from "../constants/constants";
import NFTCard from "../components/NFTCard";
import Link from "next/link";
import Head from "next/head";
import Loader from "../components/Loader";

const Home: NextPage = () => {
  const { contract: leoVinci } = useContract(NFT_CONTRACT_ADDRESS_LEO_VINCI);
  const { contract: vinceGo } = useContract(NFT_CONTRACT_ADDRESS_VINCE_GO);

  const { data: nftsLeoVinci, isLoading: isLoadingNFTsLeoVinci } =
    useNFTs(leoVinci);
  const { data: nftsVinceGo, isLoading: isLoadingNFTsVinceGo } =
    useNFTs(vinceGo);

  return (
    <main className={styles.main}>
      <Head>
        <title>Demo Art Gallery, by metamare</title>
      </Head>
      <div className={styles.container}>
        {/* Leo Vincie */}
        <h2 className='mb-6 text-2xl text-center sm:text-left'>
          Artwork by Leo Vinci
        </h2>
        <div className={styles.grid}>
          {nftsLeoVinci && nftsLeoVinci.length > 0 ? (
            nftsLeoVinci.map((nft) => (
              <NFTCard
                key={nft.metadata.id}
                nft={nft}
                contractId={NFT_CONTRACT_ADDRESS_LEO_VINCI}
                href={`/contracts/${NFT_CONTRACT_ADDRESS_LEO_VINCI}/tokens/${nft.metadata.id}`}
              />
            ))
          ) : (
            <p className='w-[300px] mx-auto'>
              {isLoadingNFTsLeoVinci ? <Loader /> : "No artwork for sale"}
            </p>
          )}
        </div>

        {/* Vince Go */}
        <h2 className='mb-6 text-2xl text-center sm:text-left'>
          Artwork by Vince Go
        </h2>
        <div className={styles.grid}>
          {nftsVinceGo && nftsVinceGo.length > 0 ? (
            nftsVinceGo.map((nft) => (
              <NFTCard
                key={nft.metadata.id}
                nft={nft}
                contractId={NFT_CONTRACT_ADDRESS_VINCE_GO}
                href={`/contracts/${NFT_CONTRACT_ADDRESS_VINCE_GO}/tokens/${nft.metadata.id}`}
              />
            ))
          ) : (
            <p className='w-[300px] mx-auto'>
              {isLoadingNFTsVinceGo ? <Loader /> : "No artwork for sale"}
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
