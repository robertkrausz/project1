import ReactHtmlParser from 'react-html-parser';
export default function Html({content}) {
	return ReactHtmlParser(content)
}
