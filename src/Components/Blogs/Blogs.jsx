import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "../Blog Card/BlogCard";

const Blogs = () => {


    const [blogs, setBlogs] = useState([])



    useEffect(() => {

        axios.get('Blogs.json')

        .then(res => setBlogs(res.data));

    },[])


    return (
        <>
            <div className="container mx-auto">
                <div className="mx-4">
                    <div className="lg:flex gap-6">
                        <div className="lg:flex-[3] grid grid-cols-1 md:grid-cols-2 gap-4">
                            {
                                blogs.map((blog, i) => <BlogCard key={i} blog={blog} ></BlogCard>)
                            }
                        </div>
                        <div className="lg:flex-[1]"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;