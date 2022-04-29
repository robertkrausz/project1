import styled from "styled-components";
import Percent from "helpers/Percent";
import NumberFormat from "helpers/NumberFormat";
import {useSnapshot} from "valtio";
import {state} from "state";
import {useEffect, useState} from "react";
import Contract from 'helpers/Contract'
import Modal from "components/Modal";
import Loading from "components/Loading";

export default function MintBlock(){
	const snap = useSnapshot(state);
	const [left, setLeft] = useState(0);
	const [total, setTotal] = useState(0)
	const [loading, setLoading] = useState(false);
	const [visible, setVisible] = useState(false);
	const [error, setError] = useState(null);
	const [transaction, setTransaction] = useState('')

	useEffect(() => {
		if (snap.contract) getData()
	}, [snap.contract])

	const getData = () => {
		Contract.getNotMintedAmount().then(r => setLeft(r))
		Contract.totalSupply().then(r => setTotal(r))
	}

	const makeError = () => {
		setError("An error occurred during your transaction. Try again or contact us via Telegram chat.")
		setVisible(false)
		setLoading(false)
	}

	const onHandleClick = async () => {
		setVisible(false)
		setError(null)
		setTransaction('')
		try {
			await Contract.mint().then(r => {
				if (r) {
					setLoading(true)
					setTimeout(async () => {
						const check = await window.tronWeb.trx.getTransaction(r);
						if (check.ret) {
							if (check.ret[0].contractRet === "SUCCESS") {
								setTransaction(r)
								setLoading(false)
								setVisible(true)
								getData();
							} else makeError()
						} else makeError()
					}, 10000)
				} else makeError()
			});
		} catch (error) {
			setError(error.message ? error.message : error)
			setLoading(false)
			setVisible(false)
		}
	}

	return (
		<>
			<Loading visible={loading}/>
			<Modal onClick={() => setError(null)} active={error} title="Error">
				<p>{error}</p>
			</Modal>
			<Modal onClick={() => {
				setVisible(false)
				setTransaction('')
			}} active={visible} title="Congratulations">
				<p>Robotrons is a collection of droid characters to minted as NFTs. They are constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors. Get your own!</p>
				<p>Your transaction {transaction}</p>
			</Modal>
			<MintBlockWrapper>
				{snap.login && (
					<>
						{
							snap.network === process.env.WORK_NET && (
								<>
									<h2>{NumberFormat(left)} ROBOs left</h2>
									<Progress count={Percent(total, 10000)}>
										<span/>
									</Progress>
								</>
							)
						}
						{
							snap.balance < process.env.MINT_PRICE ? (
								<div className="no_balance">
									<p>Not enough TRX in wallet</p>
									<p>Your balance: <span>{NumberFormat(snap.balance)}</span> TRX</p>
								</div>
							) : (
								<div className="balance">Your balance {NumberFormat(snap.balance)} TRX</div>
							)
						}
						{
							snap.network !== process.env.WORK_NET && (
								<div className="no_balance">
									<p>Change Network to api.trongrid.io</p>
								</div>
							)
						}
					</>
				)}
				<div className="mint_wrapper">
					<p className="cost">minting cost <strong>350</strong> TRX</p>
					{snap.login ? (
						<button disabled={snap.network !== process.env.WORK_NET || snap.balance < process.env.MINT_PRICE || loading} onClick={onHandleClick}><span>mint ROBO</span></button>
					) : <p className="error">You need to connect or install <a href="https://www.tronlink.org/" target="_blank" rel="noreferrer">TronLink</a></p>}
					<p className="appr">appr. fee <strong>16</strong> TRX</p>
				</div>
			</MintBlockWrapper>
		</>
	)
}

const Progress = styled.div`
	position: relative;
	width: 100%;
	height: 16px;
	border-radius: 8px;
	background: #22223F;
	margin-top: 30px;
	span{
		position: absolute;
		width: ${props => props.count}%;
		height: 16px;
		background: #EDB146;
		border-radius: 8px;
		top: 0;
		left: 0;
		line-height: 0;
	}
`

const MintBlockWrapper = styled.div`
	margin-top: 60px;
	text-align: center;
	position: relative;
	.success_block{
		margin-top: 40px;
		color: #fff;
	}
	.no_balance{
		font-size: 20px;
		line-height: 30px;
		letter-spacing: 0.02em;
		color: #FFFFFF;
		background: #22223F;
		border-radius: 10px;
		padding: 15px 20px;
		display: inline-flex;
		flex-direction: column;
		margin-top: 70px;
		@media only screen and (max-width: 600px) {
			font-size: 16px;
			line-height: 1.7;
		}
		span{
			color: #EDB146;
			font-weight: 900;
		}
		p{
			margin: 0;
		}
	}
	.error{
		background-color: #22223F;
		margin: 10px 20px !important;
		padding: 10px;
		border-radius: 20px;
		color: #fff;
		a{
			color: #EDB146;
			font-weight: bold;
			text-decoration: underline;
		}
	}
	.balance{
		margin-top: 70px;
		font-size: 30px;
		line-height: 40px;
	}
	h2{
		font-size: 40px;
		line-height: 60px;
	}
	.mint_wrapper{
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 35px;
		@media only screen and (max-width: 768px) {
			flex-direction: column;
		}
		button{
			width: auto;
			position: relative;
			margin: 0 30px;
			transition: all 0.3s ease-in-out;
			&:disabled{
				opacity: .5;
				cursor: default;
				&:hover{
					span{
						color: #22223F;
						transition: all 0.3s ease-in-out;
					}
				}
				&:active{
					top: 0;
					&:after{
						top: 20px;
					}
				}
			}
			&:hover{
				span{
					color: #D74040;
					transition: all 0.3s ease-in-out;
				}
			}
			&:active{
				top: 10px;
				transition: all 0.3s ease-in-out;
				&:after{
					top: 0;
				}
			}
			@media only screen and (max-width: 768px) {
				margin: 20px 0 30px 0;
			}
			span{
				padding: 0 30px;
				height: 60px;
				background: #EDB146;
				border-radius: 10px;
				font-weight: bold;
				font-size: 30px;
				line-height: 44px;
				color: #22223F;
				position: relative;
				z-index: 20;
				transition: all 0.3s ease-in-out;
			}
			&:before{
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				background: #FFFFFF;
				border-radius: 10px;
				top: 10px;
				left: 0;
				z-index: 10;
			}
			&:after{
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				background: #22223F;
				border-radius: 10px;
				top: 20px;
				left: 0;
			}
		}
		p{
			width: 280px;
			margin: 0;
			font-size: 20px;
			line-height: 30px;
			&.appr{
				text-align: left;
				@media only screen and (max-width: 768px) {
					text-align: center;
				}
			}
			&.cost{
				text-align: right;
				@media only screen and (max-width: 768px) {
					text-align: center;
				}
			}
		}
	}
`
