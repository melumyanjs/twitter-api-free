const { TwitterFreeApi } = require('./util')




async function main(){

  // let user = await TwitterFreeApi.getUserByName('itsme93901329')
  let user = await TwitterFreeApi.getUserById('1619950391466115073')
  
  console.log(user)
}

main()