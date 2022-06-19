module.exports = ({
name:"serverinfo",
aliases: ["sinfo","sabout"],
code:`$title[1;Info about $serverName]

$thumbnail[1;$serverIcon]

$addField[1;Some emojis;$textSlice[$serverEmojis[ ;$guildID];1;10];yes]

$addField[1;Emojis Count;$emojicount[$guildId;all];yes]

$addField[1;Server Invite (permanent);$djsEval[message.channel.createInvite({ maxAge: 0 }).then(invite => invite.url);yes];yes]

$addField[1;Server Invite (temporary);$djsEval[message.channel.createInvite({ maxAge: 604800 }).then(invite => invite.url);yes];yes]

$addField[1;Prefixes;$getServerVar[prefix] y. Yuki <@836883376430121003>;yes]

$addField[1;Roles count;$roleCount[$guildID];yes]

$addField[1;Members Count;$MembersCount;yes]

$addField[1;Server owner;$usertag[$Ownerid[$guildID]];yes]

$addField[1;Server name;$serverName;yes]

$color[1;RANDOM]
`}) 