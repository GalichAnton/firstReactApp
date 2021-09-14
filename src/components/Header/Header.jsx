import logo from '../../img/logo.png';
import classes from './Header.module.css';
const Header = () => {
  return (
    <header className={classes.app__header}>
        <img src={logo} className={classes.header__image}/>
      </header>
  )
}
export default Header;