import React, { useCallback, useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import _ from 'lodash'

const ForgotPasswordPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const handleBackToLogin = () => {
        navigate('/login')
    }
    const handleReset = () => {
        toast.success('Mật khẩu đã được đặt lại như mặc định.')
        setTimeout(() => {
            navigate('/login')
        }, 3200)
    }
    const handleChange = (e) => {
        const debouncedHandleChange = _.debounce((value) => {
            setEmail(value)
        }, 500)

        debouncedHandleChange(e.target.value)
    }
    return (
        <div className="flex flex-col items-center">
            <h1 className="my-14 text-4xl font-bold">Website Sổ Đầu Bài</h1>
            <div className="flex flex-col items-center rounded-lg bg-gray-100 p-10 shadow-xl">
                <h2 className="py-5 text-2xl font-semibold">Quên mật khẩu</h2>
                <div className="flex flex-col gap-7">
                    <TextField
                        id="filled-basic"
                        label="Email/Mã giáo viên"
                        variant="filled"
                        sx={{ m: 1, width: '40ch' }}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex w-full flex-row items-center gap-10 py-5">
                    <Button variant="text" onClick={handleBackToLogin}>
                        Quay lại đăng nhập
                    </Button>
                    <Button variant="contained" onClick={handleReset}>
                        Đặt lại mật khẩu
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage
