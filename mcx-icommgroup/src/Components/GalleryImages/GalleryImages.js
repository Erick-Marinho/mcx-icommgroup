import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';

function GalleryImages() {
    return (
        <div className="max-full flex justify-center pt-[30px]">
            <div className="flex flex-row">
                <div className="relative">
                    <img src={image5} alt="modelo" className="pr-[10px] " />
                    <div className="absolute w-[20px] text-[26px] font-bold tracking-[.20em] text-white bottom-16 translate-x-10 font-montserrat">ÍRIS VERÃO 2022</div>
                </div>
                <div className="relative">
                    <img src={image6} alt="modelo" className="pl-[10px]" />
                    <div className="absolute w-[120px] text-[26px] font-bold tracking-[.20em] text-white bottom-20 translate-x-8 font-montserrat">LE LIS BLANC</div>
                </div>
            </div>
        </div>
    )
}

export default GalleryImages;