import styled from "styled-components";

export default function Modal({active, children, title, onClick}) {
	return (
		<ModalWrapper className={active ? 'active' : ''}>
			<div className="modal">
				<button onClick={() => onClick(false)} className="close_modal">
					<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M0.100921 20.8713C0.0940854 21.1364 0.191742 21.404 0.39389 21.6066C0.784515 21.9973 1.41733 21.9973 1.80795 21.6066L11.0003 12.4143L20.1927 21.6071C20.5833 21.9977 21.2162 21.9977 21.6068 21.6071C21.9974 21.2165 21.9974 20.5832 21.6068 20.1926L12.4144 11.0002L21.6068 1.80781C21.9974 1.41718 21.9974 0.783879 21.6068 0.393743C21.3519 0.137883 20.9915 0.0495043 20.6644 0.128606C20.4915 0.170598 20.3275 0.258977 20.1927 0.393743L11.0003 9.58613L1.80795 0.393743C1.41733 0.0031176 0.784515 0.0031176 0.39389 0.393743C0.201507 0.586614 0.103851 0.838567 0.100921 1.09101C0.0979917 1.35029 0.195648 1.61005 0.39389 1.80781L9.58627 11.0002L0.39389 20.1926C0.205414 20.3806 0.107757 20.6247 0.100921 20.8713Z"/>
					</svg>
				</button>
				<h2>{title}</h2>
				<div className="content">{children}</div>
			</div>
			<ModalOverlay className={active ? 'active' : ''} onClick={() => onClick(false)}/>
		</ModalWrapper>
	)
}

const ModalOverlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 10;
	background: #FFFFFF;
	opacity: 0;
	transition: all 0.3s ease-in-out;
	&.active{
		opacity: .5;
		transition: all 0.3s ease-in-out;
	}
`

const ModalWrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	visibility: hidden;
	z-index: 9999;
	&.active{
		visibility: visible;
		.modal{
			margin-top: 0;
			opacity: 1;
			transition: all 0.3s ease-in-out;
		}
	}
	.close_modal{
		position: absolute;
		top: 20px;
		right: 20px;
		width: auto;
		@media only screen and (max-width: 600px) {
			top: -50px;
			right: 0;
			background: #22223F;
			border-radius: 10px;
			width: 40px;
			height: 40px;
			line-height: 0;
			padding: 10px;
			svg{
				max-width: 100%;
				width: 100%;
			}
		}
		svg{
			fill: #fff;
		}
	}
	h2{
		font-size: 80px;
		line-height: 118px;
		color: #FFFFFF;
		text-align: center;
		@media only screen and (max-width: 768px) {
			font-size: 60px;
			line-height: 1.7;
		}
		@media only screen and (max-width: 600px) {
			font-size: 30px;
			line-height: 44px;
		}
	}
	.content{
		margin-top: 20px;
		font-size: 20px;
		line-height: 27px;
		text-align: center;
		letter-spacing: 0.02em;
		color: #FFFFFF;
		@media only screen and (max-width: 600px) {
			font-size: 20px;
			line-height: 27px;
			height: 60vh;
			overflow-y: auto;
		}
		a{
			color: #fff;
			text-decoration: underline;
		}
	}
	.modal{
		max-width: 1200px;
		width: calc(100% - 40px);
		padding: 20px;
		background: #22223F;
		border-radius: 10px;
		opacity: 0;
		margin-top: 50px;
		position: relative;
		transition: all 0.3s ease-in-out;
		z-index: 20;
	}
`
