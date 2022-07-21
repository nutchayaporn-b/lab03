<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <CategoryOrganizerCard v-for="event in events" :key="event.id" :category="event.category"
      :organizer="event.organizer" />
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
import CategoryOrganizerCard from '@/components/CategoryOrganizerCard.vue';
export default {
  name: 'HomeView',
  components: {
    EventCard,
    CategoryOrganizerCard
  },
  data() {
    return {
      events: [
        {
          id: 5928101,
          category: 'animal walfare',
          title: 'Cat Adoption Day',
          description: 'Find your new feline friend at this event',
          location: 'Meow town',
          date: 'Januanry 28, 2022',
          time: '12:00',
          petsAllowed: true,
          organizer: 'Kat Laydee'
        }
      ]
    };
  }
};
</script>
