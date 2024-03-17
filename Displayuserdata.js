import React, { useState } from "react";
import users from "./Userdata";
import "./Displayuserdata.css";

function DisplayUserData() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleClick = (user) => {
    console.log("function called ", user);
    setSelectedUser(user);
  };

  return (
    <div>
      <div className="map1">
        {users.map((user, index) => (
          <div key={index} className="pic">
            {" "}
            {/* Added key prop for React list rendering */}
            <div className="user-profile">
              {" "}
              {/* New container for user profile */}
              <img
                src={user.photo}
                alt={user.name}
                onClick={() => setSelectedUser(user)}
              />
              <div className="user">
                <h3>{user.name}</h3>
                <p>Age: {user.age}</p>
                <p>location:{user.location}</p>
                <button className="btn" onClick={() => handleClick(user)}>
                  Summary
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="div1">
        {selectedUser && (
          <div className="profile">
            <h2>{selectedUser.name}'s Profile</h2>
            <img src={selectedUser.photo} />
            <p>Name: {selectedUser.name}</p>
            <p>Age: {selectedUser.age}</p>
            <p className="location-container">
              <span>View location</span>
              {selectedUser.coordinates && (
                <img
                  src="https://cdn.vox-cdn.com/thumbor/IULs8cgukIn_-pIgMY9WFZsVOUk=/0x0:1280x800/1400x788/filters:focal(640x400:641x401)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png"
                  alt="Map Icon"
                  style={{ cursor: "pointer", width: "100px" }}
                  onClick={() =>
                    window.open(selectedUser.coordinates, "_blank")
                  }
                />
              )}
            </p>
            <button type="button" onClick={() => setSelectedUser(null)}>
              Close Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DisplayUserData;
