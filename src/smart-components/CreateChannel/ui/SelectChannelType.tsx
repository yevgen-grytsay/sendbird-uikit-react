import React, { ReactElement } from 'react'

interface Props {
}

export default function SelectChannelType({}: Props): ReactElement {
  return (
    <div className="sendbird-add-channel__rectangle-wrap">
      <div
        className="sendbird-add-channel__rectangle"
        onClick={() => {
          setType('group');
          setStep(1);
        }}
        role="button"
        tabIndex={0}
        onKeyDown={() => {
          setType('group');
          setStep(1);
        }}
      >
        <Icon
          className="sendbird-add-channel__rectangle__chat-icon"
          type={IconTypes.CHAT}
          fillColor={IconColors.PRIMARY}
          width="28px"
          height="28px"
        />
        <Label type={LabelTypography.SUBTITLE_1} color={LabelColors.ONBACKGROUND_1}>
          Group
        </Label>
      </div>
      {
        isSupergroupAvailable && (
          <div
            className="sendbird-add-channel__rectangle"
            onClick={() => {
              setType('supergroup');
              setStep(1);
            }}
            role="button"
            tabIndex={0}
            onKeyDown={() => {
              setType('supergroup');
              setStep(1);
            }}
          >
            <Icon
              className="sendbird-add-channel__rectangle__supergroup-icon"
              type={IconTypes.SUPERGROUP}
              fillColor={IconColors.PRIMARY}
              width="28px"
              height="28px"
            />
            <Label type={LabelTypography.SUBTITLE_1} color={LabelColors.ONBACKGROUND_1}>
              Super group
            </Label>
          </div>
        )
      }
      {
        isBroadcastAvailable && (
          <div
            className="sendbird-add-channel__rectangle"
            onClick={() => {
              setType('broadcast');
              setStep(1);
            }}
            role="button"
            tabIndex={0}
            onKeyDown={() => {
              setType('broadcast');
              setStep(1);
            }}
          >
            <Icon
              className="sendbird-add-channel__rectangle__broadcast-icon"
              type={IconTypes.BROADCAST}
              fillColor={IconColors.PRIMARY}
              width="28px"
              height="28px"
            />
            <Label type={LabelTypography.SUBTITLE_1} color={LabelColors.ONBACKGROUND_1}>
              Broadcast
            </Label>
          </div>
        )
      }
    </div>
  )
}
