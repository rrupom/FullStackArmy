import { useState } from "react";
import { deepClone, isObjEmpty } from "../utils/object-utils";

const useForm = ({ init, validate }) => {
  const [state, setState] = useState(mapValuesToState(init));

  const handleChange = (e) => {
    const { name: key, value, type } = e.target;
    const oldState = deepClone(state);

    if (type === "checkbox") {
      oldState[key].value = !oldState[key].value;
    } else {
      oldState[key].value = value;
    }

    const { errors } = getErrors(oldState);

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    setState(oldState);
  };

  const handleFocus = (e) => {
    const { name } = e.target;

    const oldState = deepClone(state);
    oldState[name].focused = true;

    if (!oldState[name].touched) {
      oldState[name].touched = true;
    }

    setState(oldState);
  };

  const handleBlur = (e) => {
    const { name: key } = e.target;

    const oldState = deepClone(state);
    const { errors } = getErrors(oldState);

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    oldState[key].focused = false;
    setState(oldState);
  };

  const handleSubmit = (e, cb) => {
    e.preventDefault();

    const oldState = deepClone(state);

    const { errors, hasError, values } = getErrors(oldState);

    cb({
      hasError,
      errors,
      values,
      touched: mapStateToKeys(state, "touched"),
      focused: mapStateToKeys(state, "focused"),
    });
  };

  const clear = () => {
    const newState = mapValuesToState(init, true);
    setState(newState);
  };

  const getErrors = (state) => {
    let hasError = null;
    let errors = null;

    const values = mapStateToKeys(state, "value");
    console.log("values", values);

    if (typeof validate === "boolean") {
      hasError = validate;
      errors = mapStateToKeys(state, "error");
      console.log("errors if", errors);
    } else if (typeof validate === "function") {
      const errorsFromCb = validate(values);
      console.log("errors from cb", errorsFromCb);
      hasError = !isObjEmpty(errorsFromCb);
      errors = errorsFromCb;
    } else {
      throw new Error("validate property must be boolean or function");
    }

    return {
      hasError,
      errors,
      values,
    };
  };

  return {
    formState: state,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    clear,
  };
};

export default useForm;

/**
 * helper function
 * create obj = {firstName: '',lastName: ''} to
 * {firstName: {value: '', error: '',focused:'',touched:''}}
 */
const mapValuesToState = (values, shouldClear = false) => {
  return Object.keys(values).reduce((acc, key) => {
    acc[key] = {
      value: shouldClear ? "" : values[key],
      error: "",
      focused: false,
      touched: false,
    };
    return acc;
  }, {});
};

/**
 * helper function
 * create object from {firstName: {value: '', error: '',focused:'',touched:''}}
 * to {firstName: '',lastName: ''}
 */
const mapStateToKeys = (state, key) => {
  return Object.keys(state).reduce((acc, cur) => {
    acc[cur] = state[cur][key];
    return acc;
  }, {});
};
