

const Category = ({category}) => {
    const {category_name, logos, availability} = category;
    return (
        <div>
            <div className="border border-cyan-300 p-6">
                <div className="size-24">
                <img src={logos} alt="logo" />
                
                </div>
                <div className="text-5 font-extrabold text-[#474747]">
                <h2>{category_name}</h2>
                </div>
                <div className="text-4 font-medium text-[#A3A3A3]">
                    <p>{availability}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Category;