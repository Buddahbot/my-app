import React from "react";
import { Box, Typography } from "@material-ui/core";
import CustomizedButtons from "./CustomButton";

    export default function SectionN3() {
        return (
            <Box  sx={{display: "flex",
                flexDirection: "row",
                maxHeight: "400px",
                margin: "40px"}}>
                    <Box sx={{justifyContent:"center",
                        height: "400px",
                        display: "flex",
                        width: "50%"
                    }}>
                        <img src={require("./images/img_3.png")} style={{ maxHeight: "400px"}} />
                    </Box>
                    <Box sx={{
                        justifyContent:"center",
                        height: "400px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "50%"
                    }}>
                        <Typography variant="h4" gutterBottom component="div" style={{width: "60%"}}>
                            Designed and build by the latest code integration
                        </Typography>
                        <Typography variant="body1" gutterBottom style={{width: "60%"}}>
                           The rise of mobile devices transform the way we consume information
                           entirely and the world's most elevant channels as Facebook
                        </Typography>
                        <CustomizedButtons styly={{margin: "40px"}}></CustomizedButtons>
                    </Box>

            </Box>
        )

    }
    