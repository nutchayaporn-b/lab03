<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<script>
import EventCard from '@/components/EventCard.vue';
export default {
  name: 'EventListView',
  components: {
    EventCard,
  },
  props: {
    events: {
      type: Object,
      required: true,
    }
  }
};
</script>
