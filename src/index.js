import { createStore, applyMiddleware } from 'redux';
import { appReducer } from './reducers/index';
import Logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { setupFirebase, getFirestore, getAuth } from 'pounder-firebase';
import { ProjectLayoutStore } from 'pounder-stores';

export var IncludeQueryMetadataChanges = { includeQueryMetadataChanges: false }

// Make sure you are calling this first before using the Store.
export function setupBackend(mode, platform) {
    setupFirebase(mode);
    
    if (platform === "desktop") {
        IncludeQueryMetadataChanges = { includeQueryMetadataChanges: true }
    }

    else {
        IncludeQueryMetadataChanges = { includeQueryMetadataChanges: false }
    }
}

var initialState = {
    projects: [],
    taskLists: [],
    tasks: [],
    focusedTaskListId: -1,
    projectLayout: new ProjectLayoutStore({}, -1, -1),
    selectedTask: {taskListWidgetId: -1, taskId: -1, isInputOpen: false},
    selectedProjectId: -1,
    isATaskMoving: false,
    movingTaskId: -1,
    sourceTaskListId: -1,
    openCalendarId: -1,
    openTaskListSettingsMenuId: -1,
    isAwaitingFirebase: false,
    projectSelectorDueDateDisplays: [],
    isLockScreenDisplayed: false,
    lastBackupMessage: "",
    openTaskListSettingsMenuId: -1,
    projectsHavePendingWrites: false,
    projectLayoutsHavePendingWrites: false,
    taskListsHavePendingWrites: false,
    tasksHavePendingWrites: false,
    isTaskListJumpMenuOpen: false,
    isShuttingDown: false,
    appSettingsMenuPage: "general",
    databaseInfo: "",
    isDatabasePurging: false,
    restoreDatabaseStatusMessage: "",
    isDatabaseRestoring: false,
    isRestoreDatabaseCompleteDialogOpen: false,
}

export var appStore = createStore(
    appReducer,
    initialState,
    applyMiddleware(ReduxThunk.withExtraArgument( { getFirestore, getAuth} ), /* Logger */)
);