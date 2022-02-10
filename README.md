# WeGoOut_Project
## Client/Front-end
### Technologies
---
- React
- Material UI
- Apollo Client
- CSS
- Typescript


## Server/Backe-end
### Technologies
---

- Node.JS
- Express.JS
- Graphql
- Apollo Server
- Typescript
- MongoDb
- Redis


## Run Development 
---
```
npm run install-app
npm run dev-server
npm run dev-client
npm run dev

```
## Run  
---
```
npm run build
npm run start

```
## Install Note
---
To run you have an a redis server running locally on your machine.
```
redis-client

```

## Feauturs
---

- [Api Query](api-query.md)
- Login/Logout/Signup
- Password Recovery
- User Email Verification
- Update personal info
- Fetch Events basedon Geolocalization
- Filter Events by Categories/Radius/Keywords
- Search People 
- Add "Interest to go.."
- See list of people interest in one event
- Chat
- Push Notification (WIP)
- Chat condition(WIP)
- Limit Chat Based on subscription(WIP)
- Payment system (WIP)
- Dark mode Theme
- Different Languages (Add Translation)


## Some Snapshot
---
### Login
![Login](./snapshot/Signin.png)
### Register
![Register](./snapshot/Signup.png)
### Post
![Post](./snapshot/Post_Comment.png)
### Profile
![Profile](./snapshot/Profile.png)
### Search
![Search](./snapshot/Search.png)
### Reels
![Reels](./snapshot/ReelsPost.png)











## Note

Must overload module "express-session"
to add userid attribute to req.session
Set "request.credentials": "include",
into Graphql PLayGround to recvie session cookie