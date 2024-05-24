import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import userStore from '~/stores/userStore'

export default function HomePage() {
    const navigate = useNavigate()
    const user = userStore()
    if (!user.isLogin) {
        toast.error('Bạn cần đăng nhập trước khi thực hiện chức năng này !')
        navigate('/login')
    }
    return <div>Hi, {user.username}</div>
}
