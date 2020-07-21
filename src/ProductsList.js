import React from 'react';

export const CardButton = () => {} 

const ProductsList = (prop) => {

    let cardTitle;

    const bookNow = () => {
      alert(cardTitle.innerText)
    };

    return (
        <div className="card" style={{width: "18rem"}}>
          <img 
            src={prop.image} 
            className="card-img-top" 
            alt={prop.title} 
          />
          <div className="card-body">
            <h5 
              ref={ (comp)=> cardTitle = comp} 
              className="card-title">{prop.title}
            </h5>
            <p className="card-text">{prop.description}</p>
            <p className="card-text">{prop.location}</p>
            <p className="card-text">{prop.price}</p>
            <p className="card-text">{prop.review}</p>
            <a 
              onClick={bookNow}
              href={prop.buttonLink} 
              className="btn btn-primary"
            >{prop.buttonLabel}</a>
          </div>
        </div>
    )
}

export default ProductsList;