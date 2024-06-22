/**
 * TODO: Complete the code
 */

import useForm from "../hooks/useForm";

const App = () => {
  const { formState } = useForm({
    init: {
      name: "",
      email: "",
      password: "",
    },
  });
  return <div>Hello Form</div>;
};

export default App;
