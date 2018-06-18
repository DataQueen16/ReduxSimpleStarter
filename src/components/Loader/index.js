import React from 'react';
import loaderSrc from '../../assets/black_instagram.png';

const Loader = props => (
    <div>
        <img
            style={{width: 75 }}
            alt="instagram icon"
            src={loaderSrc} />
    </div>
);

export default Loader;