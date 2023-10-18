// import { React } from "../../../node_modules/react";

// import { ReactDOM } from "../../../node_modules/react-dom";




const Profile = ({ username, tag, location, avatar,stats}) => {
  const {followers, views, likes} = stats
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={ username }></img>
        <h1 className="profile">{ username }</h1>
        <a href="/" className="tag">@{ tag }</a>
        <p className="location">{ location }</p>
      </div>

      <ul className="stats"> 
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  )
}


export default Profile