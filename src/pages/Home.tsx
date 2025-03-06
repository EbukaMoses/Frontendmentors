// import { BsLink } from "react-icons/bs"
import { CiLink } from "react-icons/ci"
import Button from "../ui/Button"
import { HiOutlineLink } from "react-icons/hi"
import { LuCircleUser } from "react-icons/lu"
import Links from "../ui/Links"
import { useState } from "react"
import Profile from "../ui/Profile"


const Home = () => {
    const [first, setfirst] = useState("1")

    return (
        <div className="bg-[#edebeb] pt-5">
            {/* nav section  */}
            <div className="flex justify-between mx-5   px-5 py-5 rounded-md bg-white ">

                {/* logo section  */}
                <span className="flex gap-2">
                    <CiLink className="text-white bg-[#6440f3] text-2xl rounded-xl w-10 font-bold" />
                    <span> devLinks</span>
                </span>
                <div className="flex gap-2">
                    <Button title="Links" icon={<HiOutlineLink />} event={() => setfirst("1")} className={`font-semibold ${first == "1" ? "text-[#6440f3] bg-[#bfb4ed]" : "text-[#424141]"}`} />
                    <Button title="Profile Details" icon={<LuCircleUser />} event={() => setfirst("2")} className={`font-semibold ${first == "2" ? "text-[#424141] " : "text-[#6440f3] bg-[#bfb4ed]"}`} />
                </div>
                <Button title="Preview" className="text-[#6440f3] border-2 border-[#6440f3] font-semibold" />
            </div>


            {/* link section  */}
            {first ? <Links /> : <Profile />}
        </div>
    )
}

export default Home