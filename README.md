
# Monch
>The Better Way to Eat

Monch suggests food recommendations and recipe guides based on the food already at home. Monch learns what ingredients are available from receipts or product barcodes and suggests recipes based on meals similar users have enjoyed.

Developed as part of a Level 3 Dissertation for the University of Lincoln, Monch was a social media experiment designed to leverage the serverless architecture of Firebase to build a scaleable and unique social media experience. The idea of the platform is to allow users to easily create a database of ingredients at home by scanning barcodes of products which could later be used to filter recipes by available resources. Recipes and posts were to be shared in a social-media-style feed and discovery system. As of 07/05/2020 development was halted as the project served its purpose of teaching the principles of serverless development for a level 3 dissertation. The platform idea was thoroughly planned and architected around future features discussed in the dissertation, which is available upon request. The repository is licenced under the GPL-3.0 licence and is free to be forked and developed further for commercial or personal use.


## Mockup Showcase
![WireframeShowcase](https://user-images.githubusercontent.com/3743776/81346934-1e4b0480-90b3-11ea-937f-4c413065a9cb.jpg)


## Wireframe Showcase
![WireframeShowcase](https://user-images.githubusercontent.com/3743776/81346941-2014c800-90b3-11ea-8756-2695c5041c3e.jpg)


## In-app Screenshots

| ![Inventory](https://user-images.githubusercontent.com/3743776/80280907-314af580-86ff-11ea-8c72-4481aa4f0999.png) | ![Recipies](https://user-images.githubusercontent.com/3743776/81347529-40915200-90b4-11ea-910b-25c49416dbfb.png) |
| ------------- | ------------- |
| ![Feed](https://user-images.githubusercontent.com/3743776/80280905-2ee89b80-86ff-11ea-959b-dba95b35cda4.png)  | ![Profile](https://user-images.githubusercontent.com/3743776/80280899-27c18d80-86ff-11ea-96fb-ccb2451a89df.png)  |


## Poster
![Poster](https://user-images.githubusercontent.com/3743776/81348255-af22df80-90b5-11ea-8728-c40e53c1145f.jpg)

## Goals

Goal | Status
:------------ | :------------ |
Signup Authentication | :white_check_mark:
Signin Authentication | :white_check_mark:
Password Recovery | :white_check_mark:
Anonymous Authentication | :black_square_button:
Inventory | :white_check_mark:
Barcode Scan | :white_check_mark:
Product Lookup | :white_check_mark:
Inventory Addition | :white_check_mark:
Receipt Scan | :black_square_button:
Manual Entry | :black_square_button:
Recipes Database | :white_check_mark:
Recipes Addition | :white_check_mark:
Recipes Search | :black_square_button:
Recipes  Recommendations | :black_square_button:
User Levels | :white_check_mark:
User Levels Display | :black_square_button:
User Badges | :white_check_mark:
User Badges Display | :black_square_button:
User Posts | :white_check_mark:
User Recipe Posts | :white_check_mark:

## Demo
The application can be trialed via the Expo client app from this [Expo Project](https://expo.io/@mrtimcakes/Monch)


## Quick Start

- Install: `yarn`

- [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli/): `npm install -g expo-cli` (if not already installed globally on your machine)

- Install dependencies `yarn`

- Rename `utilities\Firebase\example.firebaseConfig.js` to `firebaseConfig.js` and populate with your firebase credentials

- Got to the [Firebase Console](https://console.firebase.google.com/) and enable Email authentication, Firestore read/write to /users/** and enable storage (only for testing purposes)

- Run Project Locally: `expo start`






### Support

If you're having any problem, please [raise an issue](https://github.com/MrTimcakes/Monch-Native/issues/new) on GitHub.






### License

This project is free Open-Source software, and is released under the GPL-3.0 License, further information can be found under the terms specified in the [license](https://github.com/MrTimcakes/Monch-Native/blob/master/LICENSE).
