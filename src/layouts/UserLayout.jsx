import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AdminSidebar, UserSidebar } from '~/components/Sidebar'
import userStore from '~/stores/userStore'

const UserLayout = () => {
    const user = userStore()
    const navigate = useNavigate()
    // console.log('user: ', user);
    if (!(user && user.id)) {
        navigate('/login')
    }
    return (
        <div className="flex h-full w-full flex-row">
            <UserSidebar />
            <Outlet />
        </div>
    )
}

export default UserLayout
