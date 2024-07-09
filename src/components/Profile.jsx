import React from 'react';
import css from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div class={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.list}>
          <span className={css.label}>Followers {stats.followers}</span>
          <span className={css.quantity}></span>
        </li>
        <li className={css.list}>
          <span className={css.label}>Views {stats.views}</span>
          <span className={css.quantity}></span>
        </li>
        <li className={css.list}>
          <span className={css.label}>Likes {stats.likes}</span>
          <span className={css.quantity}></span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;