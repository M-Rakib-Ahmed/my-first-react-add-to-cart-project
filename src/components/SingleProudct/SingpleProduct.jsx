import './SingleProduct.css'

const SingpleProduct = ({product,handleSelectedProduct}) => {
    const {id, name, image, description, price, category, isFeature} = product;
    
    return (
        <div className='cart'>
         <img className='img' src={image} alt="" /> 
         <h2>{name}</h2>
         <p>{description}</p>
         <div className='cat-price'>
            <p>${price}</p>
            <p>{isFeature?"feature category": "no category"}</p>

         </div>
         <button className='btn' onClick={()=>handleSelectedProduct(product)}>Add  To Cart</button>
        </div>
    );
};

export default SingpleProduct;