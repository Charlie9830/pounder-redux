'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageBoxTypes = exports.appStore = exports.includeMetadataChanges = undefined;

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

var _pounderDexie = require('pounder-dexie');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var includeMetadataChanges = exports.includeMetadataChanges = { includeMetadataChanges: false

    // Make sure you are calling this first before using the Store.
};function setupBackend(mode, platform) {
    // Firebase.
    (0, _pounderFirebase.setupFirebase)(mode);

    if (platform === "desktop") {
        exports.includeMetadataChanges = includeMetadataChanges = { includeMetadataChanges: true };
    } else {
        exports.includeMetadataChanges = includeMetadataChanges = { includeMetadataChanges: false };
    }

    // Dexie.
    (0, _pounderDexie.initializeDexie)();
}

var initialState = (_initialState = {
    projects: [],
    remoteProjectIds: [],
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
}, _defineProperty(_initialState, 'openTaskListSettingsMenuId', -1), _defineProperty(_initialState, 'projectsHavePendingWrites', false), _defineProperty(_initialState, 'projectLayoutsHavePendingWrites', false), _defineProperty(_initialState, 'taskListsHavePendingWrites', false), _defineProperty(_initialState, 'tasksHavePendingWrites', false), _defineProperty(_initialState, 'isTaskListJumpMenuOpen', false), _defineProperty(_initialState, 'isShuttingDown', false), _defineProperty(_initialState, 'isStartingUp', true), _defineProperty(_initialState, 'appSettingsMenuPage', "general"), _defineProperty(_initialState, 'databaseInfo', ""), _defineProperty(_initialState, 'isDatabasePurging', false), _defineProperty(_initialState, 'isDatabaseRestoring', false), _defineProperty(_initialState, 'generalConfig', _pounderDexie.generalConfigFallback), _defineProperty(_initialState, 'isDexieConfigLoadComplete', false), _defineProperty(_initialState, 'isAppSettingsOpen', false), _defineProperty(_initialState, 'accountConfig', _pounderFirebase.AccountConfigFallback), _defineProperty(_initialState, 'ignoreFullscreenTrigger', false), _defineProperty(_initialState, 'cssConfig', _pounderStores.CssConfigStore), _defineProperty(_initialState, 'messageBox', {}), _defineProperty(_initialState, 'authStatusMessage', ""), _defineProperty(_initialState, 'isLoggingIn', false), _defineProperty(_initialState, 'isLoggedIn', false), _defineProperty(_initialState, 'userEmail', ""), _defineProperty(_initialState, 'displayName', "ConeBone69"), _defineProperty(_initialState, 'isSnackbarOpen', false), _defineProperty(_initialState, 'snackbarMessage', ""), _defineProperty(_initialState, 'isSnackbarSelfDismissing', false), _defineProperty(_initialState, 'isSidebarOpen', true), _defineProperty(_initialState, 'isShareMenuOpen', false), _defineProperty(_initialState, 'isInvitingUser', false), _defineProperty(_initialState, 'inviteUserMessage', ""), _initialState);

var appStore = exports.appStore = (0, _redux.createStore)(_index.appReducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument({ getFirestore: _pounderFirebase.getFirestore, getAuth: _pounderFirebase.getAuth, getDexie: _pounderDexie.getDexie, getFunctions: _pounderFirebase.getFunctions }) /* Logger */));

// Types.
var MessageBoxTypes = exports.MessageBoxTypes = {
    STANDARD: "STANDARD",
    OK_ONLY: "OK_ONLY"
};
