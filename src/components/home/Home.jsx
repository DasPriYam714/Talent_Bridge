import Banner from "../banner/Banner";
import JobCategory from "../category/JobCategory";
import AppliedJobs from "../appliedJobs/AppliedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <AppliedJobs></AppliedJobs>


            <h2>This is home</h2>
           

        </div>
    );
};

export default Home;