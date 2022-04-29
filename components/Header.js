import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Logo from "components/Logo";
import Link from "next/link";
import navArray from "public/data/main-nav.json";
import {useRouter} from "next/router";
import Social from "components/Social";
import {useState} from "react";
import {useSnapshot} from "valtio";
import {state} from "state";

export default function Header(){
	const snap = useSnapshot(state);
	const [visible, setVisible] = useState(false);

	const renderNav = () => {
		return (
			<ul className="nav_list">
				{
					navArray.map((item, index) => {
						return (
							<li className={item.slug === asPath ? 'active' : ''} key={index}>
								<Link href={item.slug}><a>{item.title}</a></Link>
							</li>
						)
					})
				}
			</ul>
		)
	}

	const mintButton = () => {
		return (
			<div className="mint_button">
				<Link href="/"><a>{snap.login ? "Go minting" : "Connect wallet"}</a></Link>
			</div>
		)
	}

	const {asPath} = useRouter();
	return (
		<>
			<MobileNavigation className={visible ? 'active' : ''}>
				{renderNav()}
				{mintButton()}
			</MobileNavigation>
			<HeaderWrapper>
				<CenterBlock>
					<Logo/>
					<div className="nav_sidebar">
						<nav>
							{renderNav()}
						</nav>
						<div className="nav_sidebar_social">
							<Social/>
							<div className="contract">
								<a rel="noreferrer" target="_blank" href={`https://tronscan.io/#/contract/${process.env.CONTRACT}/code`}>Contract</a>
							</div>
						</div>
					</div>
					<MobileButton  onClick={() => setVisible(!visible)}>
						{
							visible ? (
								<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M0.108417 21.0259C0.135761 21.2383 0.230488 21.4434 0.393574 21.6064C0.784199 21.9971 1.41701 21.9971 1.80764 21.6064L11 12.4141L20.1924 21.6069C20.3731 21.7881 20.6065 21.8853 20.8428 21.8984C21.1172 21.9136 21.3965 21.8164 21.6065 21.6069C21.9971 21.2163 21.9971 20.583 21.6065 20.1924L12.4141 11L21.6065 1.80762C21.9971 1.41699 21.9971 0.783691 21.6065 0.393555C21.2168 0.00292969 20.583 0.00292969 20.1924 0.393555L11 9.58594L1.80764 0.393555C1.41701 0.00292969 0.784199 0.00292969 0.393574 0.393555C0.00294867 0.78418 0.00294867 1.41748 0.393574 1.80762L9.58596 11L0.393574 20.1924C0.166035 20.4199 0.071308 20.7295 0.108417 21.0259Z" fill="white"/>
								</svg>
							) : (
								<>
									<span/>
									<span/>
									<span/>
								</>
							)
						}
					</MobileButton>
				</CenterBlock>
			</HeaderWrapper>
		</>
	)
}

const MobileNavigation = styled.div`
	background: #22223F;
	border-radius: 10px;
	width: calc(100% - 60px);
	left: 50%;
	transform: translateX(-50%);
	position: fixed;
	top: 105px;
	z-index: 9999;
	padding: 15px;
	display: none;
	@media only screen and (max-width: 600px) {
		width: calc(100% - 40px);
	}
	&.active{
		display: block;
	}
	.nav_list{
		li{
			margin-bottom: 10px;
			&:last-child{
				margin-bottom: 0;
			}
		}
		a{
			font-size: 20px;
			line-height: 30px;
			color: #fff;
		}
	}
	.mint_button{
		margin-top: 40px;
		padding-bottom: 10px;
		a{
			background: #EDB146;
			border-radius: 6px;
			height: 46px;
			padding: 8px 13px;
			color: #22223F;
			font-weight: bold;
			font-size: 20px;
			line-height: 30px;
			&:hover{
				color: #22223F;
			}
		}
	}
`

const MobileButton = styled.button`
	width: 60px;
	height: 60px;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 19px 15px;
	display: none;
	background: #22223F;
	border-radius: 10px;
	line-height: 0;
	@media only screen and (max-width: 1024px) {
		display: flex;
	}
	span{
		width: 100%;
		height: 2px;
		background: #FFFFFF;
		border-radius: 2px;
	}
`

const HeaderWrapper = styled.header`
	position: fixed;
	top: 20px;
	left: 0;
	width: 100%;
	z-index: 999;
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.nav_sidebar_social{
		display: flex;
		align-items: center;
	}
	.nav_sidebar{
		width: calc(100% - 242px - 30px);
		background: #22223F;
		border-radius: 10px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 7px 0 20px;
		@media only screen and (max-width: 1024px) {
			display: none;
		}
		a{
			font-size: 20px;
			line-height: 30px;
			color: #FFFFFF;
			&:hover{
				color: #EDB146;
			}
		}
	}
	.contract{
		margin-left: 20px;
	}
	.mint_button, .contract{
		a{
			background: #EDB146;
			border-radius: 6px;
			height: 46px;
			padding: 8px 13px;
			color: #22223F;
			font-weight: bold;
			font-size: 20px;
			line-height: 30px;
			&:hover{
				color: #22223F;
			}
		}
	}
	nav{
		ul{
			display: flex;
			align-items: center;
			li{
				margin-right: 20px;
				border-right: 1px solid #FFFFFF;
				padding-right: 20px;
				&.active{
					a{
						color: #EDB146;
					}
				}
				&:last-child{
					margin-right: 0;
					padding-right: 0;
					border-right: none;
				}
			}
		}
	}
`
