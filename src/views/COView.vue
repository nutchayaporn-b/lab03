<template>
    <div style="margin-top:10px;">
        <CategoryOrganizerCard v-for="event in events" :key="event.id" :category="event.category"
            :organizer="event.organizer" />
    </div>
</template>

<script>
import CategoryOrganizerCard from "@/components/CategoryOrganizerCard.vue";
export default {
    name: "COView",
    props: {
        events: {
            type: Object,
            required: true
        }
    },
    components: { CategoryOrganizerCard }
}
</script>