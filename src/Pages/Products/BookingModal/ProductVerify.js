import React from 'react';

const ProductVerify = ({user}) => {
    const {verify} = user
    return (
        <div>
            {
               verify === "verified" && <p>{verify}</p>
            }
        </div>
    );
};

export default ProductVerify;