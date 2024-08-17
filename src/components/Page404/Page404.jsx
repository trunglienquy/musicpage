import { useNavigate} from "react-router-dom";
function Page404() {
    const navigate = useNavigate()
    return(
        <div className="text-white flex justify-center items-center flex-col absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y--1/2 font-matemasie">
            <h1 className="text-[300px]">404</h1>
            <p className="text-[50px] mb-[50px]">Not Page Found</p>
            <button className="w-[300px] h-[40px] bg-white text-black font-poppins" onClick={() => navigate("/")}>Back.</button>
        </div>
    )
}

export default Page404