// This is provider for user Context :

import React, { useState } from "react";
import UserContext from "./UserContext";

// children:means whatever you are getting just pass it as it is 
const UserContextProvider=({children})=>{
 const [user,setUser]=useState(null)
    return(
        // wrapping 
        // We have to pass value  in here too
        <UserContext.Provider value={{user,setUser}}>   
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;