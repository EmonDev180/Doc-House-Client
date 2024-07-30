import img1 from '../../assets/images/Ellipse 2 (1).png'

const Review = () => {
    return (

        <div>
            <div className="mt-32 text-center">
                <h2 className="text-3xl font-bold">What our Patients Says </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores qui modi earum doloremque numquam, suscipit error ex consequuntur necessitatibus eius cupiditate maiores aliquam pariatur corporis sit laboriosam laborum minima rem veniam recusandae eligendi voluptate temporibus veritatis. Eos, dolore nemo!</p>
            </div>
            <div className="flex  justify-center ml-3 gap-8 mt-12 ">

                <div className='   flex flex-col md:flex-row gap-4 md:gap-8 gap-12 '>

                    

                    <div className="card bg-base-100 w-96 border border-gray-600">
                        <div className="card-body">
                            <div className='flex gap-4'>
                                <img src={img1} alt="" className='h-12 w-12' />
                                <h2 className='font-bold'> Alad Hossain</h2>
                            </div>


                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, impedit libero? Excepturi voluptatum eos dolorem quae pariatur perspiciatis odit quidem.</p>


                        </div>
                    </div>


                    <div className="card bg-base-100 w-96 border border-gray-600">
                        <div className="card-body">
                            <div className='flex gap-4'>
                                <img src={img1} alt="" className='h-12 w-12' />
                                <h2 className='font-bold'> Alad Hossain</h2>
                            </div>


                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, impedit libero? Excepturi voluptatum eos dolorem quae pariatur perspiciatis odit quidem.</p>


                        </div>
                    </div>
                </div>




            </div>



        </div>
    );
};

export default Review;