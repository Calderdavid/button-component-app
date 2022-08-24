import React from 'react'
import { Grid, Typography, Button, InputLabel, TextField, FormControl, Input, FormHelperText, InputAdornment, OutlinedInput } from '@mui/material'
import { Layout } from '../components/layout'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';


export const InputsPage = () => {

    const convertTxt = (txt) => {
        const convertString = txt;

        return convertString;
    }

    return (
        <>
            <Grid container spacing={0}>
                <Layout />

                <Grid item xs={8}>
                    
                    <Typography variant="h3" sx={{mb: 2}}>Inputs</Typography>

                    <Grid container direction="row" sx={{mt: 5}} justifyContent="space-between">
                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Input />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 3}}>
                                <InputLabel shrink htmlFor="bootstrap-input">Label</InputLabel>
                                <TextField id="outlined-basic" label="Placeholder" variant="outlined" />
                            </Grid>
                        </Grid>      

                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('&:hover')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 3}}>
                                <InputLabel shrink htmlFor="bootstrap-input">Label</InputLabel>
                                <TextField id="filled-basic" label="Placeholder" variant="filled" />                                
                            </Grid>
                        </Grid> 
                        
                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('&:focus')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 3}}>
                                <InputLabel shrink htmlFor="bootstrap-input">Label</InputLabel>
                                <TextField id="standard-basic" label="Placeholder" variant="standard" />                               
                            </Grid>
                        </Grid>                        
                    </Grid>

                    <Grid container direction="row" sx={{mt: 5}} justifyContent="space-between">
                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Input error />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 3}}>
                                <InputLabel shrink htmlFor="bootstrap-input">Label</InputLabel>
                                <TextField
                                    error
                                    id="outlined-error"
                                    label="Placeholder"
                                    defaultValue="Hello World"
                                />
                            </Grid>
                        </Grid>      

                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('&:hover')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 3}}>
                                <InputLabel shrink htmlFor="bootstrap-input">Label</InputLabel>
                                <TextField id="outlined-basic" label="Placeholder" variant="outlined" />                             
                            </Grid>
                        </Grid> 
                        
                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('&:focus')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 3}}>
                                <InputLabel shrink htmlFor="bootstrap-input">Label</InputLabel>
                                <TextField
                                    error
                                    id="outlined-error-helper-text"
                                    label="Error"
                                    defaultValue="Hello World"
                                    helperText="Incorrect entry."
                                />                               
                            </Grid>
                        </Grid>                        
                    </Grid>

                    <Grid container direction="row" sx={{mt: 5}} justifyContent="space-between">
                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Input disabled />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 3}}>
                                <FormControl disabled variant="standard">
                                    <InputLabel htmlFor="component-disabled">Name</InputLabel>
                                    <Input id="component-disabled" />
                                    <FormHelperText>Disabled</FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>      
                    </Grid>

                    <Grid container direction="row" sx={{mt: 5}} justifyContent="space-between">
                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Input helperText="Some interesting text" />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 3}}>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="component-helper">Name</InputLabel>
                                    <Input
                                    id="component-helper"
                                    aria-describedby="component-helper-text"
                                    />
                                    <FormHelperText id="component-helper-text">
                                    Some important helper text
                                    </FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>    

                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Input helperText="Some interesting text" error />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 3}}>
                                <FormControl error variant="standard">
                                    <InputLabel htmlFor="component-error">Name</InputLabel>
                                    <Input
                                    id="component-error"
                                    aria-describedby="component-error-text"
                                    />
                                    <FormHelperText id="component-error-text">Error</FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>     
                    </Grid>

                    <Grid container direction="row" sx={{mt: 5}} justifyContent="space-between">
                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Input startIcon />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 3}}>
                                <TextField
                                    label="With normal TextField"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, width: '25ch' }}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                                    }}
                                />

                            </Grid>
                        </Grid>    

                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Input endIcon />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 3}}>
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                    'aria-label': 'weight',
                                    }}
                                />
                            </Grid>
                        </Grid>     
                    </Grid>

                    <Grid container direction="row" sx={{mt: 5}} justifyContent="space-between">
                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Input value="text" />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 3}}>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Placeholder"
                                    multiline
                                    maxRows={4}
                                />
                            </Grid>
                        </Grid>        
                    </Grid>

                    <Grid container direction="row" sx={{mt: 5}} justifyContent="space-between">
                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Input size="sm" />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 3}}>
                                <TextField
                                    label="Size"
                                    id="outlined-size-small"
                                    defaultValue="Small"
                                    size="small"
                                />
                            </Grid>
                        </Grid>     

                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Input size="md" />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 3}}>
                                <TextField label="Placeholder" id="outlined-size-normal" defaultValue="Normal" />
                            </Grid>
                        </Grid>   
                    </Grid>

                    <Grid container direction="row" sx={{mt: 5}} justifyContent="space-between">
                        <Grid item>
                            <Grid item>
                                <Typography variant="p">
                                    {
                                        convertTxt('<Input fullWith />')
                                    }
                                </Typography>
                            </Grid>

                            <Grid item sx={{mt: 3}}>
                                <TextField fullWidth label="fullWidth" id="fullWidth" />
                            </Grid>
                        </Grid>      
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}
