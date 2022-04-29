import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function Logo(){
	return (
		<LogoWrapper>
			<Link href="/">
				<a>
					<Image priority={true} width={41} height={46} src="/pic/logo.jpg" alt="Robotos Club"/>
					<span>Robotos Club</span>
				</a>
			</Link>
		</LogoWrapper>
	)
}

const LogoWrapper = styled.div`
	width: 242px;
	a{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 7px 20px 7px 14px;
		background: #22223F;
		border-radius: 10px;
		height: 60px;
		color: #FFFFFF;
		font-size: 20px;
		line-height: 30px;
		&:hover{
			color: #EDB146;
		}
		span{
			display: block;
			margin-left: 15px;
		}
	}
`
