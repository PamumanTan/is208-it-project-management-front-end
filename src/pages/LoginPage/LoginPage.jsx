import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import InputLabel from '@mui/material/InputLabel'
import FilledInput from '@mui/material/FilledInput'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'

const LoginPage = () => {
    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')
    const [showPassword, setshowPassword] = useState(false)
    const handleOnBlurUserName = (e) => {
        setuserName(e.target.value)
    }
    const handleOnBlurPassword = (value) => {
        setpassword(value)
    }
    const handleClickShowPassword = () => setshowPassword((show) => !show)
    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }
    return (
        <div className="flex flex-col items-center">
            <h1 className="my-14 text-4xl font-bold">Website Sổ Đầu Bài</h1>
            <div className="flex flex-col items-center rounded-lg bg-gray-100 p-10 shadow-xl">
                <h2 className="py-5 text-2xl font-semibold">Đăng Nhập</h2>
                <div className="flex flex-col gap-7">
                    <TextField
                        id="filled-basic"
                        label="Mã giáo viên"
                        variant="filled"
                        sx={{ m: 1, width: '35ch' }}
                        onBlur={handleOnBlurUserName}
                    />
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="filled">
                        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                        <FilledInput
                            id="filled-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <div className="flex w-full flex-row items-center justify-between py-5">
                    <Button variant="text">Quên mật khẩu ?</Button>
                    <Button variant="contained">Đăng nhập</Button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
