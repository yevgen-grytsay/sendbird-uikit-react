import './index.scss';

import React, { ReactElement, useState, useContext } from 'react';
import { LocalizationContext } from '../../lib/LocalizationContext';
import Label, { LabelColors, LabelTypography } from '../../ui/Label';
import Icon, { IconTypes, IconColors } from '../../ui/Icon';
import Modal from '../../ui/Modal';
import SelectChannelType from './ui/SelectChannelType';

// import InviteMembers from '../InviteMembers';
// import {
//   createChannel,
//   createDefaultUserListQuery,
//   isBroadcastChannelEnabled,
//   isSuperGroupChannelEnabled,
// } from './utils';

// import { CREATE_CHANNEL } from '../dux/actionTypes';

export interface CreateChannelProps {}

export default function index({}: CreateChannelProps): ReactElement {
  return (
    <div>
      
    </div>
  )
}


export default function AddChannel({
  // sdk,
  // disabled,
  // channelListDispatcher,
  // userId,
  onBeforeCreateChannel,
  userFilledApplicationUserListQuery,
  userListQuery,
}) {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(0);
  const [type, setType] = useState('group');
  const { stringSet } = useContext(LocalizationContext);

  // if (!sdk || !sdk.createApplicationUserListQuery) {
  //   return null;
  // }

  const isBroadcastAvailable = isBroadcastChannelEnabled(sdk);
  const isSupergroupAvailable = isSuperGroupChannelEnabled(sdk);

  return (
    <>
      {
        showModal && step === 0 && (
          <Modal
            titleText="New channel"
            hideFooter
            onCancel={() => { setShowModal(false); }}
            onSubmit={() => {}}
          >
            <SelectChannelType />
          </Modal>
        )
      }
      {
        showModal && step === 1 && (
          <FetchUserListProvider>
            <Modal>
              <InviteUserList />
            </Modal onClick{}>
          </FetchUserListProvider>
          // <InviteMembers
          //   swapParams={
          //     sdk && sdk.getErrorFirstCallback && sdk.getErrorFirstCallback()
          //   }
          //   titleText={stringSet.MODAL__CREATE_CHANNEL__TITLE}
          //   submitText={stringSet.BUTTON__CREATE}
          //   closeModal={() => {
          //     setStep(0);
          //     setShowModal(false);
          //   }}
          //   idsToFilter={[userId]}
          //   userQueryCreator={() => ((userListQuery && typeof userListQuery === 'function')
          //     ? userListQuery()
          //     : createDefaultUserListQuery({ sdk, userFilledApplicationUserListQuery })
          //   )}
          //   onSubmit={(selectedUsers) => createChannel(
          //     sdk,
          //     selectedUsers,
          //     onBeforeCreateChannel,
          //     userId,
          //     type,
          //   ).then((channel) => {
          //     // maybe - do this in event listener
          //     channelListDispatcher({
          //       type: CREATE_CHANNEL,
          //       payload: channel,
          //     });
          //   })}
          // />
        )
      }
    </>
  );
}

// AddChannel.propTypes = {
//   sdk: PropTypes.shape({
//     getErrorFirstCallback: PropTypes.func,
//     createApplicationUserListQuery: PropTypes.func,
//   }).isRequired,
//   disabled: PropTypes.bool,
//   channelListDispatcher: PropTypes.func.isRequired,
//   userFilledApplicationUserListQuery: PropTypes.shape({}),
//   onBeforeCreateChannel: PropTypes.func,
//   userId: PropTypes.string.isRequired,
//   userListQuery: PropTypes.func,
// };

// AddChannel.defaultProps = {
//   disabled: false,
//   userFilledApplicationUserListQuery: {},
//   onBeforeCreateChannel: null,
//   userListQuery: null,
// };

