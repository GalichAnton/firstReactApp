import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;
  return <NavLink to={path} className={classes.dialogs__item}>{props.name}</NavLink>
}

const Message = (props) => {
  return <div className={classes.dialogs__message}>{props.message}</div>
}

const Dialogs = () => {

  let dialogs = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 6, name: 'Valera' }
  ]

  let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' }
  ]
  let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);
  let messagesElements = messages.map(m => <Message message={m.message} />);

  return (
    <div>
      <div className={classes.dialogs__title}>Dialogs</div>
      <div className={classes.dialogs__columns}>
        <div className={classes.dialogs__items}>
          {dialogsElements}
        </div>
        <div className={classes.dialogs__messages}>
          {messagesElements}
        </div>
      </div>
    </div>
  )
}
export default Dialogs;