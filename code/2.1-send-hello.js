///////////////////////////////
// Send HELLOWORLD
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
    provider: 'https://nodes.devnet.thetangle.org:443'
})

const address =
    'HEQLOWORLDHIBYEWORLDHIBYEWORLDHIBYEWORLDHIBYEWORLDHIBYEWORLDHIBYEWORLDHIBYEWOR99D'
const seed =
    'IOWPPONJTYHHVRFRGFRWRVQU9VDMQYLEVVEABJPW9PT9F9SYMGIOFDXPYSLGESFTMBSJECQEPLHGWWYRZ'

const converter = require('@iota/converter')

const message = "YARABYARAB"

const message_in_trytes = converter.asciiToTrytes(message)

const transfers = [{
    value: 0,
    address: address,
    message: message_in_trytes
}]

iota
    .prepareTransfers(seed, transfers)
    .then(trytes => iota.sendTrytes(trytes, (depth = 3), (mwm = 9)))
    .then(bundle => {
        console.log(bundle)
    })
    .catch(err => {
        console.error(err)
    })