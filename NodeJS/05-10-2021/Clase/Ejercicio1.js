const getVoteCount = ({ upvotes, downvotes }) => upvotes - downvotes;
console.log(getVoteCount({ upvotes: 13, downvotes: 30 })); 