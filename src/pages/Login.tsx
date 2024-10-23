import React, { useState } from "react";
import "../assets/login.css";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { IReducers } from "../redux/store.ts";
import { CredentitalType, loginAction } from "../redux/actions/auth.action.ts";

const Login: React.FC = () => {
  const onFinish = (values: CredentitalType) => {
    dispatch(loginAction(values));
  };

  const { user, loading } = useSelector((reducer: IReducers) => reducer.auth);

  console.log(user, "user");
  console.log(loading, "loading");
  const dispatch: any = useDispatch();

  return (
    <div className="container">
      <Form
        name="login"
        className="form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Flex>
        </Form.Item>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <Spin></Spin>
          </div>
        ) : (
          ""
        )}
      </Form>
    </div>
  );
};

export default Login;
