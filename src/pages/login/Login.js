import { Form, Input, Button, message } from "antd";
import "./login.scss";
import React, { useState } from "react";
import Logo from "../../assets/logo/logo.png";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/auth_reducer";
import { POST } from "../../functions/Methods";

const Login = () => {
  const dispatch = useDispatch();
  const [wait, setWait] = useState(true);

  const onFinish = (e) => {
    setWait(false);

    // {login:"sdfg", password:"esdgfrew"}

    POST("/login-user", e)
      .then((res) => {
        if (res.status == "200") {
          dispatch(setUser(res.data.data));
          localStorage.setItem("token", res.data.data.token);
          message.success({ content: "Xush kelibsiz", key: e });
        }
      })
      .catch((e) => {
        return (
          message.error({ content: "Qayta uriib kuring❗", key: e }) &&
          setWait(true)
        );
      });
  };

  return (
    <div className={"login_wrapper"}>
      <Form className={"login_form"} name="basic" onFinish={onFinish}>
        <div className="login_logo">
          <img height="40" src={Logo} alt="logo" />
        </div>
        <Form.Item
          label="Login"
          name="login"
          rules={[{ required: true, message: "Loginni kiriting!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Parolni kiriting!" }]}
        >
          <Input.Password />
        </Form.Item>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            htmlType="submit"
            className={"action_btn main-btn"}
            loading={!wait}
          >
            Kirish
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
