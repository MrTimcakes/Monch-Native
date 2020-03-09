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
  },
  {
    description: 'Post 2',
    image: `https://firebasestorage.googleapis.com/v0/b/monch-firebase.appspot.com/o/userPosts%2FOS2GbNqiREVn3WBh3y0U6zvgg4w2%2Fjason-leung-AUAuEgUxg5Q-unsplash.jpg?alt=media&token=021a9500-f385-43da-a188-c155d8b6f447`,
  },
  {
    description: 'Post 3',
    image: `https://firebasestorage.googleapis.com/v0/b/monch-firebase.appspot.com/o/userPosts%2FOS2GbNqiREVn3WBh3y0U6zvgg4w2%2Fdavide-cantelli-jpkfc5_d-DI-unsplash.jpg?alt=media&token=6c0fc77a-8eb7-462d-be4d-8def92807369`,
  },
  {
    description: 'Post 4',
    hasMulti: true,
    image: 'https://firebasestorage.googleapis.com/v0/b/monch-firebase.appspot.com/o/userPosts%2FOS2GbNqiREVn3WBh3y0U6zvgg4w2%2Fjoseph-gonzalez-fdlZBWIP0aM-unsplash.jpg?alt=media&token=28b0a091-55ac-4c9b-81f0-ab7958284913',
  },
  {
    description: 'Dummy Post',
  },
  {
    description: 'Dummy Post',
  },
  {
    description: 'Dummy Post',
  },
  {
    description: 'Dummy Post',
  },
  {
    description: 'Dummy Post',
  },
  {
    description: 'Dummy Post',
  },
  {
    description: 'Dummy Post',
  },
  {
    description: 'Dummy Post',
  },
  {
    description: 'Dummy Post',
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