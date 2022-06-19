module.exports = ({
name: "beg",
code: `$if[$randomText[yes;no;yes]==yes]
$setVar[coins;$sum[$getVar[coins;$authorID];$random[100;700]];$authorID]
$title[1;$randomText[Your mum;Your secret lover;Your drunk self;The kids in your basement;Tony the tiger;Tom;Jake from state-farm;Michael Jackson;Billie eyelash]]
$description[1;gave you $random[100;700]!]
$footer[1;You can just work tho.]
$color[1;e5cf00]
$else
$title[1;$randomText[Your mum;Your secret lover;Your drunk self;The kids in your basement;Tony the tiger;Tom;Jake from state-farm;Michael Jackson]]
$description[1;Says: "$randomText[no;I only give money to mommy;Imagine begging;bruh;I already maxed my credit card]".]
$footer[1;Just go and work]
$color[1;e5cf00]
$endif
$cooldown[15s;Stop you can't beg too much! That's really disguisting.%time%.] `
});
