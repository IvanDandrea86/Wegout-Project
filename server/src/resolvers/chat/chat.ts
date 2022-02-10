import { ObjectId } from "mongodb";
import { UserModel } from "../../entities/user.entity";
import {
  Publisher,
  Resolver,
  Arg,
  Query,
  Mutation,
  Ctx,
  PubSub,
  Subscription,
  Root,
} from "type-graphql";
import { Service } from "typedi";
import { Chat, ChatModel } from "../../entities/chat.entity";
import { ChatResponse, MyContext } from "../../types/types";

const channel = "CHAT_CHANNEL";
interface ChatPayload {
  _id: string;
  users: Array<string>;
  createdAt: string;
  updatedAt: string;
  lastMessage: string;
}

@Service() // Dependencies injection
@Resolver(() => Chat)
export default class ChatResolver {
  @Query(() => Chat, { name: "findChatById" })
  async findChatById(@Arg("_id") _id: string) {
    return await ChatModel.findOne({ _id: _id });
  }

  @Query(() => [Chat], { name: "findAllChat" })
  async findAllChat() {
    return await ChatModel.find({});
  }
  @Query(() => Chat, { name: "findChatbyUser" })
  async findChatByUser(@Ctx() { req }: MyContext) {
    return await ChatModel.findOne({
      users: { $contains: req.session.userID },
    });
  }

  @Mutation(() => ChatResponse, { name: "createChat" })
  async createChat(
    @PubSub(channel) pubsub: Publisher<Chat>,
    @Arg("user", (type) => [String]) userIds: String[],
    @Ctx() { req }: MyContext
  ) {
    const userId = req.session.userID;
    userIds.push(userId as string);
    const Id = new ObjectId();
    try {
      const exist = await ChatModel.findOne({ users: userIds }).exec();
      if (exist) {
        return { chat: exist };
      } else {
        const chat = await ChatModel.create({
          _id: Id,
          users: userIds,
          lastMessage: "",
        });

        await UserModel.updateMany(
          { _id: { $in: userIds } },
          {
            $push: { chatList: chat._id },
          }
        );
        await pubsub(chat);
        return { chat };
      }
    } catch (err) {
      console.log(err);
    }

    return {};
  }
  @Subscription({
    topics: channel,
    filter: ({ payload, args }) => payload.users.includes(args.userId),
  })
  chatAdded(@Root() chat: ChatPayload, @Arg("userId") userId: string): Chat {
    return {
      _id: chat._id,
      users: chat.users,
      lastMessage: chat.lastMessage,
      createdAt: new Date(chat.createdAt),
      updatedAt: new Date(chat.updatedAt),
    };
  }
}
