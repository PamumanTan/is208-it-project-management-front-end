import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AdminSidebar, UserSidebar } from '~/components/Sidebar'
import userStore from '~/stores/userStore'

const UserLayout = () => {
    const user = userStore()
    const navigate = useNavigate()
    useEffect(() => {
        if (!(user && user.id)) {
            navigate('/login')
        }
    }, [])
    return (
        <div className="flex h-full w-full flex-row">
            <UserSidebar />
            <div className="h-full w-full px-5 pt-10">
                <Outlet />
            </div>
        </div>
    )
}

export default UserLayout
