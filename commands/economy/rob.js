module.exports = ({
 name:"rob",
 code: `
$onlyIf[$getGlobalUserVar[coins;$authorID]>=500;You need at least dollar 500 to rob someone.]

$onlyIf[$getGlobalUserVar[coins;$mentioned[1]]>=700;The victim doesn't have at least dollar700, not worth it!]

$if[$randomText[caught;success]==success]

$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[700;$getGlobalUserVar[coins;$mentioned[1]]]];$authorID]

$setGlobalVar[coins;$sub[$getGlobalUserVar[coins$mentioned[1]];$random[700;$getGlobalUserVar[coins;$mentioned[1]]]];$mentioned[1]]

$title[1;Results]
$description[1;You successfully robbed <@$mentioned[1]> a total of dollar$random[700;$getGlobalUserVar[coins;$mentioned[1]]].]
$color[1;3cff00]

$else

$setGlobalUserVar[coins;$sub[$getGlobalUserVar[coins;$authorID];$random[700;$getGlobalUserVar[coins;$authorID]]];$authorID]

$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$mentioned[1]];$random[700;$getGlobalUserVar[coins;$authorID]]];$mentioned[1]]

$title[1;Results]
$description[1;You got caught by <@$mentioned[1]> and fined a total of dollar$random[700;$getGlobalUserVar[coins;$authorID]].]
$color[1;ff0000]
$endif 
$globalCooldown[10m;You can’t rob until %time%]
$onlyIf[$mentioned[1]!=$isBot[$mentioned[1]];You can't rob a bot.]

$argsCheck[>1;Please mention someone to rob them.]`
})