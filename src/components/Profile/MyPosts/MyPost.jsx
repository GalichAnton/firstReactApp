import classes from './MyPost.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';



const MyPost = (props) => {
  let newPostElem = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());

  }

  let onPostChange = () => {
    let text = newPostElem.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  return (

    <div className={classes.postBlock}>
      <h3>My post</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElem}
          value={props.newPostText} />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>New post</div>

      {postsElements}
    </div>

  )
}
export default MyPost;