import React from 'react';
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

export default function Login() {
    return (
        <div>
            <Hero backgroundImage="https://cdn-images-1.medium.com/max/2600/1*CmjmgiI3Sr6oByNZ81pkhQ.jpeg">
                <h1>Welcome to Read@</h1>
                <h2>The social message board by young developers, for young developers.</h2>
            </Hero>
            <Container>
                <Row>
                    <Col>
                        <h1>We'll make this work eventually.</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <img alt ="" src="https://web.liferay.com/marketplace?p_p_id=7_WAR_osbportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=serveMedia&p_p_cacheability=cacheLevelPage&p_p_col_id=column-1&p_p_col_pos=2&p_p_col_count=3&_7_WAR_osbportlet_assetAttachmentId=81012587"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}