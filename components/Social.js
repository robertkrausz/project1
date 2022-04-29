import styled from "styled-components";
import socialArray from "public/data/social.json";

export default function Social({title = null}){
	return (
		<SocialWrapper className="social">
			{title && <p className="social_title">{title}</p>}
			<ul>
				{
					socialArray.map((item, index) => {
						return (
							<li key={index}>
								<a rel="noreferrer" href={item.slug} target="_blank">{item.title}</a>
							</li>
						)
					})
				}
			</ul>
		</SocialWrapper>
	)
}

const SocialWrapper = styled.div`
	display: flex;
	align-items: center;
	.social_title{
		margin: 0 10px 0 0;
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
	ul{
		display: flex;
		align-items: center;
		li{
			&:first-child:after{
				content: '&';
				color: #ffffff;
				margin: 0 10px;
			}
		}
	}
`
