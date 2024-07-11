import { useState, useEffect } from "react";
import Job from "./Job";

const AppliedJobs = () => {
    const [jobs, setJobs]= useState([])
    const [dataLength, setdataLength]= useState(4)

     useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
     },[])
    return (
        <div>
           <section className="text-center">
                    <p className="text-4xl font-extrabold mt-10">Featured Jobs</p>
                    <p className="font-medium mt-5 mb-10">Explore thousands of job opportunities with all the information you need. Its your future</p>
                </section>
                <div className="grid gird-cols-1 sm:grid-cols-2 gap-6">
                    {
                        jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job> )
                    }

                </div>
                <div className={dataLength === jobs.length ? 'hidden' : ''}>
                    <button 
                    onClick={()=> setdataLength(jobs.length)}
                    className="justify-center"
                    >View All</button>
                </div>
        </div>
    );
};

export default AppliedJobs;