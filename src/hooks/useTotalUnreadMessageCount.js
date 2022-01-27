import { useEffect, useState } from 'react';
import uuidv4 from '../utils/uuid';

/**
 * @link https://sendbird.com/docs/chat/v3/javascript/guides/event-handler#2-add-and-remove-a-user-event-handler
 * @link https://sendbird.github.io/core-sdk-javascript/module-sendbird.html#~UserEventHandler
 */
export default function useTotalUnreadMessageCount(sdk) {
  const [count, setCount] = useState(null);

  if (count === null) {
    if (sdk && sdk.getTotalUnreadMessageCount) {
      sdk.getTotalUnreadMessageCount().then((totalCount) => {
        setCount(totalCount);
      });
    }
  }

  useEffect(() => {
    const eventHandlerId = uuidv4();

    if (sdk && sdk.UserEventHandler) {
      const userEventHandler = new sdk.UserEventHandler();
      userEventHandler.onTotalUnreadMessageCountUpdated = function (totalCount) {
        setCount(totalCount);
      };
      sdk.addUserEventHandler(eventHandlerId, userEventHandler);
    }

    return () => {
      if (sdk && sdk.removeUserEventHandler) {
        sdk.removeUserEventHandler(eventHandlerId);
      }
    };
  }, [sdk]);

  return count;
}
