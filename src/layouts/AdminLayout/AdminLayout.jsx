import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AdminSidebar } from '~/components/Sidebar'
import routing from '~/configs/routing'
import userStore from '~/stores/userStore'
import userAction from '~/services/axios/actions/user.action'
import { clientInstance } from '~/services/axios'

export default function AdminLayout() {
    const { user, login } = userStore()
    const navigate = useNavigate()
    useEffect(() => {
        const checkLoginToken = async () => {
            if (clientInstance.getAccessToken()) {
                const resUserData = await userAction.getCurrentUser()
                if (resUserData.role === 'admin') {
                    login({
                        id: resUserData._id,
                        name: resUserData.teacherName,
                        email: resUserData.email,
                        isAdmin: true,
                    })
                    navigate(routing['manage-account'])
                } else {
                    navigate(routing['admin-login'])
                }
            } else {
                navigate(routing['admin-login'])
            }
        }
        checkLoginToken()
    }, [])
    // console.log(user)
    return (
        <div className="flex h-full w-full flex-row ">
            <AdminSidebar />
            <div className="h-full w-full px-5 pt-10">
                <Outlet />
            </div>
        </div>
    )
}
