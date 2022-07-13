import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';

function GalleryImages() {
    return (
        <div className="max-full flex justify-center lg:pt-[30px] pt-[20px] mx-[20px]">
            <div className="flex lg:flex-row flex-col">
                <div className="relative">
                    <img src={image5} alt="modelo" className="lg:pr-[10px] " />
                    <div className="absolute w-[20px] lg:text-[26px] text-[20px] font-bold tracking-[.20em] text-white bottom-16 translate-x-8 font-montserrat">ÍRIS VERÃO 2022</div>
                </div>
                <div className="relative lg:pt-[0px] pt-[20px]">
                    <img src={image6} alt="modelo" className="lg:pl-[10px]" />
                    <div className="absolute w-[120px] lg:text-[26px] text-[20px] font-bold tracking-[.20em] text-white bottom-20 translate-x-8 font-montserrat">LE LIS BLANC</div>
                </div>
            </div>
        </div>
    )
}

export default GalleryImages;