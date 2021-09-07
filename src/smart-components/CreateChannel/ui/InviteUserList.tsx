import React, { ReactElement, useContext } from 'react'

interface Props {
  
}

export default function InviteUserList({}: Props): ReactElement {
  const context = useContext(FetchUserListProvider);
  return (
    <div
      className="sendbird-create-channel--scroll"
      onScroll={(e) => {
        const { hasNext } = usersDataSource;
        const fetchMore = (
          e.target.clientHeight + e.target.scrollTop === e.target.scrollHeight
        );

        if (hasNext && fetchMore) {
          usersDataSource.next((usersBatch, error) => {
            if (error) {
              return;
            }
            setUsers([
              ...users,
              ...usersBatch,
            ]);
          });
        }
      }}
    >
      {
        users.map((user) => (!filterUser(idsToFilter)(user.userId)) && (
          <UserListItem
            key={user.userId}
            user={user}
            checkBox
            checked={selectedUsers[user.userId]}
            onChange={
              (event) => {
                const modifiedSelectedUsers = {
                  ...selectedUsers,
                  [event.target.id]: event.target.checked,
                };
                if (!event.target.checked) {
                  delete modifiedSelectedUsers[event.target.id];
                }
                setSelectedUsers(modifiedSelectedUsers);
              }
            }
          />
        ))
      }
    </div>
  )
}
