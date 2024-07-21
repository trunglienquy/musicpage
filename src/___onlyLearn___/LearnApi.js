import { useEffect } from "react";
import { listUser } from "../services/UserServices";


function Learn() {

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async() => {
        let res = await listUser()
        console.log(res);
    }

    return (
        <>
            <h1 style={{ color: 'white' }}>Hello</h1>
        </>
    );
}

export default Learn