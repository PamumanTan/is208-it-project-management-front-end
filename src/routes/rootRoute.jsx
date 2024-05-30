import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { AdminLayout } from '~/layouts/AdminLayout'
import UserLayout from '~/layouts/UserLayout/UserLayout'
import { AdminLoginPage } from '~/pages/Admin/AdminLoginPage'
import { ManageAccount } from '~/pages/Admin/ManageAccount'
import { ManageClass } from '~/pages/Admin/ManageClass'
import { ManageSchedule } from '~/pages/Admin/ManageSchedule'
import ManageTimeTable from '~/pages/Admin/ManageTimeTable/ManageTimeTable'
import { HomePage } from '~/pages/User/HomePage'
import { InfoPage } from '~/pages/User/InfoPage'
import { LessonPage } from '~/pages/User/LessonPage'
import { ForgotPasswordPage, LoginPage } from '~/pages/User/LoginPage'
import { SchedulePage } from '~/pages/User/SchedulePage'
import { TimeTablePage } from '~/pages/User/TimeTablePage'

const rootRoute = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {/* Login */}
            <Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            </Route>
            {/* User layout */}
            {/* HomePage */}
            <Route path="/" element={<UserLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/info" element={<InfoPage />} />
                <Route path="/time-table" element={<TimeTablePage />} />
                <Route path="/lessons" element={<LessonPage />} />
                <Route path="/schedule" element={<SchedulePage />} />
            </Route>

            {/* Admin layout */}

            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin" element={<AdminLayout />}>
                {/* <Route path="login" element={<AdminLoginPage />} /> */}
                <Route path="manage-account" element={<ManageAccount />} />
                <Route path="manage-schedule" element={<ManageSchedule />} />
                <Route path="manage-timetable" element={<ManageTimeTable />} />
                <Route path="manage-class" element={<ManageClass />} />
            </Route>
        </Route>,
    ),
)

export default rootRoute
