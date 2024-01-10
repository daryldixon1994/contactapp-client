import React, { useState } from "react";
import { Button, Form, Checkbox } from "semantic-ui-react";
import axios from "axios";
function Register() {
  const [showPass, setShowPass] = useState(false);
  const [registerData, setRegisterData] = useState({});
  const [message, setMessage] = useState("");
  const handleRegister = () => {
    axios
      .post(
        "https://contactapp-api-uas9.onrender.com/api/user/register",
        registerData
      )
      .then((res) => {
        console.log(res);
        setMessage("Usser was created successfully");
      })
      .catch((err) => {
        console.dir(err);
      });
  };
  return (
    <div className="md:px-[200px] md:py-[135px]">
      <Form
        size="large"
        className="border-2 border-slate-300 md:w-[60%] md:m-auto p-12 rounded-2xl"
        onChange={(e) => {
          setRegisterData({ ...registerData, [e.target.name]: e.target.value });
        }}
      >
        <h1>Register.</h1>
        <Form.Input type="text" name="userName" placeholder="Username" />
        <Form.Input type="email" name="email" placeholder="Email" />
        <Form.Input
          type={showPass ? "text" : "password"}
          name="password"
          placeholder="Password"
        />
        <Form.Field>
          <Checkbox
            label="Show password"
            onClick={() => {
              setShowPass(!showPass);
            }}
          />
        </Form.Field>
        <Button
          onClick={() => {
            handleRegister();
          }}
        >
          Register
        </Button>
      </Form>
      <h2 className="text-red font-bold">{message}</h2>
    </div>
  );
}

export default Register;
