import React, { ReactElement } from 'react'

const FetchUserListProvider = React.createContext({
  fetchUserList: Promise,
});

export default function FetchUserList({
  userListQuery,
  customUSerFilled,
}: Props): ReactElement {
  // should return promise
  const fetchUserList = useMemo((e) => {
    usersDataSource.next((usersBatch, error) => {
      if (error) {
        return;
      }
      setUsers([
        ...users,
        ...usersBatch,
      ]);
    });
  }, []);
  return (
    <FetchUserListProvider.Provider value={props}>
      {children}
    </FetchUserListProvider.Provider>

  )
}
