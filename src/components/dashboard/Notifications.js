import React from 'react'
import moment from 'moment';

const Notifications = (props) => {
  const {profile} = props;
  console.log(props);
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Welcome {[profile.initials]} !</span>
          <ul>
            Post a new Blog today, 
          <span className="pink-text"> {profile.firstName} {profile.lastName} </span>

           {/* {notifications && notifications.map(
             item=> {
               return(
                 <li key={item.id}>
                   
                   <span>{item.content}</span>
                   <div className="grey-text note-date">
                     {moment(item.time.toDate()).fromNow()}
                   </div>
                 </li>
               )
             }
           )} */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications
