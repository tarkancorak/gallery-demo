"use client";

import { useAddress, useContract, useNFT } from "@thirdweb-dev/react";
import { useParams } from "next/navigation";
import NFTCard from "../../../../components/NFTCard";
import { NFT } from "@thirdweb-dev/sdk";
import Head from "next/head";
import Loader from "../../../../components/Loader";

export default function ExampleClientComponent() {
  const params = useParams<{ contractId: string; tokenId: string }>();
  const contractId = params?.contractId;
  const { contract } = useContract(contractId);
  const { data: nft, isLoading: isLoadingNFT } = useNFT(
    contract,
    params?.tokenId
  );

  if (isLoadingNFT) {
    return (
      <div className='w-[300px] mx-auto'>
        <Loader />
      </div>
    );
  }

  if (!nft) {
    return (
      <div className='w-[300px] mx-auto'>
        <p>Artwork not found!</p>
      </div>
    );
  }

  const attributes = nft.metadata?.attributes ?? [];
  const title = (attributes as { value: string }[])[0]?.value;
  const creator = (attributes as { value: string }[])[1]?.value;

  return (
    <div className='w-[300px] mx-auto'>
      <Head>
        <title>
          &quot;{title}&quot;, by {creator}
        </title>
      </Head>
      <h1 className='mb-6 text-center font-normal'>
        <span className='text-2xl'>&quot;{title}&quot;</span>
        <br />
        <span className='text-xl'>by {creator}</span>
      </h1>
      <NFTCard nft={nft as NFT} contractId={contractId} />
    </div>
  );
}
