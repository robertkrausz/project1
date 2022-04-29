import Input from 'components/Forms/Input'
import {useEffect, useState} from "react";
import styled from "styled-components";

export default function SearchById({onCallBack}){
	const [value, setValue] = useState('');

	useEffect(() => {
		if (value.length === 0) onCallBack(null)
	}, [value])

	const onHandleSubmit = (e) => {
		e.preventDefault()
		onCallBack(value)
	}

	return (
		<SearchByIdWrapper>
			<form onSubmit={onHandleSubmit}>
				<Input
					value={value}
					placeholder="Search by Id"
					onChange={setValue}
					type="number"
					name="id"
				/>
				<button disabled={!value}>Search</button>
			</form>
		</SearchByIdWrapper>
	)
}

const SearchByIdWrapper = styled.div`
	width: 100%;
	margin-top: 20px;
	form{
		position: relative;
		max-width: 585px;
		width: 100%;
		input{
			padding: 15px 130px 15px 20px;
		}
		button{
			position: absolute;
			top: 7px;
			right: 7px;
			z-index: 10;
			background: #EDB146;
			border-radius: 6px;
			width: 102px;
			height: 46px;
			font-weight: bold;
			font-size: 20px;
			line-height: 30px;
			letter-spacing: 0.02em;
			color: #22223F;
		}
	}
`
