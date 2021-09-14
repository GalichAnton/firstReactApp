import classes from './Post.module.css';
const Post = (props) => {
  return (

        
        <div className={classes.item}>
          <img src='https://vjoy.cc/wp-content/uploads/2021/01/unnamed-4-2.jpg' />
          {props.message}
          <span>{props.likecounter}  like</span>
          </div>
  
  )
}
export default Post;