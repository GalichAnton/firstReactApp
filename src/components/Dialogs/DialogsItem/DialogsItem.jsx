import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;
  return <NavLink to={path} className={classes.dialogs__item}>{props.name}</NavLink>
}



export default DialogsItem;