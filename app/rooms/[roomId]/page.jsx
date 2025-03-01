import rooms from "@/data/rooms.json";
import Heading from "@/components/Heading";

export default function RoomPage({ params }) {
  const { roomId } = params;
  const room = rooms.find((room) => room.$id === roomId);

  if (!room) {
    return <Heading title={"Room Not Found"} />;
  }

  return <h1>Room #{roomId}</h1>;
}
