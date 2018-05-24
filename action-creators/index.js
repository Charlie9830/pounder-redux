'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
exports.openTaskListJumpMenu = openTaskListJumpMenu;
exports.closeTaskListJumpMenu = closeTaskListJumpMenu;
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

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _stringArgv = require('string-argv');

var _stringArgv2 = _interopRequireDefault(_stringArgv);

var _pounderUtilities = require('pounder-utilities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var legalArgsRegEx = / -dd | -hp /i;
var dateFormat = "DD-MM-YYYY";

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
    return function (dispatch, getState, _ref) {
        var getFirestore = _ref.getFirestore,
            getAuth = _ref.getAuth;

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
    return function (dispatch, getState, _ref2) {
        var getFirestore = _ref2.getFirestore,
            getAuth = _ref2.getAuth;

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
    return function (dispatch, getState, _ref3) {
        var getFirestore = _ref3.getFirestore,
            getAuth = _ref3.getAuth;

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
    return function (dispatch, getState, _ref4) {
        var getFirestore = _ref4.getFirestore,
            getAuth = _ref4.getAuth;

        if (taskListWidgetId !== -1) {
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

            dispatch(changeFocusedTaskList(-1));
        }
    };
}

function updateProjectNameAsync(projectId, newValue) {
    return function (dispatch, getState, _ref5) {
        var getFirestore = _ref5.getFirestore,
            getAuth = _ref5.getAuth;

        // Update Firestore.
        var projectRef = getFirestore().collection(_pounderFirebase.PROJECTS).doc(projectId);
        projectRef.update({ projectName: newValue }).then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.
        });
    };
}

function removeProjectAsync(projectId) {
    return function (dispatch, getState, _ref6) {
        var getFirestore = _ref6.getFirestore,
            getAuth = _ref6.getAuth;


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
        }
    };
}

function addNewProjectAsync() {
    return function (dispatch, getState, _ref7) {
        var getFirestore = _ref7.getFirestore,
            getAuth = _ref7.getAuth;

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
    return function (dispatch, getState, _ref8) {
        var getFirestore = _ref8.getFirestore,
            getAuth = _ref8.getAuth;

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
    return function (dispatch, getState, _ref9) {
        var getFirestore = _ref9.getFirestore,
            getAuth = _ref9.getAuth;

        var newTrimmedLayouts = trimLayoutsHelper(layouts);

        // Update Firestore.
        var projectLayoutsRef = getFirestore().collection(_pounderFirebase.PROJECTLAYOUTS).doc(projectId);
        projectLayoutsRef.update({ layouts: newTrimmedLayouts }).then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.
        });
    };
}

function updateTaskNameAsync(taskListWidgetId, taskId, newData) {
    return function (dispatch, getState, _ref10) {
        var getFirestore = _ref10.getFirestore,
            getAuth = _ref10.getAuth;

        dispatch(closeTask(taskListWidgetId, taskId));

        // TODO: Notify of Firebase Request.

        var update = {
            taskName: newData,
            isNewTask: false // Reset new Task Property.


            // Returns a new Update Object with arguments parsed in (if any);
        };var newUpdate = parseArgumentsIntoUpdate(update);

        // Update Firestore.
        var taskRef = getFirestore().collection(_pounderFirebase.TASKS).doc(taskId);
        taskRef.update(newUpdate).then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.
        });
    };
}

function removeSelectedTaskAsync() {
    return function (dispatch, getState, _ref11) {
        var getFirestore = _ref11.getFirestore,
            getAuth = _ref11.getAuth;


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

            dispatch(selectTask(getState().focusedTaskListId, -1));
        }
    };
}

function updateTaskListWidgetHeaderAsync(taskListWidgetId, newName) {
    return function (dispatch, getState, _ref12) {
        var getFirestore = _ref12.getFirestore,
            getAuth = _ref12.getAuth;

        var taskListRef = getFirestore().collection(_pounderFirebase.TASKLISTS).doc(taskListWidgetId);
        taskListRef.update({ taskListName: newName }).then(function () {
            // Carefull what you do here, promises don't resolve if you are offline.
        });
    };
}

function moveTaskAsync(destinationTaskListId) {
    return function (dispatch, getState, _ref13) {
        var getFirestore = _ref13.getFirestore,
            getAuth = _ref13.getAuth;

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
    return function (dispatch, getState, _ref14) {
        var getFirestore = _ref14.getFirestore,
            getAuth = _ref14.getAuth;

        if (getState().focusedTaskListId !== -1) {
            var _getState = getState(),
                selectedProjectId = _getState.selectedProjectId,
                focusedTaskListId = _getState.focusedTaskListId;

            if (selectedProjectId !== -1 && focusedTaskListId !== -1) {
                // Add a new Task.
                dispatch(startTaskAdd());

                var newTaskRef = getFirestore().collection(_pounderFirebase.TASKS).doc();
                var newTaskKey = newTaskRef.id;

                var newTask = new _pounderStores.TaskStore("", "", false, selectedProjectId, focusedTaskListId, newTaskKey, new _moment2.default().toISOString(), true, false);

                newTaskRef.set(Object.assign({}, newTask)).then(function () {});

                dispatch(openTask(newTask.taskList, newTask.uid)); // Opening a Task by convention Selects it.
            }
        }
    };
}

function addNewTaskListAsync() {
    return function (dispatch, getState, _ref15) {
        var getFirestore = _ref15.getFirestore,
            getAuth = _ref15.getAuth;

        dispatch(startTasklistAdd());

        var selectedProjectId = getState().selectedProjectId;

        if (selectedProjectId !== -1) {
            // Add to Firestore.
            var newTaskListRef = getFirestore().collection(_pounderFirebase.TASKLISTS).doc();

            var newTaskList = new _pounderStores.TaskListStore("New Task List", selectedProjectId, newTaskListRef.id, newTaskListRef.id, Object.assign({}, new _pounderStores.TaskListSettingsStore(true, "completed")));

            newTaskListRef.set(Object.assign({}, newTaskList)).then(function () {
                // Carefull what you do here, promises don't resolve if you are offline.
            });
        }
    };
}

function getProjectsAsync() {
    return function (dispatch, getState, _ref16) {
        var getFirestore = _ref16.getFirestore,
            getAuth = _ref16.getAuth;

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
    return function (dispatch, getState, _ref17) {
        var getFirestore = _ref17.getFirestore,
            getAuth = _ref17.getAuth;

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
    return function (dispatch, getState, _ref18) {
        var getFirestore = _ref18.getFirestore,
            getAuth = _ref18.getAuth;

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
    return function (dispatch, getState, _ref19) {
        var getFirestore = _ref19.getFirestore,
            getAuth = _ref19.getAuth;

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
    return function (dispatch, getState, _ref20) {
        var getFirestore = _ref20.getFirestore,
            getAuth = _ref20.getAuth;

        var projectUnsubscribe = getFirestore().collection(_pounderFirebase.PROJECTS).onSnapshot(function () {});
        projectUnsubscribe();
    };
}

function unsubscribeTaskListsAsync() {
    return function (dispatch, getState, _ref21) {
        var getFirestore = _ref21.getFirestore,
            getAuth = _ref21.getAuth;

        var taskListsUnsubscribe = getFirestore().collection(_pounderFirebase.TASKLISTS).onSnapshot(function () {});
        taskListsUnsubscribe();
    };
}

function unsubscribeTasksAsync() {
    return function (dispatch, getState, _ref22) {
        var getFirestore = _ref22.getFirestore,
            getAuth = _ref22.getAuth;

        var tasksUnsubscribe = getFirestore().collection(_pounderFirebase.TASKS).onSnapshot(function () {});
        tasksUnsubscribe();
    };
}

function unsubscribeProjectLayoutsAsync() {
    return function (dispatch, getState, _ref23) {
        var getFirestore = _ref23.getFirestore,
            getAuth = _ref23.getAuth;

        if (getState().selectedProjectId !== -1) {
            var projectLayoutsUnsubscribe = getFirestore().collection(_pounderFirebase.PROJECTLAYOUTS).doc(getState().selectedProjectId).onSnapshot(function () {});
            projectLayoutsUnsubscribe();
        }
    };
}

// Helper Functions.
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
