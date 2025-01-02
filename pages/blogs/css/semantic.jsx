import Head from "next/head";
import React, { Fragment, useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github, dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";
import { ThemeContext } from "@/context/themeContext";

const Semantic = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <Head>
        <title>Semantic HTML</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h1 className="blog-heading">Semantic HTML</h1>

            <p className="mt-5">
              Semantic HTML is a practice that uses HTML tags to convey the
              meaning of content on a web page, rather than just how it looks.
              It's important for web accessibility and SEO because it helps
              search engines and assistive devices understand the content of a
              webpage.
              Semantic HTML refers to using HTML elements according to their intended meaning rather than just their visual appearance
              
              For instance, using header, nav, section, article, and footer elements clearly defines the structure of a webpage.
            </p>

          </div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default Semantic;


