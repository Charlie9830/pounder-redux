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

var _pounderFirebase = require('pounder-firebase');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function appReducer(state, action) {
    switch (action.type) {
        case ActionTypes.CHANGE_FOCUSED_TASKLIST:
            return _extends({}, state, {
                focusedTaskListId: action.id,
                isTaskListJumpMenuOpen: false,
                selectedTask: processSelectedTask(state.selectedTask, action.id),
                openTaskOptionsId: -1
            });

        case ActionTypes.SELECT_TASK:
            var openCalendarId = state.openCalendarId === action.taskId ? action.taskId : -1; // Keep calender open if Open already.

            return _extends({}, state, {
                selectedTask: {
                    taskListWidgetId: action.taskListWidgetId,
                    taskId: action.taskId,
                    isInputOpen: false,
                    isMetadataOpen: action.openMetadata
                },
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
                selectedTask: {
                    taskListWidgetId: action.taskListWidgetId,
                    taskId: action.taskId,
                    isInputOpen: true,
                    isMetadataOpen: false
                },
                openTaskOptionsId: -1,
                isATaskMoving: false,
                movingTaskId: -1,
                sourceTaskListId: -1,
                openCalendarId: -1,
                openTaskListSettingsMenuId: -1
            });

        case ActionTypes.SET_OPEN_TASK_LIST_WIDGET_HEADER_ID:
            return _extends({}, state, {
                openTaskListWidgetHeaderId: action.value
            });

        case ActionTypes.CLOSE_TASK:
            return _extends({}, state, {
                selectedTask: {
                    taskListWidgetId: action.taskListWidgetId,
                    taskId: action.taskId,
                    isInputOpen: false,
                    isMetadataOpen: false
                }
            });

        case ActionTypes.CLOSE_METADATA:
            {
                return _extends({}, state, {
                    selectedTask: _extends({}, state.selectedTask, { isMetadataOpen: false })
                });
            }

        case ActionTypes.SET_IS_SIDEBAR_OPEN:
            return _extends({}, state, {
                isSidebarOpen: action.value
            });

        case ActionTypes.START_TASK_MOVE:
            return _extends({}, state, {
                isATaskMoving: true,
                selectedTask: {
                    taskListWidgetId: action.sourceTaskListWidgetId,
                    taskId: action.taskId,
                    isInputOpen: false,
                    isMetadataOpen: false
                },
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
                selectedTask: {
                    taskListWidgetId: action.destinationTaskListWidgetId,
                    taskId: action.movedTaskId,
                    isInputOpen: false,
                    isMetadataOpen: false
                }
            });
        case ActionTypes.START_PROJECTS_FETCH:
            return _extends({}, state, {
                isAwaitingFirebase: true
            });

        case ActionTypes.RECEIVE_LOCAL_PROJECTS:
            return _extends({}, state, {
                localProjects: action.projects,
                projects: [].concat(_toConsumableArray(action.projects), _toConsumableArray(state.remoteProjects)),
                isAwaitingFirebase: false
            });

        case ActionTypes.RECEIVE_REMOTE_PROJECTS:
            return _extends({}, state, {
                remoteProjects: action.projects,
                projects: [].concat(_toConsumableArray(state.localProjects), _toConsumableArray(action.projects))
            });

        case ActionTypes.SET_UPDATING_USER_IDS:
            {
                return _extends({}, state, {
                    updatingUserIds: action.value
                });
            }

        case ActionTypes.RECEIVE_MEMBERS:
            return _extends({}, state, {
                members: action.members
            });

        case ActionTypes.RECEIVE_INVITES:
            return _extends({}, state, {
                invites: action.invites
            });

        case ActionTypes.START_TASKS_FETCH:
            return _extends({}, state, {
                isAwaitingFirebase: true
            });

        case ActionTypes.RECEIVE_LOCAL_TASKS:
            var newTasks = [].concat(_toConsumableArray(action.tasks), _toConsumableArray(state.remoteTasks));
            return _extends({}, state, {
                isAwaitingFirebase: false,
                tasks: newTasks,
                localTasks: action.tasks,
                projectSelectorDueDateDisplays: getProjectSelectorDueDateDisplaysHelper(newTasks)
            });

        case ActionTypes.RECEIVE_REMOTE_TASKS:
            var newTasks = [].concat(_toConsumableArray(state.localTasks), _toConsumableArray(action.tasks));
            return _extends({}, state, {
                isAwaitingFirebase: false,
                tasks: newTasks,
                remoteTasks: action.tasks,
                projectSelectorDueDateDisplays: getProjectSelectorDueDateDisplaysHelper(newTasks)
            });

        case ActionTypes.LOCK_APP:
            return _extends({}, state, {
                isLockScreenDisplayed: true
            });

        case ActionTypes.SET_LAST_BACKUP_DATE:
            return _extends({}, state, {
                lastBackupDate: action.value
            });

        case ActionTypes.SET_OPEN_TASKLIST_SETTINGS_MENU_ID:
            return _extends({}, state, {
                openTaskListSettingsMenuId: action.id,
                isTaskListJumpMenuOpen: false
            });

        case ActionTypes.OPEN_CALENDAR:
            return _extends({}, state, {
                selectedTask: {
                    taskListWidgetId: action.taskListWidgetId,
                    taskId: action.taskId,
                    isInputOpen: false,
                    isMetadataOpen: false
                },
                openTaskOptionsId: -1,
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

        case ActionTypes.RECEIVE_LOCAL_TASKLISTS:
            return _extends({}, state, {
                isAwaitingFirebase: false,
                taskLists: [].concat(_toConsumableArray(action.taskLists), _toConsumableArray(state.remoteTaskLists)),
                localTaskLists: action.taskLists
            });

        case ActionTypes.RECEIVE_REMOTE_TASKLISTS:
            return _extends({}, state, {
                isAwatingFirebase: false,
                taskLists: [].concat(_toConsumableArray(state.localTaskLists), _toConsumableArray(action.taskLists)),
                remoteTaskLists: action.taskLists
            });

        case ActionTypes.START_PROJECTLAYOUTS_FETCH:
            return _extends({}, state, {
                isAwaitingFirebase: true
            });

        case ActionTypes.RECEIVE_LOCAL_PROJECTLAYOUTS:
            return _extends({}, state, {
                isAwaitingFirebase: false,
                localProjectLayouts: action.value,
                projectLayouts: [].concat(_toConsumableArray(action.value), _toConsumableArray(state.remoteProjectLayouts))
            });

        case ActionTypes.RECEIVE_REMOTE_PROJECTLAYOUTS:
            return _extends({}, state, {
                isAwaitingFirebase: false,
                remoteProjectLayouts: action.value,
                projectLayouts: [].concat(_toConsumableArray(state.localProjectLayouts), _toConsumableArray(action.value))
            });

        case ActionTypes.RECEIVE_REMOTE_PROJECT_LAYOUT:
            return _extends({}, state, {
                isAwaitingFirebase: false,
                remoteProjectLayout: action.projectLayout
            });

        case ActionTypes.SET_OPEN_PROJECT_SELECTOR_ID:
            return _extends({}, state, {
                openProjectSelectorId: action.value
            });

        case ActionTypes.SELECT_PROJECT:
            return _extends({}, state, {
                selectedProjectId: action.projectId,
                isSelectedProjectRemote: action.projectId === -1 ? false : isProjectRemote(state, action.projectId),
                openCalendarId: -1,
                selectedTask: {
                    taskListWidgetId: -1,
                    taskId: -1,
                    isInputOpen: false,
                    isMetadataOpen: false
                },
                openTaskOptionsId: -1,
                openTaskListWidgetHeaderId: -1,
                openProjectSelectorId: action.projectId === state.openProjectSelectorId ? state.openProjectSelectorId : -1,
                isATaskMoving: false,
                movingTaskId: -1,
                sourceTaskListId: -1,
                focusedTaskListId: -1,
                openTaskListSettingsMenuId: -1,
                isTaskListJumpMenuOpen: false,
                showOnlySelfTasks: false
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

        case ActionTypes.SET_IS_SHUTTING_DOWN_FLAG:
            return _extends({}, state, {
                isShuttingDown: action.value
            });

        case ActionTypes.SET_APP_SETTINGS_MENU_PAGE:
            return _extends({}, state, {
                appSettingsMenuPage: action.value
            });

        case ActionTypes.SET_DATABASE_INFO:
            return _extends({}, state, {
                databaseInfo: action.value
            });

        case ActionTypes.SET_DATABASE_PURGING_FLAG:
            return _extends({}, state, {
                isDatabasePurging: action.value
            });

        case ActionTypes.SET_IS_DATABASE_RESTORING_FLAG:
            return _extends({}, state, {
                isDatabaseRestoring: action.value
            });

        case ActionTypes.RECEIVE_GENERAL_CONFIG:
            {
                if (isFirstTimeBoot(action.value)) {
                    // First Time Boot.
                    return _extends({}, state, {
                        generalConfig: action.value,
                        isDexieConfigLoadComplete: true,
                        isAppSettingsOpen: true,
                        appSettingsMenuPage: 'account'
                    });
                } else {
                    // Normal Config Update.
                    return _extends({}, state, {
                        generalConfig: action.value,
                        isDexieConfigLoadComplete: true
                    });
                }
            }

        case ActionTypes.SET_IS_STARTING_UP_FLAG:
            {
                return _extends({}, state, {
                    isStartingUp: action.value
                });
            }

        case ActionTypes.SET_IS_DEXIE_CONFIG_LOAD_COMPLETE_FLAG:
            {
                return _extends({}, state, {
                    isDexieConfigLoadComplete: action.value
                });
            }

        case ActionTypes.SET_IS_APP_SETTINGS_OPEN:
            {
                return _extends({}, state, {
                    isAppSettingsOpen: action.value,
                    ignoreFullscreenTrigger: true // Stops the App toggling to Fullscreen imediately as the User selects the option.
                });
            }

        case ActionTypes.RECEIVE_ACCOUNT_CONFIG:
            {
                return _extends({}, state, {
                    accountConfig: action.value
                });
            }

        case ActionTypes.SET_IGNORE_FULLSCREEN_TRIGGER_FLAG:
            {
                return _extends({}, state, {
                    ignoreFullscreenTrigger: action.value
                });
            }

        case ActionTypes.RECEIVE_CSS_CONFIG:
            {
                return _extends({}, state, {
                    cssConfig: action.value
                });
            }

        case ActionTypes.SET_MESSAGE_BOX:
            {
                return _extends({}, state, {
                    messageBox: action.value
                });
            }

        case ActionTypes.SET_AUTH_STATUS_MESSAGE:
            {
                return _extends({}, state, {
                    authStatusMessage: action.value
                });
            }

        case ActionTypes.SET_IS_LOGGING_IN_FLAG:
            {
                return _extends({}, state, {
                    isLoggingIn: action.value
                });
            }

        case ActionTypes.SET_IS_LOGGED_IN_FLAG:
            {
                return _extends({}, state, {
                    isLoggedIn: action.value,
                    isLoggingIn: false
                });
            }

        case ActionTypes.SET_USER_EMAIL:
            {
                return _extends({}, state, {
                    userEmail: action.value
                });
            }

        case ActionTypes.SET_OPEN_TASK_OPTIONS_ID:
            {
                return _extends({}, state, {
                    openTaskOptionsId: action.value
                });
            }

        case ActionTypes.POST_SNACKBAR_MESSAGE:
            {
                return _extends({}, state, {
                    isSnackbarOpen: true,
                    snackbarMessage: action.message,
                    isSnackbarSelfDismissing: action.isSelfDismissing,
                    snackbarType: action.snackbarType
                });
            }

        case ActionTypes.DISMISS_SNACKBAR:
            {
                return _extends({}, state, {
                    isSnackbarOpen: false,
                    snackbarMessage: "",
                    isSnackbarSelfDismissing: false
                });
            }

        case ActionTypes.SET_OPEN_METADATA_ID:
            {
                return _extends({}, state, {
                    openMetadataId: action.value
                });
            }

        case ActionTypes.CLEAR_DATA:
            {
                return _extends({}, state, {
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
                    projectLayouts: [],
                    localProjectLayouts: [],
                    remoteProjectLayouts: [],
                    accountConfig: _pounderFirebase.AccountConfigFallback
                });
            }

        case ActionTypes.SET_UPDATING_INVITE_IDS:
            return _extends({}, state, {
                updatingInviteIds: action.value
            });

        case ActionTypes.SET_IS_SHARE_MENU_OPEN:
            {
                return _extends({}, state, {
                    isShareMenuOpen: action.value,
                    userInviteMessage: action.value === false ? '' : state.userInviteMessage
                });
            }

        case ActionTypes.SET_IS_SHARE_MENU_WAITING:
            {
                return _extends({}, state, {
                    isShareMenuWaiting: action.value
                });
            }

        case ActionTypes.SET_SHARE_MENU_MESSAGE:
            {
                return _extends({}, state, {
                    shareMenuMessage: action.value
                });
            }

        case ActionTypes.SET_SHARE_MENU_SUB_MESSAGE:
            {
                return _extends({}, state, {
                    shareMenuSubMessage: action.value
                });
            }

        case ActionTypes.SET_DISPLAY_NAME:
            {
                return _extends({}, state, {
                    displayName: action.value
                });
            }

        case ActionTypes.RECEIVE_REMOTE_PROJECT_IDS:
            {
                return _extends({}, state, {
                    remoteProjectIds: action.value
                });
            }

        case ActionTypes.SET_SHOW_ONLY_SELF_TASKS:
            {
                return _extends({}, state, {
                    showOnlySelfTasks: action.value
                });
            }

        default:
            console.log("App Reducer is missing a Case for action:  " + action.type);
            return state;
    }
}

// Helper Methods.
function isFirstTimeBoot(generalConfig) {
    if (generalConfig !== undefined && generalConfig.isFirstTimeBoot !== undefined) {
        return generalConfig.isFirstTimeBoot;
    } else {
        return false;
    }
}

function processSelectedTask(selectedTask, focusingTaskListId) {
    if (selectedTask.taskListWidgetId !== focusingTaskListId) {
        return { taskListWidgetId: -1, taskId: -1, isInputOpen: false, isMetadataOpen: false };
    } else {
        return selectedTask;
    }
}

function isProjectRemote(state, projectId) {
    var index = state.remoteProjectIds.findIndex(function (id) {
        return id === projectId;
    });
    return index !== -1;
}

var getProjectSelectorDueDateDisplaysHelper = function getProjectSelectorDueDateDisplaysHelper(tasks) {
    var returnList = {};

    tasks.forEach(function (item) {
        if (item.dueDate !== "" && item.isComplete !== true) {
            // Create an entry in returnList if not already existing.
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
                    break;

                case "DueDate Overdue":
                    returnList[item.project].reds += 1;
                    break;

                default:
                    break;
            }
        }
    });

    return returnList;
};
