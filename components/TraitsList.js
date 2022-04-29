import styled from "styled-components";

export default function TraitsList({traits}) {
	return (
		<TraitsListWrapper className="traits_list">
			<ul>
				{
					Object.keys(traits).map(function(key, index) {
						return (
							traits[key] && (
								<li key={index}>
									{key.replace("_", " ")}:
									<span>{traits[key]}</span>
								</li>
							)
						)
					})
				}
			</ul>
		</TraitsListWrapper>
	)
}

const TraitsListWrapper = styled.div`
	li{
		color: #FFFFFF;
		font-size: 16px;
		line-height: 22px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-transform: capitalize;
		span{
			text-align: right;
			font-size: 13px;
		}
	}
`
