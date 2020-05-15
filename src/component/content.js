import React, { Component } from 'react';
import moment from 'moment';
import { Layout, Button, Row, Col, Card, Divider } from "antd";

// import Sider from 'antd/lib/layout/Sider';

const { Content , Sider, Footer} = Layout;

class ContentComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          time: moment().format("HH : mm : ss")
        };
    }
    
    componentDidMount = () => {
        this.timerID = setInterval(() => this.tick(), 1000);
    };
    
    tick() {
        this.setState({
            time: moment().format("HH : mm : ss")
        });
    }

    render() {
        let { time} = this.state;
        
        return (
            <Layout
                style={{
                    background: "#000000",
                    minHeight: "80vh",
                }}
            >
                <Sider style={{ marginTop: '20%', backgroundColor: "black"}}>
                    <div
                        style={{
                            color: "white",
                            justifyContent: "center",
                            alignItems: 'center'
                        }}
                    >
                        <p>{moment().format("dddd")}</p>
                        <p>{moment().format("YYYY")}</p>
                        <p>{moment().format("DD / MM")}</p>
                    </div>
                    <div
                        style={{
                            color: "white",
                        }}
                    >
                        <p>{time}</p>
                    </div>
                </Sider>
                <Content style={{justifyContent: "center", alignItems: 'center'}}>
                    <div style={{ padding: "20px" }}>
                        <Card
                            bordered={false}
                            style={{
                                backgroundColor: "black",
                                color: "white",
                                marginTop: '15%',
                            }}
                        >
                            <h1
                                style={{
                                    color: "white",
                                    fontWeight: "bold",
                                    textAlign: "start",
                                    fontSize: 40
                                }}
                            >Hi...</h1>
                            <div
                                style={{
                                    textAlign: "start",
                                    marginTop: "5%",
                                    fontSize: 30,
                                    fontWeight: "bold"
                                }}
                            >
                                <p>I am Windi</p>
                                <p>A Frontend Engineer</p>
                            </div>
                        </Card>
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default (ContentComponent);