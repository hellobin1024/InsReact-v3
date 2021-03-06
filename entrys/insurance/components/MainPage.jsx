/**
 * Created by douxiaobin on 2016/10/27.
 */
import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';

import TopNav from '../modules/TopNav.jsx';
import Footer from '../modules/Footer.jsx';
import NewsList from './NewsList.jsx';
import NewsPage from './NewsPage.jsx';

import Banner from '../../../components/ad/Banner/Banner';

var ProxyQ = require('../../../components/proxy/ProxyQ');

/**Configure the image information for the ad section start*/
const IMAGE_DATA = [
    {
        src: require('../../../components/ad/images/size7(1008.331)/1.jpg'),
    },
    {
        src: require('../../../components/ad/images/size7(1008.331)/2.jpg')
    }
];
/**Configure the image information for the ad section end*/

var MainPage=React.createClass({

    // clickCb: function (data, detail, contentMapping) {
    //     this.setState({data: data, hiddenInfo: detail, contentMapping: contentMapping, isEnter: true})
    // },

    initialData: function () {
        var url = "/func/allow/getNewsList";

        ProxyQ.query(
            'POST',
            url,
            {},
            null,
            function (res) {
                var data = res;
                this.setState({data:data.data});
            }.bind(this),
            function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        );
    },

    getInitialState: function () {
        return {data: null}
    },

    render:function(){
        var mainContent;

        if (this.state.data !== undefined && this.state.data !== null) {
            mainContent=
                <div>
                    <TopNav />

                    <Banner
                        items={IMAGE_DATA}
                        width={'1008px'}
                        height={'331px'}
                        speed={0.6}
                        delay={2.6}
                        pause={true}
                        autoplay={true}
                        dots={true}
                        arrows={true}
                        animType={"Slider"}
                    />

                    <div className="clear">
                    </div>

                    <div className="margin w1008">
                        <div className="product">
                            <div className="product_B">
                                <a href="javascript:void(0)">产品介绍 </a>
                            </div>
                            <Link to={window.App.getAppRoute() + "/lifeInsurance"}>
                                <div className="product_img">
                                    <img src={window.App.getResourceDeployPrefix()+"/images/uploads/project/201508041122115824_21534582.jpg"} style={{width:'485px', height:'129px'}}></img>
                                    <div className="product_bg">
                                    </div>
                                    <div className="product_font">
                                             <i style={{color: 'aliceblue'}}> 寿险产品</i>
                                    </div>
                                    <div className="clear">
                                    </div>
                                </div>
                            </Link>
                            <Link to={window.App.getAppRoute() + "/carInsurance"}>
                                <div className="product_img">
                                    <img src={window.App.getResourceDeployPrefix()+"/images/uploads/project/201508041122361838_09058640.jpg"} style={{width:'485px', height:'129px'}}></img>
                                    <div className="product_bg">
                                    </div>
                                    <div className="product_font">
                                            <i style={{color: 'aliceblue'}}> 车险产品</i>
                                    </div>
                                    <div className="clear">
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="clear">
                    </div>
                    <div className="margin w1008">
                        <div className="product">
                            <div className="company mar_10">
                                <div className="company_B">
                                    关于我们
                                </div>
                                <Link to={window.App.getAppRoute() + "/aboutUs"}>
                                    <span className="about-more"><i href="javascript:void(0)">more&gt;&gt;</i></span>
                                </Link>
                                <div className="company_img">
                                    <img alt=""
                                         src={window.App.getResourceDeployPrefix() + "/images/company.jpg"}></img>
                                    山东纳利保险经纪有限公司是经中国保险监督管理委员会于2009年12月批准，于2010年1月成立的全国性、综合性保险经纪公司，
                                    注册资本为人民币一千万元，公司总部设在山东济南。公司致力于全国范围内企业及个人客户拟定投保方案、选择保险人、办理投保手续..........
                                </div>
                            </div>

                            <div className="news mar_L">
                                <div className="news_B">
                                    最新资讯
                                </div>
                                <Link to={window.App.getAppRoute() + "/news"}>
                                    <span className="news-more"><i href="javascript:void(0)">more&gt;&gt;</i></span>
                                </Link>
                                <div className="news_L">

                                    <div>
                                        <NewsList
                                            data={this.state.data}
                                        />
                                    </div>
                                </div>
                            </div>

                        <div className="service fr mar_10">
                            <div className="clear">
                            </div>
                            <div className="contact">
                                <div className="tell" style={{align:'left'}}>
                                    <i className="line_H">
                                    <span style={{color:'#337fe5',fontSize:'14px'}}>
                                        <strong><span style={{fontSize:'14px'}}>0531-55579340</span></strong>
                                    </span>
                                    </i> <br/>
                                    <em>
                                    <span style={{color:'#337fe5',fontSize:'14px'}}>
                                    <strong><span style={{fontSize:'14px'}}>地址：</span>
                                        <span style={{fontSize:'14px'}}>济南市历下区玉兰广场二号楼三层</span></strong>
                                    </span>
                                    </em>
                                    <span style={{fontSize:'14px'}}>&nbsp;</span><br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="clear">
                    </div>
                    <Footer />
                </div>
        } else{
            this.initialData();
        }

        if (this.state.isEnter != undefined && this.state.isEnter != null) { //进入新闻详情
            return (
                <NewsPage
                    addNav={true}
                    data={this.state.data}
                    auto={true}
                    hiddenInfo={this.state.hiddenInfo}
                    contentMapping={this.state.contentMapping}
                    display="content"
                    />
            );
        }

        return(
            <div>
                {mainContent}
            </div>
        );
    },
});
module.exports=MainPage;
/**
 * Created by douxiaobin on 2016/10/27.
 */
