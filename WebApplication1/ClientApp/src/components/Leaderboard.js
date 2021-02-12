import React, { Component } from 'react';
import { LEADERBOARD_MODEL, METRIC_MAPS } from './LeaderboardModel';
import { SortUp, SortDown, ArrowDownUp } from 'react-bootstrap-icons';
import './Tables.css'

export class Leaderboard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: LEADERBOARD_MODEL,
            direction: -1,
            lastCol: "date",
        };

        this.sortBy.bind(this);
        this.compareBy.bind(this);
    }

    componentDidMount() {
        this.sortBy("date");
    }

    compareBy(key, direction) {
        console.log(this);
        return function (a, b) {
            var tmp1 = a[key];
            var tmp2 = b[key];
            if (tmp1 === '-') {
                tmp1 = 0;
            } 
            if (tmp2 === '-') {
                tmp2 = 0;
            }
            else if (key in METRIC_MAPS) {
                tmp1 = 0;
                tmp2 = 0;
                console.log(METRIC_MAPS[key])
                for (var i = 0; i < METRIC_MAPS[key].length; i++) {
                    if (a[METRIC_MAPS[key][i]] !== '-') {
                        tmp1 += a[METRIC_MAPS[key][i]];
                    }
                    if (b[METRIC_MAPS[key][i]] !== '-') {
                        tmp2 += b[METRIC_MAPS[key][i]];
                    }
                }
                tmp1 = tmp1 / METRIC_MAPS[key].length;
                tmp2 = tmp2 / METRIC_MAPS[key].length;
            }
            if (tmp1 < tmp2) return -1 * direction;
            if (tmp1 > tmp2) return 1 * direction;
            return 0;
        };
    }

    sortBy(key) {
        var newDirection = -1;
        if (key !== this.state.lastCol) {
            this.setState({ direction: -1, lastCol: key })
        }
        else {
            this.setState({ direction: -1 * this.state.direction })
            newDirection = -1 * this.state.direction;
        }
        let arrayCopy = [...this.state.data];
        arrayCopy.sort(this.compareBy(key, newDirection));
        this.setState({ data: arrayCopy });
    }

    buildTableRow = (date, model, TVR, How2R, YouCook2R, TVQA, How2QA, VIOLIN, VLEP, TVC, YouCook2C) => {

        var t1, t2, t3, t4, t5, t6, t7, t8, t9, ret_avg_metric, qa_avg_metric, cap_avg_metric;
        if (TVR === "-") {
            t1 = 0;
        }
        else {
            t1 = TVR;
        }

        if (How2R === "-") {
            t2 = 0;
        }
        else {
            t2 = How2R;
        }

        if (YouCook2R === "-") {
            t3 = 0;
        }
        else {
            t3 = YouCook2R;
        }

        ret_avg_metric = (t1 + t2 + t3) / 3;
        ret_avg_metric = ret_avg_metric.toFixed(2);

        if (TVQA === "-") {
            t4 = 0;
        }
        else {
            t4 = TVQA;
        }

        if (How2QA === "-") {
            t5 = 0;
        }
        else {
            t5 = How2QA;
        }

        if (VIOLIN === "-") {
            t6 = 0;
        }
        else {
            t6 = VIOLIN;
        }

        if (VLEP === "-") {
            t7 = 0;
        }
        else {
            t7 = VLEP;
        }

        qa_avg_metric = (t4 + t5 + t6 + t7) / 4;
        qa_avg_metric = qa_avg_metric.toFixed(2);

        if (TVC === "-") {
            t8 = 0;
        }
        else {
            t8 = TVC;
        }

        if (YouCook2C === "-") {
            t9 = 0;
        }
        else {
            t9 = YouCook2C;
        }

        cap_avg_metric = (t8 + t9) / 2;
        cap_avg_metric = cap_avg_metric.toFixed(2);

        return (
            <tr>
                <td> {date} </td>
                <td> {model} </td>
                <td> {TVR} </td>
                <td> {How2R} </td>
                <td> {YouCook2R}</td>
                <td> {ret_avg_metric} </td>
                <td> {TVQA} </td>
                <td> {How2QA}</td>
                <td> {VIOLIN}</td>
                <td> {VLEP}</td>
                <td> {qa_avg_metric} </td>
                <td> {TVC} </td>
                <td> {YouCook2C}</td>
                <td> {cap_avg_metric} </td>
            </tr>
        );
    }

    buildIcon = (col) => {
        if (col !== this.state.lastCol) {
            return (
                <ArrowDownUp />
            );
        }
        else {
            if (this.state.direction === -1) {
                return (
                    <SortUp />
                );
            }
            else {
                return (
                    <SortDown />  
                );
            }
        }
    }

    render() {
        const rows = this.state.data.map((item) => this.buildTableRow(item.date, item.model, item.tvr, item.how2r, item.youcook2r, item.tvqa, item.how2qa, item.violin, item.vlep, item.tvc, item.youcook2c));
        var date = this.buildIcon("date");
        var t1 = this.buildIcon("tvr");
        var t2 = this.buildIcon("how2r");
        var t3 = this.buildIcon("youcook2r");
        var t4 = this.buildIcon("tvqa");
        var t5 = this.buildIcon("how2qa");
        var t6 = this.buildIcon("violin");
        var t7 = this.buildIcon("vlep");
        var t8 = this.buildIcon("tvc");
        var t9 = this.buildIcon("youcook2c");
        var ret_avg = this.buildIcon("ret_avg_metric");
        var qa_avg = this.buildIcon("qa_avg_metric");
        var cap_avg = this.buildIcon("cap_avg_metric");
        return (
            <div>
                <div class="container">
                    <h1> Leaderboard </h1>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th onClick={() => this.sortBy('date')}> Date Submitted {date} </th>
                                <th> Model </th>
                                <th onClick={() => this.sortBy('tvr')}> TVR {t1} </th>
                                <th onClick={() => this.sortBy('how2r')}> How2R {t2}</th>
                                <th onClick={() => this.sortBy('youcook2r')}> YouCook2R {t3}</th>
                                <th onClick={() => this.sortBy('ret_avg_metric')}> Retrieval Average {ret_avg} </th>
                                <th onClick={() => this.sortBy('tvqa')}> TVQA {t4}</th>
                                <th onClick={() => this.sortBy('how2qa')}> How2QA {t5}</th>
                                <th onClick={() => this.sortBy('violin')}> VIOLIN {t6}</th>
                                <th onClick={() => this.sortBy('vlep')}> VLEP {t7}</th>
                                <th onClick={() => this.sortBy('qa_avg_metric')}> QA Average {qa_avg}</th>
                                <th onClick={() => this.sortBy('tvc')}> TVC {t8}</th>
                                <th onClick={() => this.sortBy('youcook2c')}> YouCook2C {t9}</th>
                                <th onClick={() => this.sortBy('cap_avg_metric')}> Captioning Average {cap_avg}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}