import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const MainStoragePage = () => {
    return (
        <Row
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Row>
                <Row
                    style={{
                        marginBottom: 10,
                    }}
                >
                    <Breadcrumb
                        items={[
                            {
                                title: (
                                    <>
                                        <HomeOutlined />
                                        <Link to="/">Домой</Link>
                                    </>
                                ),
                            },

                            {
                                title: "Главная (Склад)",
                            },
                        ]}
                    />
                </Row>
            </Row>

            <Row>
                <Col>
                    <Card
                        size="small"
                        title="Создать"
                        extra={<Link to="create">Перейти</Link>}
                        style={{ width: 300 }}
                    >
                        <p>Создание склада</p>
                    </Card>
                </Col>
                <Col>
                    <Card
                        size="small"
                        title="Общий список"
                        extra={<Link to="listStorage">Перейти</Link>}
                        style={{ width: 300 }}
                    >
                        <p>Склады</p>
                    </Card>
                </Col>
                <Col>
                    <Card
                        size="small"
                        title="Пополнение"
                        extra={<Link to="add-name-in-storage">Перейти</Link>}
                        style={{ width: 300 }}
                    >
                        <p>Добавить на склад</p>
                    </Card>
                </Col>
            </Row>
        </Row>
    );
};

export default MainStoragePage;