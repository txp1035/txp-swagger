const config = {
  url: 'http://test-manage.depotnextdoor.com:8765/v2/api-docs?group=api',
  arr: [
    { name: 'sale.js', tags: ['销售-销售订单', '销售-退货订单'] }, //销售
    { name: 'purchase.js', tags: ['进货-购物车', '进货-进货单据', '进货-申请单据', '进货-退货单据'] }, //进货
    { name: 'promotion.js', tags: ['促销-优惠卷列表', '促销-优惠卷添加'] }, //促销
    { name: 'commodity.js', tags: ['5.0.1'] } //商品
  ]
};
module.exports = config;
