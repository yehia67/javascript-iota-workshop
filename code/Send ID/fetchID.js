const FetchPublicTransaction = require('./FetchPublicTransaction.js')
const FetchMamRestricted = require('./FetchMamRestricted.js')

const address = 'YEHIA9CB9COPCTMOIFUEJVGUNDLSSJQCORYMEAZHRAUJXH9HGNI99BMLQDQOZNCLNVOLFMSFUIVPMYXDWEZFSZQROC'
const main = async()=>{
    var root =  await FetchPublicTransaction.execute(address)
    await FetchMamRestricted.execute(root)
}
main()



