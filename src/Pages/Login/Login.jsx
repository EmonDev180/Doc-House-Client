import { Link, useNavigate } from 'react-router-dom';
import img1 from '../../assets//images/Frame.png'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {

    const {signin} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;

        const  email = form.email.value;

        const password = form.password.value;

        console.log(name,email,password)

        signin(email,password) 
        .then(user => {
            console.log(user)
            navigate('/')
        })
        .catch(error=> {
            console.log(error)
        })
    }
    return (
        <div className='flex'>
            <div className="h-[1000px] w-1/2 bg-green-800 ">
                <img className='mt-24' src={img1} alt="" />
            </div>


            <div className=" bg-base-100  w-2/4  shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body mt-24">
                <h1 className="text-2xl font-bold text-center">Login  now!</h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-warning">Login</button>
                    </div>
                    <p className='my-4 text-center'>have a no  account  <Link className='text-orange-500 font-bold' to='/register'>Register</Link></p>
                </form>
            </div>

        </div>

    );
};

export default Login;