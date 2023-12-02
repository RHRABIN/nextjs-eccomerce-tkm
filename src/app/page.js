import Banner from "@/components/home/banner/Banner";
import Advertise from "@/components/home/Advertise";
import SkinCareJourney from "@/components/home/skinCare/SkinCareJourney";
import SkinCareSpotLight from "@/components/home/skinCareSpotlight/SkinCareSpotLight";
import Curated from "@/components/home/curated/Curated";
import SpfOnTheGo from "@/components/home/spfOntheGo/SpfOnTheGo";
import OurGlam from "@/components/home/ourGlam/OurGlam";
import FollowUs from "@/components/home/followUs/FollowUs";
import SubsCription from "@/components/home/subscription/SubsCription";
import BrandSlider from "@/components/home/brandSlider/BrandSlider";

export default function Home() {

  return (
    <>
      <Advertise />
      <Banner />
      <SkinCareJourney />
      <SkinCareSpotLight />
      <Curated />
      <SpfOnTheGo />
      <OurGlam />
      <FollowUs />
      <SubsCription />
      <BrandSlider />
    </>
  )
}
