import Head from "next/head";
import React, { Fragment, useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github, dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";
import { ThemeContext } from "@/context/themeContext";

const Sorting = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <Head>
        <title>History Operation</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h1 className="blog-heading">Sort with Number and alphabates</h1>

            <p className="mt-5">Used bubble sort</p>

            <Example1 myDark={theme === "dark"} />

            <p className="text-center my-3">
              🙏 Thank You, You are the most lucky 1 precenty
            </p>
          </div>

          <div className="layoutBox2">
            <div>
              <p className="text-center">😂</p>
              <p>
                Explanation:
                 Step 1: Temporary Storage (temp) var temp = arr[j];
                The current element (arr[j]) is stored in a temporary variable
                temp. This ensures that the value of arr[j] is not lost during
                the swap. Step 2: Move Next Element (arr[j + 1]) arr[j] = arr[j
                + 1]; The value of the next element (arr[j + 1]) is copied to
                the current element's position (arr[j]). Step 3: Assign
                Temporary Value (temp) arr[j + 1] = temp; The value stored in
                temp (original value of arr[j]) is assigned to the position of
                the next element (arr[j + 1]).
              </p>
            </div>
          </div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default Sorting;

const Example1 = ({ myDark }) => {
  const codeString = `  
 let arr = [
    {
      name: "John Doe",
      age: 17
    },
    {
      name: "Elon Doe",
      age: 27
    },
    {
      name: "Alex Doe",
      age: 14
    }
  ];

  function sort(arr) {
    //Selection sort
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < (arr.length - i - 1); j++) {
        // Checking if the item at present iteration 
        // is greater than the next iteration
        if (arr[j].name > arr[j + 1].name) {
           // If the condition is true
            // then swap them
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
          }
        }
    }
    return arr;
}

console.log(sort(arr))
`;

  return (
    <>
      <p className="my-2">Example</p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const Example2 = ({ myDark }) => {
  const codeString = `<React.Fragment>  
  <h2> child1 </h2>   
  <p> child2 </p>   
  .. ..... .... ...  
</React.Fragment>  `;

  return (
    <>
      <p className="my-2">Syntax</p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const Example3 = ({ myDark }) => {
  const codeString = `  // Rendering with fragments tag  
  class App extends React.Component {   
      render() {   
       return (   
         <React.Fragment>  
              <h2> Hello World! </h2>   
              <p> Welcome to the Sonika's Blog. </p>   
           </React.Fragment>  
       );   
      }   
  }`;

  return (
    <>
      <p className="my-2">Example</p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const Example4 = ({ myDark }) => {
  const codeString = `  //Rendering with short syntax   
  class Columns extends React.Component {   
    render() {   
      return (   
        <>    
          <h2> Hello World! </h2>   
          <p> Welcome to the Sonika's Blog </p>   
        </>   
      );   
    }   
  }`;

  return (
    <>
      <p className="my-2">Example</p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const Example5 = ({ myDark }) => {
  const codeString = `  Function  = (props) {  
    return (  
      <Fragment>  
        {props.items.data.map(item => (  
          // Without the 'key', React will give a key warning  
          <React.Fragment key={item.id}>  
            <h2>{item.name}</h2>  
            <p>{item.url}</p>  
            <p>{item.description}</p>  
          </React.Fragment>  
        ))}  
      </Fragment>  
    )  
  }  `;

  return (
    <>
      <p className="my-2">Example</p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};
