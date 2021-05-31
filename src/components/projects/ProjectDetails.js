import React,{Component} from 'react'
import {connect} from 'react-redux'
import{firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'
import firebase from '../../config/fbConfig'
import {Link} from 'react-router-dom'
// import classes from '*.module.sass'

  class ProjectDetails extends Component {
    
    handleDelete =(e) =>
    {
      const db = firebase.firestore();

      db
      .collection('projects')
      .doc(this.props.match.params.id)
      .delete();
    };


    render() {

    const {project,auth} = this.props;
    // console.log(this.props);
    const delBtn = (
      <button className="btn red lighten-1" onClick={this.handleDelete}>
         <b> Delete Post</b> 
       </button>
     );
  
    if(!auth.uid) return <Redirect to ='/signin' />

    if (project) {


    return (
      <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{project.title}</span>
          <p>{project.content
                .split("\n")
                .reduce(
                  (ns, x, i, xs) =>
                    i === xs.length - 1 ? [...ns, x] : [...ns, x, <br />],
                  []
                )}
            </p>
          </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
          <div className="grey-text">{moment(project.createdAt.toDate()).calendar()} </div>
        </div>
      </div>
      <div className="center">
            {<Link to= '/'>{(project.authorId == auth.uid) && (delBtn)}</Link>}
      </div>
    </div>
    )
                
    }
    else {
      return (
        <div className="container center">
          <p>Loading...</p>
        </div>
      )

    }
  }
  }

 

const mapStatetoProps = (state,ownProps) =>{
  
    const id = ownProps.match.params.id;
    const projects= state.firestore.data.projects;
    const project = projects ? projects[id] : null

    return {
        project : project,
        auth: state.firebase.auth


  }
}

export default compose(

  connect(mapStatetoProps),
  firestoreConnect([
    {collection: 'projects'}
  ])

)(ProjectDetails)
