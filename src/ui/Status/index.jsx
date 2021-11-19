import React, {useEffect} from 'react';
// import {sendBirdSelectors, useSendbirdStateContext} from '../../index';
import usePresence from "../../hooks/usePresence";
import withSendbirdContext from "../../lib/SendbirdSdkContext";
// import { withSendBird } from "../../index";

function Status(props) {
  const {
    stores: { sdkStore = {}, userStore = {} },
    members,
  } = props;
  const { sdk = {} } = sdkStore;
  const sdkIntialized = sdkStore.initialized;
  // const context = useSendbirdStateContext()
  // const sdk = sendBirdSelectors.getSdk(context)

  // useEffect(() => {
  //   if (sdkIntialized) {
  //
  //   }
  // }, [sdkIntialized]);

  const otherMember = sdkIntialized
    ? members.find(c => c.userId !== sdk.currentUser.userId)
    : null;


  const isOnline = usePresence(otherMember?.userId, sdk);

  const status = isOnline
    ? (<div style={{backgroundColor: 'green'}}>Online</div>)
    : (<div style={{backgroundColor: 'grey'}}>Offline</div>)

  return status
}

export default withSendbirdContext(Status);
