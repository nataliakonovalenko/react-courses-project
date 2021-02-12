import React from 'react';
import FirstHeader from "./components/FunctionalComponent";
import SecondHeader from "./components/ReactComponent";
import ThirdHeader from "./components/ReactPureComponent";

function App() {
  return (
      <div>
        <FirstHeader />
        <SecondHeader />
        <ThirdHeader />
        {React.createElement(
        'h1',
        {className: 'title'},
        'Hello World! 4'
        )}
      </div>
  );
}

export default App;
