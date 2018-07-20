import { createStore, applyMiddleware } from 'redux';
import { appReducer } from './reducers/index';
import Logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { setupFirebase, getFirestore, getAuth, getFunctions, AccountConfigFallback } from 'pounder-firebase';
import { ProjectLayoutStore, CssConfigStore } from 'pounder-stores';
import { initializeDexie, getDexie, generalConfigFallback } from 'pounder-dexie';

export var includeMetadataChanges = { includeMetadataChanges: false }

// Make sure you are calling this first before using the Store.
export function setupBackend(mode, platform) {
    // Firebase.
    setupFirebase(mode);
    
    if (platform === "desktop") {
        includeMetadataChanges = { includeMetadataChanges: true }
    }

    else {
        includeMetadataChanges = { includeMetadataChanges: false }
    }

    // Dexie.
    initializeDexie();
}

var initialState = {
    projects: [],
    members: [],
    invites: [],
    localProjects: [],
    remoteProjects: [],
    remoteProjectIds: [],
    taskLists: [],
    localTaskLists: [],
    remoteTaskLists: [],
    tasks: [],
    localTasks: [],
    remoteTasks: [],
    focusedTaskListId: -1,
    openTaskListWidgetHeaderId: -1,
    openProjectSelectorId: -1,
    projectLayouts: [],
    localProjectLayouts: [],
    remoteProjectLayouts: [],
    selectedTask: {taskListWidgetId: -1, taskId: -1, isInputOpen: false, isMetadataOpen: false},
    selectedProjectId: -1,
    isSelectedProjectRemote: false,
    isATaskMoving: false,
    movingTaskId: -1,
    sourceTaskListId: -1,
    openCalendarId: -1,
    openTaskListSettingsMenuId: -1,
    isAwaitingFirebase: false,
    projectSelectorDueDateDisplays: [],
    isLockScreenDisplayed: false,
    lastBackupDate: "",
    openTaskListSettingsMenuId: -1,
    projectsHavePendingWrites: false,
    projectLayoutsHavePendingWrites: false,
    taskListsHavePendingWrites: false,
    tasksHavePendingWrites: false,
    isTaskListJumpMenuOpen: false,
    isShuttingDown: false,
    isStartingUp: true,
    appSettingsMenuPage: "general",
    databaseInfo: "",
    isDatabasePurging: false,
    isDatabaseRestoring: false,
    generalConfig: generalConfigFallback,
    isDexieConfigLoadComplete: false,
    isAppSettingsOpen: false,
    accountConfig: AccountConfigFallback,
    ignoreFullscreenTrigger: false,
    cssConfig: CssConfigStore, // Fallback values for CSS Config already exist within the CSS bundle.
    messageBox: {},
    authStatusMessage: "",
    isLoggingIn: false,
    isLoggedIn: false,
    userEmail: "",
    displayName: "",
    isSnackbarOpen: false,
    snackbarMessage: "",
    snackbarType: "infomation",
    isSnackbarSelfDismissing: false,
    isSidebarOpen: true,
    isShareMenuOpen: false,
    isShareMenuWaiting: false,
    shareMenuMessage: "",
    shareMenuSubMessage: "",
    updatingUserIds: [],
    updatingInviteIds: [],
    openTaskOptionsId: -1,
    showOnlySelfTasks: false,
    floatingTextInput: { isOpen: false, currentText: '', targetType: '', targetId: '' },
    isInRegisterMode: false,
}

export var appStore = createStore(
    appReducer,
    initialState,
applyMiddleware(ReduxThunk.withExtraArgument( { getFirestore, getAuth, getDexie, getFunctions } ), /* Logger */ )
);

// Types.
export const MessageBoxTypes = {
    STANDARD: "STANDARD",
    OK_ONLY: "OK_ONLY",
}