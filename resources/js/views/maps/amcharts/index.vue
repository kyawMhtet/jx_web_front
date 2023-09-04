<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import Basic from "./basic.vue";
import Mapline from "./mapline.vue";
import Pacific from "./pacific.vue"

/**
 * amcharts-map component
 */
export default {
  components: {
    Layout,
    PageHeader,
    Basic,
    Mapline,
    Pacific
  },
  data() {
    return {
      title: "Amcharts",
      items: [
        {
          text: "Maps",
          href: "/"
        },
        {
          text: "Amcharts",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <b-row>
      <b-col lg="6">
        <b-card no-body>
          <b-card-header>
            <b-card-title class="mb-0">Vector With Point</b-card-title>
          </b-card-header>
          <b-card-body>
            <Basic />
          </b-card-body>
        </b-card>
      </b-col>

      <b-col lg="6">
        <b-card no-body>
          <b-card-header>
            <b-card-title class="mb-0">Line With Point</b-card-title>
          </b-card-header>
          <b-card-body>
            <Mapline />
          </b-card-body>
        </b-card>
      </b-col>

      <b-col lg="6">
        <b-card no-body>
          <b-card-header>
            <b-card-title class="mb-0">Pacific Map</b-card-title>
          </b-card-header>
          <b-card-body>
            <Pacific />
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </Layout>
</template>