import React from 'react'

const Notification = ({ store }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 2,
    borderRadius: 10
  }

  const notificationMessage = store.getState().notifications
  
  return (
    <div style={style}>
      {notificationMessage === ''
        ? ''
        : notificationMessage
      }
    </div>
  )
}

export default Notification