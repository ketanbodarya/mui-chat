import React from 'react';
import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import AntSwitch from '../../components/AntSwitch';
import useSettings from "../../hooks/useSettings";
import { useState } from "react";

const SideBar = () => {
    const theme = useTheme();

    const [selected, setSelected] = useState(0);

    const { onToggleMode } = useSettings();


    return (
        <Box p={2} sx={{ backgrougColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", height: "100vh", width: 100 }}>

            <Stack direction={"column"} alignItems="center" justifyContent={"space-between"} sx={{ height: "100%" }} spacing={3}>

                <Stack alignItems={"center"} spacing={4}>
                    <Box sx={{
                        backgroundColor: theme.palette.primary.main,
                        height: 64,
                        width: 64,
                        borderRadius: 1.5
                    }}>

                        <img src={Logo} alt={"Chat app logo"} />

                    </Box>

                    <Stack sx={{ width: "max-content" }} direction="column" alignItems="center" spacing={3}>
                        {Nav_Buttons.map((el, idx) =>

                            el.index === selected ? (
                                <Box key={idx} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                                    <IconButton sx={{ width: 'max-content', color: "#fff" }} key={el.index}>
                                        {el.icon}
                                    </IconButton>
                                </Box>
                            ) : (
                                <IconButton sx={{ width: 'max-content', color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }} key={el.index} onClick={() => setSelected(el.index)}>
                                    {el.icon}
                                </IconButton>
                            )

                        )}

                        <Divider width={48} />

                        {
                            selected === 3 ? (
                                <Box sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                                    <IconButton sx={{ width: 'max-content', color: "#fff" }}>
                                        <Gear />
                                    </IconButton>
                                </Box>
                            ) : (
                                <IconButton sx={{ width: 'max-content', color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }} onClick={() => setSelected(3)}>
                                    <Gear />
                                </IconButton>
                            )
                        }


                    </Stack>
                </Stack>

                <Stack spacing={4}>
                    <AntSwitch onChange={() => {
                        onToggleMode();
                    }} defaultChecked />
                    <Avatar src={faker.image.avatar()} />
                </Stack>

            </Stack>

        </Box>
    )
}

export default SideBar