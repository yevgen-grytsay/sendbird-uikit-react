import { useEffect, useState } from 'react';
import uuidv4 from '../utils/uuid';

export default function useTotalUnreadMessageCount(sdk) {
  const [count, setCount] = useState(null);

  if (count === null) {
    if (sdk.getTotalUnreadMessageCount) {
      sdk.getTotalUnreadMessageCount().then((totalCount) => {
        setCount(totalCount);
      })
    }
  }

  useEffect(() =>  {
    const eventHandlerId = uuidv4();

    if (sdk && sdk.UserEventHandler) {
      const userEventHandler = new sdk.UserEventHandler();
      userEventHandler.onTotalUnreadMessageCountUpdated = function(totalCount, countByCustomTypes) {
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
