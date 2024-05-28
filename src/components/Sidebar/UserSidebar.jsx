import React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SidebarItem from './SidebarItem'
import userStore from '~/stores/userStore'
import LogOutButton from '../Button/LogOutButton'
import routing from '~/configs/routing'

const UserSidebar = () => {
    const user = userStore()
    return (
        <div className="flex h-full flex-col justify-between bg-slate-200 pb-20 pt-5">
            <div className="flex flex-col items-center justify-center">
                <p className="py-5 text-2xl">Hi, {user && user.isLogin ? user.username : 'user'}</p>
                <Box sx={{ width: 250 }} role="presentation">
                    <List>
                        <SidebarItem text={'Thời khóa biểu'} icon={<CalendarMonthIcon />} />
                        <SidebarItem
                            href={routing['teacher-lessons']}
                            text={'Lịch dạy'}
                            icon={<AccessAlarmIcon />}
                        />
                        <SidebarItem text={'Lớp chủ nhiệm'} icon={<PeopleOutlineIcon />} />
                        <SidebarItem text={'Thông tin tài khoản'} icon={<AccountCircleIcon />} />
                    </List>
                    <Divider />
                </Box>
            </div>
            <LogOutButton />
        </div>
    )
}

export default UserSidebar
