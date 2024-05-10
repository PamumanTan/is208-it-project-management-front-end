import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { AdminLayout } from '~/components/AdminLayout'
import { ManageAccount } from '~/pages/Admin/ManageAccount'

const rootRoute = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {/* Default layout */}
            <Route>
                {/* HomePage */}
                <Route path="/" element={<h1>Hello</h1>} /> 
                <Route path="/class" element={<></>} />
            </Route>

            {/* Admin layout */}
            <Route path='/admin' element={<AdminLayout />}>
                <Route path='manage-account' element={<ManageAccount />} />
            </Route>
        </Route>
    ),
)

export default rootRoute
