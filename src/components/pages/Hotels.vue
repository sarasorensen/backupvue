<template>
  <div>
    <h1>Hotels</h1>
    <hotels-list></hotels-list>
  </div>
</template>

<script>
import HotelsList from "./requests/HotelsList.vue";
export default {
  components: {
    HotelsList,
  },
};
</script>
