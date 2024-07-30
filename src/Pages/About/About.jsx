
import {  BsCheckSquareFill } from 'react-icons/bs';
import banner2 from '../../assets/images/banner2.jpg'
import about2 from '../../assets/images/bg-about.jpg'
import Navber from '../../Shared/Navber/Navber';
import image1 from '../../assets/images/1.jpg'
import image2 from '../../assets/images/2.jpg'
import image3 from '../../assets/images/3.jpg'
import image4 from '../../assets/images/4.jpg'
import image5 from '../../assets/images/5.jpg'
import Footer from '../Home/Footer';
const About = () => {
    return (
        <div>
            <Navber></Navber>
            <div>
                <img className='w-full h-[400px]' src={banner2} alt="" />
            </div>
            <div className='flex flex-wrap gap-'>

                <div className='mt-12 w-full lg:w-1/2'>
                 
                    <div className='mt-12'>
                        <img src={about2} alt="" />

                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='mt-12 lg:mt-24'>
                        <h2 className='text-2xl md:text-3xl font-bold text-gray-600'>About Us</h2>
                        <p className='text-gray-500'>sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                    </div>

                    <div className='flex flex-col md:flex-row justify-between mt-6 lg:mt-12'>

                        <div className='flex mb-4 md:mb-0'>
                            <div className='mt-1'>

                                <BsCheckSquareFill />

                            </div>
                            <div className='ml-2'>
                                <h2 className='text-blue-500 font-bold'>FATEST AMBULANCE</h2>
                                <p className='text-gray-500'>Sed ut perspiciatis unde omnis iste natus.</p>

                            </div>


                        </div>

                        <div className='flex mb-4 md:mb-0'>
                            <div className='mt-1'>

                                <BsCheckSquareFill />

                            </div>
                            <div>
                                <h2 className='text-blue-500 font-bold'>FATEST AMBULANCE</h2>
                                <p className='text-gray-500'>Sed ut perspiciatis unde omnis iste natus.</p>

                            </div>


                        </div>


                        <div className='flex mb-4 md:mb-0'>
                            <div className='mt-1'>

                                <BsCheckSquareFill />

                            </div>
                            <div>
                                <h2 className='text-blue-500 font-bold'>FATEST AMBULANCE</h2>
                                <p className='text-gray-500'>Sed ut perspiciatis unde omnis iste natus.</p>

                            </div>


                        </div>



                    </div>




                    <div className='flex flex-col md:flex-row justify-between mt-6 lg:mt-12 sm:flex justify-center'>

                        <div className='flex mb-4 md:mb-0'>
                            <div className='mt-1'>

                                <BsCheckSquareFill />

                            </div>
                            <div>
                                <h2 className='text-blue-500 font-bold'>FATEST AMBULANCE</h2>
                                <p className='text-gray-500'>Sed ut perspiciatis unde omnis iste natus.</p>

                            </div>


                        </div>

                        <div className='flex mb-4 md:mb-0'>
                            <div className='mt-1'>

                                <BsCheckSquareFill />

                            </div>
                            <div>
                                <h2 className='text-blue-500 font-bold'>FATEST AMBULANCE</h2>
                                <p className='text-gray-500'>Sed ut perspiciatis unde omnis iste natus.</p>

                            </div>


                        </div>


                        <div className='flex mb-4 md:mb-0'>
                            <div className='mt-1'>

                                <BsCheckSquareFill />

                            </div>
                            <div>
                                <h2 className='text-blue-500 font-bold'>FATEST AMBULANCE</h2>
                                <p className='text-gray-500'>Sed ut perspiciatis unde omnis iste natus.</p>

                            </div>


                        </div>



                    </div>

                </div>


            </div>

            <div>


                <div className='mt-12'>
                    <h2 className='text-3xl font-bold text-center'>Meet Our Team</h2>
                </div>

                <div className='flex flex-wrap sm:justify-center gap-8 mt-4'>
                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5'>
                        <div className='hover:violet-600'>
                            <img src={image1} alt="" />
                            <h2 className='ml-8 font-bold text-gray-500'>WILLIAM BLACK</h2>
                            <p className=' ml-12 font-bold text-gray-500'>Doctor</p>

                        </div>
                    </div>

                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5'>
                        <div>
                            <img src={image2} alt="" />
                            <h2 className='ml-8 font-bold text-gray-500'>WILLIAM BLACK</h2>
                            <p className=' ml-12 font-bold text-gray-500'>Nurse</p>

                        </div>
                    </div>


                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5'>
                        <div>
                            <img src={image3} alt="" />
                            <h2 className='ml-8 font-bold text-gray-500'>WILLIAM BLACK</h2>
                            <p className=' ml-12 font-bold text-gray-500'>Doctor</p>

                        </div>
                    </div>


                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5'>
                        <div>
                            <img src={image4} alt="" />
                            <h2 className='ml-8 font-bold text-gray-500'>WILLIAM BLACK</h2>
                            <p className=' ml-12 font-bold text-gray-500'>Doctor</p>


                        </div>
                    </div>


                   

                </div>

            </div>

            <Footer></Footer>

        </div>
    );
};

export default About;