import user from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div>
            <div className='flex flex-col sm:flex-row gap-5'>
                <div className='w-[68vh] sm:w-[60vh]'>
                    <div>
                        <p className="text-6xl font-extrabold text-left ">One Step Closer To Your <span className="text-[#9873FF]">Dream Job</span>  </p>
                    </div>
                    <div>
                        <p className="font-medium mt-5">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    </div>
                    <div >
                       
                       <button className="btn bg-slate-700 text-yellow-50">Normal</button>

                    </div>
                </div>
                <div className='w-[70vh] sm:w-[60vh]'>
                    <img src={user} alt="user" />
                </div>
            </div>
            
        </div>
    );
};

export default Banner;