import React from 'react';
import Utils from '../../utils/Utils';

import images from '../../assets/images/images';

const DetailsImage = props => (
    <div className="card-image-button">
        <div className="card-image">
            {<img src={images[Utils.removeSpecialCharacters(props.name)]} alt="Card details ilustration" />}
        </div>

        {<button className="go-back-button" onClick={() => props.goBack()}>Go Back</button>}
    </div>
);

export default DetailsImage;