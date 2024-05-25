import React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SidebarItem from './SidebarItem'
import LogOutButton from '../Button/LogOutButton'

const AdminSidebar = () => {
    return (
        <div className="flex h-full flex-col justify-between bg-slate-200 pb-20 pt-5">
            <div className="flex flex-col items-center justify-center">
                <p className="py-5 text-2xl">Hi, Admin</p>
                <Box sx={{ width: 250 }} role="presentation">
                    <List>
                        <SidebarItem text={'Quản lý Thời khóa biểu'} icon={<CalendarMonthIcon />} />
                        <SidebarItem text={'Quản lý Lịch dạy'} icon={<AccessAlarmIcon />} />
                        <SidebarItem text={'Quản lý Chủ nhiệm'} icon={<PeopleOutlineIcon />} />
                        <SidebarItem text={'Quản lý tài khoản'} icon={<AccountCircleIcon />} />
                    </List>
                    <Divider />
                </Box>
            </div>
            <LogOutButton />
        </div>
    )
}

export default AdminSidebar
