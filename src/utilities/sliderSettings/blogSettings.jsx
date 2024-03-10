import { ArrowLeft, ArrowRight } from "@/components/ui/SliderButton";

export const blogSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    speed: 1000,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
}