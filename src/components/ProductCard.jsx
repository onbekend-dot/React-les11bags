


function ProductCard({ bestseller, image, description, price }) {
    return (
        <article className="main">
            <span>Best seller</span>
            <img src={image} alt={description} />
            <h3>{description}</h3>
            <h4>€{price}</h4>

    </article>

    );
}


export default ProductCard;