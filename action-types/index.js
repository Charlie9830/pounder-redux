'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var START_PROJECT_DATABASE_CHANGE = exports.START_PROJECT_DATABASE_CHANGE = 'START_PROJECT_DATABASE_CHANGE';
var END_PROJECT_DATABASE_CHANGE = exports.END_PROJECT_DATABASE_CHANGE = 'END_PROJECT_DATABASE_CHANGE';
var CHANGE_FOCUSED_TASKLIST = exports.CHANGE_FOCUSED_TASKLIST = "CHANGE_FOCUSED_TASKLIST";
var SELECT_TASK = exports.SELECT_TASK = "SELECT_TASK";
var OPEN_TASK = exports.OPEN_TASK = "OPEN_TASK";
var CLOSE_TASK = exports.CLOSE_TASK = 'CLOSE_TASK';
var START_TASK_MOVE = exports.START_TASK_MOVE = "START_TASK_MOVE";
var START_TASK_MOVE_IN_DATABASE = exports.START_TASK_MOVE_IN_DATABASE = 'START_TASK_MOVE_IN_DATABASE';
var END_TASK_MOVE = exports.END_TASK_MOVE = "END_TASK_MOVE";
var GET_PROJECTS = exports.GET_PROJECTS = "GET_PROJECTS";
var START_PROJECTS_FETCH = exports.START_PROJECTS_FETCH = 'START_PROJECTS_FETCH';
var RECEIVE_PROJECTS = exports.RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
var START_TASKS_FETCH = exports.START_TASKS_FETCH = 'START_TASKS_FETCH';
var RECEIVE_TASKS = exports.RECEIVE_TASKS = 'RECEIVE_TASKS';
var START_TASKLISTS_FETCH = exports.START_TASKLISTS_FETCH = 'START_TASKLISTS_FETCH';
var LOCK_APP = exports.LOCK_APP = 'LOCK_APP';
var UNLOCK_APP = exports.UNLOCK_APP = 'UNLOCK_APP';
var SET_LAST_BACKUP_MESSAGE = exports.SET_LAST_BACKUP_MESSAGE = 'SET_LAST_BACKUP_MESSAGE';
var SET_OPEN_TASKLIST_SETTINGS_MENU_ID = exports.SET_OPEN_TASKLIST_SETTINGS_MENU_ID = 'SET_OPEN_TASKLIST_SETTINGS_MENU_ID';
var OPEN_CALENDAR = exports.OPEN_CALENDAR = 'OPEN_CALENDAR';
var CLOSE_CALENDAR = exports.CLOSE_CALENDAR = 'CLOSE_CALENDAR';
var START_TASKLIST_ADD = exports.START_TASKLIST_ADD = 'START_TASKLIST_ADD';
var START_TASK_ADD = exports.START_TASK_ADD = 'START_TASK_ADD';
var CHANGE_TASKLIST_WIDGET_HEADER = exports.CHANGE_TASKLIST_WIDGET_HEADER = 'CHANGE_TASKLIST_WIDGET_HEADER';
var RECEIVE_TASKLISTS = exports.RECEIVE_TASKLISTS = 'RECEIVE_TASKLISTS';
var START_PROJECTLAYOUTS_FETCH = exports.START_PROJECTLAYOUTS_FETCH = 'START_PROJECTLAYOUTS_FETCH';
var RECEIVE_PROJECTLAYOUT = exports.RECEIVE_PROJECTLAYOUT = 'RECEIVE_PROJECTLAYOUT';
var SELECT_PROJECT = exports.SELECT_PROJECT = 'SELECT_PROJECT';
var SET_PROJECTS_HAVE_PENDING_WRITES = exports.SET_PROJECTS_HAVE_PENDING_WRITES = 'SET_PROJECTS_HAVE_PENDING_WRITES';
var SET_PROJECTLAYOUTS_HAVE_PENDING_WRITES = exports.SET_PROJECTLAYOUTS_HAVE_PENDING_WRITES = 'SET_PROJECTLAYOUTS_HAVE_PENDING_WRITES';
var SET_TASKLISTS_HAVE_PENDING_WRITES = exports.SET_TASKLISTS_HAVE_PENDING_WRITES = 'SET_TASKLISTS_HAVE_PENDING_WRITES';
var SET_TASKS_HAVE_PENDING_WRITES = exports.SET_TASKS_HAVE_PENDING_WRITES = 'SET_TASKS_HAVE_PENDING_WRITES';
var SET_TASK_PRIORITY = exports.SET_TASK_PRIORITY = 'SET_TASK_PRIORITY';
var OPEN_TASK_LIST_JUMP_MENU = exports.OPEN_TASK_LIST_JUMP_MENU = 'OPEN_TASK_LIST_JUMP_MENU';
var CLOSE_TASK_LIST_JUMP_MENU = exports.CLOSE_TASK_LIST_JUMP_MENU = 'CLOSE_TASK_LIST_JUMP_MENU';
var SET_IS_SHUTTING_DOWN_FLAG = exports.SET_IS_SHUTTING_DOWN_FLAG = 'SET_IS_SHUTTING_DOWN_FLAG';
var SET_APP_SETTINGS_MENU_PAGE = exports.SET_APP_SETTINGS_MENU_PAGE = 'SET_APP_SETTINGS_MENU_PAGE';
var GET_DATABASE_INFO = exports.GET_DATABASE_INFO = 'GET_DATABASE_INFO';
var SET_DATABASE_INFO = exports.SET_DATABASE_INFO = 'SET_DATABASE_INFO';
var SET_DATABASE_PURGING_FLAG = exports.SET_DATABASE_PURGING_FLAG = 'SET_DATABASE_PURGING_FLAG';
var PURGE_COMPLETE_TASKS = exports.PURGE_COMPLETE_TASKS = 'PURGE_COMPLETE_TASKS';
var SET_IS_DATABASE_RESTORING_FLAG = exports.SET_IS_DATABASE_RESTORING_FLAG = 'SET_IS_DATABASE_RESTORING_FLAG';
var GET_GENERAL_CONFIG = exports.GET_GENERAL_CONFIG = 'GET_GENERAL_CONFIG';
var RECEIVE_GENERAL_CONFIG = exports.RECEIVE_GENERAL_CONFIG = 'RECEIVE_GENERAL_CONFIG';
var SET_GENERAL_CONFIG = exports.SET_GENERAL_CONFIG = 'SET_GENERAL_CONFIG';
var SET_IS_STARTING_UP_FLAG = exports.SET_IS_STARTING_UP_FLAG = 'SET_IS_STARTING_UP_FLAG';
var SET_IS_DEXIE_CONFIG_LOAD_COMPLETE_FLAG = exports.SET_IS_DEXIE_CONFIG_LOAD_COMPLETE_FLAG = 'SET_IS_DEXIE_CONFIG_LOAD_COMPLETE_FLAG';
var SET_IS_APP_SETTINGS_OPEN = exports.SET_IS_APP_SETTINGS_OPEN = 'SET_IS_APP_SETTINGS_OPEN';
var SET_FAVOURITE_PROJECT_ID = exports.SET_FAVOURITE_PROJECT_ID = 'SET_FAVOURITE_PROJECT_ID';
var RECEIVE_ACCOUNT_CONFIG = exports.RECEIVE_ACCOUNT_CONFIG = 'RECEIVE_ACCOUNT_CONFIG';
var SET_IGNORE_FULLSCREEN_TRIGGER_FLAG = exports.SET_IGNORE_FULLSCREEN_TRIGGER_FLAG = 'SET_IGNORE_FULLSCREEN_TRIGGER_FLAG';
var GET_CSS_CONFIG = exports.GET_CSS_CONFIG = 'GET_CSS_CONFIG';
var RECEIVE_CSS_CONFIG = exports.RECEIVE_CSS_CONFIG = 'RECEIVE_CSS_CONFIG';
var SET_CSS_CONFIG = exports.SET_CSS_CONFIG = 'SET_CSS_CONFIG';
var SET_MESSAGE_BOX = exports.SET_MESSAGE_BOX = 'SET_MESSAGE_BOX';
var SET_AUTH_STATUS_MESSAGE = exports.SET_AUTH_STATUS_MESSAGE = 'SET_AUTH_STATUS_MESSAGE';
var SET_IS_LOGGING_IN_FLAG = exports.SET_IS_LOGGING_IN_FLAG = 'SET_IS_LOGGING_IN_FLAG';
var SET_IS_LOGGED_IN_FLAG = exports.SET_IS_LOGGED_IN_FLAG = 'SET_IS_LOGGED_IN_FLAG';
var SET_USER_EMAIL = exports.SET_USER_EMAIL = 'SET_USER_EMAIL';
var SET_SNACKBAR_MESSAGE = exports.SET_SNACKBAR_MESSAGE = 'SET_SNACKBAR_MESSAGE';
var SET_IS_SNACKBAR_OPEN = exports.SET_IS_SNACKBAR_OPEN = 'SET_IS_SNACKBAR_OPEN';
var CLEAR_DATA = exports.CLEAR_DATA = 'CLEAR_DATA';
