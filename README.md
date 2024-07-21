## Faider
It is an AI chat app powered by the Google Generative AI (Gemini) to help in providing users with medical assistance.
To run it in your device, follow the following steps:

## 1. Clone the app
Your first start by cloning the repo in your prefereed location in your machine.
```bash
git clone https://github.com/munyi-victor/fAider
```

## 2. Run the server
Navigate to the api directory
``` bash
cd fAider/api
```
Then install the necesary dependancies:
``` bash
npm install
```
Then create a .env file in the root directory and copy your Google generative AI Api Key
``` bash
API_KEY=<your api key>
```
Then run the server
``` bash
npm start
```

## 3. Run the frontend
Open another terminal and navigate to the fAider.fAider_client directory
Install the necessary dependancies:
``` bash
npm install
```
Run the development server:
``` bash
npx expo start
```
Then use either an emulator, Expo Go mobile app or even web to view the app. 
