import * as ActionTypes from '../action-types/index'
import { ParseDueDate } from 'pounder-utilities';
import { ProjectLayoutStore } from 'pounder-stores';


export function appReducer(state, action) {
    switch (action.type) {
        case ActionTypes.CHANGE_FOCUSED_TASKLIST:
            return { 
                ...state,
                focusedTaskListId: action.id,
                openCalendarId: -1,
                openTaskListSettingsMenuId: -1,
                isTaskListJumpMenuOpen: false,
            };
        
        case ActionTypes.SELECT_TASK:
            const openCalendarId = state.openCalendarId === action.taskId ? action.taskId : -1; // Keep calender open if Open already.

            return {
                ...state,
                selectedTask: { taskListWidgetId: action.taskListWidgetId, taskId: action.taskId, isInputOpen: false },
                focusedTaskListId: action.taskListWidgetId,
                isATaskMoving: false,
                movingTaskId: -1,
                sourceTaskListId: -1,
                openCalendarId: openCalendarId,
                openTaskListSettingsMenuId: -1,
                isTaskListJumpMenuOpen: false,
            };
        
        case ActionTypes.OPEN_TASK:
            return {
                ...state,
                selectedTask: { taskListWidgetId: action.taskListWidgetId, taskId: action.taskId, isInputOpen: true },
                isATaskMoving: false,
                movingTaskId: -1,
                sourceTaskListId: -1,
                openCalendarId: -1,
                openTaskListSettingsMenuId: -1
            }

        case ActionTypes.CLOSE_TASK:
            return {
                ...state,
                selectedTask: { taskListWidgetId: action.taskListWidgetId, taskId: action.taskId, isInputOpen: false }
            }

        case ActionTypes.START_TASK_MOVE:
            return {
                ...state,
                isATaskMoving: true,
                selectedTask: { taskListWidgetId: action.sourceTaskListWidgetId, taskId: action.taskId, isInputOpen: false },
                focusedTaskListId: action.sourceTaskListWidgetId,
                movingTaskId: action.movingTaskId,
                sourceTaskListId: action.sourceTaskListWidgetId,
                openCalendarId: -1,
                openTaskListSettingsMenuId: -1,
            }

        case ActionTypes.START_TASK_MOVE_IN_DATABASE:
            return {
                ...state,
                isAwaitingFirebase: true
            }
        
        case ActionTypes.END_TASK_MOVE:
            return {
                ...state,
                isAwaitingFirebase: false,
                isATaskMoving: false,
                sourceTaskListId: -1,
                movingTaskId: -1,
                selectedTask: { taskListWidgetId: action.destinationTaskListWidgetId, taskId: action.movedTaskId, isInputOpen: false }
            }
        case ActionTypes.START_PROJECTS_FETCH:
            return {
                ...state,
                isAwaitingFirebase: true
            }
        
        case ActionTypes.RECEIVE_PROJECTS:
            return {
                ...state,
                projects: action.projects,
                isAwaitingFirebase: false,
            }

        case ActionTypes.START_TASKS_FETCH:
            return {
                ...state,
                isAwaitingFirebase: true
            }

        case ActionTypes.RECEIVE_TASKS:
            return {
                ...state,
                isAwaitingFirebase: false,
                tasks: action.tasks,
                projectSelectorDueDateDisplays: getProjectSelectorDueDateDisplaysHelper(action.tasks)
            }
        
        case ActionTypes.LOCK_APP:
            return {
                ...state,
                isLockScreenDisplayed: true,
            }
        
        case ActionTypes.SET_LAST_BACKUP_MESSAGE:
            return {
                ...state,
                lastBackupMessage: action.message
            }

        case ActionTypes.SET_OPEN_TASKLIST_SETTINGS_MENU_ID: 
            return {
                ...state,
                openTaskListSettingsMenuId: action.id,
                isTaskListJumpMenuOpen: false,
            }
        
        case ActionTypes.OPEN_CALENDAR: 
            return {
                ...state,
                selectedTask: { taskListWidgetId: action.taskListWidgetId, taskId: action.taskId, isInputOpen: false },
                openCalendarId: action.taskId
            }

        case ActionTypes.UNLOCK_APP: 
            return {
                ...state,
                isLockScreenDisplayed: false,
            }

        case ActionTypes.START_TASKLIST_ADD: 
            return {
                ...state,
                isAwaitingFirebase: true
            }
        

        case ActionTypes.START_TASK_ADD:
            return {
                ...state,
                isAwaitingFirebase: true
            }
        
        case ActionTypes.START_TASKLISTS_FETCH:
            return {
                ...state,
                isAwaitingFirebase: true
            }

        case ActionTypes.RECEIVE_TASKLISTS:
            return {
                ...state,
                isAwaitingFirebase: false,
                taskLists: action.taskLists
            }
        
        case ActionTypes.START_PROJECTLAYOUTS_FETCH:
            return {
                ...state,
                isAwaitingFirebase: true,
            }

        case ActionTypes.RECEIVE_PROJECTLAYOUT:
            return {
                ...state,
                isAwaitingFirebase: false,
                projectLayout: action.projectLayout
            }
        
        case ActionTypes.SELECT_PROJECT:
            return {
                ...state,
                selectedProjectId: action.projectId,
                openCalendarId: -1,
                selectedTask: { taskListWidgetId: -1, taskId: -1, isInputOpen: false },
                isATaskMoving: false,
                movingTaskId: -1,
                sourceTaskListId: -1,
                focusedTaskListId: -1,
                openTaskListSettingsMenuId: -1,
                isTaskListJumpMenuOpen: false,
            }
        
        case ActionTypes.CLOSE_CALENDAR:
            return {
                ...state,
                openCalendarId: -1
            }
        
        case ActionTypes.SET_PROJECTS_HAVE_PENDING_WRITES: 
            return {
                ...state,
                projectsHavePendingWrites: action.value
            }
        
        case ActionTypes.SET_PROJECTLAYOUTS_HAVE_PENDING_WRITES:
            return {
                ...state,
                projectLayoutsHavePendingWrites: action.value
            }
        
        case ActionTypes.SET_TASKLISTS_HAVE_PENDING_WRITES:
            return {
                ...state,
                taskListsHavePendingWrites: action.value
            }

        case ActionTypes.SET_TASKS_HAVE_PENDING_WRITES:
            return {
                ...state,
                tasksHavePendingWrites: action.value,
            }
        
        case ActionTypes.OPEN_TASK_LIST_JUMP_MENU:
            return {
                ...state,
                isTaskListJumpMenuOpen: true,
            }
        
        case ActionTypes.CLOSE_TASK_LIST_JUMP_MENU:
            return {
                ...state,
                isTaskListJumpMenuOpen: false,
            }
        
        case ActionTypes.SET_IS_SHUTTING_DOWN_FLAG:
            return {
                ...state,
                isShuttingDown: action.value,
            }
        
        case ActionTypes.SET_APP_SETTINGS_MENU_PAGE:
            return {
                ...state,
                appSettingsMenuPage: action.value,
            }

        case ActionTypes.SET_DATABASE_INFO:
            return {
                ...state,
                databaseInfo: action.value
            }

        case ActionTypes.SET_DATABASE_PURGING_FLAG:
            return {
                ...state,
                isDatabasePurging: action.value
            }

        case ActionTypes.SET_RESTORE_DATABASE_STATUS_MESSAGE:
            return {
                ...state,
                restoreDatabaseStatusMessage: action.value,
            }

        case ActionTypes.SET_IS_DATABASE_RESTORING_FLAG:
            return {
                ...state,
                isDatabaseRestoring: action.value
            }
        
        case ActionTypes.SET_IS_RESTORE_DATBASE_COMPLETE_DIALOG_OPEN:
            return {
                ...state,
                isRestoreDatabaseCompleteDialogOpen: action.value,
            }
        
        case ActionTypes.RECEIVE_GENERAL_CONFIG: {
            return {
                ...state,
                generalConfig: action.value,
                isDexieConfigLoadComplete: true,
            }
        }

        case ActionTypes.SET_IS_STARTING_UP_FLAG: {
            return {
                ...state,
                isStartingUp: action.value
            }
        }

        case ActionTypes.SET_IS_DEXIE_CONFIG_LOAD_COMPLETE_FLAG: {
            return {
                ...state,
                isDexieConfigLoadComplete: action.value
            }
        }

        case ActionTypes.SET_IS_APP_SETTINGS_OPEN: {
            return {
                ...state,
                isAppSettingsOpen: action.value,
            }
        }

        default:
            console.log("App Reducer is missing a Case for action:  " + action.type);
            return state;
    }
}

// Helper Methods.
var getProjectSelectorDueDateDisplaysHelper = function(tasks) {
    var returnList = {};

    tasks.forEach(item => {
        if (item.dueDate !== "" && item.isComplete !== true) {
            // Create an entry in returnList if not already existing.
            if (returnList[item.project] == undefined) {
                returnList[item.project] = { greens: 0, yellows: 0, yellowReds: 0, reds: 0 };
            }

            var { className } = ParseDueDate(item.isComplete, item.dueDate);
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
    })

    return returnList;
  }