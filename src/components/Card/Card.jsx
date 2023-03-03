const Card = (props) => {
    return (
        <div class="col">
            <div class='card'>
                <h3>{props.title}</h3>
                <img src={props.image} width="200" height="200" alt={props.title} class="bd-placeholder-img img-thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" />
                <div class="card-body">
                    <p>{props.description}</p>
                    <p>{props.price} руб.</p>
                </div>
            </div>
        </div>
    )
};
export default Card;