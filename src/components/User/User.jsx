import {useParams} from "react-router-dom"
function User() {
    const {userId} = useParams();

    return (
        <div className="bg-orange-400 text-3xl py-3 text-black">User : {userId}</div>
    );
}

export default User;

