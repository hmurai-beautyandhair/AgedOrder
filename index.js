const Shopify = require("shopify-api-node");
let date = Date.now()

const shopify1 = new Shopify({
    shopName: "wigscom",
   
  autoLimit: true,
  bucketSize: { calls: 5, interval: 1000, bucketSize: 35 },
});

async function getData (store, id, days) {
    let shopify = {}
if(store === 'wigscom') {
    shopify = shopify1
}
let order = await shopify.order.get(id)
    const oneDay = 24 * 60 * 60 * 1000; 
    const date2 = new Date(order.created_at);
    console.log(date2)
    const diffDays = Math.round(Math.abs((date2 - date) / oneDay));
    if(diffDays > days) return true
    else return false

   
}
Promise.all( [getData('wigscom', 2644120305775, 10)]).then(res => {
console.log({result: res[0]})
})

