import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ name, role, avatar }) => {
    return (
        <div className="profile-card">
            <div className="avatar">
                {avatar ? <img src={avatar} alt={name} /> : <div className="placeholder"></div>}
            </div>
            <div className="profile-info">
                <div className="name no-wrap">
                    <span>{name}</span>
                </div>
                <div className="role no-wrap">{role}</div>
            </div>
        </div>
    );
};

export default ProfileCard;
