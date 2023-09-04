<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import { phosphorIcons } from "../../common/data";

export default {
  data() {
    return {
      icons: phosphorIcons,
      title: "Phosphor",
      items: [
        {
          text: "Icons",
          href: "/",
        },
        {
          text: "Phosphor",
          active: true,
        },
      ],
    };
  },
  mounted() {
    const keys = Object.keys(this.icons);
    this.loadIconList(keys);
  },
  methods: {
    loadIconList(datas) {
      let icons = '';
      for (const data of datas) {
        icons += `<div class="col-xl-3 col-lg-4 col-sm-6"> <i class="${data}"></i> ${data} </div>`;
      }
      document.getElementById("iconList").innerHTML = icons;
    },

    iconChange(event) {
      const keys = Object.keys(this.icons);
      const selectvalue = event.target.value;
      const filterData = selectvalue ? keys.filter(function (productlist) {
        return productlist.split("-").slice(-1).pop() === selectvalue;
      }) : keys;
      this.loadIconList(filterData);
    }
  },
  components: {
    Layout,
    PageHeader,
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <b-row>
      <b-col cols="12">
        <b-card no-body>
          <b-card-header>
            <div class="d-flex">
              <div class="flex-grow-1">
                <b-card-title>Examples</b-card-title>
                <p class="text-muted mb-0">Use <code>&lt;i class="ph-**">&lt;/i></code> class.</p>
              </div>
              <div class="flex-shrink-0">
                <select class="form-select" id="icon-select" aria-label="Default select example"
                  @change="(e) => iconChange(e)">
                  <option value="">All icons</option>
                  <option value="light">light</option>
                  <option value="thin">thin</option>
                  <option value="bold">bold</option>
                  <option value="fill">fill</option>
                </select>
              </div>
            </div>
          </b-card-header>
          <b-card-body class="pt-0">
            <b-row class="icon-demo-content" id="iconList"></b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </Layout>
</template>