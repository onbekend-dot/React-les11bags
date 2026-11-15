


function Tegel({ description, content, image, className }) {
    return (
        <article className={ `tegel ${className}` }>
            <h2>{description}</h2>
            {content && <p>{content}</p>}
            {image && <img src={image} alt={description} /> }

        </article>
    );
}











export default Tegel;