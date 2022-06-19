module.exports = ({
  name: `setch`,
  code:  ` The Chatbot channel has been set for <#$findChannel[$message[1]]>
$onlyIf[$findChannel[$message[1];no]!=;Provide a valid channel] 
` 
})