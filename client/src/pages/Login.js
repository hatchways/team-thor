import { Box, Grid, Typography, TextField, Button } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useStyles from '../styles'
import { useForm } from 'react-hook-form'
import green from '@material-ui/core/colors/green'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'


const Login = () => {
    const classes = useStyles()

    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({
        defaultValues: { remember: false }
    })

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <Grid container item direction='column' xs={12} spacing={6}>
            <Grid item className={classes.inlineCenter} xs={12}>
                <Typography className={classes.formHeaderTitle}>Member login</Typography>
                <hr size="0.5" width="3%" color={green['A400']}></hr>
                <Box className={classes.formHeaderBody}>
                    <span>New here? </span>
                    <Link className={classes.formHeaderBodyLink} to='signup'>Sign Up</Link>
                </Box>
            </Grid>
            <Grid container item xs={12} alignItems="center" direction='column'>
                <form onSubmit={handleSubmit(onSubmit)} className={classes.formWidth}>
                    <Grid container item xs={12} alignItems="center" direction='column' spacing={3}>
                        <Grid container item xs={12} md={4}>
                            <TextField
                                fullWidth
                                autoComplete='Off'
                                label="Email address"
                                variant="outlined"
                                name='email'
                                {...register('email', {
                                    required: 'email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "Please enter a valid email address"
                                    }
                                })}
                                error={Boolean(errors.email)}
                                helperText={errors.email ? errors.email.message : null}
                            />
                        </Grid>
                        <Grid container item xs={12} md={4}>
                            <TextField
                                fullWidth
                                type='password'
                                label="Password"
                                variant="outlined"
                                name='password'
                                {...register('password', {
                                    required: 'password is required',
                                    minLength: { value: 6, message: 'password must be at least 6 characters'} })
                                }
                                error={Boolean(errors.password)}
                                helperText={errors.password ? errors.password.message : null}
                            />
                        </Grid>
                        <Grid container item xs={12} md={4}>
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        name='remember'
                                        {...register('remember')}
                                        // onChange={e => setRememberMe(e.target.checked)}
                                        // value={defaultValues.remember}
                                        onChange={e => {
                                            setValue('remember', e.target.checked)
                                        }}
                                    />
                                    }
                                    label="Remember me"
                                />
                            </FormGroup>
                        </Grid>
                        <Grid container item xs={12} md={2}>
                            <Button
                                type='submit'
                                fullWidth
                                variant='contained'
                                className={classes.submitBtn}
                                disableElevation

                                >
                                login
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default Login;
