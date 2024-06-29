

const Category = ({category}) => {
    const {category_name, logos, availability} = category;
    return (
        <div>
            <div>
                <div>
                <img src={logos} alt="logo" />
                
                </div>
                <div>
                <h2>{category_name}</h2>
                </div>
                <div>
                    <p>{availability}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Category;