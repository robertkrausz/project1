import VisibilitySensor from "react-visibility-sensor";
import styled from "styled-components";

export default function InfiniteScroll({page, total, onCallBack}) {
	const onChange = (e) => {
		if (page < total) {
			if (e) onCallBack(page + 1)
		}
	}

	return (
		page < total && (
			<VisibilitySensor
				active={page < total}
				offset={{top: -window.innerHeight  * 2}}
				onChange={onChange}>
				<LoadingWrapper>
					<div className="loading_box">Loading</div>
				</LoadingWrapper>
			</VisibilitySensor>
		)
	)
}

const LoadingWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 40px;
	opacity: 0;
	visibility: hidden;
	&.active{
		opacity: 1;
		visibility: visible;
	}
	.loading_box{
		display: flex;
		align-items: center;
		background: #FFFFFF;
		border-radius: 10px;
		font-weight: bold;
		font-size: 14px;
		line-height: 17px;
		text-transform: uppercase;
		color: #111113;
		padding: 0 30px;
		height: 35px;
	}
`
