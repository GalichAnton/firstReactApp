import classes from './MyPost.module.css';
import Post from './Post/Post';
const MyPost = () => {

  let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'It\'s my first post', likesCount: 11 },
    { id: 2, message: 'It\'s my first post', likesCount: 11 },
    { id: 3, message: 'Blabla', likesCount: 11 },
    { id: 4, message: 'Dada', likesCount: 11 }
  ]

  let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  return (

    <div>My post
      <div>New post</div>

      {postsElements}
    </div>

  )
}
export default MyPost;