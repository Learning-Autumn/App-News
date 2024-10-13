<template>
    <div>
        <hr>
        <ul>
            <li v-for="item in news" v-bind:key="item.id">{{ item.title }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['news']
    }
</script>

<style lang="scss" scoped>

</style>