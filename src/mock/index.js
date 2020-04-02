import Mock from "mockjs";
// 获取 mock.Random 对象
const Random = Mock.Random;
Mock.setup({
  timeout: "200-2000"
});
// mock新闻数据，包括新闻标题title、内容content、创建时间createdTime
const produceNewsData = function() {
  let newNewsObject = {
    title: Random.ctitle(), //  Random.ctitle( min, max ) 随机产生一个中文标题，长度默认在3-7之间
    content: Random.cparagraph(), // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
    createdTime: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；
  };

  return newNewsObject;
};
// 随便请求一个其他的数据，不影响
const demoOther = function() {
  let newsList = [];
  for (let i = 0; i < 20; i++) {
    let newNewsObject = {
      img: Random.dataImage("300x250")
    };
    newsList.push(newNewsObject);
  }

  return newsList;
};
// 请求该url，就可以返回newsList
Mock.mock("/mock/user", produceNewsData);
Mock.mock("/mock/other", demoOther);
