import { useState } from "react";
import img from "/images/profile.png"
import { CgAsterisk } from "react-icons/cg";
import Button from "./Button";
const Profile = () => {

    const [imageSrc, setImageSrc] = useState<string>("");
    const [name, setName] = useState(null)

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        const fileName = event.target.files[0].name;
        if (file) {
            const url = URL.createObjectURL(file);
            setImageSrc(url);
            setName(fileName);
        }
    };

    return (
        <div className="flex">
            <div className="flex items-center w-[40%] h-auto shadow-xl p-10 bg-white m-5 rounded-lg">
                <img src={img} alt="" className="w-[50%] mx-auto" />
            </div>

            {/* form section  */}
            <div className="flex flex-col w-[60%] shadow-xl py-5 bg-white m-5 rounded-lg">
                <div className="px-5 mt-5">
                    <h1 className="text-3xl font-bold">Customize your links</h1>
                    <p className="text-sm">Add your details to create a personal touch to your profile.</p>
                </div>


                <div className="bg-[#f7f6f6] p-5 rounded-md mx-5">
                    <div className="flex items-center gap-3">
                        <p>Profile Picture</p>
                        {imageSrc && <img src={imageSrc} alt="Preview" className="w-[30%] rounded-xl" />}
                        {!imageSrc && <input type="file" accept="image/*" onChange={handleFileChange} />}
                        {imageSrc && <p>{name}</p>}
                    </div>
                </div>
                <div className="bg-[#f7f6f6] p-5 rounded-md mx-5 mt-5">
                    <div className="flex justify-between gap- items-center px-5 m-5 rounded-lg">
                        <label className="flex items-center whitespace-nowrap">First name <sup><CgAsterisk /></sup></label>
                        <input type="text" className="p-[6px] w-full lg:w-[480px] rounded-lg border-[1px] border-[#adadaf] focus:border-[#6440f3] focus:outline-none" />
                    </div>
                    <div className="flex justify-between items-center px-5 m-5 rounded-lg">
                        <label className="flex items-center whitespace-nowrap">Last name <sup><CgAsterisk /></sup></label>
                        <input type="text" className="p-[6px] w-full lg:w-[480px] rounded-lg border-[1px] border-[#adadaf] focus:border-[#6440f3] focus:outline-none" />
                    </div>
                    <div className="flex justify-between items-center px-5 m-5 rounded-lg">
                        <label className="flex items-center whitespace-nowrap">Email </label>
                        <input type="email" className="p-[6px] w-full lg:w-[480px] rounded-lg border-[1px] border-[#adadaf] focus:border-[#6440f3] focus:outline-none" />
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

export default Profile