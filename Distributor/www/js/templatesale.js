/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * 用途:货品列表,货品相关模板
 * 推荐模块化重用代码
 */
var template = {
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
}