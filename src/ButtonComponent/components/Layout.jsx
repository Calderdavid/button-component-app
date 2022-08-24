import React from 'react'
import { Grid, Typography, Link } from '@mui/material'


export const Layout = () => {


    return (
        <>
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
        </>
    )
}
