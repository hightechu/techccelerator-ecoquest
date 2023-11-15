import React from 'react';

 const FoodLabels = () => {

  return (
    <div className = "bg-clrpls">
    <section className = "bg-clrpls">
    <div className="container-fluid">        
       <h1><u>Food Labels</u></h1>
       <p>
        <a className="btn m-3 useby-clr btn-light" data-bs-toggle="collapse" href="#Useby" role="button" aria-expanded="false" aria-controls="Useby">
            Use-by
        </a>
        <button className="btn sellby-clr btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#Sellby" aria-expanded="false" aria-controls="Sellby">
            Sell-by
        </button>
        <button className="btn bbf-clr m-3 btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#BBF" aria-expanded="false" aria-controls="BBF">
            Best Before
        </button>
        <button className="btn exp-clr btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#EXP" aria-expanded="false" aria-controls="EXP">
            Exp
        </button>
        </p>
        {/* use by */}
        <div className="collapse " id="Useby">
        <div className="card card-body">
        <h6>Use By:</h6>
        You can cook and eat food until midnight on the use-by date shown on a product, but not after. The last date recommended for the use of the product while at peak quality.
        </div>
        </div>
        {/* Sell by */}
        <div className="collapse " id="Sellby">
        <div className="card card-body mt-4">
        <h6>Sell By:</h6>
        Tells the store how long to display the product for sale for inventory management.
        </div>
        </div>
        {/* Best Before */}
        <div className="collapse " id="BBF">
        <div className="card card-body mt-4">
        <h6>Best Before (BBF):</h6>
        Indicates when a product will be of best flavor or quality. 
        </div>
        </div>
        {/* Exp  */}
        <div className="collapse " id="EXP">
        <div className="card card-body mt-4">
        <h6>Expiration Date (Exp):</h6>
        The date after which a product should not be sold or used because of an expected decline in quality or effectiveness. 
        </div>
        </div>

    </div>
    </section>
    <section className = "bg-clrpls">
    </section>
    </div>
  )

}
 
export default FoodLabels;