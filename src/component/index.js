import React, { Component } from 'react';
import logo from '../logo.svg';
import "antd/dist/antd.css";
import { Layout, Menu, Switch, Divider } from "antd";
import ContentComponent from './content'; 
import { TwitterOutlined, LinkedinOutlined } from "@ant-design/icons";

const { Header, Content, Sider, Footer } = Layout;


class Home extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Header className="header">
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={["0"]}
                            style={{ lineHeight: "64px", textAlign: "right" }}
                        >
                            <Menu.Item
                                key="1"
                                style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}
                            >About</Menu.Item>
                            <Menu.Item
                                key="2"
                                style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}
                            >Home</Menu.Item>
                            <Menu.Item
                                key="3"
                                style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}
                            >Contact</Menu.Item>
                        </Menu>
                    </Header>
                    <ContentComponent />
                    <Footer style={{
                                backgroundColor: "black",
                                color: "white",
                            }}>
                            <Divider type="horizontal" >
                                <a
                                    href={"https://twitter.com/windi_astri"}
                                    style={{ marginRight: 15 }}
                                >
                                    <TwitterOutlined style={{ fontSize: 25, color: "white" }} />
                                </a>
                                <a href="https://www.linkedin.com/in/windi-astri">
                                    <LinkedinOutlined style={{ fontSize: 25, color: "white" }} />
                                </a>
                            </Divider>
                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default (Home);