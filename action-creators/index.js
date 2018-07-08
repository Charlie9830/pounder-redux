'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.setUpdatingUserId = setUpdatingUserId;
exports.receiveMembers = receiveMembers;
exports.receiveInvites = receiveInvites;
exports.receiveRemoteProjects = receiveRemoteProjects;
exports.setDisplayName = setDisplayName;
exports.setShareMenuMessage = setShareMenuMessage;
exports.setShareMenuSubMessage = setShareMenuSubMessage;
exports.setIsShareMenuWaiting = setIsShareMenuWaiting;
exports.setIsShareMenuOpen = setIsShareMenuOpen;
exports.setIsSidebarOpen = setIsSidebarOpen;
exports.clearData = clearData;
exports.closeMetadata = closeMetadata;
exports.dismissSnackbar = dismissSnackbar;
exports.postSnackbarMessage = postSnackbarMessage;
exports.setIsLoggedInFlag = setIsLoggedInFlag;
exports.setUserEmail = setUserEmail;
exports.setIsLoggingInFlag = setIsLoggingInFlag;
exports.setAuthStatusMessage = setAuthStatusMessage;
exports.setMessageBox = setMessageBox;
exports.receiveCSSConfig = receiveCSSConfig;
exports.setIgnoreFullscreenTriggerFlag = setIgnoreFullscreenTriggerFlag;
exports.receiveAccountConfig = receiveAccountConfig;
exports.setIsAppSettingsOpen = setIsAppSettingsOpen;
exports.setIsDexieConfigLoadComplete = setIsDexieConfigLoadComplete;
exports.setIsDatabaseRestoringFlag = setIsDatabaseRestoringFlag;
exports.setIsStartingUpFlag = setIsStartingUpFlag;
exports.setIsRestoreDatabaseCompleteDialogOpen = setIsRestoreDatabaseCompleteDialogOpen;
exports.setDatabasePurgingFlag = setDatabasePurgingFlag;
exports.setDatabaseInfo = setDatabaseInfo;
exports.setAppSettingsMenuPage = setAppSettingsMenuPage;
exports.setIsShuttingDownFlag = setIsShuttingDownFlag;
exports.changeFocusedTaskList = changeFocusedTaskList;
exports.selectTask = selectTask;
exports.openTask = openTask;
exports.closeTask = closeTask;
exports.startTaskMove = startTaskMove;
exports.startTaskMoveInDatabase = startTaskMoveInDatabase;
exports.startProjectsFetch = startProjectsFetch;
exports.receiveLocalProjects = receiveLocalProjects;
exports.startTasksFetch = startTasksFetch;
exports.receiveLocalTasks = receiveLocalTasks;
exports.receiveRemoteTasks = receiveRemoteTasks;
exports.lockApp = lockApp;
exports.unlockApp = unlockApp;
exports.setLastBackupMessage = setLastBackupMessage;
exports.setOpenTaskListSettingsMenuId = setOpenTaskListSettingsMenuId;
exports.setUpdatingInviteIds = setUpdatingInviteIds;
exports.openCalendar = openCalendar;
exports.startTasklistAdd = startTasklistAdd;
exports.startTaskAdd = startTaskAdd;
exports.startTaskListsFetch = startTaskListsFetch;
exports.receiveLocalTaskLists = receiveLocalTaskLists;
exports.receiveRemoteTaskLists = receiveRemoteTaskLists;
exports.startProjectLayoutsFetch = startProjectLayoutsFetch;
exports.receiveLocalProjectLayouts = receiveLocalProjectLayouts;
exports.receiveRemoteProjectLayouts = receiveRemoteProjectLayouts;
exports.selectProject = selectProject;
exports.closeCalendar = closeCalendar;
exports.setProjectsHavePendingWrites = setProjectsHavePendingWrites;
exports.setProjectLayoutsHavePendingWrites = setProjectLayoutsHavePendingWrites;
exports.setTaskListsHavePendingWrites = setTaskListsHavePendingWrites;
exports.setTasksHavePendingWrites = setTasksHavePendingWrites;
exports.openTaskListJumpMenu = openTaskListJumpMenu;
exports.closeTaskListJumpMenu = closeTaskListJumpMenu;
exports.receiveGeneralConfig = receiveGeneralConfig;
exports.receiveRemoteProjectIds = receiveRemoteProjectIds;
exports.registerNewUserAsync = registerNewUserAsync;
exports.acceptProjectInviteAsync = acceptProjectInviteAsync;
exports.denyProjectInviteAsync = denyProjectInviteAsync;
exports.getRemoteProjectIdsAsync = getRemoteProjectIdsAsync;
exports.subscribeToRemoteProjectAsync = subscribeToRemoteProjectAsync;
exports.unsubscribeFromRemoteProjectAsync = unsubscribeFromRemoteProjectAsync;
exports.migrateProjectBackToLocalAsync = migrateProjectBackToLocalAsync;
exports.inviteUserToProjectAsync = inviteUserToProjectAsync;
exports.updateMemberRoleAsync = updateMemberRoleAsync;
exports.kickUserFromProjectAsync = kickUserFromProjectAsync;
exports.attachAuthListenerAsync = attachAuthListenerAsync;
exports.subscribeToDatabaseAsync = subscribeToDatabaseAsync;
exports.getInvitesAsync = getInvitesAsync;
exports.unsubscribeFromDatabaseAsync = unsubscribeFromDatabaseAsync;
exports.unsubscribeRemoteIds = unsubscribeRemoteIds;
exports.logOutUserAsync = logOutUserAsync;
exports.logInUserAsync = logInUserAsync;
exports.setFavouriteProjectIdAsync = setFavouriteProjectIdAsync;
exports.getGeneralConfigAsync = getGeneralConfigAsync;
exports.getCSSConfigAsync = getCSSConfigAsync;
exports.setAllColorsToDefaultAsync = setAllColorsToDefaultAsync;
exports.setCSSConfigAsync = setCSSConfigAsync;
exports.setGeneralConfigAsync = setGeneralConfigAsync;
exports.purgeCompleteTasksAsync = purgeCompleteTasksAsync;
exports.getDatabaseInfoAsync = getDatabaseInfoAsync;
exports.updateTaskPriority = updateTaskPriority;
exports.updateTaskDueDateAsync = updateTaskDueDateAsync;
exports.updateTaskListSettingsAsync = updateTaskListSettingsAsync;
exports.removeTaskListAsync = removeTaskListAsync;
exports.updateProjectNameAsync = updateProjectNameAsync;
exports.removeProjectAsync = removeProjectAsync;
exports.removeRemoteProjectAsync = removeRemoteProjectAsync;
exports.addNewProjectAsync = addNewProjectAsync;
exports.updateTaskCompleteAsync = updateTaskCompleteAsync;
exports.updateProjectLayoutAsync = updateProjectLayoutAsync;
exports.updateTaskNameAsync = updateTaskNameAsync;
exports.removeSelectedTaskAsync = removeSelectedTaskAsync;
exports.updateTaskListWidgetHeaderAsync = updateTaskListWidgetHeaderAsync;
exports.moveTaskAsync = moveTaskAsync;
exports.addNewTaskAsync = addNewTaskAsync;
exports.addNewTaskListAsync = addNewTaskListAsync;
exports.getAccountConfigAsync = getAccountConfigAsync;
exports.getProjectsAsync = getProjectsAsync;
exports.getTasksAsync = getTasksAsync;
exports.getTaskListsAsync = getTaskListsAsync;
exports.getLocalProjectLayoutsAsync = getLocalProjectLayoutsAsync;
exports.unsubscribeAccountConfigAsync = unsubscribeAccountConfigAsync;
exports.unsubscribeProjectsAsync = unsubscribeProjectsAsync;
exports.unsubscribeTaskListsAsync = unsubscribeTaskListsAsync;
exports.unsubscribeTasksAsync = unsubscribeTasksAsync;
exports.unsubscribeInvitesAsync = unsubscribeInvitesAsync;
exports.unsubscribeProjectLayoutsAsync = unsubscribeProjectLayoutsAsync;

var _index = require('../action-types/index');

var ActionTypes = _interopRequireWildcard(_index);

var _pounderFirebase = require('pounder-firebase');

var _pounderStores = require('pounder-stores');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _index2 = require('../index');

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _stringArgv = require('string-argv');

var _stringArgv2 = _interopRequireDefault(_stringArgv);

var _pounderUtilities = require('pounder-utilities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var legalArgsRegEx = / -dd | -hp /i;
var DATE_FORMAT = 'dddd MMMM Do YYYY, h:mm a';

// Standard Action Creators.
function setUpdatingUserId(userId) {
    return {
        type: ActionTypes.SET_UPDATING_USER_ID,
        value: userId
    };
}

function receiveMembers(members) {
    return {
        type: ActionTypes.RECEIVE_MEMBERS,
        members: members
    };
}

function receiveInvites(invites) {
    return {
        type: ActionTypes.RECEIVE_INVITES,
        invites: invites
    };
}

function receiveRemoteProjects(projects) {
    return {
        type: ActionTypes.RECEIVE_REMOTE_PROJECTS,
        projects: projects
    };
}

function setDisplayName(displayName) {
    return {
        type: ActionTypes.SET_DISPLAY_NAME,
        value: displayName
    };
}

function setShareMenuMessage(message) {
    return {
        type: ActionTypes.SET_SHARE_MENU_MESSAGE,
        value: message
    };
}

function setShareMenuSubMessage(message) {
    return {
        type: ActionTypes.SET_SHARE_MENU_SUB_MESSAGE,
        value: message
    };
}

function setIsShareMenuWaiting(value) {
    return {
        type: ActionTypes.SET_IS_SHARE_MENU_WAITING,
        value: value
    };
}

function setIsShareMenuOpen(isOpen) {
    return {
        type: ActionTypes.SET_IS_SHARE_MENU_OPEN,
        value: isOpen
    };
}
function setIsSidebarOpen(isOpen) {
    return {
        type: ActionTypes.SET_IS_SIDEBAR_OPEN,
        value: isOpen
    };
}
function clearData() {
    return {
        type: ActionTypes.CLEAR_DATA
    };
}

function closeMetadata() {
    return {
        type: ActionTypes.CLOSE_METADATA
    };
}

function dismissSnackbar() {
    return {
        type: ActionTypes.DISMISS_SNACKBAR
    };
}

function postSnackbarMessage(message, isSelfDismissing) {
    return {
        type: ActionTypes.POST_SNACKBAR_MESSAGE,
        message: message,
        isSelfDismissing: isSelfDismissing
    };
}

function setIsLoggedInFlag(isLoggedIn) {
    return {
        type: ActionTypes.SET_IS_LOGGED_IN_FLAG,
        value: isLoggedIn
    };
}

function setUserEmail(email) {
    return {
        type: ActionTypes.SET_USER_EMAIL,
        value: email
    };
}

function setIsLoggingInFlag(isLoggingIn) {
    return {
        type: ActionTypes.SET_IS_LOGGING_IN_FLAG,
        value: isLoggingIn
    };
}

function setAuthStatusMessage(message) {
    return {
        type: ActionTypes.SET_AUTH_STATUS_MESSAGE,
        value: message
    };
}

function setMessageBox(isOpen, message, type, dataStore, closeCallback) {
    return {
        type: ActionTypes.SET_MESSAGE_BOX,
        value: {
            isOpen: isOpen,
            message: message,
            type: type,
            closeCallback: closeCallback
        }
    };
}

function receiveCSSConfig(config) {
    return {
        type: ActionTypes.RECEIVE_CSS_CONFIG,
        value: config
    };
}
function setIgnoreFullscreenTriggerFlag(value) {
    return {
        type: ActionTypes.SET_IGNORE_FULLSCREEN_TRIGGER_FLAG,
        value: value
    };
}

function receiveAccountConfig(accountConfig) {
    return {
        type: ActionTypes.RECEIVE_ACCOUNT_CONFIG,
        value: accountConfig
    };
}

function setIsAppSettingsOpen(isOpen) {
    return {
        type: ActionTypes.SET_IS_APP_SETTINGS_OPEN,
        value: isOpen
    };
}

function setIsDexieConfigLoadComplete(isComplete) {
    return {
        type: ActionTypes.SET_IS_DEXIE_CONFIG_LOAD_COMPLETE_FLAG,
        value: isComplete
    };
}

function setIsDatabaseRestoringFlag(isRestoring) {
    return {
        type: ActionTypes.SET_IS_DATABASE_RESTORING_FLAG,
        value: isRestoring
    };
}

function setIsStartingUpFlag(isStartingUp) {
    return {
        type: ActionTypes.SET_IS_STARTING_UP_FLAG,
        value: isStartingUp
    };
}

function setIsRestoreDatabaseCompleteDialogOpen(isOpen) {
    return {
        type: ActionTypes.SET_IS_RESTORE_DATABASE_COMPLETE_DIALOG_OPEN,
        value: isOpen
    };
}

function setDatabasePurgingFlag(isPurging) {
    return {
        type: ActionTypes.SET_DATABASE_PURGING_FLAG,
        value: isPurging
    };
}

function setDatabaseInfo(info) {
    return {
        type: ActionTypes.SET_DATABASE_INFO,
        value: info
    };
}

function setAppSettingsMenuPage(pageName) {
    return {
        type: ActionTypes.SET_APP_SETTINGS_MENU_PAGE,
        value: pageName
    };
}

function setIsShuttingDownFlag(isShuttingDown) {
    return {
        type: ActionTypes.SET_IS_SHUTTING_DOWN_FLAG,
        value: isShuttingDown
    };
}

function changeFocusedTaskList(id) {
    return {
        type: ActionTypes.CHANGE_FOCUSED_TASKLIST,
        id: id
    };
}

function selectTask(taskListWidgetId, taskId, openMetadata) {
    return {
        type: ActionTypes.SELECT_TASK,
        taskListWidgetId: taskListWidgetId,
        taskId: taskId,
        openMetadata: openMetadata
    };
}

function openTask(taskListWidgetId, taskId) {
    return {
        type: ActionTypes.OPEN_TASK,
        taskListWidgetId: taskListWidgetId,
        taskId: taskId
    };
}

function closeTask(taskListWidgetId, taskId) {
    return {
        type: ActionTypes.CLOSE_TASK,
        taskListWidgetId: taskListWidgetId,
        taskId: taskId
    };
}

function startTaskMove(movingTaskId, sourceTaskListWidgetId) {
    return {
        type: ActionTypes.START_TASK_MOVE,
        movingTaskId: movingTaskId,
        sourceTaskListWidgetId: sourceTaskListWidgetId
    };
}

function startTaskMoveInDatabase() {
    return {
        type: ActionTypes.START_TASK_MOVE_IN_DATABASE
    };
}

function startProjectsFetch() {
    return {
        type: ActionTypes.START_PROJECTS_FETCH
    };
}

function receiveLocalProjects(projects) {
    return {
        type: ActionTypes.RECEIVE_LOCAL_PROJECTS,
        projects: projects
    };
}

function startTasksFetch() {
    return {
        type: ActionTypes.START_TASKS_FETCH
    };
}

function receiveLocalTasks(tasks) {
    return {
        type: ActionTypes.RECEIVE_LOCAL_TASKS,
        tasks: tasks
    };
}

function receiveRemoteTasks(tasks) {
    return {
        type: ActionTypes.RECEIVE_REMOTE_TASKS,
        tasks: tasks
    };
}

function lockApp() {
    return {
        type: ActionTypes.LOCK_APP
    };
}

function unlockApp() {
    return {
        type: ActionTypes.UNLOCK_APP
    };
}

function setLastBackupMessage(message) {
    return {
        type: ActionTypes.SET_LAST_BACKUP_MESSAGE,
        message: message
    };
}

function setOpenTaskListSettingsMenuId(id) {
    return {
        type: ActionTypes.SET_OPEN_TASKLIST_SETTINGS_MENU_ID,
        id: id
    };
}

function setUpdatingInviteIds(updatingInviteIds) {
    return {
        type: ActionTypes.SET_UPDATING_INVITE_IDS,
        value: updatingInviteIds
    };
}

function openCalendar(taskListWidgetId, taskId) {
    return {
        type: ActionTypes.OPEN_CALENDAR,
        taskListWidgetId: taskListWidgetId,
        taskId: taskId
    };
}

function startTasklistAdd() {
    return {
        type: ActionTypes.START_TASKLIST_ADD
    };
}

function startTaskAdd() {
    return {
        type: ActionTypes.START_TASK_ADD
    };
}

function startTaskListsFetch() {
    return {
        type: ActionTypes.START_TASKLISTS_FETCH
    };
}

function receiveLocalTaskLists(taskLists) {
    return {
        type: ActionTypes.RECEIVE_LOCAL_TASKLISTS,
        taskLists: taskLists
    };
}

function receiveRemoteTaskLists(taskLists) {
    return {
        type: ActionTypes.RECEIVE_REMOTE_TASKLISTS,
        taskLists: taskLists
    };
}

function startProjectLayoutsFetch() {
    return {
        type: ActionTypes.START_PROJECTLAYOUTS_FETCH
    };
}

function receiveLocalProjectLayouts(projectLayouts) {
    return {
        type: ActionTypes.RECEIVE_LOCAL_PROJECTLAYOUTS,
        value: projectLayouts
    };
}

function receiveRemoteProjectLayouts(projectLayouts) {
    return {
        type: ActionTypes.RECEIVE_REMOTE_PROJECTLAYOUTS,
        value: projectLayouts
    };
}

function selectProject(projectId) {
    return {
        type: ActionTypes.SELECT_PROJECT,
        projectId: projectId
    };
}

function closeCalendar() {
    return {
        type: ActionTypes.CLOSE_CALENDAR
    };
}

function setProjectsHavePendingWrites(value) {
    return {
        type: ActionTypes.SET_PROJECTS_HAVE_PENDING_WRITES,
        value: value
    };
}

function setProjectLayoutsHavePendingWrites(value) {
    return {
        type: ActionTypes.SET_PROJECTLAYOUTS_HAVE_PENDING_WRITES,
        value: value
    };
}

function setTaskListsHavePendingWrites(value) {
    return {
        type: ActionTypes.SET_TASKLISTS_HAVE_PENDING_WRITES,
        value: value
    };
}

function setTasksHavePendingWrites(value) {
    return {
        type: ActionTypes.SET_TASKS_HAVE_PENDING_WRITES,
        value: value
    };
}

function openTaskListJumpMenu() {
    return {
        type: ActionTypes.OPEN_TASK_LIST_JUMP_MENU
    };
}

function closeTaskListJumpMenu() {
    return {
        type: ActionTypes.CLOSE_TASK_LIST_JUMP_MENU
    };
}

function receiveGeneralConfig(config) {
    return {
        type: ActionTypes.RECEIVE_GENERAL_CONFIG,
        value: config
    };
}

function receiveRemoteProjectIds(ids) {
    return {
        type: ActionTypes.RECEIVE_REMOTE_PROJECT_IDS,
        value: ids
    };
}

// Private Actions.
// Should only be dispatched by moveTaskAsync(), as moveTaskAsync() gets the movingTaskId from the State. Calling this from elsewhere
// could create a race Condition.
function endTaskMove(movingTaskId, destinationTaskListWidgetId) {
    return {
        type: ActionTypes.END_TASK_MOVE,
        movedTaskId: movingTaskId,
        destinationTaskListWidgetId: destinationTaskListWidgetId
    };
}

// Thunks
function registerNewUserAsync(email, password, displayName) {
    return function (dispatch, getState, _ref) {
        var getFirestore = _ref.getFirestore,
            getAuth = _ref.getAuth,
            getDexie = _ref.getDexie,
            getFunctions = _ref.getFunctions;

        dispatch(setAuthStatusMessage("Registering..."));

        getAuth().createUserWithEmailAndPassword(email, password).then(function () {
            // User Created. Update their DisplayName.
            getAuth().currentUser.updateProfile({ displayName: displayName }).then(function () {
                // Complete
                dispatch(setDisplayName(displayName));
            }).catch(function (error) {
                handleFirebaseUpdateError(error, getState(), dispatch);
            });
        }).catch(function (error) {
            var message = parseFirebaseError(error);
            dispatch(postSnackbarMessage(message, true));
            dispatch(setIsLoggingInFlag(false));
            dispatch(setAuthStatusMessage(""));
        });
    };
}

function acceptProjectInviteAsync(projectId) {
    return function (dispatch, getState, _ref2) {
        var getFirestore = _ref2.getFirestore,
            getAuth = _ref2.getAuth,
            getDexie = _ref2.getDexie,
            getFunctions = _ref2.getFunctions;

        addUpdatingInviteId(dispatch, getState, projectId);

        var acceptProjectInvite = getFunctions().httpsCallable('acceptProjectInvite');
        acceptProjectInvite({ projectId: projectId }).then(function () {
            var inviteRef = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.INVITES).doc(projectId);
            inviteRef.delete().then(function () {
                // Success.
                removeUpdatingInviteId(dispatch, getState, projectId);
            }).catch(function (error) {
                dispatch(handleFirebaseUpdateError(error, getState(), dispatch));
                removeUpdatingInviteId(dispatch, getState, projectId);
            });
        }).catch(function (error) {
            var message = 'An Error occured, are you sure you are connected to the internet? Error Message : ' + error.message;
            dispatch(postSnackbarMessage(message, false));
            removeUpdatingInviteId(dispatch, getState, projectId);
        });
    };
}

function addUpdatingInviteId(dispatch, getState, projectId) {
    var inviteIds = getState().updatingInviteIds;
    inviteIds[projectId] = projectId;
    dispatch(setUpdatingInviteIds(inviteIds));
}

function removeUpdatingInviteId(dispatch, getState, projectId) {
    var inviteIds = getState().updatingInviteIds;
    if (inviteIds.hasOwnProperty(projectId)) {
        delete inviteIds[projectId];
    }

    dispatch(setUpdatingInviteIds(inviteIds));
}

function denyProjectInviteAsync(projectId) {
    return function (dispatch, getState, _ref3) {
        var getFirestore = _ref3.getFirestore,
            getAuth = _ref3.getAuth,
            getDexie = _ref3.getDexie,
            getFunctions = _ref3.getFunctions;

        var inviteRef = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.INVITES).doc(projectId);

        inviteRef.delete().then(function () {
            // Success.
            var denyProjectInvite = getFunctions().httpsCallable('denyProjectInvite');
            denyProjectInvite({ projectId: projectId }).then(function (result) {
                if (result.data.status === 'error') {
                    dispatch(postSnackbarMessage(result.data.message, false));
                }
            });
        }).catch(function (error) {
            dispatch(handleFirebaseUpdateError(error, getState(), dispatch));
        });
    };
}

function getRemoteProjectIdsAsync() {
    return function (dispatch, getState, _ref4) {
        var getFirestore = _ref4.getFirestore,
            getAuth = _ref4.getAuth,
            getDexie = _ref4.getDexie,
            getFunctions = _ref4.getFunctions;

        getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.REMOTE_IDS).onSnapshot(function (snapshot) {
            if (snapshot.docChanges().length > 0) {
                var remoteProjectIds = [];

                snapshot.forEach(function (doc) {
                    remoteProjectIds.push(doc.data().projectId);
                });

                dispatch(receiveRemoteProjectIds(remoteProjectIds));

                snapshot.docChanges().forEach(function (change) {
                    if (change.type === "added") {
                        dispatch(subscribeToRemoteProjectAsync(change.doc.data().projectId));
                    }

                    if (change.type === "removed") {
                        dispatch(unsubscribeFromRemoteProjectAsync(change.doc.data().projectId));
                    }
                });
            }
        }, function (error) {
            handleFirebaseSnapshotError(error, getState(), dispatch);
        });
    };
}

function subscribeToRemoteProjectAsync(projectId) {
    return function (dispatch, getState, _ref5) {
        var getFirestore = _ref5.getFirestore,
            getAuth = _ref5.getAuth,
            getDexie = _ref5.getDexie,
            getFunctions = _ref5.getFunctions;

        // Top Level Project Info.
        getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId).onSnapshot(function (doc) {
            if (doc.exists) {
                var projectName = doc.get('projectName');
                var members = doc.get('members');

                var filteredProjects = getState().remoteProjects.filter(function (item) {
                    return item.uid !== doc.id;
                });

                filteredProjects.push({ projectName: projectName, members: members, uid: doc.id, isRemote: true });
                dispatch(receiveRemoteProjects(filteredProjects));
            }
        });

        // Members.
        getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId).collection(_pounderFirebase.MEMBERS).onSnapshot(function (snapshot) {
            handleMembersSnapshot(getState, dispatch, snapshot, projectId);
        });

        // TaskLists.
        getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId).collection(_pounderFirebase.TASKLISTS).onSnapshot(_index2.includeMetadataChanges, function (snapshot) {
            handleTaskListsSnapshot(getState, dispatch, true, snapshot, projectId);
        });

        // Tasks.
        getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId).collection(_pounderFirebase.TASKS).orderBy('project').onSnapshot(_index2.includeMetadataChanges, function (snapshot) {
            handleTasksSnapshot(getState, dispatch, true, snapshot, projectId);
        });

        // ProjectLayout.
        getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId).collection(_pounderFirebase.PROJECTLAYOUTS).onSnapshot(_index2.includeMetadataChanges, function (snapshot) {
            handleProjectLayoutsSnapshot(getState, dispatch, true, snapshot, projectId);
        });
    };
}

function handleMembersSnapshot(getState, dispatch, snapshot, projectId) {
    if (snapshot.docChanges().length > 0) {
        var currentMembers = getState().members;

        var filteredMembers = currentMembers.filter(function (item) {
            return item.project !== projectId;
        });

        snapshot.forEach(function (doc) {
            filteredMembers.push(doc.data());
        });

        dispatch(receiveMembers(filteredMembers));
    }
}

function unsubscribeFromRemoteProjectAsync(projectId) {
    return function (dispatch, getState, _ref6) {
        var getFirestore = _ref6.getFirestore,
            getAuth = _ref6.getAuth,
            getDexie = _ref6.getDexie,
            getFunctions = _ref6.getFunctions;

        // Project.
        var projectUnsubscribe = getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId).onSnapshot(function (doc) {});
        projectUnsubscribe();

        var remoteProjects = getState().remoteProjects.filter(function (item) {
            return item.uid !== projectId;
        });
        dispatch(receiveRemoteProjects(remoteProjects));

        // TaskLists.
        var taskListsUnsubscribe = getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId).collection(_pounderFirebase.TASKLISTS).onSnapshot(function (snapshot) {});
        taskListsUnsubscribe();

        var taskLists = getState().remoteTaskLists.filter(function (item) {
            return item.project !== projectId;
        });
        dispatch(receiveRemoteTaskLists(taskLists));

        // Tasks.
        var tasksUnsubscribe = getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId).collection(_pounderFirebase.TASKS).onSnapshot(function (snapshot) {});
        tasksUnsubscribe();

        var tasks = getState().remoteTasks.filter(function (item) {
            return item.project !== projectId;
        });
        dispatch(receiveRemoteTasks(tasks));

        // ProjectLayout.
        var projectLayoutsUnsubscribe = getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId).collection(_pounderFirebase.PROJECTLAYOUTS).onSnapshot(function (snapshot) {});
        projectLayoutsUnsubscribe();

        var projectLayouts = getState().remoteProjectLayouts.filter(function (item) {
            return item.project !== projectId;
        });
        dispatch(receiveRemoteProjectLayouts(projectLayouts));
    };
}

function migrateProjectBackToLocalAsync(projectId, projectName) {
    return function (dispatch, getState, _ref7) {
        var getFirestore = _ref7.getFirestore,
            getAuth = _ref7.getAuth,
            getDexie = _ref7.getDexie,
            getFunctions = _ref7.getFunctions;

        dispatch(setIsShareMenuWaiting(true));
        dispatch(setShareMenuMessage("Migrating project."));

        var kickAllUsersFromProject = getFunctions().httpsCallable('kickAllUsersFromProject');
        kickAllUsersFromProject({ projectId: projectId }).then(function (result) {
            if (result.data.status === 'complete') {
                dispatch(unsubscribeFromDatabaseAsync());

                moveProjectToLocalLocationAsync(getFirestore, projectId, projectName).then(function () {
                    dispatch(subscribeToDatabaseAsync());
                    dispatch(setIsShareMenuWaiting(false));
                    dispatch(setShareMenuMessage(""));
                }).catch(function (error) {
                    dispatch(postSnackbarMessage(error.message, false));
                    dispatch(setIsShareMenuWaiting(false));
                    dispatch(setShareMenuMessage(""));
                });
            }

            if (result.data.status === 'error') {
                dispatch(postSnackbarMessage(result.data.message, false));
                dispatch(setIsShareMenuWaiting(false));
                dispatch(setShareMenuMessage(""));
            }
        }).catch(function (error) {
            var message = 'An Error occured, are you sure you are connected to the internet? Error Message : ' + error.message;
            dispatch(postSnackbarMessage(message, false));
            dispatch(setIsShareMenuWaiting(false));
            dispatch(setShareMenuMessage(""));
        });
    };
}

function moveProjectToLocalLocationAsync(getFirestore, projectId, projectName) {
    return new Promise(function (resolve, reject) {
        // Transfer Project to Local Location.
        var remoteRef = getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId);
        var targetBatch = getFirestore().batch();
        var sourceBatch = getFirestore().batch();
        var requests = [];

        // Top Level Project Data.
        var project = {
            uid: projectId,
            projectName: projectName,
            isRemote: false

            // Project
        };var topLevelUserRef = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.PROJECTS).doc(projectId);
        targetBatch.set(topLevelUserRef, project);

        var topLevelRemoteRef = getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId);
        sourceBatch.delete(topLevelRemoteRef);

        // Project Layout
        requests.push(remoteRef.collection(_pounderFirebase.PROJECTLAYOUTS).doc(projectId).get().then(function (layoutDoc) {
            if (layoutDoc.exists) {
                var ref = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.PROJECTLAYOUTS).doc(layoutDoc.id);
                targetBatch.set(ref, layoutDoc.data());
                sourceBatch.delete(layoutDoc.ref);
            }
        }));

        // Task Lists.
        requests.push(remoteRef.collection(_pounderFirebase.TASKLISTS).where('project', '==', projectId).get().then(function (taskListsSnapshot) {
            taskListsSnapshot.forEach(function (taskListDoc) {
                var ref = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.TASKLISTS).doc(taskListDoc.id);
                targetBatch.set(ref, taskListDoc.data());
                sourceBatch.delete(taskListDoc.ref);
            });
        }));

        // Tasks.
        requests.push(remoteRef.collection(_pounderFirebase.TASKS).where('project', '==', projectId).get().then(function (tasksSnapshot) {
            tasksSnapshot.forEach(function (taskDoc) {
                var ref = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.TASKS).doc(taskDoc.id);
                targetBatch.set(ref, taskDoc.data());
                sourceBatch.delete(taskDoc.ref);
            });
        }));

        // Remote Id would have been taken care of by kickAllUsersFromProject Server function.

        Promise.all(requests).then(function () {
            targetBatch.commit().then(function () {
                sourceBatch.commit().then(function () {
                    resolve();
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                reject(error);
            });
        });
    });
}

function inviteUserToProjectAsync(projectName, targetEmail, sourceEmail, sourceDisplayName, projectId, role) {
    return function (dispatch, getState, _ref8) {
        var getFirestore = _ref8.getFirestore,
            getAuth = _ref8.getAuth,
            getDexie = _ref8.getDexie,
            getFunctions = _ref8.getFunctions;

        dispatch(setIsShareMenuWaiting(true));
        dispatch(setShareMenuMessage('Searching for User...'));

        var slowMessageTimer = setTimeout(function () {
            var message = "Hang tight!\nThe servers are waking up. Subsequent operations will complete faster.";
            dispatch(setShareMenuSubMessage(message));
        }, 5000);

        var getRemoteUserData = getFunctions().httpsCallable('getRemoteUserData');
        getRemoteUserData({ targetEmail: targetEmail }).then(function (result) {
            if (result.data.status === 'user found') {
                // User Found.
                var userData = result.data.userData;
                var inviteData = {
                    projectName: projectName,
                    sourceEmail: sourceEmail,
                    sourceDisplayName: sourceDisplayName,
                    targetDisplayName: userData.displayName,
                    targetEmail: userData.email,
                    projectId: projectId,
                    targetUserId: userData.userId,
                    sourceUserId: (0, _pounderFirebase.getUserUid)(),
                    role: role

                    // If the project isn't Remote already it needs to be Moved. Promise will resolve Imediately if no migration
                    // is required, otherwise it will resolve when migration is complete.
                };maybeMigrateProjectAsync(dispatch, getFirestore, getState, projectId, projectName).then(function () {
                    dispatch(setShareMenuMessage('Sending invite.'));

                    var sendProjectInvite = getFunctions().httpsCallable('sendProjectInvite');
                    sendProjectInvite(inviteData).then(function (result) {
                        if (result.data.status === 'complete') {
                            dispatch(postSnackbarMessage("Invite sent.", true));
                            dispatch(setIsShareMenuWaiting(false));
                            dispatch(setShareMenuMessage(""));
                            dispatch(setShareMenuSubMessage(""));
                            dispatch(selectProject(projectId));
                            clearTimeout(slowMessageTimer);
                        } else {
                            dispatch(postSnackbarMessage(result.data.error));
                            dispatch(setIsShareMenuWaiting(false));
                            dispatch(setShareMenuMessage(""));
                            dispatch(setShareMenuSubMessage(""));
                            clearTimeout(slowMessageTimer);
                        }
                    });
                });
            } else {
                // User not Found.
                dispatch(postSnackbarMessage('User not Found.', true));
                dispatch(setIsShareMenuWaiting(false));
                dispatch(setShareMenuMessage(""));
                dispatch(setShareMenuSubMessage(""));
                clearTimeout(slowMessageTimer);
            }
        }).catch(function (error) {
            dispatch(setIsShareMenuWaiting(false));
            dispatch(setShareMenuMessage(''));
            var message = 'An Error occured, are you sure you are connected to the internet? Error Message : ' + error.message;
            dispatch(postSnackbarMessage(message, false));
            dispatch(setShareMenuMessage(""));
            dispatch(setShareMenuSubMessage(""));
            clearTimeout(slowMessageTimer);
        });
    };
}

function updateMemberRoleAsync(userId, projectId, newRole) {
    return function (dispatch, getState, _ref9) {
        var getFirestore = _ref9.getFirestore,
            getAuth = _ref9.getAuth,
            getDexie = _ref9.getDexie,
            getFunctions = _ref9.getFunctions;

        dispatch(setUpdatingUserId(userId));

        var memberRef = getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId).collection(_pounderFirebase.MEMBERS).doc(userId);
        memberRef.update({ role: newRole }).then(function () {
            dispatch(setUpdatingUserId(-1));
        }).catch(function (error) {
            handleFirebaseUpdateError(error, getState(), dispatch);
        });
    };
}

function kickUserFromProjectAsync(projectId, userId) {
    return function (dispatch, getState, _ref10) {
        var getFirestore = _ref10.getFirestore,
            getAuth = _ref10.getAuth,
            getDexie = _ref10.getDexie,
            getFunctions = _ref10.getFunctions;

        dispatch(setUpdatingUserId(userId));

        var kickUserFromProject = getFunctions().httpsCallable('kickUserFromProject');
        kickUserFromProject({ userId: userId, projectId: projectId }).then(function (result) {
            dispatch(setUpdatingUserId(-1));
        });
    };
}

function maybeMigrateProjectAsync(dispatch, getFirestore, getState, projectId, projectName) {
    // Maybe migrate the project first if requried. Saves you copying the code into two branches of an if else.
    // If project is already remote, promise will resolve imediately and allow further execution to continue, otherwise it will
    // hold.. This is maybe a good candidate for await/async.
    return new Promise(function (resolve, reject) {
        if (!isProjectRemote(getState, projectId)) {
            // Migrate project to 'remotes' collection.
            dispatch(setShareMenuMessage('Migrating Project...'));
            dispatch(unsubscribeFromDatabaseAsync(projectId));

            moveProjectToRemoteLocationAsync(getFirestore, getState, projectId, projectName).then(function () {
                dispatch(subscribeToDatabaseAsync());

                resolve();
            }).catch(function (error) {
                dispatch(postSnackbarMessage(error.message, false));

                reject();
            });
        } else {
            resolve();
        }
    });
}

function moveProjectToRemoteLocationAsync(getFirestore, getState, projectId, projectName) {
    return new Promise(function (resolve, reject) {
        // Transfer Project.
        var userRef = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)());
        var targetBatch = getFirestore().batch();
        var sourceBatch = getFirestore().batch();
        var requests = [];

        // Top Level Project Data.
        var topLevelData = {
            uid: projectId,
            projectName: projectName,
            isRemote: true
        };
        var topLevelRef = getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId);
        targetBatch.set(topLevelRef, topLevelData);
        sourceBatch.delete(getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.PROJECTS).doc(projectId));

        // Members.
        var newMember = new _pounderStores.MemberStore((0, _pounderFirebase.getUserUid)(), projectId, getState().displayName, getState().userEmail, 'added', 'owner');
        var memberRef = getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId).collection(_pounderFirebase.MEMBERS).doc(newMember.userId);
        targetBatch.set(memberRef, Object.assign({}, newMember));

        // Project Layout
        requests.push(userRef.collection(_pounderFirebase.PROJECTLAYOUTS).doc(projectId).get().then(function (layoutDoc) {
            if (layoutDoc.exists) {
                var ref = getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId).collection(_pounderFirebase.PROJECTLAYOUTS).doc(layoutDoc.id);
                targetBatch.set(ref, layoutDoc.data());
                sourceBatch.delete(layoutDoc.ref);
            }
        }));

        // Task Lists.
        requests.push(userRef.collection(_pounderFirebase.TASKLISTS).where('project', '==', projectId).get().then(function (taskListsSnapshot) {
            taskListsSnapshot.forEach(function (taskListDoc) {
                var ref = getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId).collection(_pounderFirebase.TASKLISTS).doc(taskListDoc.id);
                targetBatch.set(ref, taskListDoc.data());
                sourceBatch.delete(taskListDoc.ref);
            });
        }));

        // Tasks.
        requests.push(userRef.collection(_pounderFirebase.TASKS).where('project', '==', projectId).get().then(function (tasksSnapshot) {
            tasksSnapshot.forEach(function (taskDoc) {
                var ref = getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId).collection(_pounderFirebase.TASKS).doc(taskDoc.id);
                targetBatch.set(ref, taskDoc.data());
                sourceBatch.delete(taskDoc.ref);
            });
        }));

        // Place RemoteId.
        var remoteIdRef = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.REMOTE_IDS).doc(projectId);
        sourceBatch.set(remoteIdRef, { projectId: projectId });

        Promise.all(requests).then(function () {
            targetBatch.commit().then(function () {
                sourceBatch.commit().then(function () {
                    resolve();
                }).catch(function (error) {
                    reject('Error while removing local references: ' + error.message);
                });
            }).catch(function (error) {
                reject('Error while moving Local Project: ' + error.message);
            });
        });
    });
}

function attachAuthListenerAsync() {
    return function (dispatch, getState, _ref11) {
        var getFirestore = _ref11.getFirestore,
            getAuth = _ref11.getAuth,
            getDexie = _ref11.getDexie,
            getFunctions = _ref11.getFunctions;

        getAuth().onAuthStateChanged(function (user) {
            if (user) {
                // User is Logged in.
                (0, _pounderFirebase.setUserUid)(user.uid);
                dispatch(subscribeToDatabaseAsync());
                dispatch(setIsLoggedInFlag(true));
                dispatch(setUserEmail(user.email));
                dispatch(setDisplayName(user.displayName));
                dispatch(setAuthStatusMessage("Logged in"));
            } else {
                // User is logged out.
                // This Code may be called when App is booting up. If getUserUid is an empty string, then the App is booting
                // and no action is required.
                if ((0, _pounderFirebase.getUserUid)() !== "") {
                    dispatch(setAuthStatusMessage("Logged out"));
                    dispatch(unsubscribeFromDatabaseAsync());
                    dispatch(setIsLoggedInFlag(false));
                    dispatch(setUserEmail(""));
                    dispatch(setDisplayName(""));
                    dispatch(selectProject(-1));
                    dispatch(clearData());

                    (0, _pounderFirebase.setUserUid)(""); // Clear UserUid Last as actions above may require it to build valid Database References.
                }
            }
        });
    };
}

function subscribeToDatabaseAsync() {
    return function (dispatch, getState, _ref12) {
        var getFirestore = _ref12.getFirestore,
            getAuth = _ref12.getAuth,
            getDexie = _ref12.getDexie,
            getFunctions = _ref12.getFunctions;

        // Get Projects (Also attaches a Value listener for future changes).
        dispatch(getProjectsAsync());

        // Local Project Layouts.
        dispatch(getLocalProjectLayoutsAsync());

        // Remote Projects (Also attaches a Value listener for future changes).
        dispatch(getRemoteProjectIdsAsync());

        // Get Task Lists (Also Attaches a value listener for future changes).
        dispatch(getTaskListsAsync());

        // Get Tasks (Also attaches a Value listener for future changes).
        dispatch(getTasksAsync());

        // Get Account Config (Also attaches a Value listener for future changes).
        dispatch(getAccountConfigAsync());

        // Project Invites (Also attaches a Value listener for future changes).
        dispatch(getInvitesAsync());
    };
}

function getInvitesAsync() {
    return function (dispatch, getState, _ref13) {
        var getFirestore = _ref13.getFirestore,
            getAuth = _ref13.getAuth,
            getDexie = _ref13.getDexie,
            getFunctions = _ref13.getFunctions;

        getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.INVITES).onSnapshot(function (snapshot) {
            if (snapshot.docChanges().length > 0) {
                var invites = [];
                snapshot.forEach(function (doc) {
                    invites.push(doc.data());
                });

                dispatch(receiveInvites(invites));
            }
        });
    };
}

function unsubscribeFromDatabaseAsync() {
    return function (dispatch, getState, _ref14) {
        var getFirestore = _ref14.getFirestore,
            getAuth = _ref14.getAuth,
            getDexie = _ref14.getDexie,
            getFunctions = _ref14.getFunctions;

        dispatch(unsubscribeProjectsAsync());

        getState().remoteProjectIds.forEach(function (id) {
            dispatch(unsubscribeFromRemoteProjectAsync(id));
        });

        dispatch(unsubscribeRemoteIds());
        dispatch(unsubscribeTaskListsAsync());
        dispatch(unsubscribeTasksAsync());
        dispatch(unsubscribeProjectLayoutsAsync());
        dispatch(unsubscribeAccountConfigAsync());
        dispatch(unsubscribeInvitesAsync());
    };
}

function unsubscribeRemoteIds() {
    return function (dispatch, getState, _ref15) {
        var getFirestore = _ref15.getFirestore,
            getAuth = _ref15.getAuth,
            getDexie = _ref15.getDexie,
            getFunctions = _ref15.getFunctions;

        var unsubscribe = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.REMOTE_IDS).onSnapshot(function (snap) {});
        unsubscribe();
    };
}

function logOutUserAsync() {
    return function (dispatch, getState, _ref16) {
        var getFirestore = _ref16.getFirestore,
            getAuth = _ref16.getAuth,
            getDexie = _ref16.getDexie,
            getFunctions = _ref16.getFunctions;

        getAuth().signOut().then(function () {}).catch(function (error) {
            var message = parseFirebaseError(error);
            dispatch(postSnackbarMessage(message, false));
        });
    };
}

function logInUserAsync(email, password) {
    return function (dispatch, getState, _ref17) {
        var getFirestore = _ref17.getFirestore,
            getAuth = _ref17.getAuth,
            getDexie = _ref17.getDexie,
            getFunctions = _ref17.getFunctions;

        dispatch(setIsLoggingInFlag(true));
        dispatch(setAuthStatusMessage("Logging in"));

        // Set Persistence.
        getAuth().setPersistence('local').then(function () {
            getAuth().signInWithEmailAndPassword(email, password).catch(function (error) {
                var message = parseFirebaseError(error);
                dispatch(postSnackbarMessage(message, true));
                dispatch(setIsLoggingInFlag(false));
                dispatch(setAuthStatusMessage("Logged out"));
            });
        }).catch(function (error) {
            var message = parseFirebaseError(error);
            dispatch(postSnackbarMessage(message, true));
            dispatch(setIsLoggingInFlag(false));
            dispatch(exports.setAuthStatusMessage = setAuthStatusMessage = "Logged Out");
        });
    };
}

function setFavouriteProjectIdAsync(projectId) {
    return function (dispatch, getState, _ref18) {
        var getFirestore = _ref18.getFirestore,
            getAuth = _ref18.getAuth,
            getDexie = _ref18.getDexie,
            getFunctions = _ref18.getFunctions;

        var ref = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.ACCOUNT).doc(_pounderFirebase.ACCOUNT_DOC_ID);

        ref.set({
            favouriteProjectId: projectId
        }).then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.
        }).catch(function (error) {
            handleFirebaseUpdateError(error, getState(), dispatch);
        });
    };
}

function getGeneralConfigAsync() {
    return function (dispatch, getState, _ref19) {
        var getFirestore = _ref19.getFirestore,
            getAuth = _ref19.getAuth,
            getDexie = _ref19.getDexie,
            getFunctions = _ref19.getFunctions;

        getDexie().generalConfig.where('id').equals(0).first().then(function (data) {
            if (data !== undefined) {
                var config = data.value;
                dispatch(receiveGeneralConfig(config));

                if (getState().isStartingUp) {
                    // Application is Starting up. Dispatch Actions to Sync appliction to Config State.
                    syncAppToConfig(config, dispatch);
                }
            }
            // If data doesn't exist in Dexie we can safely assume that the Fallback values given to the initial state
            // are still correct.
            if (getState().isStartingUp) {
                syncAppToConfig(getState().generalConfig, dispatch);
            }
        });
    };
}

function getCSSConfigAsync() {
    return function (dispatch, getState, _ref20) {
        var getFirestore = _ref20.getFirestore,
            getAuth = _ref20.getAuth,
            getDexie = _ref20.getDexie,
            getFunctions = _ref20.getFunctions;

        getDexie().cssConfig.where('id').equals(0).first().then(function (data) {
            if (data !== undefined) {
                // User has modified values.
                // Combine current State with values returned from Dexie.
                var configFromDB = data.value;
                var existingConfig = getState().cssConfig;
                var newConfig = _extends({}, existingConfig);
                for (var propertyName in configFromDB) {
                    newConfig[propertyName] = configFromDB[propertyName];
                }

                dispatch(receiveCSSConfig(newConfig));
            }

            // Nothing returned from Dexie. This means the user hasn't modified any values so we can rely on the
            // default values provided to the initial state.
        });
    };
}

function setAllColorsToDefaultAsync() {
    return function (dispatch, getState, _ref21) {
        var getFirestore = _ref21.getFirestore,
            getAuth = _ref21.getAuth,
            getDexie = _ref21.getDexie,
            getFunctions = _ref21.getFunctions;


        // Update Dexie.
        getDexie().cssConfig.put({ id: 0, value: _pounderStores.CssConfigStore }).then(function () {});

        // Update State.
        dispatch(receiveCSSConfig(_pounderStores.CssConfigStore));
    };
}

function setCSSConfigAsync(newConfig) {
    return function (dispatch, getState, _ref22) {
        var getFirestore = _ref22.getFirestore,
            getAuth = _ref22.getAuth,
            getDexie = _ref22.getDexie,
            getFunctions = _ref22.getFunctions;


        // Update Dexie.
        getDexie().cssConfig.put({ id: 0, value: newConfig }).then(function () {});

        // Update State.
        dispatch(receiveCSSConfig(newConfig));
    };
}

function setGeneralConfigAsync(newConfig) {
    return function (dispatch, getState, _ref23) {
        var getFirestore = _ref23.getFirestore,
            getAuth = _ref23.getAuth,
            getDexie = _ref23.getDexie,
            getFunctions = _ref23.getFunctions;

        getDexie().generalConfig.put({ id: 0, value: newConfig }).then(function () {});

        // Update State.
        dispatch(receiveGeneralConfig(newConfig));
    };
}

function purgeCompleteTasksAsync() {
    return function (dispatch, getState, _ref24) {
        var getFirestore = _ref24.getFirestore,
            getAuth = _ref24.getAuth,
            getDexie = _ref24.getDexie,
            getFunctions = _ref24.getFunctions;

        dispatch(setDatabasePurgingFlag(true));

        getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.TASKS).get().then(function (snapshot) {
            // Collect Id's of completed Tasks.
            var completedTaskIds = [];
            snapshot.forEach(function (doc) {
                if (doc.data().isComplete) {
                    completedTaskIds.push(doc.id);
                }
            });

            // Delete those Tasks.
            // Build Batch.
            var batch = getFirestore().batch();
            completedTaskIds.forEach(function (taskId) {
                batch.delete(getFirestore().collection(_pounderFirebase.TASKS).doc(taskId));
            });

            // Execute Batch.
            batch.commit().then(function () {
                dispatch(setDatabasePurgingFlag(false));
            }).catch(function (error) {
                handleFirebaseUpdateError(error, getState(), dispatch);
            });
        });
    };
}

function getDatabaseInfoAsync() {
    return function (dispatch, getState, _ref25) {
        var getFirestore = _ref25.getFirestore,
            getAuth = _ref25.getAuth,
            getDexie = _ref25.getDexie,
            getFunctions = _ref25.getFunctions;

        dispatch(setDatabaseInfo("...Collecting Info"));

        var projectCount = getState().projects.length;
        var taskListCount = getState().taskLists.length;
        var tasksCount = getState().tasks.length;
        var completedTasksCount = getState().tasks.filter(function (item) {
            return item.isComplete === true;
        }).length;

        // Collect Precursor data for calculating Orphans.
        var projectIds = getState().projects.map(function (item) {
            return item.uid;
        });

        var taskListIds = getState().taskLists.map(function (item) {
            return item.uid;
        });

        // Calculate Orphans
        // Tasks Orphaned from Project.
        var taskOrphansCount = getState().tasks.filter(function (item) {
            return !projectIds.includes(item.project);
        }).length;

        // TaskLists Orphaned from Project.
        var taskListOrphansCount = getState().taskLists.filter(function (item) {
            return !projectIds.includes(item.project);
        });

        // Tasks Orphaned from TaskLists.
        var taskTaskListOrphansCount = getState().tasks.filter(function (item) {
            return !taskListIds.includes(item.taskList);
        });

        // Build Info String.
        var infoString = "********** DATABASE INFO **********\n" + "                   ITEM COUNTS\n" + "-> Projects:  " + projectCount + "\n" + "-> Task Lists:    " + taskListCount + "\n" + "-> Tasks (Total):    " + tasksCount + "\n" + "-> Tasks (Completed):    " + completedTasksCount + "\n\n" + "                   ORPHAN ITEM COUNTS\n" + "Orphan Items are created from Database Sync issues, usually from a bad internet connection." + "\n" + "-> Tasks orphaned from Project:   " + taskOrphansCount + "\n" + "-> Tasks orphaned from Task Lists:    " + taskTaskListOrphansCount + "\n" + "-> Task Lists orphaned from Project:  " + taskListOrphansCount + "\n\n" + "\n \n " + "********** END OF INFO **********";

        dispatch(setDatabaseInfo(infoString));
    };
}

function updateTaskPriority(taskId, newValue, currentMetadata) {
    return function (dispatch, getState, _ref26) {
        var getFirestore = _ref26.getFirestore,
            getAuth = _ref26.getAuth,
            getDexie = _ref26.getDexie,
            getFunctions = _ref26.getFunctions;

        dispatch(closeCalendar());

        // Determine Reference.
        var taskRef = getTaskRef(getFirestore, getState, taskId);

        // Update Firestore.
        taskRef.update({
            isHighPriority: newValue,
            metadata: getUpdatedMetadata(currentMetadata, { updatedBy: getState().displayName, updatedOn: getHumanFriendlyDate() })
        }).then(function () {
            // Careful what you do here, promises don't resolve if you are offline.
        }).catch(function (error) {
            handleFirebaseUpdateError(error, getState(), dispatch);
        });
    };
}

function updateTaskDueDateAsync(taskId, newDate, currentMetadata) {
    return function (dispatch, getState, _ref27) {
        var getFirestore = _ref27.getFirestore,
            getAuth = _ref27.getAuth,
            getDexie = _ref27.getDexie,
            getFunctions = _ref27.getFunctions;

        dispatch(closeCalendar());

        // Update Firestore.
        var taskRef = getTaskRef(getFirestore, getState, taskId);
        taskRef.update({
            dueDate: newDate,
            isNewTask: false,
            metadata: getUpdatedMetadata(currentMetadata, { updatedBy: getState().displayName, updatedOn: getHumanFriendlyDate() })
        }).then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.
        }).catch(function (error) {
            handleFirebaseUpdateError(error, getState(), dispatch);
        });
    };
}

function updateTaskListSettingsAsync(taskListWidgetId, newValue) {
    return function (dispatch, getState, _ref28) {
        var getFirestore = _ref28.getFirestore,
            getAuth = _ref28.getAuth,
            getDexie = _ref28.getDexie,
            getFunctions = _ref28.getFunctions;

        dispatch(setOpenTaskListSettingsMenuId(-1));

        // Update Firestore.
        var taskListRef = getTaskListRef(getFirestore, getState, taskListWidgetId);

        taskListRef.update({
            settings: Object.assign({}, newValue)
        }).then(function () {
            /// Carefull what you do here, promises don't resolve if you are offline.
        }).catch(function (error) {
            handleFirebaseUpdateError(error, getState(), dispatch);
        });
    };
}

function removeTaskListAsync(taskListWidgetId) {
    return function (dispatch, getState, _ref29) {
        var getFirestore = _ref29.getFirestore,
            getAuth = _ref29.getAuth,
            getDexie = _ref29.getDexie,
            getFunctions = _ref29.getFunctions;

        if (taskListWidgetId !== -1) {
            // Update Firestore.
            // Collect related TaskIds.
            var taskIds = collectTaskListRelatedTaskIds(getState().tasks, taskListWidgetId);

            // Build Batch.
            var batch = getFirestore().batch();

            // Task list
            var taskListRef = getTaskListRef(getFirestore, getState, taskListWidgetId);
            batch.delete(taskListRef);

            // Tasks.
            if (isProjectRemote(getState, getState().selectedProjectId)) {
                var selectedProjectId = getState().selectedProjectId;
                taskIds.forEach(function (id) {
                    batch.delete(getFirestore().collection(_pounderFirebase.REMOTES).doc(selectedProjectId).collection(_pounderFirebase.TASKS).doc(id));
                });
            } else {
                taskIds.forEach(function (id) {
                    batch.delete(getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.TASKS).doc(id));
                });
            }

            batch.commit().then(function () {
                // Carefull what you do here. Promises don't resolve if you are Offline.
            }).catch(function (error) {
                handleFirebaseUpdateError(error, getState(), dispatch);
            });

            dispatch(changeFocusedTaskList(-1));
        }
    };
}

function updateProjectNameAsync(projectId, newValue) {
    return function (dispatch, getState, _ref30) {
        var getFirestore = _ref30.getFirestore,
            getAuth = _ref30.getAuth,
            getDexie = _ref30.getDexie,
            getFunctions = _ref30.getFunctions;

        // Update Firestore.
        var projectRef = getProjectRef(getFirestore, getState, projectId);
        projectRef.update({ projectName: newValue }).then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.
        }).catch(function (error) {
            handleFirebaseUpdateError(error, getState(), dispatch);
        });
    };
}

function removeProjectAsync(projectId) {
    return function (dispatch, getState, _ref31) {
        var getFirestore = _ref31.getFirestore,
            getAuth = _ref31.getAuth,
            getDexie = _ref31.getDexie,
            getFunctions = _ref31.getFunctions;

        if (getState.selectedProjectId !== -1) {
            // Get a List of Task List Id's . It's Okay to collect these from State as associated taskLists have already
            // been loaded in via the handleProjectSelectorClick method. No point in querying Firebase again for this data.
            var taskListIds = getState().taskLists.filter(function (item) {
                return item.project === projectId;
            }).map(function (taskList) {
                return taskList.uid;
            });

            var taskIds = collectProjectRelatedTaskIds(getState().tasks, projectId);

            // Build Updates.
            var batch = getFirestore().batch();

            // Remote.
            if (isProjectRemote(getState, projectId)) {
                // TaskLists.
                taskListIds.forEach(function (id) {
                    batch.delete(getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId).collection(_pounderFirebase.TASKLISTS).doc(id));
                });

                // Tasks
                taskIds.forEach(function (id) {
                    batch.delete(getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId).collection(_pounderFirebase.TASKS).doc(id));
                });
            }

            // Local
            else {
                    // TaskLists.
                    taskListIds.forEach(function (id) {
                        batch.delete(getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.TASKLISTS).doc(id));
                    });

                    // Tasks
                    taskIds.forEach(function (id) {
                        batch.delete(getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.TASKS).doc(id));
                    });
                }

            // Project Layout
            var projectLayoutId = projectId;
            if (projectLayoutId !== -1) {
                batch.delete(getProjectLayoutRef(getFirestore, getState, projectLayoutId).doc(projectLayoutId));
            }

            // Project.
            batch.delete(getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.PROJECTS).doc(projectId));

            // Execute the Batch.
            batch.commit().then(function () {
                // Carefull what you do here, promises don't resolve if you are offline.
            }).catch(function (error) {
                handleFirebaseUpdateError(error, getState(), dispatch);
            });
        }
    };
}

function removeRemoteProjectAsync(projectId) {
    return function (dispatch, getState, _ref32) {
        var getFirestore = _ref32.getFirestore,
            getAuth = _ref32.getAuth,
            getDexie = _ref32.getDexie,
            getFunctions = _ref32.getFunctions;

        if (projectId !== -1 && isProjectRemote(getState, projectId)) {
            dispatch(setIsShareMenuWaiting(true));
            dispatch(setShareMenuMessage("Deleting Project"));

            var removeRemoteProject = getFunctions().httpsCallable('removeRemoteProject');
            removeRemoteProject({ projectId: projectId }).then(function (result) {
                if (result.data.status === 'complete') {
                    dispatch(selectProject(-1));
                    dispatch(setIsShareMenuOpen(false));
                    dispatch(setIsShareMenuWaiting(false));
                    dispatch(setShareMenuMessage(""));
                }

                if (result.data.status === 'error') {
                    dispatch(postSnackbarMessage(result.data.message));
                    dispatch(setIsShareMenuWaiting(false));
                    dispatch(setShareMenuMessage(""));
                }
            }).catch(function (error) {
                var message = 'An Error occured, are you sure you are connected to the internet? Error Message : ' + error.message;
                dispatch(postSnackbarMessage(message, false));
                dispatch(setIsShareMenuWaiting(false));
                dispatch(setShareMenuMessage(""));
            });
        }
    };
}

function addNewProjectAsync() {
    return function (dispatch, getState, _ref33) {
        var getFirestore = _ref33.getFirestore,
            getAuth = _ref33.getAuth,
            getDexie = _ref33.getDexie,
            getFunctions = _ref33.getFunctions;

        // Update Firestore.    
        var newProjectName = "New Project";
        var batch = getFirestore().batch();

        // Project.
        var newProjectRef = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.PROJECTS).doc();
        var newProjectKey = newProjectRef.id;

        var newProject = new _pounderStores.ProjectStore(newProjectName, newProjectKey, false);
        batch.set(newProjectRef, Object.assign({}, newProject));

        // Layout
        var newLayoutRef = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.PROJECTLAYOUTS).doc(newProjectKey);

        var newProjectLayout = new _pounderStores.ProjectLayoutStore([], newProjectKey, newProjectKey);
        batch.set(newLayoutRef, Object.assign({}, newProjectLayout));

        // Execute Additions.
        batch.commit().then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.
        }).catch(function (error) {
            handleFirebaseUpdateError(error, getState(), dispatch);
        });
    };
}

function updateTaskCompleteAsync(taskListWidgetId, taskId, newValue, currentMetadata) {
    return function (dispatch, getState, _ref34) {
        var getFirestore = _ref34.getFirestore,
            getAuth = _ref34.getAuth,
            getDexie = _ref34.getDexie,
            getFunctions = _ref34.getFunctions;

        if (getState().selectedTask.taskListWidgetId !== taskListWidgetId && getState().selectedTask.taskId !== taskId) {
            dispatch(selectTask(taskListWidgetId, taskId, false));
        }

        // Update Firestore.
        var taskRef = getTaskRef(getFirestore, getState, taskId);

        taskRef.update({
            isComplete: newValue,
            isNewTask: false,
            metadata: getUpdatedMetadata(currentMetadata, {
                updatedBy: getState().displayName,
                updatedOn: getHumanFriendlyDate(),
                completedBy: getState().displayName
            })
        }).then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.h.
        }).catch(function (error) {
            handleFirebaseUpdateError(error, getState(), dispatch);
        });
    };
}

function updateProjectLayoutAsync(layouts, projectId) {
    return function (dispatch, getState, _ref35) {
        var getFirestore = _ref35.getFirestore,
            getAuth = _ref35.getAuth,
            getDexie = _ref35.getDexie,
            getFunctions = _ref35.getFunctions;

        var newTrimmedLayouts = sanitizeLayouts(layouts);

        // Update Firestore.
        var projectLayoutsRef = getProjectLayoutRef(getFirestore, getState, projectId);
        projectLayoutsRef.doc(projectId).update({ layouts: newTrimmedLayouts }).then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.
        }).catch(function (error) {
            handleFirebaseUpdateError(error, getState(), dispatch);
        });
    };
}

function updateTaskNameAsync(taskListWidgetId, taskId, newData, currentMetadata) {
    return function (dispatch, getState, _ref36) {
        var getFirestore = _ref36.getFirestore,
            getAuth = _ref36.getAuth,
            getDexie = _ref36.getDexie,
            getFunctions = _ref36.getFunctions;

        dispatch(closeTask(taskListWidgetId, taskId));

        var update = {
            taskName: newData,
            isNewTask: false, // Reset new Task Property.
            metadata: getUpdatedMetadata(currentMetadata, { updatedBy: getState().displayName, updatedOn: getHumanFriendlyDate() })

            // Returns a new Update Object with arguments parsed in (if any);
        };var newUpdate = parseArgumentsIntoUpdate(update);

        // Update Firestore.
        var taskRef = getTaskRef(getFirestore, getState, taskId);
        taskRef.update(newUpdate).then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.
        }).catch(function (error) {
            handleFirebaseUpdateError(error, getState(), dispatch);
        });
    };
}

function removeSelectedTaskAsync() {
    return function (dispatch, getState, _ref37) {
        var getFirestore = _ref37.getFirestore,
            getAuth = _ref37.getAuth,
            getDexie = _ref37.getDexie,
            getFunctions = _ref37.getFunctions;


        var taskId = getState().selectedTask.taskId;
        if (taskId !== -1) {
            // Update Firestore.    
            // Build Batch and Execute.
            var batch = getFirestore().batch();
            var taskRef = getTaskRef(getFirestore, getState, taskId);
            batch.delete(taskRef);

            batch.commit().then(function () {
                // Carefull what you do here, promises don't resolve if you are offline.
            }).catch(function (error) {
                handleFirebaseUpdateError(error, getState(), dispatch);
            });

            dispatch(selectTask(getState().focusedTaskListId, -1, false));
        }
    };
}

function updateTaskListWidgetHeaderAsync(taskListWidgetId, newName) {
    return function (dispatch, getState, _ref38) {
        var getFirestore = _ref38.getFirestore,
            getAuth = _ref38.getAuth,
            getDexie = _ref38.getDexie,
            getFunctions = _ref38.getFunctions;


        var taskListRef = getTaskListRef(getFirestore, getState, taskListWidgetId);

        taskListRef.update({ taskListName: newName }).then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.
        }).catch(function (error) {
            handleFirebaseUpdateError(error, getState(), dispatch);
        });
    };
}

function moveTaskAsync(destinationTaskListId) {
    return function (dispatch, getState, _ref39) {
        var getFirestore = _ref39.getFirestore,
            getAuth = _ref39.getAuth,
            getDexie = _ref39.getDexie,
            getFunctions = _ref39.getFunctions;

        dispatch(startTaskMoveInDatabase());

        var movingTaskId = getState().movingTaskId;
        var taskRef = getTaskRef(getFirestore, getState, movingTaskId);

        // Can't get currentMetadata from the Task directly, so extract it here.
        var currentMetadata = getState().tasks.find(function (task) {
            return task.uid === movingTaskId;
        }).metadata;

        taskRef.update({
            taskList: destinationTaskListId,
            metadata: getUpdatedMetadata(currentMetadata, { updatedBy: getState().displayName, updatedOn: getHumanFriendlyDate() })
        }).then(function () {
            /// Carefull what you do here, promises don't resolve if you are offline.
        }).catch(function (error) {
            handleFirebaseUpdateError(error, getState(), dispatch);
        });

        dispatch(endTaskMove(movingTaskId, destinationTaskListId));
    };
}

function addNewTaskAsync() {
    return function (dispatch, getState, _ref40) {
        var getFirestore = _ref40.getFirestore,
            getAuth = _ref40.getAuth,
            getDexie = _ref40.getDexie,
            getFunctions = _ref40.getFunctions;

        if (getState().focusedTaskListId !== -1) {
            var _getState = getState(),
                selectedProjectId = _getState.selectedProjectId,
                focusedTaskListId = _getState.focusedTaskListId;

            if (selectedProjectId !== -1 && focusedTaskListId !== -1) {
                // Add a new Task.
                dispatch(startTaskAdd());

                var newTaskRef;
                if (isProjectRemote(getState, getState().selectedProjectId)) {
                    newTaskRef = getFirestore().collection(_pounderFirebase.REMOTES).doc(getState().selectedProjectId).collection(_pounderFirebase.TASKS).doc();
                } else {
                    newTaskRef = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.TASKS).doc();
                }

                var metadata = new _pounderStores.TaskMetadataStore(getState().displayName, getHumanFriendlyDate(new Date()), "", "", "");

                var newTaskKey = newTaskRef.id;
                var newTask = new _pounderStores.TaskStore("", "", false, selectedProjectId, focusedTaskListId, newTaskKey, new _moment2.default().toISOString(), true, false, Object.assign({}, metadata));

                newTaskRef.set(Object.assign({}, newTask)).then(function () {}).catch(function (error) {
                    handleFirebaseUpdateError(error, getState(), dispatch);
                });

                dispatch(openTask(newTask.taskList, newTask.uid)); // Opening a Task by convention Selects it.
            }
        }
    };
}

function addNewTaskListAsync() {
    return function (dispatch, getState, _ref41) {
        var getFirestore = _ref41.getFirestore,
            getAuth = _ref41.getAuth,
            getDexie = _ref41.getDexie,
            getFunctions = _ref41.getFunctions;

        dispatch(startTasklistAdd());

        var selectedProjectId = getState().selectedProjectId;

        if (selectedProjectId !== -1) {
            // Add to Firestore.
            var newTaskListRef;

            if (isProjectRemote(getState, selectedProjectId)) {
                newTaskListRef = getFirestore().collection(_pounderFirebase.REMOTES).doc(selectedProjectId).collection(_pounderFirebase.TASKLISTS).doc();
            } else {
                newTaskListRef = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.TASKLISTS).doc();
            }

            var newTaskList = new _pounderStores.TaskListStore("New Task List", selectedProjectId, newTaskListRef.id, newTaskListRef.id, Object.assign({}, new _pounderStores.TaskListSettingsStore(true, "completed")));

            newTaskListRef.set(Object.assign({}, newTaskList)).then(function () {
                // Carefull what you do here, promises don't resolve if you are offline.
            }).catch(function (error) {
                handleFirebaseUpdateError(error, getState(), dispatch);
            });
        }
    };
}

function getAccountConfigAsync() {
    return function (dispatch, getState, _ref42) {
        var getFirestore = _ref42.getFirestore,
            getAuth = _ref42.getAuth,
            getDexie = _ref42.getDexie,
            getFunctions = _ref42.getFunctions;

        getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.ACCOUNT).doc(_pounderFirebase.ACCOUNT_DOC_ID).onSnapshot(function (doc) {
            if (doc.exists) {
                var accountConfig = doc.data();
                dispatch(receiveAccountConfig(accountConfig));

                // Dexie returns numbers as strings. Convert "-1" to a number if required.
                var favouriteProjectId = accountConfig.favouriteProjectId === "-1" ? parseInt(accountConfig.favouriteProjectId) : accountConfig.favouriteProjectId;

                dispatch(selectProject(favouriteProjectId));
            }
        }, function (error) {
            handleFirebaseSnapshotError(error, getState(), dispatch);
        });
    };
}

function getProjectsAsync() {
    return function (dispatch, getState, _ref43) {
        var getFirestore = _ref43.getFirestore,
            getAuth = _ref43.getAuth,
            getDexie = _ref43.getDexie,
            getFunctions = _ref43.getFunctions;

        dispatch(startProjectsFetch());

        // Get Projects from Firestore.
        getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.PROJECTS).onSnapshot(_index2.includeMetadataChanges, function (snapshot) {
            // Handle metadata.
            dispatch(setProjectsHavePendingWrites(snapshot.metadata.hasPendingWrites));

            if (snapshot.docChanges().length > 0) {
                var projects = [];
                snapshot.forEach(function (doc) {
                    projects.push(doc.data());
                });

                dispatch(receiveLocalProjects(projects));
            }
        }, function (error) {
            handleFirebaseSnapshotError(error, getState(), dispatch);
        });
    };
}

function getTasksAsync() {
    return function (dispatch, getState, _ref44) {
        var getFirestore = _ref44.getFirestore,
            getAuth = _ref44.getAuth,
            getDexie = _ref44.getDexie,
            getFunctions = _ref44.getFunctions;

        dispatch(startTasksFetch());

        // Get Tasks from Firestore.
        var tasksRef = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.TASKS);
        tasksRef.orderBy("project").onSnapshot(_index2.includeMetadataChanges, function (snapshot) {
            handleTasksSnapshot(getState, dispatch, false, snapshot);
        }, function (error) {
            handleFirebaseSnapshotError(error, getState(), dispatch);
        });
    };
}

function handleTasksSnapshot(getState, dispatch, isRemote, snapshot, remoteProjectId) {
    // Handle Metadata.
    if (snapshot.metadata !== undefined) {
        dispatch(setTasksHavePendingWrites(snapshot.metadata.hasPendingWrites));
    }

    // Handle Tasks.
    if (snapshot.docChanges().length > 0) {
        var tasks = [];
        snapshot.forEach(function (doc) {
            tasks.push(doc.data());
        });

        if (isRemote) {
            var filteredTasks = getState().remoteTasks.filter(function (item) {
                return item.project !== remoteProjectId;
            });

            tasks = [].concat(_toConsumableArray(tasks), _toConsumableArray(filteredTasks));
            dispatch(receiveRemoteTasks(tasks));
        } else {
            dispatch(receiveLocalTasks(tasks));
        }
    }
}

function getTaskListsAsync(projectId) {
    return function (dispatch, getState, _ref45) {
        var getFirestore = _ref45.getFirestore,
            getAuth = _ref45.getAuth,
            getDexie = _ref45.getDexie,
            getFunctions = _ref45.getFunctions;

        dispatch(startTaskListsFetch());

        // Get Tasklists from Firestore.
        getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.TASKLISTS).onSnapshot(_index2.includeMetadataChanges, function (snapshot) {

            handleTaskListsSnapshot(getState, dispatch, false, snapshot, projectId);
        }, function (error) {
            handleFirebaseSnapshotError(error, getState(), dispatch);
        });
    };
}

function handleTaskListsSnapshot(getState, dispatch, isRemote, snapshot, remoteProjectId) {
    // Handle Metadata.
    if (snapshot.metadata !== undefined) {
        dispatch(setTaskListsHavePendingWrites(snapshot.metadata.hasPendingWrites));
    }

    if (snapshot.docChanges().length > 0) {
        var taskLists = [];
        snapshot.forEach(function (doc) {
            taskLists.push(doc.data());
        });

        if (isRemote) {
            var filteredTaskLists = getState().remoteTaskLists.filter(function (item) {
                return item.project !== remoteProjectId;
            });

            taskLists = [].concat(_toConsumableArray(taskLists), _toConsumableArray(filteredTaskLists));
            dispatch(receiveRemoteTaskLists(taskLists));
        } else {
            dispatch(receiveLocalTaskLists(taskLists));
        }
    }
}

function getLocalProjectLayoutsAsync() {
    return function (dispatch, getState, _ref46) {
        var getFirestore = _ref46.getFirestore,
            getAuth = _ref46.getAuth,
            getDexie = _ref46.getDexie,
            getFunctions = _ref46.getFunctions;

        dispatch(startProjectLayoutsFetch());

        var projectLayoutsRef = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.PROJECTLAYOUTS);
        projectLayoutsRef.onSnapshot(_index2.includeMetadataChanges, function (snapshot) {
            handleProjectLayoutsSnapshot(getState, dispatch, false, snapshot);
        }, function (error) {
            handleFirebaseSnapshotError(error, getState(), dispatch);
        });
    };
}

function handleProjectLayoutsSnapshot(getState, dispatch, isRemote, snapshot, remoteProjectId) {
    // Handle Metadata.
    dispatch(setProjectLayoutsHavePendingWrites(snapshot.metadata.hasPendingWrites));

    if (snapshot.docChanges().length > 0) {
        var projectLayouts = [];
        if (snapshot.empty !== true) {
            snapshot.forEach(function (doc) {
                projectLayouts.push(doc.data());
            });
        }

        if (isRemote) {
            var filteredProjectLayouts = getState().remoteProjectLayouts.filter(function (item) {
                return item.project !== remoteProjectId;
            });

            projectLayouts = [].concat(_toConsumableArray(projectLayouts), _toConsumableArray(filteredProjectLayouts));
            dispatch(receiveRemoteProjectLayouts(projectLayouts));
        } else {
            dispatch(receiveLocalProjectLayouts(projectLayouts));
        }
    }
}

function unsubscribeAccountConfigAsync() {
    return function (dispatch, getState, _ref47) {
        var getFirestore = _ref47.getFirestore,
            getAuth = _ref47.getAuth,
            getDexie = _ref47.getDexie,
            getFunctions = _ref47.getFunctions;

        var accountConfigUnsubscribe = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.ACCOUNT).doc(_pounderFirebase.ACCOUNT_DOC_ID).onSnapshot(function () {});
        accountConfigUnsubscribe();
    };
}

function unsubscribeProjectsAsync() {
    return function (dispatch, getState, _ref48) {
        var getFirestore = _ref48.getFirestore,
            getAuth = _ref48.getAuth,
            getDexie = _ref48.getDexie,
            getFunctions = _ref48.getFunctions;

        var projectUnsubscribe = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.PROJECTS).onSnapshot(function () {});
        projectUnsubscribe();
    };
}

function unsubscribeTaskListsAsync() {
    return function (dispatch, getState, _ref49) {
        var getFirestore = _ref49.getFirestore,
            getAuth = _ref49.getAuth,
            getDexie = _ref49.getDexie,
            getFunctions = _ref49.getFunctions;

        var taskListsUnsubscribe = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.TASKLISTS).onSnapshot(function () {});
        taskListsUnsubscribe();
    };
}

function unsubscribeTasksAsync() {
    return function (dispatch, getState, _ref50) {
        var getFirestore = _ref50.getFirestore,
            getAuth = _ref50.getAuth,
            getDexie = _ref50.getDexie,
            getFunctions = _ref50.getFunctions;

        var tasksUnsubscribe = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.TASKS).onSnapshot(function () {});
        tasksUnsubscribe();
    };
}

function unsubscribeInvitesAsync() {
    return function (dispatch, getState, _ref51) {
        var getFirestore = _ref51.getFirestore,
            getAuth = _ref51.getAuth,
            getDexie = _ref51.getDexie,
            getFunctions = _ref51.getFunctions;

        var invitesUnsubscribe = getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.INVITES).onSnapshot(function () {});
        invitesUnsubscribe();
    };
}

function unsubscribeProjectLayoutsAsync(projectId) {
    return function (dispatch, getState, _ref52) {
        var getFirestore = _ref52.getFirestore,
            getAuth = _ref52.getAuth,
            getDexie = _ref52.getDexie,
            getFunctions = _ref52.getFunctions;

        if (projectId !== -1) {
            var projectLayoutRef = getProjectLayoutRef(getFirestore, getState, projectId);

            var projectLayoutsUnsubscribe = projectLayoutRef.onSnapshot(function () {});
            projectLayoutsUnsubscribe();
        }
    };
}

// Helper Functions.
// Determine if an update to the Metadata should occur. Updates should be ignored for a set ammount of time after a Task is
// created to stop CreatedAt and UpdatedAt times being the same or very similiar.
function shouldUpdateMetadata(currentMetadata) {
    if (currentMetadata.createdOn === undefined || currentMetadata.createdOn === null || currentMetadata.createdOn === "") {
        return true;
    }

    // Determine Difference.
    var createdOn = (0, _moment2.default)(currentMetadata.createdOn, DATE_FORMAT);
    var now = (0, _moment2.default)();

    return now.diff(createdOn, 'seconds') > 120;
}

function getUpdatedMetadata(currentMetadata, update) {
    // Coerce currentMetadata to a Valid object.
    if (currentMetadata === undefined) {
        currentMetadata = Object.assign({}, new _pounderStores.TaskMetadataStore("", "", "", "", ""));
    }

    if (shouldUpdateMetadata(currentMetadata)) {
        ;
        // Merge update into currentMetadata.
        for (var propertyName in update) {
            currentMetadata[propertyName] = update[propertyName];
        }
    }

    return currentMetadata;
}

function getHumanFriendlyDate(jsDate) {
    if (jsDate === undefined) {
        jsDate = new Date();
    }
    var date = (0, _moment2.default)(jsDate).format(DATE_FORMAT);

    return date;
}

function getProjectRef(getFirestore, getState, projectId) {
    if (isProjectRemote(getState, projectId)) {
        return getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId);
    } else {
        return getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.PROJECTS).doc(projectId);
    }
}

function getProjectLayoutRef(getFirestore, getState, projectId) {
    if (isProjectRemote(getState, projectId)) {
        return getFirestore().collection(_pounderFirebase.REMOTES).doc(projectId).collection(_pounderFirebase.PROJECTLAYOUTS);
    } else {
        return getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.PROJECTLAYOUTS);
    }
}

function getTaskRef(getFirestore, getState, taskId) {
    var selectedProjectId = getState().selectedProjectId;

    if (isProjectRemote(getState, selectedProjectId)) {
        return getFirestore().collection(_pounderFirebase.REMOTES).doc(selectedProjectId).collection(_pounderFirebase.TASKS).doc(taskId);
    } else {
        return getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.TASKS).doc(taskId);
    }
}

function getTaskListRef(getFirestore, getState, taskListId) {
    var selectedProjectId = getState().selectedProjectId;
    if (isProjectRemote(getState, selectedProjectId)) {
        return getFirestore().collection(_pounderFirebase.REMOTES).doc(selectedProjectId).collection(_pounderFirebase.TASKLISTS).doc(taskListId);
    } else {
        return getFirestore().collection(_pounderFirebase.USERS).doc((0, _pounderFirebase.getUserUid)()).collection(_pounderFirebase.TASKLISTS).doc(taskListId);
    }
}

function isProjectRemote(getState, projectId) {
    var index = getState().remoteProjectIds.findIndex(function (id) {
        return id === projectId;
    });
    return index !== -1;
}

function handleFirebaseSnapshotError(error, state, dispatch) {
    switch (error.code) {
        case "permission-denied":
            if (state.isLoggedIn) {
                dispatch(postSnackbarMessage(error.message, false));
            }

            // No handling required if logged out. Expected behaviour.
            break;
        default:
            throw error;
    }
}

function handleFirebaseUpdateError(error, state, dispatch) {
    switch (error.code) {
        case "permission-denied":
            if (state.isLoggedIn) {
                var message = parseFirebaseError(error);
                dispatch(postSnackbarMessage(message, false));
            } else {
                var _message = "You must log in first.";
                dispatch(postSnackbarMessage(_message, true));
            }

        default:
            throw error;
    }
}

function parseFirebaseError(error) {
    return "Firebase Error: " + error.code + " " + error.message;
}

function parseArgumentsIntoUpdate(update) {
    // stringArgv() will remove single apostraphes, replace them with a \ for now, we will put the apostraphes back in later.
    var taskName = update.taskName.replace(/'/g, "\\");

    // Convert string into args array.
    var args = (0, _stringArgv2.default)(taskName);

    // Parse arguments.
    var argv = (0, _minimist2.default)(args);

    var parsedUpdate = _extends({}, update);

    // dueDate.
    if (argv.d !== undefined) {
        parsedUpdate.dueDate = parseDateArgument(argv.d);
    }

    // isHighPriority
    if (argv.p !== undefined) {
        parsedUpdate.isHighPriority = true;
    }

    // Use text ignored by parseArgs to rebuild taskName,
    // but first put the apostraphes you removed earlier back into the string.
    parsedUpdate.taskName = argv._.join(" ").replace(/\\/g, "'");

    return parsedUpdate;
}

function parseDateArgument(d) {
    // Clear Due Date.
    if (d === true) {
        // Clear due Date.
        return "";
    }

    // Number without 'd' suffix.
    if (typeof d === "number") {
        // Assume user means Days.
        return (0, _pounderUtilities.getDaysForwardDate)(d);
    }

    // Today.
    else if (d === "today" || d === "Today") {
            return (0, _pounderUtilities.getDaysForwardDate)(0);
        }

        // Tomomrrow - Catch mispellings as well.
        else if (d.includes('tom') || d.includes('Tom')) {
                return (0, _pounderUtilities.getDaysForwardDate)(1);
            }

            // Date
            else if (d.includes('/')) {
                    return (0, _pounderUtilities.getParsedDate)(d);
                }

                // Days Forward.
                else if (d.includes('d')) {
                        return (0, _pounderUtilities.getDaysForwardDate)(d.slice(0, d.length - 1));
                    }

                    // Weeks Forward.
                    else if (d.includes('w')) {
                            return (0, _pounderUtilities.getWeeksForwardDate)(d.slice(0, d.length - 1));
                        }

    return "";
}

function collectProjectRelatedTaskIds(tasks, projectId) {
    return tasks.filter(function (task) {
        return task.project === projectId;
    }).map(function (task) {
        return task.uid;
    });
}

function collectTaskListRelatedTaskIds(tasks, taskListWidgetId) {
    // Collect related TaskIds.
    var taskIds = tasks.filter(function (task) {
        return task.taskList === taskListWidgetId;
    }).map(function (task) {
        return task.uid;
    });

    return taskIds;
}

function sanitizeLayouts(layouts) {
    // Layouts from RGL come with Functions and undefined values as properties which can't be serialized to Firestore.
    var trimmedLayouts = layouts.map(function (item) {
        return {
            i: item.i,
            x: item.x,
            y: item.y,
            w: item.w,
            h: item.h
        };
    });

    return trimmedLayouts;
}

function syncAppToConfig(generalConfig, dispatch) {
    if (generalConfig.startLocked) {
        dispatch(lockApp());
    }

    dispatch(setIsStartingUpFlag(false));
}
