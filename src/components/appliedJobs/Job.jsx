

const Job = ({job}) => {
    const {logo} =job;
    return (
        <div>
            <h1>Job</h1>
            <img src={logo} alt="" />

        </div>
    );
};

export default Job;