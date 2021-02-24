import React from 'react'
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { Row, Col } from 'reactstrap';
import Comment from '../Home/comment';
import axios from 'axios';

const AdminLogin = () => {
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

        var data = {
            "username": values.userName,
            "password": values.password,
        };
        axios.post("http://localhost:50305/api/Auth/test?username=" + data.username + "&password=" + data.password,{"Accept":"application/json"})
        .then(r => { 
            debugger;
            if(r.data.id!=0){
                alert('okey');
                console.log(r.data);
                localStorage.setItem('mail',r.data.mail);
                window.location.href='../home';
            }
            else{
                alert('nononononoo');
                console.log(r);
            }
             },err=>{console.log(err)})
        
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>

            <main className="home">
                <section className="container">


                    <section className="d-flex justify-content-center featured-posts-container">
                        <Card title="Lütfen giriş yapınız.." className=" " extra={<a href="#">More</a>}>
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
                                    name="userName"
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
                        </Card>

                    </section>




                </section>
            </main>
        </div>


    )

}

export default AdminLogin;
