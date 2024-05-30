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
import routing from '~/configs/routing'

const AdminSidebar = () => {
    return (
        <div className="flex h-full flex-col justify-between bg-slate-200 pb-20 pt-5">
            <div className="flex flex-col items-center justify-center">
                <p className="py-5 text-2xl">Hi, Admin</p>
                <Box sx={{ width: 250 }} role="presentation">
                    <List>
                        <SidebarItem
                            text={'Quản lý tài khoản'}
                            icon={<AccountCircleIcon />}
                            href={routing['manage-account']}
                        />
                        <SidebarItem
                            text={'Quản lý Thời khóa biểu'}
                            icon={<CalendarMonthIcon />}
                            href={routing['manage-timetable']}
                        />
                        <SidebarItem
                            text={'Quản lý Lịch dạy'}
                            icon={<AccessAlarmIcon />}
                            href={routing['manage-schedule']}
                        />
                        <SidebarItem
                            text={'Quản lý Lớp học'}
                            icon={<PeopleOutlineIcon />}
                            href={routing['manage-class']}
                        />
                    </List>
                    <Divider />
                </Box>
            </div>
            <LogOutButton isAdmin={true} />
        </div>
    )
}

export default AdminSidebar
