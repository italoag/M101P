db.posts.aggregate([
    { $unwind: "$comments" }, 
    { $project: { _id: "$comments.author" } }, 
    { $group: { _id: "$_id", count: { "$sum":1 } }}, 
    { $sort: {count:-1 }}, {$limit: 1}
])