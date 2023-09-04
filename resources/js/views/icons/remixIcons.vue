<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import { remixIcons } from "../../common/data";

export default {
  data() {
    return {
      icons: remixIcons,
      iconsList: [],
      title: "Remix",
      items: [
        {
          text: "Icons",
          href: "/",
        },
        {
          text: "Remix",
          active: true,
        },
      ],
    };
  },
  components: {
    Layout,
    PageHeader,
  },
  mounted() {
    let iconData = "";

    Object.keys(this.icons).forEach(function (key) {
      var iconType = 'ri-';
      var iconTypeLabel = ' ' + key + ' ';
      var multiIcon = key === "Editor" ? '' : '-line';
      iconData += '<div class="card"><div class="card-body"><h4 class="card-title">' + iconTypeLabel + '</h4><p class="card-title-desc mb-2">Use <code>&lt;i class="' + iconType + 'bold"&gt;&lt;/i&gt;</code> <span class="badge badge-success">v 2.4.1</span>.</p><div class="row icon-demo-content">';

      Object.keys(remixIcons[key]).forEach(function (k) {
        iconData += `<div class="col-xl-3 col-lg-4 col-sm-6">\
                    <i class="ri-${k}${multiIcon}"></i> ${iconType}${k}${multiIcon}\
                </div>`;
        if (multiIcon)
          iconData += `<div class="col-xl-3 col-lg-4 col-sm-6">\
            <i class="ri-${k}-fill"></i> ${iconType}${k}-fill\
        </div>`;
      });
      iconData += '</div></div></div>';
    });
    document.getElementById("icons").innerHTML = iconData;
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <b-row>
      <b-col cols={12} id="icons"></b-col>
    </b-row>
  </Layout>
</template>