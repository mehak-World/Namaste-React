React.createElement() is not a good way to create React elements.
So, JSX is used. JSX is not a part of react. JSX is HTML-like syntax.

JSX makes our life easier.
In JSX, we merge HTML and JS together.

JSX is not pure javascript. That's why the browser does not understand the JSX code
It is the responsibility of babel to transpile the JSX into React element. React element will be converted to the JS object which will be rendered as an HTML element on the webpage.

Babel not only helps in transpilation of the JSX code. Some older browsers do not understand the newer ES6 code (newer JS version). So, babel converts it into a form that is easily understood by the older browsers also. So, babel is a js compiler.

Babel is another important package after Parcel. Parcel is like manager of Babel.

# Differences between JSX and HTML (JSX is just HTML-like syntax, not HTMLs)
JSX is not HTML
- U can't use class in JSX, must use className
- To give an attribute in JSX, always use camelCase
- If JSX code is in multiple lines, use () to surround the JSX code

# React Components
Everything is a component in react. There is a composition of react components.
There are two types of React Elements:
- Class-based components -> Uses JS classes
- Functional components -> mostly used

Functional component is a normal JS function that returns a piece of JSX



