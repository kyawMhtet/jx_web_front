<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import dummyImg from "../../../images/users/user-dummy-img.jpg";
import logoDark from "../../../images/logo-dark.png";
import logoLight from "../../../images/logo-light.png";

export default {
  data() {
    return {
      title: "Wizard",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Wizard",
          active: true,
        },
      ],
      dummyImg,
      logoDark,
      logoLight
    };
  },
  mounted() {

    // user profile img file upload
    document.querySelector("#profile-img-file-input").addEventListener("change", function () {
      var preview = document.querySelector(".user-profile-image");
      var file = document.querySelector(".profile-img-file-input").files[0];
      var reader = new FileReader();

      reader.addEventListener(
        "load",
        function () {
          preview.src = reader.result;
        },
        false
      );

      if (file) {
        reader.readAsDataURL(file);
      }
    });

    document.querySelectorAll(".form-steps").forEach(function (form) {

      // next tab
      form.querySelectorAll(".nexttab").forEach(function (nextButton) {
        var tabEl = form.querySelectorAll('button[data-bs-toggle="pill"]');
        tabEl.forEach(function (item) {
          item.addEventListener('show.bs.tab', function (event) {
            event.target.classList.add('done');
          });
        });
        nextButton.addEventListener("click", function () {
          var nextTab = nextButton.getAttribute('data-nexttab');
          document.getElementById(nextTab).click();
        });
      });

      //Pervies tab
      form.querySelectorAll(".previestab").forEach(function (prevButton) {

        prevButton.addEventListener("click", function () {
          var prevTab = prevButton.getAttribute('data-previous');
          var totalDone = prevButton.closest("form").querySelectorAll(".custom-nav .done").length;
          for (var i = totalDone - 1; i < totalDone; i++) {
            (prevButton.closest("form").querySelectorAll(".custom-nav .done")[i]) ? prevButton.closest("form").querySelectorAll(".custom-nav .done")[i].classList.remove('done') : '';
          }
          document.getElementById(prevTab).click();
        });
      });

      // Step number click
      var tabButtons = form.querySelectorAll('button[data-bs-toggle="pill"]');
      tabButtons.forEach(function (button, i) {
        button.setAttribute("data-position", i);
        button.addEventListener("click", function () {
          var getProgreebar = button.getAttribute("data-progressbar");
          if (getProgreebar) {
            var totallength = document.getElementById("custom-progress-bar").querySelectorAll("li").length - 1;
            var current = i;
            var percent = (current / totallength) * 100;
            document.getElementById("custom-progress-bar").querySelector('.progress-bar').style.width = percent + "%";
          }
          (form.querySelectorAll(".custom-nav .done").length > 0) ?
            form.querySelectorAll(".custom-nav .done").forEach(function (doneTab) {
              doneTab.classList.remove('done');
            }) : '';
          for (var j = 0; j <= i; j++) {
            tabButtons[j].classList.contains('active') ? tabButtons[j].classList.remove('done') : tabButtons[j].classList.add('done');
          }
        });
      });
    });
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
      <b-col xl="6">
        <b-card no-body>
          <b-card-header>
            <b-card-title class="mb-0">Progress Nav Steps</b-card-title>
          </b-card-header>
          <b-card-body>
            <form action="#" class="form-steps" autocomplete="off">
              <div class="text-center pt-3 pb-4 mb-1">
                <h5>Signup Your Account</h5>
              </div>
              <div id="custom-progress-bar" class="progress-nav mb-4">
                <div class="progress" style="height: 1px;">
                  <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>

                <ul class="nav nav-pills progress-bar-tab custom-nav" role="tablist">
                  <li class="nav-item" role="presentation">
                    <b-button pill variant="link" class="nav-link active" data-progressbar="custom-progress-bar"
                      id="pills-gen-info-tab" data-bs-toggle="pill" data-bs-target="#pills-gen-info" type="button"
                      role="tab" aria-controls="pills-gen-info" aria-selected="true">1</b-button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <b-button pill variant="link" class="nav-link" data-progressbar="custom-progress-bar"
                      id="pills-info-desc-tab" data-bs-toggle="pill" data-bs-target="#pills-info-desc" type="button"
                      role="tab" aria-controls="pills-info-desc" aria-selected="false">2</b-button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <b-button pill variant="link" class="nav-link" data-progressbar="custom-progress-bar"
                      id="pills-success-tab" data-bs-toggle="pill" data-bs-target="#pills-success" type="button"
                      role="tab" aria-controls="pills-success" aria-selected="false">3</b-button>
                  </li>
                </ul>
              </div>

              <div class="tab-content">
                <div class="tab-pane fade show active" id="pills-gen-info" role="tabpanel"
                  aria-labelledby="pills-gen-info-tab">
                  <div>
                    <div class="mb-4">
                      <div>
                        <h5 class="mb-1">General Information</h5>
                        <p class="text-muted">Fill all Information as below</p>
                      </div>
                    </div>
                    <b-row>
                      <b-col lg="6">
                        <div class="mb-3">
                          <label class="form-label" for="gen-info-email-input">Email</label>
                          <input type="email" class="form-control" id="gen-info-email-input" placeholder="Enter email"
                            required>
                          <div class="invalid-feedback">Please enter an email address</div>
                        </div>
                      </b-col>
                      <b-col lg="6">
                        <div class="mb-3">
                          <label class="form-label" for="gen-info-username-input">User
                            Name</label>
                          <input type="text" class="form-control" id="gen-info-username-input"
                            placeholder="Enter user name" required>
                          <div class="invalid-feedback">Please enter a user name</div>
                        </div>
                      </b-col>
                    </b-row>
                    <div class="mb-3">
                      <label class="form-label" for="gen-info-password-input">Password</label>
                      <input type="password" class="form-control" id="gen-info-password-input"
                        placeholder="Enter Password" required>
                      <div class="invalid-feedback">Please enter a password</div>
                    </div>
                  </div>
                  <div class="d-flex align-items-start gap-3 mt-4">
                    <b-button type="button" variant="success" class="btn-label right ms-auto nexttab nexttab" data-nexttab="pills-info-desc-tab"><i class="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Go to
                      more info</b-button>
                  </div>
                </div>

                <div class="tab-pane fade" id="pills-info-desc" role="tabpanel" aria-labelledby="pills-info-desc-tab">
                  <div>
                    <div class="text-center">
                      <div class="profile-user position-relative d-inline-block mx-auto mb-2">
                        <img :src="dummyImg"
                          class="rounded-circle avatar-lg img-thumbnail user-profile-image" alt="user-profile-image">
                        <div class="avatar-xs p-0 rounded-circle profile-photo-edit">
                          <input id="profile-img-file-input" type="file" class="profile-img-file-input"
                            accept="image/png, image/jpeg">
                          <label for="profile-img-file-input" class="profile-photo-edit avatar-xs">
                            <span class="avatar-title rounded-circle bg-light text-body">
                              <i class="ri-camera-fill"></i>
                            </span>
                          </label>
                        </div>
                      </div>
                      <h5 class="fs-14">Add Image</h5>

                    </div>
                    <div>
                      <label class="form-label" for="gen-info-description-input">Description</label>
                      <textarea class="form-control" placeholder="Enter Description" id="gen-info-description-input"
                        rows="2" required></textarea>
                      <div class="invalid-feedback">Please enter a description</div>
                    </div>
                  </div>
                  <div class="d-flex align-items-start gap-3 mt-4">
                    <b-button variant="link" type="button" class="text-decoration-none btn-label previestab"
                      data-previous="pills-gen-info-tab"><i
                        class="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i> Back
                      to General</b-button>
                    <b-button type="button" variant="success" class="btn-label right ms-auto nexttab nexttab" content-class="me-3" data-nexttab="pills-success-tab"><i
                        class="ri-arrow-right-line label-icon align-middle fs-lg ms-2"></i>Submit</b-button>
                  </div>
                </div>

                <div class="tab-pane fade" id="pills-success" role="tabpanel" aria-labelledby="pills-success-tab">
                    <div class="text-center pt-4 pb-2">
                      <h5>Your Order is Completed !</h5>
                      <p class="text-muted">You Will receive an order confirmation email with details of your order.</p>
                  </div>
                </div>
              </div>
            </form>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col xl="6">
        <b-card no-body>
          <b-card-header>
            <b-card-title class="mb-0">Arrow Nav Steps</b-card-title>
          </b-card-header>
          <b-card-body>
            <form action="#" class="form-steps" autocomplete="off">
                <b-link class="navbar-brand d-block text-center pt-3 pb-4 mb-1" href="#">
                <img :src="logoDark" class="card-logo mx-auto card-logo-dark" alt="logo dark" height="22">
                <img :src="logoLight" class="card-logo mx-auto card-logo-light" alt="logo light" height="22">
              </b-link>
              <div class="step-arrow-nav mb-4">

                <ul class="nav nav-pills custom-nav nav-justified" role="tablist">
                  <li class="nav-item" role="presentation">
                    <b-button variant="link" class="nav-link done" id="steparrow-gen-info-tab" data-bs-toggle="pill"
                      data-bs-target="#steparrow-gen-info" type="button" role="tab" aria-controls="steparrow-gen-info"
                      aria-selected="true">General</b-button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <b-button variant="link" class="nav-link active" id="steparrow-description-info-tab"
                      data-bs-toggle="pill" data-bs-target="#steparrow-description-info" type="button" role="tab"
                      aria-controls="steparrow-description-info" aria-selected="false">Description</b-button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <b-button variant="link" class="nav-link" id="pills-experience-tab" data-bs-toggle="pill"
                      data-bs-target="#pills-experience" type="button" role="tab" aria-controls="pills-experience"
                      aria-selected="false">Finish</b-button>
                  </li>
                </ul>
              </div>

              <div class="tab-content">
                <div class="tab-pane fade" id="steparrow-gen-info" role="tabpanel"
                  aria-labelledby="steparrow-gen-info-tab">
                  <div>
                    <b-row>
                      <b-col lg="6">
                        <div class="mb-3">
                          <label class="form-label" for="steparrow-gen-info-email-input">Email</label>
                          <input type="email" class="form-control" id="steparrow-gen-info-email-input"
                            placeholder="Enter email" required>
                          <div class="invalid-feedback">Please enter an email address</div>
                        </div>
                      </b-col>
                      <b-col lg="6">
                        <div class="mb-3">
                          <label class="form-label" for="steparrow-gen-info-username-input">User Name</label>
                          <input type="text" class="form-control" id="steparrow-gen-info-username-input"
                            placeholder="Enter user name" required>
                          <div class="invalid-feedback">Please enter a user name</div>
                        </div>
                      </b-col>
                    </b-row>
                    <div class="mb-3">
                      <label class="form-label" for="steparrow-gen-info-password-input">Password</label>
                      <input type="password" class="form-control" id="steparrow-gen-info-password-input"
                        placeholder="Enter password" required>
                      <div class="invalid-feedback">Please enter a password</div>
                    </div>
                    <div>
                      <label class="form-label" for="steparrow-gen-info-confirm-password-input">Confirm Password</label>
                      <input type="password" class="form-control" id="steparrow-gen-info-confirm-password-input"
                        placeholder="Enter confirm password">
                      <div class="invalid-feedback">Please enter a confirm password</div>
                    </div>
                  </div>
                  <div class="d-flex align-items-start gap-3 mt-4">
                    <b-button type="button" variant="success" class="btn-label right ms-auto nexttab nexttab"
                      data-nexttab="steparrow-description-info-tab"><i
                        class="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Go to
                      more info</b-button>
                  </div>
                </div>

                <div class="tab-pane fade show active" id="steparrow-description-info" role="tabpanel"
                  aria-labelledby="steparrow-description-info-tab">
                  <div>
                    <div class="mb-3">
                      <label for="formFile" class="form-label">Upload Image</label>
                      <input class="form-control" type="file" id="formFile">
                    </div>
                    <div>
                      <label class="form-label" for="des-info-description-input">Description</label>
                      <textarea class="form-control" placeholder="Enter Description" id="des-info-description-input"
                        rows="3" required></textarea>
                      <div class="invalid-feedback">Please enter a description</div>
                    </div>
                  </div>
                  <div class="d-flex align-items-start gap-3 mt-4">
                    <b-button type="button" variant="light" class="btn-label previestab"
                      data-previous="steparrow-gen-info-tab"><i
                        class="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i> Back
                      to General</b-button>
                    <b-button type="button" variant="success" class="btn-label right ms-auto nexttab nexttab" data-nexttab="pills-experience-tab"><i
                        class="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Submit</b-button>
                  </div>
                </div>

                <div class="tab-pane fade" id="pills-experience" role="tabpanel">
                  <div class="text-center">

                    <div class="avatar-md mt-5 mb-4 mx-auto">
                      <div class="avatar-title bg-light text-success display-4 rounded-circle">
                        <i class="ri-checkbox-circle-fill"></i>
                      </div>
                    </div>
                    <h5>Well Done !</h5>
                    <p class="text-muted">You have Successfully Signed Up</p>
                  </div>
                </div>
              </div>
            </form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="12">
        <b-card no-body>
          <b-card-header>
            <b-card-title class="mb-0">Vertical nav Steps</b-card-title>
          </b-card-header>
          <b-card-body class="form-steps">
            <form class="vertical-navs-step">
              <b-row class="gy-5">
                <b-col lg="3">
                  <div class="nav flex-column custom-nav nav-pills" role="tablist" aria-orientation="vertical">
                    <b-button variant="link" class="nav-link done" id="v-pills-bill-info-tab" data-bs-toggle="pill"
                      data-bs-target="#v-pills-bill-info" type="button" role="tab" aria-controls="v-pills-bill-info"
                      aria-selected="true">
                      <span class="step-title me-2">
                        <i class="ri-close-circle-fill step-icon me-2"></i>
                        Step 1
                      </span>
                      Billing Info
                    </b-button>
                    <b-button variant="link" class="nav-link active" id="v-pills-bill-address-tab" data-bs-toggle="pill"
                      data-bs-target="#v-pills-bill-address" type="button" role="tab" aria-controls="v-pills-bill-address"
                      aria-selected="false">
                      <span class="step-title me-2">
                        <i class="ri-close-circle-fill step-icon me-2"></i>
                        Step 2
                      </span>
                      Address
                    </b-button>
                    <b-button variant="link" class="nav-link" id="v-pills-payment-tab" data-bs-toggle="pill"
                      data-bs-target="#v-pills-payment" type="button" role="tab" aria-controls="v-pills-payment"
                      aria-selected="false">
                      <span class="step-title me-2">
                        <i class="ri-close-circle-fill step-icon me-2"></i>
                        Step 3
                      </span>
                      Payment
                    </b-button>
                    <b-button variant="link" class="nav-link" id="v-pills-finish-tab" data-bs-toggle="pill"
                      data-bs-target="#v-pills-finish" type="button" role="tab" aria-controls="v-pills-finish"
                      aria-selected="false">
                      <span class="step-title me-2">
                        <i class="ri-close-circle-fill step-icon me-2"></i>
                        Step 4
                      </span>
                      Finish
                    </b-button>
                  </div>
                </b-col>
                <b-col lg="6">
                  <div class="px-lg-4">
                    <div class="tab-content">
                      <div class="tab-pane fade" id="v-pills-bill-info" role="tabpanel"
                        aria-labelledby="v-pills-bill-info-tab">
                        <div>
                          <h5>Billing Info</h5>
                          <p class="text-muted">Fill all information below</p>
                        </div>

                        <div>
                          <b-row class="g-3">
                            <b-col sm="6">
                              <label for="firstName" class="form-label">First
                                name</label>
                              <input type="text" class="form-control" id="firstName" placeholder="Enter First Name"
                                value="" required>
                              <div class="invalid-feedback">Please enter a First name
                              </div>
                            </b-col>

                            <b-col sm="6">
                              <label for="lastName" class="form-label">Last
                                name</label>
                              <input type="text" class="form-control" id="lastName" placeholder="Enter Last Name" value=""
                                required>
                              <div class="invalid-feedback">Please enter a last name</div>
                            </b-col>

                            <b-col cols="12">
                              <label for="username" class="form-label">Username</label>
                              <div class="input-group">
                                <span class="input-group-text">@</span>
                                <input type="text" class="form-control" id="username" placeholder="Username" required>
                                <div class="invalid-feedback">Please enter a user name
                                </div>
                              </div>
                            </b-col>

                            <b-col cols="12">
                              <label for="email" class="form-label">Email <span
                                  class="text-muted">(Optional)</span></label>
                              <input type="email" class="form-control" id="email" placeholder="Enter Email" />
                            </b-col>
                          </b-row>
                        </div>

                        <div class="d-flex align-items-start gap-3 mt-4">
                          <b-button type="button" variant="success" class="btn-label right ms-auto nexttab nexttab" data-nexttab="v-pills-bill-address-tab"><i
                              class="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Go
                            to Shipping</b-button>
                        </div>
                      </div>
                      <div class="tab-pane fade show active" id="v-pills-bill-address" role="tabpanel"
                        aria-labelledby="v-pills-bill-address-tab">
                        <div>
                          <h5>Shipping Address</h5>
                          <p class="text-muted">Fill all information below</p>
                        </div>

                        <div>
                          <b-row class="g-3">
                            <b-col cols="12">
                              <label for="address" class="form-label">Address</label>
                              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
                              <div class="invalid-feedback">Please enter a address</div>
                            </b-col>

                            <b-col cols="12">
                              <label for="address2" class="form-label">Address 2 <span
                                  class="text-muted">(Optional)</span></label>
                              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
                            </b-col>

                            <b-col md="5">
                              <label for="country" class="form-label">Country</label>
                              <select class="form-select" id="country" required>
                                <option value="">Choose...</option>
                                <option>United States</option>
                              </select>
                              <div class="invalid-feedback">Please select a country</div>
                            </b-col>

                            <b-col md="4">
                              <label for="state" class="form-label">State</label>
                              <select class="form-select" id="state">
                                <option value="">Choose...</option>
                                <option>California</option>
                              </select>
                              <div class="invalid-feedback">Please select a state</div>
                            </b-col>

                            <b-col md="3">
                              <label for="zip" class="form-label">Zip</label>
                              <input type="text" class="form-control" id="zip" placeholder="" />
                            </b-col>
                          </b-row>

                          <hr class="my-4 text-muted">

                          <div class="form-check mb-2">
                            <input type="checkbox" class="form-check-input" id="same-address">
                            <label class="form-check-label" for="same-address">Shipping
                              address is the same as my billing address</label>
                          </div>

                          <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="save-info">
                            <label class="form-check-label" for="save-info">Save this
                              information for next time</label>
                          </div>
                        </div>
                        <div class="d-flex align-items-start gap-3 mt-4">
                          <b-button variant="light" type="button" class="btn-label previestab"
                            data-previous="v-pills-bill-info-tab"><i
                              class="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>
                            Back to Billing Info</b-button>
                          <b-button type="button" variant="success" class="btn-label right ms-auto nexttab nexttab" data-nexttab="v-pills-payment-tab"><i class="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Go to
                            Payment</b-button>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="v-pills-payment" role="tabpanel"
                        aria-labelledby="v-pills-payment-tab">
                        <div>
                          <h5>Payment</h5>
                          <p class="text-muted">Fill all information below</p>
                        </div>

                        <div>
                          <div class="my-3">
                            <div class="form-check form-check-inline">
                              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked
                                required>
                              <label class="form-check-label" for="credit">Credit
                                card</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required>
                              <label class="form-check-label" for="debit">Debit
                                card</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required>
                              <label class="form-check-label" for="paypal">PayPal</label>
                            </div>
                          </div>

                          <b-row class="gy-3">
                            <b-col md="12">
                              <label for="cc-name" class="form-label">Name on
                                card</label>
                              <input type="text" class="form-control" id="cc-name" placeholder="" required>
                              <small class="text-muted">Full name as displayed on
                                card</small>
                              <div class="invalid-feedback">
                                Name on card is required
                              </div>
                            </b-col>

                            <b-col md="6">
                              <label for="cc-number" class="form-label">Credit card
                                number</label>
                              <input type="text" class="form-control" id="cc-number" placeholder="" required>
                              <div class="invalid-feedback">
                                Credit card number is required
                              </div>
                            </b-col>

                            <b-col md="3">
                              <label for="cc-expiration" class="form-label">Expiration</label>
                              <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
                              <div class="invalid-feedback">
                                Expiration date required
                              </div>
                            </b-col>

                            <b-col md="3">
                              <label for="cc-cvv" class="form-label">CVV</label>
                              <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
                              <div class="invalid-feedback">
                                Security code required
                              </div>
                            </b-col>
                          </b-row>
                        </div>

                        <div class="d-flex align-items-start gap-3 mt-4">
                          <b-button type="button" variant="light" class="btn-label previestab"
                            data-previous="v-pills-bill-address-tab"><i
                              class="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>
                            Back to Shipping Info</b-button>
                          <b-button type="button" variant="success" class="btn-label right ms-auto nexttab nexttab" data-nexttab="v-pills-finish-tab"><i class="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i> Order
                            Complete</b-button>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="v-pills-finish" role="tabpanel" aria-labelledby="v-pills-finish-tab">
                        <div class="text-center pt-4 pb-2">
                          <h5>Your Order is Completed !</h5>
                          <p class="text-muted">You Will receive an order confirmation email with details of your order.</p>
                      </div>

                      </div>
                    </div>
                  </div>
                </b-col>

                <b-col lg="3">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 class="fs-md text-primary mb-0"><i class="ri-shopping-cart-fill align-middle me-2"></i> Your cart
                    </h5>
                    <b-badge variant="danger" pill class="rounded-pill">3</b-badge>
                  </div>
                  <ul class="list-group mb-3">
                    <li class="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 class="my-0">Product name</h6>
                        <small class="text-muted">Brief description</small>
                      </div>
                      <span class="text-muted">$12</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 class="my-0">Second product</h6>
                        <small class="text-muted">Brief description</small>
                      </div>
                      <span class="text-muted">$8</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 class="my-0">Third item</h6>
                        <small class="text-muted">Brief description</small>
                      </div>
                      <span class="text-muted">$5</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between bg-light">
                      <div class="text-success">
                        <h6 class="my-0">Discount code</h6>
                        <small>−$5 Discount</small>
                      </div>
                      <span class="text-success">−$5</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                      <span>Total (USD)</span>
                      <strong>$20</strong>
                    </li>
                  </ul>
                </b-col>
              </b-row>
            </form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </Layout>
</template>