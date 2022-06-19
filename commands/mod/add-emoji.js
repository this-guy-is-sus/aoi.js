module.exports = ({
  name: "add-emoji",
  aliases: "steal",
  code: ` **Successfully added emoji $addEmoji[https://cdn.discordapp.com/emojis/$findNumbers[$message[1]];$message[2];yes] with name \`$message[2]\`.**
$onlyIf[$charCount[$message[2]]>=2;:x: **Emoji name must be longer than 2 characters!**]
$onlyIf[$findNumbers[$message[1]]!=;;:x: **Invalid Emoji name or ID**]
$onlyIf[$message[2]!=;**Invalid Usage!**\n\n**Correct Usage: \`$getservervar[prefix]steal < Emoji | ID > < Emoji Name >\`**]
$onlyIf[$message[1]!=;**Invalid Usage!**\n\n**Correct Usage: \`$getservervar[prefix]steal < Emoji | ID > < Emoji Name >\`**]
$onlyBotPerms[manageemojis;{description:**I require \`MANAGE_EMOJIS\` permission to do this.**}{color:RED}]
$onlyPerms[manageemojis;{description:**You do not have access to this command, you require \`MANAGE_EMOJIS\` permission to do this.**}{color:RED}] `
})