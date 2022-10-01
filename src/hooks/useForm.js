import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [inputValues, setInputValues] = useState(initialState);
  const [isValid, setValid] = useState(false);
  const [selectLevel, setSelectLevel] = useState(initialState.level);

  const resetForm = () => {
    setInputValues(initialState);
    setValid(false);
  };

  const setForm = (newValues) => {
    setInputValues(newValues);
    setSelectLevel(newValues.level);
    setValid(true);
  };

  const handleInputChange = ({ target }) => {
    if (target.value === "") {
      setValid(false);
    } else setValid(true);
    setInputValues({
      ...inputValues,
      [target.name]: target.value,
    });
  };
  const handleSelectLevel = ({ target }) => {
    setSelectLevel(target.value);
    setInputValues({ ...inputValues, [target.name]: target.value });
  };
  return {
    inputValues,
    handleInputChange,
    resetForm,
    setForm,
    isValid,
    selectLevel,
    handleSelectLevel,
  };
};
