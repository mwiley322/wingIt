import React, { Component } from 'react';

export default class Profile extends Component {


  render() {
    return (
      <div className="container" id="ProfCont">
        <div className="col-md-9">
          <div className="row">

              <div className="col-md-3 pull-left">
                  <img src="#" className="img-responsive" alt="userImage"></img>
                  <h3>Name</h3>
                  <h3>Date Joined</h3>
                  <h3><i>Current City</i></h3>
                  <button type="button" class="btn btn-secondary">Edit Profile</button>
              </div>
              <div className="col-md-6 pull-right">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                      book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                      more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p><p>Pencil icon as a link:
          <a href="#">
            <span class="glyphicon glyphicon-pencil"></span>
          </a></p>
              <p>Trash icon as a link:
                <a href="#">
                  <span class="glyphicon glyphicon-trash"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
