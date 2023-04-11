const Card = (props) => {
    return (
        <div className="col">
            <div className='card'>
                <h3>{props.title}</h3>
                <img src={props.image} width="200" height="200" alt={props.title} className="bd-placeholder-img img-thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" />
                <div className="card-body">
                    <p>{props.description}</p>
                    <p>{props.price} руб.</p>
                </div>
            </div>
        </div>
    )
};
export default Card;