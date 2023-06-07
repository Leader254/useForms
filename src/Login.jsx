import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import './App.css'

function App() {
  const schema = yup.object().shape({
    name: yup.string().required("Enter your name"),
    password: yup
  .string()
  .required('Please Enter your password')
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Password Must Be Strong"
  ),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

    const onSubmitHandler = (data) => {
        // display form data on submit
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        reset();
    }

  return (
    <div className='login'>
      <h6>Login Here</h6>
      <form className="form-container" onSubmit={handleSubmit(onSubmitHandler)}>
        <input
          type="text"
          placeholder="Enter your name"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
