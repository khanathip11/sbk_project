import React, { useState } from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    Avatar,
    Stack,
    Typography,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Paper,
    Tooltip,
    ListItemIcon
} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleIcon from "@mui/icons-material/People";
import ReportIcon from "@mui/icons-material/Report";
import DescriptionIcon from "@mui/icons-material/Description";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";

const Navbar = ({ collapsed, setCollapsed }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };

    const menuTopItems = [
        { text: "Overview", icon: <DashboardIcon /> },
        { text: "Dashboard", icon: <AssignmentIcon /> },
        { text: "Issue Management", icon: <AssignmentIcon /> },
        { text: "Report", icon: <ReportIcon /> },
        { text: "User Management", icon: <PeopleIcon /> },
    ];

    const menuBottomItems = [
        { text: "Documentation", icon: <DescriptionIcon /> },
        { text: "Help", icon: <HelpIcon /> },
        { text: "Setting", icon: <SettingsIcon /> }
    ];

    const [mode, setMode] = useState("auto");

    const handleChange = (newMode) => {
        setMode(newMode);
    };

    const themeOptions = [
        { mode: "auto", icon: <SettingsBrightnessIcon sx={{ fontSize: 18 }} />, label: "Auto" },
        { mode: "light", icon: <Brightness7Icon sx={{ fontSize: 18 }} />, label: "Light" },
        { mode: "dark", icon: <Brightness4Icon sx={{ fontSize: 18 }} />, label: "Dark" },
    ];

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%", // เต็ม Paper
                    width: collapsed ? "60px" : "100%",
                }}
            >
                <AppBar
                    position="static"
                    color="transparent"
                    sx={{ borderRadius: 2, backgroundColor: "white", mt: 1.5, ml: collapsed ? 0 : 0.5, height: '55px', width: '100%' }}
                >
                    <Toolbar sx={{ xs: 40, sm: 48, md: 56, px: 1 }}>
                        <Stack
                            direction="row"
                            alignItems="center"
                            sx={{
                                width: "100%",
                                gap: 1,
                                justifyContent: collapsed ? "center" : "flex-start", // ย่อ = center, ขยาย = start
                            }}
                        >
                            <Avatar
                                src="/logo.png"
                                alt="Logo"
                                sx={{ ml: 0, mt: collapsed ? '-8px' : '-7px', cursor: "pointer", width: '35px', height: '35px' }}
                                onClick={() => {
                                    if (collapsed) setCollapsed(false); // คลิก avatar ขยาย navbar
                                }}
                            />
                            {!collapsed && (
                                <>
                                    <Typography sx={{ mt: collapsed ? '-8px' : '-7px' }}>
                                        My App
                                    </Typography>

                                    <Box sx={{ flexGrow: 1 }} />
                                    <IconButton
                                        onClick={() => setCollapsed(true)} // คลิก arrow ย่อ navbar
                                        sx={{ "&:hover": { bgcolor: "transparent" }, ml: 1, mt: collapsed ? '-8px' : '-7px' }}
                                    >
                                        <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
                                    </IconButton>
                                </>
                            )}
                        </Stack>
                    </Toolbar>
                </AppBar>

                <List sx={{ p: 0, mt: 1 }}>
                    {menuTopItems.map((item, index) => (
                        <ListItem
                            button
                            key={item.text}
                            selected={selectedIndex === index}
                            onClick={() => handleListItemClick(index)}
                            sx={{
                                cursor: "pointer",
                                mb: 0,
                                bgcolor: "transparent",
                                borderRadius: 2,
                                "&.Mui-selected": {
                                    bgcolor: "white",
                                    borderRadius: 2,
                                    color: "primary.main",
                                    boxShadow: 3,
                                    "&:hover": { bgcolor: "grey.100" },
                                },
                                "&:hover": { bgcolor: "action.hover" },
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                            {!collapsed ? <ListItemText primary={item.text} /> : null}
                        </ListItem>
                    ))}
                </List>


                <Box sx={{ flexGrow: 1 }} />

                <List sx={{ p: 0, mt: 5 }}>
                    {menuBottomItems.map((item, index) => (
                        <ListItem
                            button
                            key={item.text}
                            selected={selectedIndex === index}
                            onClick={() => handleListItemClick(index)}
                            sx={{
                                cursor: "pointer",
                                mb: 0,
                                bgcolor: "transparent",
                                borderRadius: 2,
                                "&.Mui-selected": {
                                    bgcolor: "white",
                                    borderRadius: 2,
                                    color: "primary.main",
                                    boxShadow: 3,
                                    "&:hover": { bgcolor: "grey.100" },
                                },
                                "&:hover": { bgcolor: "action.hover" },
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                            {!collapsed ? <ListItemText primary={item.text} /> : null}
                        </ListItem>
                    ))}
                </List>

                {!collapsed && (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            p: 2,
                            pr: 0,
                            borderRadius: 2,
                            bgcolor: "transparent", // ไม่มีพื้นหลัง
                            width: '100%', // ปรับขนาด container ตามต้องการ
                        }}
                    >
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <SettingsBrightnessIcon />
                            <Typography>Theme</Typography>
                        </Stack>

                        <Stack direction="row" sx={{ backgroundColor: "#F2F2F2", borderRadius: 2, p: 0.1, mr: 0 }}>
                            {themeOptions.map((option) => (
                                <Tooltip title={option.label} key={option.mode}>
                                    <IconButton
                                        color={mode === option.mode ? "primary" : "default"}
                                        onClick={() => handleChange(option.mode)}
                                        sx={{
                                            display: "flex",
                                            justifyContent: 'flex-end',
                                            bgcolor: mode === option.mode ? "white" : "transparent",
                                            "&:hover": {
                                                bgcolor: mode === option.mode ? "primary.white" : "action.hover",
                                            },
                                            borderRadius: 2, // มุมโค้งสำหรับ icon ที่เลือก
                                        }}
                                    >
                                        {option.icon}
                                    </IconButton>
                                </Tooltip>
                            ))}
                        </Stack>
                    </Box>
                )}

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: collapsed ? "center" : "space-between", // ถ้าย่อ ให้ LogoutIcon อยู่ตรงกลาง
                        mb: 1,
                        mt: 1,
                        pb: 2
                    }}
                >
                    {!collapsed && (
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ ml: 2, mt: 0 }}>
                            <Avatar src="/logo.png" alt="Logo" sx={{ width: '35px', height: '35px' }} />
                            <Typography variant="h6" fontWeight="bold">Banana</Typography>
                        </Stack>
                    )}

                    <LogoutIcon
                        sx={{
                            fontSize: 30,
                            mr: 0.5,
                            p: 0.5,
                            cursor: "pointer",
                            color: "#ffffff",
                            bgcolor: "#38AEFF",
                            borderRadius: 1,
                            mt: 0
                        }}
                    />
                </Box>

            </Box >
        </>
    )
}

export default Navbar