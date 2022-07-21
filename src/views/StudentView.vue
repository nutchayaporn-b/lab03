<template>
    <div
        style="border: 1px solid black; display:flex; flex-direction: column; justify-content: center; align-items: center;">
        <StudentCard v-for="student in students" :key="student.id" :student="student" />
    </div>
</template>

<script>
import StudentCard from "@/components/StudentCard.vue";
export default {
    name: 'StudentView',
    components: {
        StudentCard
    },
    props: {
        students: {
            type: Object,
            required: true,
        }
    }
}
</script>