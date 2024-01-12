// 'use client'
// import React, { createContext, useEffect, useState } from 'react';

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState({});
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const getUser = JSON.parse(localStorage.getItem('auth'));
//         if (getUser) {
//             setUser(getUser);
//             setLoading(false)
//         }
//     }, [])


//     const authInfo = { user, loading }


//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;