'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.appStore = exports.IncludeQueryMetadataChanges = undefined;

var _initialState;

exports.setupBackend = setupBackend;

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

var IncludeQueryMetadataChanges = exports.IncludeQueryMetadataChanges = { includeQueryMetadataChanges: false

    // Make sure you are calling this first before using the Store.
};function setupBackend(mode, platform) {
    (0, _pounderFirebase.setupFirebase)(mode);

    if (platform === "desktop") {
        exports.IncludeQueryMetadataChanges = IncludeQueryMetadataChanges = { includeQueryMetadataChanges: true };
    } else {
        exports.IncludeQueryMetadataChanges = IncludeQueryMetadataChanges = { includeQueryMetadataChanges: false };
    }
}

var initialState = (_initialState = {
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
}, _defineProperty(_initialState, 'openTaskListSettingsMenuId', -1), _defineProperty(_initialState, 'projectsHavePendingWrites', false), _defineProperty(_initialState, 'projectLayoutsHavePendingWrites', false), _defineProperty(_initialState, 'taskListsHavePendingWrites', false), _defineProperty(_initialState, 'tasksHavePendingWrites', false), _defineProperty(_initialState, 'isTaskListJumpMenuOpen', false), _defineProperty(_initialState, 'isShuttingDown', false), _defineProperty(_initialState, 'appSettingsMenuPage', "general"), _initialState);

var appStore = exports.appStore = (0, _redux.createStore)(_index.appReducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument({ getFirestore: _pounderFirebase.getFirestore, getAuth: _pounderFirebase.getAuth }) /* Logger */));
