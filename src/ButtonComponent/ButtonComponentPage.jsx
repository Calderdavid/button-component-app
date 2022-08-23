import { Grid, Typography, Link, Button } from '@mui/material'
import React from 'react'

export const ButtonComponentPage = () => {

    const convertTxt = (txt) => {
        const convertString = txt;

        return convertString;
    }


    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={3} sx={{ml: 2}}>
                    <Grid container direction="column" sx={{mt: 2}}>
                        
                        <Typography variant="h5" sx={{mb: 12}} color="#F7542E">
                            Devchallenges.io
                        </Typography>

                        <Link href="#" sx={{mb: 6}} underline="none" color="#9E9E9E">Colors</Link>
                        <Link href="#" sx={{mb: 6}} underline="none" color="#9E9E9E">Typography</Link>
                        <Link href="#" sx={{mb: 6}} underline="none" color="#9E9E9E">Spaces</Link>
                        <Link href="#" sx={{mb: 6}} underline="none" color="#9E9E9E">Buttons</Link>
                        <Link href="#" sx={{mb: 6}} underline="none" color="#9E9E9E">Inputs</Link>
                        <Link href="#" sx={{mb: 6}} underline="none" color="#9E9E9E">Grid</Link>
                    </Grid>

                </Grid>

                <Grid item xs={8}>
                    
                    <Typography variant="h3" sx={{mb: 2}}>Buttons</Typography>

                    <Grid container direction="row" sx={{mt: 5}} justifyContent="space-between">
                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Button />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 1}}>
                                <Button variant="contained" sx={{color: '#3F3F3F', backgroundColor: '#E0E0E0'}}>Default</Button>
                            </Grid>
                        </Grid>      

                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('&:hover, &:focus')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 1}}>
                              <Button variant="contained" disabled sx={{color: '#3F3F3F', backgroundColor: '#AEAEAE'}}>Default</Button>                                
                            </Grid>
                        </Grid>   
           
                    </Grid>

                    <Grid container direction="row" sx={{mt: 5}} justifyContent="space-between">
                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Button variant=”outline” />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 1}}>
                                <Button variant="outlined" sx={{color: '#3D5AFE', borderColor: '#3D5AFE'}}>Default</Button>
                            </Grid>
                        </Grid>      

                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('&:hover, &:focus')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 1}}>
                              <Button variant="outlined" sx={{color: '#3D5AFE', borderColor: '#3D5AFE', backgroundColor: 'rgba(41, 98, 255, 0.1)'}}>Default</Button>                                
                            </Grid>
                        </Grid>   
           
                    </Grid>

                    <Grid container direction="row" sx={{mt: 5}} justifyContent="space-between">
                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Button variant=”outline” />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 1}}>
                                <Button variant="outlined" sx={{color: '#3D5AFE', borderColor: '#3D5AFE'}}>Default</Button>
                            </Grid>
                        </Grid>      

                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('&:hover, &:focus')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 1}}>
                              <Button variant="outlined" sx={{color: '#3D5AFE', borderColor: '#3D5AFE', backgroundColor: 'rgba(41, 98, 255, 0.1)'}}>Default</Button>                                
                            </Grid>
                        </Grid>   
           
                    </Grid>
                </Grid>
            </Grid>
        
        
        </>
    )
    }
