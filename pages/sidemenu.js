import React from "react";
import Link from "next/link";

const SideMenu = ({ blogs }) => {
  return(<div className="w-1/4 p-4 dark:bg-gray-800 bg-gray-200 h-full">
    <p className="font-bold text-lg mb-4 dark:text-white">All Blogs</p>
    <ul className="space-y-2">
      {blogs?.map((blog) =>  
(

        <li key={blog.name}>
          <Link href={`/blogs/${blog.linkName}`} key={blog.name}>
            {blog.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>)
};

export default SideMenu;
