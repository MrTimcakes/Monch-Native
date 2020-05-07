
# Monch
>The Better Way to Eat - [Monch.XYZ](https://monch.XYZ)

Monch suggests food recommendations and recipe guides based on the food already at home. Monch learns what ingredients are available from receipts or product barcodes and suggests recipes based on meals similar users have enjoyed.

Currently, as of 07/05/2020 Monch is incomplete but the idea of the app is to be a platform for food recommendations and recipe guides based on the food already at home. Monch learns what ingredients are available from receipts or product barcodes and suggests recipes based on meals similar users have enjoyed. The app is also to act as a social media platform enabling the distribution of recipes through promotional type posts from chefs or discovery of what friends have recently cooked. To drive user engagement, elements of gamification are leveraged for each individual user allowing them to accrue experience and publicly visible badges. The platform is built using a serverless architecture designed for instantaneous scalability.

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
Google Assistant Intergration | :black_square_button:

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
