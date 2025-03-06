import { BsGithub } from "react-icons/bs";
import Button from "../ui/Button"
import { IoArrowForward } from "react-icons/io5";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import ebuka from "/images/Ebuka.jpg"

const Preview = () => {
    const handleShare = async (link: any) => {
        if (navigator.share) {
            navigator.share({
                title: 'WebShare API Demo',
                url: link,
            }).then(() => {
                console.log('Thanks for sharing!');
            })
                .catch(console.error);
        } else {
            // fallback
        }
    };
    return (
        <div>
            <div className="bg-[#6440f3] p-5 h-[50vh] rounded-br-[4rem] rounded-bl-[4rem]">
                <div className="flex justify-between mx-5   px-5 py-5 rounded-md bg-white ">
                    <Button title="Back to Editor" className="text-[#6440f3] border-2 border-[#6440f3] font-semibold" path="/" />
                    <Button title="Share Link" onClick={handleShare("ebuka.com")} className="text-white bg-[#6440f3] font-semibold" />
                </div>
            </div>
            <div className="flex items-center justify-center mb-48 -mt-32">
                <div className="flex flex-col items-center w-[25%] p-10 shadow-xl bg-white rounded-2xl">
                    <img src={ebuka} alt="" className="w-[35%] rounded-full border-4 border-purple-700" />
                    <h1 className="text-3xl mt-2 font-bold">Ebuka Moses</h1>
                    <p className="text-[12px]">ebukamoses060@gmail.com</p>
                    <div className="flex items-center justify-between w-full bg-black mt-28 text-white mx-24 px-4 py-3 rounded-lg cursor-pointer">
                        <span className="flex items-center gap-2">
                            <BsGithub /> Github
                        </span>
                        <IoArrowForward />
                    </div>
                    <div className="flex items-center justify-between w-full bg-red-600 mt-5 text-white px-4 py-3 rounded-lg cursor-pointer">
                        <span className="flex items-center gap-2">
                            <FaYoutube /> Youtube
                        </span>
                        <IoArrowForward />
                    </div>
                    <div className="flex items-center justify-between w-full bg-blue-600 mt-5 text-white px-4 py-3 rounded-lg cursor-pointer">
                        <span className="flex items-center gap-2">
                            <FaLinkedin /> LinkedIn
                        </span>
                        <IoArrowForward />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview