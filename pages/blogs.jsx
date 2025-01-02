import React, { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useRouter } from 'next/navigation'

import { BlogsData } from "@/constants";
import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";
import SideMenu from "./sidemenu";
import AutoTypeSearch from "@/components/buttons/AutoTypeSearch";

const BlogsPage = () => {
  const router = useRouter()

  return (
    <Fragment>
      <Head>
        <title>Blogs</title>
      </Head>

      <Theme>


      <div class="flex items-center p-4">
      <BackTo backTo={""} />

  <div class="flex-1"></div>

  <div class="relative flex items-center w-1/2">
  <AutoTypeSearch
          placeholder={"Search..."}
          fetchSuggestion={BlogsData}
          dataKey={"name"}
          customLoading={<>Loading...</>}
          onSelect={(res)=>router.push(`/blogs/${res.linkName}`)}
          onChange = {(input)=>{}}
          onBlur = {(e)=>{}}
          onFocus = {(e)=>{}}
          customStyle = {{}}
        />
  </div>

  <div class="flex-1"></div>
</div>

       
        
        <div className="flex dark:bg-gray-700">
          <SideMenu blogs={BlogsData} />
          <div className="p-[5%] pt-[2%] dark:bg-gray-700 flex-1">
            <p className="font-bold text-2xl p-2 dark:text-white">Blogs</p>

            <div className="pb-5">
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
              >
                <Masonry>
                  {BlogsData.map((blog) => (
                    <div
                      className="dark:bg-gray-900 rounded-md border border-gray-400 border-solid m-2"
                      key={blog.name}
                    >
                      <Link href={`/blogs/${blog.linkName}`} key={blog.name}>
                        <div>
                          <Image
                            alt="img not found"
                            className="rounded-t-md"
                            height={250}
                            src={blog.imageUrl}
                            style={{ width: "100%" }}
                            width={400}
                          />
                          <div className="px-1 py-2  border-t border-solid border-gray-600 dark:border-white">
                            <div className="blogLink">{blog.name}</div>
                            <p className="dark:text-white text-[0.5rem] md:text-xs py-1 text-gray-600 text-center">
                              {blog.date}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default BlogsPage;
