module.exports = ({
  name: "pet",
  code: `
$onlyIf[$getGlobalUserVar[pet]!=1;You already have a pet $getGlobalUserVar[petname]. ~~Dont~~ Disown him first.]
$if[$message==dog]
Aww $username just bought a cute dog.
$setGlobalUserVar[petname;dog;$authorID]
$setGlobalUserVar[pet;1;$authorID]
$elseif[$message==bunny]
OwO $username just bought a cute Bunny uwu.
$setGlobalUserVar[petname;Bunny;$authorID]
$setGlobalUserVar[pet;1;$authorID]
$endelseif
$elseif[$message==Cat]
Look! $username just bought a cute cat. so adorableeeee.
$setGlobalUserVar[petname;cat;$authorID]
$setGlobalUserVar[pet;1;$authorID]
$endelseif
$elseif[$message==Panda]
$username just bought a qt Panda. Now play with him.
$setGlobalUserVar[petname;Panda;$authorID]
$setGlobalUserVar[pet;1;$authorID]
$endelseif
$elseif[$message==Bird]
Ayyy $username just bought a smol and adorable Bird! Just dont give the bird a hard hug dumby.
$setGlobalUserVar[petname;Panda;$authorID]
$setGlobalUserVar[pet;1;$authorID]
$endelseif
$endif`
})
