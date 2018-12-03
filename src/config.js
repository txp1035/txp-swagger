const config = {
  url: ' http://39.96.131.49:8765/v2/api-docs?group=api',
  arr: [
    { name: 'sale.js', tags: ['销售-销售订单', '销售-退货订单'] }, //销售
    { name: 'purchase.js', tags: ['进货-购物车', '进货-进货单据', '进货-申请单据', '进货-退货单据'] }, //进货
    { name: 'promotion.js', tags: ['促销-门店促销-组合促销', '促销-门店促销-特价促销', '促销-门店促销-满减促销', '促销-门店促销-促销设置', '促销-快喝促销-优惠卷促销', '促销-快喝促销-满减促销'] }, //促销
    { name: 'commodity.js', tags: ['5.0.1'] } //商品
  ],
  type: 'mock' //services|mock|models
};
module.exports = config;
