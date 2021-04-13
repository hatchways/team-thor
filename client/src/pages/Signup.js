import { Box, Grid, Typography, TextField, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useStyles from '../styles'
import green from '@material-ui/core/colors/green'
import { useForm } from 'react-hook-form'

const Register = () => {
    const classes = useStyles()
    const { register, handleSubmit, formState: { errors }, watch } = useForm()

    const password = watch('password')

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <Grid container item direction='column' xs={12} spacing={6}>
            <Grid item className={classes.inlineCenter} xs={12}>
                <Typography className={classes.formHeaderTitle}>Create an account</Typography>
                <hr size="0.5" width="3%" color={green['A400']}></hr>
                <Box className={classes.formHeaderBody}>
                    <span>Already a member? </span>
                    <Link className={classes.formHeaderBodyLink} to='login'>Login</Link>
                </Box>
            </Grid>
            <Grid container item xs={12} alignItems="center" direction='column'>
                <form onSubmit={handleSubmit(onSubmit)} className={classes.formWidth}>
                    <Grid container item xs={12} alignItems="center" direction='column' spacing={3}>
                        <Grid container item xs={12} md={4}>
                            <TextField
                                fullWidth
                                autoComplete='off'
                                label="Name"
                                variant="outlined"
                                name='name'
                                {...register('name', { required: 'name is required' })}
                                error={Boolean(errors.name)}
                                helperText={errors.name ? errors.name.message : null}

                            />
                        </Grid>
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
                            <TextField
                                fullWidth
                                type='password'
                                label="Confirm Password"
                                variant="outlined"
                                name='confirm password'
                                {...register('confirmPassword', {
                                    required: 'Confirm Password is required',
                                    validate: value => {
                                        return value === password || 'The passwords do not match'
                                    }})
                                }
                                error={Boolean(errors.confirmPassword)}
                                helperText={errors.confirmPassword ? errors.confirmPassword.message : null}
                            />
                        </Grid>
                        <Grid container item xs={12} md={2}>
                            <Button
                                type='submit'
                                fullWidth
                                variant='contained'
                                className={classes.submitBtn}
                                disableElevation

                                >
                                create account
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default Register