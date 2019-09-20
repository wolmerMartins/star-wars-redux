import React from 'react';

import images from '../../assets/images/images';

const DetailsImage = props => (
    <div className="card-image-button">
        <div className="card-image">
            {<img src={images[props.name.replace(/[^A-Za-z0-9]/g, '')]} alt="Card details ilustration" />}
        </div>

        {<button className="go-back-button" onClick={() => props.goBack()}>Go Back</button>}
    </div>
);

export default DetailsImage;