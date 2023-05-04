<template>
    <div>
        <h4>姓名：{{ name }}</h4>
        <h4>年龄：{{ age - 10 }}</h4>
        <h4>性别：{{ sex }}</h4>
    </div>
</template>

<script>
export default {
    name: "Student",
    // 方式1
    props: ['name', 'age', 'sex'],
    // 方式2
    // props: {
    //     name: String,
    //     age: String, // 可以指定接受的数据类型
    //     sex: String,
    // },
    // 方式3
    // props: {
    //     name: {
    //         type: String,
    //         require: true
    //     },
    //     age: {
    //         type: Number,
    //         default: 20
    //     }
    // },
    data() {
        return {}
    }
}
</script>

<style scoped>

</style>