<template>
    <div class="modal">
        <div class="box">
            처리중
        </div>
    </div>
</template>

<script>
export default {
    name : "Modal"   
}
</script>
  
<style scoped>
.modal { display: block; position: fixed; z-index: 1; 
    left: 0; top: 0; width: 100%; height: 100%;
    overflow: auto; 
    background-color: rgba(0,0,0,0.4); }
.box {   display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    position: absolute; left: 50%; top: 50%; background-color:aqua;
    border: double 3px gray; width:100px; height: 80px; 
    margin-top:-50px; margin-left:-50px;}
</style>
 
