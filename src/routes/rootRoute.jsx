import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { AdminLayout } from '~/layouts/AdminLayout'
import UserLayout from '~/layouts/UserLayout'
import { AdminLoginPage } from '~/pages/Admin/AdminLoginPage'
import { ManageAccount } from '~/pages/Admin/ManageAccount'
import { HomePage } from '~/pages/HomePage'
import { LessonPage } from '~/pages/LessonPage'
import { ForgotPasswordPage, LoginPage } from '~/pages/LoginPage'

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
                <Route path="/class" element={<></>} />
                <Route path="/lessons" element={<LessonPage />} />
            </Route>

            {/* Admin layout */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="login" element={<AdminLoginPage />} />
                <Route path="manage-account" element={<ManageAccount />} />
            </Route>
        </Route>,
    ),
)

export default rootRoute
