
import { useLoaderData, useParams } from "react-router-dom";


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
            this is my job.
            <h2>Job details of:{job.job_title}</h2>

        </div>
    );
};

export default JobDetail;