import {
    createBrowserRouter,
    // createRoutesFromElements,
    RouterProvider,
    // Route
} from 'react-router-dom';

import RootLayout from './pages/Root';
import Products from './pages/Products';
import Error from './pages/Error';
import Home from './pages/Home';

// const routeDefinitions = createRoutesFromElements(
//     <Route>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//     </Route>,
// );

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/products', element: <Products /> },
        ],
    },
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
