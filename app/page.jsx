import rooms from "@/data/rooms.json";
import RoomCard from "@/components/RoomCard";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <div>
      <Heading title={"Available Rooms"} />
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard key={room.id} room={room} />)
      ) : (
        <p>no rooms available</p>
      )}
    </div>
  );
}
