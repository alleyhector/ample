const request = require('request-promise')
const YELP_ACCESS_TOKEN = "ZUJ4B1pZo7rpbp0R5ZYbHR6MJ5oca-rZRtjX6RzQVMeiOo3gt3hYh4ZHWPR019D5tOX2sqmNwKM1FnbdI77lVS_fIY871Jcpi-Xj3nC57peQVamHmFch7gtXk_ZvWXYx";

exports.YELP_ACCESS_TOKEN = YELP_ACCESS_TOKEN;

exports.getBusinessById = async function(yelpId) {
  let options = {
    uri: 'https://api.yelp.com/v3/businesses/' + yelpId,
    headers: {
      'Authorization': 'Bearer ' + YELP_ACCESS_TOKEN
    },
    json: true
  };
  return await request(options);
}
