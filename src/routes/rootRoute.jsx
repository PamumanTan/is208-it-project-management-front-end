import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

const rootRoute = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<></>}>
            {' '}
            {/* Root */}
            <Route element={<></>}>
                {' '}
                {/* Default layout */}
                <Route path="/" element={<></>} /> {/* HomePage */}
                <Route path="/class" element={<></>} /> {/* HomePage */}
            </Route>
        </Route>,
    ),
)

export default rootRoute
