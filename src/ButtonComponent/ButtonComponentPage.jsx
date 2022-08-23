import { Grid, Typography, Button, Link } from '@mui/material'
import React, {useState} from 'react'
import { Layout } from './components/layout'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export const ButtonComponentPage = () => {

    const convertTxt = (txt) => {
        const convertString = txt;

        return convertString;
    }

    const [isSelected, setIsSelected] = useState(false)

    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={2} sx={{ml: 2}}>
                    <Grid container direction="column" sx={{mt: 2}}>
                        
                        <Typography variant="h5" sx={{mb: 12}} color="#F7542E">
                            Devchallenges.io
                        </Typography>

                        <Link href="/Colors" sx={{mb: 6}} underline="none" color="#9E9E9E">Colors</Link>
                        <Link href="/Typography" sx={{mb: 6}} underline="none" color="#9E9E9E">Typography</Link>
                        <Link href="/Spaces" sx={{mb: 6}} underline="none" color="#9E9E9E">Spaces</Link>
                        <Link href="/Buttons" sx={{mb: 6}} underline="none" color="#9E9E9E">Buttons</Link>
                        <Link href="/Inputs" sx={{mb: 6}} underline="none" color="#9E9E9E">Inputs</Link>
                        <Link href="/Grid" sx={{mb: 6}} underline="none" color="#9E9E9E">Grid</Link>
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
                                        convertTxt('<Button variant="text" />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 1}}>
                                <Button variant="text" sx={{color: '#3D5AFE', borderColor: '#3D5AFE'}}>Default</Button>
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
                              <Button variant="outlined" sx={{color: '#3D5AFE', backgroundColor: 'rgba(41, 98, 255, 0.1)'}}>Default</Button>                                
                            </Grid>
                        </Grid>   
                    </Grid>
                    <Grid container direction="row" sx={{mt: 5}} justifyContent="space-between">
                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Button variant="text" />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 1}}>
                                <Button variant="contained" sx={{color: '#FFFFFF', borderColor: '#3D5AFE'}}>Default</Button>
                            </Grid>
                        </Grid>  
                    </Grid>

                    {/* <Layout 
                        variant1="text" 
                        color1="" 
                        background1="" 
                        txt1=""
                        variant2="outlined" 
                        color2="" 
                        background2="" 
                        txt2=""
                        isDisabled="false"
                    /> */}
                    <Grid container direction="row" sx={{mt: 5}} justifyContent="space-between">
                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Button disabled />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 1}}>
                                <Button variant="contained" disabled >Disabled</Button>
                            </Grid>
                        </Grid>      

                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Button variant="text" disabled />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 1}}>
                              <Button variant="text" disabled>Disabled</Button>                                
                            </Grid>
                        </Grid>   
                    </Grid>

                    <Grid container direction="row" sx={{mt: 5}} justifyContent="space-between">
                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Button startIcon="local_grocery_store" />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 1}}>
                                <Button startIcon={<LocalGroceryStoreIcon/>} variant="contained">Default</Button>
                            </Grid>
                        </Grid>      

                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Button variant="text" disabled />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 1}}>
                              <Button endIcon={<LocalGroceryStoreIcon/>} variant="contained">Disabled</Button>                                
                            </Grid>
                        </Grid>   
                    </Grid>

                    <Grid container direction="row" sx={{mt: 5}} justifyContent="space-between">
                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Button size="small" variant="contained"/>')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 1}}>
                                <Button size="small" variant="contained">Default</Button>
                            </Grid>
                        </Grid>      

                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Button size="medium" variant="contained" />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 1}}>
                              <Button size="medium" variant="contained">Disabled</Button>                                
                            </Grid>
                        </Grid>   
                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Button size="large" variant="contained" />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 1}}>
                              <Button size="large" variant="contained">Disabled</Button>                                
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" sx={{mt: 5}} justifyContent="space-between">
                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Button color="success" variant="contained"/>')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 1}}>
                                <Button color="success" variant="contained">Default</Button>
                            </Grid>
                        </Grid>      

                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Button color="primary" variant="contained" />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 1}}>
                              <Button color="primary" variant="contained">Disabled</Button>                                
                            </Grid>
                        </Grid>   
                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Button color="error" variant="contained" />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 1}}>
                              <Button color="error" variant="contained">Disabled</Button>                                
                            </Grid>
                        </Grid>
                    </Grid>


                </Grid>
            </Grid>
        </>
    )
    }
