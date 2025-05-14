<script setup>
const booking = useBookingStore();
const { bookingResult } = storeToRefs(booking);
</script>

<template>
  <div class="container mt-5">
    <div>預約頁面</div>
  </div>
  <div class="container my-5">
    <div class="row g-5">
      <div class="col-md-8">
        <div class="room-details">
          <h1>{{ bookingResult.name }}</h1>
          <p class="text-muted">
            {{ bookingResult.description }}
          </p>

          <h3 class="mt-4">房型基本資訊</h3>
          <div class="row text-center py-3">
            <div class="col-4">
              <div class="info-icon">{{ bookingResult.areaInfo }}</div>
              <p>房間大小</p>
            </div>
            <div class="col-4">
              <div class="info-icon">{{ bookingResult.bedInfo }}</div>
              <p>床型</p>
            </div>
            <div class="col-4">
              <div class="info-icon">{{ bookingResult.maxPeople }}</div>
              <p>入住人數</p>
            </div>
          </div>

          <h3 class="mt-4">房間格局</h3>
          <ul class="list-unstyled d-flex gap-4">
            <li v-for="layout in bookingResult.layoutInfo" :id="layout.title">
              ✔ {{ layout.title }}
            </li>
          </ul>
          <h3 class="mt-4">房內設備</h3>
          <ul class="list-unstyled d-flex gap-4">
            <li
              v-for="facility in bookingResult.facilityInfo"
              :id="facility.title"
            >
              ✔ {{ facility.title }}
            </li>
          </ul>
          <h3 class="mt-4">備品提供</h3>
          <ul class="list-unstyled d-flex gap-4">
            <li v-for="amenity in bookingResult.amenityInfo" :id="amenity.title">
              ✔ {{ amenity.title }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="reservation-form">
          <h2>預訂房型</h2>
          <p>{{ bookingResult.name }}</p>
          <p class="text-muted">
            {{ bookingResult.description }}
          </p>

          <form>
            <div class="mb-3">
              <label for="checkin-date" class="form-label">入住</label>
              <input
                type="date"
                class="form-control"
                id="checkin-date"
                required
              />
            </div>
            <div class="mb-3">
              <label for="checkout-date" class="form-label">退房</label>
              <input
                type="date"
                class="form-control"
                id="checkout-date"
                required
              />
            </div>

            <div class="mb-3">
              <label for="guests" class="form-label">人數</label>
              <div class="d-flex align-items-center">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  id="minus-btn"
                >
                  -
                </button>
                <input
                  type="number"
                  id="guests"
                  class="form-control mx-2"
                  value="2"
                  min="1"
                  :max="bookingResult.maxPeople"
                  style="width: 60px"
                />
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  id="plus-btn"
                >
                  +
                </button>
              </div>
            </div>

            <p class="price">NT$ {{ bookingResult.price }}</p>

            <button type="submit" class="btn btn-primary w-100">
              立即預訂
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>