import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import CardWrapper from '../components/CardWrapper.jsx';
import ResultCard from '../components/ResultCard.jsx';
import MapBox from '../components/MapBox.jsx';
import { Box, Paper, } from "@mui/material";
import PerfectScrollbar from 'react-perfect-scrollbar';

import 'react-perfect-scrollbar/dist/css/styles.css';

const Home = () => {
    const [collapsed, setCollapsed] = useState(false);

    const cardsData = [
        {
            id: 1,
            issue: "ปัญหายาเสพติด 15",
            status: "ระบบรับข้อมูลแล้ว",
            imageSrc: "/images/1.jpg",
            bgColor: "#F0F0F0",
            color: "#616161",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "ประชาชนแจ้งปัญหายาเสพติดผ่านช่องทางออนไลน์"
        },
        {
            id: 2,
            issue: "ความปลอดภัยในชีวิตและทรัพย์สิน 12",
            status: "เจ้าหน้าที่ตรวจสอบ",
            imageSrc: "/images/2.jpg",
            bgColor: "#E3F2FD",
            color: "#1976D2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "ประชาชนแจ้งเหตุอาชญากรรมและภัยคุกคามชีวิต"
        },
        {
            id: 3,
            issue: "ความมั่นคงพื้นที่ชายแดน 10",
            status: "ส่งต่อให้หน่วยงาน",
            imageSrc: "/images/3.jpg",
            bgColor: "#FFF3E0",
            color: "#F57C00",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "ประชาชนแจ้งเรื่องความมั่นคงตามแนวชายแดน"
        },
        {
            id: 4,
            issue: "ความมั่นคงพื้นที่ชายแดน จชต. 8",
            status: "หน่วยงานกำลังดำเนินการ",
            imageSrc: "/images/4.jpg",
            bgColor: "#E8F5E9",
            color: "#388E3C",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "รายงานเหตุการณ์ความมั่นคงในพื้นที่จังหวัดชายแดนใต้"
        },
        {
            id: 5,
            issue: "การก่อการร้ายและก่ออาชญากรรมข้ามชาติ 7",
            status: "ดำเนินการเสร็จสิ้น",
            imageSrc: "/images/5.jpg",
            bgColor: "#F1F8E9",
            color: "#558B2F",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "ประชาชนแจ้งเหตุการณ์ก่อการร้ายและอาชญากรรมข้ามชาติ"
        },
        {
            id: 6,
            issue: "การค้ามนุษย์ 6",
            status: "ไม่สามารถดำเนินการได้",
            imageSrc: "/images/6.jpg",
            bgColor: "#FFEBEE",
            color: "#C62828",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "รายงานเหตุการณ์การค้ามนุษย์ในพื้นที่ต่างๆ"
        },
        {
            id: 7,
            issue: "แรงงานต่างด้าว 6",
            status: "ระบบรับข้อมูลแล้ว",
            imageSrc: "/images/7.jpg",
            bgColor: "#ECEFF1",
            color: "#455A64",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "ประชาชนแจ้งปัญหาแรงงานต่างด้าวในพื้นที่"
        },
        {
            id: 8,
            issue: "การละเมิดสถาบันหลักของชาติ 5",
            status: "เจ้าหน้าที่ตรวจสอบ",
            imageSrc: "/images/8.jpg",
            bgColor: "#E3F2FD",
            color: "#1976D2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "รายงานการละเมิดสถาบันหลักของชาติ"
        },
        {
            id: 9,
            issue: "อุทกภัย 5",
            status: "ส่งต่อให้หน่วยงาน",
            imageSrc: "/images/9.jpg",
            bgColor: "#FFF3E0",
            color: "#F57C00",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "แจ้งสถานการณ์อุทกภัยในพื้นที่ต่างๆ"
        },
        {
            id: 10,
            issue: "อัคคีภัย 3",
            status: "หน่วยงานกำลังดำเนินการ",
            imageSrc: "/images/10.jpg",
            bgColor: "#E8F5E9",
            color: "#388E3C",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "แจ้งเหตุอัคคีภัยและสถานการณ์ไฟไหม้"
        },
        {
            id: 11,
            issue: "ธรรมชาติและสิ่งแวดล้อม 3",
            status: "ดำเนินการเสร็จสิ้น",
            imageSrc: "/images/11.jpg",
            bgColor: "#F1F8E9",
            color: "#558B2F",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "แจ้งปัญหาธรรมชาติและสิ่งแวดล้อม"
        },
    ];

    const statusList = [
        { id: 1, status: "ระบบรับข้อมูลแล้ว", borderL: '3px solid red' },
        { id: 2, status: "เจ้าหน้าที่ตรวจสอบ", borderL: '3px solid yellow' },
        { id: 3, status: "ส่งต่อให้หน่วยงาน", borderL: '3px solid pink' },
        { id: 4, status: "หน่วยงานกำลังดำเนินการ", borderL: '3px solid blue' },
        { id: 5, status: "ดำเนินการเสร็จสิ้น", borderL: '3px solid green' },
        { id: 6, status: "ไม่สามารถดำเนินการได้", borderL: '3px solid purple' },
    ]

    return (
        <Box
            display="flex"
            sx={{
                // width: '100vw',
                height: "100vh",
                bgcolor: "grey.50",
                px: 2,
                py: 2,
                gap: 2,
            }}
        >
            <Paper
                sx={{
                    flex: collapsed ? "0 0 6.6%" : "0 0 20%",
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 1.5,
                    pt: 0,
                    boxShadow: 3,
                    borderRadius: 4,
                    transition: "flex 0.3s",
                    overflowY: "scroll", // ✅ แสดง scroll ตลอดเวลา
                    "&::-webkit-scrollbar": {
                        width: "6px",
                    },
                }}
            >
                <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
            </Paper>

            <Paper
                sx={{
                    flex: collapsed ? "0 0 63.7%" : "0 0 50%",
                    // p: 2,
                    boxShadow: 3,
                    borderRadius: 4,
                }}
            >
                <MapBox statusList={statusList} collapsed={collapsed} />
            </Paper>

            <Paper
                sx={{
                    flex: "0 0 27.5%",
                    p: 2,
                    boxShadow: 3,
                    borderRadius: 4,
                    overflowY: "scroll", // ✅ แสดง scroll ตลอดเวลา
                    "&::-webkit-scrollbar": {
                        width: "6px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "none",
                        borderRadius: "4px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "none",
                    },
                }}
            >
                {/* Card Result อันบน */}
                <ResultCard count={120} imgSrc="/images/thailand.jpg" />

                {/* Cards loop */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                    {cardsData.map((card) => (
                        <CardWrapper key={card.id} height="100px" status={card.status} issue={card.issue} color={card.color} bgColor={card.bgColor} text={card.text} desc={card.desc} />
                    ))}
                </Box>
            </Paper>
        </Box >
    );
}

export default Home