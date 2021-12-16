import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [Ploach, setPloach] = useState(false);
  const [response, setResponse] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setError(validateForm(form));
  };

  return {
    form,
    error,
    response,
    loading,
    Ploach,
    setPloach,
    handleChange,
    handleBlur,
    setError,
    setLoading,
    setResponse,
    setForm,
  };
};
