import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AdminSidebar } from '~/components/Sidebar'
import routing from '~/configs/routing'
import userStore from '~/stores/userStore'

export default function AdminLayout() {
    const user = userStore()
    const navigate = useNavigate()
    useEffect(() => {
        if (user.isLogin === false) {
            navigate(routing['admin-login'])
        }
    }, [])
    // console.log(user)
    return (
        <div className="flex h-full w-full flex-row">
            {user && user.isLogin && <AdminSidebar />}
            <Outlet />
        </div>
    )
}
