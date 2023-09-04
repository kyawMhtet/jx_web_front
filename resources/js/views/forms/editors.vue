<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  data() {
    return {
      title: "Editors",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Editors",
          active: true,
        },
      ],
      editor: ClassicEditor,
      editorData: ""
    };
  },
  components: {
    Layout,
    PageHeader,
    ckeditor: CKEditor.component
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <b-row>
      <b-col lg="12">
        <b-card no-body>
          <b-card-header class="align-items-center d-flex">
            <b-card-title class="mb-0">Ckeditor Classic Editor</b-card-title>
          </b-card-header>

          <b-card-body>
            <p class="text-muted">
              Use <code>ckeditor-classic</code> class to set ckeditor classic
              editor.
            </p>
            <div class="ckeditor-classic">
              <ckeditor v-model="editorData" :editor="editor"></ckeditor>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </Layout>
</template>