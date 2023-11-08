import { Message } from "../types/messages.types";
import { auth } from "../firebase.config";
import timeFormater from "../utils/time-formater";

type Props = {
  message: Message;
};

const Messages = ({ message }: Props) => {
  const isCurrentUser = message.sender === auth.currentUser?.displayName;
  return (
    <div
      className={`flex flex-col rounded-lg shadow-xl overflow-hidden p-4 m-4 w-fit max-w-[49%] lg:max-w-[40%]
      ${
        isCurrentUser
          ? "items-end self-end bg-blue-100 rounded-br-none"
          : "items-start self-start bg-gray-100 rounded-bl-none"
      }
      `}
    >
      {!isCurrentUser && (
        <p className="text-gray-600 text-xs mb-1 border-b-2 border-gray-300 w-full font-thin tracking-wide">
          {message.sender}
        </p>
      )}
      <p className="text-gray-600 text-sm">{message.text}</p>
      <p className="text-gray-600 text-xs mt-1 font-thin tracking-tight self-end">
        {timeFormater(message.createdAt.toDate())}
      </p>
    </div>
  );
};

export default Messages;
