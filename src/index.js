const axios = require('axios');
const fs = require('fs');
/**
 * @param  {String} name 模板方法名字
 * @param  {String} api 模板方法对应的api
 * @param  {String} dec 模板方法对应的注释
 */
function getStringGet(name, api, dec) {
  return `\nexport async function ${name}(params) {\n  return request(\`${api}?\${stringify(params)}\`);\n} // ${dec}\n`;
} //get请求模板
/**
 * @param  {String} name 模板方法名字
 * @param  {String} api 模板方法对应的api
 * @param  {String} dec 模板方法对应的注释
 */
function getStringPost(name, api, dec) {
  return `\nexport async function ${name}(params) {\n  return request(\`${api}\`, {\n    method: 'POST',\n    body: params\n  });\n} // ${dec}\n`;
} //post请求模板
/**
 * @param  {String} name 文件名，包括后缀。
 * @param  {String} str 输入文件的字符串。
 */
function writeFile(name, str) {
  const directory = 'dist/';
  fs.writeFile(directory + name, str, function(err) {
    if (err) console.log('写文件操作失败');
    else console.log('写文件操作成功');
  });
}
/**
 * @param  {String} url swagger请求地址
 * @param  {Array} arr 文件数组，用来遍历生成几个文件
 * @param {Object} arr[child] 描述生成文件的对象
 * @param {String} name 生成文件的名字，包括扩展名
 * @param {Array} tags 匹配响应标签的数组
 */
function generateFile(url, arr) {
  axios
    .get(url)
    .then(function(response) {
      const apiData = response.data.paths;
      const apiDataArr = Object.entries(apiData);
      //遍历数组，写入文件
      arr.forEach(element => {
        let str = '';
        //遍历标签，生成需要的字符串
        element.tags.forEach(tag => {
          str = str + `\n/**\n * ${tag}\n */`;
          //遍历api数据，匹配标签生成字符串
          apiDataArr.forEach(data => {
            if ('get' in data[1] && tag === data[1].get.tags[0]) {
              const api = data[0];
              const name = api.match(`[^/]+(?!.*/)`)[0];
              const dec = data[1].get.summary;
              str = str + getStringGet(name, api, dec);
            } //判断是否为get接口
            if ('post' in data[1] && tag === data[1].post.tags[0]) {
              const api = data[0];
              const name = api.match(`[^/]+(?!.*/)`)[0];
              const dec = data[1].post.summary;
              str = str + getStringPost(name, api, dec);
            } //判断是否为post接口
          });
        });
        writeFile(element.name, str);
      });
    })
    .catch(function(error) {
      console.log('请求失败！');
      console.log(error);
    });
}
generateFile('http://test-manage.depotnextdoor.com:8765/v2/api-docs?group=api', [
  { name: 'sale.js', tags: ['销售-销售订单', '销售-退货订单'] }, //销售
  { name: 'purchase.js', tags: ['进货-购物车', '进货-进货单据', '进货-申请单据', '进货-退货单据'] }, //进货
  { name: 'promotion.js', tags: ['促销-优惠卷列表', '促销-优惠卷添加'] }, //促销
  { name: 'commodity.js', tags: ['5.0.1'] } //商品
]);
