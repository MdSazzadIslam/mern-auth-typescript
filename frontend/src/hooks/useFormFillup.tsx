import { useState } from "react";

export const useForm = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValue((values: any) => ({
      ...values,
      [name]: value,
    }));
  };

  const reset = () => {
    setValue("");
  };

  return [value, handleChange, reset];
};
