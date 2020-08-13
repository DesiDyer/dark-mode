import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValues) => {
  const [values, setValues] = useLocalStorage("darkmode", initialValues);

  return [values, setValues];
};
