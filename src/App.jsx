import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import rootRoute from '~/routes/rootRoute'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient()

function App() {
    return (
        <div className="h-screen w-screen">
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={rootRoute} />
                <ToastContainer autoClose={3000} />
            </QueryClientProvider>
        </div>
    )
}

export default App
