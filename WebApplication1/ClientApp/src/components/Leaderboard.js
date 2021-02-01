import React, { Component } from 'react';

export class Leaderboard extends Component {

    buildDataTable = async () => {
        var leaderboard = [];
        //Access the leaderboard of phase 1 of the competition 1.
        var data = await fetch("https://codalabtest.cloudapp.net/api/competition/22705/leaderboard/data")
        console.log(data)
        //leaderboard.push(getJson("http://codalabtest.cloudapp.net/api/competition/1/phases/1/leaderboard/data")[0]);
        //var tr;
        ////clear the table
        //$("#leaderboardtable").empty();
        //var columnSet = [];
        //var headerTr$ = $('<tr/>');
        ////Get the header data
        //var headers = leaderboard[0].headers;
        //headerTr$.append($('<th/>').html("participant"));
        ////Populate the header in the leaderboardtable                  
        //for (var j = 0; j < headers.length; j++) {
        //    headerTr$.append($('<th/>').html(headers[j].label));
        //}
        //$("#leaderboardtable").append(headerTr$);
        ////Populate the scores in the leaderboardtable             
        //for (var i = 0; i < leaderboard[0].scores.length; i++) {
        //    tr = $('<tr/>');
        //    tr.append("<td>" + leaderboard[0].scores[i][1].username + "</td>");
        //    values = leaderboard[0].scores[i][1].values;
        //    for (var j = 0; j < values.length; j++) {
        //        tr.append("<td>" + values[j].val + "</td>");
        //    }
        //    $('#leaderboardtable').append(tr);
    }

    render() {
        return (
            <div> 
                <div className="row">
                    <div className="large-9 columns competitions">
                        <h2>Click below to get a list of my competitions</h2><br />
                        <button id="show" className="button">View Competitions</button>
                    </div>
                    <div className="row" id="all-competitions">
                        <div className="large-9 columns competitions">
                            <a id="competition" href="" target="_blank">
                                <div className="competition-tile">
                                    <article className="subContainer">
                                        <input id="competitionID" type="hidden" value="7" />
                                        <div className="competitionTileLftStrip"></div>
                                        <div className="articleImageContainer">
                                            <div className="subContainerPadding">
                                                <img src="" id="logo" />
                                            </div>
                                        </div>
                                        <div className="articleTextArea">
                                            <div className="subContainerPadding">
                                                <div className="articleHeadingContainer">
                                                    <h3 id="title"></h3>
                                                    <label>Organized by Pragnya</label>
                                                </div>
                                                <div className="competition-paragraph" id="competition-paragraph">
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="large-9 columns competitions">
                        <button id="showLeaderBoard" className="button" onClick={this.buildDataTable}>View LeaderBoard</button>
                        <div className="leaderboard-result-table">
                            <table className="resultsTable dataTable" id="leaderboardtable" border="1"></table>
                        </div>
                    </div>
                </div>
                <table id="leaderboardtable" border="1">
                </table>        
            </div>
        )
    }

}