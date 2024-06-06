<script setup lang="ts">
  import {reactive} from 'vue'
  import MessageList from '@/components/list/MessageList.vue'
  import FooterTabbar from '@/components/FooterTabbar.vue'
  import {messageStore} from '@/store/message'
  import {userStore} from '@/store/user'
  const store = messageStore()
  const uStore = userStore()
  store.getSystemMessageList()
  store.getChatMessageList()
</script>
<template>
  <MessageList :messageList="store.systemNewMessage" type="system"></MessageList>
  <MessageList :messageList="store.messageList" :type="uStore.role == 1?'talk':'talent'"></MessageList>
  <FooterTabbar></FooterTabbar>
</template>
<style scoped>
  
</style>