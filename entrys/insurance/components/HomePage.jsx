/**
 * Created by dell on 2016/10/27.
 */
import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router'
import Footer from '../modules/Footer.jsx';
import '../../../css/insurance/components/nav.css'
import Nav from '../modules/HomePageNav';
import '../../../css/insurance/components/homepage.css'

var HomePage = React.createClass({
    mouseWheel: function () {
        document.onmousewheel = function () {
            return false;
        }
    },

    render: function () {

        return (

            <div className="homePage">
                <Nav/>
                <div style={{width:'100%',minWidth: '1500px',height:'91%',minHeight:'870px',position:'absolute'}}>
                    <div style={{position: 'absolute', bottom: '50px', minWidth: '800px'}}>
                        <img src={window.App.getResourceDeployPrefix() + "/images/images-8.png"}/>
                        <div className="clear"></div>
                    </div>
                    <div style={{width:'100%',position:'absolute',top: '30%',minWidth:'1250px'}}>
                        <div style={{float:'left',width:'56%',marginTop:'88px',paddingLeft:'225px'}}>
                            <img src={window.App.getResourceDeployPrefix() + "/images/img1-dark-vertical.png"}/>
                        </div>
                        <ul style={{listStyle: 'none', width: '44%', float: 'left'}}>
                            <li>
                                <div className="leftQ" style={{width: '250px', float: 'left'}}>
                                        <span style={{display: 'block', marginBottom: '20px'}}>
                                            <img src={App.getResourceDeployPrefix() + "/images/iosQRCode.png"}
                                                 style={{width: '168px', marginLeft: '40px'}}/>
                                        </span>
                                    <div style={{textAlign: 'center'}}>
                                        <a
                                            type="button"
                                            className=""
                                            href={App.getDownloadDeployDeployPrefix() + "/downloads/iso-release.apk"}
                                            style={{width: '100%', fontSize: '18px'}}
                                        >iPhone 下载
                                        </a>
                                    </div>
                                </div>
                                <div className="rightQ" style={{width: '250px', float: 'left'}}>
                                         <span style={{display: 'block', marginBottom: '20px'}}>
                                            <img src={App.getResourceDeployPrefix() + "/images/androidQRCode.png"}
                                                 style={{width: '168px', marginLeft: '40px'}}/>
                                         </span>
                                    <div style={{textAlign: 'center'}}>
                                        <a
                                            type="button"
                                            className=""
                                            href={App.getDownloadDeployDeployPrefix() + "/downloads/android-release.apk"}
                                            style={{width: '100%', fontSize: '18px'}}
                                        > Android 下载
                                        </a>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </li>
                            <li>
                                <div style={{marginTop:'185px',paddingLeft:'7px'}}>
                                    <Link style={{fontSize: 'x-large', paddingLeft: '195px'}}
                                          to={window.App.getAppRoute() + "/mainPage"}>
                                        进入主页
                                    </Link>
                                </div>
                                <div className="clear"></div>
                            </li>
                        </ul>
                        <div className="clear"></div>
                    </div>
                    <div style={{position:'absolute',bottom:'64px',right:'2%'}}>
                        <img src={window.App.getResourceDeployPrefix() + "/images/img2.png"}/>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="clear"></div>
                <Footer/>
            </div>

        );
    }
});
module.exports = HomePage;
