module.exports = ({
  name: "prefix",
  aliases: ["settings-prefix","config-prefix"],
  code: `$onlyIf[$emojisFromMessage[$message]
==] 
k`
})