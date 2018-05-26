# brain-bit-ledger
Ledger based application to visualize knowledge consumption velocity (kcv)

## Prerequisites
- Nodejs
- yarn || npm


## Environment Variables (.env)

**Firebase**
```
REACT_APP_FIREBASE_KEY
REACT_APP_FIREBASE_DOMAIN
REACT_APP_FIREBASE_DATABASE
REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_SENDER_ID
```
![firebase](https://image.ibb.co/maGOnS/image.png)


**Google Analytics**
```
REACT_APP_GA_TRACKING_NUMBER  # Google Analytics tracking number
```

**Hotjar**
```
REACT_APP_HJID  # Hotjar ID
REACT_APP_HJSV  # Hotjar Snippet Version
```


## Setup

```bash
yarn install
yarn start
```


## Milestones
01. *Project Inception:* 2018-05-22
02. *Hosted on Netlify* 2018-05-26
    - sdf

## References
- [CoderJourney Learn React Video Tutorials](https://www.youtube.com/playlist?list=PLbG4OyfwIxjFKJE_ZVZxsSt1ESc9S7kFb)
- [Add React to a New Application](https://reactjs.org/docs/add-react-to-a-new-app.html)
- [Netlify Continuous Deployment](https://www.netlify.com/docs/continuous-deployment/)
![netlify deployment configuration](https://image.ibb.co/iXWbVo/Screen_Shot_2018_05_26_at_3_46_04_PM.png)

## Recommended Dev Tools
- [WebStorm](https://www.jetbrains.com/webstorm/)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- ... [Vim](https://www.youtube.com/watch?v=dQw4w9WgXcQ)


## Using WebStorm
### Interactive Debugging React JavaScript
![javascript_react_configuration](https://image.ibb.co/grjXGn/Screen_Shot_2018_04_17_at_5_23_12_PM.png)

### Interactive Debugging Jest Tests
![jest_configuration](https://image.ibb.co/gnY5XS/Screen_Shot_2018_04_16_at_5_20_22_PM.png)


## TODO
- Add `CircleCI`
- Add `Monitoring Framework (Rollbar?)`
- Add `Acceptance Tests Framework`
- Add `Feature Toggles`
