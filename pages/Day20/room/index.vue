<script setup>
const route = useRoute();
const router = useRouter();
const booking = useBookingStore();

const { fetchRoomList } = booking;
const { roomsList } = storeToRefs(booking);

await fetchRoomList();
</script>

<template>
  <div class="container mt-4">
    <h2>房型 index {{ route.fullPath }}</h2>
    <div class="row justify-content-center gy-3">
      <div class="col-8 col-md-6 col-lg-3" v-for="room in roomsList">
        <div
          class="card h-100 shadow-sm"
          @click="router.push(`/Day20/room/${room._id}`)"
        >
          <img :src="room.imageUrl" class="card-img-top" alt="Room Image" />
          <div class="card-body d-flex flex-column">
            <h3 class="card-title">{{ room.name }}</h3>
            <p class="card-text flex-grow-1">{{ room.description }}</p>
            <ul class="list-unstyled">
              <li><strong>面積:</strong> {{ room.areaInfo }}</li>
              <li><strong>床型:</strong> {{ room.bedInfo }}</li>
              <li><strong>最大容納人數:</strong> {{ room.maxPeople }}</li>
              <li><strong>價格:</strong> {{ room.price }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 200px;
  max-width: 100%;
}
</style>