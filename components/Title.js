import styled from "styled-components";

export default function Title({children}){
	return (
		<TitleWrapper className="title">
			{children}
		</TitleWrapper>
	)
}

const TitleWrapper = styled.div`
	h1{
		font-size: 40px;
		line-height: 59px;
	}
	h2{
		
	}
	h3{
		
	}
	h4{
		
	}
`
