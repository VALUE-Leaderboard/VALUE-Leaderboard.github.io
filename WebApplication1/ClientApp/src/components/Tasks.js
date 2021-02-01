import React, { Component } from 'react';
import { TASK_MODEL } from './TaskModel';
import { Download } from 'react-bootstrap-icons';
import './tasks.css'

export class Tasks extends Component {
    displayName = Tasks.name

    buildWrapper = (name, download, metric) => {

        return (
            <tr>
                <td> {name} </td>
                <td> <a href={download}> <Download /> </a></td>
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
                    <th> Metric </th>
                </tr>
                {TASK_MODEL.map((item) => this.buildWrapper(item.name, item.download, item.metric))}
                </table>
        </div>
    );
    }
}
