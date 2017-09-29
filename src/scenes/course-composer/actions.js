/* @flow */

import type {
  CourseDifficulty,
  Level,
  Lesson,
  Activity,
  ActivityKind
} from 'core/types'

import type { ActivityAreaSelect } from './types'

export type CourseComposerAction =
  // Level actions
  | { type: 'teacher-composer-level-add' }
  | { type: 'teacher-composer-level-remove', idx: number }
  | { type: 'teacher-composer-level-name-edit', name: string, idx: number }
  | {
    type: 'teacher-composer-level-description-edit',
    description: string,
    idx: number
  }
  | { type: 'teacher-composer-level-edit-start', level: Level }
  | { type: 'teacher-composer-level-edit', idx: number, level: Level }

  // Course actions
  | { type: 'teacher-composer-start' }
  | { type: 'teacher-composer-course-name-edit', name: string }
  | { type: 'teacher-composer-course-description-edit', description: string }
  | {
    type: 'teacher-composer-course-difficulty-edit',
    difficulty: CourseDifficulty
  }

  // Activity picker
  | { type: 'teacher-composer-activity-picker-open' }
  | { type: 'teacher-composer-activity-picker-close' }
  | { type: 'teacher-composer-activity-select', activityKind: ActivityKind }
  | { type: 'teacher-composer-activity-edited-idx-set', idx: number }

  // Lesson actions
  | { type: 'teacher-composer-lesson-add' }
  | { type: 'teacher-composer-lesson-remove', idx: number }
  | { type: 'teacher-composer-lesson-edit', idx: number, lesson: Lesson }
  | { type: 'teacher-composer-lesson-edit-start', lesson: Lesson }
  | { type: 'teacher-composer-lesson-name-edit', name: string, idx: number }

  // Activity actions
  | { type: 'teacher-composer-activity-edit', idx: number, activity: Activity }
  | { type: 'teacher-composer-activity-add', activity: Activity }
  | { type: 'teacher-composer-activity-remove', idx: number }

  // Video actions
  | { type: 'teacher-composer-video-modal-open' }
  | { type: 'teacher-composer-video-modal-close' }
  | { type: 'teacher-composer-video-url-edit', url: string }

  // Audio actions
  | { type: 'teacher-composer-audio-modal-open' }
  | { type: 'teacher-composer-audio-modal-close' }
  | { type: 'teacher-composer-audio-url-edit', url: string }

  // Text actions
  | { type: 'teacher-composer-text-modal-open' }
  | { type: 'teacher-composer-text-modal-close' }
  | { type: 'teacher-composer-text-content-edit', text: string }
  | {
    type: 'teacher-composer-text-highlight-add',
    length: number,
    offset: number
  }
  | { type: 'teacher-composer-text-highlight-remove', idx: number }

  // Skype actions
  | { type: 'teacher-composer-skype-modal-open' }
  | { type: 'teacher-composer-skype-modal-close' }
  | { type: 'teacher-composer-skype-start-time-edit', startTime: number }
  | { type: 'teacher-composer-skype-duration-edit', duration: number }
  | { type: 'teacher-composer-skype-topic-edit', topic: string }
  | { type: 'teacher-composer-skype-group-toggle' }
