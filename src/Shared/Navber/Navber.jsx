import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navber = () => {

    const {user,logOut} = useContext(AuthContext);

    const handlelogOut = () => {
        logOut()
        .then(() => {

        })
        .catch(error => {
            console.log(error)
        })
    }

    const navLinks = <>



        <li className="mt-2"><Link to='/'>Home</Link></li>
        <li className="mt-2"><Link to='/about'>About</Link></li>
        <li className="mt-2"><Link to='/appointment'>Appointment</Link></li>
       

        {
            user ? <>

     


                <li className="mt-2"><button onClick={handlelogOut}>LogOut</button></li>
                <li className="mt-2"><Link to='/dashboard'>DashBoard</Link></li>

                <li className="mt-2"><span>{user?.displayName}</span></li>
              </>  : <>

                <li className="mt-2"><Link to='/login'>Login</Link></li>



            </>
            

        }


    </>
    return (
        <div>
            <div className="navbar bg-emerald-950">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-primary lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="text-white  text-xl text-bold ">Doc House</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    )                          
};

export default Navber; 