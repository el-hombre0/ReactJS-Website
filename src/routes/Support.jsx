import {NavLink} from "react-router-dom";
const SupportChatItem = (probs) => {
    return (
    <div className="supportChat">
        <NavLink to='/support/1'>{probs.name}</NavLink>
    </div>
)};
const Support = () => {
    return (
        <div className="wrapper">
            <h3>Чат с поддержкой</h3>
            <div className="supportChats">
                    <SupportChatItem name='Антон'/>
                    <div className="supportChat">
                        <NavLink to='/support/2' >Дмитрий</NavLink>
                    </div>
                    <div className="supportChat">
                    <NavLink to='/support/3' >Валерий</NavLink>
                    </div>
                <div className="messages">
                    <div className="message">Hello</div>
                    <div className="message">It's me, Mario!</div>

                </div>
            </div>
        </div>

    )
};
export default Support;