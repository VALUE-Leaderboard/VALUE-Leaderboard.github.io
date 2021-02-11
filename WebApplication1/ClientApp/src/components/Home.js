import React, { Component } from 'react';
import './Home.css'

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <h1 class="header">VALUE Leaderboard</h1>
                    <div class="row sponsors">
                        <div class="col-md-6 col-md-offset-3">
                        </div>
                    </div>
                    <div class="home_text">
                        <p>This is the official page of the VALUE leaderboard. Here you can find </p>
                        <ul>
                            <li><b>Descriptions of all the tasks</b> </li>
                            <li><b>Download links for the datasets</b></li>
                            <li><b>Leaderboards for each of the tasks</b></li>
                        </ul>
                            <p>The tasks are all hosted on Codalab. To make a submission, please use the links to go to the relevant Codalab page and submit your model/predictions</p>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

/* <a aria-label="Microsoft" href="https://aka.ms/mmai" target="_blank">
    <img role="presentation" aria-hidden="true" alt="" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" />
</a> */
