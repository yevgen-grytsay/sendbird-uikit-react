import React, {useEffect} from 'react';
import usePresence from "../../hooks/usePresence";
import withSendbirdContext from "../../lib/SendbirdSdkContext";
import './index.scss';
import PropTypes from "prop-types";


function Status(props) {
  const {
    stores: { sdkStore = {} },
    members,
  } = props;
  const { sdk = {} } = sdkStore;
  const sdkIntialized = sdkStore.initialized;

  if (!sdkIntialized) {
    return null;
  }

  const otherMember = members.find(c => c.userId !== sdk.currentUser.userId);
  const isOnline = usePresence(otherMember.userId, sdk);
  const onlineClass = isOnline ? 'online' : 'offline';

  return (
    <div className={`presence-status ${onlineClass}`}></div>
  );
}

export default withSendbirdContext(Status);


Status.propTypes = {
  stores: PropTypes.shape({
    sdkStore: PropTypes.shape({
      initialized: PropTypes.bool,
      sdk: PropTypes.shape({
        createApplicationUserListQuery: PropTypes.func,
      }),
      error: PropTypes.bool,
    }),
    // userStore: PropTypes.shape({
    //   user: PropTypes.shape({}),
    // }),
  }).isRequired,
};
