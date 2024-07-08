

const Job = ({job}) => {
    const {logo,job_title,job_description} =job;
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
        <figure>
          <img
            src={logo}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{job_description}</p>
          <div className="card-actions ">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Job;