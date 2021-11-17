import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';
import Type from './type';

import { ReactComponent as IconAdd } from '../../svgs/icon-add.svg';
import { ReactComponent as IconArrowLeft } from '../../svgs/icon-arrow-left.svg';
import { ReactComponent as IconAttach } from '../../svgs/icon-attach.svg';
import { ReactComponent as IconBan } from '../../svgs/icon-ban.svg';
import { ReactComponent as IconBroadcast } from '../../svgs/icon-broadcast.svg';
import { ReactComponent as IconCamera } from '../../svgs/icon-camera.svg';
import { ReactComponent as IconChannels } from '../../svgs/icon-channels.svg';
import { ReactComponent as IconChat } from '../../svgs/icon-chat.svg';
import { ReactComponent as IconChatFilled } from '../../svgs/icon-chat-filled.svg';
import { ReactComponent as IconChevronDown } from '../../svgs/icon-chevron-down.svg';
import { ReactComponent as IconChevronRight } from '../../svgs/icon-chevron-right.svg';
import { ReactComponent as IconClose } from '../../svgs/icon-close.svg';
import { ReactComponent as IconCollapse } from '../../svgs/icon-collapse.svg';
import { ReactComponent as IconCopy } from '../../svgs/icon-copy.svg';
import { ReactComponent as IconCreate } from '../../svgs/icon-create.svg';
import { ReactComponent as IconDelete } from '../../svgs/icon-delete.svg';
import { ReactComponent as IconDisconnected } from '../../svgs/icon-disconnected.svg';
import { ReactComponent as IconDocument } from '../../svgs/icon-document.svg';
import { ReactComponent as IconDone } from '../../svgs/icon-done.svg';
import { ReactComponent as IconDoneAll } from '../../svgs/icon-done-all.svg';
import { ReactComponent as IconDownload } from '../../svgs/icon-download.svg';
import { ReactComponent as IconEdit } from '../../svgs/icon-edit.svg';
import { ReactComponent as IconEmojiMore } from '../../svgs/icon-emoji-more.svg';
import { ReactComponent as IconError } from '../../svgs/icon-error.svg';
import { ReactComponent as IconExpand } from '../../svgs/icon-expand.svg';
import { ReactComponent as IconFileAudio } from '../../svgs/icon-file-audio.svg';
import { ReactComponent as IconFileDocument } from '../../svgs/icon-file-document.svg';
import { ReactComponent as IconFreeze } from '../../svgs/icon-freeze.svg';
import { ReactComponent as IconGif } from '../../svgs/icon-gif.svg';
import { ReactComponent as IconInfo } from '../../svgs/icon-info.svg';
import { ReactComponent as IconLeave } from '../../svgs/icon-leave.svg';
import { ReactComponent as IconMembers } from '../../svgs/icon-members.svg';
import { ReactComponent as IconMessage } from '../../svgs/icon-message.svg';
import { ReactComponent as IconModerations } from '../../svgs/icon-moderations.svg';
import { ReactComponent as IconMore } from '../../svgs/icon-more.svg';
import { ReactComponent as IconMute } from '../../svgs/icon-mute.svg';
import { ReactComponent as IconNotifications } from '../../svgs/icon-notifications.svg';
import { ReactComponent as IconNotificationsOffFilled } from '../../svgs/icon-notifications-off-filled.svg';
import { ReactComponent as IconOperator } from '../../svgs/icon-operator.svg';
import { ReactComponent as IconPhoto } from '../../svgs/icon-photo.svg';
import { ReactComponent as IconPlay } from '../../svgs/icon-play.svg';
import { ReactComponent as IconPlus } from '../../svgs/icon-plus.svg';
import { ReactComponent as IconQuestion } from '../../svgs/icon-question.svg';
import { ReactComponent as IconRefresh } from '../../svgs/icon-refresh.svg';
import { ReactComponent as IconRemove } from '../../svgs/icon-remove.svg';
import { ReactComponent as IconReply } from '../../svgs/icon-reply-filled.svg';
import { ReactComponent as IconSearch } from '../../svgs/icon-search.svg';
import { ReactComponent as IconSend } from '../../svgs/icon-send.svg';
import { ReactComponent as IconSettingsFilled } from '../../svgs/icon-settings-filled.svg';
import { ReactComponent as IconSpinner } from '../../svgs/icon-spinner.svg';
import { ReactComponent as IconSupergroup } from '../../svgs/icon-supergroup.svg';
import { ReactComponent as IconThumbnailNone } from '../../svgs/icon-thumbnail-none.svg';
import { ReactComponent as IconToggleOff } from '../../svgs/icon-toggleoff.svg';
import { ReactComponent as IconToggleOn } from '../../svgs/icon-toggleon.svg';
import { ReactComponent as IconUser } from '../../svgs/icon-user.svg';

const Colors = {
  DEFAULT: 'DEFAULT',
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  CONTENT: 'CONTENT',
  CONTENT_INVERSE: 'CONTENT_INVERSE',
  WHITE: 'WHITE',
  SENT: 'SENT',
  READ: 'READ',
  ON_BACKGROUND_1: 'ON_BACKGROUND_1',
  ON_BACKGROUND_2: 'ON_BACKGROUND_2',
  ON_BACKGROUND_3: 'ON_BACKGROUND_3',
  BACKGROUND_3: 'BACKGROUND_3',
  ERROR: 'ERROR',
};

function changeColorToClassName(color) {
  switch (color) {
    case Colors.PRIMARY: return 'sendbird-icon-color--primary';
    case Colors.SECONDARY: return 'sendbird-icon-color--secondary';
    case Colors.CONTENT: return 'sendbird-icon-color--content';
    case Colors.CONTENT_INVERSE: return 'sendbird-icon-color--content-inverse';
    case Colors.WHITE: return 'sendbird-icon-color--white';
    case Colors.SENT: return 'sendbird-icon-color--sent';
    case Colors.READ: return 'sendbird-icon-color--read';
    case Colors.ON_BACKGROUND_1: return 'sendbird-icon-color--on-background-1';
    case Colors.ON_BACKGROUND_2: return 'sendbird-icon-color--on-background-2';
    case Colors.ON_BACKGROUND_3: return 'sendbird-icon-color--on-background-3';
    case Colors.BACKGROUND_3: return 'sendbird-icon-color--background-3';
    case Colors.ERROR: return 'sendbird-icon-color--error';
    default: return '';
  }
}

function changeTypeToIconComponent(type) {
  switch (type) {
    case Type.ADD: return <IconAdd />;
    case Type.ARROW_LEFT: return <IconArrowLeft />;
    case Type.ATTACH: return <IconAttach />;
    case Type.BAN: return <IconBan />;
    case Type.BROADCAST: return <IconBroadcast />;
    case Type.CAMERA: return <IconCamera />;
    case Type.CHANNELS: return <IconChannels />;
    case Type.CHAT: return <IconChat />;
    case Type.CHAT_FILLED: return <IconChatFilled />;
    case Type.CHEVRON_DOWN: return <IconChevronDown />;
    case Type.CHEVRON_RIGHT: return <IconChevronRight />;
    case Type.CLOSE: return <IconClose />;
    case Type.COLLAPSE: return <IconCollapse />;
    case Type.COPY: return <IconCopy />;
    case Type.CREATE: return <IconCreate />;
    case Type.DELETE: return <IconDelete />;
    case Type.DISCONNECTED: return <IconDisconnected />;
    case Type.DOCUMENT: return <IconDocument />;
    case Type.DONE: return <IconDone />;
    case Type.DONE_ALL: return <IconDoneAll />;
    case Type.DOWNLOAD: return <IconDownload />;
    case Type.EDIT: return <IconEdit />;
    case Type.EMOJI_MORE: return <IconEmojiMore />;
    case Type.ERROR: return <IconError />;
    case Type.EXPAND: return <IconExpand />;
    case Type.FILE_AUDIO: return <IconFileAudio />;
    case Type.FILE_DOCUMENT: return <IconFileDocument />;
    case Type.FREEZE: return <IconFreeze />;
    case Type.GIF: return <IconGif />;
    case Type.INFO: return <IconInfo />;
    case Type.LEAVE: return <IconLeave />;
    case Type.MEMBERS: return <IconMembers />;
    case Type.MESSAGE: return <IconMessage />;
    case Type.MODERATIONS: return <IconModerations />;
    case Type.MORE: return <IconMore />;
    case Type.MUTE: return <IconMute />;
    case Type.NOTIFICATIONS: return <IconNotifications />;
    case Type.NOTIFICATIONS_OFF_FILLED: return <IconNotificationsOffFilled />;
    case Type.OPERATOR: return <IconOperator />;
    case Type.PHOTO: return <IconPhoto />;
    case Type.PLAY: return <IconPlay />;
    case Type.PLUS: return <IconPlus />;
    case Type.QUESTION: return <IconQuestion />;
    case Type.REFRESH: return <IconRefresh />;
    case Type.REMOVE: return <IconRemove />;
    case Type.REPLY: return <IconReply />;
    case Type.SEARCH: return <IconSearch />;
    case Type.SEND: return <IconSend />;
    case Type.SETTINGS_FILLED: return <IconSettingsFilled />;
    case Type.SPINNER: return <IconSpinner />;
    case Type.SUPERGROUP: return <IconSupergroup />;
    case Type.THUMBNAIL_NONE: return <IconThumbnailNone />;
    case Type.TOGGLE_OFF: return <IconToggleOff />;
    case Type.TOGGLE_ON: return <IconToggleOn />;
    case Type.USER: return <IconUser />;
    default: return 'icon'; // If you see this text 'icon' replace icon for it
  }
}

export function changeTypeToIconClassName(type) {
  switch (type) {
    case Type.ADD: return 'sendbird-icon-add';
    case Type.ARROW_LEFT: return 'sendbird-icon-arrow-left';
    case Type.ATTACH: return 'sendbird-icon-attach';
    case Type.BAN: return 'sendbird-icon-ban';
    case Type.BROADCAST: return 'sendbird-icon-broadcast';
    case Type.CAMERA: return 'sendbird-icon-camera';
    case Type.CHANNELS: return 'sendbird-icon-channels';
    case Type.CHAT: return 'sendbird-icon-chat';
    case Type.CHAT_FILLED: return 'sendbird-icon-chat-filled';
    case Type.CHEVRON_DOWN: return 'sendbird-icon-chevron-down';
    case Type.CHEVRON_RIGHT: return 'sendbird-icon-chevron-right';
    case Type.CLOSE: return 'sendbird-icon-close';
    case Type.COLLAPSE: return 'sendbird-icon-collapse';
    case Type.COPY: return 'sendbird-icon-copy';
    case Type.CREATE: return 'sendbird-icon-create';
    case Type.DELETE: return 'sendbird-icon-delete';
    case Type.DISCONNECTED: return 'sendbird-icon-disconnected';
    case Type.DOCUMENT: return 'sendbird-icon-document';
    case Type.DONE: return 'sendbird-icon-done';
    case Type.DONE_ALL: return 'sendbird-icon-done-all';
    case Type.DOWNLOAD: return 'sendbird-icon-down-load';
    case Type.EDIT: return 'sendbird-icon-edit';
    case Type.EMOJI_MORE: return 'sendbird-icon-emoji-more';
    case Type.ERROR: return 'sendbird-icon-error';
    case Type.EXPAND: return 'sendbird-icon-expand';
    case Type.FILE_AUDIO: return 'sendbird-icon-file-audio';
    case Type.FILE_DOCUMENT: return 'sendbird-icon-file-document';
    case Type.FREEZE: return 'sendbird-icon-freeze';
    case Type.GIF: return 'sendbird-icon-gif';
    case Type.INFO: return 'sendbird-icon-info';
    case Type.LEAVE: return 'sendbird-icon-leave';
    case Type.MEMBERS: return 'sendbird-icon-members';
    case Type.MESSAGE: return 'sendbird-icon-message';
    case Type.MODERATIONS: return 'sendbird-icon-moderations';
    case Type.MORE: return 'sendbird-icon-more';
    case Type.MUTE: return 'sendbird-icon-mute';
    case Type.NOTIFICATIONS: return 'sendbird-icon-notifications';
    case Type.NOTIFICATIONS_OFF_FILLED: return 'sendbird-icon-notifications-off-filled';
    case Type.OPERATOR: return 'sendbird-icon-operator';
    case Type.PHOTO: return 'sendbird-icon-photo';
    case Type.PLAY: return 'sendbird-icon-play';
    case Type.PLUS: return 'sendbird-iconn-plus';
    case Type.QUESTION: return 'sendbird-icon-question';
    case Type.REFRESH: return 'sendbird-icon-refresh';
    case Type.REMOVE: return 'sendbird-icon-remove';
    case Type.REPLY: return 'sendbird-icon-reply';
    case Type.SEARCH: return 'sendbird-icon-search';
    case Type.SEND: return 'sendbird-icon-send';
    case Type.SETTINGS_FILLED: return 'sendbird-icon-settings-filled';
    case Type.SPINNER: return 'sendbird-icon-spinner';
    case Type.SUPERGROUP: return 'sendbird-icon-supergroup';
    case Type.THUMBNAIL_NONE: return 'sendbird-icon-thumbnail-none';
    case Type.TOGGLE_OFF: return 'sendbird-icon-toggle-off';
    case Type.TOGGLE_ON: return 'sendbird-icon-toggle-on';
    case Type.USER: return 'sendbird-icon-user';
    default: return 'sendbird-icon-unknown'; // If you see this text 'icon' replace icon for it
  }
}

export default function Icon({
  className,
  type,
  fillColor,
  width,
  height,
  onClick,
  children,
}) {
  const iconStyle = {
    width: typeof width === 'string' ? width : `${width}px`,
    minWidth: typeof width === 'string' ? width : `${width}px`,
    height: typeof height === 'string' ? height : `${height}px`,
    minHeight: typeof height === 'string' ? height : `${height}px`,
  };
  return (
    <div
      className={[
        ...Array.isArray(className) ? className : [className],
        'sendbird-icon',
        changeTypeToIconClassName(type),
        changeColorToClassName(fillColor),
      ].join(' ')}
      role="button"
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex="0"
      style={iconStyle}
    >
      {children || changeTypeToIconComponent(type)}
    </div>
  );
}

Icon.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  type: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(Type)),
    PropTypes.string,
  ]).isRequired,
  fillColor: PropTypes.oneOf(Object.keys(Colors)),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onClick: PropTypes.func,
  children: PropTypes.element,
};

Icon.defaultProps = {
  className: '',
  fillColor: Colors.DEFAULT,
  width: 26,
  height: 26,
  onClick: () => { },
  children: null,
};

export const IconTypes = Type;
export const IconColors = Colors;
