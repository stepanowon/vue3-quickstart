<template>
    <VueCsspin message="Loading" spin-style="cp-flip" />
</template>

<script>
import { VueCsspin } from 'vue-csspin'
import 'vue-csspin/dist/vue-csspin.css'

export default {
    name : "Loading",
    components : { VueCsspin },
}
</script>
