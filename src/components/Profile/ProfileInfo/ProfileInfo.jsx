import classes from './ProfileInfo.module.css';
const ProfileInfo = () => {
  return (
    <div className={classes.profileInfo}>
      <div><img src='https://kakoy-smysl.ru/wp-content/uploads/2020/02/grus-kart-so-sm-1-870x400.jpg' className={classes.app__content_img} /></div>
      <div className={classes.profile__title}>ava + descr</div>
    </div>
  )
}
export default ProfileInfo;