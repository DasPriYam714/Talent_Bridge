
import user from '../../assets/images/user.png'

const Banner = () => {
    
    return (
        <div>
            <div className='flex flex-col sm:flex-row gap-5 justify-between '>
                <div className='w-[45vh] sm:w-[60vh]'>
                    <div>
                        <p className="text-4xl sm:text-6xl font-extrabold text-center sm:text-left gap-10 tracking-wide px-10 sm:px-0 leading-normal">One Step Closer To Your <span className="text-[#9873FF]">Dream Job</span>  </p>
                    </div>
                    <div>
                        <p className="font-medium text-center sm:text-left tracking-wide leading-normal px-10 sm:px-0 ">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    </div>
                    <div className='text-center sm:text-start' >
                       
                       <button className="btn bg-slate-700 text-yellow-50 m-4 sm:mt-8 text-center">Normal</button>

                    </div>
                </div>
                <div className='w-[45vh] sm:w-[80vh]'>
                    <img src={user} alt="user" />
                </div>
            </div>
            
        </div>
    );
};

export default Banner;