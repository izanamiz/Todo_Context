import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [inputValues, setInputValues] = useState(initialState);
  const [isValid, setValid] = useState(false);
  const [selectLevel, setSelectLevel] = useState(initialState.level);
  console.log("inputValues: ", inputValues);
  console.log("selectLevel: ", selectLevel);
  const resetForm = () => {
    setInputValues(initialState);
    setValid(false);
  };

  const setForm = (newValues) => {
    setInputValues(newValues);
    setValid(true);
  };

  const handleInputChange = ({ target }) => {
    console.log("target input: ", target);
    console.log("input: ", target.value);
    console.log(isValid);
    if (target.value === "") {
      setValid(false);
    } else setValid(true);
    setInputValues({
      ...inputValues,
      [target.name]: target.value,
    });
  };
  const handleSelectLevel = ({ target }) => {
    console.log("target select: ", target.value);
    setSelectLevel(target.value);
    setInputValues({ ...inputValues, [target.level]: target.value });
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
