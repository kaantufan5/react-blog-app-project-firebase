// import React, { useState } from "react";
// import { useEffect } from "react";
// import { createContext } from "react";
// import { useFetch } from "../helpers/functions.js";

// export const BlogContext = createContext();

// const AuthContextProvider = ({ children }) => {
//   const [blogNumber, setBlogNumber] = useState(false);

//   useEffect(() => {
//     // setCurrentUser(JSON.parse(sessionStorage.getItem("user")));
//     useFetch(setBlogNumber);
//   }, []);

//   // export const useAuthContext = () => {
//   //   return useContext(AuthContext);
//   // };

//   return (
//     <BlogContext.Provider value={{ blogNumber }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export default BlogContextProvider;
