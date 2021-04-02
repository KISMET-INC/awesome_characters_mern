import React, { useRef } from 'react';





const Test = props => {
  const input = useRef();
 
  function focusInput() {
      input.current.focus();
  }

  return (
      <>
          <input ref={input}/>
          <button onClick={focusInput}>Focus Me!</button>
      </>
  );
}

export default Test;