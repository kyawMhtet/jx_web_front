<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

export default {
  name: "UseDropzoneDemo",
  data() {
    return {
      title: "Starter",
      items: [
        {
          text: "Pages",
          href: "/",
        },
        {
          text: "Starter",
          active: true,
        },
      ]
    };
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
    
  </Layout>
</template>
