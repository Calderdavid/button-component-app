import React from 'react'
import { Grid, Typography, Link, Button } from '@mui/material'


export const Layout = (props) => {

    const {variant, color, background, txt} = props;

    console.log(variant, color, background, txt);

    const convertTxt = (txt) => {
        const convertString = txt;

        return convertString;
    }


    return (
        <>
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
        </>
    )
}
