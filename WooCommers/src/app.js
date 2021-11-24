const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
  url: 'https://www.codea.go.cr',
  consumerKey: 'ck_622a0938fe96e500c68b36f410d91438ae712d7d',
  consumerSecret: 'cs_00c061cd6bc2e56a1e007c86c1d8c228542e29ad',
  version: 'wc/v3'
});

WooCommerce.get("products")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.response.data);
  });