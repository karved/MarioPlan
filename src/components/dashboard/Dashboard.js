import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class Dashboard extends Component {
  render() {
    
    // console.log(this.props);
    const { projects,auth,notifications,profile } = this.props;

    if(!auth.uid) return <Redirect to ='/signin' />
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m5 ">
            <Notifications profile={profile}/>
          </div>
          <div className="col s12 m6 offset-m1">
            <ProjectList projects={projects} />
          </div>
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects ,
    auth : state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    profile: state.firebase.profile
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects', orderBy: ['createdAt','desc']},
    {collection: 'notifications', limit: 5, orderBy: ['time','desc']}
  ])
)(Dashboard)
