/**
 * Created by douxiaobin on 2017/02/10.
 */
import React from 'react';
import {render} from 'react-dom';

var Mpage=React.createClass({

    render:function(){
        return(
            <div>
                <div className="footer" style={{height: '35px'}}>
                    <div className="margin">
                        <p>
                            版权所有©山东纳利保险经纪有限公司&nbsp;&nbsp;&nbsp;&nbsp;
                            鲁ICP备16031176号&nbsp;&nbsp;&nbsp;&nbsp;
                            企业邮箱:it@sdnali.com&nbsp;&nbsp;&nbsp;&nbsp;
                            技术支持：山东泓信信息科技股份有限公司
                        </p>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        );
    },
});
module.exports=Mpage;
/**
 * Created by douxiaobin on 2017/02/10.
 */
