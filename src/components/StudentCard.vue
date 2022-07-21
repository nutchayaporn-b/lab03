<template>
    <h1>Name: {{ student.name }} {{ student.surname }}, GPA: {{ student.gpa }}</h1>
</template>

<script>
export default {
    name: 'StudentCard',
    props: {
        student: {
            type: Object,
            required: true,
        }
    }
}
</script>