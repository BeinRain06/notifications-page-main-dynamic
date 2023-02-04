// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import {
  Mark,
  Angela,
  Jacob,
  Rizky,
  Kimberly,
  Nathan,
  Anna,
  chessImage,
} from "./assets/images";

class ShowRedDot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedNotiContainer: true,
      userNotiNonReaded: this.props.unreadIn,
    };
  }

  onClick = () => {
    this.setState({
      clickedNotiContainer: !this.state.clickedNotiContainer,
    });
  };

  render() {
    var className = this.state.clickedNotiContainer;

    var className = this.state.clickedNotiContainer
      ? "noti_content1"
      : "noti_content1 throw_red_dot";

    return (
      <div className="noti_container" id={this.props.keyStep}>
        <div className={className} onClick={this.onClick}>
          <div className="reaction_made">
            <div className="user_post">
              <div className="layer_user">
                <div className="my_img">
                  <img
                    src={this.props.showus.myImg}
                    alt="Oops Lost1!"
                    className="img_show"
                  />
                </div>
                <p>
                  <span className="name_user">
                    <strong>{this.props.showus.myName}</strong>
                  </span>
                  <span className="my_react">{this.props.showus.myMove}</span>
                  <span className="topic">{this.props.showus.topic}</span>
                </p>
                {this.state.clickedNotiContainer ? (
                  <div className="dot"></div>
                ) : null}
              </div>
              <p className="theTime">{this.props.showus.timeLeft}</p>
              <div className="picture">
                {this.props.showus.pictureCommented !== "" ? (
                  <img
                    src={this.props.showus.pictureCommented}
                    alt="Oops Lost2!"
                    className="picture_commented"
                  />
                ) : null}
              </div>
            </div>
            <Search item={this.props.showus.privateMsg} />
          </div>
        </div>
      </div>
    );
  }
}

const Search = (props) => {
  const [showResult, setShowResult] = React.useState(false);

  const onClick = () => {
    setShowResult(!showResult);
  };

  return (
    <div>
      <button onClick={onClick}>Read Message</button>
      {showResult ? <Result myMsg={props.item} /> : null}
    </div>
  );
};

const Result = (props) => {
  return (
    <div className="message">
      <p className="priv_message">{props.myMsg}</p>
    </div>
  );
};

class Notification extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ShowRedDot showus={this.props.value} keyStep={this.props.keyLog} />;
  }
}

class Notifications extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = (e) => {
    const spaceUsers = document.querySelectorAll("user_area");
    console.log(e.target);
  };

  renderNotification(id) {
    return <Notification value={this.props.notiValue[id]} keyLog={id} />;
  }

  render() {
    return (
      <div className="all_users_posts" onClick={this.onClick}>
        <ul className="list_users">
          <li className="user_area">{this.renderNotification(0)}</li>
          <li className="user_area">{this.renderNotification(1)}</li>
          <li className="user_area">{this.renderNotification(2)}</li>
          <li className="user_area">{this.renderNotification(3)}</li>
          <li className="user_area">{this.renderNotification(4)}</li>
          <li className="user_area">{this.renderNotification(5)}</li>
          <li className="user_area">{this.renderNotification(6)}</li>
        </ul>
      </div>
    );
  }
}

class ShowBoardNotification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          boardUsers: [
            [
              {
                myImg: Mark,
                myName: "Mark Webber",
                myMove: "reacted to your recent post",
                topic: "My first tournament today!",
                timeLeft: "1m ago",
                pictureCommented: "",
                privateMsg: "",
                id: 1,
              },

              {
                myImg: Angela,
                myName: "Angela Gray",
                myMove: "followed you",
                topic: "My first tournament today!",
                timeLeft: "5m ago",
                pictureCommented: "",
                privateMsg: "",
                id: 2,
              },
              {
                myImg: Jacob,
                myName: "Jacob Thompson",
                myMove: "has joined your group Chess Club",
                topic: "My first tournament today!",
                timeLeft: "1 day ago",
                pictureCommented: "",
                privateMsg: "",
                id: 3,
              },
              {
                myImg: Rizky,
                myName: "Rizky Hasanuddin",
                myMove: "sent you a private message",
                topic: "",
                timeLeft: "5 days ago",
                pictureCommented: "",
                privateMsg:
                  "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and i'm already having lots of fun and improving my game.",
                id: 4,
              },
              {
                myImg: Kimberly,
                myName: "Kimberly Smith",
                myMove: "commented on your picture",
                topic: "",
                timeLeft: "1 week ago",
                pictureCommented: chessImage,
                privateMsg: "",
                id: 5,
              },
              {
                myImg: Nathan,
                myName: "Nathan Peterson",
                myMove: "reacted to your recent post",
                topic: "5 end-game strategies to increase your win rate",
                timeLeft: "2 weeks ago",
                pictureCommented: "",
                privateMsg: "",
                id: 6,
              },
              {
                myImg: Anna,
                myName: "Anna Kim",
                myMove: "left the group Chess Club",
                topic: "",
                timeLeft: "2 weeks ago",
                pictureCommented: "",
                privateMsg: "",
                id: 7,
              },
            ],
          ],
        },
      ],
      isClicked: false,
    };
  }

  generateIDs = () => {
    const history = this.state.history[0];
    const boardUsers = history.boardUsers;
    const current = boardUsers[boardUsers.length - 1];

    let boardUser = current.slice();
    console.log(boardUser);

    let arrayIDEx = [];
    let arrayIDNew = [];
    let j;

    for (let i = 0; i < boardUser.length; i++) {
      arrayIDEx[i] = i;
    }

    for (let i = arrayIDEx.length; i >= 0; i--) {
      j = Math.floor(Math.random() * i);
      arrayIDNew.push(arrayIDEx[j]);
      arrayIDEx.splice(j, 1);
      i = arrayIDEx.length;
    }

    let stickID = boardUser.map((user, index) => {
      return (user.id = arrayIDNew[index]);
    });
    console.log(stickID);

    boardUser.sort((a, b) => {
      return a.id - b.id;
    });

    console.log(boardUser);

    this.setState({
      history: [
        {
          boardUsers: boardUsers.concat([boardUser]),
        },
      ],
      isCliked: true,
    });

    console.log(history);
  };

  render() {
    const history = this.state.history[0];
    const boardUsers = history.boardUsers;
    const boardUser = boardUsers[boardUsers.length - 1];

    var classNameContent = !this.state.isClicked
      ? "show_content"
      : "show_content addOpacityAnim";

    return (
      <div className="main_container">
        <div className={classNameContent}>
          <button className="btn_update" onClick={this.generateIDs}>
            <h4>Update</h4>
          </button>
          <div className="title_page">
            <div className="title">
              <h3>Notifications</h3>
              <div className="unread">
                <p className="remain_unreaded">3</p>
              </div>
            </div>
            <div className="mark_noti">
              <button className="mark_all_read">Mark all as read</button>
            </div>
          </div>
          <Notifications notiValue={boardUser} />
          <div className="attribution">
            Challenged By
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            Coded By.
            <a href="#">Be In Rain 06</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowBoardNotification;

/* export default ShowBoardNotification; */
