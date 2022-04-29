import styled from "styled-components";

export default function Loading({visible, title = "Loading..."}){
	return (
		<LoadingWrapper className={visible ? 'active' : ''}>
			<div className="loading">
				<img src="/pic/loading.svg" alt={title}/>
				<p>{title}</p>
			</div>
		</LoadingWrapper>
	)
}

const LoadingWrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: #EDB146;
	display: flex;
	align-items: center;
	justify-content: center;
	visibility: hidden;
	transition: all 0.3s ease-in-out;
	opacity: 0;
	z-index: 100;
	.loading{
		display: flex;
		flex-direction: column;
		p{
			margin: 10px 0 0 0;
			font-size: 40px;
			line-height: 60px;
			letter-spacing: 0.02em;
			color: #22223F;
			font-weight: bold;
			text-align: center;
		}
	}
	&.active{
		visibility: visible;
		transition: all 0.3s ease-in-out;
		opacity: 1;
	}
`
