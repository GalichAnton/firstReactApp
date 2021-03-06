import axios from "axios";
import React from "react";
import classes from './users.module.css'
import userPhoto from '../../assets/images/user.jpg'

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
    })
    
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    
    return <div className={classes.userPage}>
      <div className={classes.pagination}>
        {pages.map(p => { return <span onClick={() => {this.onPageChanged(p)} } className={this.props.currentPage === p && classes.selectedPage}>{p}</span> })}
      </div>
      {
        this.props.users.map(u => <div key={u.id}>
          <span className={classes.userCard}>
            <div>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto} />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => {
                  this.props.unFollow(u.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                  this.props.follow(u.id)
                }}>Follow</button>}

            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </span>
          </span>
        </div>)
      }

    </div>
  }
}


/* const Users = (props) => {

  let getUsers = () => {
    if(props.users.length === 0){
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        props.setUsers(response.data.items)
      })
    }
  }
  return <div>
    <button onClick={getUsers}>Get Users</button>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
          <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto}/>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => {
                props.unFollow(u.id)
              }}>Unfollow</button>
              : <button onClick={() => {
                props.follow(u.id)
              }}>Follow</button>}

          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
          </span>
        </span>
      </div>)
    }

  </div>

} */

export default Users;