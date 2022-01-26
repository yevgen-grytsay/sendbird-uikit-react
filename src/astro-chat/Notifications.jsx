import useSendbirdStateContext from "../hooks/useSendbirdStateContext";
import sendbirdSelectors from "../lib/selectors";
import React, {useEffect} from "react";
import uuidv4 from "../utils/uuid";

function notifyMe(message) {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    console.warn("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification('Zodianic Chat New Message', {body: message});
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification('Zodianic Chat New Message', {body: message});
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}

export default function Notifications({}) {

  const context = useSendbirdStateContext();
  const sdk = sendbirdSelectors.getSdk(context);

  // useEffect(() =>  {
  //   if (!sdk) {
  //     return;
  //   }
  //
  //   Notification.requestPermission().then(function(permission) {
  //     console.log(result);
  //   });
  // }, [sdk]);

  useEffect(() => {
    const messageReceiverId = uuidv4();
    if (sdk && sdk.ChannelHandler) {
      const ChannelHandler = new sdk.ChannelHandler();

      ChannelHandler.onMessageReceived = (channel, message) => {
        console.log('[MESSAGE]', channel, message);

        notifyMe(message.message);
      };

      sdk.addChannelHandler(messageReceiverId, ChannelHandler);
    }

    return () => {
      if (sdk && sdk.removeChannelHandler) {
        // logger.info('Channel | useHandleChannelEvents: Removing message reciver handler', messageReceiverId);
        sdk.removeChannelHandler(messageReceiverId);
      }
    };
  }, [sdk]);

  return null;
}
