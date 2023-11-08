export type Message = {
  id?: string;
  text: string;
  createdAt: any;
  sender?: string | null | undefined;
  roomId: string | undefined;
};

// Change the sender property to be of type User:
