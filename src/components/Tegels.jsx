


function Tegel({ description, content, image }) {
    return (
        <article className="tegel">
            <h2>{description}</h2>
            {content && <p>{content}</p>}
            {image && <img src={image} alt={description} /> }

        </article>
    );
}











export default Tegel;