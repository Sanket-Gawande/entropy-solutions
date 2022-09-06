import { createContext, useEffect, useState } from "react"


const BlogContext = createContext()
const BlogsProvider = ({ children }) => {

    const [blogsData, setBlogData] = useState([]);
    const [username, setUsername] = useState("Anonymous");

    const updateUserName = (tempUsername) => {
        localStorage.setItem("react-blogs-username", tempUsername);
        setUsername(tempUsername)
    }
    const updateBlogs = (blogs) => {
        setBlogData(blogs);
        localStorage.setItem("react-blogs-data", JSON.stringify(blogs))
    }
    useEffect(() => {
        setTimeout(() => {
            setBlogData(JSON.parse(localStorage.getItem("react-blogs-data")));
            setUsername((localStorage.getItem("react-blogs-username")))
        }, 1000)
    }, [])
    return (<BlogContext.Provider value={{ blogsData, updateBlogs, updateUserName, username }}>
        {children}
    </BlogContext.Provider>)
}


export default BlogContext
export { BlogsProvider }