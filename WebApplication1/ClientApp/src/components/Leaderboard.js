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
        if (key !== this.state.lastCol) {
            this.setState({ direction: -1, lastCol: key })
        }
        else {
            this.setState({ direction: -1 * this.state.direction })
        }
        let arrayCopy = [...this.state.data];
        arrayCopy.sort(this.compareBy(key, this.state.direction));
        this.setState({ data: arrayCopy });
    }

    buildTableRow = (date, model, task1, task2, task3, task4, task5, task6) => {

        var t1, t2, t3, t4, t5, t6, t12_avg_metric, t34_avg_metric, t56_avg_metric;
        if (task1 === "-") {
            t1 = 0;
        }
        else {
            t1 = task1;
        }

        if (task2 === "-") {
            t2 = 0;
        }
        else {
            t2 = task2;
        }

        t12_avg_metric = (t1 + t2) / 2;

        if (task3 === "-") {
            t3 = 0;
        }
        else {
            t3 = task3;
        }

        if (task4 === "-") {
            t4 = 0;
        }
        else {
            t4 = task4;
        }

        t34_avg_metric = (t3 + t4) / 2;

        if (task5 === "-") {
            t5 = 0;
        }
        else {
            t5 = task5;
        }

        if (task6 === "-") {
            t6 = 0;
        }
        else {
            t6 = task6;
        }

        t56_avg_metric = (t5 + t6) / 2;

        return (
            <tr>
                <td> {date} </td>
                <td> {model} </td>
                <td> {task1} </td>
                <td> {task2}</td>
                <td> {t12_avg_metric} </td>
                <td> {task3} </td>
                <td> {task4}</td>
                <td> {t34_avg_metric} </td>
                <td> {task5} </td>
                <td> {task6}</td>
                <td> {t56_avg_metric} </td>
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
                    <SortDown />
                );
            }
            else {
                return (
                    <SortUp />  
                );
            }
        }
    }

    render() {
        const rows = this.state.data.map((item) => this.buildTableRow(item.date, item.model, item.task1, item.task2, item.task3, item.task4, item.task5, item.task6));
        var date = this.buildIcon("date");
        var t1 = this.buildIcon("task1");
        var t2 = this.buildIcon("task2");
        var t3 = this.buildIcon("task3");
        var t4 = this.buildIcon("task4");
        var t5 = this.buildIcon("task5");
        var t6 = this.buildIcon("task6");
        var t12_avg = this.buildIcon("t12_avg_metric");
        var t34_avg = this.buildIcon("t34_avg_metric");
        var t56_avg = this.buildIcon("t56_avg_metric");
        return (
            <div>
                <div class="container">
                    <h1> Leaderboard </h1>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th onClick={() => this.sortBy('date')}> Date Submitted {date} </th>
                                <th> Model </th>
                                <th onClick={() => this.sortBy('task1')}> Task1 {t1} </th>
                                <th onClick={() => this.sortBy('task2')}> Task2 {t2}</th>
                                <th onClick={() => this.sortBy('t12_avg_metric')}> TaskTypeMetric1 {t12_avg} </th>
                                <th onClick={() => this.sortBy('task3')}> Task3 {t3}</th>
                                <th onClick={() => this.sortBy('task4')}> Task4 {t4}</th>
                                <th onClick={() => this.sortBy('t34_avg_metric')}> TaskTypeMetric2 {t34_avg}</th>
                                <th onClick={() => this.sortBy('task5')}> Task5 {t5}</th>
                                <th onClick={() => this.sortBy('task6')}> Task6 {t6}</th>
                                <th onClick={() => this.sortBy('t56_avg_metric')}> TaskTypeMetric3 {t56_avg}</th>
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