import Banner from "@/components/home/banner/Banner";
import Advertise from "@/components/home/Advertise";
import SkinCareJourney from "@/components/home/skinCare/SkinCareJourney";
import SkinCareSpotLight from "@/components/home/skinCareSpotlight/SkinCareSpotLight";

export default function Home() {

  return (
    <>
      <Advertise />
      <Banner />
      <SkinCareJourney />
      <SkinCareSpotLight />
    </>
  )
}
