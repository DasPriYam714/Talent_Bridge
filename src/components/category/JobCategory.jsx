import { useState, useEffect } from "react";
import Category from "./Category";

const JobCategory = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch ('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <div className="px-10">
                <section className="text-center">
                    <p className="text-4xl font-extrabold mt-10">Job Category List</p>
                    <p className="font-medium mt-5 mb-10">Explore thousands of job opportunities with all the information you need. Its your future</p>
                </section>
                <div className="flex flex-col sm:flex-row justify-between text-center">
                    {
                        categories.map(category=> <Category key={category.id} category={category}></Category>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default JobCategory;