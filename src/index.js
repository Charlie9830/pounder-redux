import { createStore, applyMiddleware } from 'redux';
import { appReducer } from './reducers/index';
import Logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { setupFirebase, getFirestore } from 'pounder-firebase';
import { ProjectLayoutStore } from 'pounder-stores';

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
    openTaskListSettingsMenuId: -1
}

setupFirebase("development");

export var appStore = createStore(
    appReducer,
    initialState,
    applyMiddleware(ReduxThunk.withExtraArgument(getFirestore), Logger)
);