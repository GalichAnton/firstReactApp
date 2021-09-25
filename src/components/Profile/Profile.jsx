import MyPost from './MyPosts/MyPost';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={classes.app__content}>
      <ProfileInfo />
      <MyPost posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
        />
    </div>
  )
}
export default Profile;