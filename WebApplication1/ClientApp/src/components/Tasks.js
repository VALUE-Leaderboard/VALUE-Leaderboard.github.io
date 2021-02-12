import React, { Component } from 'react';
import { RETRIEVAL_MODEL, CAPTION_MODEL, QA_MODEL } from './TaskModel';
import { Download, BoxArrowDown } from 'react-bootstrap-icons';
import './Tasks.css'

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
            <table class="tasksTable">
                <thead>
                    <tr>
                        <th> Task Name</th>
                        <th> Download </th>
                        <th> Baseline </th>
                        <th> Metric </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="caption-row" colSpan={4}>
                            <b> Retrieval Tasks </b>
                        </td>
                    </tr>
                    {RETRIEVAL_MODEL.map((item) => this.buildWrapper(item.name, item.download, item.metric, item.code))}
                    <tr>
                        <td class="caption-row" colSpan={4}>
                            <b> Question Answering Tasks </b>
                        </td>
                    </tr>
                    {QA_MODEL.map((item) => this.buildWrapper(item.name, item.download, item.metric, item.code))}
                    <tr>
                        <td class="caption-row" colSpan={4}>
                            <b> Captioning Tasks </b>
                        </td>
                    </tr>
                    {CAPTION_MODEL.map((item) => this.buildWrapper(item.name, item.download, item.metric, item.code))}
                </tbody>
            </table>
        </div>
    );
    }
}
