///////////////////////////////
// MAM: Publish messages to Public Stream
///////////////////////////////

const Mam = require('@iota/mam')
const { asciiToTrytes } = require('@iota/converter')

let mamState = Mam.init('https://nodes.devnet.thetangle.org:443')
mamState = Mam.changeMode(mamState, 'public')

const publish = async data => {
    // Convert the JSON to trytes and create a MAM message
    const trytes = asciiToTrytes(data)
    const message = Mam.create(mamState, trytes)

    // Update the MAM state to the state of this latest message
    // We need this so the next publish action knows it's state
    mamState = message.state

    // Attach the message
    await Mam.attach(message.payload, message.address, 3, 9)
    console.log('Sent message to the Tangle!', data)
    console.log('Address: ' + message.root)
}

publish('First Message')
publish('Second Message')
publish('Third Message')