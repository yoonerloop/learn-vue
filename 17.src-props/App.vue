<template>
    <div>
        <Student name="张三1" age=41 sex="男"/>
        <hr>
        <Student name="张三2" age=42 sex="男"/>
        <hr>
        <Student name="张三3" :age='34' sex="男"/>
    </div>
</template>

<script>
import Student from './components/Student.vue'

export default {
    name: 'App',
    components: {
        Student
    }
}
</script>
