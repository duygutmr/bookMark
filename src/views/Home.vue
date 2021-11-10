<template>
  <div class="home">
    <AppHeader />
    <div class="flex flex-row">
      <Sidebar />
       <AppBookmarkList />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Home/Sidebar";
// @ is an alias to /src

export default {
  components: {
    Sidebar,
 
  },
};
</script>

