// 'use client'
// import { useRouter } from 'next/navigation';
// import React from 'react';

// const PrivateRoute = ({ children }) => {
//     const router = useRouter();
//     const userData = () => {
//         try {
//             const storderUser = JSON.parse(localStorage.getItem('auth'));
//             return storderUser?.data?.user
//         } catch (error) {

//         }
//     }
//     const user = userData();

//     if (user?.email) {
//         return children
//     } else {
//         return router.push('/login')
//     }


//     return (
//         <div>

//         </div>
//     );
// };

// export default PrivateRoute;