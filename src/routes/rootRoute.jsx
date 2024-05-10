import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

const rootRoute = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {/* Default layout */}
            <Route>
                {/* HomePage */}
                <Route path="/" element={<h1>Hello</h1>} /> 
                <Route path="/class" element={<></>} />
            </Route>
        </Route>
    ),
)

export default rootRoute
