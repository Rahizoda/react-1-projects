import React from 'react';

const App = () => {

  function SimpleRefExample() {
    const inputRef = React.useRef(null);

    const focusInput = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    return (
      <div>
        <input style={{border:"none", }} ref={inputRef} type="text" placeholder="Click button" /> <br /> <br /><br /><br /><br /><br />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    );
  }

  return (
    <div>
      <SimpleRefExample />
    </div>
  );
}

export default App;

