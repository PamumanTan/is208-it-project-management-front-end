import React, { useState } from 'react'
import Button from '@mui/material/Button'
import userStore from '~/stores/userStore'
import { useNavigate } from 'react-router-dom'
import { LogOutModal } from '../Modal/LogOutModal'
import { toast } from 'react-toastify'

const LogOutButton = () => {
    const { user, logout } = userStore()
    const navigate = useNavigate()
    const [openModal, setopenModal] = useState(false)
    const displayLogOutModal = () => {
        setopenModal(true)
    }
    const handleLogOut = () => {
        toast.success('Đăng xuất thành công!')
        logout()
        localStorage.removeItem('access-token')
        navigate('/login')
    }
    return (
        <>
            <div className="flex items-center justify-center">
                <Button variant="contained" onClick={() => setopenModal(true)}>
                    Đăng xuất
                </Button>
            </div>
            <div className="fixed">
                <LogOutModal
                    open={openModal}
                    onClose={() => setopenModal(false)}
                    onSubmit={handleLogOut}
                />
            </div>
        </>
    )
}

export default LogOutButton
