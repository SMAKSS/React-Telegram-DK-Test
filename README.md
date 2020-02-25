# Telegram Web App

### Running locally
Install [node.js](http://nodejs.org/).

Install dependencies with:

```lang=bash
npm install
or
yarn install
```

This will install all the needed dependencies.

-----
All TDLib files will be installed into node_modules/tdweb/dist/ folder. Manually copy them into the public folder with:

#### **Do one of the following base on your OS**

If you are using unix base OS do the following:
```lang=bash
cp node_modules/tdweb/dist/* public/
```
If you are using windows do the following:
```
copy Full path to project node_modules\node_modules\tdweb\dist\*  Full path to project public directory\public\
```

---------
Run the app in development mode with:

```lang=bash
npm run start
or
yarn start
```

Open http://localhost:3000 to view it in the browser.