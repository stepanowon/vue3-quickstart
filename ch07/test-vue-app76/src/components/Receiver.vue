<template>
    <div style="border:solid 1px gray; margin:5px; padding:5px;">
        <h2>Receiver</h2>
        <hr />
        <h2>전송된 텍스트 : {{textMessage}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Receiver",
        created() {
            this.emitter.on("message", this.receiveHandler);
        },
        data() {
            return {
                textMessage: ""
            }
        },
        methods: {
            receiveHandler(msg) {
                this.textMessage = msg;
            }
        },
    }
</script>