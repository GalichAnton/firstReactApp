import MyPostContainer from './MyPosts/MyPostContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className={classes.app__content}>
      <ProfileInfo />
    {  <MyPostContainer  />}
    </div>
  )
}
export default Profile;