let body= $response.body; 
var obj = JSON.parse(body); 
obj.data.user.medalList=[{
        "name": "大魔王",
        "endTime": "2286-02-22 02:44:53",
        "imgUrl": "http://img.rr.tv/cover/20200424/o_1587720799676.png",
        "id": 1
      }];
 obj.data.user.privilegeList=[{
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "video",
        "action": "play",
        "function": "originalPainting",
        "func": "originalPainting",
        "description": "解锁原画",
        "icon": "jiesuoyuanhua",
        "endTime": 9999987654321
      }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "mall",
        "action": "sale",
        "function": "mallDiscount",
        "func": "mallDiscount",
        "description": "龙醇商城九折",
        "icon": "longchunshangcheng",
        "endTime": 9999987654321
      }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "article",
        "action": "write",
        "function": "highLight",
        "func": "highLight",
        "description": "高亮发帖",
        "icon": "gaoliangfatie",
        "endTime": 9999987654321
      }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "nickName",
        "action": "show",
        "function": "nameHighLight",
        "func": "nameHighLight",
        "description": "高亮昵称",
        "icon": "gaoliangnicheng",
        "endTime": 9999987654321
      }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "comment",
        "action": "write",
        "function": "highLight",
        "func": "highLight",
        "description": "高亮评论回复",
        "icon": "huifu",
        "endTime": 9999987654321
      }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "danmu",
        "action": "send",
        "function": "superBarrageBlue",
        "func": "superBarrageBlue",
        "description": "超级弹幕",
        "icon": "chaojidanmu",
        "endTime": 9999987654321
      }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "video",
        "action": "play",
        "function": "vipVideo",
        "func": "vipVideo",
        "description": "勋章专享剧集",
        "icon": "zhuanxiangjuji",
        "endTime": 9999987654321
      }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "growth",
        "action": "play",
        "function": "0.4",
        "func": "0.4",
        "description": "看剧经验+40%",
        "icon": "jingyanzhijiacheng",
        "endTime": 9999987654321
      }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "video",
        "action": "play",
        "function": "noLimit",
        "func": "noLimit",
        "description": "看剧无限制",
        "icon": "kanjuwuxianzhi",
        "endTime": 9999987654321
      }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "video",
        "action": "play",
        "function": "noAd",
        "func": "noAd",
        "description": "看剧无广告",
        "icon": "kanjuwuguanggao",
        "endTime": 9999987654321
      }]; 
      obj.data.user.vipMedal={
        "name": "大魔王",
        "endTime": "2286-02-22 02:44:53",
        "imgUrl": "http://img.rr.tv/cover/20200424/o_1587720799676.png",
        "id": 1,
        "isExpired": false
      };    
$done({body: JSON.stringify(obj)});