// import cartImg from "../../assets/cart.png"
import logo from "../../assets/cart.png";
import mask from "../../assets/MaskGroup.png"

function Header() {
    return (
        <div className="flex bg-[#444444] h-[90px] items-center lg:justify-around justify-between">
            <div className="flex flex-row items-center">
                <img src={mask} alt="mask" className="max-h-7 flex items-center pr-2.5 pl-2.5" />
                <p className="text-white text-[26px] font-montserrat tracking-[.20em]">MCX</p>
            </div>
            <img src={logo} alt="Cart" className="max-h-14" />            
        </div>
    )
} 

export default Header;