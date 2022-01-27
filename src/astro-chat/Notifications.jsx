import { useEffect } from 'react';
import { usePageVisibility } from 'react-page-visibility';
import { getSdk } from '../lib/selectors';
import uuidv4 from '../utils/uuid';
import withSendbirdContext from '../lib/SendbirdSdkContext';
import useSendbirdStateContext from '../hooks/useSendbirdStateContext';

function notifyMe(message) {
  /* eslint-disable no-new */
  // Let's check if the browser supports notifications
  if (!('Notification' in window)) {
    console.warn('This browser does not support desktop notification');
  } else if (Notification.permission === 'granted') {
    // Let's check whether notification permissions have already been granted
    // If it's okay let's create a notification
    new Notification('Zodianic Chat New Message', { body: message });
  } else if (Notification.permission !== 'denied') {
    // Otherwise, we need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === 'granted') {
        new Notification('Zodianic Chat New Message', { body: message });
      }
    });
  }

  /* eslint-enable no-new */
  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}

function Notifications() {
  // const { config: { logger } } = props;

  const context = useSendbirdStateContext();
  const sdk = getSdk(context);

  const isPageVisible = usePageVisibility();

  useEffect(() => {
    const messageReceiverId = uuidv4();
    if (sdk && sdk.ChannelHandler) {
      const ChannelHandler = new sdk.ChannelHandler();

      ChannelHandler.onMessageReceived = (channel, message) => {
        // logger.info('[MESSAGE]', channel, message);
        // logger.info('isPageVisible', isPageVisible);
        console.log('[MESSAGE]', channel, message);
        console.log('isPageVisible', isPageVisible);

        const isSenderCurrentUser = message.sender.userId === sdk.currentUser.userId;

        console.log('[NOTIFICATION]', {
          isPageVisible,
          isSenderCurrentUser,
        });

        if (isSenderCurrentUser) {
          console.log('Skip notification: current user is sender');

          return;
        }

        if (isPageVisible) {
          console.log('Skip notification: page is visible');

          return;
        }

        notifyMe(message.message);
      };

      sdk.addChannelHandler(messageReceiverId, ChannelHandler);
    }

    return () => {
      if (sdk && sdk.removeChannelHandler) {
        sdk.removeChannelHandler(messageReceiverId);
      }
    };
  }, [sdk, isPageVisible]);

  return null;
}

export default withSendbirdContext(Notifications);
