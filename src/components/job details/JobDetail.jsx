
import { useLoaderData, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdCurrencyExchange } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";


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
            <div className="grid gap-7 md:grid-cols-4 grid-cols-1">
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
                <div className=" flex flex-col justify-between"> 
                    <div>
                        <div>
                        <h2 className="font-bold text-lg pb-6">Job Details:</h2>
                        <div className="flex flex-row leading-4">
                           <p className="text-[#757575] text-md "><MdCurrencyExchange></MdCurrencyExchange></p> 
                            <h3 className="font-semibold text-[#474747] px-2">Salary :</h3>
                            <p className="font-medium text-[#757575] pb-5">{job.salary} (per month)</p>

                        </div>

                        </div>
                        <div>
                       
                        <div className="flex flex-row leading-4">
                           <p className="text-[#757575] text-md "><FaRegCalendarAlt ></FaRegCalendarAlt></p> 
                            <h3 className="font-semibold text-[#474747] px-2 pb-4">Job Title : <span className="font-medium text-[#757575] pb-5 ">{job.job_title} </span></h3>

                        </div>

                        </div>
                        <div>
                        <h2 className="font-bold text-lg pb-6">Contact Information :</h2>
                        <div className="flex flex-row leading-4">
                           <p className="text-[#757575] text-md "><MdOutlinePhone></MdOutlinePhone></p> 
                           <h3 className="font-semibold text-[#474747] px-2 pb-4">Phone : <span className="font-medium text-[#757575] pb-5 ">{job.contact_information.phone} </span></h3>
                        </div>
                        <div className="flex flex-row leading-4">
                           <p className="text-[#757575] text-md "><HiOutlineMail></HiOutlineMail></p> 
                           <h3 className="font-semibold text-[#474747] px-2 pb-4">Email : <span className="font-medium text-[#757575] pb-5 ">{job.contact_information.email} </span></h3>
                        </div>
                        <div className="flex flex-row leading-4">
                           <p className="text-[#757575] text-md "><MdLocationOn></MdLocationOn></p> 
                           <h3 className="font-semibold text-[#474747] px-2 pb-4">Address : <span className="font-medium text-[#757575] pb-5 ">{job.contact_information.address} </span></h3>
                        </div>

                        </div>
                       


                    </div>

                    <Link><button className="btn btn-primary text-lg w-full bg-gradient-to-r from-indigo-500">Apply</button></Link>
                </div>
            </div>

        </div>
    );
};

export default JobDetail;