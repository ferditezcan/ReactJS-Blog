import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';

const Comment=()=>{
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      };
      const onFinish = (values) => {
          var data={
            "title": values.username,
            "summary": "Adamın dibi",
            "status": 1,
            "content": values.password,
            "pictureUrl": "string",
             "createdAt": "2021-02-20T11:42:39.963Z",
            "updatedAt": "2021-02-20T11:42:39.963Z"
          };
          
          axios.post('http://localhost:5000/api/Posts/CreatePost',data).then(r=>{console.log('TAMAM AGA')})
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return(<div>
         <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
     
      <Form.Item {...tailLayout}>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>)

}

export default Comment;