///////////////////////////////
// MAM: Publish messages to Private Stream
///////////////////////////////

const Mam = require('@iota/mam')
const { trytesToAscii } = require('@iota/converter')

// Init State
const mamType = 'restricted'
const mamSecret = 'DONTSHARETHISPASSWORD'

// Initialise MAM State
let mamState = Mam.init('https://nodes.devnet.iota.org:443')

// Callback used to pass data out of the fetch
const logData = data => console.log(trytesToAscii(data))

const FetchMam = async (_root) => {
  // Callback used to pass data + returns next_root
  var rootString =  String.raw(_root)
  console.log("inside function root is ", rootString)

  const resp = await Mam.fetch(rootString, mamType, mamSecret, logData)
}
module.exports ={
  execute:FetchMam
}
