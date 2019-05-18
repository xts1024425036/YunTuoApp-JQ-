/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 *  用途:APP 页面其余模板
 *  推荐模块化重用代码
 */
var template = {
    "money_list":
            "                     <a class=\"payment-list flex\">" +
            "                            <span class=\"pay-icon {payclass}\"><i class=\"iconfont {iconclass}\"></i></span>" +
            "                            <span class=\"flex-item\">" +
            "                                <div>{paytype}</div>" +
//            "                                <div class=\"pay-info\">王可可&nbsp;&nbsp;&nbsp;&nbsp;硚口区xxx路xxx小区</div>" +
            "                                <div class=\"pay-date\">{createdate}</div>" +
            "                            </span>" +
            "                            <span class=\"{payclass}\">{postpay}</span>" +
            "                        </a>",
    "gift_list":
            "                     <a class=\"payment-list flex\">" +
            "                            <span class=\"pay-icon {payclass}\"><i class=\"iconfont {iconclass}\"></i></span>" +
            "                            <span class=\"flex-item\">" +
            "                                <div>{paytype}</div>" +
//            "                                <div class=\"pay-info\">王可可&nbsp;&nbsp;&nbsp;&nbsp;硚口区xxx路xxx小区</div>" +
            "                                <div class=\"pay-date\">{createdate}</div>" +
            "                            </span>" +
            "                            <span class=\"{payclass}\">{giftmoney}</span>" +
            "                        </a>",
    "user_list":
            "            <div class = \"menuline\"  uid=\"{userid}\">" +
            "                <div class=\"menubefore sex_{sex}\"><i class=\"iconfont icon-wodedangxuan\"></i></div>" +
            "                <div class=\"menutext\" style=\"font-size:4.5vw;\">{name}</div>" +
            "                <div class=\"menuimg\"><i class=\"iconfont icon-right\"></i></div>" +
            "                <div class=\"menutext gray menutext_right\">" +
            "                    <span class=\"{post2}\">销售</span> " +
            "                    <span class=\"{post3}\">库管</span>" +
            "                    <span class=\"{post4}\">财务</span>" +
            "                    <span class=\"{post1}\">管理</span>" +
            "                 </div>" +
            "                <div class=\"clear\"></div>" +
            "            </div>",
    "coupon":
            "<div class=\"innercontent innercontent_cop\" style=\"\" data-pid=\"{sn}\">" +
            "	<div class=\"couponbox\">" +
            "		<div class=\"couponimg\">" +
            "			<div class=\"couponleft\">" +
            "				<div class=\"price blue\">￥&nbsp;<span>{envelopesmoney}</span></div>" +
            "			</div>" +
            "			<div class=\"couponright\">" +
            "				<div class=\"item\">{envelopesname}</div>" +
            "				<div class=\"item gray\">满{minamount}元可用</div>" +
            "				<div class=\"time gray\">有效期至 : {enddate}</div>" +
            "			</div>" +
            "			<div class=\"clear\"></div>" +
            "		</div>" +
            "		<div class=\"tip\"></div>" +
            "	</div>" +
            "</div>",
    "changesalenumber":
            "               <tr>" +
            "                   <td  width=\"25%\">{catename}</td>" +
            "                	<td  width=\"40%\">{prodname} {prodcolor}</td>" +
            "                   <td >" +
            "                       <div class=\"setnumber\" pid-sn=\"{deliveryoderitemPK.sn}\">" +
            "				<span class=\"setnumber_delete sernum_change\" data-type=\"minus\">-</span>" +
            "				<div class=\"detail_number_old\" pid-qtys=\"{prodqtys}\">{prodqtys} / </div>" +
            "				<div class=\"detail_number\" pid-qtys=\"{prodqtys}\">0</div>" +
            "				<span class=\"setnumber_add sernum_change\" data-type=\"add\">+</span>" +
            "                       </div>" +
            "			</td>" +
            "               </tr>",
    "evoesalenumber":
            "               <div class=\"set_newpro\" data-oid=\"{prodcodes}\">" +
            "                   <div style=\"width:25%\">{catename}</div>" +
            "                	<div style=\"width:40%\">{prodname} {prodcolor}</div>" +
            "                   <div style=\"width:15%\" class=\"setnumber\" pid-sn=\"{deliveryoderitemPK.sn}\">" +
            "                       <div class=\"detail_number_old\" pid-qtys=\"{prodqtys}\">{oldqtys} / {number}</div>" +
            "                   </div>" +
            "                   <div style=\"width:15%\" class=\"ope_class\"><div class=\"change_sale\" data-pid=\"{prodcodes}\">换货</div></div>" +
            "               </div>",
    "evoesalenumbernew":
            "<div class=\"new_change_pro\">" +
            "   <div style=\"width:35%\" class=\"title\">{catename}</div>" +
            "   <div style=\"width:35%\" class=\"msg\">{prodname} {defaultcolor} </div>" +
            "   <div style=\"width:10%\" class=\"number\">x {number}</div>" +
            "   <div style=\"width:10%\" class=\"delete\" data-oid=\"{prodcodes}\" data-old=\"{oldprocode}\"><i class=\"iconfont icon-round_close_light\"></i></div>" +
            "</div>",
    "sale_list":
            "                    <div class=\"list_item\"  psn=\"{sn}\" pid=\"{prodid}\" pbig=\"{pbigcate}\" pcate=\"{pcate}\">" +
            "                        <div class=\"list-text\">" +
            "                            <div class=\"type color\"  pid=\"颜色\" code=\"{prodcodes}\" default=\"{defaultcolor}\">{catename} <span class=\"section_text\">{defaultcolor}</span></div>" +
            "                            <div class=\"pro_message_c number\">" +
            "                                规格：<span>{prodname}</span>" +
            "                            </div>" +
            "                            <div class='pro_message_c'>" +
            "                                货号：<span>{prodid}</span>" +
            "                            </div>" +
            "                        </div>" +
            "                        <div class=\"add detail_number_add\" type=\"add\" pcolor='{defaultcolor}'>" +
            "                            <i class=\"iconfont icon-tianjia\"></i>" +
            "                        </div>" +
            "                    </div>",
    "pro_list":
            "                    <div class=\"list_item\"  psn=\"{sn}\" pid=\"{prodid}\" pbig=\"{pbigcate}\" pcate=\"{pcate}\">" +
            "                        <div class=\"list-text\">" +
            "                            <div class=\"type color\" pid=\"颜色\" code=\"{prodcodes}\" default=\"{defaultcolor}\"> {catename}<span class=\"section_text\">{defaultcolor}</span></div>" +
            "                            <div class=\"pro_message_c number\">" +
            "                                   规格：<span>{prodname}</span>" +
            "                            </div>" +
            "                            <div class=\"pro_message_c\">" +
            "                                  货号：<span>{prodid}</span>" +
            "                            </div>" +
            "                        </div>" +
            "                        <div class=\"add detail_number_add\" type=\"add\" pcolor='{defaultcolor}'>" +
            "                            <i class=\"iconfont icon-edit\"></i>" +
            "                        </div>" +
            "                    </div>",
    "sale_small":
            "<div class=\"cate_item_c\" data-pid=\"{condistributorcatePK.cateid}\">{catename}</div>",
    "sale_big":
            " <div class=\"salebig_menu\" data-pid=\"{bigcateid}\">{catename}</div>",
    "sale_color":
            "<li code=\"{prodcodes}\" psn='{sn}'>{prodcolor}</li>\n",
    "cart_del": " <div class=\"content list_item\" style=\"background:#FFFFFF;\" pid=\"{prodid}\" pcode=\"{prodcodes}\">" +
            "                <div class=\"innercontent_cart list_item_detail\" style=\"padding:3vw 0;line-height:.6rem;\">" +
            "                    <div class=\"left\">{catename} <span class=\"section_text color\" pid=\"颜色\" default=\"{defaultcolor}\" type=\"color\" code=\"{prodcodes}\">{prodcolor}</span></div>" +
            "                    <div class=\"clear\"></div>" +
            "                    <div class=\"left_cart_class\">" +
            "                       <div>规格：{prodname} </div>" +
            "                       <div>货号：{prodid}<span class=\"remark_class_{remarks}\"> (remarks)</span></div>" +
            "                    </div>" +
            "                    <div class=\"right_1\" style=\"text-align: center;\">" +
            "                        <span class=\"detail_number_delete detail_cart\"  type=\"minus\">-</span>" +
            "                        <div class=\"detail_number main\">{number}</div>" +
            "                        <span class=\"detail_number_add detail_cart\"  type=\"add\">+</span>" +
            "                    </div>" +
            "                    <div class=\"clear\"></div>" +
            "                </div>" +
            "            </div>",
    "add_new_change":
            "                    <div class=\"innercontent list_item_detail\" style=\"padding:3vw 2vw;line-height:.6rem;\" data-oid=\"{prodcodes}\">" +
            "                    <div class=\"left\">{catename} <span class=\"section_text color\" pid=\"颜色\" default=\"{defaultcolor}\" type=\"color\" code=\"{prodcodes}\">{prodcolor}</span></div>" +
            "                    <div class=\"clear\"></div>" +
            "                    <div class=\"left_cart_class\">" +
            "                       <div>规格：{prodname} </div>" +
            "                       <div>货号：{prodid}<span class=\"remark_class_{remarks}\"> (remarks)</span></div>" +
            "                    </div>" +
            "                        <div class=\"right_1\" style=\"text-align: center;\">" +
            "                            <div class=\"setnumber\" pid-sn=\"{deliveryoderitemPK.sn}\">" +
            "                                <span class=\"setnumber_delete sernum_change\" data-type=\"minus\">-</span>" +
            "                                <div class=\"detail_number\">{number}</div>" +
            "                                <span class=\"setnumber_add sernum_change\" data-type=\"add\">+</span>" +
            "                            </div>" +
            "                        </div>" +
            "                        <div class=\"clear\"></div>" +
            "                    </div>",
    "add_old_change":
            "                    <div class=\"innercontent list_item_detail\" style=\"padding:3vw 2vw;line-height:.6rem;\" data-oid=\"{prodcodes}\">" +
            "                    <div class=\"left\">{catename} <span class=\"section_text color\" pid=\"颜色\" default=\"{defaultcolor}\" type=\"color\" code=\"{prodcodes}\">{prodcolor}</span></div>" +
            "                    <div class=\"clear\"></div>" +
            "                    <div class=\"left_cart_class\">" +
            "                       <div>规格：{prodname} </div>" +
            "                       <div>货号：{prodid}</div>" +
            "                    </div>" +
            "                        <div class=\"right_1\" style=\"text-align: center;\">" +
            "                            <div class=\"setnumber\" pid-sn=\"{deliveryoderitemPK.sn}\">" +
            "                                <span class=\"setnumber_delete sernum_change\" data-type=\"minus\">-</span>" +
            "                                <div class=\"detail_number_old\" pid-qtys=\"{oldqtys}\">{oldqtys} / </div>" +
            "                                <div class=\"detail_number\">{number}</div>" +
            "                                <span class=\"setnumber_add sernum_change\" data-type=\"add\">+</span>" +
            "                            </div>" +
            "                        </div>" +
            "                        <div class=\"clear\"></div>" +
            "                    </div>",

}

