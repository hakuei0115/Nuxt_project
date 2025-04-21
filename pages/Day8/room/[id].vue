<script setup>
const route = useRoute();
const router = useRouter();
const { isLoading, roomDetail, getRoomDetail } = useRoom();

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

onMounted(async () => {
    try {
        const id = route.params.id;
        await getRoomDetail(id);
    } catch (error) {
        console.error('Error fetching room details:', error);
        alert('無法獲取房型詳細資料，請稍後再試。');
        isLoading.value = false;
    }
});
</script>

<template>
    <h2>房型詳細頁面</h2>
    <div class="container">
        <button type="button" class="btn btn-primary" @click="router.push('/Day8/room')">回上一頁</button>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="room-page">
                    <div class="room-header">
                        <h1 class="room-name">{{ roomDetail.name }}</h1>
                        <p class="room-description">{{ roomDetail.description }}</p>
                    </div>

                    <div class="room-gallery">
                        <img :src="roomDetail.imageUrl" alt="尊爵雙人房主圖" class="room-main-image" />
                        <div class="room-image-list">
                            <img v-for="image in roomDetail.imageUrlList" :src="image" />
                        </div>
                    </div>

                    <div class="room-info">
                        <div class="info-block">
                            <h2>房間資訊</h2>
                            <p>{{ roomDetail.areaInfo }}</p>
                            <p>床型: {{ roomDetail.bedInfo }}</p>
                            <p>最多容納人數: {{ roomDetail.maxPeople }}</p>
                            <p>價格: NT${{ roomDetail.price }}</p>
                        </div>

                        <div class="info-block">
                            <h2>房間配置</h2>
                            <ul>
                                <li v-for="(layout, index) in roomDetail.layoutInfo" :key="index">
                                    {{ layout.title }} : {{ layout.isProvide ? '提供' : '不提供' }}
                                </li>
                            </ul>
                        </div>

                        <div class="info-block">
                            <h2>房內設施</h2>
                            <ul>
                                <li v-for="(facility, index) in roomDetail.facilityInfo" :key="index">
                                    {{ facility.title }} : {{ facility.isProvide ? '提供' : '不提供' }}
                                </li>
                            </ul>
                        </div>

                        <div class="info-block">
                            <h2>客房備品</h2>
                            <ul>
                                <li v-for="(amenity, index) in roomDetail.amenityInfo" :key="index">
                                    {{ amenity.title }} : {{ amenity.isProvide ? '提供' : '不提供' }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <ClientOnly>
        <Loading v-model:active="isLoading" />
    </ClientOnly>
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