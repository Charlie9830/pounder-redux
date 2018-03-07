'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.appReducer = appReducer;

var _index = require('../action-types/index');

var ActionTypes = _interopRequireWildcard(_index);

var _pounderUtilities = require('pounder-utilities');

var _pounderStores = require('pounder-stores');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function appReducer(state, action) {
    switch (action.type) {
        case ActionTypes.CHANGE_FOCUSED_TASKLIST:
            return _extends({}, state, {
                focusedTaskListId: action.id,
                openCalendarId: -1,
                openTaskListSettingsMenuId: -1,
                isTaskListJumpMenuOpen: false
            });

        case ActionTypes.SELECT_TASK:
            var openCalendarId = state.openCalendarId === action.taskId ? action.taskId : -1; // Keep calender open if Open already.

            return _extends({}, state, {
                selectedTask: { taskListWidgetId: action.taskListWidgetId, taskId: action.taskId, isInputOpen: false },
                focusedTaskListId: action.taskListWidgetId,
                isATaskMoving: false,
                movingTaskId: -1,
                sourceTaskListId: -1,
                openCalendarId: openCalendarId,
                openTaskListSettingsMenuId: -1,
                isTaskListJumpMenuOpen: false
            });

        case ActionTypes.OPEN_TASK:
            return _extends({}, state, {
                selectedTask: { taskListWidgetId: action.taskListWidgetId, taskId: action.taskId, isInputOpen: true },
                isATaskMoving: false,
                movingTaskId: -1,
                sourceTaskListId: -1,
                openCalendarId: -1,
                openTaskListSettingsMenuId: -1
            });

        case ActionTypes.CLOSE_TASK:
            return _extends({}, state, {
                selectedTask: { taskListWidgetId: action.taskListWidgetId, taskId: action.taskId, isInputOpen: false }
            });

        case ActionTypes.START_TASK_MOVE:
            return _extends({}, state, {
                isATaskMoving: true,
                selectedTask: { taskListWidgetId: action.sourceTaskListWidgetId, taskId: action.taskId, isInputOpen: false },
                focusedTaskListId: action.sourceTaskListWidgetId,
                movingTaskId: action.movingTaskId,
                sourceTaskListId: action.sourceTaskListWidgetId,
                openCalendarId: -1,
                openTaskListSettingsMenuId: -1
            });

        case ActionTypes.START_TASK_MOVE_IN_DATABASE:
            return _extends({}, state, {
                isAwaitingFirebase: true
            });

        case ActionTypes.END_TASK_MOVE:
            return _extends({}, state, {
                isAwaitingFirebase: false,
                isATaskMoving: false,
                sourceTaskListId: -1,
                movingTaskId: -1,
                selectedTask: { taskListWidgetId: action.destinationTaskListWidgetId, taskId: action.movedTaskId, isInputOpen: false }
            });
        case ActionTypes.START_PROJECTS_FETCH:
            return _extends({}, state, {
                isAwaitingFirebase: true
            });

        case ActionTypes.RECEIVE_PROJECTS:
            return _extends({}, state, {
                projects: action.projects,
                isAwaitingFirebase: false
            });

        case ActionTypes.START_TASKS_FETCH:
            return _extends({}, state, {
                isAwaitingFirebase: true
            });

        case ActionTypes.RECEIVE_TASKS:
            return _extends({}, state, {
                isAwaitingFirebase: false,
                tasks: action.tasks,
                projectSelectorDueDateDisplays: getProjectSelectorDueDateDisplaysHelper(action.tasks)
            });

        case ActionTypes.LOCK_APP:
            return _extends({}, state, {
                isLockScreenDisplayed: true
            });

        case ActionTypes.SET_LAST_BACKUP_MESSAGE:
            return _extends({}, state, {
                lastBackupMessage: action.message
            });

        case ActionTypes.SET_OPEN_TASKLIST_SETTINGS_MENU_ID:
            return _extends({}, state, {
                openTaskListSettingsMenuId: action.id,
                isTaskListJumpMenuOpen: false
            });

        case ActionTypes.OPEN_CALENDAR:
            return _extends({}, state, {
                selectedTask: { taskListWidgetId: action.taskListWidgetId, taskId: action.taskId, isInputOpen: false },
                openCalendarId: action.taskId
            });

        case ActionTypes.UNLOCK_APP:
            return _extends({}, state, {
                isLockScreenDisplayed: false
            });

        case ActionTypes.START_TASKLIST_ADD:
            return _extends({}, state, {
                isAwaitingFirebase: true
            });

        case ActionTypes.START_TASK_ADD:
            return _extends({}, state, {
                isAwaitingFirebase: true
            });

        case ActionTypes.START_TASKLISTS_FETCH:
            return _extends({}, state, {
                isAwaitingFirebase: true
            });

        case ActionTypes.RECEIVE_TASKLISTS:
            return _extends({}, state, {
                isAwaitingFirebase: false,
                taskLists: action.taskLists
            });

        case ActionTypes.START_PROJECTLAYOUTS_FETCH:
            return _extends({}, state, {
                isAwaitingFirebase: true
            });

        case ActionTypes.RECEIVE_PROJECTLAYOUT:
            return _extends({}, state, {
                isAwaitingFirebase: false,
                projectLayout: action.projectLayout
            });

        case ActionTypes.SELECT_PROJECT:
            return _extends({}, state, {
                selectedProjectId: action.projectId,
                openCalendarId: -1,
                selectedTask: { taskListWidgetId: -1, taskId: -1, isInputOpen: false },
                isATaskMoving: false,
                movingTaskId: -1,
                sourceTaskListId: -1,
                focusedTaskListId: -1,
                openTaskListSettingsMenuId: -1,
                isTaskListJumpMenuOpen: false
            });

        case ActionTypes.CLOSE_CALENDAR:
            return _extends({}, state, {
                openCalendarId: -1
            });

        case ActionTypes.SET_PROJECTS_HAVE_PENDING_WRITES:
            return _extends({}, state, {
                projectsHavePendingWrites: action.value
            });

        case ActionTypes.SET_PROJECTLAYOUTS_HAVE_PENDING_WRITES:
            return _extends({}, state, {
                projectLayoutsHavePendingWrites: action.value
            });

        case ActionTypes.SET_TASKLISTS_HAVE_PENDING_WRITES:
            return _extends({}, state, {
                taskListsHavePendingWrites: action.value
            });

        case ActionTypes.SET_TASKS_HAVE_PENDING_WRITES:
            return _extends({}, state, {
                tasksHavePendingWrites: action.value
            });

        case ActionTypes.OPEN_TASK_LIST_JUMP_MENU:
            return _extends({}, state, {
                isTaskListJumpMenuOpen: true
            });

        case ActionTypes.CLOSE_TASK_LIST_JUMP_MENU:
            return _extends({}, state, {
                isTaskListJumpMenuOpen: false
            });

        default:
            console.log("App Reducer is missing a Case for action:  " + action.type);
            return state;
    }
}

// Helper Methods.
var getProjectSelectorDueDateDisplaysHelper = function getProjectSelectorDueDateDisplaysHelper(tasks) {
    var returnList = {};

    tasks.forEach(function (item) {
        if (item.dueDate !== "" && item.isComplete !== true) {
            if (returnList[item.project] == undefined) {
                returnList[item.project] = { greens: 0, yellows: 0, yellowReds: 0, reds: 0 };
            }

            var _ParseDueDate = (0, _pounderUtilities.ParseDueDate)(item.isComplete, item.dueDate),
                className = _ParseDueDate.className;

            switch (className) {
                case "DueDate Later":
                    returnList[item.project].greens += 1;
                    break;

                case "DueDate Soon":
                    returnList[item.project].yellows += 1;
                    break;

                case "DueDate Today":
                    returnList[item.project].yellowReds += 1;

                case "DueDate Overdue":
                    returnList[item.project].reds += 1;

                default:
                    break;
            }
        }
    });

    return returnList;
};
