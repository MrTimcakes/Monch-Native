/*

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

*/

const posts = [
  {
    "authorUid": "OS2GbNqiREVn3WBh3y0U6zvgg4w2",
    "authorUsername": "MrTimcakes",
    "description": "The first post on Monch :)",
    "image": "https://firebasestorage.googleapis.com/v0/b/monch-firebase.appspot.com/o/userPosts%2FOS2GbNqiREVn3WBh3y0U6zvgg4w2%2F22078f5d-c3d8-4452-a526-72c5c65f6e15.jpg?alt=media&token=fbfae373-5ace-48e1-970f-8734f77ba1a2",
    "imageHeight": 912,
    "imageWidth": 512,
    "likes": 12,
    "postId": "22078f5d-c3d8-4452-a526-72c5c65f6e15",
    "timestamp": 1587069225908,
    "location": {
      "shortName": "Lincoln",
      "lat": 53.234859,
      "long": -0.538440, 
    },
    "recipie": {
      "shortName": "Grilled Salmon & Salad Lunch",
      "uuid": "1b769f6f-4626-4a38-9e3b-c478900a5213",
    },
    "user": {
      "deviceId": "8f78c1f5-7ff2-4cdc-890c-f9b75b79da2f",
      "deviceName": "Android SDK built for x86",
      "expoVersion": "2.15.0",
      "installationId": "8f78c1f5-7ff2-4cdc-890c-f9b75b79da2f",
      "platform": {
        "android": {
          "versionCode": null
        }
      }
    }
  },
  {
    "authorUid": "OS2GbNqiREVn3WBh3y0U6zvgg4w2",
    "authorUsername": "MrTimcakes",
    "description": "The 2nd post to Monch :o",
    "image": "https://firebasestorage.googleapis.com/v0/b/monch-firebase.appspot.com/o/userPosts%2FOS2GbNqiREVn3WBh3y0U6zvgg4w2%2F4711e3d9-ac69-4155-a039-99f142fc7a03.jpg?alt=media&token=f4bc5d2d-ded4-4834-93c2-01b6598c9c0b",
    "imageHeight": 747,
    "imageWidth": 512,
    "likes": 0,
    "postId": "4711e3d9-ac69-4155-a039-99f142fc7a03",
    "timestamp": 1587069375923,
    "recipie": {
      "shortName": "Recipie 2",
      "uuid": "1b76asdf-4626-4a38-9e3b-c478900a5213",
    },
    "user": {
      "deviceId": "8f78c1f5-7ff2-4cdc-890c-f9b75b79da2f",
      "deviceName": "Android SDK built for x86",
      "expoVersion": "2.15.0",
      "installationId": "8f78c1f5-7ff2-4cdc-890c-f9b75b79da2f",
      "platform": {
        "android": {
          "versionCode": null
        }
      }
    }
  },
  {
    "authorUid": "OS2GbNqiREVn3WBh3y0U6zvgg4w2",
    "authorUsername": "MrTimcakes",
    "description": "Mel's snacc",
    "image": "https://firebasestorage.googleapis.com/v0/b/monch-firebase.appspot.com/o/userPosts%2FOS2GbNqiREVn3WBh3y0U6zvgg4w2%2F694d94ad-72dc-434f-96b6-c666ed060bd2.jpg?alt=media&token=e92bc14e-f633-407e-95f7-91e5eec95c20",
    "imageHeight": 910,
    "imageWidth": 512,
    "likes": 0,
    "postId": "694d94ad-72dc-434f-96b6-c666ed060bd2",
    "timestamp": 1587073364983,
    "user": {
      "deviceId": "24fe1b5b-3ab4-4d1d-80a7-b9f8143c27db",
      "deviceName": "ONEPLUS A5000",
      "expoVersion": "2.15.4",
      "installationId": "24fe1b5b-3ab4-4d1d-80a7-b9f8143c27db",
      "platform": {
        "android": {
          "versionCode": null
        }
      }
    }
  }
]

export default posts;