import React, { Component } from 'react';
import './Home.css'

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
        <div class="container">
                    <h1 class="header">VALUE Leaderboard</h1>
                    <div>
                        <p>
                            The Video And Language Understanding Evaluation (VALUE) benchmark is a collection of resources for training, evaluating, and analyzing systems for understanding both video and dialogues. VALUE consists of: </p>
                            <ul>
                                <li> A benchmark of nine video and language tasks built on established existing datasets and selected to cover a diverse range of dataset sizes, video genres, degrees of difficulty and task types </li>
                                <li> A public leaderboard for tracking performance on the benchmark </li>
                             </ul>
                        <p>    The format of the VALUE benchmark is model-agnostic, so any system capable of processing multi-channel video (video+dialogue) + natural langugage sentence pairs and producing corresponding predictions is eligible to participate. The ultimate goal of VALUE is to drive research in the development of general and robust video+language understanding systems.
                        </p>
                    </div>
                    <br />
                    <div>
                        <p>On this page, you can find </p>
                        <ul>
                            <li><b>Descriptions of all the tasks</b> </li>
                            <li><b>Download links for the datasets</b></li>
                            <li><b>Leaderboards for each of the tasks</b></li>
                        </ul>
                            <p>The tasks are all hosted on Codalab. To make a submission, please use the links to go to the relevant Codalab page and submit your model/predictions</p>
                    </div>
      </div>
    );
  }
}

/* <div class="col-md-6 col-md-offset-3">                    
     <a aria-label="Microsoft" href="https://aka.ms/mmai" target="_blank">
        <img role="presentation" aria-hidden="true" alt="" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" />
    </a> 
  </div>*/
