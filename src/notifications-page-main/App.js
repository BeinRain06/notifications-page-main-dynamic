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
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";

function Notification(props) {
  return (
    <div className="noti_container">
      <div className="noti_content1">
        <div className="my_img">
          <img src={props.feature.myImg} alt="image Oops Lost!" className="img_show" />
        </div>
        <div className="reaction_made">
          <div className="user_post">
            <p>
              <span className="name_user"><strong>{props.feature.myName}</strong></span>
              <span className="my_react">{props.feature.myMove}</span>
              <span className="topic">{props.feature.aboutPost}</span>
            </p>
            <div className="picture">
              <img src={props.feature.pictureCommented} alt="missing picture" className="picture_commented" />
            </div>
            <div className="dot"></div>
          </div>
          <div className="universal_time">
            <p className="theTime">{props.feature.leftTime}</p>
          </div>
        </div>
      </div>
      <div className="noti_content2">
        <div className="message">
          <p className="priv_message">{props.feature.privateMessage}</p>
        </div>
      </div>
    </div>
  );
}

class Notifications extends ReactDOM.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      boardUsers: [],
    };
  }

  fillBoardUser() {
    this.setState({
      boardUsers: [
        {
          id: {},
          myImg: { Mark },
          myName: "Mark Webber",
          myMove: "reacted to your recent post",
          aboutPost: "My first tournament today!",
          pictureCommented: {},
          leftTime: "1m ago",
          privateMessage: "",
        },
        {
          id: {},
          myImg: { Angela },
          myName: "Angela Gray",
          myMove: "followed you",
          aboutPost: "",
          pictureCommented: {},
          leftTime: "5m ago",
          privateMessage: "",
        },
        {
          id: {},
          myImg: { Jacob },
          myName: "Jacob Thompson",
          myMove: "has joined your group Chess Club",
          aboutPost: "",
          pictureCommented: {},
          leftTime: "1 day ago",
          privateMessage: "",
        },
        {
          id: {},
          myImg: { Rizky },
          myName: "Rizky Hasanuddin",
          myMove: "sent you a private message",
          aboutPost: "",
          pictureCommented: {},
          leftTime: "5 days ago",
          privateMessage:
            "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and i'm already having lots of fun and improving my game.",
        },
        {
          id: {},
          myImg: { Kimberly },
          myName: "Kimberly Smith",
          myMove: "commented on your picture",
          pictureCommented: { chessImage },
          aboutPost: "",
          leftTime: "1 week ago",
          privateMessage: "",
        },
        {
          id: {},
          myImg: { Nathan },
          myName: "Nathan Peterson",
          myMove: "reacted to your recent post",
          aboutPost: "5 end-game strategies to increase your win rate",
          pictureCommented: {},
          leftTime: "2 weeks ago",
          privateMessage: "",
        },
        {
          id: {},
          myImg: { Anna },
          myName: "Anna Kim",
          myMove: "left the group Chess Club",
          aboutPost: "",
          pictureCommented: {},
          leftTime: "2 weeks ago",
          privateMessage: "",
        },
      ],
    });
  }

  fillBoardUser();

  renderNotification(i) {
    return <Notification feature={this.state.boardUsers[i]} />;
  }

  render() {
    return (
      <div className="all_users_post">
        {this.renderNotification(0)}
        {this.renderNotification(1)}
        {this.renderNotification(2)}
        {this.renderNotification(3)}
        {this.renderNotification(4)}
        {this.renderNotification(5)}
        {this.renderNotification(6)}
      </div>
    );
  }
}

class showBoardNotification {
  render() {
    <div className="main_container">
      <div className="show_content">
        <button className="btn_update">
          <div className="hyphen"></div>
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
        <Notifications />
      </div>
    </div>;
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
