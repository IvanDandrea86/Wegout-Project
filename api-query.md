### Query 
```
  me: User
  findUserById(user_id: String!): User!
  findUserByEmail(email: String!): User!
  findAllUser: [User!]!
  findChatById(_id: String!): Chat!
  findAllChat: [Chat!]!
  findChatbyUser: Chat!
  getMessages(chat: String!): [Message!]!

```
### Mutation 
```
  deleateAllUser: Boolean!
  deleteUser(_id: String!): Boolean!
  createUser(
    location: String!
    lastname: String!
    firstname: String!
    password: String!
    email: String!
  ): UserResponse!
  updateUser(info: UserInfoInput!, email: String!): User
  login(password: String!, email: String!): UserResponse!
  logout: Boolean!
  forgotPassword(email: String!): Boolean!
  changePassword(token: String!, password: String!): UserResponse!
  requestVerifyEmail(email: String!): Boolean!
  verifiy(token: String!): UserResponse!
  addEvent(userEmail: String!, eventId: String!): Boolean!
  removeEvent(userEmail: String!, eventId: String!): Boolean!
  createChat(user: [String!]!): ChatResponse!
  sendMessage(chat: String!, body: String!): Message!

```

### Subscription 
```
  messageSent: Message!
  
```
