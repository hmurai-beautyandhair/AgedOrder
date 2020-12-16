const Shopify = require("shopify-api-node");
let date = Date.now()

const express = require("express");
const http = require("https");
const app = express();

const port = 3001;



async function getData (store, id, days) {
    let shopify = {}
if(store === 'wigscom') {
    shopify = shopify1
}
if(store === 'wigs-hairpieces') {
    shopify = shopify2
}

let order = await shopify.order.get(id)
    const oneDay = 24 * 60 * 60 * 1000; 
    const date2 = new Date(order.created_at);
    console.log(date2)
    const diffDays = Math.round(Math.abs((date2 - date) / oneDay));
    if(diffDays > days) return true
    else return false

   
}


app.get("/site=:site/id=:id/age=:age", ( req, res, next) => {
 
    Promise.all( [getData(req.params.site, req.params.id, req.params.age)]).then(result => {
        console.log({result: result[0]})
        res.send({result: result[0]});
        }).catch(next)
    
  })
  
  app.listen(port, () =>
    console.log(`Hello world app listening on port ${port}!`)
  );