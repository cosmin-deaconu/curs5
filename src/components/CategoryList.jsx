import React from 'react';

function CategoryList(props) {
    return (
        <div className="container-fluid container-min-max-width">
            <div className="row">
                {
                    props.items.map((item) => {
                        return <div className="col-4">
                           <img src={item.image} alt="Product" />
                           <p>{item.name}</p>
                           <p>{item.price}{item.currency}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default CategoryList;
