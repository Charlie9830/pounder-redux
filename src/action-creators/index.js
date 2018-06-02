import * as ActionTypes from '../action-types/index';
import { PROJECTS, PROJECTLAYOUTS, TASKS, TASKLISTS, ACCOUNT, ACCOUNT_DOC_ID } from 'pounder-firebase';
import { ProjectStore, ProjectLayoutStore, TaskListStore, TaskListSettingsStore, TaskStore, AccountStore } from 'pounder-stores';
import Moment from 'moment';
import { IncludeQueryMetadataChanges } from '../index';
import parseArgs from 'minimist';
import stringArgv from 'string-argv';
import { getDayPickerDate, getClearedDate, getDaysForwardDate, getWeeksForwardDate, getParsedDate } from 'pounder-utilities';

const legalArgsRegEx = / -dd | -hp /i;
const dateFormat = "DD-MM-YYYY";

// Standard Action Creators.
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
export function selectProjectAsync(projectId) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        var outgoingProjectId = getState().selectedProjectId;
        var incomingProjectId = projectId;

        if (outgoingProjectId !== -1) {
            // Old Listeners.
            dispatch(unsubscribeProjectLayoutsAsync());
        }

        if (incomingProjectId !== -1) {
            dispatch(getProjectLayoutsAsync(projectId));
        }

        dispatch(selectProject(projectId));

    }
}


export function setFavouriteProjectIdAsync(projectId) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        var ref = getFirestore().collection(ACCOUNT).doc(ACCOUNT_DOC_ID);

        ref.set({
            favouriteProjectId: projectId
        }).then( () => {
            // Carefull what you do here, promises don't resolve if you are offline.
        })
    }
}


export function getGeneralConfigAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        getDexie().generalConfig.where('id').equals(0).first().then(data => {
            if (data !== undefined) {
                var config = data.value;
                dispatch(receiveGeneralConfig(config));

                if (getState().isStartingUp) {
                    // Application is Starting up. Dispatch Actions to Sync appliction to Config State.
                    syncAppToConfig(config, dispatch);
                }
            }
            // If data doesn't exist in Dexie we can safely that the Fallback values given to the initial state
            // are still correct.
            if (getState().isStartingUp) {
                syncAppToConfig(getState().generalConfig, dispatch);
            }
        })
    }
}

export function getCSSConfigAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        getDexie().cssConfig.where('id').equals(0).first().then(data => {
            if (data !== undefined) {
                var config = data.value;
                dispatch(receiveCSSConfig(config));
            }
        })
    }
}

export function setCSSConfigAsync(newConfig) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {

        // Update Dexie.
        getDexie().cssConfig.put({ id: 0, value: newConfig }).then(() => {
        })

        // Update State.
        dispatch(receiveCSSConfig(newConfig));
    }
}

export function setGeneralConfigAsync(newConfig) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        getDexie().generalConfig.put({ id: 0, value: newConfig }).then(() => {
            
        })

        // Update State.
        dispatch(receiveGeneralConfig(newConfig));
    }
}

export function purgeCompleteTasksAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        dispatch(setDatabasePurgingFlag(true));

        getFirestore().collection(TASKS).get().then(snapshot => {
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
            })
        })
    }
}


export function getDatabaseInfoAsync() {
    return (dispatch, getState, { getFirestore, getAuth }) => {
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
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        dispatch(closeCalendar());

        // Update Firestore.
        var taskRef = getFirestore().collection(TASKS).doc(taskId);
        taskRef.update({
            isHighPriority: newValue,
        }).then(() => {
            // Careful what you do here, promises don't resolve if you are offline.
        })
    }
}


export function updateTaskDueDateAsync(taskId, newDate) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        dispatch(closeCalendar());

        // Update Firestore.
        var taskRef = getFirestore().collection(TASKS).doc(taskId);
        taskRef.update({
            dueDate: newDate,
            isNewTask: false
        }).then(() => {
            // Carefull what you do here, promises don't resolve if you are offline.
        })
    }
}

export function updateTaskListSettingsAsync(taskListWidgetId, newValue) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        dispatch(setOpenTaskListSettingsMenuId(-1));

        // Update Firestore.
        var taskListRef = getFirestore().collection(TASKLISTS).doc(taskListWidgetId);

        taskListRef.update({
            settings: Object.assign({}, newValue)
        }).then(() => {
            /// Carefull what you do here, promises don't resolve if you are offline.
        })
    }
}

export function removeTaskListAsync(taskListWidgetId) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        if (taskListWidgetId !== -1) {
            // Update Firestore.
            // Collect related TaskIds.
            var taskIds = collectTaskListRelatedTaskIds(getState().tasks, taskListWidgetId);

            // Build Batch.
            var batch = getFirestore().batch();

            // Task lists
            batch.delete(getFirestore().collection(TASKLISTS).doc(taskListWidgetId));

            // Tasks.
            taskIds.forEach(id => {
                batch.delete(getFirestore().collection(TASKS).doc(id));
            })

            batch.commit().then(() => {
                // Carefull what you do here. Promises don't resolve if you are Offline.
            })

            dispatch(changeFocusedTaskList(-1));
        }

    }
}


export function updateProjectNameAsync(projectId, newValue) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        // Update Firestore.
        var projectRef = getFirestore().collection(PROJECTS).doc(projectId);
        projectRef.update({ projectName: newValue }).then(() => {
            // Carefull what you do here, promises don't resolve if you are offline.
        })
    }
}

export function removeProjectAsync(projectId) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {

        if (getState.selectedProjectId !== -1) {
            // Get a List of Task List Id's . It's Okay to collect these from State as associated taskLists have already
            // been loaded in via the handleProjectSelectorClick method. No point in querying Firebase again for this data.
            var taskListIds = getState().taskLists.filter(item => {
                return item.project === projectId;
            }).map(taskList => { return taskList.uid });

            var taskIds = collectProjectRelatedTaskIds(getState().tasks, projectId);

            // Build Updates.
            var batch = getFirestore().batch();

            // Tasklists.
            taskListIds.forEach(id => {
                batch.delete(getFirestore().collection(TASKLISTS).doc(id));
            })

            // Tasks
            taskIds.forEach(id => {
                batch.delete(getFirestore().collection(TASKS).doc(id));
            })

            // Project Layout
            var projectLayoutId = getState().projectLayout.uid;
            if (projectLayoutId !== -1) {
                batch.delete(getFirestore().collection(PROJECTLAYOUTS).doc(projectLayoutId));
            }

            // Project.
            batch.delete(getFirestore().collection(PROJECTS).doc(projectId));

            // Execute the Batch.
            batch.commit().then(() => {
                // Carefull what you do here, promises don't resolve if you are offline.
            })
        }
    }
}


export function addNewProjectAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        // Update Firestore.    
        var newProjectName = "New Project";
        var batch = getFirestore().batch();

        // Project.
        var newProjectRef = getFirestore().collection(PROJECTS).doc();
        var newProjectKey = newProjectRef.id;

        var newProject = new ProjectStore(newProjectName, newProjectKey);
        batch.set(newProjectRef, Object.assign({}, newProject));

        // Layout
        var newLayoutRef = getFirestore().collection(PROJECTLAYOUTS).doc(newProjectKey);

        var newProjectLayout = new ProjectLayoutStore({}, newProjectKey, newProjectKey);
        batch.set(newLayoutRef, Object.assign({}, newProjectLayout));

        // Execute Additions.
        batch.commit().then(() => {
            // Carefull what you do here, promises don't resolve if you are offline.
        })
    }
}




export function updateTaskCompleteAsync(taskListWidgetId, taskId, newValue) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        if (getState().selectedTask.taskListWidgetId !== taskListWidgetId &&
            getState().selectedTask.taskId !== taskId) {
            dispatch(selectTask(taskListWidgetId, taskId));
        }

        // Update Firestore.
        var taskRef = getFirestore().collection(TASKS).doc(taskId);

        taskRef.update({
            isComplete: newValue,
            isNewTask: false
        }).then(() => {
            // Carefull what you do here, promises don't resolve if you are offline.h.
        })
    }
}

export function updateProjectLayoutAsync(layouts, projectId) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        var newTrimmedLayouts = trimLayoutsHelper(layouts);

        // Update Firestore.
        var projectLayoutsRef = getFirestore().collection(PROJECTLAYOUTS).doc(projectId);
        projectLayoutsRef.update({ layouts: newTrimmedLayouts }).then(() => {
            // Carefull what you do here, promises don't resolve if you are offline.
        })
    }
}


export function updateTaskNameAsync(taskListWidgetId, taskId, newData) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        dispatch(closeTask(taskListWidgetId, taskId));

        // TODO: Notify of Firebase Request.

        var update = {
            taskName: newData,
            isNewTask: false // Reset new Task Property.
        }

        // Returns a new Update Object with arguments parsed in (if any);
        var newUpdate = parseArgumentsIntoUpdate(update);


        // Update Firestore.
        var taskRef = getFirestore().collection(TASKS).doc(taskId);
        taskRef.update(newUpdate).then(() => {
            // Carefull what you do here, promises don't resolve if you are offline.
        })
    }
}

export function removeSelectedTaskAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {

        var taskId = getState().selectedTask.taskId;
        if (taskId !== -1) {
            // Update Firestore.    
            // Build Batch and Execute.
            var batch = getFirestore().batch();
            var taskRef = getFirestore().collection(TASKS).doc(taskId);
            batch.delete(taskRef);

            batch.commit().then(() => {
                // Carefull what you do here, promises don't resolve if you are offline.
            });

            dispatch(selectTask(getState().focusedTaskListId, -1));
        }
    }
}


export function updateTaskListWidgetHeaderAsync(taskListWidgetId, newName) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        var taskListRef = getFirestore().collection(TASKLISTS).doc(taskListWidgetId);
        taskListRef.update({ taskListName: newName }).then(() => {
            // Carefull what you do here, promises don't resolve if you are offline.
        })
    }
}


export function moveTaskAsync(destinationTaskListId) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        dispatch(startTaskMoveInDatabase());

        var movingTaskId = getState().movingTaskId;
        var taskRef = getFirestore().collection(TASKS).doc(movingTaskId);
        taskRef.update({
            taskList: destinationTaskListId
        }).then(() => {
            /// Carefull what you do here, promises don't resolve if you are offline.
        })

        dispatch(endTaskMove(movingTaskId, destinationTaskListId));
    }
}


export function addNewTaskAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        if (getState().focusedTaskListId !== -1) {

            const { selectedProjectId, focusedTaskListId } = getState();

            if (selectedProjectId !== -1 && focusedTaskListId !== -1) {
                // Add a new Task.
                dispatch(startTaskAdd());

                var newTaskRef = getFirestore().collection(TASKS).doc();
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
                })

                dispatch(openTask(newTask.taskList, newTask.uid)); // Opening a Task by convention Selects it.

            }
        }
    }
}

export function addNewTaskListAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        dispatch(startTasklistAdd());

        var selectedProjectId = getState().selectedProjectId;

        if (selectedProjectId !== -1) {
            // Add to Firestore.
            var newTaskListRef = getFirestore().collection(TASKLISTS).doc();

            var newTaskList = new TaskListStore(
                "New Task List",
                selectedProjectId,
                newTaskListRef.id,
                newTaskListRef.id,
                Object.assign({}, new TaskListSettingsStore(true, "completed"))
            )

            newTaskListRef.set(Object.assign({}, newTaskList)).then(() => {
                // Carefull what you do here, promises don't resolve if you are offline.
            })
        }
    }
}

export function getAccountConfigAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        getFirestore().collection(ACCOUNT).doc(ACCOUNT_DOC_ID).onSnapshot( doc => {
            if (doc.exists) {
                var accountConfig = doc.data();
                dispatch(receiveAccountConfig(accountConfig));

                // Dexie returns numbers as strings. Convert "-1" to a number if required.
                var favouriteProjectId = accountConfig.favouriteProjectId === "-1" ?
                    parseInt(accountConfig.favouriteProjectId) :
                    accountConfig.favouriteProjectId;

                dispatch(selectProjectAsync(favouriteProjectId));
            }
        })
    }
}

export function getProjectsAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        dispatch(startProjectsFetch());

        // Get Projects from Firestore.
        getFirestore().collection("projects").onSnapshot(IncludeQueryMetadataChanges, snapshot => {
            // Handle metadata.
            dispatch(setProjectsHavePendingWrites(snapshot.metadata.hasPendingWrites));

            if (snapshot.docChanges.length > 0) {
                var projects = [];
                snapshot.forEach(doc => {
                    projects.push(doc.data());
                })

                dispatch(receiveProjects(projects));
            }
        })
    }
}

export function getTasksAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        dispatch(startTasksFetch());

        // Get Tasks from Firestore.
        getFirestore().collection(TASKS).orderBy("project").onSnapshot(IncludeQueryMetadataChanges, snapshot => {
            // Handle Metadata.
            dispatch(setTasksHavePendingWrites(snapshot.metadata.hasPendingWrites))

            // Handle Tasks.
            if (snapshot.docChanges.length > 0) {
                var tasks = [];
                snapshot.forEach(doc => {
                    tasks.push(doc.data());
                });

                dispatch(receiveTasks(tasks));
            }
        })
    }
}

export function getTaskListsAsync(projectId) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        dispatch(startTaskListsFetch());

        // Get Tasklists from Firestore.
        getFirestore().collection(TASKLISTS).onSnapshot(IncludeQueryMetadataChanges, snapshot => {
            // Handle Metadata.
            dispatch(setTaskListsHavePendingWrites(snapshot.metadata.hasPendingWrites));

            if (snapshot.docChanges.length > 0) {
                var taskLists = [];
                snapshot.forEach(doc => {
                    taskLists.push(doc.data());
                })

                dispatch(receiveTaskLists(taskLists));
            }
        });
    }
}

export function getProjectLayoutsAsync(projectId) {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        dispatch(startProjectLayoutsFetch());

        getFirestore().collection(PROJECTLAYOUTS).where("project", "==", projectId).onSnapshot(IncludeQueryMetadataChanges, snapshot => {
            // Handle Metadata.
            dispatch(setProjectLayoutsHavePendingWrites(snapshot.metadata.hasPendingWrites));

            if (snapshot.docChanges.length > 0) {
                var projectLayouts = [];
                if (snapshot.empty !== true) {
                    snapshot.forEach(doc => {
                        projectLayouts.push(doc.data());
                    })
                }

                else {
                    projectLayouts[0] = new ProjectLayoutStore({}, -1, -1);
                }

                dispatch(receiveProjectLayout(projectLayouts[0]));
            }
        });
    }
}

export function unsubscribeAccountConfigAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        var accountConfigUnsubscribe = getFirestore().collection(ACCOUNT).doc(ACCOUNT_DOC_ID).onSnapshot(() => { });
        accountConfigUnsubscribe();
    }
}

export function unsubscribeProjectsAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        var projectUnsubscribe = getFirestore().collection(PROJECTS).onSnapshot(() => { });
        projectUnsubscribe();
    }
}

export function unsubscribeTaskListsAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        var taskListsUnsubscribe = getFirestore().collection(TASKLISTS).onSnapshot(() => { });
        taskListsUnsubscribe();
    }
}

export function unsubscribeTasksAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        var tasksUnsubscribe = getFirestore().collection(TASKS).onSnapshot(() => { });
        tasksUnsubscribe();
    }
}

export function unsubscribeProjectLayoutsAsync() {
    return (dispatch, getState, { getFirestore, getAuth, getDexie }) => {
        if (getState().selectedProjectId !== -1) {
            var projectLayoutsUnsubscribe = getFirestore().collection(PROJECTLAYOUTS).doc(getState().selectedProjectId).onSnapshot(() => { });
            projectLayoutsUnsubscribe();
        }
    }
}

// Helper Functions.
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