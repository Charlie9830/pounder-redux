'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.changeFocusedTaskList = changeFocusedTaskList;
exports.selectTask = selectTask;
exports.openTask = openTask;
exports.closeTask = closeTask;
exports.startTaskMove = startTaskMove;
exports.startTaskMoveInDatabase = startTaskMoveInDatabase;
exports.startProjectsFetch = startProjectsFetch;
exports.receiveProjects = receiveProjects;
exports.startTasksFetch = startTasksFetch;
exports.receiveTasks = receiveTasks;
exports.lockApp = lockApp;
exports.unlockApp = unlockApp;
exports.setLastBackupMessage = setLastBackupMessage;
exports.setOpenTaskListSettingsMenuId = setOpenTaskListSettingsMenuId;
exports.openCalendar = openCalendar;
exports.startTasklistAdd = startTasklistAdd;
exports.startTaskAdd = startTaskAdd;
exports.startTaskListsFetch = startTaskListsFetch;
exports.receiveTaskLists = receiveTaskLists;
exports.startProjectLayoutsFetch = startProjectLayoutsFetch;
exports.receiveProjectLayout = receiveProjectLayout;
exports.selectProject = selectProject;
exports.closeCalendar = closeCalendar;
exports.setProjectsHavePendingWrites = setProjectsHavePendingWrites;
exports.setProjectLayoutsHavePendingWrites = setProjectLayoutsHavePendingWrites;
exports.setTaskListsHavePendingWrites = setTaskListsHavePendingWrites;
exports.setTasksHavePendingWrites = setTasksHavePendingWrites;
exports.updateTaskPriority = updateTaskPriority;
exports.updateTaskDueDateAsync = updateTaskDueDateAsync;
exports.updateTaskListSettingsAsync = updateTaskListSettingsAsync;
exports.removeTaskListAsync = removeTaskListAsync;
exports.updateProjectNameAsync = updateProjectNameAsync;
exports.removeProjectAsync = removeProjectAsync;
exports.addNewProjectAsync = addNewProjectAsync;
exports.updateTaskCompleteAsync = updateTaskCompleteAsync;
exports.updateProjectLayoutAsync = updateProjectLayoutAsync;
exports.updateTaskNameAsync = updateTaskNameAsync;
exports.removeSelectedTaskAsync = removeSelectedTaskAsync;
exports.updateTaskListWidgetHeaderAsync = updateTaskListWidgetHeaderAsync;
exports.moveTaskAsync = moveTaskAsync;
exports.addNewTaskAsync = addNewTaskAsync;
exports.addNewTaskListAsync = addNewTaskListAsync;
exports.getProjectsAsync = getProjectsAsync;
exports.getTasksAsync = getTasksAsync;
exports.getTaskListsAsync = getTaskListsAsync;
exports.getProjectLayoutsAsync = getProjectLayoutsAsync;
exports.unsubscribeProjectsAsync = unsubscribeProjectsAsync;
exports.unsubscribeTaskListsAsync = unsubscribeTaskListsAsync;
exports.unsubscribeTasksAsync = unsubscribeTasksAsync;
exports.unsubscribeProjectLayoutsAsync = unsubscribeProjectLayoutsAsync;

var _index = require('../action-types/index');

var ActionTypes = _interopRequireWildcard(_index);

var _pounderFirebase = require('pounder-firebase');

var _pounderStores = require('pounder-stores');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _index2 = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Standard Action Creators.
function changeFocusedTaskList(id) {
    return {
        type: ActionTypes.CHANGE_FOCUSED_TASKLIST,
        id: id
    };
}

function selectTask(taskListWidgetId, taskId) {
    return {
        type: ActionTypes.SELECT_TASK,
        taskListWidgetId: taskListWidgetId,
        taskId: taskId
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

function receiveProjects(projects) {
    return {
        type: ActionTypes.RECEIVE_PROJECTS,
        projects: projects
    };
}

function startTasksFetch() {
    return {
        type: ActionTypes.START_TASKS_FETCH
    };
}

function receiveTasks(tasks) {
    return {
        type: ActionTypes.RECEIVE_TASKS,
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

function receiveTaskLists(taskLists) {
    return {
        type: ActionTypes.RECEIVE_TASKLISTS,
        taskLists: taskLists
    };
}

function startProjectLayoutsFetch() {
    return {
        type: ActionTypes.START_PROJECTLAYOUTS_FETCH
    };
}

function receiveProjectLayout(projectLayout) {
    return {
        type: ActionTypes.RECEIVE_PROJECTLAYOUT,
        projectLayout: projectLayout
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
function updateTaskPriority(taskId, newValue) {
    return function (dispatch, getState, getFirestore) {
        dispatch(closeCalendar());

        // Update Firestore.
        var taskRef = getFirestore().collection(_pounderFirebase.TASKS).doc(taskId);
        taskRef.update({
            isHighPriority: newValue
        }).then(function () {
            // Careful what you do here, promises don't resolve if you are offline.
        });
    };
}

function updateTaskDueDateAsync(taskId, newDate) {
    return function (dispatch, getState, getFirestore) {
        dispatch(closeCalendar());

        // Update Firestore.
        var taskRef = getFirestore().collection(_pounderFirebase.TASKS).doc(taskId);
        taskRef.update({
            dueDate: newDate,
            isNewTask: false
        }).then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.
        });
    };
}

function updateTaskListSettingsAsync(taskListWidgetId, newValue) {
    return function (dispatch, getState, getFirestore) {
        dispatch(setOpenTaskListSettingsMenuId(-1));

        // Update Firestore.
        var taskListRef = getFirestore().collection(_pounderFirebase.TASKLISTS).doc(taskListWidgetId);

        taskListRef.update({
            settings: Object.assign({}, newValue)
        }).then(function () {
            /// Carefull what you do here, promises don't resolve if you are offline.
        });
    };
}

function removeTaskListAsync(taskListWidgetId) {
    return function (dispatch, getState, getFirestore) {
        // Update Firestore.
        // Collect related TaskIds.
        var taskIds = collectTaskListRelatedTaskIds(getState().tasks, taskListWidgetId);

        // Build Batch.
        var batch = getFirestore().batch();

        // Task lists
        batch.delete(getFirestore().collection(_pounderFirebase.TASKLISTS).doc(taskListWidgetId));

        // Tasks.
        taskIds.forEach(function (id) {
            batch.delete(getFirestore().collection(_pounderFirebase.TASKS).doc(id));
        });

        batch.commit().then(function () {
            // Carefull what you do here. Promises don't resolve if you are Offline.
        });
    };
}

function updateProjectNameAsync(projectId, newValue) {
    return function (dispatch, getState, getFirestore) {
        // Update Firestore.
        var projectRef = getFirestore().collection(_pounderFirebase.PROJECTS).doc(projectId);
        projectRef.update({ projectName: newValue }).then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.
        });
    };
}

function removeProjectAsync(projectId) {
    return function (dispatch, getState, getFirestore) {
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

        // Tasklists.
        taskListIds.forEach(function (id) {
            batch.delete(getFirestore().collection(_pounderFirebase.TASKLISTS).doc(id));
        });

        // Tasks
        taskIds.forEach(function (id) {
            batch.delete(getFirestore().collection(_pounderFirebase.TASKS).doc(id));
        });

        // Project Layout
        var projectLayoutId = getState().projectLayout.uid;
        if (projectLayoutId !== -1) {
            batch.delete(getFirestore().collection(_pounderFirebase.PROJECTLAYOUTS).doc(projectLayoutId));
        }

        // Project.
        batch.delete(getFirestore().collection(_pounderFirebase.PROJECTS).doc(projectId));

        // Execute the Batch.
        batch.commit().then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.
        });
    };
}

function addNewProjectAsync() {
    return function (dispatch, getState, getFirestore) {
        // Update Firestore.    
        var newProjectName = "New Project";
        var batch = getFirestore().batch();

        // Project.
        var newProjectRef = getFirestore().collection(_pounderFirebase.PROJECTS).doc();
        var newProjectKey = newProjectRef.id;

        var newProject = new _pounderStores.ProjectStore(newProjectName, newProjectKey);
        batch.set(newProjectRef, Object.assign({}, newProject));

        // Layout
        var newLayoutRef = getFirestore().collection(_pounderFirebase.PROJECTLAYOUTS).doc(newProjectKey);

        var newProjectLayout = new _pounderStores.ProjectLayoutStore({}, newProjectKey, newProjectKey);
        batch.set(newLayoutRef, Object.assign({}, newProjectLayout));

        // Execute Additions.
        batch.commit().then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.
        });
    };
}

function updateTaskCompleteAsync(taskListWidgetId, taskId, newValue) {
    return function (dispatch, getState, getFirestore) {
        if (getState().selectedTask.taskListWidgetId !== taskListWidgetId && getState().selectedTask.taskId !== taskId) {
            dispatch(selectTask(taskListWidgetId, taskId));
        }

        // Update Firestore.
        var taskRef = getFirestore().collection(_pounderFirebase.TASKS).doc(taskId);

        taskRef.update({
            isComplete: newValue,
            isNewTask: false
        }).then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.h.
        });
    };
}

function updateProjectLayoutAsync(layouts, projectId) {
    return function (dispatch, getState, getFirestore) {
        var newTrimmedLayouts = trimLayoutsHelper(layouts);

        // Update Firestore.
        var projectLayoutsRef = getFirestore().collection(_pounderFirebase.PROJECTLAYOUTS).doc(projectId);
        projectLayoutsRef.update({ layouts: newTrimmedLayouts }).then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.
        });
    };
}

function updateTaskNameAsync(taskListWidgetId, taskId, newData) {
    return function (dispatch, getState, getFirestore) {
        dispatch(closeTask(taskListWidgetId, taskId));

        // TODO: Notify of Firebase Request.
        // Update Firestore.
        var taskRef = getFirestore().collection(_pounderFirebase.TASKS).doc(taskId);
        taskRef.update({
            taskName: newData,
            isNewTask: false // Reset new Task Property.
        }).then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.
        });
    };
}

function removeSelectedTaskAsync() {
    return function (dispatch, getState, getFirestore) {
        var taskId = getState().selectedTask.taskId;
        if (taskId !== -1) {
            // Update Firestore.    
            // Build Batch and Execute.
            var batch = getFirestore().batch();
            var taskRef = getFirestore().collection(_pounderFirebase.TASKS).doc(taskId);
            batch.delete(taskRef);

            batch.commit().then(function () {
                // Carefull what you do here, promises don't resolve if you are offline.
            });
        }
    };
}

function updateTaskListWidgetHeaderAsync(taskListWidgetId, newName) {
    return function (dispatch, getState, getFirestore) {
        var taskListRef = getFirestore().collection(_pounderFirebase.TASKLISTS).doc(taskListWidgetId);
        taskListRef.update({ taskListName: newName }).then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.
        });
    };
}

function moveTaskAsync(destinationTaskListId) {
    return function (dispatch, getState, getFirestore) {
        dispatch(startTaskMoveInDatabase());

        var movingTaskId = getState().movingTaskId;
        var taskRef = getFirestore().collection(_pounderFirebase.TASKS).doc(movingTaskId);
        taskRef.update({
            taskList: destinationTaskListId
        }).then(function () {
            /// Carefull what you do here, promises don't resolve if you are offline.
        });

        dispatch(endTaskMove(movingTaskId, destinationTaskListId));
    };
}

function addNewTaskAsync() {
    return function (dispatch, getState, getFirestore) {
        if (getState().focusedTaskListId !== -1) {
            var _getState = getState(),
                selectedProjectId = _getState.selectedProjectId,
                focusedTaskListId = _getState.focusedTaskListId;

            // Add a new Task.


            dispatch(startTaskAdd());

            var newTaskRef = getFirestore().collection(_pounderFirebase.TASKS).doc();
            var newTaskKey = newTaskRef.id;

            var newTask = new _pounderStores.TaskStore("", "", false, selectedProjectId, focusedTaskListId, newTaskKey, new _moment2.default().toISOString(), true);

            newTaskRef.set(Object.assign({}, newTask)).then(function () {});

            dispatch(openTask(newTask.taskList, newTask.uid)); // Opening a Task by convention Selects it.
        }
    };
}

function addNewTaskListAsync() {
    return function (dispatch, getState, getFirestore) {
        dispatch(startTasklistAdd());

        // Add to Firestore.
        var newTaskListRef = getFirestore().collection(_pounderFirebase.TASKLISTS).doc();

        var newTaskList = new _pounderStores.TaskListStore("New Task List", getState().selectedProjectId, newTaskListRef.id, newTaskListRef.id, Object.assign({}, new _pounderStores.TaskListSettingsStore(true, "completed")));

        newTaskListRef.set(Object.assign({}, newTaskList)).then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.
        });
    };
}

function getProjectsAsync() {
    return function (dispatch, getState, getFirestore) {
        dispatch(startProjectsFetch());

        // Get Projects from Firestore.
        getFirestore().collection("projects").onSnapshot(_index2.IncludeQueryMetadataChanges, function (snapshot) {
            // Handle metadata.
            dispatch(setProjectsHavePendingWrites(snapshot.metadata.hasPendingWrites));

            if (snapshot.docChanges.length > 0) {
                var projects = [];
                snapshot.forEach(function (doc) {
                    projects.push(doc.data());
                });

                dispatch(receiveProjects(projects));
            }
        });
    };
}

function getTasksAsync() {
    return function (dispatch, getState, getFirestore) {
        dispatch(startTasksFetch());

        // Get Tasks from Firestore.
        getFirestore().collection(_pounderFirebase.TASKS).orderBy("project").onSnapshot(_index2.IncludeQueryMetadataChanges, function (snapshot) {
            // Handle Metadata.
            dispatch(setTasksHavePendingWrites(snapshot.metadata.hasPendingWrites));

            // Handle Tasks.
            if (snapshot.docChanges.length > 0) {
                var tasks = [];
                snapshot.forEach(function (doc) {
                    tasks.push(doc.data());
                });

                dispatch(receiveTasks(tasks));
            }
        });
    };
}

function getTaskListsAsync(projectId) {
    return function (dispatch, getState, getFirestore) {
        dispatch(startTaskListsFetch());

        // Get Tasklists from Firestore.
        getFirestore().collection(_pounderFirebase.TASKLISTS).onSnapshot(_index2.IncludeQueryMetadataChanges, function (snapshot) {
            // Handle Metadata.
            dispatch(setTaskListsHavePendingWrites(snapshot.metadata.hasPendingWrites));

            if (snapshot.docChanges.length > 0) {
                var taskLists = [];
                snapshot.forEach(function (doc) {
                    taskLists.push(doc.data());
                });

                dispatch(receiveTaskLists(taskLists));
            }
        });
    };
}

function getProjectLayoutsAsync(projectId) {
    return function (dispatch, getState, getFirestore) {
        dispatch(startProjectLayoutsFetch());

        getFirestore().collection(_pounderFirebase.PROJECTLAYOUTS).where("project", "==", projectId).onSnapshot(_index2.IncludeQueryMetadataChanges, function (snapshot) {
            // Handle Metadata.
            dispatch(setProjectLayoutsHavePendingWrites(snapshot.metadata.hasPendingWrites));

            if (snapshot.docChanges.length > 0) {
                var projectLayouts = [];
                if (snapshot.empty !== true) {
                    snapshot.forEach(function (doc) {
                        projectLayouts.push(doc.data());
                    });
                } else {
                    projectLayouts[0] = new _pounderStores.ProjectLayoutStore({}, -1, -1);
                }

                dispatch(receiveProjectLayout(projectLayouts[0]));
            }
        });
    };
}

function unsubscribeProjectsAsync() {
    return function (dispatch, getState, getFirestore) {
        var projectUnsubscribe = getFirestore().collection(_pounderFirebase.PROJECTS).onSnapshot(function () {});
        projectUnsubscribe();
    };
}

function unsubscribeTaskListsAsync() {
    return function (dispatch, getState, getFirestore) {
        var taskListsUnsubscribe = getFirestore().collection(_pounderFirebase.TASKLISTS).onSnapshot(function () {});
        taskListsUnsubscribe();
    };
}

function unsubscribeTasksAsync() {
    return function (dispatch, getState, getFirestore) {
        var tasksUnsubscribe = getFirestore().collection(_pounderFirebase.TASKS).onSnapshot(function () {});
        tasksUnsubscribe();
    };
}

function unsubscribeProjectLayoutsAsync() {
    return function (dispatch, getState, getFirestore) {
        if (getState().selectedProjectId !== -1) {
            var projectLayoutsUnsubscribe = getFirestore().collection(_pounderFirebase.PROJECTLAYOUTS).doc(getState().selectedProjectId).onSnapshot(function () {});
            projectLayoutsUnsubscribe();
        }
    };
}

// Helper Functions.
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

function trimLayoutsHelper(layouts) {
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
