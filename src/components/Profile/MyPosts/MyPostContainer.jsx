import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../storeContext';
import MyPost from './MyPost';



const MyPostContainer = () => {
  //let state = props.store.getState();
  

  return (
    <StoreContext.Consumer> 
      {(store) => {
      let state = store.getState();
      let addPost = () => {
        store.dispatch(addPostActionCreator());
    
      }
    
      let onPostChange = (text) => {
    
        store.dispatch(updateNewPostTextActionCreator(text));
      }
    
      return <MyPost updateNewPostText={onPostChange} addPost={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText} />
    }}

    </StoreContext.Consumer>
  )
}
export default MyPostContainer;