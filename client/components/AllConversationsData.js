import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


// const data = [{name: 'Date', watchWord1: 3000, watchWord2: 1398},
// {name: 'Date', watchWord1: 2000, watchWord2: 9800},
// {name: 'Date', watchWord1: 2780, watchWord2: 3908},
// {name: 'Date', watchWord1: 1890, watchWord2: 4800},
// {name: 'Date', watchWord1: 2390, watchWord2: 3800},
// {name: 'Date', watchWord1: 3490, watchWord2: 4300}];

// [{"id":2,"name":"Quarterly report presentation with board","length":62,"date":"2017-12-21T20:16:52.640Z","createdAt":"2018-01-30T18:09:17.627Z","updatedAt":"2018-01-30T18:09:17.627Z","userId":1,"tone":{"id":1,"anger":"0.1","fear":"0.6","joy":"0.7","sadness":"0.5","analytical":"0.6","confident":"0.2","tentative":"0.6","createdAt":"2018-01-30T18:09:17.933Z","updatedAt":"2018-01-30T18:09:17.933Z","conversationId":2},"watchWords":[{"id":3,"wordOrPhrase":"Am i making sense","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":5,"createdAt":"2018-01-30T18:09:17.696Z","updatedAt":"2018-01-30T18:09:17.696Z","conversationId":2,"watchWordId":3}},{"id":7,"wordOrPhrase":"I’m not sure but","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":4,"createdAt":"2018-01-30T18:09:17.697Z","updatedAt":"2018-01-30T18:09:17.697Z","conversationId":2,"watchWordId":7}},{"id":4,"wordOrPhrase":"Just","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":1,"createdAt":"2018-01-30T18:09:17.696Z","updatedAt":"2018-01-30T18:09:17.696Z","conversationId":2,"watchWordId":4}},{"id":6,"wordOrPhrase":"I would just like to say","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":3,"createdAt":"2018-01-30T18:09:17.697Z","updatedAt":"2018-01-30T18:09:17.697Z","conversationId":2,"watchWordId":6}},{"id":2,"wordOrPhrase":"Does that make sense","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":2,"createdAt":"2018-01-30T18:09:17.696Z","updatedAt":"2018-01-30T18:09:17.696Z","conversationId":2,"watchWordId":2}},{"id":1,"wordOrPhrase":"I’m no expert but","createdAt":"2018-01-30T18:09:17.587Z","updatedAt":"2018-01-30T18:09:17.587Z","watchWordOccurrence":{"countOfTimesUsed":3,"createdAt":"2018-01-30T18:09:17.697Z","updatedAt":"2018-01-30T18:09:17.697Z","conversationId":2,"watchWordId":1}},{"id":5,"wordOrPhrase":"I’m sorry","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":6,"createdAt":"2018-01-30T18:09:17.697Z","updatedAt":"2018-01-30T18:09:17.697Z","conversationId":2,"watchWordId":5}}]},{"id":5,"name":"Potential partnership phone call","length":31,"date":"2017-11-13T22:16:52.640Z","createdAt":"2018-01-30T18:09:17.628Z","updatedAt":"2018-01-30T18:09:17.628Z","userId":1,"tone":{"id":3,"anger":"0.2","fear":"0.3","joy":"0.6","sadness":"0.5","analytical":"0.8","confident":"0.3","tentative":"0.4","createdAt":"2018-01-30T18:09:17.933Z","updatedAt":"2018-01-30T18:09:17.933Z","conversationId":5},"watchWords":[{"id":3,"wordOrPhrase":"Am i making sense","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":3,"createdAt":"2018-01-30T18:09:17.705Z","updatedAt":"2018-01-30T18:09:17.705Z","conversationId":5,"watchWordId":3}},{"id":9,"wordOrPhrase":"I would just like to ask","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":1,"createdAt":"2018-01-30T18:09:17.706Z","updatedAt":"2018-01-30T18:09:17.706Z","conversationId":5,"watchWordId":9}},{"id":6,"wordOrPhrase":"I would just like to say","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":2,"createdAt":"2018-01-30T18:09:17.705Z","updatedAt":"2018-01-30T18:09:17.705Z","conversationId":5,"watchWordId":6}},{"id":2,"wordOrPhrase":"Does that make sense","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":4,"createdAt":"2018-01-30T18:09:17.705Z","updatedAt":"2018-01-30T18:09:17.705Z","conversationId":5,"watchWordId":2}},{"id":7,"wordOrPhrase":"I’m not sure but","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":1,"createdAt":"2018-01-30T18:09:17.706Z","updatedAt":"2018-01-30T18:09:17.706Z","conversationId":5,"watchWordId":7}},{"id":4,"wordOrPhrase":"Just","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":1,"createdAt":"2018-01-30T18:09:17.705Z","updatedAt":"2018-01-30T18:09:17.705Z","conversationId":5,"watchWordId":4}},{"id":1,"wordOrPhrase":"I’m no expert but","createdAt":"2018-01-30T18:09:17.587Z","updatedAt":"2018-01-30T18:09:17.587Z","watchWordOccurrence":{"countOfTimesUsed":2,"createdAt":"2018-01-30T18:09:17.706Z","updatedAt":"2018-01-30T18:09:17.706Z","conversationId":5,"watchWordId":1}}]},{"id":1,"name":"Report phone call","length":34,"date":"2018-01-30T01:16:52.640Z","createdAt":"2018-01-30T18:09:17.626Z","updatedAt":"2018-01-30T18:09:17.626Z","userId":1,"tone":{"id":4,"anger":"0.1","fear":"0.6","joy":"0.7","sadness":"0.5","analytical":"0.6","confident":"0.2","tentative":"0.6","createdAt":"2018-01-30T18:09:17.933Z","updatedAt":"2018-01-30T18:09:17.933Z","conversationId":1},"watchWords":[{"id":1,"wordOrPhrase":"I’m no expert but","createdAt":"2018-01-30T18:09:17.587Z","updatedAt":"2018-01-30T18:09:17.587Z","watchWordOccurrence":{"countOfTimesUsed":1,"createdAt":"2018-01-30T18:09:17.693Z","updatedAt":"2018-01-30T18:09:17.693Z","conversationId":1,"watchWordId":1}},{"id":6,"wordOrPhrase":"I would just like to say","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":1,"createdAt":"2018-01-30T18:09:17.695Z","updatedAt":"2018-01-30T18:09:17.695Z","conversationId":1,"watchWordId":6}},{"id":4,"wordOrPhrase":"Just","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":2,"createdAt":"2018-01-30T18:09:17.694Z","updatedAt":"2018-01-30T18:09:17.694Z","conversationId":1,"watchWordId":4}},{"id":2,"wordOrPhrase":"Does that make sense","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":3,"createdAt":"2018-01-30T18:09:17.694Z","updatedAt":"2018-01-30T18:09:17.694Z","conversationId":1,"watchWordId":2}},{"id":9,"wordOrPhrase":"I would just like to ask","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":3,"createdAt":"2018-01-30T18:09:17.696Z","updatedAt":"2018-01-30T18:09:17.696Z","conversationId":1,"watchWordId":9}},{"id":5,"wordOrPhrase":"I’m sorry","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":6,"createdAt":"2018-01-30T18:09:17.695Z","updatedAt":"2018-01-30T18:09:17.695Z","conversationId":1,"watchWordId":5}},{"id":7,"wordOrPhrase":"I’m not sure but","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":2,"createdAt":"2018-01-30T18:09:17.695Z","updatedAt":"2018-01-30T18:09:17.695Z","conversationId":1,"watchWordId":7}},{"id":3,"wordOrPhrase":"Am i making sense","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":4,"createdAt":"2018-01-30T18:09:17.694Z","updatedAt":"2018-01-30T18:09:17.694Z","conversationId":1,"watchWordId":3}},{"id":8,"wordOrPhrase":"I was wondering","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":1,"createdAt":"2018-01-30T18:09:17.695Z","updatedAt":"2018-01-30T18:09:17.695Z","conversationId":1,"watchWordId":8}}]},{"id":4,"name":"Phone call with direct reports","length":23,"date":"2017-11-29T20:16:52.640Z","createdAt":"2018-01-30T18:09:17.628Z","updatedAt":"2018-01-30T18:09:17.628Z","userId":1,"tone":{"id":5,"anger":"0.3","fear":"0.7","joy":"0.3","sadness":"0.4","analytical":"0.4","confident":"0.2","tentative":"0.5","createdAt":"2018-01-30T18:09:17.933Z","updatedAt":"2018-01-30T18:09:17.933Z","conversationId":4},"watchWords":[{"id":2,"wordOrPhrase":"Does that make sense","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":1,"createdAt":"2018-01-30T18:09:17.703Z","updatedAt":"2018-01-30T18:09:17.703Z","conversationId":4,"watchWordId":2}},{"id":1,"wordOrPhrase":"I’m no expert but","createdAt":"2018-01-30T18:09:17.587Z","updatedAt":"2018-01-30T18:09:17.587Z","watchWordOccurrence":{"countOfTimesUsed":3,"createdAt":"2018-01-30T18:09:17.704Z","updatedAt":"2018-01-30T18:09:17.704Z","conversationId":4,"watchWordId":1}},{"id":7,"wordOrPhrase":"I’m not sure but","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":2,"createdAt":"2018-01-30T18:09:17.704Z","updatedAt":"2018-01-30T18:09:17.704Z","conversationId":4,"watchWordId":7}},{"id":3,"wordOrPhrase":"Am i making sense","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":2,"createdAt":"2018-01-30T18:09:17.702Z","updatedAt":"2018-01-30T18:09:17.702Z","conversationId":4,"watchWordId":3}},{"id":6,"wordOrPhrase":"I would just like to say","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":2,"createdAt":"2018-01-30T18:09:17.704Z","updatedAt":"2018-01-30T18:09:17.704Z","conversationId":4,"watchWordId":6}},{"id":4,"wordOrPhrase":"Just","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":1,"createdAt":"2018-01-30T18:09:17.703Z","updatedAt":"2018-01-30T18:09:17.703Z","conversationId":4,"watchWordId":4}},{"id":8,"wordOrPhrase":"I was wondering","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":1,"createdAt":"2018-01-30T18:09:17.704Z","updatedAt":"2018-01-30T18:09:17.704Z","conversationId":4,"watchWordId":8}},{"id":5,"wordOrPhrase":"I’m sorry","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":4,"createdAt":"2018-01-30T18:09:17.704Z","updatedAt":"2018-01-30T18:09:17.704Z","conversationId":4,"watchWordId":5}},{"id":9,"wordOrPhrase":"I would just like to ask","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":2,"createdAt":"2018-01-30T18:09:17.705Z","updatedAt":"2018-01-30T18:09:17.705Z","conversationId":4,"watchWordId":9}}]},{"id":3,"name":"Buyers meeting","length":44,"date":"2017-12-07T19:16:52.640Z","createdAt":"2018-01-30T18:09:17.627Z","updatedAt":"2018-01-30T18:09:17.627Z","userId":1,"tone":{"id":2,"anger":"0.1","fear":"0.6","joy":"0.7","sadness":"0.5","analytical":"0.6","confident":"0.2","tentative":"0.6","createdAt":"2018-01-30T18:09:17.933Z","updatedAt":"2018-01-30T18:09:17.933Z","conversationId":3},"watchWords":[{"id":5,"wordOrPhrase":"I’m sorry","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":3,"createdAt":"2018-01-30T18:09:17.701Z","updatedAt":"2018-01-30T18:09:17.701Z","conversationId":3,"watchWordId":5}},{"id":1,"wordOrPhrase":"I’m no expert but","createdAt":"2018-01-30T18:09:17.587Z","updatedAt":"2018-01-30T18:09:17.587Z","watchWordOccurrence":{"countOfTimesUsed":1,"createdAt":"2018-01-30T18:09:17.701Z","updatedAt":"2018-01-30T18:09:17.701Z","conversationId":3,"watchWordId":1}},{"id":3,"wordOrPhrase":"Am i making sense","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":4,"createdAt":"2018-01-30T18:09:17.698Z","updatedAt":"2018-01-30T18:09:17.698Z","conversationId":3,"watchWordId":3}},{"id":7,"wordOrPhrase":"I’m not sure but","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":4,"createdAt":"2018-01-30T18:09:17.701Z","updatedAt":"2018-01-30T18:09:17.701Z","conversationId":3,"watchWordId":7}},{"id":6,"wordOrPhrase":"I would just like to say","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":6,"createdAt":"2018-01-30T18:09:17.701Z","updatedAt":"2018-01-30T18:09:17.701Z","conversationId":3,"watchWordId":6}},{"id":2,"wordOrPhrase":"Does that make sense","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":2,"createdAt":"2018-01-30T18:09:17.698Z","updatedAt":"2018-01-30T18:09:17.698Z","conversationId":3,"watchWordId":2}},{"id":8,"wordOrPhrase":"I was wondering","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":1,"createdAt":"2018-01-30T18:09:17.702Z","updatedAt":"2018-01-30T18:09:17.702Z","conversationId":3,"watchWordId":8}},{"id":4,"wordOrPhrase":"Just","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":2,"createdAt":"2018-01-30T18:09:17.698Z","updatedAt":"2018-01-30T18:09:17.698Z","conversationId":3,"watchWordId":4}},{"id":9,"wordOrPhrase":"I would just like to ask","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":1,"createdAt":"2018-01-30T18:09:17.702Z","updatedAt":"2018-01-30T18:09:17.702Z","conversationId":3,"watchWordId":9}}]},{"id":6,"name":"Presentation practice","length":15,"date":"2017-10-23T20:16:52.640Z","createdAt":"2018-01-30T18:09:17.628Z","updatedAt":"2018-01-30T18:09:17.628Z","userId":1,"tone":{"id":6,"anger":"0.1","fear":"0.2","joy":"0.4","sadness":"0.4","analytical":"0.2","confident":"0.3","tentative":"0.4","createdAt":"2018-01-30T18:09:17.933Z","updatedAt":"2018-01-30T18:09:17.933Z","conversationId":6},"watchWords":[{"id":1,"wordOrPhrase":"I’m no expert but","createdAt":"2018-01-30T18:09:17.587Z","updatedAt":"2018-01-30T18:09:17.587Z","watchWordOccurrence":{"countOfTimesUsed":4,"createdAt":"2018-01-30T18:09:17.707Z","updatedAt":"2018-01-30T18:09:17.707Z","conversationId":6,"watchWordId":1}},{"id":4,"wordOrPhrase":"Just","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":2,"createdAt":"2018-01-30T18:09:17.706Z","updatedAt":"2018-01-30T18:09:17.706Z","conversationId":6,"watchWordId":4}},{"id":9,"wordOrPhrase":"I would just like to ask","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":3,"createdAt":"2018-01-30T18:09:17.708Z","updatedAt":"2018-01-30T18:09:17.708Z","conversationId":6,"watchWordId":9}},{"id":5,"wordOrPhrase":"I’m sorry","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":2,"createdAt":"2018-01-30T18:09:17.707Z","updatedAt":"2018-01-30T18:09:17.707Z","conversationId":6,"watchWordId":5}},{"id":2,"wordOrPhrase":"Does that make sense","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":3,"createdAt":"2018-01-30T18:09:17.706Z","updatedAt":"2018-01-30T18:09:17.706Z","conversationId":6,"watchWordId":2}},{"id":8,"wordOrPhrase":"I was wondering","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":2,"createdAt":"2018-01-30T18:09:17.708Z","updatedAt":"2018-01-30T18:09:17.708Z","conversationId":6,"watchWordId":8}},{"id":6,"wordOrPhrase":"I would just like to say","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":3,"createdAt":"2018-01-30T18:09:17.707Z","updatedAt":"2018-01-30T18:09:17.707Z","conversationId":6,"watchWordId":6}}]},{"id":7,"name":"Technical interview practice","length":33,"date":"2017-10-13T22:16:52.640Z","createdAt":"2018-01-30T18:09:17.628Z","updatedAt":"2018-01-30T18:09:17.628Z","userId":1,"tone":{"id":7,"anger":"0.1","fear":"0.6","joy":"0.6","sadness":"0.4","analytical":"0.8","confident":"0.3","tentative":"0.8","createdAt":"2018-01-30T18:09:17.934Z","updatedAt":"2018-01-30T18:09:17.934Z","conversationId":7},"watchWords":[{"id":3,"wordOrPhrase":"Am i making sense","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":3,"createdAt":"2018-01-30T18:09:17.708Z","updatedAt":"2018-01-30T18:09:17.708Z","conversationId":7,"watchWordId":3}},{"id":7,"wordOrPhrase":"I’m not sure but","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":4,"createdAt":"2018-01-30T18:09:17.709Z","updatedAt":"2018-01-30T18:09:17.709Z","conversationId":7,"watchWordId":7}},{"id":6,"wordOrPhrase":"I would just like to say","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":6,"createdAt":"2018-01-30T18:09:17.709Z","updatedAt":"2018-01-30T18:09:17.709Z","conversationId":7,"watchWordId":6}},{"id":4,"wordOrPhrase":"Just","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":2,"createdAt":"2018-01-30T18:09:17.709Z","updatedAt":"2018-01-30T18:09:17.709Z","conversationId":7,"watchWordId":4}},{"id":5,"wordOrPhrase":"I’m sorry","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":3,"createdAt":"2018-01-30T18:09:17.709Z","updatedAt":"2018-01-30T18:09:17.709Z","conversationId":7,"watchWordId":5}},{"id":9,"wordOrPhrase":"I would just like to ask","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":3,"createdAt":"2018-01-30T18:09:17.710Z","updatedAt":"2018-01-30T18:09:17.710Z","conversationId":7,"watchWordId":9}},{"id":2,"wordOrPhrase":"Does that make sense","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":1,"createdAt":"2018-01-30T18:09:17.708Z","updatedAt":"2018-01-30T18:09:17.708Z","conversationId":7,"watchWordId":2}},{"id":1,"wordOrPhrase":"I’m no expert but","createdAt":"2018-01-30T18:09:17.587Z","updatedAt":"2018-01-30T18:09:17.587Z","watchWordOccurrence":{"countOfTimesUsed":2,"createdAt":"2018-01-30T18:09:17.709Z","updatedAt":"2018-01-30T18:09:17.709Z","conversationId":7,"watchWordId":1}}]},{"id":8,"name":"Meeting with architects","length":42,"date":"2017-09-29T16:16:52.640Z","createdAt":"2018-01-30T18:09:17.628Z","updatedAt":"2018-01-30T18:09:17.628Z","userId":1,"tone":{"id":8,"anger":"0.1","fear":"0.6","joy":"0.7","sadness":"0.5","analytical":"0.6","confident":"0.2","tentative":"0.6","createdAt":"2018-01-30T18:09:17.934Z","updatedAt":"2018-01-30T18:09:17.934Z","conversationId":8},"watchWords":[{"id":2,"wordOrPhrase":"Does that make sense","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":1,"createdAt":"2018-01-30T18:09:17.710Z","updatedAt":"2018-01-30T18:09:17.710Z","conversationId":8,"watchWordId":2}},{"id":7,"wordOrPhrase":"I’m not sure but","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":4,"createdAt":"2018-01-30T18:09:17.711Z","updatedAt":"2018-01-30T18:09:17.711Z","conversationId":8,"watchWordId":7}},{"id":6,"wordOrPhrase":"I would just like to say","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":1,"createdAt":"2018-01-30T18:09:17.711Z","updatedAt":"2018-01-30T18:09:17.711Z","conversationId":8,"watchWordId":6}},{"id":3,"wordOrPhrase":"Am i making sense","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":2,"createdAt":"2018-01-30T18:09:17.710Z","updatedAt":"2018-01-30T18:09:17.710Z","conversationId":8,"watchWordId":3}},{"id":1,"wordOrPhrase":"I’m no expert but","createdAt":"2018-01-30T18:09:17.587Z","updatedAt":"2018-01-30T18:09:17.587Z","watchWordOccurrence":{"countOfTimesUsed":2,"createdAt":"2018-01-30T18:09:17.712Z","updatedAt":"2018-01-30T18:09:17.712Z","conversationId":8,"watchWordId":1}},{"id":5,"wordOrPhrase":"I’m sorry","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":5,"createdAt":"2018-01-30T18:09:17.710Z","updatedAt":"2018-01-30T18:09:17.710Z","conversationId":8,"watchWordId":5}},{"id":4,"wordOrPhrase":"Just","createdAt":"2018-01-30T18:09:17.588Z","updatedAt":"2018-01-30T18:09:17.588Z","watchWordOccurrence":{"countOfTimesUsed":2,"createdAt":"2018-01-30T18:09:17.710Z","updatedAt":"2018-01-30T18:09:17.710Z","conversationId":8,"watchWordId":4}},{"id":8,"wordOrPhrase":"I was wondering","createdAt":"2018-01-30T18:09:17.589Z","updatedAt":"2018-01-30T18:09:17.589Z","watchWordOccurrence":{"countOfTimesUsed":2,"createdAt":"2018-01-30T18:09:17.712Z","updatedAt":"2018-01-30T18:09:17.712Z","conversationId":8,"watchWordId":8}}]}]




const AllConversationsData = props => {
  const { conversations, watchWords } = props;

  let data = []
  conversations.forEach(conversation => {
    let obj = {}
    // console.log(conversation.id)
    obj.name = conversation.name
    conversations.length && watchWords.forEach(watchWord => {
      let count = conversation.watchWords.filter(wordObj => wordObj.wordOrPhrase === watchWord.wordOrPhrase)[0]
      obj[watchWord.wordOrPhrase] = count === undefined ? 0 : count.watchWordOccurrence.countOfTimesUsed
    })
    // console.log('!!!!!!', obj)
    data.push(obj)
  })
  console.log('!!!!!dataArray', data)

  return (
    <div className="container-horizontal" className="card">
      <div className="card-header">Your history</div>
      	<LineChart width={1000} height={500} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="name"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey="Am I making sense" stroke="#8884d8" activeDot={{r: 8}}/>
         <Line type="monotone" dataKey="Does that make sense" stroke="#82ca9d" />
         <Line type="monotone" dataKey="Just" stroke="#8884d8" activeDot={{r: 8}}/>
         <Line type="monotone" dataKey="I'm no expert but" stroke="#8884d8" activeDot={{r: 8}}/>
         <Line type="monotone" dataKey="I'm sorry" stroke="#8884d8" activeDot={{r: 8}}/>
         <Line type="monotone" dataKey="I would just like to say" stroke="#8884d8" activeDot={{r: 8}}/>
         <Line type="monotone" dataKey="I'm not sure but" stroke="#8884d8" activeDot={{r: 8}}/>
         <Line type="monotone" dataKey="I would just like to ask" stroke="#8884d8" activeDot={{r: 8}}/>
         <Line type="monotone" dataKey="I was wondering" stroke="#8884d8" activeDot={{r: 8}}/>
        </LineChart>
    </div>
  );
}


const mapState = state => {
  return {
    conversations: state.allConversations.defaultConversations,
    watchWords: state.watchWords
  };
};

const mapDispatch = null;

export default withRouter(connect(mapState, mapDispatch)(AllConversationsData));
