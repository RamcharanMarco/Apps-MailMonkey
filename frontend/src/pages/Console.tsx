import "../styles/console.scss";
import { Link } from "react-router-dom";

const Console = () => {
  return (
    <div className="console">
      <div className="box">
        <div className="top">
          <h1>AUDIENCES</h1>
        </div>
        <div className="content">
          <p>Get subscribers to send campaigns to</p>
        </div>
        <div className="bottom">
          <Link to="/">VIEW</Link>
        </div>
      </div>
      <div className="box">
        <div className="top">
          <h1>CAMPAIGNS</h1>
        </div>
        <div className="content">
          <p>Content you send to users</p>
          <p>Email, SMS and Landing Page Campaigns</p>
        </div>
        <div className="bottom">
          <Link to="/console/sshhs/campaigns">VIEW</Link>
        </div>
      </div>
    </div>
  );
};

export default Console;
