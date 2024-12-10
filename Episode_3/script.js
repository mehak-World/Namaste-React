import React from "react"
import ReactDOM from "react-dom/client"

const jsxHeading = <h1>This is a JSX heading</h1>


const SubHeading =  () => <h2>This is a subheading</h2>
const subsubHeading = <h4>This is a sub sub heading</h4>

// To insert any js code inside the react component, use {}
const HeadingComp = () => {
    return (
        <>

            <h1>This is a functional component</h1>
            <SubHeading />
            {subsubHeading}
            <p>This is a paragraph</p>
        </>    
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<HeadingComp />)