import { useState } from "react";
import "../styles/campaigns.scss";
import { Link, useNavigate } from "react-router-dom";
import "../styles/email-modal.css";

const Campaigns = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showSms, setShowSms] = useState(false);
  const navigate = useNavigate()

  const saveEmail = (e:any) =>{
    e.preventDefault()
    setShowEmail(false)
    navigate(`/console/userid/campaigns/emails/emailid`)
  }

  return (
    <div className="campaigns">
      {showEmail ? (
        <div className="email-modal">
          <h1>email</h1>
          <p>create email</p>
          <input type="text" placeholder="email" />
          <button onClick={() => setShowEmail(false)}>cancel</button>
          <button onClick={(e) => saveEmail(e)}>save</button>
       </div>
      ) : null}
      {showSms ?         <div className="email-modal">
          <h1>sms</h1>
          <p>create sms</p>
          <input type="text" placeholder="sms" />
          <button onClick={() => setShowSms(false)}>cancel</button>
          <button onClick={(e) => saveEmail(e)}>save</button>
        </div> : null}

      <h1 className="heading">Campaigns</h1>
      <div className="campaigns-search">
        <Link to="/">campaigns/</Link>
        <input type="text" placeholder="search" />
        <div>
          <button onClick={() => setShowEmail(true)}>new email</button>
          <button onClick={() => setShowSms(true)}>new sms</button>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <h1>NAME1</h1>
          <p>email</p>
        </div>
        <div className="box">
          <h1>NAME2</h1>
          <p>sms</p>
        </div>
        <div className="box">
          <h1>NAME3</h1>
          <p>landing page</p>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
