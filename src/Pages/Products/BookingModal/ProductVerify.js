import React from 'react';

const ProductVerify = ({user}) => {
    const {verify} = user
    return (
        <div>
            {
                verify === "verified" && <div className="form-control">
               <label className="cursor-pointer label">
                 <input type="checkbox" checked className="checkbox checkbox-success" />
               </label>
             </div>
            }
        </div>
    );
};

export default ProductVerify;