import React from 'react'
import { connect } from "react-redux";

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 2,
    borderRadius: 10
  }

  const notificationMessage = props.notifications
  
  if (notificationMessage === '') {
    return null
  }

  return (
    <div style={style}>
       {notificationMessage}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  }
}

export default connect(mapStateToProps)(Notification)