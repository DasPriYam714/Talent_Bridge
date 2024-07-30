
import { useLoaderData, useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const JobDetail = () => {
    const jobs = useLoaderData();
    const {id} =useParams()
    // const job = jobs.find(job => job.id == id)
    // console.log(id,job);
    const intId =parseInt(id)
    const job = jobs.find(job => job.id == intId);
    console.log(job);
    return (
        <div>
            <h2>Job details of:{job.job_title}</h2>
            <div className="grid gap-5 md:grid-cols-4 grid-cols-1">
                <div className="  md:col-span-3">
                    <h2 className="font-bold text-lg pb-5">Job Description: <span className="font-medium text-[#757575]">{job.job_description}</span></h2>
                    <h2 className="font-bold text-lg pb-5">Job Responsibility: <span className="font-medium text-[#757575]">{job.job_responsibility}</span></h2>
                    <div className="pb-5">
                    <h2 className="font-bold text-lg pb-3 ">Educational Requirement: </h2>
                        <span className="font-medium text-[#757575] pb-5">{job.educational_requirements}</span>


                    </div>
                    <div className="pb-5">
                    <h2 className="font-bold text-lg pb-3 ">Experiences: </h2>
                        <span className="font-medium text-[#757575] pb-5">{job.experiences}</span>


                    </div>
                   

                </div>
                <div className="border flex flex-col"> sidebar

                    <Link><button className="btn btn-primary text-lg w-full bg-gradient-to-r from-indigo-500">Apply</button></Link>
                </div>
            </div>

        </div>
    );
};

export default JobDetail;