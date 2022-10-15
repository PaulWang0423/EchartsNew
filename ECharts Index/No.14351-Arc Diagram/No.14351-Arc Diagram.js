var lineColor='#e53935';

var nodes = [
  {name: 'what if？', symbolSize: 2, category: 'what if？'},
  {name: '恰到好处的孤独', symbolSize: 3, category: '恰到好处的孤独'},
  {name: '奇特的一生', symbolSize: 4, category: '奇特的一生'},
  {name: '二孩时代', symbolSize: 4, category: '二孩时代'},
  {name: '妈妈是最初的老师', symbolSize: 5, category: '妈妈是最初的老师'},
  {name: '世界因你而温柔', symbolSize: 5, category: '世界因你而温柔'},
  {name: '因为孤独的缘故', symbolSize: 5, category: '因为孤独的缘故'},
  {name: '幸福从不缺席', symbolSize: 5, category: '幸福从不缺席'},
  {name: '冰岛迷梦', symbolSize: 6, category: '冰岛迷梦'},
  {name: '窗边的小豆豆', symbolSize: 6, category: '窗边的小豆豆'},
  {name: '我不', symbolSize: 6, category: '我不'},
  {name: '从容的底气', symbolSize: 6, category: '从容的底气'},
  {name: '无聊的人生，我死也不要', symbolSize: 6, category: '无聊的人生，我死也不要'},
  {name: '种满院植物，安守四季时光', symbolSize: 6, category: '种满院植物，安守四季时光'},
  {name: '和你一起，我不怕老去', symbolSize: 6, category: '和你一起，我不怕老去'},
  {name: '禅宗兴起', symbolSize: 6, category: '禅宗兴起'},
  {name: '局外人', symbolSize: 6, category: '局外人'},
  {name: '容忍与自由', symbolSize: 7, category: '容忍与自由'},
  {name: '我决定活得有趣', symbolSize: 7, category: '我决定活得有趣'},
  {name: '不如任性过生活', symbolSize: 7, category: '不如任性过生活'},
  {name: '品味四讲', symbolSize: 7, category: '品味四讲'},
  {name: '蒋勋破解梵高之美', symbolSize: 7, category: '蒋勋破解梵高之美'},
  {name: '爱，让我们彼此听见', symbolSize: 7, category: '爱，让我们彼此听见'},
  {name: '没有什么了不起', symbolSize: 7, category: '没有什么了不起'},
  {name: '坐在路边鼓掌的人', symbolSize: 7, category: '坐在路边鼓掌的人'},
  {name: '自由疯长', symbolSize: 7, category: '自由疯长'},
  {name: '小豆豆与我', symbolSize: 8, category: '小豆豆与我'},
  {name: '蒋勋破解莫奈之美', symbolSize: 9, category: '蒋勋破解莫奈之美'},
  {name: '我承诺给你的美丽新世界', symbolSize: 10, category: '我承诺给你的美丽新世界'},
  {name: '无关岁月', symbolSize: 11, category: '无关岁月'},
  {name: '以自己喜欢的方式过一生', symbolSize: 11, category: '以自己喜欢的方式过一生'},
  {name: '吴哥之美', symbolSize: 11, category: '吴哥之美'},
  {name: '蒋勋破解高更之美', symbolSize: 11, category: '蒋勋破解高更之美'},
  {name: '孤独六讲', symbolSize: 12, category: '孤独六讲'},
  {name: '水浒传', symbolSize: 13, category: '水浒传'},
  {name: '蒋勋破解米开朗基罗', symbolSize: 14, category: '蒋勋破解米开朗基罗'},
  {name: '蒋勋破解达芬奇之美', symbolSize: 14, category: '蒋勋破解达芬奇之美'},
  {name: '生活十讲', symbolSize: 15, category: '生活十讲'},
  {name: '崭新的理所当然', symbolSize: 15, category: '崭新的理所当然'},
  {name: '美的沉思', symbolSize: 26, category: '美的沉思'},
  {name: '文学', symbolSize: 1, category: '文学'},
  {name: '篆刻', symbolSize: 1, category: '篆刻'},
 {name: '梦想', symbolSize: 1, category: '梦想'},
  {name: '长篇', symbolSize: 1, category: '长篇'},
  {name: '宠物', symbolSize: 1, category: '宠物'},
  {name: '佛教', symbolSize: 1, category: '佛教'},
  {name: '服饰', symbolSize: 1, category: '服饰'},
  {name: '命运', symbolSize: 1, category: '命运'},
  {name: '宋朝', symbolSize: 1, category: '宋朝'},
  {name: '诗', symbolSize: 1, category: '诗'},
  {name: '人性', symbolSize: 1, category: '人性'},
  {name: '书法', symbolSize: 1, category: '书法'},
  {name: '印度教', symbolSize: 1, category: '印度教'},
  {name: '舞蹈', symbolSize: 1, category: '舞蹈'},
  {name: '思考', symbolSize: 1, category: '思考'},
  {name: '戏曲', symbolSize: 1, category: '戏曲'},
  {name: '灰暗', symbolSize: 1, category: '灰暗'},
  {name: '飙车', symbolSize: 1, category: '飙车'},
  {name: '趣味', symbolSize: 1, category: '趣味'},
  {name: '毒品', symbolSize: 1, category: '毒品'},
  {name: '创业', symbolSize: 1, category: '创业'},
  {name: '宿命', symbolSize: 1, category: '宿命'},
  {name: '断舍离', symbolSize: 1, category: '断舍离'},
  {name: '吴哥窟', symbolSize: 1, category: '吴哥窟'},
  {name: '植物', symbolSize: 1, category: '植物'},
  {name: '名著', symbolSize: 1, category: '名著'},
  {name: '摄影', symbolSize: 1, category: '摄影'},
  {name: '经典', symbolSize: 1, category: '经典'},
  {name: '江湖', symbolSize: 2, category: '江湖'},
  {name: '哲学', symbolSize: 2, category: '哲学'},
  {name: '科学', symbolSize: 2, category: '科学'},
  {name: '道德', symbolSize: 2, category: '道德'},
  {name: '价值观', symbolSize: 2, category: '价值观'},
  {name: '自然', symbolSize: 3, category: '自然'},
  {name: '音乐', symbolSize: 3, category: '音乐'},
  {name: '园艺', symbolSize: 3, category: '园艺'},
  {name: '雕刻', symbolSize: 3, category: '雕刻'},
  {name: '建筑', symbolSize: 3, category: '建筑'},
  {name: '死亡', symbolSize: 4, category: '死亡'},
  {name: '女人', symbolSize: 4, category: '女人'},
  {name: '时间', symbolSize: 4, category: '时间'},
  {name: '基督教', symbolSize: 4, category: '基督教'},
  {name: '杀戮', symbolSize: 5, category: '杀戮'},
  {name: '当下', symbolSize: 5, category: '当下'},
  {name: '博爱', symbolSize: 5, category: '博爱'},
  {name: '幸福', symbolSize: 6, category: '幸福'},
  {name: '禅宗', symbolSize: 6, category: '禅宗'},
  {name: '宗教', symbolSize: 6, category: '宗教'},
  {name: '电影', symbolSize: 6, category: '电影'},
  {name: '自由', symbolSize: 6, category: '自由'},
  {name: '吃', symbolSize: 7, category: '吃'},
  {name: '性', symbolSize: 8, category: '性'},
  {name: '伦理', symbolSize: 8, category: '伦理'},
  {name: '旅行', symbolSize: 8, category: '旅行'},
  {name: '战争', symbolSize: 10, category: '战争'},
  {name: '自我', symbolSize: 11, category: '自我'},
  {name: '美', symbolSize: 11, category: '美'},
  {name: '绘画', symbolSize: 11, category: '绘画'},
  {name: '孤独', symbolSize: 11, category: '孤独'},
  {name: '孩子', symbolSize: 12, category: '孩子'},
  {name: '教育', symbolSize: 12, category: '教育'},
  {name: '亲情', symbolSize: 12, category: '亲情'},
  {name: '历史', symbolSize: 14, category: '历史'},
  {name: '艺术', symbolSize: 14, category: '艺术'},
  {name: '成长', symbolSize: 15, category: '成长'},
  {name: '生活品味', symbolSize: 16, category: '生活品味'},
  {name: '文化', symbolSize: 17, category: '文化'},
  {name: '爱', symbolSize: 18, category: '爱'}
];

var links = [{source: '崭新的理所当然',target: '幸福'},{source: '崭新的理所当然',target: '生活品味'},{source: '崭新的理所当然',target: '自我'},{source: '崭新的理所当然',target: '文化'},{source: '崭新的理所当然',target: '价值观'},{source: '崭新的理所当然',target: '时间'},{source: '崭新的理所当然',target: '思考'},{source: '崭新的理所当然',target: '吃'},{source: '崭新的理所当然',target: '植物'},{source: '崭新的理所当然',target: '梦想'},{source: '崭新的理所当然',target: '宠物'},{source: '崭新的理所当然',target: '服饰'},{source: '崭新的理所当然',target: '当下'},{source: '崭新的理所当然',target: '断舍离'},{source: '崭新的理所当然',target: '亲情'},{source: '以自己喜欢的方式过一生',target: '幸福'},{source: '以自己喜欢的方式过一生',target: '成长'},{source: '以自己喜欢的方式过一生',target: '生活品味'},{source: '以自己喜欢的方式过一生',target: '吃'},{source: '以自己喜欢的方式过一生',target: '亲情'},{source: '以自己喜欢的方式过一生',target: '女人'},{source: '以自己喜欢的方式过一生',target: '价值观'},{source: '以自己喜欢的方式过一生',target: '音乐'},{source: '以自己喜欢的方式过一生',target: '孤独'},{source: '以自己喜欢的方式过一生',target: '成长'},{source: '以自己喜欢的方式过一生',target: '命运'},{source: '美的沉思',target: '美'},{source: '美的沉思',target: '艺术'},{source: '美的沉思',target: '历史'},{source: '美的沉思',target: '文化'},{source: '美的沉思',target: '宗教'},{source: '美的沉思',target: '生活品味'},{source: '美的沉思',target: '绘画'},{source: '美的沉思',target: '雕刻'},{source: '美的沉思',target: '篆刻'},{source: '美的沉思',target: '佛教'},{source: '美的沉思',target: '孤独'},{source: '美的沉思',target: '自我'},{source: '美的沉思',target: '音乐'},{source: '美的沉思',target: '性'},{source: '美的沉思',target: '诗'},{source: '美的沉思',target: '书法'},{source: '美的沉思',target: '电影'},{source: '美的沉思',target: '战争'},{source: '美的沉思',target: '杀戮'},{source: '美的沉思',target: '舞蹈'},{source: '美的沉思',target: '爱'},{source: '美的沉思',target: '戏曲'},{source: '美的沉思',target: '飙车'},{source: '美的沉思',target: '毒品'},{source: '美的沉思',target: '宿命'},{source: '美的沉思',target: '吴哥窟'},{source: '从容的底气',target: '爱'},{source: '从容的底气',target: '禅宗'},{source: '从容的底气',target: '当下'},{source: '从容的底气',target: '幸福'},{source: '从容的底气',target: '生活品味'},{source: '从容的底气',target: '博爱'},{source: '世界因你而温柔',target: '博爱'},{source: '世界因你而温柔',target: '禅宗'},{source: '世界因你而温柔',target: '当下'},{source: '世界因你而温柔',target: '幸福'},{source: '世界因你而温柔',target: '亲情'},{source: '二孩时代',target: '教育'},{source: '二孩时代',target: '亲情'},{source: '二孩时代',target: '爱'},{source: '二孩时代',target: '孩子'},{source: '禅宗兴起',target: '禅宗'},{source: '禅宗兴起',target: '文化'},{source: '禅宗兴起',target: '历史'},{source: '禅宗兴起',target: '基督教'},{source: '禅宗兴起',target: '宗教'},{source: '禅宗兴起',target: '战争'},{source: '幸福从不缺席',target: '幸福'},{source: '幸福从不缺席',target: '禅宗'},{source: '幸福从不缺席',target: '当下'},{source: '幸福从不缺席',target: '爱'},{source: '幸福从不缺席',target: '亲情'},{source: '我承诺给你的美丽新世界',target: '旅行'},{source: '我承诺给你的美丽新世界',target: '孩子'},{source: '我承诺给你的美丽新世界',target: '教育'},{source: '我承诺给你的美丽新世界',target: '园艺'},{source: '我承诺给你的美丽新世界',target: '文化'},{source: '我承诺给你的美丽新世界',target: '生活品味'},{source: '我承诺给你的美丽新世界',target: '艺术'},{source: '我承诺给你的美丽新世界',target: '美'},{source: '我承诺给你的美丽新世界',target: '爱'},{source: '我承诺给你的美丽新世界',target: '自然'},{source: '种满院植物，安守四季时光',target: '自然'},{source: '种满院植物，安守四季时光',target: '园艺'},{source: '种满院植物，安守四季时光',target: '自我'},{source: '种满院植物，安守四季时光',target: '成长'},{source: '种满院植物，安守四季时光',target: '创业'},{source: '种满院植物，安守四季时光',target: '生活品味'},{source: '恰到好处的孤独',target: '孤独'},{source: '恰到好处的孤独',target: '成长'},{source: '恰到好处的孤独',target: '自我'},{source: '自由疯长',target: '孩子'},{source: '自由疯长',target: '教育'},{source: '自由疯长',target: '旅行'},{source: '自由疯长',target: '文化'},{source: '自由疯长',target: '生活品味'},{source: '自由疯长',target: '自由'},{source: '自由疯长',target: '爱'},{source: '和你一起，我不怕老去',target: '爱'},{source: '和你一起，我不怕老去',target: '亲情'},{source: '和你一起，我不怕老去',target: '博爱'},{source: '和你一起，我不怕老去',target: '孩子'},{source: '和你一起，我不怕老去',target: '教育'},{source: '和你一起，我不怕老去',target: '自由'},{source: '坐在路边鼓掌的人',target: '爱'},{source: '坐在路边鼓掌的人',target: '亲情'},{source: '坐在路边鼓掌的人',target: '博爱'},{source: '坐在路边鼓掌的人',target: '孩子'},{source: '坐在路边鼓掌的人',target: '教育'},{source: '坐在路边鼓掌的人',target: '自由'},{source: '坐在路边鼓掌的人',target: '亲情'},{source: '爱，让我们彼此听见',target: '爱'},{source: '爱，让我们彼此听见',target: '亲情'},{source: '爱，让我们彼此听见',target: '博爱'},{source: '爱，让我们彼此听见',target: '孩子'},{source: '爱，让我们彼此听见',target: '教育'},{source: '爱，让我们彼此听见',target: '自由'},{source: '爱，让我们彼此听见',target: '亲情'},{source: '窗边的小豆豆',target: '爱'},{source: '窗边的小豆豆',target: '自由'},{source: '窗边的小豆豆',target: '教育'},{source: '窗边的小豆豆',target: '孩子'},{source: '窗边的小豆豆',target: '成长'},{source: '窗边的小豆豆',target: '战争'},{source: '小豆豆与我',target: '爱'},{source: '小豆豆与我',target: '孩子'},{source: '小豆豆与我',target: '教育'},{source: '小豆豆与我',target: '生活品味'},{source: '小豆豆与我',target: '文化'},{source: '小豆豆与我',target: '园艺'},{source: '小豆豆与我',target: '成长'},{source: '小豆豆与我',target: '战争'},{source: '奇特的一生',target: '时间'},{source: '奇特的一生',target: '科学'},{source: '奇特的一生',target: '生活品味'},{source: '奇特的一生',target: '自我'},{source: '孤独六讲',target: '孤独'},{source: '孤独六讲',target: '自我'},{source: '孤独六讲',target: '成长'},{source: '孤独六讲',target: '历史'},{source: '孤独六讲',target: '性'},{source: '孤独六讲',target: '爱'},{source: '孤独六讲',target: '文化'},{source: '孤独六讲',target: '生活品味'},{source: '孤独六讲',target: '艺术'},{source: '孤独六讲',target: '教育'},{source: '孤独六讲',target: '孩子'},{source: '孤独六讲',target: '伦理'},{source: '妈妈是最初的老师',target: '孩子'},{source: '妈妈是最初的老师',target: '教育'},{source: '妈妈是最初的老师',target: '爱'},{source: '妈妈是最初的老师',target: '文化'},{source: '妈妈是最初的老师',target: '成长'},{source: '水浒传',target: '历史'},{source: '水浒传',target: '杀戮'},{source: '水浒传',target: '战争'},{source: '水浒传',target: '江湖'},{source: '水浒传',target: '禅宗'},{source: '水浒传',target: '人性'},{source: '水浒传',target: '名著'},{source: '水浒传',target: '经典'},{source: '水浒传',target: '宋朝'},{source: '水浒传',target: '死亡'},{source: '水浒传',target: '长篇'},{source: '水浒传',target: '性'},{source: '水浒传',target: '哲学'},{source: '生活十讲',target: '生活品味'},{source: '生活十讲',target: '文化'},{source: '生活十讲',target: '孤独'},{source: '生活十讲',target: '历史'},{source: '生活十讲',target: '艺术'},{source: '生活十讲',target: '美'},{source: '生活十讲',target: '时间'},{source: '生活十讲',target: '当下'},{source: '生活十讲',target: '战争'},{source: '生活十讲',target: '教育'},{source: '生活十讲',target: '孩子'},{source: '生活十讲',target: '伦理'},{source: '生活十讲',target: '爱'},{source: '生活十讲',target: '哲学'},{source: '生活十讲',target: '水浒传'},{source: '无关岁月',target: '艺术'},{source: '无关岁月',target: '爱'},{source: '无关岁月',target: '禅宗'},{source: '无关岁月',target: '绘画'},{source: '无关岁月',target: '宗教'},{source: '无关岁月',target: '基督教'},{source: '无关岁月',target: '音乐'},{source: '无关岁月',target: '电影'},{source: '无关岁月',target: '伦理'},{source: '无关岁月',target: '历史'},{source: '无关岁月',target: '战争'},{source: '无聊的人生，我死也不要',target: '成长'},{source: '无聊的人生，我死也不要',target: '电影'},{source: '无聊的人生，我死也不要',target: '艺术'},{source: '无聊的人生，我死也不要',target: '历史'},{source: '无聊的人生，我死也不要',target: '绘画'},{source: '无聊的人生，我死也不要',target: '文化'},{source: '局外人',target: '亲情'},{source: '局外人',target: '伦理'},{source: '局外人',target: '文学'},{source: '局外人',target: '灰暗'},{source: '局外人',target: '杀戮'},{source: '局外人',target: '性'},{source: '不如任性过生活',target: '旅行'},{source: '不如任性过生活',target: '吃'},{source: '不如任性过生活',target: '女人'},{source: '不如任性过生活',target: '电影'},{source: '不如任性过生活',target: '文化'},{source: '不如任性过生活',target: '生活品味'},{source: '不如任性过生活',target: '绘画'},{source: '我决定活得有趣',target: '旅行'},{source: '我决定活得有趣',target: '吃'},{source: '我决定活得有趣',target: '女人'},{source: '我决定活得有趣',target: '电影'},{source: '我决定活得有趣',target: '文化'},{source: '我决定活得有趣',target: '生活品味'},{source: '我决定活得有趣',target: '绘画'},{source: '没有什么了不起',target: '旅行'},{source: '没有什么了不起',target: '吃'},{source: '没有什么了不起',target: '女人'},{source: '没有什么了不起',target: '电影'},{source: '没有什么了不起',target: '文化'},{source: '没有什么了不起',target: '生活品味'},{source: '没有什么了不起',target: '绘画'},{source: '容忍与自由',target: '历史'},{source: '容忍与自由',target: '教育'},{source: '容忍与自由',target: '文化'},{source: '容忍与自由',target: '生活品味'},{source: '容忍与自由',target: '孩子'},{source: '容忍与自由',target: '道德'},{source: '容忍与自由',target: '自由'},{source: '我不',target: '江湖'},{source: '我不',target: '亲情'},{source: '我不',target: '爱'},{source: '我不',target: '旅行'},{source: '我不',target: '成长'},{source: '我不',target: '吃'},{source: 'what if？',target: '趣味'},{source: 'what if？',target: '科学'},{source: '品味四讲',target: '生活品味'},{source: '品味四讲',target: '吃'},{source: '品味四讲',target: '文化'},{source: '品味四讲',target: '艺术'},{source: '品味四讲',target: '时间'},{source: '品味四讲',target: '幸福'},{source: '品味四讲',target: '美'},{source: '蒋勋破解梵高之美',target: '孤独'},{source: '蒋勋破解梵高之美',target: '美'},{source: '蒋勋破解梵高之美',target: '艺术'},{source: '蒋勋破解梵高之美',target: '绘画'},{source: '蒋勋破解梵高之美',target: '自我'},{source: '蒋勋破解梵高之美',target: '成长'},{source: '蒋勋破解梵高之美',target: '历史'},{source: '蒋勋破解达芬奇之美',target: '孤独'},{source: '蒋勋破解达芬奇之美',target: '美'},{source: '蒋勋破解达芬奇之美',target: '艺术'},{source: '蒋勋破解达芬奇之美',target: '绘画'},{source: '蒋勋破解达芬奇之美',target: '自我'},{source: '蒋勋破解达芬奇之美',target: '成长'},{source: '蒋勋破解达芬奇之美',target: '历史'},{source: '蒋勋破解达芬奇之美',target: '战争'},{source: '蒋勋破解达芬奇之美',target: '杀戮'},{source: '蒋勋破解达芬奇之美',target: '性'},{source: '蒋勋破解达芬奇之美',target: '伦理'},{source: '蒋勋破解达芬奇之美',target: '建筑'},{source: '蒋勋破解达芬奇之美',target: '宗教'},{source: '蒋勋破解达芬奇之美',target: '基督教'},{source: '蒋勋破解莫奈之美',target: '孤独'},{source: '蒋勋破解莫奈之美',target: '美'},{source: '蒋勋破解莫奈之美',target: '艺术'},{source: '蒋勋破解莫奈之美',target: '绘画'},{source: '蒋勋破解莫奈之美',target: '自我'},{source: '蒋勋破解莫奈之美',target: '成长'},{source: '蒋勋破解莫奈之美',target: '历史'},{source: '蒋勋破解莫奈之美',target: '死亡'},{source: '蒋勋破解莫奈之美',target: '爱'},{source: '蒋勋破解米开朗基罗',target: '孤独'},{source: '蒋勋破解米开朗基罗',target: '美'},{source: '蒋勋破解米开朗基罗',target: '艺术'},{source: '蒋勋破解米开朗基罗',target: '绘画'},{source: '蒋勋破解米开朗基罗',target: '自我'},{source: '蒋勋破解米开朗基罗',target: '成长'},{source: '蒋勋破解米开朗基罗',target: '历史'},{source: '蒋勋破解米开朗基罗',target: '战争'},{source: '蒋勋破解米开朗基罗',target: '死亡'},{source: '蒋勋破解米开朗基罗',target: '性'},{source: '蒋勋破解米开朗基罗',target: '伦理'},{source: '蒋勋破解米开朗基罗',target: '建筑'},{source: '蒋勋破解米开朗基罗',target: '宗教'},{source: '蒋勋破解米开朗基罗',target: '基督教'},{source: '蒋勋破解高更之美',target: '孤独'},{source: '蒋勋破解高更之美',target: '美'},{source: '蒋勋破解高更之美',target: '艺术'},{source: '蒋勋破解高更之美',target: '绘画'},{source: '蒋勋破解高更之美',target: '自我'},{source: '蒋勋破解高更之美',target: '成长'},{source: '蒋勋破解高更之美',target: '历史'},{source: '蒋勋破解高更之美',target: '死亡'},{source: '蒋勋破解高更之美',target: '性'},{source: '蒋勋破解高更之美',target: '伦理'},{source: '蒋勋破解高更之美',target: '雕刻'},{source: '吴哥之美',target: '美'},{source: '吴哥之美',target: '艺术'},{source: '吴哥之美',target: '雕刻'},{source: '吴哥之美',target: '建筑'},{source: '吴哥之美',target: '宗教'},{source: '吴哥之美',target: '印度教'},{source: '吴哥之美',target: '历史'},{source: '吴哥之美',target: '战争'},{source: '吴哥之美',target: '杀戮'},{source: '吴哥之美',target: '文化'},{source: '吴哥之美',target: '旅行'},{source: '因为孤独的缘故',target: '孤独'},{source: '因为孤独的缘故',target: '爱'},{source: '因为孤独的缘故',target: '性'},{source: '因为孤独的缘故',target: '伦理'},{source: '因为孤独的缘故',target: '道德'},{source: '冰岛迷梦',target: '美'},{source: '冰岛迷梦',target: '艺术'},{source: '冰岛迷梦',target: '摄影'},{source: '冰岛迷梦',target: '旅行'},{source: '冰岛迷梦',target: '文化'},{source: '冰岛迷梦',target: '自然'}];


var option = {
    grid: {
        left: 5,
        right: 5,
        bottom: 200
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            rotate: 90  
        },
        data: nodes.map(function (node) {
            return node.name;
        }),
        
    },
    yAxis: {
        show: false
    },
    
    series: [{
        type: 'scatter',
        data: nodes.map(function (node) {
            return {
                value: 0,
                symbolSize: node.symbolSize
            }
        })
    }, {
        type: 'custom',
        dimension: [{
            type: 'ordinal',
            name: 'source'
        }, {
            // This dumb value will be used in yAxis.
            type: 'number',
            name: 'dumb'
        },{
            type: 'ordinal',
            name: 'target'
        }],
        data: links.map(function (link) {
            return [link.source, 0, link.target];
        }),
        renderItem: function (params, api) {
            var coord0 = api.coord(
                [api.value(0), 0]
            )
            var coord1 = api.coord(
                [api.value(2), 0]
            )
            var cx = (coord0[0] + coord1[0]) / 2;
            var r = (coord1[0] - coord0[0]) / 2;
            
            return {
                type: 'arc',
                style: {
                    stroke: '#fff',
                    fill: 'none',
                    opacity: 0.2
                },
                shape: {
                    cx: cx,
                    cy: coord0[1],
                    r: r,
                    startAngle: 0,
                    endAngle: Math.PI,
                    clockwise: false
                }
            }
        }
    }]
};