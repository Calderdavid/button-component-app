import { Grid, Typography, Link } from '@mui/material'
import React from 'react'

export const ButtonComponentPage = () => {


    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={3} sx={{ml: 2}}>
                    <Grid container direction="column" sx={{mt: 2}}>
                        <Typography variant="h5" sx={{mb: 2}} color="#F7542E">
                            Devchallenges.io
                            
                        </Typography>

                        <Link href="#" sx={{mb: 2}} underline="none" color="#9E9E9E">Colors</Link>
                        <Link href="#" sx={{mb: 2}} underline="none" color="#9E9E9E">Typography</Link>
                        <Link href="#" sx={{mb: 2}} underline="none" color="#9E9E9E">Spaces</Link>
                        <Link href="#" sx={{mb: 2}} underline="none" color="#9E9E9E">Buttons</Link>
                        <Link href="#" sx={{mb: 2}} underline="none" color="#9E9E9E">Inputs</Link>
                        <Link href="#" sx={{mb: 2}} underline="none" color="#9E9E9E">Grid</Link>
                    </Grid>

                </Grid>

                <Grid item xs={9}>

                </Grid>
            </Grid>
        
        
        </>
    )
    }
