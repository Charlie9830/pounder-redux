'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.appStore = undefined;

var _redux = require('redux');

var _index = require('./reducers/index');

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _pounderFirebase = require('pounder-firebase');

var _pounderStores = require('pounder-stores');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = _defineProperty({
    projects: [],
    taskLists: [],
    tasks: [],
    focusedTaskListId: -1,
    projectLayout: new _pounderStores.ProjectLayoutStore({}, -1, -1),
    selectedTask: { taskListWidgetId: -1, taskId: -1, isInputOpen: false },
    selectedProjectId: -1,
    isATaskMoving: false,
    movingTaskId: -1,
    sourceTaskListId: -1,
    openCalendarId: -1,
    openTaskListSettingsMenuId: -1,
    isAwaitingFirebase: false,
    projectSelectorDueDateDisplays: [],
    isLockScreenDisplayed: false,
    lastBackupMessage: ""
}, 'openTaskListSettingsMenuId', -1);

(0, _pounderFirebase.setupFirebase)("development");

var appStore = exports.appStore = (0, _redux.createStore)(_index.appReducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_pounderFirebase.getFirestore), _reduxLogger2.default));
