import { GoLocation } from "react-icons/go";
import { HiCurrencyBangladeshi } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id,logo,company_name,job_title,job_description,remote_or_onsite,job_type,location,salary} =job;
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
        <figure>
          <img
            src={logo}
            alt="company_logo"
            className="p-10 max-auto" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{company_name}</h2>
          <p className="text-xl ">{job_title}</p>
          <div>
            <button className="px-5 py-2 border border-[#7E90FE] font-extrabold rounded mr-5 text-[#9873FF]">{remote_or_onsite}</button>
            <button className="px-5 py-2 border border-[#7E90FE] font-extrabold rounded mr-5 text-[#9873FF]">{job_type}</button>
          </div>
          <div className="flex flex-col sm:flex-row text-xl">
            <h2 className="flex my-2 mr-12"><GoLocation className="text-2xl mr-2"></GoLocation>{location}</h2>
            <h2 className="flex my-2 mr-2"><HiCurrencyBangladeshi className="text-3xl mr-2"></HiCurrencyBangladeshi>{salary}</h2>
          </div>
          <div className="card-actions ">
           <Link to={`/jobdetails/${id}`}>
           <button className="btn btn-primary">View details</button>
           </Link>
          </div>
        </div>
      </div>
    );
};

export default Job;