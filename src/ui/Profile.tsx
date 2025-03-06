import img from "/images/profile.png"
const Profile = () => {
    return (
        <div className="flex">
            <div className="flex items-center w-[40%] h-auto shadow-xl p-10 bg-white m-5 rounded-lg">
                <img src={img} alt="" className="w-[50%] mx-auto" />
            </div>
        </div>
    )
}

export default Profile