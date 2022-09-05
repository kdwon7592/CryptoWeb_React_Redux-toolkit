import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../services/themeSlice";
import { Menu, Typography, Avatar, Button } from "antd"
import { Link } from "react-router-dom"
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons"
import icon from "../images/cryptocurrency.png"



const Navbar = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.darkMode);

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize])



    const menuItems = [
        {
            key: "",
            icon: <HomeOutlined />,
            label: <Link to="/">Home</Link>,
        },
        {
            key: "cryptocyrrencies",
            icon: <FundOutlined />,
            label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
        },
        {
            key: "news",
            icon: <BulbOutlined />,
            label: <Link to="/news">News</Link>,
        },
    ];

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">Crypto World</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </Button>
            </div>
            {activeMenu &&
                <Menu theme="dark" items={menuItems} >
                </Menu>
            }
            {/* <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button> */}
        </div>
    )
}

export default Navbar