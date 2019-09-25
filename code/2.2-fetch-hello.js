///////////////////////////////
// Fetch your HELLOWORLD Message
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
    provider: 'https://nodes.devnet.thetangle.org:443'
})

const address =
    '99QLOWORLDHIBYEWORLDHIBYEWORLDHIBYEWORLDHIBYEWORLDHIBYEWORLDHIBYEWORLDHIBYEWOR99D'

iota
    .findTransactionObjects({ addresses: [address] })
    .then(response => {
        console.log(response[1].data)
    })
    .catch(err => {
        console.error(err)
    })
