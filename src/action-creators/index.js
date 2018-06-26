import * as ActionTypes from '../action-types/index';
import { setUserUid, getUserUid, USERS, PROJECTS, PROJECTLAYOUTS, TASKS, TASKLISTS, ACCOUNT, ACCOUNT_DOC_ID,
     REMOTE_IDS, REMOTES } from 'pounder-firebase';
import { ProjectStore, ProjectLayoutStore, TaskListStore, TaskListSettingsStore, TaskStore, CssConfigStore, 
InviteStore, RemoteStore} from 'pounder-stores';
import Moment from 'moment';
import { includeMetadataChanges } from '../index';
import parseArgs from 'minimist';
import stringArgv from 'string-argv';
import { getDayPickerDate, getClearedDate, getDaysForwardDate, getWeeksForwardDate, getParsedDate } from 'pounder-utilities';

const legalArgsRegEx = / -dd | -hp /i;
const dateFormat = "DD-MM-YYYY";

// Standard Action Creators.
export function receiveRemoteProjects(projects) {
    return {
        type: ActionTypes.RECEIVE_REMOTE_PROJECTS,
        value: projects,
    }
}

export function setDisplayName(displayName) {
    return {
        type: ActionTypes.SET_DISPLAY_NAME,
        value: displayName,
    }
}
export function setInviteUserMessage(message) {
    return {
        type: ActionTypes.SET_INVITE_USER_MESSAGE,
        value: message,
    }
}

export function setIsInvitingUser(value) {
    return {
        type: ActionTypes.SET_IS_INVITING_USER,
        value: value,
    }
}

export function setIsShareMenuOpen(isOpen) {
    return {
        type: ActionTypes.SET_IS_SHARE_MENU_OPEN,
        value: isOpen,
    }
}
export function setIsSidebarOpen(isOpen) {
    return {
        type: ActionTypes.SET_IS_SIDEBAR_OPEN,
        value: isOpen,
    }
}
export function clearData() {
    return {
        type: ActionTypes.CLEAR_DATA,
    }
}

export function dismissSnackbar() {
    return {
        type: ActionTypes.DISMISS_SNACKBAR,
    }
}

export function postSnackbarMessage(message, isSelfDismissing) {
    return {
        type: ActionTypes.POST_SNACKBAR_MESSAGE,
        message: message,
        isSelfDismissing: isSelfDismissing,
    }
}

export function setIsLoggedInFlag(isLoggedIn) {
    return {
        type: ActionTypes.SET_IS_LOGGED_IN_FLAG,
        value: isLoggedIn,
    }
}

export function setUserEmail(email) {
    return {
        type: ActionTypes.SET_USER_EMAIL,
        value: email,
    }
}

export function setIsLoggingInFlag(isLoggingIn) {
    return {
        type: ActionTypes.SET_IS_LOGGING_IN_FLAG,
        value: isLoggingIn,
    }
}

export function setAuthStatusMessage(message) {
    return {
        type: ActionTypes.SET_AUTH_STATUS_MESSAGE,
        value: message,
    }
}

export function setMessageBox(isOpen, message, type, dataStore, closeCallback) {
    return {
        type: ActionTypes.SET_MESSAGE_BOX,
        value: {
            isOpen: isOpen,
            message: message,
            type: type,
            closeCallback: closeCallback,
        }
    }
}

export function receiveCSSConfig(config) {
    return {
        type: ActionTypes.RECEIVE_CSS_CONFIG,
        value: config,
    }
}
export function setIgnoreFullscreenTriggerFlag(value) {
    return {
        type: ActionTypes.SET_IGNORE_FULLSCREEN_TRIGGER_FLAG,
        value: value,
    }
}

export function receiveAccountConfig(accountConfig) {
    return {
        type: ActionTypes.RECEIVE_ACCOUNT_CONFIG,
        value: accountConfig,
    }
}

export function setIsAppSettingsOpen(isOpen) {
    return {
        type: ActionTypes.SET_IS_APP_SETTINGS_OPEN,
        value: isOpen,
    }
}

export function setIsDexieConfigLoadComplete(isComplete) {
    return {
        type: ActionTypes.SET_IS_DEXIE_CONFIG_LOAD_COMPLETE_FLAG,
        value: isComplete
    }
}

export function setIsDatabaseRestoringFlag(isRestoring) {
    return {
        type: ActionTypes.SET_IS_DATABASE_RESTORING_FLAG,
        value: isRestoring,
    }
}

export function setIsStartingUpFlag(isStartingUp) {
    return {
        type: ActionTypes.SET_IS_STARTING_UP_FLAG,
        value: isStartingUp
    }
}

export function setIsRestoreDatabaseCompleteDialogOpen(isOpen) {
    return {
        type: ActionTypes.SET_IS_RESTORE_DATBASE_COMPLETE_DIALOG_OPEN,
        value: isOpen,
    }
}

export function setDatabasePurgingFlag(isPurging) {
    return {
        type: ActionTypes.SET_DATABASE_PURGING_FLAG,
        value: isPurging
    }
}

export function setDatabaseInfo(info) {
    return {
        type: ActionTypes.SET_DATABASE_INFO,
        value: info,
    }
}

export function setAppSettingsMenuPage(pageName) {
    return {
        type: ActionTypes.SET_APP_SETTINGS_MENU_PAGE,
        value: pageName
    }
}

export function setIsShuttingDownFlag(isShuttingDown) {
    return {
        type: ActionTypes.SET_IS_SHUTTING_DOWN_FLAG,
        value: isShuttingDown
    }
}

export function changeFocusedTaskList(id) {
    return {
        type: ActionTypes.CHANGE_FOCUSED_TASKLIST,
        id: id
    }
}

export function selectTask(taskListWidgetId, taskId) {
    return {
        type: ActionTypes.SELECT_TASK,
        taskListWidgetId: taskListWidgetId,
        taskId: taskId,
    }
}

export function openTask(taskListWidgetId, taskId) {
    return {
        type: ActionTypes.OPEN_TASK,
        taskListWidgetId: taskListWidgetId,
        taskId: taskId
    }
}

export function closeTask(taskListWidgetId, taskId) {
    return {
        type: ActionTypes.CLOSE_TASK,
        taskListWidgetId: taskListWidgetId,
        taskId: taskId
    }
}

export function startTaskMove(movingTaskId, sourceTaskListWidgetId) {
    return {
        type: ActionTypes.START_TASK_MOVE,
        movingTaskId: movingTaskId,
        sourceTaskListWidgetId: sourceTaskListWidgetId
    }
}

export function startTaskMoveInDatabase() {
    return {
        type: ActionTypes.START_TASK_MOVE_IN_DATABASE
    }
}

export function startProjectsFetch() {
    return {
        type: ActionTypes.START_PROJECTS_FETCH,
    }
}

export function receiveProjects(projects) {
    return {
        type: ActionTypes.RECEIVE_PROJECTS,
        projects: projects
    }
}

export function startTasksFetch() {
    return {
        type: ActionTypes.START_TASKS_FETCH
    }
}

export function receiveTasks(tasks) {
    return {
        type: ActionTypes.RECEIVE_TASKS,
        tasks: tasks
    }
}

export function receiveRemoteTasks(tasks) {
    return {
        type: ActionTypes.RECEIVE_REMOTE_TASKS,
        remoteTasks: tasks
    }
}

export function lockApp() {
    return {
        type: ActionTypes.LOCK_APP,
    }
}

export function unlockApp() {
    return {
        type: ActionTypes.UNLOCK_APP,
    }
}

export function setLastBackupMessage(message) {
    return {
        type: ActionTypes.SET_LAST_BACKUP_MESSAGE,
        message: message
    }
}

export function setOpenTaskListSettingsMenuId(id) {
    return {
        type: ActionTypes.SET_OPEN_TASKLIST_SETTINGS_MENU_ID,
        id: id
    }
}

export function openCalendar(taskListWidgetId, taskId) {
    return {
        type: ActionTypes.OPEN_CALENDAR,
        taskListWidgetId: taskListWidgetId,
        taskId: taskId
    }
}

export function startTasklistAdd() {
    return {
        type: ActionTypes.START_TASKLIST_ADD
    }
}

export function startTaskAdd() {
    return {
        type: ActionTypes.START_TASK_ADD
    }
}

export function startTaskListsFetch() {
    return {
        type: ActionTypes.START_TASKLISTS_FETCH
    }
}

export function receiveTaskLists(taskLists) {
    return {
        type: ActionTypes.RECEIVE_TASKLISTS,
        taskLists: taskLists
    }
}

export function startProjectLayoutsFetch() {
    return {
        type: ActionTypes.START_PROJECTLAYOUTS_FETCH
    }
}

export function receiveProjectLayout(projectLayout) {
    return {
        type: ActionTypes.RECEIVE_PROJECTLAYOUT,
        projectLayout: projectLayout
    }
}

export function receiveRemoteProjectLayout(projectLayout) {
    return {
        type: ActionTypes.RECEIVE_REMOTE_PROJECT_LAYOUT,
        projectLayout: projectLayout
    }
}

export function selectProject(projectId) {
    return {
        type: ActionTypes.SELECT_PROJECT,
        projectId: projectId
    }
}

export function closeCalendar() {
    return {
        type: ActionTypes.CLOSE_CALENDAR
    }
}

export function setProjectsHavePendingWrites(value) {
    return {
        type: ActionTypes.SET_PROJECTS_HAVE_PENDING_WRITES,
        value: value
    }
}

export function setProjectLayoutsHavePendingWrites(value) {
    return {
        type: ActionTypes.SET_PROJECTLAYOUTS_HAVE_PENDING_WRITES,
        value: value
    }
}

export function setTaskListsHavePendingWrites(value) {
    return {
        type: ActionTypes.SET_TASKLISTS_HAVE_PENDING_WRITES,
        value: value
    }
}

export function setTasksHavePendingWrites(value) {
    return {
        type: ActionTypes.SET_TASKS_HAVE_PENDING_WRITES,
        value: value,
    }
}

export function openTaskListJumpMenu() {
    return {
        type: ActionTypes.OPEN_TASK_LIST_JUMP_MENU,
    }
}

export function closeTaskListJumpMenu() {
    return {
        type: ActionTypes.CLOSE_TASK_LIST_JUMP_MENU,
    }
}

export function receiveGeneralConfig(config) {
    return {
        type: ActionTypes.RECEIVE_GENERAL_CONFIG,
        value: config
    }
}

export function receiveRemoteProjectIds(ids) {
    return {
        type: ActionTypes.RECEIVE_REMOTE_PROJECT_IDS,
        value: ids
    }
}

// Private Actions.
// Should only be dispatched by moveTaskAsync(), as moveTaskAsync() gets the movingTaskId from the State. Calling this from elsewhere
// could create a race Condition.
function endTaskMove(movingTaskId, destinationTaskListWidgetId) {
    return {
        type: ActionTypes.END_TASK_MOVE,
        movedTaskId: movingTaskId,
        destinationTaskListWidgetId: destinationTaskListWidgetId,
    }
}

// Thunks
export function getRemoteProjectIdsAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        getFirestore().collection(USERS).doc(getUserUid()).collection(REMOTE_IDS).onSnapshot( snapshot => {
            if (snapshot.docChanges().length > 0) {
                var remoteProjectIds = []

                snapshot.forEach(doc => {
                    remoteProjectIds.push(doc.data());
                })

                dispatch(receiveRemoteProjectIds(remoteProjectIds));

                snapshot.docChanges().forEach(change => {
                    if (change.type === "added") {
                        dispatch(subscribeToRemoteProjectAsync(change.doc.data()));
                    }

                    if (change.type === "removed") {
                        dispatch(unsubscribeFromRemoteProjectAsync(change.doc.data()));
                    }
                });
        
            }
        }, error => {
            handleFirebaseSnapshotError(error, getState(), dispatch);
        })
    }
}

export function subscribeToRemoteProjectAsync(projectId) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        // Top Level Project Info.
        getFirestore().collection(REMOTE_PROJECTS).doc(projectId).onSnapshot( doc => {
            if (doc.exists) {
                var projectName = doc.get('projectName');
                var members = doc.get('members');

                filteredProjects = getState().projects.filter(item => {
                    return item.uid !== doc.uid;
                })

                filterProjects.push({ projectName: projectName, members: members, uid: doc.uid});
                dispatch(receiveProjects(filteredProjects));
            }
        })

        // TaskLists.
        getFirestore().collection(REMOTE_PROJECTS).doc(projectId).collection(TASKLISTS).onSnapshot(snapshot => {
            handleTaskListsSnapshot(dispatch, true, snapshot, projectId);
        })

        // Tasks.
        getFirestore().collection(REMOTE_PROJECTS).doc(projectId).collection(TASKS).orderBy('project').onSnapshot(snapshot => {
            handleTasksSnapshot(getState, dispatch, true, snapshot, remoteProjectId);
        })

        // ProjectLayout.
        getFirestore().collection(REMOTE_PROJECTS).doc(projectId).collection(PROJECTLAYOUTS).onSnapshot(snapshot => {
            handleProjectLayoutsSnapshot(dispatch, true, snapshot);
        })
    }
}

export function unsubscribeFromRemoteProjectAsync(projectId) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        // Project.
        var projectUnsubscribe = getFirestore().collection(REMOTES).doc(projectId).onSnapshot(doc => {})
        projectUnsubscribe();
        
        // TaskLists.
        var taskListsUnsubscribe = getFirestore().collection(REMOTES).doc(projectId).collection(TASKLISTS).onSnapshot(snapshot => {})
        taskListsUnsubscribe();

        // Tasks.
        var tasksUnsubscribe = getFirestore().collection(REMOTES).doc(projectId).collection(TASKS).onSnapshot(snapshot => {})
        tasksUnsubscribe();

        // ProjectLayout.
        var projectLayoutsUnsubscribe = getFirestore().collection(REMOTES).doc(projectId).collection(PROJECTLAYOUTS).onSnapshot(snapshot => {})
        projectLayoutsUnsubscribe();
    }
}


export function makeProjectRemoteAsync(projectId, projectName) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        // Transfer Project.
        var userRef = getfirestore().collection(USERS).doc(getUserUid());
        var batch = getFirestore().batch();

        // Top Level Project Data.
        var topLevelData = { 
            uid: projectId,
            projectName: projectName,
            members: [new MemberStore(getUserUid(), getState().displayName, getState().userEmail)]}
        var topLevelRef = getFirestore().collection(REMOTES).doc(projectId);
        batch.set(topLevelRef, topLevelData);

        // Project Layout
        requests.push(userRef.collection(PROJECTLAYOUTS).doc(projectId).get().then( layoutDoc => {
            if (layoutDoc.exists) {
                var ref = getFirestore().collection(REMOTES).doc(projectId).collection(PROJECTLAYOUTS).doc(layoutDoc.id);
                batch.set(ref, layoutDoc.data());
            }
        }));

        // Task Lists.
        requests.push(userRef.collection(TASKLISTS).where('project', '==', projectId).get().then( taskListsSnapshot => {
            if (taskListsSnapshot.exists) {
                taskListsSnapshot.forEach( taskListDoc => {
                    var ref = getFirestore.collection(REMOTES).doc(projectId).collection(TASKLISTS).doc(taskListDoc.id);
                    batch.set(ref, taskListDoc.data());
                })
            }
        }));

        // Tasks.
        requests.push(userRef.collection(TASKS).where('project', '==', projectId).get().then( tasksSnapshot => {
            if (tasksSnapshot.exists) {
                tasksSnapshot.forEach( taskDoc => {
                    var ref = getFirestore.collection(REMOTES).doc(projectId).collection(TASKS).doc(taskDoc.id);
                    batch.set(ref, taskDoc.data());
                })
            }
        }));

        Promise.all(requests).then(() => {
            batch.commit().then(() => {
                // Delete Original Project from Local Location.
                dispatch(removeProjectAsync(projectId));

                // Add the Id of the project to the users RemoteProjectId's collection.
                ref = getFirestore().collection(USERS).doc(getUserUid()).collection(REMOTE_IDS).doc();
                ref.set({ remoteId: projectId }).then(() => {
                    // Success.
                }).catch(error => {
                    dispatch(postSnackbarMessage('Error while creating entry in remoteIds ' + error.message, false));
                })

            }).catch(error => {
                dispatch(postSnackbarMessage('Error while moving Local Project: ' + error.message, false));
            })
        })
    }
}


export function inviteUserToProjectAsync(projectName, targetEmail, sourceEmail, sourceDisplayName, projectId, isRemote) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        dispatch(setIsInvitingUser(true));
    }
}

export function attachAuthListenerAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        getAuth().onAuthStateChanged(user => {
            if (user) {
                // User is Logged in.
                setUserUid(user.uid);
                dispatch(subscribeToDatabaseAsync());
                dispatch(setIsLoggedInFlag(true));
                dispatch(setUserEmail(user.email));
                dispatch(setAuthStatusMessage("Logged in"));
            }

            else {
                // User is logged out.
                // This Code may be called when App is booting up. If getUserUid is an empty string, then the App is booting
                // and no action is required.
                if (getUserUid() !== "") {
                    dispatch(setAuthStatusMessage("Logged out"));
                    dispatch(unsubscribeFromDatabaseAsync());
                    dispatch(setIsLoggedInFlag(false));
                    dispatch(setUserEmail(""));
                    dispatch(selectProject(-1));
                    dispatch(clearData());

                    setUserUid(""); // Clear UserUid Last as actions above may require it to build valid Database References.
                }
            }
        })
    }
}

export function subscribeToDatabaseAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        // Get Projects (Also attaches a Value listener for future changes).
        dispatch(getProjectsAsync());

        // Remote Projects (Also attaches a Value listener for future changes).
        dispatch(getRemoteProjectIdsAsync());

        // Get Task Lists (Also Attaches a value listener for future changes).
        dispatch(getTaskListsAsync());

        // Get Tasks (Also attaches a Value listener for future changes).
        dispatch(getTasksAsync());

        // Get Account Config (Also attaches a Value listener for future changes).
        dispatch(getAccountConfigAsync());
    }
}

export function unsubscribeFromDatabaseAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        dispatch(unsubscribeProjectsAsync());
        dispatch(unsubscribeFromRemoteProjectAsync());
        dispatch(unsubscribeTaskListsAsync());
        dispatch(unsubscribeTasksAsync());
        dispatch(unsubscribeProjectLayoutsAsync());
        dispatch(unsubscribeAccountConfigAsync());
    }
}

export function logOutUserAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        getAuth().signOut().then( () => {
            
        }).catch(error => {
            let message = parseFirebaseError(error);
            dispatch(postSnackbarMessage(message, false));
            
        })
    }
}

export function logInUserAsync(email,password) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        dispatch(setIsLoggingInFlag(true));
        dispatch(setAuthStatusMessage("Logging in"));

        // Set Persistence.
        getAuth().setPersistence('local').then(() => {
            getAuth().signInWithEmailAndPassword(email, password).catch(error => {
                let message = parseFirebaseError(error);
                dispatch(postSnackbarMessage(message, true));
                dispatch(setIsLoggingInFlag(false));
                dispatch(setAuthStatusMessage("Logged out"));
            })
        }).catch(error => {
            let message = parseFirebaseError(error);
            dispatch(postSnackbarMessage(message, true));
            dispatch(setIsLoggingInFlag(false));
            dispatch(setAuthStatusMessage="Logged Out");
        })


    }
}


export function selectProjectAsync(projectId) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        var outgoingProjectId = getState().selectedProjectId;
        var incomingProjectId = projectId;

        if (outgoingProjectId !== -1) {
            // Old Listeners.
            dispatch(unsubscribeProjectLayoutsAsync(projectId));
        } 

        if (incomingProjectId !== -1) {
            dispatch(getProjectLayoutsAsync(projectId));
        }

        dispatch(selectProject(projectId));
    }
}

export function setFavouriteProjectIdAsync(projectId) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        var ref = getFirestore().collection(USERS).doc(getUserUid()).collection(ACCOUNT).doc(ACCOUNT_DOC_ID);

        ref.set({
            favouriteProjectId: projectId
        }).then( () => {
            // Carefull what you do here, promises don't resolve if you are offline.
        }).catch(error => {
            handleFirebaseUpdateError(error, getState(), dispatch);
        })
    }
}


export function getGeneralConfigAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        getDexie().generalConfig.where('id').equals(0).first().then(data => {
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
        })
    }
}

export function getCSSConfigAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        getDexie().cssConfig.where('id').equals(0).first().then(data => {
            if (data !== undefined) {
                // User has modified values.
                // Combine current State with values returned from Dexie.
                var configFromDB = data.value;
                var existingConfig = getState().cssConfig;
                var newConfig = {...existingConfig};
                for (var propertyName in configFromDB) {
                    newConfig[propertyName] = configFromDB[propertyName];
                }
                
                dispatch(receiveCSSConfig(newConfig));
            }

            // Nothing returned from Dexie. This means the user hasn't modified any values so we can rely on the
            // default values provided to the initial state.
        })
    }
}

export function setAllColorsToDefaultAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {

        // Update Dexie.
        getDexie().cssConfig.put({ id: 0, value: CssConfigStore }).then(() => {
        })

        // Update State.
        dispatch(receiveCSSConfig(CssConfigStore));
    }
}

export function setCSSConfigAsync(newConfig) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {

        // Update Dexie.
        getDexie().cssConfig.put({ id: 0, value: newConfig }).then(() => {
        })

        // Update State.
        dispatch(receiveCSSConfig(newConfig));
    }
}

export function setGeneralConfigAsync(newConfig) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        getDexie().generalConfig.put({ id: 0, value: newConfig }).then(() => {
            
        })

        // Update State.
        dispatch(receiveGeneralConfig(newConfig));
    }
}

export function purgeCompleteTasksAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        dispatch(setDatabasePurgingFlag(true));

        getFirestore().collection(USERS).doc(getUserUid()).collection(TASKS).get().then(snapshot => {
            // Collect Id's of completed Tasks.
            var completedTaskIds = [];
            snapshot.forEach(doc => {
                if (doc.data().isComplete) {
                    completedTaskIds.push(doc.id);
                }
            })

            // Delete those Tasks.
            // Build Batch.
            var batch = getFirestore().batch();
            completedTaskIds.forEach(taskId => {
                batch.delete(getFirestore().collection(TASKS).doc(taskId));
            })

            // Execute Batch.
            batch.commit().then(() => {
                dispatch(setDatabasePurgingFlag(false));
            }).catch(error => {
                handleFirebaseUpdateError(error, getState(), dispatch);
            })
        })
    }
}


export function getDatabaseInfoAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        dispatch(setDatabaseInfo("...Collecting Info"));

        var projectCount = getState().projects.length;
        var taskListCount = getState().taskLists.length;
        var tasksCount = getState().tasks.length;
        var completedTasksCount = getState().tasks.filter(item => {
            return item.isComplete === true;
        }).length;

        // Collect Precursor data for calculating Orphans.
        var projectIds = getState().projects.map(item => {
            return item.uid;
        })

        var taskListIds = getState().taskLists.map(item => {
            return item.uid;
        })

        // Calculate Orphans
        // Tasks Orphaned from Project.
        var taskOrphansCount = getState().tasks.filter(item => {
            return !projectIds.includes(item.project);
        }).length;

        // TaskLists Orphaned from Project.
        var taskListOrphansCount = getState().taskLists.filter(item => {
            return !projectIds.includes(item.project);
        })

        // Tasks Orphaned from TaskLists.
        var taskTaskListOrphansCount = getState().tasks.filter(item => {
            return !taskListIds.includes(item.taskList);
        })

        // Build Info String.
        var infoString = "********** DATABASE INFO **********\n" +
            "                   ITEM COUNTS\n" +
            "-> Projects:  " + projectCount + "\n" +
            "-> Task Lists:    " + taskListCount + "\n" +
            "-> Tasks (Total):    " + tasksCount + "\n" +
            "-> Tasks (Completed):    " + completedTasksCount + "\n\n" +
            "                   ORPHAN ITEM COUNTS\n" +
            "Orphan Items are created from Database Sync issues, usually from a bad internet connection." + "\n" +
            "-> Tasks orphaned from Project:   " + taskOrphansCount + "\n" +
            "-> Tasks orphaned from Task Lists:    " + taskTaskListOrphansCount + "\n" +
            "-> Task Lists orphaned from Project:  " + taskListOrphansCount + "\n\n" +
            "\n \n " +
            "********** END OF INFO **********";

        dispatch(setDatabaseInfo(infoString));
    }
}

export function updateTaskPriority(taskId, newValue) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        dispatch(closeCalendar());

        // Determine Reference.
        var taskRef = getTaskRef(getFirestore, getState, taskId);

        // Update Firestore.
        taskRef.update({
            isHighPriority: newValue,
        }).then(() => {
            // Careful what you do here, promises don't resolve if you are offline.
        }).catch(error => {
            handleFirebaseUpdateError(error, getState(), dispatch);
        })
    }
}

export function updateTaskDueDateAsync(taskId, newDate) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        dispatch(closeCalendar());

        // Update Firestore.
        var taskRef = getTaskRef(getFirestore, getState, taskId);
        taskRef.update({
            dueDate: newDate,
            isNewTask: false
        }).then(() => {
            // Carefull what you do here, promises don't resolve if you are offline.
        }).catch(error => {
            handleFirebaseUpdateError(error, getState(), dispatch);
        })
    }
}

export function updateTaskListSettingsAsync(taskListWidgetId, newValue) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        dispatch(setOpenTaskListSettingsMenuId(-1));

        // Update Firestore.
        var taskListRef = getTaskListRef(getFirestore, getState, taskListWidgetId);

        taskListRef.update({
            settings: Object.assign({}, newValue)
        }).then(() => {
            /// Carefull what you do here, promises don't resolve if you are offline.
        }).catch(error => {
            handleFirebaseUpdateError(error, getState(), dispatch);
        })
    }
}


export function removeTaskListAsync(taskListWidgetId) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
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
                taskIds.forEach(id => {
                    batch.delete(getFirestore().collection(REMOTES).doc(selectedProjectId).collection(TASKS).doc(id));
                })
            }

            else {
                taskIds.forEach(id => {
                    batch.delete(getFirestore().collection(USERS).doc(getUserUid()).collection(TASKS).doc(id));
                })
            }
            

            batch.commit().then(() => {
                // Carefull what you do here. Promises don't resolve if you are Offline.
            }).catch(error => {
                handleFirebaseUpdateError(error, getState(), dispatch);
            })

            dispatch(changeFocusedTaskList(-1));
        }

    }
}


export function updateProjectNameAsync(projectId, newValue) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        // Update Firestore.
        var projectRef = getProjectRef(getFirestore, getState, projectId);
        projectRef.update({ projectName: newValue }).then(() => {
            // Carefull what you do here, promises don't resolve if you are offline.
        }).catch(error => {
            handleFirebaseUpdateError(error, getState(), dispatch);
        })
    }
}

export function removeProjectAsync(projectId) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {

        if (getState.selectedProjectId !== -1) {
            // Get a List of Task List Id's . It's Okay to collect these from State as associated taskLists have already
            // been loaded in via the handleProjectSelectorClick method. No point in querying Firebase again for this data.
            var taskListIds = getState().taskLists.filter(item => {
                return item.project === projectId;
            }).map(taskList => { return taskList.uid });

            var taskIds = collectProjectRelatedTaskIds(getState().tasks, projectId);

            // Build Updates.
            var batch = getFirestore().batch();

            // Remote.
            if (isProjectRemote(getState, projectId)) {
                // TaskLists.
                taskListIds.forEach(id => {
                    batch.delete(getFirestore().collection(REMOTES).doc(projectId).collection(TASKLISTS).doc(id));
                })

                // Tasks
                taskIds.forEach(id => {
                    batch.delete(getFirestore().collection(REMOTES).doc(projectId).collection(TASKS).doc(id));
                })
            }
            
            // Local
            else {
                // TaskLists.
                taskListIds.forEach(id => {
                    batch.delete(getFirestore().collection(USERS).doc(getUserUid()).collection(TASKLISTS).doc(id));
                })

                // Tasks
                taskIds.forEach(id => {
                    batch.delete(getFirestore().collection(USERS).doc(getUserUid()).collection(TASKS).doc(id));
                })
            }
            
            // Project Layout
            var projectLayoutId = getState().projectLayout.uid;
            if (projectLayoutId !== -1) {
                batch.delete(getProjectLayoutRef(getFirestore, getState, projectLayoutId));
            }

            // Project.
            batch.delete(getFirestore().collection(USERS).doc(getUserUid()).collection(PROJECTS).doc(projectId));

            // Execute the Batch.
            batch.commit().then(() => {
                // Carefull what you do here, promises don't resolve if you are offline.
            }).catch(error => {
                handleFirebaseUpdateError(error, getState(), dispatch);
            })
        }
    }
}


export function addNewProjectAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        // Update Firestore.    
        var newProjectName = "New Project";
        var batch = getFirestore().batch();

        // Project.
        var newProjectRef = getFirestore().collection(USERS).doc(getUserUid()).collection(PROJECTS).doc();
        var newProjectKey = newProjectRef.id;

        var newProject = new ProjectStore(newProjectName, newProjectKey, false);
        batch.set(newProjectRef, Object.assign({}, newProject));

        // Layout
        var newLayoutRef = getFirestore().collection(USERS).doc(getUserUid()).collection(PROJECTLAYOUTS).doc(newProjectKey);

        var newProjectLayout = new ProjectLayoutStore({}, newProjectKey, newProjectKey);
        batch.set(newLayoutRef, Object.assign({}, newProjectLayout));

        // Execute Additions.
        batch.commit().then(() => {
            // Carefull what you do here, promises don't resolve if you are offline.
        }).catch(error => {
            handleFirebaseUpdateError(error, getState(), dispatch);
        })
    }
}

export function updateTaskCompleteAsync(taskListWidgetId, taskId, newValue) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        if (getState().selectedTask.taskListWidgetId !== taskListWidgetId &&
            getState().selectedTask.taskId !== taskId) {
            dispatch(selectTask(taskListWidgetId, taskId));
        }

        // Update Firestore.
        var taskRef = getTaskRef(getFirestore, getState, taskId);

        taskRef.update({
            isComplete: newValue,
            isNewTask: false
        }).then(() => {
            // Carefull what you do here, promises don't resolve if you are offline.h.
        }).catch(error => {
            handleFirebaseUpdateError(error, getState(), dispatch);
        })
    }
}

export function updateProjectLayoutAsync(layouts, projectId) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        var newTrimmedLayouts = trimLayoutsHelper(layouts);

        // Update Firestore.
        var projectLayoutsRef = getProjectLayoutRef(getFirestore, getState, projectId);
        projectLayoutsRef.update({ layouts: newTrimmedLayouts }).then(() => {
            // Carefull what you do here, promises don't resolve if you are offline.
        }).catch(error => {
            handleFirebaseUpdateError(error, getState(), dispatch);
        })
    }
}


export function updateTaskNameAsync(taskListWidgetId, taskId, newData) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        dispatch(closeTask(taskListWidgetId, taskId));

        var update = {
            taskName: newData,
            isNewTask: false // Reset new Task Property.
        }

        // Returns a new Update Object with arguments parsed in (if any);
        var newUpdate = parseArgumentsIntoUpdate(update);


        // Update Firestore.
        var taskRef = getTaskRef(getFirestore, getState, taskId);
        taskRef.update(newUpdate).then(() => {
            // Carefull what you do here, promises don't resolve if you are offline.
        }).catch(error => {
            handleFirebaseUpdateError(error, getState(), dispatch);
        })
    }
}

export function removeSelectedTaskAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {

        var taskId = getState().selectedTask.taskId;
        if (taskId !== -1) {
            // Update Firestore.    
            // Build Batch and Execute.
            var batch = getFirestore().batch();
            var taskRef = getTaskRef(getFirestore, getState, taskId);
            batch.delete(taskRef);

            batch.commit().then(() => {
                // Carefull what you do here, promises don't resolve if you are offline.
            }).catch(error => {
                handleFirebaseUpdateError(error, getState(), dispatch);
            });

            dispatch(selectTask(getState().focusedTaskListId, -1));
        }
    }
}


export function updateTaskListWidgetHeaderAsync(taskListWidgetId, newName) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {

        var taskListRef = getTaskListRef(getFirestore, getState, taskListWidgetId);

        taskListRef.update({ taskListName: newName }).then(() => {
            // Carefull what you do here, promises don't resolve if you are offline.
        }).catch(error => {
            handleFirebaseUpdateError(error, getState(), dispatch);
        })
    }
}


export function moveTaskAsync(destinationTaskListId) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        dispatch(startTaskMoveInDatabase());

        var movingTaskId = getState().movingTaskId;
        var taskRef = getTaskRef(getFirestore, getState, movingTaskId);

        taskRef.update({
            taskList: destinationTaskListId
        }).then(() => {
            /// Carefull what you do here, promises don't resolve if you are offline.
        }).catch(error => {
            handleFirebaseUpdateError(error, getState(), dispatch);
        })

        dispatch(endTaskMove(movingTaskId, destinationTaskListId));
    }
}


export function addNewTaskAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        if (getState().focusedTaskListId !== -1) {

            const { selectedProjectId, focusedTaskListId } = getState();

            if (selectedProjectId !== -1 && focusedTaskListId !== -1) {
                // Add a new Task.
                dispatch(startTaskAdd());

                var newTaskRef;
                if (isProjectRemote(getState, getState().selectedProjectId)) {
                    newTaskRef = getFirestore().collection(REMOTES).doc(getState().selectedProjectId).collection(TASKS).doc();
                }

                else {
                    newTaskRef = getFirestore().collection(USERS).doc(getUserUid()).collection(TASKS).doc();
                }
                
                var newTaskKey = newTaskRef.id;

                var newTask = new TaskStore(
                    "",
                    "",
                    false,
                    selectedProjectId,
                    focusedTaskListId,
                    newTaskKey,
                    new Moment().toISOString(),
                    true,
                    false
                )

                newTaskRef.set(Object.assign({}, newTask)).then(() => {
                }).catch(error => {
                    handleFirebaseUpdateError(error, getState(), dispatch);
                })

                dispatch(openTask(newTask.taskList, newTask.uid)); // Opening a Task by convention Selects it.

            }
        }
    }
}

export function addNewTaskListAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        dispatch(startTasklistAdd());

        var selectedProjectId = getState().selectedProjectId;

        if (selectedProjectId !== -1) {
            // Add to Firestore.
            var newTaskListRef;

            if (isProjectRemote(getState, selectedProjectId)) {
                newTaskListRef = getFirestore().collection(REMOTES).doc(selectedProjectId).collection(TASKLISTS).doc();
            }
            
            else {
                newTaskListRef = getFirestore().collection(USERS).doc(getUserUid()).collection(TASKLISTS).doc();
            }

            var newTaskList = new TaskListStore(
                "New Task List",
                selectedProjectId,
                newTaskListRef.id,
                newTaskListRef.id,
                Object.assign({}, new TaskListSettingsStore(true, "completed"))
            )

            newTaskListRef.set(Object.assign({}, newTaskList)).then(() => {
                // Carefull what you do here, promises don't resolve if you are offline.
            }).catch(error => {
                handleFirebaseUpdateError(error, getState(), dispatch);
            })
        }
    }
}

export function getAccountConfigAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        getFirestore().collection(USERS).doc(getUserUid()).collection(ACCOUNT).doc(ACCOUNT_DOC_ID).onSnapshot( doc => {
            if (doc.exists) {
                var accountConfig = doc.data();
                dispatch(receiveAccountConfig(accountConfig));

                // Dexie returns numbers as strings. Convert "-1" to a number if required.
                var favouriteProjectId = accountConfig.favouriteProjectId === "-1" ?
                    parseInt(accountConfig.favouriteProjectId) :
                    accountConfig.favouriteProjectId;

                dispatch(selectProjectAsync(favouriteProjectId));
            }
        }, error => {
            handleFirebaseSnapshotError(error, getState(), dispatch);
        })
    }
}

export function getProjectsAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        dispatch(startProjectsFetch());

        // Get Projects from Firestore.
        getFirestore().collection(USERS).doc(getUserUid()).collection(PROJECTS).onSnapshot(includeMetadataChanges, snapshot => {
            // Handle metadata.
            dispatch(setProjectsHavePendingWrites(snapshot.metadata.hasPendingWrites));

            if (snapshot.docChanges().length > 0) {
                var projects = [];
                snapshot.forEach(doc => {
                    projects.push(doc.data());
                })

                dispatch(receiveProjects(projects));
            }
        }, error => {
            handleFirebaseSnapshotError(error, getState(), dispatch);
        })
    }
}

export function getTasksAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        dispatch(startTasksFetch());

        // Get Tasks from Firestore.
        var tasksRef = getFirestore().collection(USERS).doc(getUserUid()).collection(TASKS);
        tasksRef.orderBy("project").onSnapshot(includeMetadataChanges, snapshot => {
            handleTasksSnapshot(getState, dispatch, false, snapshot);
        }, error => {
            handleFirebaseSnapshotError(error, getState(), dispatch);
        })
    }
}

function handleTasksSnapshot(getState, dispatch, isRemote, snapshot, remoteProjectId) {
    // Handle Metadata.
    dispatch(setTasksHavePendingWrites(snapshot.metadata.hasPendingWrites))

    // Handle Tasks.
    if (snapshot.docChanges().length > 0) {
        var tasks = [];
        snapshot.forEach(doc => {
            tasks.push(doc.data());
        });

        if (isRemote) {
            var filteredTasks = getState().tasks.filter(item => {
                return item.project !== remoteProjectId;
            })

            tasks = [...tasks, ...filteredTasks];            
        }

        dispatch(receiveTasks(tasks));
        
    }
}

export function getTaskListsAsync(projectId) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        dispatch(startTaskListsFetch());

        // Get Tasklists from Firestore.
        getFirestore().collection(USERS).doc(getUserUid()).collection(TASKLISTS).onSnapshot(includeMetadataChanges, snapshot => {
            handleTaskListsSnapshot(dispatch, false, snapshot, projectId)
        }, error => {
            handleFirebaseSnapshotError(error, getState(), dispatch);
        });
    }
}

function handleTaskListsSnapshot(dispatch, isRemote, snapshot, remoteProjectId) {
    // Handle Metadata.
    dispatch(setTaskListsHavePendingWrites(snapshot.metadata.hasPendingWrites));

    if (snapshot.docChanges().length > 0) {
        var taskLists = [];
        snapshot.forEach(doc => {
            taskLists.push(doc.data());
        })

        if (isRemote) {
            if (isRemote) {
                var filteredTaskLists = getState().taskLists.filter(item => {
                    return item.project !== remoteProjectId;
                })
    
                taskLists = [...taskLists, ...filteredTaskLists];            
            }
        }

        dispatch(receiveTaskLists(taskLists));
    }
}

export function getProjectLayoutsAsync(projectId) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        dispatch(startProjectLayoutsFetch());

        var projectLayoutsRef = getProjectLayoutRef(getFirestore, getState, projectId);
        projectLayoutsRef.where("project", "==", projectId).onSnapshot(includeMetadataChanges, snapshot => {
            handleProjectLayoutsSnapshot(dispatch, false, snapshot)
        }, error => {
            handleFirebaseSnapshotError(error, getState(), dispatch);
        });
    }
}

function handleProjectLayoutsSnapshot(dispatch, isRemote, snapshot) {
    // Handle Metadata.
    dispatch(setProjectLayoutsHavePendingWrites(snapshot.metadata.hasPendingWrites));

    if (snapshot.docChanges().length > 0) {
        var projectLayouts = [];
        if (snapshot.empty !== true) {
            snapshot.forEach(doc => {
                projectLayouts.push(doc.data());
            })
        }

        else {
            projectLayouts[0] = new ProjectLayoutStore({}, -1, -1);
        }

        if (isRemote) {

        }

        else {
            dispatch(receiveProjectLayout(projectLayouts[0]));
        }
        
    }
}

export function unsubscribeAccountConfigAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        var accountConfigUnsubscribe = getFirestore().collection(USERS).doc(getUserUid()).collection(ACCOUNT).doc(ACCOUNT_DOC_ID).onSnapshot(() => { });
        accountConfigUnsubscribe();
    }
}

export function unsubscribeProjectsAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        var projectUnsubscribe = getFirestore().collection(USERS).doc(getUserUid()).collection(PROJECTS).onSnapshot(() => { });
        projectUnsubscribe();
    }
}

export function unsubscribeTaskListsAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        var taskListsUnsubscribe = getFirestore().collection(USERS).doc(getUserUid()).collection(TASKLISTS).onSnapshot(() => { });
        taskListsUnsubscribe();
    }
}

export function unsubscribeTasksAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        var tasksUnsubscribe = getFirestore().collection(USERS).doc(getUserUid()).collection(TASKS).onSnapshot(() => { });
        tasksUnsubscribe();
    }
}

export function unsubscribeProjectLayoutsAsync(projectId) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie, getFunctions }) => {
        if (projectId !== -1) {
            var projectLayoutRef = getProjectLayoutRef(getFirestore, getState, projectId);

            var projectLayoutsUnsubscribe = projectLayoutRef.onSnapshot(() => { });
            projectLayoutsUnsubscribe();
        }
    }
}

// Helper Functions.
function getProjectRef(getFirestore, getState, projectId) {
    if (isProjectRemote(getState, projectId)) {
        return getFirestore().collection(REMOTES).doc(projectId);
    }

    else {
        return getFirestore().collection(USERS).doc(getUserUid()).collection(PROJECTS).doc(projectId);
    }
}

function getProjectLayoutRef(getFirestore, getState, projectLayoutId) {
    if (isProjectRemote(getState, getState().selectedProjectId)) {
        return getFirestore().collection(REMOTES).doc(projectId).collection(PROJECTLAYOUTS);
    }

    else {
        return getFirestore().collection(USERS).doc(getUserUid()).collection(PROJECTLAYOUTS);
    }
}

function getTaskRef(getFirestore, getState, taskId) {
    var selectedProjectId = getState().selectedProjectId;
    if (isProjectRemote(getState, selectedProjectId)) {
        return getFirestore().collection(REMOTES).doc(selectedProjectId).collection(TASKS).doc(taskId);
    }

    else {
        return getFirestore().collection(USERS).doc(getUserUid()).collection(TASKS).doc(taskId);
    }
}

function getTaskListRef(getFirestore, getState, taskListId) {
    var selectedProjectId = getState().selectedProjectId;
    if (isProjectRemote(getState, selectedProjectId)) {
        return getFirestore().collection(REMOTES).doc(selectedProjectId).collection(TASKLISTS).doc(taskListId);
    }

    else {
        return getFirestore().collection(USERS).doc(getUserUid()).collection(TASKLISTS).doc(taskListId);
    }
}

function isProjectRemote(getState, projectId) {
    return !getState().remoteProjectIds.find(item => item === projectId) === undefined 
}

function handleFirebaseSnapshotError(error, state, dispatch) {
    switch (error.code) {
        case "permission-denied":
            if (state.isLoggedIn) {
                dispatch(postSnackbarMessage(error.message, false))
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
                let message = parseFirebaseError(error);
                dispatch(postSnackbarMessage(message, false));
            }

            else {
                let message = "You must log in first.";
                dispatch(postSnackbarMessage(message, true));
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
    var args = stringArgv(taskName);

    // Parse arguments.
    var argv = parseArgs(args);

    var parsedUpdate = { ...update };

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
    parsedUpdate.taskName = (argv._.join(" ")).replace(/\\/g, "'");

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
        return getDaysForwardDate(d);
    }

    // Today.
    else if (d === "today" || d === "Today") {
        return getDaysForwardDate(0);
    }

    // Tomomrrow - Catch mispellings as well.
    else if (d.includes('tom') || d.includes('Tom')) {
        return getDaysForwardDate(1);
    }

    // Date
    else if (d.includes('/')) {
        return getParsedDate(d);
    }

    // Days Forward.
    else if (d.includes('d')) {
        return getDaysForwardDate(d.slice(0, d.length - 1));
    }

    // Weeks Forward.
    else if (d.includes('w')) {
        return getWeeksForwardDate((d.slice(0, d.length - 1)));
    }

    return "";
}

function collectProjectRelatedTaskIds(tasks, projectId) {
    return tasks.filter(task => {
        return task.project === projectId
    }).map(task => { return task.uid });
}

function collectTaskListRelatedTaskIds(tasks, taskListWidgetId) {
    // Collect related TaskIds.
    var taskIds = tasks.filter(task => {
        return task.taskList === taskListWidgetId;
    }).map(task => { return task.uid });

    return taskIds;
}


function trimLayoutsHelper(layouts) {
    var trimmedLayouts = layouts.map(item => {
        return {
            i: item.i,
            x: item.x,
            y: item.y,
            w: item.w,
            h: item.h,
        }
    })

    return trimmedLayouts
}


function syncAppToConfig(generalConfig, dispatch) {
    if (generalConfig.startLocked) {
        dispatch(lockApp());
    }

    dispatch(setIsStartingUpFlag(false));
}