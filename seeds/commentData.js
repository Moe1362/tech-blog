const { Comment } = require("../models");

const CommentData = [
    
    {
        comment_text: "Mohammad",
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: "Maryam Abbasi",
        user_id: 2,
        post_id: 1,
    },
    {
        comment_text: "Kambiz",
        user_id: 3,
        post_id: 1,
    },
    {
        comment_text: "Zahra",
        user_id: 4,
        post_id: 1,
    },
    {
        comment_text: "Ahmad",
        user_id: 5,
        post_id: 1,
    },  {
        comment_text: "Khashayar",
        user_id: 1,
        post_id: 2,
    },
    {
        comment_text: "Mohsen",
        user_id: 2,
        post_id: 2,
    },
];

const seedComments = () => Comment.bulkCreate(CommentData);
module.exports = seedComments;