import {
    DownOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, MenuProps } from "antd";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { LeftMenu } from "../../features";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { logout } from "../../shared/models";
const { Header, Sider, Content, Footer } = Layout;

const tabList = [
    {
        key: "askue",
        tab: "АСКУЭ",
    },
    {
        key: "water",
        tab: "Водоснабжение",
    },
    {
        key: "canal",
        tab: "Канализация",
    },
    {
        key: "otopl",
        tab: "Отопление",
    },
    {
        key: "nalad",
        tab: "Наладка",
    },
];

const LayoutPage = () => {
    const dispatch = useAppDispatch();
    const [collapsed, setCollapsed] = useState(false);
    const { email } = useAppSelector((store) => store.auth);
    const [activeTabKey1, setActiveTabKey1] = useState<string>("tab1");
    const onTab1Change = (key: string) => {
        setActiveTabKey1(key);
    };
    const toggleMenu = () => {
        setCollapsed(!collapsed);
    };
    const width = window.innerWidth;

    const items: MenuProps["items"] = [
        // {
        //     label: <a href="https://www.antgroup.com">1st menu item</a>,
        //     key: "0",
        // },
        // {
        //     label: <a href="https://www.aliyun.com">2nd menu item</a>,
        //     key: "1",
        // },
        {
            type: "divider",
        },
        {
            label: <Button onClick={() => dispatch(logout())}>Выход</Button>,
            key: "3",
        },
    ];

    return (
        <Layout>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                collapsedWidth={0}
                width={230}
                theme="light"
                style={{
                    minHeight: "100vh",
                    height: "100%",
                }}
            >
                <div style={{ margin: "10px" }}>
                    <div style={{ fontSize: 20, paddingTop: 10 }}>
                        <a style={{ textDecoration: "none", color: "black" }}>
                            ООО "ГК КРОН"
                        </a>
                    </div>
                </div>
                <LeftMenu />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-header"
                    style={{ padding: 0, background: "#fff" }}
                >
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: "trigger",
                            onClick: toggleMenu,
                        }
                    )}
                    <div style={{ float: "right" }}>
                        <Dropdown
                            menu={{ items }}
                            placement="bottomRight"
                            trigger={["click"]}
                        >
                            <Button
                                type="text"
                                className="ant-dropdown-link"
                                onClick={(e) => e.preventDefault()}
                            >
                                {email} <DownOutlined />
                            </Button>
                        </Dropdown>
                    </div>
                </Header>
                <Content
                    className="site-layout-content"
                    style={{
                        margin: "5px",
                        // padding: 24,
                        minHeight: 280,
                        display: !collapsed && width < 500 ? "none" : "block",
                    }}
                >
                    <Outlet />
                </Content>
                <Footer
                    style={{
                        textAlign: "center",
                        display: !collapsed && width < 500 ? "none" : "flex",
                    }}
                >
                    <p>
                        <a href="mailto:snab.pto@yandex.ru">
                            Задавайте вопросы по электронной почте
                        </a>
                    </p>
                </Footer>
            </Layout>
        </Layout>
    );
};

export default LayoutPage;
