<template>
    <h1>Counter Page</h1>
    <h2>{{ data }}</h2>
    <button v-on:click="increment">Increment</button>
    <button v-on:click="decrement">Decrement</button>
    <button v-on:click="doubleInc">Increment By 5</button>
</template>
<script>
export default {
    name: 'CounterPage',
    data() {
        return {
            data: 0,
            value: 5
        }
    },
    methods: {
        increment() {
            this.data = this.data + 1
        },
        decrement() {
            this.data = this.data - 1;

        },
        doubleInc() {
            this.data = this.data + this.value
        }
    }
}
</script>
<style></style>