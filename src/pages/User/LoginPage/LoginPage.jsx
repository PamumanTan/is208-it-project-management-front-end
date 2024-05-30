import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import InputLabel from '@mui/material/InputLabel'
import FilledInput from '@mui/material/FilledInput'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { clientInstance } from '~/services/axios'
import authAction from '~/services/axios/actions/auth.action'
import userStore from '~/stores/userStore'
import userAction from '~/services/axios/actions/user.action'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const LoginPage = () => {
    const navigate = useNavigate()
    const { user, login } = userStore()
    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')
    const [showPassword, setshowPassword] = useState(false)
    const handleOnChangeUserName = (e) => {
        setuserName(e.target.value)
    }
    const handleOnChangePassword = (e) => {
        setpassword(e.target.value)
    }
    const handleClickShowPassword = () => setshowPassword((show) => !show)
    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }
    const handleForgotPassword = () => navigate('/forgot-password')
    const handleLogin = async (e) => {
        e.preventDefault()
        if (userName.trim() === '' || password.trim() === '') {
            toast.error('Email/Password đang trống')
            return
        }
        if (!emailRegex.test(userName)) {
            toast.error('Email không hợp lệ')
            return
        }
        if (password.length < 8) {
            toast.error('Password tối thiểu 8 ký tự')
            return
        }
        try {
            const res = await toast.promise(authAction.loginUser(userName, password), {
                pending: 'Đang đăng nhập',
                success: 'Đăng nhập thành công',
                error: 'Đăng nhập thất bại',
            })
            if (res) {
                clientInstance.setAccessToken(res.accessToken)
                const resUserData = await userAction.getCurrentUser()
                login({
                    id: resUserData._id,
                    name: resUserData.teacherName,
                    email: resUserData.email,
                    isAdmin: resUserData.role === 'user' ? false : true,
                })
                navigate('/')
            }
        } catch (error) {}
    }
    useEffect(() => {
        if (user && user.id) {
            navigate('/')
        }
    }, [])
    return (
        <div className="flex flex-col items-center">
            <h1 className="my-14 text-4xl font-bold">Website Sổ Đầu Bài</h1>
            <div className="flex flex-col items-center rounded-lg bg-gray-100 p-10 shadow-xl">
                <h2 className="py-5 text-2xl font-semibold">Đăng Nhập</h2>
                <div className="flex flex-col gap-7">
                    <TextField
                        id="filled-basic"
                        label="Email/Mã giáo viên"
                        variant="filled"
                        sx={{ m: 1, width: '40ch' }}
                        onChange={handleOnChangeUserName}
                    />
                    <FormControl sx={{ m: 1, width: '40ch' }} variant="filled">
                        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                        <FilledInput
                            id="filled-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={handleOnChangePassword}
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
                    <Button variant="text" onClick={handleForgotPassword}>
                        Quên mật khẩu ?
                    </Button>
                    <Button variant="contained" onClick={handleLogin}>
                        Đăng nhập
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
