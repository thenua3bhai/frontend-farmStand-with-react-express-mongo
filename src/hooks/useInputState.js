import { useState } from "react";
function useInputState(initialVal) {
  const [state, setState] = useState(initialVal);
  const updateValuee = (e) => {
    setState(e.target.value);
  };
  const reset = () => {
    setState(initialVal);
  };

  const valuee = state;
  return [valuee, updateValuee, reset];
}

export default useInputState;
