import { Input } from "@nextui-org/react";
import React, { useEffect } from "react";
import Button from "../Buttons/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthService } from "../../../services/auth"
import { useBoundStore } from "../../../store";
import { useNavigate } from "react-router-dom";

function AuthForm({ signup = false }) {
  const {addUser, user} = useBoundStore((state) => state)
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      ...(signup ? {name: ''}:{})
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter email"),
      password: Yup.string().required("Please enter password"),
      ...(signup ? {name: Yup.string().required("Please enter your name")}:{})
    }),
    onSubmit: async (values) => {
      const response = signup ? await AuthService.signup(values) : await AuthService.login(values);
      addUser(response.data.user)
      console.log("Response =>", response);
      localStorage.setItem('token', response.data.token);
      navigate('/')
    },
  });

  return (
    <form
      className="w-full flex flex-col gap-4 auth"
      onSubmit={formik.handleSubmit}
    >
      {signup && (
        <div>
        <Input
          type="text"
          size="lg"
          variant="bordered"
          label="Name"
          name="name"
          labelPlacement="outside"
          placeholder="Enter Your Name"
          radius="sm"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
         {formik.touched.name && formik.errors.name ? (
          <p className="text-[#f31260]">{formik.errors.name}</p>
        ) : null}
        </div>
      )}
      <div>
        <Input
          type="email"
          size="lg"
          variant="bordered"
          label="Email"
          labelPlacement="outside"
          placeholder="Enter Your Email"
          radius="sm"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="text-[#f31260]">{formik.errors.email}</p>
        ) : null}
      </div>
      <div>
        <Input
          type="password"
          size="lg"
          variant="bordered"
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="Enter Your Password"
          radius="sm"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="text-[#f31260]">{formik.errors.password}</p>
        ) : null}
      </div>
      <Button props={{ type: "submit" }}>{signup ? "Signup" : "Login"}</Button>
    </form>
  );
}

export default AuthForm;
