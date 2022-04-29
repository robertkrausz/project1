import Header from "components/Header";
import Footer from "components/Footer";
import ContentBox from "components/ContentBox";
import Title from "components/Title";
import Seo from "helpers/Seo";
import Contract from "helpers/Contract"
import {useSnapshot} from "valtio";
import {state} from "state";
import {useEffect, useState} from "react";
import axios from "axios";
import GalleryGrid from "components/GalleryGrid";
import GalleryItem from "components/GalleryItem";
import InfiniteScroll from "helpers/InfiniteScroll";

export default function Wallet(){
	const [wallet, setWallet] = useState(null)
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(null);
	const [array, setArray] = useState(null)
	const snap = useSnapshot(state);
	const limit = 21;

	useEffect(() => {
		if (snap.contract) Contract.getUserTokens(snap.address).then(r => setWallet(r))
	}, [snap.contract])

	useEffect(async () => {
		if (wallet) makeRequest()
	}, [wallet])

	useEffect(() => {
		if (page > 1) makeRequest();
	}, [page])

	const makeRequest = () => {
		axios.get(`${process.env.API}/search?${wallet.join('&')}&page=${page}&limit=${limit}`).then(r => {
			if (r.data.isSuccess) {
				setArray(page === 1 ? r.data.data : [...array, ...r.data.data])
				setTotal(r.data.meta.pagination.total)
			}
		})
	}

	return (
		<>
			<Seo
				title="Wallet"
				description="Robotrons is a collection of droid characters to minted as NFTs. They are constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors. Get your own!"
				image=""
			/>
			<Header/>
			<ContentBox>
				<Title><h1>Wallet</h1></Title>
				<GalleryGrid>
					{
						array ? (
							array.length > 0 ? (
								array.map(item => {
									return <GalleryItem key={item.tokenId} item={item}/>
								})
							) : <p>There is nothing in the wallet</p>
						) : <p>Loading Wallet</p>
					}
				</GalleryGrid>
				<InfiniteScroll page={page} total={total} onCallBack={setPage}/>
			</ContentBox>
			<Footer/>
		</>
	)
}
