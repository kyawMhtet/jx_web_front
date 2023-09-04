<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

export default {
  data() {
    return {
      title: "Input Masks",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Input Masks",
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
            <b-card-title class="mb-0">Examples</b-card-title>
          </b-card-header>

          <b-card-body>
            <form action="#">
              <div>
                <h5 class="fs-md mb-3 text-muted">Date Formatting</h5>
                <b-row>
                  <b-col xl="6">
                    <div class="mb-3">
                      <label for="cleave-date" class="form-label">Date</label>
                        <b-form-input type="text" v-maska data-maska="##/##/####" id="date-mask"
                        placeholder="DD/MM/YYYY"></b-form-input>
                    </div>

                  </b-col>

                  <b-col xl="6">
                    <div class="mb-3">
                      <label for="cleave-date-format" class="form-label">Date Formatting</label>
                        <b-form-input type="text" v-maska data-maska="##/##" placeholder="MM/YY"
                        id="cleave-date-format"></b-form-input>
                    </div>
                  </b-col>
                </b-row>
              </div>

              <div class="border mt-3 border-dashed"></div>

              <div class="mt-4">
                <h6 class="mb-3 fs-md text-muted">Time Formatting</h6>
                <b-row>
                  <b-col xl="6">
                    <div class="mb-3">
                      <label for="cleave-time" class="form-label">Time</label>
                        <b-form-input type="text" v-maska data-maska="##:##:##" placeholder="hh:mm:ss"
                        id="cleave-time"></b-form-input>
                    </div>

                  </b-col>

                  <b-col xl="6">
                    <div class="mb-3">
                      <label for="cleave-time-format" class="form-label">Time Formatting</label>
                        <b-form-input type="text" v-maska data-maska="##:##" placeholder="hh:mm"
                        id="cleave-time-format"></b-form-input>
                    </div>
                  </b-col>
                </b-row>
              </div>

              <div class="border mt-3 border-dashed"></div>

              <div class="mt-4">
                <h5 class="fs-md mb-3 text-muted">Custom Options</h5>
                <b-row>
                  <b-col xl="6">
                    <div class="mb-3">
                      <label for="cleave-ccard" class="form-label">Credit Card</label>
                        <b-form-input type="text" v-maska data-maska="#### #### #### ####" id="cleave-ccard"
                        placeholder="xxxx xxxx xxxx xxxx"></b-form-input>
                    </div>

                  </b-col>

                  <b-col xl="6">
                    <div class="mb-3">
                      <label for="cleave-delimiter" class="form-label">Delimiter</label>
                        <b-form-input type="text" v-maska data-maska="#00.#00.#00"
                        data-maska-tokens="0:[0-9]:optional" id="cleave-delimiter" placeholder="xxx·xxx·xxx"></b-form-input>
                    </div>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col xl="6">
                    <div class="mb-3">
                      <label for="cleave-delimiters" class="form-label">Delimiters</label>
                        <b-form-input type="text" v-maska data-maska="#00.#00.#00-#0"
                        data-maska-tokens="0:[0-9]:optional" id="cleave-delimiters" placeholder="xxx.xxx.xxx-xx"></b-form-input>
                    </div>
                  </b-col>

                  <b-col xl="6">
                    <div class="mb-3">
                      <label for="cleave-prefix" class="form-label">Prefix</label>
                        <b-form-input type="text" v-maska data-maska="PREFIX-HHHH-HHHH-HHHH" data-maska-tokens="H:[0-9a-fA-F]" id="cleave-prefix"></b-form-input>
                    </div>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col xl="6">
                    <div class="mb-3 mb-xl-0">
                      <label for="cleave-phone" class="form-label">Phone</label>
                        <b-form-input type="text" v-maska data-maska="['+1 (###) ##-##-##', '+1 (###) ###-##-##']" id="cleave-phone"
                        placeholder="(xxx)xxx-xxxx"></b-form-input>
                    </div>
                  </b-col>

                  <b-col xl="6">
                    <div class="mb-0">
                      <label for="cleave-numeral" class="form-label">Numeral Formatting</label>
                        <b-form-input type="text" v-maska data-maska="9,99#,##"
                        data-maska-tokens="9:[0-9]:repeated" data-maska-reversed placeholder="Enter numeral" id="cleave-numeral"></b-form-input>
                    </div>
                  </b-col>
                </b-row>

              </div>
            </form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </Layout>
</template>