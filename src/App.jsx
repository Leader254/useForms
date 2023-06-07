import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css'

function App() {
  const schema = yup.object().shape({
    name: yup.string().required("Enter your name"),
    email: yup.string().email().required("Enter a valid email"),
    phone: yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Enter a valid phone number"
      ),
    address: yup.string().required("Enter a valid address"),
    password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password Must Be Strong"
    ),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "Passwords must match")
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

    const onSubmitHandler = () => {
        alert('SUCCESS!!🎈🔥');
        reset();
    }

  return (
    <>
      <h6>Sign Up For Your Delivery</h6>
      <form className="form-container" onSubmit={handleSubmit(onSubmitHandler)}>
        <input
          type="text"
          placeholder="Enter your name"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>
        <input
          type="text"
          placeholder="Enter your email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <input
          type="number"
          placeholder="Your phone number"
          {...register("phone")}
        />
        <p>{errors.phone?.message}</p>
        <input
          type="text"
          placeholder="Your delivery Address"
          {...register("address")}
        />
        <p>{errors.address?.message}</p>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
        <input type="submit" value="Submit" />
        <p>Already have an Account</p> 
      </form>
    </>
  );
}

export default App;
