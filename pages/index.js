import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TodoMainComponent from "../components/TodoMain"
import {Form, Input, Space, Row, Col, Button} from 'antd';

export default function Home() {
  return (

        <Row className={styles.container} >
            <Col span={8}>col-8</Col>
            <Col span={8}  >
                <TodoMainComponent />
            </Col>
            <Col span={8}>col-8</Col>
        </Row>


  )
}
