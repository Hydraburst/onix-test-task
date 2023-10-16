import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onResetInput = () => {
    setValue("");
  };

  const onBlur = (e) => {
    setIsDirty(true);
  };
  return {
    value,
    onChange,
    onBlur,
    onResetInput,
  };
};
export default useInput;
