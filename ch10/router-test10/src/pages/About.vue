<template>
    <div class="card card-body">
        <h2>About {{user.name}}</h2>
        <p>Tel : {{user.tel}}</p>
        <p>Address : {{user.address}}</p>
    </div>
</template>

<script>
import { reactive } from "vue";

export default {
  async setup() {
    const user = reactive({ no:0, name:"", tel:"", address:"" });
    const url = "https://contactsvc.bmaster.kro.kr/contacts_long?pageno=1";
    const response = await fetch(url);
    const contactList = await response.json();
    user.no = contactList.contacts[0].no;
    user.name = contactList.contacts[0].name;
    user.tel = contactList.contacts[0].tel;
    user.address = contactList.contacts[0].address;

    return { user };
  }
}
</script>
