import { NavLink } from "react-router-dom";
import s from './Support.module.css'

const SupportChatItem = (probs) => {
    let path = '/support/' + probs.id
    return (
        <div className="row border supportChat">
            <NavLink to={path}>Агент поддержки # {probs.num + '(' + probs.name + ')'}</NavLink>
        </div>
    )
};


const MessageItem = (probs) => {
    return (
        <div className="row border message">{probs.mess}</div>
    )
};


const Support = () => {
    return (
        <div className="wrapper">
            <h3>Чат с поддержкой</h3>
            <div className="container m10">
            <div className="row justify-content-md-center ">
                <div className="col col-lg-5">
                    <div className={s.supportChats}>
                        <SupportChatItem name='Дмитрий' id='1' num='12'/>
                        <SupportChatItem name='Владимир' id='2' num='03'/>
                        <SupportChatItem name='Ольга' id='3' num='124'/>
                    </div>
                </div>
                <div className="col col-lg-2">
                    <div className={s.messages}>
                        <MessageItem mess='Hello' />
                        <MessageItem mess='It is me, mario' />
                        <MessageItem mess='Здравствуйте!' />
                    </div>
                </div>
            </div>
            </div>
            
        </div>

    )
};
export default Support;