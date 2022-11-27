import { useEffect, useState } from "react"

const UseUser = email => {
    const [isUser, setIsUser] = useState(false);
    const [isUserLoading, setIsUserLoading] = useState(true);

    useEffect( () => {
        if(email){
            fetch(`https://resale-furniture-server-kappa.vercel.app/users/user/${email}`)
            .then(res => res.json())
            .then(data => {
                
                setIsUser(data?.isUser);
                setIsUserLoading(false);
                
            })
        }
    }, [email]);
    return [isUser, isUserLoading];
}

export default UseUser;