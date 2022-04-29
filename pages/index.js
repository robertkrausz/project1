import Seo from "helpers/Seo";
import Header from "components/Header";
import MainBlock from "layouts/MainPage/MainBlock";
import MainRoadMap from "layouts/MainPage/MainRoadMap";
import Footer from "components/Footer";
import MainUnique from "layouts/MainPage/MainUnique";

export default function Home() {
  return (
    <>
      <Seo
        title="Main page"
        description=""
        image="Robotrons is a collection of droid characters to minted as NFTs. They are constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors. Get your own!"
      />
      <Header/>
      <MainBlock/>
      <MainUnique/>
      <MainRoadMap/>
      <Footer/>
    </>
  )
}
