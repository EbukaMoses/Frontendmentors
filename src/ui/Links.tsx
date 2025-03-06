import { FiLink, FiPlus } from "react-icons/fi"
import Button from "./Button"
import mobile from "/images/mobile.png"
import { HiEquals } from "react-icons/hi2"
import { FaFacebook, FaGithub } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"
import { useState } from "react"
const Links = () => {
    const [github, setGithub] = useState("false")
    return (
        <div className="flex">
            {/* image section  */}
            <div className="flex items-center w-[40%] h-auto shadow-xl p-10 bg-white m-5 rounded-lg">
                <img src={mobile} alt="" className="w-[50%] mx-auto" />
            </div>

            {/* form section  */}
            <div className="flex flex-col w-[60%] shadow-xl py-5 bg-white m-5 rounded-lg">
                <div className="px-5 mt-5">
                    <h1 className="text-3xl font-bold">Customize your links</h1>
                    <p className="text-sm">Add/edit/remove links below and then share all your profiles with the world!</p>
                    <Button title="Add new link" icon={<FiPlus />} className="text-[#6440f3] border-2 my-10 w-full border-[#6440f3] text-center bg-white font-semibold" />
                </div>

                <div className="bg-[#f7f6f6] p-5 rounded-md mx-5">
                    <div className="flex items-center justify-between">
                        <span className="flex items-center font-bold text-[#6a6a6a] text-sm mb-3">
                            <HiEquals />
                            Link #1
                        </span>
                        <span className="text-[12px] cursor-pointer">Remove</span>
                    </div>
                    <label htmlFor="" className="text-[12px] text-[#6a6a6a]">Platform</label>
                    <div className="flex items-center w-full p-[10px] rounded-lg shadow-md border-[1px] border-[#6a6a6a] mt-1 gap-1">
                        {github && <FaGithub className="text-[#6a6a6a]" />}
                        <FaFacebook className="text-[#6a6a6a]" />
                        <AiFillTwitterCircle className="text-[#6a6a6a]" />
                        <select name="" className="w-[100%] outline-none bg-transparent">
                            <option value="" className="text-[#6a6a6a]">---select---</option>
                            <option value="" className="text-[#6a6a6a]" onSelect={() => setGithub("true")}> GitHub</option>
                            <option value="" className="text-[#6a6a6a]"> Facebook</option>
                            <option value="" className="text-[#6a6a6a]"> Instagram</option>
                        </select>
                    </div>
                    <label htmlFor="" className="text-[12px] text-[#6a6a6a] mt-3">Platform</label>
                    <div className="flex items-center w-full p-[10px] rounded-lg shadow-md border-[1px] border-[#6a6a6a] mt-1 gap-1">
                        <FiLink />
                        <input type="text" className="w-[100%] outline-none bg-transparent" placeholder="add your link here" />
                    </div>
                </div>

                {/* second input section  */}
                <div className="bg-[#f7f6f6] p-5 rounded-md mt-5 mx-5">
                    <div className="flex items-center justify-between">
                        <span className="flex items-center font-bold text-[#6a6a6a] text-sm mb-3">
                            <HiEquals />
                            Link #1
                        </span>
                        <span className="text-[12px] cursor-pointer">Remove</span>
                    </div>
                    <label htmlFor="" className="text-[12px] text-[#6a6a6a]">Platform</label>
                    <div className="flex items-center w-full p-[10px] rounded-lg shadow-md border-[1px] border-[#6a6a6a] mt-1 gap-1">
                        {github && <FaGithub className="text-[#6a6a6a]" />}
                        {/* <FaFacebook className="text-[#6a6a6a]" />
                        <AiFillTwitterCircle className="text-[#6a6a6a]" /> */}
                        <select name="" className="w-[100%] outline-none bg-transparent">
                            <option value="" className="text-[#6a6a6a]">---select---</option>
                            <option value="" className="text-[#6a6a6a]" onSelect={() => setGithub("true")}> GitHub</option>
                            <option value="" className="text-[#6a6a6a]"> Facebook</option>
                            <option value="" className="text-[#6a6a6a]"> Instagram</option>
                        </select>
                    </div>
                    <label htmlFor="" className="text-[12px] text-[#6a6a6a] mt-3">Platform</label>
                    <div className="flex items-center w-full p-[10px] rounded-lg shadow-md border-[1px] border-[#6a6a6a] mt-1 gap-1">
                        <FiLink />
                        <input type="text" className="w-[100%] outline-none bg-transparent" placeholder="add your link here" />
                    </div>
                </div>
                <div className="my-5 h-[1.5px] w-full bg-[#8b8b8b]" />
                <div className="flex items-start justify-end px-5">
                    <Button title="Save" className="bg-[#6440f3] text-white" />
                </div>
            </div>
        </div>
    )
}

export default Links