const Friends = ({ friendsList }) => {
  return <ul className="friend-list">
    {friendsList.map(({id, onlineStatus, avatar, name}) => 
      <li className="item" key={id}>
      <span className="status" data-status={onlineStatus}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{ name }</p>
      </li>
    )}
  </ul>
  
}

export default Friends