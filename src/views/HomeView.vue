<template>
  <div class="flex flex-col h-screen max-h-screen">
    <!--Search / Results -->
    <div
      class="flex justify-center relative bg-hero-pattern bg-cover px-4 pt-8 pb-32"
    >
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-6 font-bold">
          IP Address Tracker
        </h1>
        <div class="flex">
          <input
            type="text"
            class="flex-1 py-3 px-2 rounder-tl-md rounder-bl-md focus:outline-none"
            placeholder="Search for any IP address or leave empty to get your ip info"
          />
          <i
            class="cursor-pointer bg-black text-white px-4 rounded-tr-md rounded-br-md fas fa-chevron-right flex items-center"
          ></i>
        </div>
      </div>
    </div>
    <!--Input-->
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
