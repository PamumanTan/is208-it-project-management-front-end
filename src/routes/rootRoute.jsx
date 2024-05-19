import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { AdminLayout } from '~/components/AdminLayout'
import { ManageAccount } from '~/pages/Admin/ManageAccount'
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
            {/* Default layout */}
            <Route>
                {/* HomePage */}
                <Route path="/" element={<h1>Hello</h1>} />
                <Route path="/class" element={<></>} />
                <Route path="/lessons" element={<LessonPage />} />
            </Route>

            {/* Admin layout */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="manage-account" element={<ManageAccount />} />
            </Route>
        </Route>,
    ),
)

export default rootRoute
