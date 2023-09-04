<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

export default {
  data() {
    return {
      title: "Forms Validation",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Forms Validation",
          active: true,
        },
      ],
      firstName: 'Mark',
      lastName: 'Otto',
      username: '',
      city: '',
      state: null,
      zip: '',
      agreedToTerms: false,
      onSubmit: false,
      customValidation: false
    };
  },
  methods: {
    submitTooltipForm() {
      this.onSubmit = true;
    },
    submitCustomForm() {
      this.customValidation = true;
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
      <b-col lg="12">
        <b-card no-body>
          <b-card-header>
            <b-card-title class="mb-0">Browser defaults</b-card-title>
          </b-card-header><!-- end card header -->

          <b-card-body>
            <b-form @submit="submitForm" class="row g-3">
              <b-col md="4">
                <label for="validationDefault01" class="form-label">First name</label>
                <b-form-input v-model="firstName" id="validationDefault01" required></b-form-input>
              </b-col>
              <b-col md="4">
                <label for="validationDefault02" class="form-label">Last name</label>
                <b-form-input v-model="lastName" id="validationDefault02" required></b-form-input>
              </b-col>
              <b-col md="4">
                <label for="validationDefaultUsername" class="form-label">Username</label>
                <b-input-group>
                  <b-input-group-prepend is-text>@</b-input-group-prepend>
                  <b-form-input v-model="username" id="validationDefaultUsername" required></b-form-input>
                </b-input-group>
              </b-col>
              <b-col md="6">
                <label for="validationDefault03" class="form-label">City</label>
                <b-form-input v-model="city" id="validationDefault03" required></b-form-input>
              </b-col>
              <b-col md="3">
                <label for="validationDefault04" class="form-label">State</label>
                <b-form-select v-model="state" id="validationDefault04" required>
                  <option disabled value="">Choose...</option>
                  <option>...</option>
                </b-form-select>
              </b-col>
              <b-col md="3">
                <label for="validationDefault05" class="form-label">Zip</label>
                <b-form-input v-model="zip" id="validationDefault05" required></b-form-input>
              </b-col>
              <b-col cols="12">
                <b-form-checkbox v-model="agreedToTerms" id="invalidCheck2" required>
                  Agree to terms and conditions
                </b-form-checkbox>
              </b-col>
              <b-col cols="12">
                <b-button type="submit" variant="primary">Submit form</b-button>
              </b-col>
            </b-form>
          </b-card-body>
          <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </b-card-body>
          <b-card-body>
            <pre class="language-markup" style="height: 352px">
<code>&lt;b-form @submit="submitForm" class="row g-3"&gt;
  &lt;b-col md="4"&gt;
    &lt;label for="validationDefault01" class="form-label"&gt;First name&lt;/label&gt;
    &lt;b-form-input v-model="firstName" id="validationDefault01" required&gt;&lt;/b-form-input&gt;
  &lt;/b-col&gt;
  &lt;b-col md="4"&gt;
    &lt;label for="validationDefault02" class="form-label"&gt;Last name&lt;/label&gt;
    &lt;b-form-input v-model="lastName" id="validationDefault02" required&gt;&lt;/b-form-input&gt;
  &lt;/b-col&gt;
  &lt;b-col md="4"&gt;
    &lt;label for="validationDefaultUsername" class="form-label"&gt;Username&lt;/label&gt;
    &lt;b-input-group&gt;
      &lt;b-input-group-prepend is-text&gt;@&lt;/b-input-group-prepend&gt;
      &lt;b-form-input v-model="username" id="validationDefaultUsername" required&gt;&lt;/b-form-input&gt;
    &lt;/b-input-group&gt;
  &lt;/b-col&gt;
  &lt;b-col md="6"&gt;
    &lt;label for="validationDefault03" class="form-label"&gt;City&lt;/label&gt;
    &lt;b-form-input v-model="city" id="validationDefault03" required&gt;&lt;/b-form-input&gt;
  &lt;/b-col&gt;
  &lt;b-col md="3"&gt;
    &lt;label for="validationDefault04" class="form-label"&gt;State&lt;/label&gt;
    &lt;b-form-select v-model="state" id="validationDefault04" required&gt;
      &lt;option disabled value=""&gt;Choose...&lt;/option&gt;
      &lt;option&gt;...&lt;/option&gt;
    &lt;/b-form-select&gt;
  &lt;/b-col&gt;
  &lt;b-col md="3"&gt;
    &lt;label for="validationDefault05" class="form-label"&gt;Zip&lt;/label&gt;
    &lt;b-form-input v-model="zip" id="validationDefault05" required&gt;&lt;/b-form-input&gt;
  &lt;/b-col&gt;
  &lt;b-col cols="12"&gt;
    &lt;b-form-checkbox v-model="agreedToTerms" id="invalidCheck2" required&gt;
      Agree to terms and conditions
    &lt;/b-form-checkbox&gt;
  &lt;/b-col&gt;
  &lt;b-col cols="12"&gt;
    &lt;b-button type="submit" variant="primary"&gt;Submit form&lt;/b-button&gt;
  &lt;/b-col&gt;
&lt;/b-form&gt;</code></pre>
          </b-card-body>
        </b-card>
      </b-col> <!-- end col -->
    </b-row>
    <!-- end row -->

    <b-row>
      <b-col lg="12">
        <b-card no-body>
          <b-card-header>
            <b-card-title class="mb-0">Custom Styles</b-card-title>
          </b-card-header><!-- end card header -->

          <b-card-body>
            <b-form @submit="submitCustomForm" class="row g-3" :validated="customValidation" :novalidate="true">
              <b-col md="4">
                <label for="validationCustom01" class="form-label">First name</label>
                <b-form-input v-model="firstName" id="validationCustom01" required></b-form-input>
                <b-form-invalid-feedback>Please provide a valid first name.</b-form-invalid-feedback>
                <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
              </b-col>
              <b-col md="4">
                <label for="validationCustom02" class="form-label">Last name</label>
                <b-form-input v-model="lastName" id="validationCustom02" required></b-form-input>
                <b-form-invalid-feedback>Please provide a valid last name.</b-form-invalid-feedback>
                <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
              </b-col>
              <b-col md="4">
                <label for="validationCustomUsername" class="form-label">Username</label>
                <b-input-group>
                  <b-input-group-prepend is-text>@</b-input-group-prepend>
                  <b-form-input v-model="username" id="validationCustomUsername" required></b-form-input>
                  <b-form-invalid-feedback>Please choose a username.</b-form-invalid-feedback>
                </b-input-group>
              </b-col>
              <b-col md="6">
                <label for="validationCustom03" class="form-label">City</label>
                <b-form-input v-model="city" id="validationCustom03" required></b-form-input>
                <b-form-invalid-feedback>Please provide a valid city.</b-form-invalid-feedback>
              </b-col>
              <b-col md="3">
                <label for="validationCustom04" class="form-label">State</label>
                <b-form-select v-model="state" id="validationCustom04" required>
                  <option disabled value="">Choose...</option>
                  <option>...</option>
                </b-form-select>
                <b-form-invalid-feedback>Please select a valid state.</b-form-invalid-feedback>
              </b-col>
              <b-col md="3">
                <label for="validationCustom05" class="form-label">Zip</label>
                <b-form-input v-model="zip" id="validationCustom05" required></b-form-input>
                <b-form-invalid-feedback>Please provide a valid zip.</b-form-invalid-feedback>
              </b-col>
              <b-col cols="12">
                <b-form-checkbox v-model="agreedToTerms" id="invalidCheck" required>
                  Agree to terms and conditions
                </b-form-checkbox>
                <b-form-invalid-feedback>You must agree before submitting.</b-form-invalid-feedback>
              </b-col>
              <b-col cols="12">
                <b-button type="submit" variant="primary">Submit form</b-button>
              </b-col>
            </b-form>
          </b-card-body>
          <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </b-card-body>
          <b-card-body>
            <pre class="language-markup" style="height: 310px;">
<code>&lt;b-form @submit="submitForm" class="row g-3" :validated="true" :novalidate="true"&gt;
  &lt;b-col md="4"&gt;
    &lt;label for="validationCustom01" class="form-label"&gt;First name&lt;/label&gt;
    &lt;b-form-input v-model="firstName" id="validationCustom01" required&gt;&lt;/b-form-input&gt;
    &lt;b-form-invalid-feedback&gt;Please provide a valid first name.&lt;/b-form-invalid-feedback&gt;
    &lt;b-form-valid-feedback&gt;Looks good!&lt;/b-form-valid-feedback&gt;
  &lt;/b-col&gt;
  &lt;b-col md="4"&gt;
    &lt;label for="validationCustom02" class="form-label"&gt;Last name&lt;/label&gt;
    &lt;b-form-input v-model="lastName" id="validationCustom02" required&gt;&lt;/b-form-input&gt;
    &lt;b-form-invalid-feedback&gt;Please provide a valid last name.&lt;/b-form-invalid-feedback&gt;
    &lt;b-form-valid-feedback&gt;Looks good!&lt;/b-form-valid-feedback&gt;
  &lt;/b-col&gt;
  &lt;b-col md="4"&gt;
    &lt;label for="validationCustomUsername" class="form-label"&gt;Username&lt;/label&gt;
    &lt;b-input-group&gt;
      &lt;b-input-group-prepend is-text&gt;@&lt;/b-input-group-prepend&gt;
      &lt;b-form-input v-model="username" id="validationCustomUsername" required&gt;&lt;/b-form-input&gt;
      &lt;b-form-invalid-feedback&gt;Please choose a username.&lt;/b-form-invalid-feedback&gt;
    &lt;/b-input-group&gt;
  &lt;/b-col&gt;
  &lt;b-col md="6"&gt;
    &lt;label for="validationCustom03" class="form-label"&gt;City&lt;/label&gt;
    &lt;b-form-input v-model="city" id="validationCustom03" required&gt;&lt;/b-form-input&gt;
    &lt;b-form-invalid-feedback&gt;Please provide a valid city.&lt;/b-form-invalid-feedback&gt;
  &lt;/b-col&gt;
  &lt;b-col md="3"&gt;
    &lt;label for="validationCustom04" class="form-label"&gt;State&lt;/label&gt;
    &lt;b-form-select v-model="state" id="validationCustom04" required&gt;
      &lt;option disabled value=""&gt;Choose...&lt;/option&gt;
      &lt;option&gt;...&lt;/option&gt;
    &lt;/b-form-select&gt;
    &lt;b-form-invalid-feedback&gt;Please select a valid state.&lt;/b-form-invalid-feedback&gt;
  &lt;/b-col&gt;
  &lt;b-col md="3"&gt;
    &lt;label for="validationCustom05" class="form-label"&gt;Zip&lt;/label&gt;
    &lt;b-form-input v-model="zip" id="validationCustom05" required&gt;&lt;/b-form-input&gt;
    &lt;b-form-invalid-feedback&gt;Please provide a valid zip.&lt;/b-form-invalid-feedback&gt;
  &lt;/b-col&gt;
  &lt;b-col cols="12"&gt;
    &lt;b-form-checkbox v-model="agreedToTerms" id="invalidCheck" required&gt;
      Agree to terms and conditions
    &lt;/b-form-checkbox&gt;
    &lt;b-form-invalid-feedback&gt;You must agree before submitting.&lt;/b-form-invalid-feedback&gt;
  &lt;/b-col&gt;
  &lt;b-col cols="12"&gt;
    &lt;b-button type="submit" variant="primary"&gt;Submit form&lt;/b-button&gt;
  &lt;/b-col&gt;
&lt;/b-form&gt;</code></pre>
          </b-card-body>
        </b-card>
      </b-col> <!-- end col -->

      <b-row>
        <b-col lg="12">
          <b-card no-body>
            <b-card-header>
              <b-card-title class="mb-0">Tooltips</b-card-title>
            </b-card-header><!-- end card header -->

            <b-card-body>
              <b-form @submit="submitTooltipForm" class="row g-3" :validated="onSubmit" :novalidate="true">
                <b-col md="4" class="position-relative mb-4">
                  <label for="validationTooltip01" class="form-label">First name</label>
                  <b-form-input v-model="firstName" id="validationTooltip01" required></b-form-input>
                  <b-form-valid-feedback :tooltip="true">Looks good!</b-form-valid-feedback>
                </b-col>
                <b-col md="4" class="position-relative mb-4">
                  <label for="validationTooltip02" class="form-label">Last name</label>
                  <b-form-input v-model="lastName" id="validationTooltip02" required></b-form-input>
                  <b-form-valid-feedback :tooltip="true">Looks good!</b-form-valid-feedback>
                </b-col>
                <b-col md="4" class="position-relative mb-4">
                  <label for="validationTooltipUsername" class="form-label">Username</label>
                  <b-input-group>
                    <b-input-group-prepend is-text>@</b-input-group-prepend>
                    <b-form-input v-model="username" id="validationTooltipUsername" required></b-form-input>
                    <b-form-invalid-feedback :tooltip="true">Please choose a unique and valid username.</b-form-invalid-feedback>
                  </b-input-group>
                </b-col>
                <b-col md="6" class="position-relative mb-4">
                  <label for="validationTooltip03" class="form-label">City</label>
                  <b-form-input v-model="city" id="validationTooltip03" required></b-form-input>
                  <b-form-invalid-feedback :tooltip="true">Please provide a valid city.</b-form-invalid-feedback>
                </b-col>
                <b-col md="3" class="position-relative mb-4">
                  <label for="validationTooltip04" class="form-label">State</label>
                  <b-form-select v-model="state" id="validationTooltip04" required>
                    <option disabled value="">Choose...</option>
                    <option>...</option>
                  </b-form-select>
                  <b-form-invalid-feedback :tooltip="true">Please select a valid state.</b-form-invalid-feedback>
                </b-col>
                <b-col md="3" class="position-relative mb-4">
                  <label for="validationTooltip05" class="form-label">Zip</label>
                  <b-form-input v-model="zip" id="validationTooltip05" required></b-form-input>
                  <b-form-invalid-feedback :tooltip="true">Please provide a valid zip.</b-form-invalid-feedback>
                </b-col>
                <b-col cols="12">
                  <b-button type="submit" variant="primary">Submit form</b-button>
                </b-col>
              </b-form>
            </b-card-body>
            <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
              <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
            </b-card-body>
            <b-card-body>
              <pre class="language-markup" style="height: 310px;">
<code>&lt;b-form @submit="submitTooltipForm" class="row g-3" :validated="onSubmit" :novalidate="true"&gt;
  &lt;b-col md="4" class="position-relative mb-4"&gt;
    &lt;label for="validationTooltip01" class="form-label"&gt;First name&lt;/label&gt;
    &lt;b-form-input v-model="firstName" id="validationTooltip01" required&gt;&lt;/b-form-input&gt;
    &lt;b-form-valid-feedback :tooltip="true"&gt;Looks good!&lt;/b-form-valid-feedback&gt;
  &lt;/b-col&gt;
  &lt;b-col md="4" class="position-relative mb-4"&gt;
    &lt;label for="validationTooltip02" class="form-label"&gt;Last name&lt;/label&gt;
    &lt;b-form-input v-model="lastName" id="validationTooltip02" required&gt;&lt;/b-form-input&gt;
    &lt;b-form-valid-feedback :tooltip="true"&gt;Looks good!&lt;/b-form-valid-feedback&gt;
  &lt;/b-col&gt;
  &lt;b-col md="4" class="position-relative mb-4"&gt;
    &lt;label for="validationTooltipUsername" class="form-label"&gt;Username&lt;/label&gt;
    &lt;b-input-group&gt;
      &lt;b-input-group-prepend is-text&gt;@&lt;/b-input-group-prepend&gt;
      &lt;b-form-input v-model="username" id="validationTooltipUsername" required&gt;&lt;/b-form-input&gt;
      &lt;b-form-invalid-feedback :tooltip="true"&gt;Please choose a unique and valid username.&lt;/b-form-invalid-feedback&gt;
    &lt;/b-input-group&gt;
  &lt;/b-col&gt;
  &lt;b-col md="6" class="position-relative mb-4"&gt;
    &lt;label for="validationTooltip03" class="form-label"&gt;City&lt;/label&gt;
    &lt;b-form-input v-model="city" id="validationTooltip03" required&gt;&lt;/b-form-input&gt;
    &lt;b-form-invalid-feedback :tooltip="true"&gt;Please provide a valid city.&lt;/b-form-invalid-feedback&gt;
  &lt;/b-col&gt;
  &lt;b-col md="3" class="position-relative mb-4"&gt;
    &lt;label for="validationTooltip04" class="form-label"&gt;State&lt;/label&gt;
    &lt;b-form-select v-model="state" id="validationTooltip04" required&gt;
      &lt;option disabled value=""&gt;Choose...&lt;/option&gt;
      &lt;option&gt;...&lt;/option&gt;
    &lt;/b-form-select&gt;
    &lt;b-form-invalid-feedback :tooltip="true"&gt;Please select a valid state.&lt;/b-form-invalid-feedback&gt;
  &lt;/b-col&gt;
  &lt;b-col md="3" class="position-relative mb-4"&gt;
    &lt;label for="validationTooltip05" class="form-label"&gt;Zip&lt;/label&gt;
    &lt;b-form-input v-model="zip" id="validationTooltip05" required&gt;&lt;/b-form-input&gt;
    &lt;b-form-invalid-feedback :tooltip="true"&gt;Please provide a valid zip.&lt;/b-form-invalid-feedback&gt;
  &lt;/b-col&gt;
  &lt;b-col cols="12"&gt;
    &lt;b-button type="submit" variant="primary"&gt;Submit form&lt;/b-button&gt;
  &lt;/b-col&gt;
&lt;/b-form&gt;</code></pre>
            </b-card-body>
          </b-card>
        </b-col> <!-- end col -->
      </b-row>
      <!-- end row -->
    </b-row>
  </Layout>
</template>