import '../styles/email.css'
import {Link} from 'react-router-dom'

const Email = () => {
  return (
    <div className="email">
        <h1 className='email-heading'>Email</h1>
        <div className='navbar'>
            <Link to='/'>campaigns/emails/:dd</Link>
            <button>save</button>
        </div>
        <div className="container">
            <div className="box">
                <div>
                    <h2>To</h2>
                    <p>All Subscribers to audience xyz media</p>
                </div>
                <button>edit</button>
            </div>
            <div className="box">
                <div>
                    <h2>From</h2>
                    <p>email from</p>
                </div>
                <button>edit</button>
            </div>
            <div className="box">
                <div>
                    <h2>Subject</h2>
                    <p>subject for email</p>
                </div>
                <button>edit</button>
            </div>
            <div className="box">
                <div>
                    <h2>Send Time</h2>
                    <p>when should you send</p>
                </div>
                <button>edit</button>
            </div>
            <div className="box">
                <div>
                    <h2>Content</h2>
                    <p>Design content for email</p>
                </div>
                <button>edit</button>
            </div>
        </div>
    </div>
  )
}

export default Email