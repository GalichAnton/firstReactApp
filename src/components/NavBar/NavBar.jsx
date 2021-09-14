import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';
const NavBar = () => {
  return (
    <nav className={classes.app__menu}>
      <div><NavLink className={classes.navbar__link}  activeClassName={classes.active} to='/profile'>Profile</NavLink></div>
      <div><NavLink className={classes.navbar__link} activeClassName={classes.active} to='/dialogs'>Messages</NavLink></div>
      <div><NavLink className={classes.navbar__link} activeClassName={classes.active} to='/news'>News</NavLink></div>
      <div><NavLink className={classes.navbar__link} activeClassName={classes.active} to='/nusic'>Music</NavLink></div>
      <div className={classes.app__menu_settings}><NavLink className={classes.navbar__link} activeClassName={classes.active} to='/setings'>Settings</NavLink></div>
    </nav>
  )
}
export default NavBar;