/**
 * Created by douxiaobin on 2016/10/27.
 */
import React from 'react';
import { render } from 'react-dom';


var AboutUs=React.createClass({

    render:function(){
        var mainContent = (
            <div className="w890 margin mar_20">
                <div className="pro_R fr bg" style={{width:'890px'}}>
                    <div className="pro_bg">
                        <span className="fr pad_L">您的位置： <a>主页</a> &gt; 关于我们</span>
                    </div>

                    <div style={{width:"800px", margin:'20px auto'}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div style={{marginBottom:"20px"}}>
                            <h1 style={{fontSize: "19px",marginBottom: "15px"}}>公司简介</h1>

                            <p><strong>山东纳利保险经纪有限公司</strong>是经中国保险监督管理委员会于2009年12月批准，于2010年1月成立的全国性、综合性保险经纪公司，
                        注册资本为人民币一千万元，公司总部设在山东济南。公司致力于全国范围内企业及个人客户拟定投保方案、选择保险人、办理投保手续；
                        协助被保险人或受益人进行索赔；再保险经纪业务；提供防灾、防损或风险评估、风险管理咨询等服务。
                            </p>

                            <p><strong>核心价值：</strong>海纳百川   惠利万众</p>

                            <p><strong>企业精神：</strong>诚信  专业  创新  合作</p>
                        </div>
                        <div>
                            <h1 style={{fontSize: "19px",marginBottom: "15px"}}>产品简介</h1>
                            <p><strong>捷惠保：</strong>立足于客户立场，深度发掘客户需求，客观分析，在众多保险产品中为客户选择适合的产品；
                                与保险主体公司深度合作，依据已有客户需求研发更多，保障全，保费低的优质产品；
                                为客户提供咨询，理赔，资料代管，车驾管服务等与保险相关的一站式服务。</p>
                        </div>
                    </div>
                </div>
            </div>
        )

        return(
            <div>
                <div className="clear">
                </div>
                {mainContent}
            </div>
        )
    }
});
module.exports=AboutUs;



