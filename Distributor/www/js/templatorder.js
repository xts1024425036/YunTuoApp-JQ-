/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * 用途:订单处理,订单报表系列模板统一管理
 * 推荐模块化重用代码
 */


var template = {
    "pay_storeorder":
            " <div class=\"log_item log_item_pay box_pay_item\" pid=\"{leaseorderid}\">" +
            "   <div class=\"log_list_title\">" +
            "       <div class=\"log_list_time\">" +
            "       <input id='{leaseorderid}_id' class=\"select_checkbox pay_class\" type=\"checkbox\" pid=\"{leaseorderid}\">{createdate} ( 驿站订单 )" +
            "        <label for='{leaseorderid}_id'></label>" +
            "   </div>" +
            "   <div class=\"delete_order\"><i class='iconfont icon-delete'></i></div>" +
            "   </div>" +
            "   <div class=\"log_item_delivery_detail log_item_pay_detail\">" +
            "       <ul>" +
            "           <li class=\"delivery_detail_title\">购买数量：</li>" +
            "           <li class=\"delivery_detail_text\">{qtys} 格 ( 共 {acreages} 立方 )</li>" +
            "       </ul>" +
            "       <ul>" +
            "           <li class=\"delivery_detail_title\">开始时间：</li>" +
            "           <li class=\"delivery_detail_text\">{startdate}</li>" +
            "       </ul>" +
            "       <ul>" +
            "           <li class=\"delivery_detail_title\">结束时间：</li>" +
            "           <li class=\"delivery_detail_text\">{enddate}</li>" +
            "       </ul>" +
            "       <ul>" +
            "           <li class=\"delivery_detail_title\">购买月份：</li>" +
            "           <li class=\"delivery_detail_text\">{dqtys} 个月</li>" +
            "       </ul>" +
            "   </div>" +
            "   <div class=\"log_total\">" +
            "       <ul>" +
            "           <li>总计：<span class='proqtys_c'>{dqtys}</span> 月 <span class='qtys_c'>{qtys} 格</span></li>" +
            "           <li>总价：<span class=\"price_class\" data-pid='{leasecost}'> ￥ {leasecost}</span></li>" +
            "       </ul>" +
            "   </div>" +
            "</div>",
    "pay_need":
            " <div class=\"log_item log_item_pay\" pid=\"{deliveryoderid}\" style=\"background:#fef6f7\">" +
            "   <div class=\"log_list_title\">" +
            "       <div class=\"log_list_time\">" +
            "       <input id='{deliveryoderid}_id' class=\"select_checkbox pay_class\" type=\"checkbox\" pid=\"false\">{createdate}" +
            "        <label for='{deliveryoderid}_id'></label>" +
            "   </div>" +
//        "   <div class=\"cancel_order\">申请取消</div>" +
            "   <div class=\"log_list_person\">{customer}</div>" +
            "   </div>" +
            "   <div class=\"log_item_delivery_detail log_item_pay_detail\">" +
            "       <ul>" +
            "           <li class=\"delivery_detail_title\">客户地址：</li>" +
            "           <li class=\"delivery_detail_text\">{customeradress}{addressdetailed}</li>" +
            "       </ul>" +
            "       <ul>" +
            "           <li class=\"delivery_detail_title\">提货地址：</li>" +
            "           <li class=\"delivery_detail_text\">{warehouseadress}</li>" +
            "       </ul>" +
            "       <ul>" +
            "           <li class=\"delivery_detail_title\">货品信息：</li>" +
            "           <li class=\"delivery_detail_text saleitem_class\">{itemlist}</li>" +
            "       </ul>" +
            "       <ul>" +
//        "           <li class=\"delivery_detail_title\">送装费：</li>" +
//        "           <li class=\"delivery_detail_text\"><div>配送费:￥<span>{transprotfee}</span></div><div>安装费:￥<span>{installationfee}</span></div><div class='otherfee' style='width: 40vw;'>其他费用:￥<span>{otherfee}</span></div></li>" +
            "       </ul>" +
            "   </div>" +
            "   <div class=\"log_total\" >" +
            "       <ul>" +
            "           <li>货品总数：<span class='proqtys_c'>{prodqtys}</span>件 <span class='qtys_c'>{qtys} 包</span></li>" +
            "           <li>待补差价：<span class=\"price_class\" data-pid='{spreadfee}'>￥{spreadfee}</span></li>" +
            "       </ul>" +
            "   </div>" +
            "</div>",
    "pay_delorder":
            " <div class=\"log_item log_item_pay ordertype_{ordertype}\" pid=\"{deliveryoderid}\" sid=\"{issample}\" wid=\"{warehousenumber}\" whid=\"{warehouseid}\" did=\"{devdate}\" vid=\"{prodvolume}\" rid=\"{returntype}\">" +
            "   <div class=\"log_list_title\">" +
            "       <div class=\"log_list_time\">" +
            "       <input id='{deliveryoderid}_id' class=\"select_checkbox pay_class\" type=\"checkbox\" pid=\"false\">{createdate}" +
            "        <label for='{deliveryoderid}_id'></label>" +
            "   </div>" +
            "   <div class=\"delete_order\"><i class='iconfont icon-delete'></i></div>" +
            "   <div class=\"log_list_person\">{customer}</div>" +
            "   </div>" +
            "   <div class=\"log_item_delivery_detail log_item_pay_detail\">" +
            "       <ul>" +
            "           <li class=\"delivery_detail_title\">单号：</li>" +
            "           <li class=\"delivery_detail_text saleitem_class\">{deliveryoderid}</li>" +
            "       </ul>" +
            "       <ul>" +
            "           <li class=\"delivery_detail_title\">预约送装：</li>" +
            "           <li class=\"delivery_detail_text saleitem_class\">{devdate}</li>" +
            "       </ul>" +
            "       <ul>" +
            "           <li class=\"delivery_detail_title\">客户地址：</li>" +
            "           <li class=\"delivery_detail_text\">{customeradress}{addressdetailed}</li>" +
            "       </ul>" +
            "       <ul class=\"default_show show_type_{ordertype}\">" +
            "           <li class=\"delivery_detail_title\">提货地址：</li>" +
            "           <li class=\"delivery_detail_text\">{warehouseadress}</li>" +
            "       </ul>" +
            "       <ul>" +
            "           <li class=\"delivery_detail_title default_show show_type_{ordertype}\">货品信息：</li>" +
            "           <li class=\"delivery_detail_title other_show show_type_{ordertype}\">维修信息：</li>" +
            "           <li class=\"delivery_detail_text saleitem_class\">{itemlist}</li>" +
            "       </ul>" +
            "       <ul>" +
//        "           <li class=\"delivery_detail_title\">送装费：</li>" +
//        "           <li class=\"delivery_detail_text\"><div>配送费:￥<span>{transprotfee}</span></div><div>安装费:￥<span>{installationfee}</span></div><div class='otherfee' style='width: 40vw;'>其他费用:￥<span>{otherfee}</span></div></li>" +
            "       </ul>" +
            "   </div>" +
            "   <div class=\"log_total\">" +
            "       <ul>" +
            "           <li class=\"other_show show_type_{ordertype}\">损点总数：<span class='proqtys_c'>{prodqtys}</span> 处</span></li>" +
            "           <li class=\"default_show show_type_{ordertype}\">货品总数：<span class='proqtys_c'>{prodqtys}</span> 件 <span class='qtys_c'>{qtys} 包</span></li>" +
            "           <li>总价：<span class=\"price_class\" data-pid='{fiprice}'> ￥ {fiprice}</span></li>" +
            "       </ul>" +
            "   </div>" +
            "</div>",
    "pay_spellorder":
            " <div class=\"log_item log_item_pay ordertype_{ordertype}\" pid=\"{deliveryoderid}\">" +
            "   <div class=\"log_list_title\">" +
            "       <div class=\"log_list_time\">" +
            "       <input id='{deliveryoderid}_id' class=\"select_checkbox pay_class\" type=\"checkbox\" pid=\"false\">{createdate}" +
            "        <label for='{deliveryoderid}_id' order =\"1\"></label>" +
            "   </div>" +
            "   <div class=\"log_list_person\">{customer}</div>" +
            "   </div>" +
            "   <div class=\"log_item_delivery_detail log_item_pay_detail\">" +
            "       <ul>" +
            "           <li class=\"delivery_detail_title\">单号：</li>" +
            "           <li class=\"delivery_detail_text saleitem_class\">{deliveryoderid}</li>" +
            "       </ul>" +
            "       <ul>" +
            "           <li class=\"delivery_detail_title\">客户地址：</li>" +
            "           <li class=\"delivery_detail_text\">{customeradress}{addressdetailed}</li>" +
            "       </ul>" +
            "       <ul class=\"default_show show_type_{ordertype}\">" +
            "           <li class=\"delivery_detail_title\">提货地址：</li>" +
            "           <li class=\"delivery_detail_text\">{warehouseadress}</li>" +
            "       </ul>" +
            "   </div>" +
            "   <div class=\"log_total\">" +
            "       <ul>" +
            "           <li class=\"default_show show_type_{ordertype}\">货品总数：<span class='proqtys_c'>{prodqtys}</span> 件 <span class='qtys_c'>{qtys} 包</span></li>" +
            "           <li>总价：<span class=\"price_class\" data-pid='{fiprice}'> ￥ {fiprice}</span></li>" +
            "       </ul>" +
            "   </div>" +
            "</div>",
    "proitem":
            "<span>{prodname} {cate} ( {qtys} 包 )</span>",
    "wxproitem":
            "<span>{prodname} {cate} ( {qtys} 处 )</span>",
    "track":
            "                  <a class=\"is-ing list_class\"  pid=\"{deliveryspoderid}\">" +
            "                        <span class=\"time-table\">{date}<br>{time}</span>" +
            "                        <span class=\"time-bg\">" +
            "                            <i class=\"iconfont icon-shijian\"></i>" +
            "                        </span>" +
            "                        <span class=\"flex-item\">{remarks}</span>" +
            "                    </a>" +
            "                    <div class=\"timeline\"><div class=\"items_content_img\" pid=\"{status}\"></div></div><div class=\"clear\"></div>",
    "trackpro":
            "                  <a class=\"is-ing list_class\"  pid=\"{deliveryspoderid}\">" +
            "                        <span class=\"time-table\">{date}<br>{time}</span>" +
            "                        <span class=\"time-bg\">" +
            "                            <i class=\"iconfont icon-shijian\"></i>" +
            "                        </span>" +
            "                        <span class=\"flex-item\">{problemdesc}</span>" +
            "                    </a>" +
            "                    <div class=\"timeline\"><div class=\"items_content_img\" pid=\"{afid}\"></div></div><div class=\"clear\"></div>",
    "order_list_main":
            "   <div class=\"log_item\" pid=\"{deliveryoderid}\" data-sid=\"{statusname}\">" +
            "		<div class=\"del_message\">" +
            "      		<div class=\"log_list_title\">" +
            "                       <div class=\"log_list_time\">{createdate}<span class='title_cusname'> {customer}</span></div>" +
            "                       <div class=\"log_list_other log_right\">{statusname}</div>" +
//            "                     <div class=\"log_list_other\">{cusphone}</div>" +
            "                   </div>" +
            "                   <div class=\"frame_list_item\">" +
            "                       {itemhtml}" +
            "                   </div>" +
            "           </div>" +
            "           <div class=\"log_total\">" +
            "               <ul>" +
            "                   <li>总送装费：<span class=\"del_price\">￥{fiprice}</span></li>" +
            "                   <li>总数：<span class=\"pro_qtys\">{prodqtys}</span>件</li>" +
            "               </ul>" +
            "          <div class=\"operation_list\">{operationhtml}</div>" +
            "       </div>" +
            " </div>",
    "order_list_inspaction":
            "   <div class=\"log_item\" pid=\"{deliveryoderid}\" data-sid=\"{statusname}\">" +
            "		<div class=\"del_message\">" +
            "      		<div class=\"log_list_title\">" +
            "                       <div class=\"log_list_time\">{createdate}<span class='title_cusname'> {customer}</span></div>" +
            "                       <div class=\"log_list_other log_right\">{statusname}</div>" +
            "                   </div>" +
            "                   <div class=\"frame_list_item\">" +
            "                       {itemhtml}" +
            "                   </div>" +
            "           </div>" +
            "           <div class=\"log_total\">" +
            "               <ul>" +
//            "                   <li>总送装费：<span class=\"del_price\">￥{fiprice}</span></li>" +
            "                   <li>总数：<span class=\"pro_qtys\">{prodqtys}</span>件</li>" +
            "               </ul>" +
            "          <div class=\"operation_list\">{operationhtml}</div>" +
            "       </div>" +
            " </div>",
    "order_list_fiting":
            "            <div class=\"main-list\" data-pid=\"{deliveryoderid}\">" +
            "                <div class=\"bg-shadow\">" +
            "                    <div class=\"info-bg\">" +
            "                        <div class=\"user-time flex\">" +
            "                            <i class=\"iconfont icon-shijian\"></i>" +
            "                            <span>{createdate}</span>" +
            "                            <span class=\"flex-item txtr\">{customer}</span>" +
            "                        </div>" +
            "                        <div class=\"address\">{customeradress}</div>" +
            "                    </div>" +
            "                    <div class=\"list-all\">" +
            "                           {itemhtml}" +
            "                    </div>" +
            "                </div>" +
            "                <div class=\"add txtr\">" +
            "                    <div class=\"all-number txtc\" style=\"display:inline-block;\">总数：" +
            "                        <span style=\"color:#5478C4\">{prodqtys}</span>&nbsp;件" +
            "                    </div>" +
            "                    <div class=\"all-number txtr\" style=\"display:inline-block;\">总送装费：" +
            "                        <span style=\"color:#DF2F2F\">￥{fiprice}</span>" +
            "                    </div>" +
            "                </div>" +
            "                <div class=\"add-btn txtr\">" +
            "                    <div class=\"sup_order {otype}\">退换单</div>" +
            "                    <div class=\"center\">确定</div>" +
            "                </div>" +
            "            </div>",
    "pro_list_main":
            "   <div class=\"log_item\" pid=\"{deliveryoderid}\" data-sid=\"{statusname}\">" +
            "		<div class=\"del_message\">" +
            "      		<div class=\"log_list_title\">" +
            "                       <div class=\"log_list_time\">{createdate}<span class='title_cusname'> {customer}</span></div>" +
//            "                     <div class=\"log_list_other\">{cusphone}</div>" +
            "                   </div>" +
            "                   <div class=\"frame_list_item\">" +
            "                       <div class=\"desc_class item_colume\"><span class='title'>问题描述</span><span class='msg'>{problemdescitem}</span></div>" +
            "                       <div class=\"clear line_bottom\"></div>" +
            "                       <div class=\"solution_class item_colume\"><span class='title'>解决方案</span><span class='msg'>{solutionitem}</span></div>" +
            "                   </div>" +
            "           </div>" +
            " </div>",
    "leasorder_list":
            "   <div class=\"log_item\" pid=\"{deliveryoderid}\" data-sid=\"{statusname}\">" +
            "		<div class=\"del_message\">" +
            "      		<div class=\"log_list_title\">" +
            "                       <div class=\"log_list_time\">{createdate}</div>" +
            "                   </div>" +
            "                   <div class=\"frame_list_item\">" +
            "                       <div class=\"list_item\" pid=\"{salesoderid}\">" +
            "                       <div  class=\"list_item_detail list_item_id\">" +
            "                           <div class=\"item_detail_lease\">购买数量 <span>{qtys}格 ( 共{acreages}平方 )</span></div>" +
            "                           <div class=\"item_detail_lease\">开始时间 <span>{startdate}</span></div>" +
            "                           <div class=\"item_detail_lease\">结束时间 <span>{enddate}</span></div>" +
            "                           <div class=\"item_detail_lease\">购买月份 <span>{dqtys} 个月</span></div>" +
            "                       </div>" +
            "                   </div>" +
            "               </div>" +
            "            </div>" +
            "           <div class=\"log_total\">" +
            "               <ul>" +
            "                   <li>总费用：<span class=\"del_price\">￥{leasecost}</span></li>" +
            "                   <li>总数：<span class='proqtys_c'>{dqtys}</span> 月 <span class='qtys_c'>{qtys} 格</span></li>" +
            "               </ul>" +
            "       </div>" +
            " </div>",
    "order_list_item":
            "<div class=\"list_item\" pid=\"{salesoderid}\">" +
            "   <div  class=\"list_item_detail list_item_id\">" +
            "      <div class=\"item_detail_name\">{catename} <span class=\"list_color\">{prodcolor}</span></div>" +
            "      <div class=\"item_detail_size\">规格：{prodname}</div>" +
            "      <div class=\"item_detail_color\">货号： {prodid}</div>" +
            "      <div class=\"item_detail_number\">x {prodqtys}</div>" +
            "   </div>" +
            "</div>",
    "order_list_fitingitem":
            "                         <ul class=\"list-text\">" +
            "                            <li class=\"name\">{catename}<span class=\"color\">{prodcolor}</span><span class=\"fr\">x1</span></li>" +
            "                            <li class=\"type\">规格：<span>{prodname}</span></li>" +
            "                            <li class=\"namber clearfix\">货号：<span>{prodid}</span><span class=\"fr change_fr\" data-item=\"{prodcodes}\">更换配件<div class=\"icon_c\"><i class=\"iconfont icon-zhankai\"></i></div></span>" +
            "                                <div class=\"table-info\">" +
            "                                    <textarea rows=\"3\" cols=\"40\" placeholder=\"请填写配件描述及备注\"></textarea>" +
            "                                </div>" +
            "                            </li>" +
            "                         </ul>",
    "lease_order_item":
            "<div class=\"list_item\" pid=\"{salesoderid}\">" +
            "   <div  class=\"list_item_detail list_item_id\">" +
            "      <div class=\"item_detail_name\">{catename} <span class=\"list_color\">{prodcolor}</span></div>" +
            "      <div class=\"item_detail_size\">规格：{prodname}</div>" +
            "      <div class=\"item_detail_color\">货号： {prodid}</div>" +
            "      <div class=\"item_detail_number\">x {prodqtys}</div>" +
            "   </div>" +
            "</div>",
    "order_operation_track":
            "       <div class=\"sup_order {otype}\"><a href=\"javascript:void(0);\">退换单</a></div>" +
//            "       <div class=\"sup_order {otype}\"><a href=\"javascript:void(0);\">退换单-原单 :{suporderid}</a></div>" +
            "       <div id=\"log_return_id\" class=\"log_list_tool\" data-sid=\"{statusname}\" pid=\"{isafremark}\"><a href=\"javascript:void(0);\">送装跟踪</a></div>",
    "order_operation_inspaction":
            "       <div class=\"sup_order {otype}\"><a href=\"javascript:void(0);\">退换单</a></div>" +
//            "       <div class=\"sup_order {otype}\"><a href=\"javascript:void(0);\">退换单-原单 :{suporderid}</a></div>" +
            "       <div id=\"log_inspection_id\" class=\"log_list_tool\" data-sid=\"{statusname}\" pid=\"{deliveryoderid}\"><a href=\"javascript:void(0);\">订单拣货</a></div>",
    "order_operation_change":
            "       <div class=\"log_list_tool sup_order {otype}\"><a href=\"javascript:void(0);\">退换单</a></div>" +
            "       <div class=\"log_list_tool log_cancel_c status_cancel_{displayshwo}\"><a href=\"javascript:void(0);\">订单取消</a></div>" +
            "       <div class=\"log_list_tool log_change_c show_change_{displayshwo}\"><a href=\"javascript:void(0);\">退货</a></div>" +
            "       <div class=\"log_list_tool log_new_c \"><a href=\"javascript:void(0);\">再来一单</a></div>" +
            "       <div class=\"log_list_tool log_change_c show_{isupdate}\"><a href=\"javascript:void(0);\">处理订单</a></div>",
    "order_eva":
            "       <div class=\"log_list_tool sup_order {otype}\"><a href=\"javascript:void(0);\">退换单</a></div>" +
            "       <div class=\"log_list_tool log_change_c show_change\"><a href=\"javascript:void(0);\">换货</a></div>",
    "orderdetails":
            "               <li class=\"name\">{catename}<span class=\"color\">{prodcolor}</span></li>" +
            "               <li class=\"type\">规格：<span>{psize}</span></li>" +
            "               <li class=\"namber clearfix\">货号：<span>62-HUOXCS212-1</span><span class=\"fr\">x{prodqtys}</span></li>" +
            "               <li class=\"separate\"></li>",
    "service_select":
            "                    <div class=\"cate_select\" data-pid=\"{pbigcate}\" data-did=\"{pcate}\">" +
            "                        <div class=\"ser_bigtype\">{bigname}</div>" +
            "                        <div class=\"ser_small\">{catename}</div>" +
            "                        <div class=\"setnumber\">" +
            "                            <span class=\"setnumber_delete sernum_change\" data-type=\"minus\">-</span> " +
            "                            <div class=\"detail_number\">{prodqtys}</div>" +
            "                            <span class=\"setnumber_add sernum_change\" data-type=\"add\">+</span> " +
            "                        </div>" +
            "                    </div>",
    "mapselect":
            "            <div class=\"select_item\" lng=\"{point.lng}\" lat=\"{point.lat}\" data-city=\"{city}\" data-province=\"{province}\" pad =\"{address}{title}\">" +
            "                <table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">" +
            "                    <tr>" +
            "                        <td width=\"10%\"><div class=\"map_dot\">&nbsp;</div></td>" +
            "                        <td class=\"addressitem_title\">" +
            "                            {title}" +
            "                            <div class=\"gray\" style=\"font-size:3vw;\">{address}</div>" +
            "                        </td>" +
            "                    </tr>" +
            "                </table>" +
            "            </div>",
    "evoluate":
            "               <div class=\"list-item\" data-oid=\"{deliveryoderid}\">" +
            "                    <div class=\"head-photo flex\">" +
            "                        <img src=\"../../images/head-photo.png\">" +
            "                        <span class=\"head-title flex-item\">{createdate}<span class=\"title_customer\">客户：{customer}</span></span>" +
            "                        <span class=\"txtr open-evo\">发布</span>" +
            "                    </div>" +
            "                    <ul class=\"main-info\">" +
//            "                        <li></li>" +
            "                        <li>{customeradress}</li>" +
            "                    </ul>" +
            "                    <div class=\"add txtl\">" +
            "                        <div class=\"all-number txtc\" style=\"display:inline-block;\">总数：" +
            "                            <span style=\"color:#5478C4\">{prodqtys}</span>&nbsp;件" +
            "                        </div>" +
            "                        <div class=\"all-number txtr\" style=\"display:inline-block;ma\">总送装费：" +
            "                            <span style=\"color:#DF2F2F\">￥{fiprice}</span>" +
            "                        </div>" +
            "                    </div>" +
            "                    <div class=\"star-list flex\">" +
            "                        <div class=\"star star_not\">" +
            "                            <a href=\"#\" class=\"flex-item on\" data-pid=\"极差\"><i class=\"iconfont icon-xingxing\" pid=\"is-ok\"></i></a>" +
            "                            <a href=\"#\" class=\"flex-item on\" data-pid=\"较差\"><i class=\"iconfont icon-xingxing\"></i></a>" +
            "                            <a href=\"#\" class=\"flex-item on\" data-pid=\"一般\"><i class=\"iconfont icon-xingxing\" pid=\"is-ok\" pid=\"is-ok\"></i></a>" +
            "                            <a href=\"#\" class=\"flex-item on\" data-pid=\"很好\"><i class=\"iconfont icon-xingxing\" pid=\"is-ok\"></i></a>" +
            "                            <a href=\"#\" class=\"flex-item on\" data-pid=\"极好\"><i class=\"iconfont icon-xingxing\" pid=\"not-ok\"></i></a>" +
            "                            <span class=\"evo_message\">极好</span>" +
            "                        </div>" +
            "                        <div class=\"write txtr flex-item\">写评价<i class=\"iconfont icon-bottom\"></i></div>" +
            "                    </div>" +
            "                    <div class=\"area-pop\">" +
            "                       <textarea class=\"area-c\" placeholder=\"你的评价能帮助其他的小伙伴儿哟~\"></textarea>" +
            "                    </div>" +
            "                </div>",
    "evook":
            "			<div class=\"list-item\">" +
            "				<div class=\"head-photo flex\">" +
            "					<img src=\"../../images/head-photo.png\">" +
            "					<div class=\"head-title flex-item\">" +
            "						<div class=\"star star-ok\">" +
            "							<a href=\"#\" class=\"flex-item star-1 set-star-{upstairsSelect}\"><i class=\"iconfont icon-xingxing\"></i></a>" +
            "							<a href=\"#\" class=\"flex-item star-2 set-star-{upstairsSelect}\"><i class=\"iconfont icon-xingxing\"></i></a>" +
            "							<a href=\"#\" class=\"flex-item star-3 set-star-{upstairsSelect}\"><i class=\"iconfont icon-xingxing\"></i></a>" +
            "							<a href=\"#\" class=\"flex-item star-4 set-star-{upstairsSelect}\"><i class=\"iconfont icon-xingxing\"></i></a>" +
            "							<a href=\"#\" class=\"flex-item star-5 set-star-{upstairsSelect}\"><i class=\"iconfont icon-xingxing\"></i></a>" +
            "						</div>" +
            "					</div>" +
            "					" +
            "				</div>" +
            "				<ul class=\"main-info\">" +
            "					<li>{createdate}<span>客户：{customer}</span></li>" +
            "					<li>{customeradress}</li>" +
            "				</ul>" +
            "				<div class=\"text\">" +
            "					{shopName}" +
            "				</div>" +
            "			</div>",
}