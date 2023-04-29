<template>
    <div>
        X : <input type="text" v-model.number="x" /><br/>
        Y : <input type="text" v-model.number="y" /><br/>
        <div>결과 : {{result}}</div>
    </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
    name : "Calc7",
    setup() {
        const x = ref(10);
        const y = ref(20);
        const result = ref(30);
        
        watch([x, y], ([currentX, currentY], [oldX, oldY] )=>{
            if (currentX !== oldX) console.log(`X : ${oldX} ==> ${currentX}`)
            if (currentY !== oldY) console.log(`Y: ${oldY} ==> ${currentY}`)
            result.value = currentX + currentY;
        })
        return { x, y, result } 
    }
}
</script>
