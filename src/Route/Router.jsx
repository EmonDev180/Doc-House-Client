
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../LayOut/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Appoinment from '../Pages/Appoinment/Appoinment';
import DashBoard from '../DashBoard/DashBoard';
import Alluser from '../DashBoard/Alluser';
import AddDoctor from '../DashBoard/AddDoctor';
import UserHome from '../DashBoard/UserHome';
import DasBoardHome from '../DashBoard/DasBoardHome';
import PrivetRoute from '../Components/PrivetRoute/PrivetRoute';
import ManageDoctor from '../DashBoard/ManageDoctor';
import DoctorProfile from '../Pages/DoctorProfile/DoctorProfile';
import MyAppoinment from '../DashBoard/MyAppoinment';
import About from '../Pages/About/About';


const router =  createBrowserRouter([

    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'appointment',
                element: <PrivetRoute> <Appoinment></Appoinment></PrivetRoute>
            },
            {
                path:'/about',
                element:<About></About>

            },
            {
                path:'/doctorProfile/:id',
                element:<DoctorProfile></DoctorProfile>,
                loader: ({params}) => fetch(`https://doc-house-server-three.vercel.app/expartDoc/${params.id}`)
                        
            },
            {
                path:'login',
                element: <Login></Login>

            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    },



    {
        path:'dashboard',
        element:<DashBoard></DashBoard>,
        children:[

            {
                path:'dashBoardHome',
                element:<DasBoardHome></DasBoardHome>
            },

            {
                path:"allUser",

                element: <Alluser></Alluser>
            },
            {
                path:'addDoctor',
                element:<AddDoctor></AddDoctor>
            },
            {
                path:'userHome',
                element:<UserHome></UserHome>
            },
            {
                path:'manageDoctor',
                element:<ManageDoctor></ManageDoctor>
            },



            //user route

            {
                path:'myAppoinment',
                element:<MyAppoinment></MyAppoinment>

            }
           
        ]  
    }
]);
    

export default router;