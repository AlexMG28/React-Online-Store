import React from 'react'
// import { Link } from 'react-router-dom'
import { Menu, Layout } from 'antd'
import './headerBlock.css'
import logo from '../logo.png'

const { Header } = Layout

class HeaderBlock extends React.Component {
    render() {
        return (
            <Header className="header">
                {/* <div className="logo" > */}
                    <img className="logo" src={logo} alt="logo"/>
                {/* </div> */}
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">Каталог</Menu.Item>
                    <Menu.Item key="2">Корзина</Menu.Item>
                    <Menu.Item key="3">Логин</Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default HeaderBlock