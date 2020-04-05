import React from 'react';
import {Link} from 'react-router-dom';

function HomeCategory(props) {
    const {image, name, description} = props;
    return (
        <div className="col-6">
            <Link>
                <img className="w-100" src={image} alt="Category item"></img>
                <h1 className="h1 my-2">{name}</h1>
                <p>{description}</p>
            </Link>
        </div>
    );
}

export default HomeCategory;
