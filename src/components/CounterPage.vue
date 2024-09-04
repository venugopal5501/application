<template>
    <h1>Counter Page</h1>
    <h2>{{ data }}</h2>
    <button v-on:click="clickingInc">Increment</button>
    <button v-on:click="clickingDec">Decrement</button>
    <button v-on:click="IncBy5(20)">Increment By 5</button>
</template>
<script>
export default {
    name: 'CounterPage',
    // data() {
    //     return {
    //         data: 0,
    //         value: 5
    //     }
    // },
    data: function () {
        return {
            data: 0,
            value: 5
        }
    },
    methods: {
        clickingInc: function () {
            this.data = this.data + 1
        },
        clickingDec: function () {
            this.data = this.data - 1;

        },
        IncBy5: function (value) {
            this.data = this.data + value
        }
    }
}
</script>
<style></style>