const FetchPublicTransaction = require('./FetchPublicTransaction.js')
const FetchMamRestricted = require('./FetchMamRestricted.js')

const address = 'YEHIA9CB9COPCTMOIFUEJVGUNDLSSJQCORYMEAZHRAUJXH9HGNI99BMLQDQOZNCLNVOLFMSFUIVPMYXDWEZFSZQROC'
const main = async()=>{
    //const root =  await FetchPublicTransaction.execute(address)
    const root = 'DOGDHTBWAKNZEVF9RPFPMLPNUZFUNHOCVESK9HFXRCJKATXBCPXKNYHHSQW9XCWRAM9JDPFWEBDUBZHRO'
    await FetchMamRestricted.execute(root)
    //await FetchMamRestrictedPromise(root) await FetchMamRestricted.execute('DOGDHTBWAKNZEVF9RPFPMLPNUZFUNHOCVESK9HFXRCJKATXBCPXKNYHHSQW9XCWRAM9JDPFWEBDUBZHRO')
}
main()


