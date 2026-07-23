import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  altButtonEdit: {
    id: 'course-authoring.course-unit.heading.button.edit.alt',
    defaultMessage: 'Edit',
    description: 'The unit edit button text',
  },
  ariaLabelButtonEdit: {
    id: 'course-authoring.course-unit.heading.button.edit.aria-label',
    defaultMessage: 'Edit field',
    description: 'The unit edit button aria label',
  },
  altButtonSettings: {
    id: 'course-authoring.course-unit.heading.button.settings.alt',
    defaultMessage: 'Settings',
    description: 'The unit settings button text',
  },
  definedVisibilityMessage: {
    id: 'course-authoring.course-unit.heading.visibility.defined.message',
    defaultMessage: 'Access to this unit is restricted to: {selectedGroupsLabel}',
    description: 'Group visibility accessibility text for Unit',
  },
  addSubtitleButton: {
    id: 'course-authoring.course-unit.heading.subtitle.add.button',
    defaultMessage: '+ Add Subtitle',
    description: 'Button text for adding a subtitle below the unit title',
  },
  subtitlePlaceholder: {
    id: 'course-authoring.course-unit.heading.subtitle.placeholder',
    defaultMessage: 'Enter subtitle...',
    description: 'Placeholder text for the subtitle input field',
  },
  subtitleAriaLabel: {
    id: 'course-authoring.course-unit.heading.subtitle.aria-label',
    defaultMessage: 'Edit subtitle',
    description: 'Aria label for the subtitle input field',
  },
  altButtonEditSubtitle: {
    id: 'course-authoring.course-unit.heading.subtitle.button.edit.alt',
    defaultMessage: 'Edit subtitle',
    description: 'Alt text for the subtitle edit icon button',
  },
});

export default messages;
