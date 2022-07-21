<template>
    <div class="co-card">
        <div>{{ category }}</div>
        <div>{{ organizer }}</div>
    </div>
</template>

<style>
.co-card {
    font-size: 20px;
}
</style>

<script>
export default {
    name: 'CategoryOrganizerCard',
    props: {
        category: {
            type: String,
            required: true,
        },
        organizer: {
            type: String,
            required: true,
        }
    }
}

</script>
