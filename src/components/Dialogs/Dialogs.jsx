import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';




const Dialogs = (props) => {

  let state = props.messagesPage;  

  let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id} />);
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div>
      <div className={classes.dialogs__title}>Dialogs</div>
      <div className={classes.dialogs__columns}>
        <div className={classes.dialogs__items}>
          {dialogsElements}
        </div>
        <div className={classes.dialogs__messages}>
          <div>{messagesElements}</div>
          <div>
            <div><textarea value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder='Enter your message'></textarea></div>
            <div><button onClick={onSendMessageClick} >Send</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dialogs;