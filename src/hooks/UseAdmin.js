import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmins] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect( () => {
        if(email){
            fetch(`https://resale-furniture-server-kappa.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                
                setIsAdmins(data.isAdmin);
                setIsAdminLoading(false);
            })
        }
    }, [email]);
    return [isAdmin, isAdminLoading];
}

export default useAdmin;