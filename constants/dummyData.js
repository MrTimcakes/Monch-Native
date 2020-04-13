const ACCOUNT = 'MrTimcakes';

const USER = {
  "badges": [
    {
      "badgeID": "50677c94-4fc3-43b6-bb00-2d2d2c4ba7b1",
      "badgeLevel": "2",
      "currentBadgeName": "Skillet Rookie",
    },
  ],
  "bio": "I like to eat food. A lot of food.",
  "cookingSkill": 0.1,
  "email": "MrTimcakes@gmail.com",
  "firstSeen": {
    "nanoseconds": 0,
    "seconds": 1578061457,
  },
  "name": "Tim",
  "profileImage": "Path to img",
  "uid": "OS2GbNqiREVn3WBh3y0U6zvgg4w2",
  "username": "MrTimcakes",
  "xp": 50,
}

const COMMENTS = [
  {
    account: 'User1',
    isLiked: true,
    date: '2w',
    title: 'Comment 1',
  },
  {
    account: 'User2',
    isLiked: false,
    date: '6w',
    title: 'Comment 2',
  },
  {
    account: 'User3',
    isLiked: true,
    date: '8w',
    title: `Comment 3`,
  },
].map((item, index) => ({
  ...item,
}));

const posts = [
  {
    description: 'Post 1',
    image: `https://firebasestorage.googleapis.com/v0/b/monch-firebase.appspot.com/o/userPosts%2FOS2GbNqiREVn3WBh3y0U6zvgg4w2%2Fjoseph-gonzalez-zcUgjyqEwe8-unsplash.jpg?alt=media&token=8c5f284d-5add-4e1c-83dc-2fbc1251b18a`,
    postID: '1f413bb7-be16-4b80-9ab4-eec161bf0dd3',
  },
  {
    description: 'Post 2',
    image: `https://firebasestorage.googleapis.com/v0/b/monch-firebase.appspot.com/o/userPosts%2FOS2GbNqiREVn3WBh3y0U6zvgg4w2%2Fjason-leung-AUAuEgUxg5Q-unsplash.jpg?alt=media&token=021a9500-f385-43da-a188-c155d8b6f447`,
    postID: '5417cfbb-000f-47d2-9360-12c60b0c84ae',
  },
  {
    description: 'Post 3',
    image: `https://firebasestorage.googleapis.com/v0/b/monch-firebase.appspot.com/o/userPosts%2FOS2GbNqiREVn3WBh3y0U6zvgg4w2%2Fdavide-cantelli-jpkfc5_d-DI-unsplash.jpg?alt=media&token=6c0fc77a-8eb7-462d-be4d-8def92807369`,
    postID: '1107c34b-c7bd-4803-84de-ac8bbec04604',
  },
  {
    description: 'Post 4',
    hasMulti: true,
    image: 'https://firebasestorage.googleapis.com/v0/b/monch-firebase.appspot.com/o/userPosts%2FOS2GbNqiREVn3WBh3y0U6zvgg4w2%2Fjoseph-gonzalez-fdlZBWIP0aM-unsplash.jpg?alt=media&token=28b0a091-55ac-4c9b-81f0-ab7958284913',
    postID: 'd4b77ac6-0e29-4bd5-93fa-4a9489b1b5dc',
  },
  {
    description: 'Dummy Post',
    postID: '8d295f37-b998-431f-a673-b22b29e6e0b9',
  },
  {
    description: 'Dummy Post',
    postID: '2be03216-9b8f-406a-8409-4c55ae7f8cfb',
  },
  {
    description: 'Dummy Post',
    postID: 'b6800d20-0c9a-4b83-8934-bdddd51e26b9',
  },
  {
    description: 'Dummy Post',
    postID: '5c196a7b-1af5-4b22-9188-cb7957219b3a',
  },
  {
    description: 'Dummy Post',
    postID: '482167f5-00bb-406c-9e24-f4cb1f9e26d9',
  },
  {
    description: 'Dummy Post',
    postID: 'd5063f0f-0259-401f-ae06-cf9b962c9f45',
  },
  {
    description: 'Dummy Post',
    postID: '7d87b975-f4d0-41c3-82cf-1e0fe179e79a',
  },
  {
    description: 'Dummy Post',
    postID: '0d5b6284-08cc-4a54-b30f-d657a97a9a42',
  },
  {
    description: 'Dummy Post',
    postID: '39986932-4798-418f-844e-1be772b1ac1d',
  },
].map((item, index) => ({
  account: ACCOUNT,
  source: {
    uri: item.image || 'https://picsum.photos/200?image=' + 4 + (index % 7),
  },
  comments: COMMENTS,
  ...item,
}));

export default posts;