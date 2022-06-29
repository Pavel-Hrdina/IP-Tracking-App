<template>
  <div class="flex flex-col h-screen max-h-screen">
    <!--Search / Results -->
    <div
      class="z-20 flex justify-center relative bg-hero-pattern bg-cover px-4 pt-8 pb-32"
    >
      <!--Input-->
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-6 font-bold">
          IP Address Tracker
        </h1>
        <div class="flex">
          <input
            type="text"
            class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none"
            placeholder="Search for any IP address or leave empty to get your ip info"
          />
          <i
            class="cursor-pointer bg-black text-white px-4 rounded-tr-md rounded-br-md fas fa-chevron-right flex items-center"
          ></i>
        </div>
      </div>
      <!--IP Info-->
      <IPInfo></IPInfo>
    </div>

    <!--map-->
    <div id="map" class="h-full z-10"></div>
  </div>
</template>

<script>
import IPInfo from "../components/IPInfo";
import leaflet from "leaflet";
import { onMounted } from "vue";

export default {
  name: "HomeView",
  components: { IPInfo },
  setup() {
    let mymap;

    onMounted(() => {
      mymap = leaflet.map("map").setView([51.505, -0.09], 13);

      leaflet
        .tileLayer(
          "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGF2ZWxoIiwiYSI6ImNsNHpsMmIyNDJlNnQza251bmZpbThmbmIifQ.scZln6jLRkH3wXBNvWVyiw",
          {
            attribution:
              '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            tileSize: 512,
            zoomOffset: -1,
            accessToken:
              "pk.eyJ1IjoicGF2ZWxoIiwiYSI6ImNsNHpsMmIyNDJlNnQza251bmZpbThmbmIifQ.scZln6jLRkH3wXBNvWVyiw",
          }
        )
        .addTo(mymap);
    });
  },
};
</script>
