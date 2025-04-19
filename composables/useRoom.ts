interface RoomInfo {
  title: string;
  isProvide: boolean;
}

interface Rooms {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageUrlList: string[];
  areaInfo: string;
  bedInfo: string;
  maxPeople: number;
  price: number;
  status: number;
  layoutInfo: RoomInfo[];
  facilityInfo: RoomInfo[];
  amenityInfo: RoomInfo[];
  createdAt: string;
  updatedAt: string;
}

export const useRoom = () => {
  const roomsList = ref<Rooms[]>([]);

  const getRooms = async () => {
    await fetch("https://nuxr3.zeabur.app/api/v1/rooms")
      .then((res) => res.json())
      .then((data) => {
        roomsList.value = data.result;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return {
    roomsList,
    getRooms
  }
}