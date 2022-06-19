module.exports = {
  name: "$alwaysExecute",
  code: `$setUserVar[counter;$math[$getUserVar[counter]+1]]`
}