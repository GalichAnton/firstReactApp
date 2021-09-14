import MyPost from './MyPosts/MyPost';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = () => {
  return (
    <div className={classes.app__content}>
      <ProfileInfo />
      <MyPost />
    </div>
  )
}
export default Profile;