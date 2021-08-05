<template>
  <transition-group name="fade" tag="div" class="notifications-wrapper">
    <Notification
        v-for="note in $store.getters['notifications/notifications']"
        :data="note"
        :key="note.id"
    ></Notification>
  </transition-group>
</template>

<script>
import Notification from "@/components/Notifications/Notification";
export default {
  name: "NotificationsGroup",
  components: {Notification}
}
</script>

<style scoped>

</style>
