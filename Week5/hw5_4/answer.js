db.zips.aggregate([
    {$project: { firstCharacter: {$substr : ["$city",0,1]}, population: "$pop" }}
   ,{ $match: { firstCharacter: /^[\d]/ } }
   ,{ $group: { _id: "1", totalRuralPopulation: { "$sum":"$population" } }}
])