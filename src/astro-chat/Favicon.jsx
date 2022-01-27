import useTotalUnreadMessageCount from '../hooks/useTotalUnreadMessageCount';
import withSendbirdContext from "../lib/SendbirdSdkContext";
import { useEffect } from 'react';
import faviconDefault from './favicon-96x96.png';
import faviconUnread from './favicon_unread-96x96.png';

function Favicon(props) {
  const { stores: { sdkStore = {} } } = props;
  const { sdk = {} } = sdkStore;
  // const sdkError = sdkStore.error;
  // const sdkIntialized = sdkStore.initialized;

  const count = useTotalUnreadMessageCount(sdk);

  useEffect(() => {
    if (count > 0) {
      document.getElementById('favicon').href = faviconUnread;
      document.querySelector('title').innerText = `${count} unread messages`;
    } else {
      document.getElementById('favicon').href = faviconDefault;
      document.querySelector('title').innerText = `No unread messages`;
    }
    console.warn('[UNREAD]', count);
  }, [count]);

  return null;
}

export default withSendbirdContext(Favicon);