/* @flow */

import type { Action } from '../../../actions'
import type { Activity, ActivityKind } from 'core/types'

export function add (activity: Activity): Action {
  return {
    type: 'teacher-composer-activity-add',
    activity: activity
  }
}

export function remove (idx: number): Action {
  return {
    type: 'teacher-composer-activity-remove',
    idx: idx
  }
}

export function select (activityKind: ActivityKind) {
  return {
    type: 'teacher-composer-activity-select',
    activityKind: activityKind
  }
}

export function edit (idx: number, activity: Activity): Action {
  return {
    type: 'teacher-composer-activity-edit',
    idx: idx,
    activity: activity
  }
}

export function setEdited (idx: number): Action {
  return {
    type: 'teacher-composer-activity-edited-idx-set',
    idx: idx
  }
}