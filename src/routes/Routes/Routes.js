import {createBrowserRouter} from 'react-router-dom';
import Main from '../../layouts/Main/Main';
import Products from '../../Pages/Products/Products';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import MyOrders from '../../Pages/MyOrders/MyOrders';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import Blogs from '../../Pages/Blogs/Blogs';
import AddProduct from '../../Pages/AddProduct/AddProduct';
import ErrorHandlePage from '../../Pages/ErrorHandlePage/ErrorHandlePage';
import AllSeller from '../../Pages/AllSeller/AllSeller';
import AllBuyers from '../../Pages/AllBuyers/AllBuyers';
import AllUsers from '../../Pages/AllUsers/AllUsers';
import AddminRoute from '../AddminRoute/AddminRoute';
import MyProducts from '../../Pages/MyProducts/MyProducts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allUsers',
                element: <AddminRoute><AllUsers></AllUsers></AddminRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <AddminRoute><AllSeller></AllSeller></AddminRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AddminRoute><AllBuyers></AllBuyers></AddminRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddminRoute><AddProduct></AddProduct></AddminRoute>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorHandlePage></ErrorHandlePage>
    }
]);

export default router;