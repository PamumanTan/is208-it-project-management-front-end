import { RouterProvider } from 'react-router-dom'
import rootRoute from '~/routes/rootRoute'

function App() {
    return <RouterProvider router={rootRoute} />
}

export default App
