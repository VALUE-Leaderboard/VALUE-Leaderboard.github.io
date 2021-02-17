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

    buildTableRow = (date, model, TVR, How2R, YouCook2R, VatexR, TVQA, How2QA, VIOLIN, VLEP, TVC, YouCook2C, VatexC) => {

        var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, ret_avg_metric, qa_avg_metric, cap_avg_metric;
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

        if (VatexR === "-") {
            t4 = 0;
        }
        else {
            t4 = VatexR;
        }

        ret_avg_metric = (t1 + t2 + t3 + t4) / 4;
        ret_avg_metric = ret_avg_metric.toFixed(2);

        if (TVQA === "-") {
            t5 = 0;
        }
        else {
            t5 = TVQA;
        }

        if (How2QA === "-") {
            t6 = 0;
        }
        else {
            t6 = How2QA;
        }

        if (VIOLIN === "-") {
            t7 = 0;
        }
        else {
            t7 = VIOLIN;
        }

        if (VLEP === "-") {
            t8 = 0;
        }
        else {
            t8 = VLEP;
        }

        qa_avg_metric = (t5 + t6 + t7 + t8) / 4;
        qa_avg_metric = qa_avg_metric.toFixed(2);

        if (TVC === "-") {
            t9 = 0;
        }
        else {
            t9 = TVC;
        }

        if (YouCook2C === "-") {
            t10 = 0;
        }
        else {
            t10 = YouCook2C;
        }

        if (VatexC === "-") {
            t11 = 0;
        }
        else {
            t11 = VatexC;
        }

        cap_avg_metric = (t9 + t10 + t11) / 3;
        cap_avg_metric = cap_avg_metric.toFixed(2);

        return (
            <tr>
                <td> {date} </td>
                <td> {model} </td>
                <td> {TVR} </td>
                <td> {How2R} </td>
                <td> {YouCook2R}</td>
                <td> {VatexR}</td>
                <td> {ret_avg_metric} </td>
                <td> {TVQA} </td>
                <td> {How2QA}</td>
                <td> {VIOLIN}</td>
                <td> {VLEP}</td>
                <td> {qa_avg_metric} </td>
                <td> {TVC} </td>
                <td> {YouCook2C}</td>
                <td> {VatexC}</td>
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
        const rows = this.state.data.map((item) => this.buildTableRow(item.date, item.model, item.tvr, item.how2r, item.youcook2r, item.vatexr, item.tvqa, item.how2qa, item.violin, item.vlep, item.tvc, item.youcook2c, item.vatexc));
        var date = this.buildIcon("date");
        var t1 = this.buildIcon("tvr");
        var t2 = this.buildIcon("how2r");
        var t3 = this.buildIcon("youcook2r");
        var t4 = this.buildIcon("vatexr");
        var t5 = this.buildIcon("tvqa");
        var t6 = this.buildIcon("how2qa");
        var t7 = this.buildIcon("violin");
        var t8 = this.buildIcon("vlep");
        var t9 = this.buildIcon("tvc");
        var t10 = this.buildIcon("youcook2c");
        var t11 = this.buildIcon("vatexc");
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
                                <th onClick={() => this.sortBy('vatexr')}> VATEX EN R {t4}</th>
                                <th onClick={() => this.sortBy('ret_avg_metric')}> Retrieval Average {ret_avg} </th>
                                <th onClick={() => this.sortBy('tvqa')}> TVQA {t5}</th>
                                <th onClick={() => this.sortBy('how2qa')}> How2QA {t6}</th>
                                <th onClick={() => this.sortBy('violin')}> VIOLIN {t7}</th>
                                <th onClick={() => this.sortBy('vlep')}> VLEP {t8}</th>
                                <th onClick={() => this.sortBy('qa_avg_metric')}> QA Average {qa_avg}</th>
                                <th onClick={() => this.sortBy('tvc')}> TVC {t9}</th>
                                <th onClick={() => this.sortBy('youcook2c')}> YouCook2C {t10}</th>
                                <th onClick={() => this.sortBy('vatexc')}> VATEX EN C {t4}</th>
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