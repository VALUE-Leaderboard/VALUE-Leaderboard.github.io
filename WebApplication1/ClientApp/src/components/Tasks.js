import React, { Component } from 'react';
import { TASK_MODEL } from './TaskModel';
import { Download, BoxArrowDown } from 'react-bootstrap-icons';
import './tasks.css'

export class Tasks extends Component {
    displayName = Tasks.name

    buildWrapper = (name, download, metric, code) => {

        return (
            <tr>
                <td> {name} </td>
                <td> <a href={download}> <Download /> </a></td>
                <td> <a href={code}> <BoxArrowDown /> </a></td>
                <td> {metric} </td>
            </tr>
        );
    }

    render() {
    return (
        <div class="container">
            <h1>VALUE Tasks</h1>
            <table id="tasks"> 
                <tr>
                    <th> Task Name</th>
                    <th> Download </th>
                    <th> Baseline </th>
                    <th> Metric </th>
                </tr>
                {TASK_MODEL.map((item) => this.buildWrapper(item.name, item.download, item.metric, item.code))}
                </table>
        </div>
    );
    }
}
