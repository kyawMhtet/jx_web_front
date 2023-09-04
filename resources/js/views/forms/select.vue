<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import "prismjs";

export default {
  data() {
    return {
      title: "Form Select",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Form Select",
          active: true,
        },
      ],
      defaultSelected1: null,
      defaultSelected2: null,
      defaultSelected3: null,
      selectedMulti: null,
      selectedMulti1: null,

      selectedSm: null,
      selectedMd: null,
      selectedLg: null,
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
          <b-card-header class="align-items-center d-flex">
            <b-card-title class="mb-0 flex-grow-1">Default Select</b-card-title>  
          </b-card-header>
          <b-card-body>
            <p class="text-muted">Use <code>&lt;select&gt;</code> attribute with numerous options to show value with
              choice's option.</p>
            <b-row>
              <b-col lg="6">
                <b-form-select v-model="defaultSelected1" class="mb-3" aria-label="Default select example">
                  <option :value="null">Select your Status</option>
                  <option value="1">Declined Payment</option>
                  <option value="2">Delivery Error</option>
                  <option value="3">Wrong Amount</option>
                </b-form-select>
              </b-col>
              <b-col lg="6">
                <b-form-select v-model="defaultSelected2" class="rounded-pill mb-3" aria-label="Default select example">
                  <option :value="null">Search for services</option>
                  <option value="1">Information Architecture</option>
                  <option value="2">UI/UX Design</option>
                  <option value="3">Back End Development</option>
                </b-form-select>
              </b-col>
              <b-col lg="6">
                <b-form-select v-model="defaultSelected3" class="mb-3" aria-label="Disabled select example" disabled>
                  <option :value="null">Open this select menu (Disabled)</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </b-form-select>
              </b-col>
            </b-row>
          </b-card-body>
          <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </b-card-body>
          <b-card-body>
            <pre class="language-markup" style="height:250px;">
<code>&lt;b-form-select v-model="selected" class="mb-3" aria-label="Default select example"&gt;
  &lt;option :value="null"&gt;Select your Status&lt;/option&gt;
  &lt;option value="1"&gt;Declined Payment&lt;/option&gt;
  &lt;option value="2"&gt;Delivery Error&lt;/option&gt;
  &lt;option value="3"&gt;Wrong Amount&lt;/option&gt;
&lt;/b-form-select&gt;</code>
<code>
&lt;b-form-select v-model="selected" class="rounded-pill mb-3" aria-label="Default select example"&gt;
  &lt;option :value="null"&gt;Search for services&lt;/option&gt;
  &lt;option value="1"&gt;Information Architecture&lt;/option&gt;
  &lt;option value="2"&gt;UI/UX Design&lt;/option&gt;
  &lt;option value="3"&gt;Back End Development&lt;/option&gt;
&lt;/b-form-select&gt;</code>
<code>
&lt;b-form-select v-model="selected" class="mb-3" aria-label="Disabled select example" disabled&gt;
  &lt;option :value="null"&gt;Open this select menu (Disabled)&lt;/option&gt;
  &lt;option value="1"&gt;One&lt;/option&gt;
  &lt;option value="2"&gt;Two&lt;/option&gt;
  &lt;option value="3"&gt;Three&lt;/option&gt;
&lt;/b-form-select&gt;</code></pre>
          </b-card-body>
        </b-card>
      </b-col> 
    </b-row>

    <b-row>
      <b-col lg="12">
        <b-card no-body>
          <b-card-header>
            <b-card-title class="mb-lg-0">Menu Size</b-card-title>
          </b-card-header>
          <b-card-body>
            <p class="text-muted">Use <code>multiple</code> attribute to select multiple values and <code>select-size="your
                value"</code> attribute to show a number of choice option within a select area. </p>
            <b-row class="gy-4">
              <b-col lg="6">
                <b-form-select v-model="selectedMulti" multiple aria-label="multiple select example">
                  <option :value="null">Open this select menu (multiple select option)</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </b-form-select>
              </b-col>
              <b-col lg="6">
                <b-form-select v-model="selectedMulti1" multiple :select-size="3" aria-label="size 3 select example">
                  <option :value="null">Open this select menu (select menu size)</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                </b-form-select>
              </b-col>
            </b-row>
          </b-card-body>
          <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </b-card-body>
          <b-card-body>
            <pre class="language-markup" style="height: 250px;">
<code>&lt;b-form-select v-model="selectedMulti" multiple aria-label="multiple select example"&gt;
  &lt;b-form-select-option :value="null"&gt;Open this select menu (multiple select option)&lt;/b-form-select-option&gt;
  &lt;b-form-select-option value="1"&gt;One&lt;/b-form-select-option&gt;
  &lt;b-form-select-option value="2"&gt;Two&lt;/b-form-select-option&gt;
  &lt;b-form-select-option value="3"&gt;Three&lt;/b-form-select-option&gt;
&lt;/b-form-select&gt;</code>

<code>&lt;b-form-select v-model="selectedMulti" multiple :select-size="3" aria-label="size 3 select example"&gt;
  &lt;b-form-select-option :value="null"&gt;Open this select menu (select menu size)&lt;/b-form-select-option&gt;
  &lt;b-form-select-option value="1"&gt;One&lt;/b-form-select-option&gt;
  &lt;b-form-select-option value="2"&gt;Two&lt;/b-form-select-option&gt;
  &lt;b-form-select-option value="3"&gt;Three&lt;/b-form-select-option&gt;
  &lt;b-form-select-option value="4"&gt;Four&lt;/b-form-select-option&gt;
  &lt;b-form-select-option value="5"&gt;Five&lt;/b-form-select-option&gt;
&lt;/b-form-select&gt;</code></pre>
          </b-card-body>
        </b-card>
      </b-col> 
    </b-row>

    <b-row>
      <b-col lg="12">
        <b-card no-body>
          <b-card-header>
            <h4 class="card-title mb-0">Select Size</h4>
          </b-card-header>
          <b-card-body>
            <p class="text-muted">Use <code>form-select-sm</code> class to set small select size and
              <code>form-select-lg</code> class to form-select class to set large select size. No such class is required
              for default select size.
            </p>
            <b-row class="align-items-center g-3">
              <b-col lg="4">
                <b-form-select v-model="selectedSm" class="form-select-sm" aria-label=".form-select-sm example">
                  <option :value="null">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </b-form-select>
              </b-col>
              <b-col lg="4">
                <b-form-select v-model="selectedMd" aria-label=".form-select-sm example">
                  <option :value="null">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </b-form-select>
              </b-col>
              <b-col lg="4">
                <b-form-select v-model="selectedLg" class="form-select-lg" aria-label=".form-select-lg example">
                  <option :value="null">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </b-form-select>
              </b-col>
            </b-row>
          </b-card-body>
          <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </b-card-body>
          <b-card-body>
            <pre class="language-markup" style="height: 275px;">
<code>&lt;b-form-select v-model="selected" class="form-select-sm" aria-label=".form-select-sm example"&gt;
  &lt;b-form-select-option :value="null"&gt;Open this select menu&lt;/b-form-select-option&gt;
  &lt;b-form-select-option value="1"&gt;One&lt;/b-form-select-option&gt;
  &lt;b-form-select-option value="2"&gt;Two&lt;/b-form-select-option&gt;
  &lt;b-form-select-option value="3"&gt;Three&lt;/b-form-select-option&gt;
&lt;/b-form-select&gt;</code>

<code>&lt;b-form-select v-model="selected" aria-label=".form-select-sm example"&gt;
  &lt;b-form-select-option :value="null"&gt;Open this select menu&lt;/b-form-select-option&gt;
  &lt;b-form-select-option value="1"&gt;One&lt;/b-form-select-option&gt;
  &lt;b-form-select-option value="2"&gt;Two&lt;/b-form-select-option&gt;
  &lt;b-form-select-option value="3"&gt;Three&lt;/b-form-select-option&gt;
&lt;/b-form-select&gt;</code>

<code>&lt;b-form-select v-model="selected" class="form-select-lg" aria-label=".form-select-lg example"&gt;
  &lt;b-form-select-option :value="null"&gt;Open this select menu&lt;/b-form-select-option&gt;
  &lt;b-form-select-option value="1"&gt;One&lt;/b-form-select-option&gt;
  &lt;b-form-select-option value="2"&gt;Two&lt;/b-form-select-option&gt;
  &lt;b-form-select-option value="3"&gt;Three&lt;/b-form-select-option&gt;
&lt;/b-form-select&gt;</code></pre>
          </b-card-body>
        </b-card>
      </b-col>

    </b-row>
    
  </Layout>
</template>