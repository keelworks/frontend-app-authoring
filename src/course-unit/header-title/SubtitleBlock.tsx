import { useEffect, useState } from 'react';
import { Form, IconButton } from '@openedx/paragon';
import { EditOutline as EditIcon } from '@openedx/paragon/icons';
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from './messages';

type SubtitleBlockProps = {
  subtitle: string;
  onSubtitleChange: (subtitle: string) => void;
  readOnly?: boolean;
};

const SubtitleBlock = ({ subtitle, onSubtitleChange, readOnly = false }: SubtitleBlockProps) => {
  const intl = useIntl();
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(subtitle || '');

  useEffect(() => {
    setValue(subtitle || '');
  }, [subtitle]);

  const handleSave = () => {
    setIsEditing(false);
    if (value !== subtitle) {
      onSubtitleChange(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave();
    }
    if (e.key === 'Escape') {
      setValue(subtitle || '');
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <Form.Group className="unit-subtitle-form m-0 mt-1">
        <Form.Control
          ref={(e) => e && e.focus()}
          className="unit-subtitle-input"
          value={value}
          placeholder={intl.formatMessage(messages.subtitlePlaceholder)}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          aria-label={intl.formatMessage(messages.subtitleAriaLabel)}
        />
      </Form.Group>
    );
  }

  if (!subtitle && !readOnly) {
    return (
      <button
        type="button"
        data-testid="unit-subtitle-add-btn"
        className="unit-subtitle-add-btn btn btn-link text-muted small p-0 mt-1"
        onClick={() => setIsEditing(true)}
      >
        {intl.formatMessage(messages.addSubtitleButton)}
      </button>
    );
  }

  if (!subtitle) {
    return null;
  }

  return (
    <div className="unit-subtitle d-flex align-items-center mt-1" data-testid="unit-subtitle">
      <p className="unit-subtitle-text h5 font-weight-normal m-0">{subtitle}</p>
      {!readOnly && (
        <IconButton
          alt={intl.formatMessage(messages.altButtonEditSubtitle)}
          className="ml-1 flex-shrink-0 unit-subtitle-edit-button"
          iconAs={EditIcon}
          onClick={() => setIsEditing(true)}
        />
      )}
    </div>
  );
};

export default SubtitleBlock;
