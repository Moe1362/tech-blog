const {
    Post
} = require("../models");

//below is the first equine blog post box and then more mock up ones for demo

const postData = [{
        title: "1 Blog Post",
        content: "This is the content of the first blog post.",
        user_id: 1,
    },
    {
        title: "2 Blog Post",
        content: "This is the content of the second blog post.",
        user_id: 2,
    },
    {
        title: "3 Blog Post",
        content: "This is the content of the third blog post.",
        user_id: 3,
    },
    {
        title: "4 Blog Post",
        content: "This is the content of the fourth blog post.",
        user_id: 4,
    },
    {
        title: "5 Blog Post",
        content: "This is the content of the fifth blog post.",
        user_id: 5,
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
