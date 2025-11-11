import React from "react";

function ProfileCardStats({ value, label }) {
  return (
    <div className="profile-card__stat">
      <p className="profile-card__stat-value">{value}</p>
      <p className="profile-card__stat-label">{label}</p>
    </div>
  );
}

export default function ProfileCard() {
  return (
    <article className="profile-card">
      <div className="profile-card__header"></div>
      <div className="profile-card__body">
        <img
          src="./images/image-victor.jpg"
          alt="Victor Crest"
          className="profile-card__avatar"
        />
        <h2 className="profile-card__name">
          Victor Crest <span className="profile-card__age">26</span>
        </h2>
        <p className="profile-card__location">London</p>
      </div>
      <div className="profile-card__footer">
        <div className="profile-card__stats">
          <div className="profile-card__stat">
            <ProfileCardStats value="80K" label="Followers" />
          </div>
          <div className="profile-card__stat">
            <ProfileCardStats value="803K" label="Likes" />
          </div>
          <div className="profile-card__stat">
            <ProfileCardStats value="1.4K" label="Photos" />
          </div>
        </div>
      </div>
    </article>
  );
}
