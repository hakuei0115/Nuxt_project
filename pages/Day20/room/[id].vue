<script setup>
const router = useRouter();
const route = useRoute();
const booking = useBookingStore();
const { roomsDetail } = storeToRefs(booking);
const { fetchRoomDetail, setBookingResult } = booking;

const { id } = route.params;

await fetchRoomDetail(id);

const handleReservation = () => {
  setBookingResult(roomsDetail.value);
  router.push("/Day20/booking");
}

const isProvide = function (isProvideBoolean = false) {
  return isProvideBoolean ? "提供" : "未提供";
};
</script>

<template>
  <div class="container">
    <h2>房型詳細頁面</h2>
    <button class="btn btn-outline-primary" @click="router.go(-1)">
      回上一頁
    </button>
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <!-- 以 Pinia 的資料渲染 HTML  -->
        <div class="room-page">
          <div class="room-header">
            <h1 class="room-name">{{ roomsDetail.name }}</h1>
            <p class="room-description">
              {{ roomsDetail.description }}
            </p>
          </div>

          <div class="room-gallery">
            <img
              :src="roomsDetail.imageUrl"
              :alt="roomsDetail.name"
              class="room-main-image"
            />
            <ul class="room-image-list">
              <li v-for="(imageUrl, index) in roomsDetail.imageUrlList">
                <img :src="imageUrl" :alt="`${roomsDetail.name}圖片${index + 1}`" />
              </li>
            </ul>
            <NuxtLink class="btn btn-lg btn-warning" to="/Day20/booking" @click="handleReservation">
              >立即預約</NuxtLink
            >
          </div>

          <div class="room-info">
            <div class="info-block">
              <h2>房間資訊</h2>
              <p>面積: {{ roomsDetail.areaInfo }}</p>
              <p>床型: {{ roomsDetail.bedInfo }}</p>
              <p>最多容納人數: {{ roomsDetail.maxPeople }}</p>
              <p>價格: {{ roomsDetail.price }}</p>
            </div>

            <div class="info-block">
              <h2>房間配置</h2>
              <ul>
                <li v-for="layout in roomsDetail.layoutInfo" :key="layout.title">
                  {{ layout.title }}: {{ isProvide(layout.isProvide) }}
                </li>
              </ul>
            </div>

            <div class="info-block">
              <h2>房內設施</h2>
              <ul>
                <li v-for="facility in roomsDetail.facilityInfo" :key="facility.title">
                  {{ facility.title }}: {{ isProvide(facility.isProvide) }}
                </li>
              </ul>
            </div>

            <div class="info-block">
              <h2>客房備品</h2>
              <ul>
                <li v-for="amenity in roomsDetail.amenityInfo" :key="amenity.title">
                  {{ amenity.title }}: {{ isProvide(amenity.isProvide) }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.room-page {
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.room-header {
  text-align: center;
  margin-bottom: 30px;
}

.room-name {
  font-size: 2rem;
  color: #333;
}

.room-description {
  font-size: 1rem;
  color: #666;
}

.room-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.room-main-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
}

.room-image-list {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0;
  list-style: none;
}

.room-image-list img {
  width: 100px;
  height: auto;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s;
}

.room-image-list img:hover {
  transform: scale(1.1);
}

.room-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-block {
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 10px;
}

.info-block h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #444;
}

.info-block p,
.info-block ul {
  font-size: 1rem;
  color: #555;
}

.info-block ul {
  list-style: none;
  padding-left: 0;
}

.info-block ul li {
  margin-bottom: 5px;
}
</style>