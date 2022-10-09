
import React from 'react'
import { Icon } from 'semantic-ui-react'
import {Link} from "react-router-dom";

function Footer() {

    return (
        <div className='footerContainer'>
            <div className="footer">
                <footer>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-4 col-md-4 item" style={{textAlign: "center"}}>
                                <Link to="/" style={{color: 'white'}}>Home</Link>
                            </div>
                            <div className="col-sm-4 col-md-4 item" style={{textAlign: "center"}}>
                                <Link to="/find_question" style={{color: 'white'}}>Questions</Link>
                            </div>
                            <div className="col-sm-4 col-md-4 item" style={{textAlign: "center"}}>
                                <Link to="/post" style={{color: 'white'}}>Post</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </div>

    )

}
export default Footer