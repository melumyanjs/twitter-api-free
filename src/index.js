const { TwitterFreeApi } = require('./TwitterFreeApi')




async function main(){

  // let data = await TwitterFreeApi.getUserByName('itsme93901329')
  // let data = await TwitterFreeApi.getUserById('1619950391466115073')
  let data = await TwitterFreeApi.getFollowers()

  console.log(data)
}

main()