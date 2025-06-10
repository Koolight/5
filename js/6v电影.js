var rule = {
	title:'6v电影',
	host:'http://www.xb6v.com',
	url:'/fyclassfyfilter/index_fypage.html[/fyclassfyfilter/index.html]',
	filter_url:'{{fl.class}}',
	filter:{
		"dianshiju":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"国剧","v":"/guoju"},{"n":"日韩剧","v":"/rihanju"},{"n":"欧美剧","v":"/oumeiju"}]}]
	},
	searchUrl:'https://www.xb6v.com/e/search/1index.php#show=title&tempid=1&tbname=article&mid=1&dopost=search&submit=&keyboard=**;post',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{
                'User-Agent':'MOBILE_UA', // "Cookie":"searchneed=ok"
            },
    编码:'utf-8',
    timeout:5000,
    class_name:'喜剧片&动作片&爱情片&科幻片&恐怖片&剧情片&战争片&纪录片&动画片&电视剧&国剧&短剧&日韩剧&欧美剧&综艺',
 class_url:'xijupian&dongzuopian&aiqingpian&kehuanpian&kongbupian&juqingpian&zhanzhengpian&jilupian&donghuapian&dianshiju&dianshiju\/guoju&dianshiju/duanju&dianshiju\/rihanju&dianshiju\/oumeiju&ZongYi',
	play_parse:true,
	limit:6,
	推荐:'*',
    一级:'#post_container&&li;h2&&Text;img&&src;.info_date&&Text;a&&href',
    二级:{
                title:".text-overflow&&Text",
                img:"img&&src",
                desc:'.context&&p&&Text',
                content:".context&&p:eq(1)&&Text",
                tabs:'js:TABS = ["默认"]',
                lists:".context&&td",
                list_text:'a&&Text',
                 list_url:'a&&href'
            },
    搜索:'.post_hover;h2&&Text;img&&src;p&&Text;a&&href',
        }