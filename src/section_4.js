import React from 'react'
import { Typography, Box, Container} from '@material-ui/core'
import Grid from '@mui/material/Grid'
import "./App.css"

export default function SectionN4() {
  return (
    <Box>
        <Box sx={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <Typography variant="h4" gutterBottom component="div" style={{width: "40%", textAlign: "center"}}>
            Why you should choose our app
        </Typography>
        <Typography variant="body1" gutterBottom style={{width: "60%", textAlign: "center"}}>
                            The rise of mobile devices transform the way we consume information
                            entirely and the world's most elevant channels as Facebook
        </Typography>
        </Box>

        <Box style={{ margin: "40px"}}>
            <Grid container spacing={2}>
                <Grid item xs={4} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <img src={require("./images/icon_1.png")} style={{width: "128px"}} />
                        <Typography variant="h6" gutterBottom component="div" style={{ width: "60%", textAlign: "center"}}>
                            App Development
                        </Typography>
                         <Typography variant="body1" gutterBottom style={{width: "80%", textAlign: "center"}}>
                            Get your blood tests delivered at home collect a sample from the news your blood test
                         </Typography>
                </Grid>
                <Grid item xs={4} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <img src={require("./images/icon_2.png")} style={{width: "128px"}} />
                        <Typography variant="h6" gutterBottom component="div" style={{ width: "60%", textAlign: "center"}}>
                            10 Times Award
                        </Typography>
                         <Typography variant="body1" gutterBottom style={{width: "80%", textAlign: "center"}}>
                            Get your blood tests delivered at home collect a sample from the news your blood test
                         </Typography>
                </Grid>
                <Grid item xs={4} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <img src={require("./images/icon_3.png")} style={{width: "128px"}} />
                        <Typography variant="h6" gutterBottom component="div" style={{ width: "60%", textAlign: "center"}}>
                            Cloud Storage
                        </Typography>
                         <Typography variant="body1" gutterBottom style={{width: "80%", textAlign: "center"}}>
                            Get your blood tests delivered at home collect a sample from the news your blood test
                         </Typography>
                </Grid>
                <Grid item xs={4} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <img src={require("./images/icon_1.png")} style={{width: "128px"}} />
                        <Typography variant="h6" gutterBottom component="div" style={{ width: "60%", textAlign: "center"}}>
                            App Development
                        </Typography>
                         <Typography variant="body1" gutterBottom style={{width: "80%", textAlign: "center"}}>
                            Get your blood tests delivered at home collect a sample from the news your blood test
                         </Typography>
                </Grid>
                <Grid item xs={4} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <img src={require("./images/icon_2.png")} style={{width: "128px"}} />
                        <Typography variant="h6" gutterBottom component="div" style={{ width: "60%", textAlign: "center"}}>
                            10 Times Award
                        </Typography>
                         <Typography variant="body1" gutterBottom style={{width: "80%", textAlign: "center"}}>
                            Get your blood tests delivered at home collect a sample from the news your blood test
                         </Typography>
                </Grid>
                <Grid item xs={4} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <img src={require("./images/icon_3.png")} style={{width: "128px"}} />
                        <Typography variant="h6" gutterBottom component="div" style={{ width: "60%", textAlign: "center"}}>
                            Cloud Storage
                        </Typography>
                         <Typography variant="body1" gutterBottom style={{width: "80%", textAlign: "center"}}>
                            Get your blood tests delivered at home collect a sample from the news your blood test
                         </Typography>
                </Grid>
            </Grid>
        </Box>
    </Box>
  
  )
}
