<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import "prismjs";

export default {
    data() {
        return {
            title: "Dropdowns",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Dropdowns",
                    active: true,
                },
            ],
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

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Single Button Dropdown</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>btn</code> class at to create a dropdown
                            toggle with &lt;button&gt; element.
                        </p>
                        <div class="d-flex flex-wrap gap-3">
                            <b-dropdown text="Dropdown button" variant="secondary">
                                <b-dropdown-item href="#">Action</b-dropdown-item>
                                <b-dropdown-item href="#">Another action</b-dropdown-item>
                                <b-dropdown-item href="#">Something else here</b-dropdown-item>
                              </b-dropdown>

                              <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
                                <template #button-content>
                                  &#x1f50d;
                                </template>
                                <b-dropdown-item href="#">Action</b-dropdown-item>
                                <b-dropdown-item href="#">Another action</b-dropdown-item>
                                <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                              </b-dropdown>

                            <b-dropdown text="Dropdown link" variant="secondary" toggle-tag="a">
                                <b-dropdown-item href="#">Action</b-dropdown-item>
                                <b-dropdown-item href="#">Another action</b-dropdown-item>
                                <b-dropdown-item href="#">Something else here</b-dropdown-item>
                              </b-dropdown>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- Single Button Dropdown --&gt;
&lt;b-dropdown variant=&quot;secondary&quot; text=&quot;Dropdown button&quot; id=&quot;dropdownMenuButton&quot;&gt;
    &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Action&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
    </code>
<code>&lt;b-dropdown variant=&quot;secondary&quot; text=&quot;Dropdown link&quot;&gt;
    &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Action&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Dropdown Color Variant</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>btn-</code> class with below mentioned variation to color dropdown toggle.</p>
                        <div class="d-flex flex-wrap gap-3">
                            <div>
                                <b-button-group class="me-3">
                                  <b-dropdown variant="primary">
                                    <template v-slot:button-content> Primary </template>
                                    <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                    <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                                    <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                                  </b-dropdown>
                                </b-button-group>
              
                                <b-button-group class="me-3">
                                  <b-dropdown variant="success">
                                    <template v-slot:button-content> Success </template>
                                    <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                    <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                                    <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                                  </b-dropdown>
                                </b-button-group>
              
                                <b-button-group class="me-3">
                                  <b-dropdown variant="light">
                                    <template v-slot:button-content> Light </template>
                                    <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                    <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                                    <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                                  </b-dropdown>
                                </b-button-group>
                                <b-button-group class="me-3">
                                  <b-dropdown variant="info">
                                    <template v-slot:button-content> Info </template>
                                    <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                    <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                                    <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                                  </b-dropdown>
                                </b-button-group>
                                <b-button-group class="me-3">
                                  <b-dropdown variant="secondary">
                                    <template v-slot:button-content> Secondary </template>
                                    <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                    <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                                    <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                                  </b-dropdown>
                                </b-button-group>
              
                                <b-button-group class="me-3">
                                  <b-dropdown variant="warning">
                                    <template v-slot:button-content> Warning </template>
                                    <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                    <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                                    <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                                  </b-dropdown>
                                </b-button-group>
                                <b-button-group class="me-3">
                                  <b-dropdown variant="danger">
                                    <template v-slot:button-content> Danger </template>
                                    <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                    <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                                    <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                                  </b-dropdown>
                                </b-button-group>
              
                                <b-button-group>
                                  <b-dropdown variant="dark">
                                    <template v-slot:button-content> Dark </template>
                                    <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                    <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                                    <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                                  </b-dropdown>
                                </b-button-group>
                              </div>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
<pre class="language-markup" style="height: 310px;"><code>&lt;!-- Dropdown Variant --&gt;
&lt;b-button-group&gt;
    &lt;b-dropdown variant=&quot;primary&quot; text=&quot;Primary&quot;&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;
&lt;/b-button-group&gt;&lt;!-- /btn-group --&gt;</code>
    
<code>&lt;b-button-group&gt;
    &lt;b-dropdown variant=&quot;success&quot; text=&quot;Success&quot;&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;
&lt;/b-button-group&gt;&lt;!-- /btn-group --&gt;</code>
    
    <code>&lt;b-button-group&gt;
    &lt;b-dropdown variant=&quot;light&quot; text=&quot;Light&quot;&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;
&lt;/b-button-group&gt;&lt;!-- /btn-group --&gt;</code>
    
    <code>&lt;b-button-group&gt;
    &lt;b-dropdown variant=&quot;info&quot; text=&quot;Info&quot;&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;
&lt;/b-button-group&gt;&lt;!-- /btn-group --&gt;</code>
    
    <code>&lt;b-button-group&gt;
    &lt;b-dropdown variant=&quot;secondary&quot; text=&quot;Secondary&quot;&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;
&lt;/b-button-group&gt;&lt;!-- /btn-group --&gt;</code>
    
    <code>&lt;b-button-group&gt;
        &lt;b-dropdown variant=&quot;warning&quot; text=&quot;Warning&quot;&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;
&lt;/b-button-group&gt;&lt;!-- /btn-group --&gt;</code>
    
    <code>&lt;b-button-group&gt;
    &lt;b-dropdown variant=&quot;danger&quot; text=&quot;Danger&quot;&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;
&lt;/b-button-group&gt;&lt;!-- /btn-group --&gt;</code>
    
    <code>&lt;b-button-group&gt;
    &lt;b-dropdown variant=&quot;dark&quot; text=&quot;Dark&quot;&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
        &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;
&lt;/b-button-group&gt;&lt;!-- /btn-group --&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Split Button Dropdown</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>dropdown-toggle-split</code> to create split button dropdowns as a single button dropdown. </p>
                        <div class="d-flex flex-wrap gap-3">
                            <b-dropdown split text="Primary" variant="primary">
                              <b-dropdown-item href="#">Action</b-dropdown-item>
                              <b-dropdown-item href="#">Another action</b-dropdown-item>
                              <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                            </b-dropdown>
                            <b-dropdown split text="Success" variant="success">
                              <b-dropdown-item href="#">Action</b-dropdown-item>
                              <b-dropdown-item href="#">Another action</b-dropdown-item>
                              <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                            </b-dropdown>
                            <b-dropdown split text="Light" variant="light">
                              <b-dropdown-item href="#">Action</b-dropdown-item>
                              <b-dropdown-item href="#">Another action</b-dropdown-item>
                              <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                            </b-dropdown>
                            <b-dropdown split text="Info" variant="info">
                              <b-dropdown-item href="#">Action</b-dropdown-item>
                              <b-dropdown-item href="#">Another action</b-dropdown-item>
                              <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                            </b-dropdown>
                            <b-dropdown split text="Secondary" variant="secondary">
                              <b-dropdown-item href="#">Action</b-dropdown-item>
                              <b-dropdown-item href="#">Another action</b-dropdown-item>
                              <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                            </b-dropdown>
                            <b-dropdown split text="Warning" variant="warning">
                              <b-dropdown-item href="#">Action</b-dropdown-item>
                              <b-dropdown-item href="#">Another action</b-dropdown-item>
                              <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                            </b-dropdown>
                            <b-dropdown split text="Danger" variant="danger">
                              <b-dropdown-item href="#">Action</b-dropdown-item>
                              <b-dropdown-item href="#">Another action</b-dropdown-item>
                              <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                            </b-dropdown>
                            <b-dropdown split text="Dark" variant="dark">
                              <b-dropdown-item href="#">Action</b-dropdown-item>
                              <b-dropdown-item href="#">Another action</b-dropdown-item>
                              <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                            </b-dropdown>
                          </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- Split Button Dropdown --&gt;

    &lt;b-dropdown split variant=&quot;primary&quot; text=&quot;Primary&quot; &gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;</code>
    
    <code>&lt;b-dropdown split variant=&quot;suceess&quot; text=&quot;Success&quot; &gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;</code>
    
    <code>&lt;b-dropdown split variant=&quot;light&quot; text=&quot;Light&quot; &gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;</code>
    
    <code>&lt;b-dropdown split variant=&quot;info&quot; text=&quot;Info&quot; &gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;</code>
    
    <code>&lt;b-dropdown split variant=&quot;secondary&quot; text=&quot;Secondary&quot; &gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;</code>
    
    <code>&lt;b-dropdown split variant=&quot;Warning&quot; text=&quot;warning&quot; &gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;</code>
    
    <code>&lt;b-dropdown split variant=&quot;danger&quot; text=&quot;Danger&quot; &gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;</code>
    
    <code>&lt;b-dropdown split variant=&quot;dark&quot; text=&quot;Dark&quot; &gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Dropdown Sizing</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>btn-lg</code> class to create a large size dropdown button and <code>btn-sm</code> to create a small size dropdown button.</p>
                        <div class="d-flex flex-wrap gap-3 align-items-center">
                            <b-dropdown size="lg" variant="primary">
                              <template v-slot:button-content>
                                Large button
                              </template>
                              <b-dropdown-item-button>Action</b-dropdown-item-button>
                              <b-dropdown-item-button>Another action</b-dropdown-item-button>
                              <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                            </b-dropdown>
            
                            <b-dropdown size="lg" split text="Large split button" variant="light">
                              <b-dropdown-item-button>Action</b-dropdown-item-button>
                              <b-dropdown-item-button>Another action</b-dropdown-item-button>
                              <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                            </b-dropdown>
            
                            <b-dropdown size="sm" variant="primary">
                              <template v-slot:button-content>
                                Small button
                              </template>
                              <b-dropdown-item-button>Action</b-dropdown-item-button>
                              <b-dropdown-item-button>Another action</b-dropdown-item-button>
                              <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                            </b-dropdown>
            
                            <b-dropdown split text="Small split button" size="sm" variant="light">
                              <b-dropdown-item-button>Action</b-dropdown-item-button>
                              <b-dropdown-item-button>Another action</b-dropdown-item-button>
                              <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                            </b-dropdown>
                          </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- Dropdown Sizing --&gt;
    &lt;b-button-group&gt;
        &lt;b-dropdown size=&quot;lg&quot; variant=&quot;primary&quot; text=&quot;Large button&quot; &gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;</code>
    
    <code>&lt;b-button-group&gt;
        &lt;b-dropdown split size=&quot;lg&quot; variant=&quot;light&quot; text=&quot;Large split button&quot; &gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;</code>
    
    <code>&lt;b-button-group&gt;
        &lt;b-dropdown size=&quot;sm&quot; variant=&quot;primary&quot; text=&quot;Small button&quot; &gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;</code>
    
    <code>&lt;b-button-group&gt;
        &lt;b-dropdown split size=&quot;sm&quot; variant=&quot;light&quot; text=&quot;Small split button&quot; &gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Dark Dropdowns</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>dropdown-menu-dark</code> class onto an existing dropdown-menu to create dropdown items dark.</p>
                        <b-dropdown text="Dropdown button" menu-class="dropdown-menu-dark">
                            <b-dropdown-item-button>Action</b-dropdown-item-button>
                            <b-dropdown-item-button>Another action</b-dropdown-item-button>
                            <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item-button>Separated link</b-dropdown-item-button>
                          </b-dropdown>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
<pre class="language-markup"><code>&lt;!-- Dark Dropdowns --&gt;
    &lt;b-dropdown variant=&quot;secondary&quot; text=&quot;Dropdown button&quot; dark &gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Alignment options</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Dropdown demo with various <code>dropdown alignment</code> options.</p>
                        <div class="d-flex flex-wrap gap-3">
                            <b-button-group>
                              <b-dropdown text="Dropdown" variant="secondary">
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                              </b-dropdown>
                            </b-button-group>
                            <b-button-group>
                              <b-dropdown text="Right-aligned menu" right variant="secondary">
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                              </b-dropdown>
                            </b-button-group>
            
                            <b-button-group>
                              <b-dropdown text="Left-aligned, right-aligned lg" right toggle-class="dropdown-menu-lg-end"
                                variant="secondary">
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                              </b-dropdown>
                            </b-button-group>
            
                            <b-button-group>
                              <b-dropdown text="Right-aligned, left-aligned lg" toggle-class="dropdown-menu-lg-start"
                                variant="secondary">
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                              </b-dropdown>
                            </b-button-group>
            
                            <b-btn-group class="dropstart">
                              <b-dropdown text="Dropstart" dropleft variant="secondary">
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                              </b-dropdown>
                            </b-btn-group>
            
                            <b-btn-group class="dropend">
                              <b-dropdown text="Dropend" dropright variant="secondary">
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                              </b-dropdown>
                            </b-btn-group>
            
                            <b-btn-group class="dropup">
                              <b-dropdown text="Dropup" dropup variant="secondary">
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                              </b-dropdown>
                            </b-btn-group>
                          </div>

                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
<pre class="language-markup" style="height: 310px;"><code>&lt;!-- Alignment options --&gt;
    &lt;b-button-group&gt;
        &lt;b-dropdown variant=&quot;secondary&quot; text=&quot;Dropdown&quot; id=&quot;dropdownMenuButton&quot; &gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;</code>
    <code>
    &lt;b-button-group&gt;
        &lt;b-dropdown variant=&quot;secondary&quot; right text=&quot;Right-aligned menu&quot; &gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;</code>
    <code>
    &lt;b-button-group&gt;
        &lt;b-dropdown variant=&quot;secondary&quot; right text=&quot;Left-aligned, right-aligned lg&quot; &gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;</code>
    <code>
    &lt;b-button-group&gt;
        &lt;b-dropdown variant=&quot;secondary&quot; left text=&quot;Right-aligned, left-aligned lg&quot; &gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;</code>
    <code>
    &lt;b-button-group&gt;
        &lt;b-dropdown variant=&quot;secondary&quot; dropleft text=&quot;Dropstart&quot; &gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;</code>
    <code>
    &lt;b-button-group&gt;
        &lt;b-dropdown variant=&quot;secondary&quot; dropright  text=&quot;Dropend&quot; &gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;</code>
    <code>
    &lt;b-button-group&gt;
        &lt;b-dropdown variant=&quot;secondary&quot; dropup text=&quot;Dropup&quot; &gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Dropdown Options</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>data-bs-offset</code> or
                            <code>data-bs-reference</code> to change the position of the dropdown.
                        </p>

                        <div class="d-flex flex-wrap gap-3">
                            <b-dropdown id="dropdown-offset" variant="secondary" offset="10, 20" text="Offset" class="me-1">
                              <b-dropdown-item href="#">Action</b-dropdown-item>
                              <b-dropdown-item href="#">Another action</b-dropdown-item>
                              <b-dropdown-item href="#">Something else here</b-dropdown-item>
                            </b-dropdown>
            
                            <b-button-group>
                              <button type="button" class="btn btn-secondary">
                                Reference
                              </button>
                              <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false"
                                data-bs-reference="parent">
                                <span class="visually-hidden">Toggle Dropdown</span>
                              </button>
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                <li>
                                  <b-link class="dropdown-item" href="#">Action</b-link>
                                </li>
                                <li>
                                  <b-link class="dropdown-item" href="#">Another action</b-link>
                                </li>
                                <li>
                                  <b-link class="dropdown-item" href="#">Something else here</b-link>
                                </li>
                                <li>
                                  <hr class="dropdown-divider" />
                                </li>
                                <li>
                                  <b-link class="dropdown-item" href="#">Separated link</b-link>
                                </li>
                              </ul>
                            </b-button-group>
                          </div>

                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- Dropdown Options --&gt;
    &lt;b-dropdown variant=&quot;secondary&quot; offset="20" text=&quot;Offset&quot; id=&quot;dropdownMenuOffset&quot; &gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;
    </code>
    
    <code>
    &lt;b-button-group&gt;
        &lt;b-dropdown split variant=&quot;secondary&quot; dropup text=&quot;Reference&quot; &gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Auto Close Behavior</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the <code>autoClose</code> option to change this behavior of the dropdown.</p>
                        <div class="d-flex flex-wrap gap-3">
                            <b-button-group>
                              <b-dropdown text="Default dropdown" variant="light">
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                              </b-dropdown>
                            </b-button-group>
            
                            <b-button-group>
            
                              <b-button-group>
                                <b-dropdown text="Clickable outside" variant="light" auto-close="inside">
                                  <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                  <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                  <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                </b-dropdown>
                              </b-button-group>
                            </b-button-group>
            
                            <b-button-group>
                              <b-dropdown text="Clickable inside" variant="light" auto-close="outside">
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                              </b-dropdown>
                            </b-button-group>
            
                            <b-button-group>
                              <b-dropdown text="Manual close" variant="light" :auto-close="false">
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                <b-dropdown-item href="#">Menu item</b-dropdown-item>
                              </b-dropdown>
                            </b-button-group>
                          </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
<pre class="language-markup" style="height: 310px;"><code>&lt;!-- Default dropdown --&gt;
    &lt;b-button-group&gt;
        &lt;b-dropdown variant=&quot;light&quot; text=&quot;Default dropdown&quot; id=&quot;defaultDropdown&quot; &gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;</code>
    <code>&lt;!-- Clickable outside dropdown --&gt;
    &lt;b-button-group&gt;
        &lt;b-dropdown variant=&quot;light&quot; text=&quot;Clickable outside&quot; auto-close=&quot;inside&quot; id=&quot;dropdownMenuClickableOutside&quot; &gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;</code>
    <code>&lt;!-- Clickable inside dropdown --&gt;
    &lt;b-button-group&gt;
        &lt;b-dropdown variant=&quot;light&quot; text=&quot;Clickable inside&quot; auto-close=&quot;outside&quot; id=&quot;dropdownMenuClickableInside&quot; &gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;</code>
    <code>&lt;!-- Manual close dropdown --&gt;
    &lt;b-button-group&gt;
        &lt;b-dropdown variant=&quot;light&quot; text=&quot;Manual close&quot; :auto-close=&quot;false&quot; id=&quot;dropdownMenuClickable&quot; &gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Dropdown Menu Item Color</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Example of dropdown menu and dropdown item color.</p>
                        <b-row>
                            <b-col xxl="3">
                                <div>
                                    <h6 class="font-size-13 mb-3">Dropdown Menu Success link example
                                    </h6>
                                    <div class="clearfix">
                                        <div class="dropdown-menu d-inline-block position-relative dropdownmenu-success"
                                          style="z-index: 1">
                                          <b-link class="dropdown-item" href="#">Action</b-link>
                                          <b-link class="dropdown-item" href="#">Another action</b-link>
                                          <b-link class="dropdown-item active" href="#">Something else here</b-link>
                                          <div class="dropdown-divider"></div>
                                          <b-link class="dropdown-item" href="#">Separated link</b-link>
                                        </div>
                                      </div>
                                </div>
                            </b-col>

                            <b-col lg="9">
                                <div class="mt-lg-0 mt-3">
                                    <h6 class="font-size-13 mb-0">Dropdown Menu link Color example</h6>
                                    <div>
                                        <b-row>
                                            <b-col lg="4" sm="6">
                                                <div class="mt-3">
                                                    <p class="font-size-13 mb-2">Dropdown menu Primary link</p>
                                                    <b-button-group>
                                                        <b-dropdown text="Primary" variant="primary" menu-class="dropdownmenu-primary">
                                                          <b-dropdown-item href="#">Action</b-dropdown-item>
                                                          <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                          <b-dropdown-item href="#">Something else here</b-dropdown-item>
                                                          <b-dropdown-divider></b-dropdown-divider>
                                                          <b-dropdown-item href="#">Separated link</b-dropdown-item>
                                                        </b-dropdown>
                                                      </b-button-group>
                                                </div>
                                            </b-col>
                                            <b-col lg="4" sm="6">
                                                <div class="mt-3">
                                                    <p class="font-size-13 mb-2">Dropdown menu Secondary link</p>
                                                    <b-button-group>
                                                        <b-dropdown text="Secondary" variant="secondary" menu-class="dropdownmenu-secondary">
                                                          <b-dropdown-item href="#">Action</b-dropdown-item>
                                                          <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                          <b-dropdown-item href="#">Something else here</b-dropdown-item>
                                                          <b-dropdown-divider></b-dropdown-divider>
                                                          <b-dropdown-item href="#">Separated link</b-dropdown-item>
                                                        </b-dropdown>
                                                      </b-button-group>
                                                </div>
                                            </b-col>
                                            <b-col lg="4" sm="6">
                                                <div class="mt-3">
                                                    <p class="font-size-13 mb-2">Dropdown menu Success link</p>
                                                    <b-button-group>
                                                        <b-dropdown text="Success" variant="success" menu-class="dropdownmenu-success">
                                                          <b-dropdown-item href="#">Action</b-dropdown-item>
                                                          <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                          <b-dropdown-item href="#">Something else here</b-dropdown-item>
                                                          <b-dropdown-divider></b-dropdown-divider>
                                                          <b-dropdown-item href="#">Separated link</b-dropdown-item>
                                                        </b-dropdown>
                                                      </b-button-group>
                                                </div>
                                            </b-col>
                                            <b-col lg="4" sm="6">
                                                <div class="mt-3">
                                                    <p class="font-size-13 mb-2">Dropdown menu Warning link</p>
                                                    <b-button-group>
                                                        <b-dropdown text="Warning" variant="warning" menu-class="dropdownmenu-warning">
                                                          <b-dropdown-item href="#">Action</b-dropdown-item>
                                                          <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                          <b-dropdown-item href="#">Something else here</b-dropdown-item>
                                                          <b-dropdown-divider></b-dropdown-divider>
                                                          <b-dropdown-item href="#">Separated link</b-dropdown-item>
                                                        </b-dropdown>
                                                      </b-button-group>
                                                </div>
                                            </b-col>
                                            <b-col lg="4" sm="6">
                                                <div class="mt-3">
                                                    <p class="font-size-13 mb-2">Dropdown menu Info link</p>
                                                    <b-button-group>
                                                        <b-dropdown text="Info" variant="info" menu-class="dropdownmenu-info">
                                                          <b-dropdown-item href="#">Action</b-dropdown-item>
                                                          <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                          <b-dropdown-item href="#">Something else here</b-dropdown-item>
                                                          <b-dropdown-divider></b-dropdown-divider>
                                                          <b-dropdown-item href="#">Separated link</b-dropdown-item>
                                                        </b-dropdown>
                                                      </b-button-group>
                                                </div>
                                            </b-col>
                                            <b-col lg="4" sm="6">
                                                <div class="mt-3">
                                                    <p class="font-size-13 mb-2">Dropdown menu Danger link</p>
                                                    <b-button-group>
                                                        <b-dropdown text="Danger" variant="danger" menu-class="dropdownmenu-danger">
                                                          <b-dropdown-item href="#">Action</b-dropdown-item>
                                                          <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                          <b-dropdown-item href="#">Something else here</b-dropdown-item>
                                                          <b-dropdown-divider></b-dropdown-divider>
                                                          <b-dropdown-item href="#">Separated link</b-dropdown-item>
                                                        </b-dropdown>
                                                      </b-button-group>
                                                </div>
                                            </b-col>
                                        </b-row>

                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- Dropdown Menu Item Color --&gt;
    &lt;b-button-group&gt;
        &lt;b-dropdown text=&quot;Primary&quot; variant=&quot;primary&quot; menu-class=&quot;dropdownmenu-primary&quot;&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
          &lt;b-dropdown-divider>&lt;/b-dropdown-divider&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
      &lt;/b-button-group&gt;</code>
    
    <code>&lt;b-button-group&gt;
        &lt;b-dropdown text=&quot;Secondary&quot; variant=&quot;secondary&quot; menu-class=&quot;dropdownmenu-secondary&quot;&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
          &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
      &lt;/b-button-group&gt;</code>
    
    <code>&lt;b-button-group&gt;
        &lt;b-dropdown text=&quot;Success&quot; variant=&quot;success&quot; menu-class=&quot;dropdownmenu-success&quot;&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
          &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
      &lt;/b-button-group&gt;</code>
    
    <code>&lt;b-button-group&gt;
        &lt;b-dropdown text=&quot;Warning&quot; variant=&quot;warning&quot; menu-class=&quot;dropdownmenu-warning&quot;&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
          &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
      &lt;/b-button-group&gt;</code>
    
    <code>&lt;b-button-group&gt;
        &lt;b-dropdown text=&quot;Info&quot; variant=&quot;info&quot; menu-class=&quot;dropdownmenu-info&quot;&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
          &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
      &lt;/b-button-group&gt;</code>
    
    <code>&lt;b-button-group&gt;
        &lt;b-dropdown text=&quot;Danger&quot; variant=&quot;danger&quot; menu-class=&quot;dropdownmenu-danger&quot;&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
          &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
          &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
      &lt;/b-button-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Menu Content</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Example of dropdown menu containing
                            <code>Headers, Text and Forms</code> content.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <!-- Header -->
                            <b-button-group>
                                <b-dropdown variant="primary" text="Header">
                                  <b-dropdown-header> Welcome Jessie! </b-dropdown-header>
                                  <b-dropdown-item>Action</b-dropdown-item>
                                  <b-dropdown-item>Another action</b-dropdown-item>
                                  <b-dropdown-item>Something else here</b-dropdown-item>
                                  <b-dropdown-divider></b-dropdown-divider>
                                  <b-dropdown-item>Separated link</b-dropdown-item>
                                </b-dropdown>
                              </b-button-group>

                            <!-- Text -->
                            <b-button-group>
                                <b-dropdown variant="success" text="Text" menu-class="dropdown-menu-md p-3">
                                  <p>Some example text that's free-flowing within the dropdown menu.</p>
                                  <p class="mb-0">And this is more example text.</p>
                                </b-dropdown>
                              </b-button-group>

                            <!-- Forms -->
                            <b-button-group>
                                <b-dropdown variant="light" text="Forms" menu-class="dropdown-menu-md p-4">
                                  <form>
                                    <div class="mb-2">
                                      <label class="form-label" for="exampleDropdownFormEmail">Email address</label>
                                      <input type="email" class="form-control" id="exampleDropdownFormEmail"
                                        placeholder="email@example.com" />
                                    </div>
                                    <div class="mb-2">
                                      <label class="form-label" for="exampleDropdownFormPassword">Password</label>
                                      <input type="password" class="form-control" id="exampleDropdownFormPassword"
                                        placeholder="Password" />
                                    </div>
                                    <div class="mb-2">
                                      <div class="form-check custom-checkbox">
                                        <input type="checkbox" class="form-check-input" id="rememberdropdownCheck" />
                                        <label class="form-check-label" for="rememberdropdownCheck">Remember me</label>
                                      </div>
                                    </div>
                                    <b-button variant="primary" type="submit"> Sign in </b-button>
                                  </form>
                                </b-dropdown>
                              </b-button-group>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
<pre class="language-markup" style="height: 310px;"><code>&lt;!-- Menu Content --&gt;
    &lt;b-button-group&gt;
        &lt;b-dropdown variant=&quot;primary&quot; text=&quot;Header&quot; &gt;
            &lt;b-dropdown-header&gt;Welcome Jessie! &lt;/b-dropdown-header&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;</code>
    
    
    <code>&lt;!-- text Content --&gt;
    &lt;b-button-group&gt;
        &lt;b-dropdown variant=&quot;success&quot; text=&quot;Text&quot; &gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;&lt;p&gt;
                Some example text that's free-flowing within the dropdown menu.
                &lt;/p&gt;
                &lt;p class=&quot;mb-0&quot;&gt;
                    And this is more example text.
                &lt;/p&gt;&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;</code>
    
    
    <code>&lt;!-- Forms Content --&gt;
    &lt;b-button-group&gt;
        &lt;b-dropdown variant=&quot;light&quot; text=&quot;Forms&quot; &gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;&lt;form&gt;
            &lt;div class=&quot;mb-2&quot;&gt;
                &lt;label class=&quot;form-label&quot; for=&quot;exampleDropdownFormEmail&quot;&gt;Email address&lt;/label&gt;
                &lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;exampleDropdownFormEmail&quot; placeholder=&quot;email@example.com&quot;&gt;
                &lt;/div&gt;
                &lt;div class=&quot;mb-2&quot;&gt;
                &lt;label class=&quot;form-label&quot; for=&quot;exampleDropdownFormPassword&quot;&gt;Password&lt;/label&gt;
                &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;exampleDropdownFormPassword&quot; placeholder=&quot;Password&quot;&gt;
                &lt;/div&gt;
                &lt;div class=&quot;mb-2&quot;&gt;
                &lt;div class=&quot;form-check custom-checkbox&quot;&gt;
            &lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;rememberdropdownCheck&quot;&gt;
            &lt;label class=&quot;form-check-label&quot; for=&quot;rememberdropdownCheck&quot;&gt;Remember me&lt;/label&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Sign in&lt;/button&gt;
    &lt;/form&gt;&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>