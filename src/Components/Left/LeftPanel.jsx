import React from "react";
import "./LeftPanel.css";

export default function LeftPanel() {
  return (
    <div className="LeftPanel">
      <LeftPanelTop />
      <LeftPanelBottom />
    </div>
  );
}

function LeftPanelTop() {
  return (
    <div className="LeftPanelTop">
      <div className="TwitLogo">
        <i class="fa-brands fa-twitter"></i>
      </div>
      <LeftMenu
        icon={<i class="fa-solid fa-house-user"></i>}
        MenuName={"Home"}
      />
      <LeftMenu
        icon={<i class="fa-solid fa-hashtag"></i>}
        MenuName={"Explore"}
      />
      <LeftMenu
        icon={<i class="fa-regular fa-bell"></i>}
        MenuName={"Notification"}
      />
      <LeftMenu
        icon={<i class="fa-regular fa-envelope"></i>}
        MenuName={"Messages"}
      />
      <LeftMenu
        icon={<i class="fa-regular fa-bookmark"></i>}
        MenuName={"Bookmarks"}
      />
      <LeftMenu
        icon={<i class="fa-brands fa-square-twitter"></i>}
        MenuName={"Twitter Blue"}
      />
      <LeftMenu
        icon={<i class="fa-regular fa-user"></i>}
        MenuName={"Profile"}
      />
      <LeftMenu icon={<i class="fa-solid fa-ellipsis"></i>} MenuName={"More"} />
    </div>
  );
}

function LeftPanelBottom() {
  return (
    <div className="LeftPanelBottom">
      <div className="Tweet">{"Tweet"}</div>
      <div className="ProfileBox">
        <div className="ProfileImage">
          <i class="fa-regular fa-circle-user"></i>
        </div>
        <div className="UserDet">
          <div className="UserName">User Name</div>
          <div className="UserId">@userid_01</div>
        </div>
        <div className="MoreOptn">
          <i class="fa-solid fa-ellipsis"></i>
        </div>
      </div>
    </div>
  );
}

function LeftMenu(props) {
  return (
    <div className="LeftMenu">
      <div className="LeftMenuIcon">{props.icon}</div>
      <div className="LeftMenuNav">{props.MenuName}</div>
    </div>
  );
}
