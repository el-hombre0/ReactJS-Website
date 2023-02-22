import { NavLink } from "react-router-dom";

const Nopage = () => {
    return (
        <div>
            <h3>Страница не найдена</h3>
            <p>Перейдите на <NavLink to="/">главную страницу</NavLink></p>
        </div>
    )
}
export default Nopage;