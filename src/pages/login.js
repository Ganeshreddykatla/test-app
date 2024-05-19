import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import InputField from "@/Components/comman/Field";
import Button from "@/Components/comman/Button";
import { useRouter } from "next/router";
import FormSection from "@/Components/comman/FormSection";
import userDetails from "@/static/json/login";
import axios from "axios";

const Login = () => {
  let router = useRouter();
  return (
    <>
      <FormSection
        title="Login"
        renderElement={
          <div>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={Yup.object({
                password: Yup.string()
                  .max(20, "Must be 20 characters or less")
                  .required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
              })}
              onSubmit={async (values, { setSubmitting }) => {
                if(values.email === 'admin@nikhil.com' && values.password === 'Admin@123'){
                  router.push('/selection')
                }
              }}
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <div className="pb-4 md:pb-8">
                    <InputField
                      label="Email"
                      type="text"
                      name="email"
                      placeholder="example@gmail.com"
                      value={values.email}
                      onChange={(e) => setFieldValue("email", e.target.value)}
                      showError
                    />
                  </div>
                  <div className="pb-4 sm:pb-6">
                    <InputField
                      label="Password"
                      type="password"
                      name="password"
                      placeholder="*********"
                      value={values.password}
                      onChange={(e) =>
                        setFieldValue("password", e.target.value)
                      }
                      showError
                    />
                  </div>
                  <div className="pb-4 sm:pb-8">
                    <Button buttonTitle="Login" type="Submit" />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        }
      />
    </>
  );
};

export default Login;
