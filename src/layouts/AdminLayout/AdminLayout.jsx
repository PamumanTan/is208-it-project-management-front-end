import React from 'react'
import { Outlet } from 'react-router-dom'
import { AdminSidebar } from '~/components/Sidebar'

export default function AdminLayout() {
    return (
        <div className="flex h-full w-full flex-row">
            <AdminSidebar />
            <Outlet />
        </div>
    )
}
