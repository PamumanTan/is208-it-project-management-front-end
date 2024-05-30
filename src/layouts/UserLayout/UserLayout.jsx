import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AdminSidebar, UserSidebar } from '~/components/Sidebar'
import { clientInstance } from '~/services/axios'
import userAction from '~/services/axios/actions/user.action'
import userStore from '~/stores/userStore'

const UserLayout = () => {
    const { user, login } = userStore()
    const navigate = useNavigate()
    useEffect(() => {
        const checkLoginToken = async () => {
            if (clientInstance.getAccessToken()) {
                const resUserData = await userAction.getCurrentUser()
                login({
                    id: resUserData._id,
                    name: resUserData.teacherName,
                    email: resUserData.email,
                    isAdmin: resUserData.role === 'user' ? false : true,
                })
                navigate('/schedule')
            } else {
                navigate('/login')
            }
        }
        checkLoginToken()
    }, [])
    console.log(clientInstance.getAccessToken())
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
