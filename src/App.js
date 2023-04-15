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
import ProductDetail from './pages/ProductDetail';

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
            { index: true, path: '', element: <Home /> },
            { path: '/products', element: <Products /> },
            { path: '/products/:productId', element: <ProductDetail /> },
        ],
    },
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
