import {NextSeo} from 'next-seo';
import { useRouter } from "next/router";

export default function Seo({title, description, image, type = 'website', keywords = ""}) {
	const {asPath} = useRouter()

	return (
		<NextSeo
			title = {`${process.env.SEO_TITLE} | ${title}`}
			description = {description}
			keywords = {keywords}
			openGraph = {{
				url: `${process.env.WEB}${asPath}`,
				title: `${title} | ${process.env.SEO_TITLE}`,
				description: description,
				type: type,
				site_name: process.env.SEO_TITLE,
				images: [
					{
						url: image.search('http') !== -1 ? image : image ? `${process.env.WEB}${image}` : "",
						width: 1024,
						height: 512,
						alt: title,
					}
				]
			}}
		/>
	)
}
