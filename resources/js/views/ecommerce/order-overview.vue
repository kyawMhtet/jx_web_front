<script>
import { GoogleMap, Marker as Markers } from 'vue3-google-map';

import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import avatar1 from "../../../images/users/32/avatar-1.jpg";
// product imgs
import pImg1 from "../../../images/products/img-1.png"
import pImg3 from "../../../images/products/img-3.png"
import pImg6 from "../../../images/products/img-6.png"
import pImg9 from "../../../images/products/img-9.png"
import barcode from "../../../images/barcode.svg";

export default {
    setup() {
        const markerClick = () => alert('You clicked in this marker');
        const center = { lat: -12.043333, lng: -77.028333 };
        const markerOptions = { position: center, label: 'L', title: 'Lima' };

        return { center, markerOptions, markerClick };
    },
    data() {
        return {
            title: "Order Overview",
            items: [
                {
                    text: "Ecommerce",
                    href: "/",
                },
                {
                    text: "Order Overview",
                    active: true,
                },
            ],
            avatar1, pImg1, pImg3, pImg6, pImg9, barcode,
        };
    },
    components: {
        Layout,
        PageHeader,
        GoogleMap, Markers
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-body class="d-flex align-items-center flex-wrap gap-3">
                        <div class="flex-grow-1">
                            <p class="text-muted mb-2">Order Number</p>
                            <h6 class="fs-md mb-0">#TBS250001</h6>
                        </div>
                        <div class="flex-shrink-0 text-end">
                            <h6 class="fs-md mb-2">15 Feb, 2023 <i class="bi bi-calendar4-event align-baseline ms-1"></i>
                            </h6>
                            <p class="text-muted mb-0">08:54 AM <i class="bi bi-clock align-baseline ms-1"></i></p>
                        </div>
                        <div class="flex-shrink-0">
                            <router-link to="/invoices/overview" class="btn btn-primary"><i
                                    class="ph-download-simple align-middle me-1"></i> Invoice</router-link>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xxl="3" md="6">
                <b-card no-body class="border-bottom border-2 border-secondary">
                    <b-card-body class="d-flex gap-3">
                        <div class="flex-grow-1">
                            <b-card-title title-tag="h6" class="mb-3">Customer Info</b-card-title>
                            <p class="fw-medium fs-md mb-1">Bryana Watsica</p>
                            <p class="text-muted mb-1">watsica@steex.com</p>
                            <p class="text-muted mb-0">+(253) 01234 56789</p>
                        </div>
                        <div class="flex-shrink-0">
                            <img :src="avatar1" alt="" class="avatar-sm rounded img-thumbnail" />
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="3" md="6">
                <b-card no-body class="border-bottom border-2 border-primary">
                    <b-card-body class="d-flex gap-3">
                        <div class="flex-grow-1">
                            <b-card-title title-tag="h6" class="mb-3">Shipping Info</b-card-title>
                            <p class="fw-medium fs-md mb-1">Jennifer Mayert</p>
                            <p class="text-muted mb-1">730 Madison Ave, Covington</p>
                            <p class="text-muted mb-0">Kentucky, United States</p>
                        </div>
                        <div class="flex-shrink-0">
                            <div class="avatar-sm">
                                <div class="avatar-title bg-primary-subtle text-primary fs-3 rounded">
                                    <i class="ph-truck"></i>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="3" md="6">
                <b-card no-body class="border-bottom border-2 border-info">
                    <b-card-body class="d-flex gap-3">
                        <div class="flex-grow-1">
                            <b-card-title title-tag="h6" class="mb-3">Billing Info</b-card-title>
                            <p class="fw-medium fs-md mb-1">Bryana Watsica</p>
                            <p class="text-muted mb-1">730 Madison Ave, Covington</p>
                            <p class="text-muted mb-0">Kentucky, United States</p>
                        </div>
                        <div class="flex-shrink-0">
                            <div class="avatar-sm">
                                <div class="avatar-title bg-info-subtle text-info fs-3 rounded">
                                    <i class="ph-file-text"></i>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="3" md="6">
                <b-card no-body class="border-bottom border-2 border-light">
                    <b-card-body class="d-flex gap-3">
                        <div class="flex-grow-1">
                            <b-card-title title-tag="h6" class="mb-3">Payment Info</b-card-title>
                            <p class="fw-medium fs-md mb-1">ID: #TBS3650259845</p>
                            <p class="text-muted mb-1">Payment Method: <b>Debit Card</b></p>
                            <p class="text-muted mb-0">Card Number: <b>xxxx xxxx xxxx 2456</b></p>
                        </div>
                        <div class="flex-shrink-0">
                            <div class="avatar-sm">
                                <div class="avatar-title bg-light text-body fs-3 rounded">
                                    <i class="ph-currency-circle-dollar"></i>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xxl="9">
                <b-card no-body>
                    <b-card-header class="d-flex align-items-center gap-3">
                        <b-card-title title-tag="h6" class="mb-0 flex-grow-1">Product Items</b-card-title>
                        <div class="flex-shrink-0">
                            <b-button type="button" variant="danger" size="sm"><i class="ph-x align-middle"></i> Cancel
                                Order</b-button>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="table-responsive">
                            <table class="table align-middle table-nowrap table-borderless">
                                <thead class="table-active">
                                    <tr>
                                        <th>Product Items</th>
                                        <th>Item Price</th>
                                        <th>Quantity</th>
                                        <th class="text-end">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="product-item d-flex align-items-center gap-2">
                                                <div class="avatar-sm flex-shrink-0">
                                                    <div class="avatar-title bg-light rounded">
                                                        <img :src="pImg1" alt="" class="avatar-xs" />
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="fs-md"><router-link to="/ecommerce/product-details"
                                                            class="text-reset">Branded T-Shirts</router-link></h6>
                                                    <p class="text-muted mb-0"><b-link href="#!"
                                                            class="text-reset">Fashion</b-link></p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$161.25</td>
                                        <td>03</td>
                                        <td class="fw-medium text-end">$483.75</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="product-item d-flex align-items-center gap-2">
                                                <div class="avatar-sm flex-shrink-0">
                                                    <div class="avatar-title bg-light rounded">
                                                        <img :src="pImg3" alt="" class="avatar-xs" />
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="fs-md"><router-link to="/ecommerce/product-details"
                                                            class="text-reset">Fossil gen 5E smart watch</router-link></h6>
                                                    <p class="text-muted mb-0"><b-link href="#!"
                                                            class="text-reset">Watch</b-link></p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$69.60</td>
                                        <td>02</td>
                                        <td class="fw-medium text-end">$139.20</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="product-item d-flex align-items-center gap-2">
                                                <div class="avatar-sm flex-shrink-0">
                                                    <div class="avatar-title bg-light rounded">
                                                        <img :src="pImg6" alt="" class="avatar-xs" />
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="fs-md"><router-link to="/ecommerce/product-details"
                                                            class="text-reset">Blive Printed Men Round Neck</router-link>
                                                    </h6>
                                                    <p class="text-muted mb-0"><b-link href="#!"
                                                            class="text-reset">Fashion</b-link></p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$250.00</td>
                                        <td>06</td>
                                        <td class="fw-medium text-end">$1,500.00</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="product-item d-flex align-items-center gap-2">
                                                <div class="avatar-sm flex-shrink-0">
                                                    <div class="avatar-title bg-light rounded">
                                                        <img :src="pImg9" alt="" class="avatar-xs" />
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="fs-md"><router-link to="/ecommerce/product-details"
                                                            class="text-reset">Flip-Flops and House Slippers</router-link>
                                                    </h6>
                                                    <p class="text-muted mb-0"><b-link href="#!"
                                                            class="text-reset">Footwear</b-link></p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$150.00</td>
                                        <td>01</td>
                                        <td class="fw-medium text-end">$150.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <b-row class="gy-3">
                            <b-col sm="6" lg="6" xl="3">
                                <div class="text-center border border-dashed p-3 rounded">
                                    <p class="text-muted mb-2">Order Date</p>
                                    <h6 class="fs-md mb-0">15 Feb, 2023</h6>
                                </div>
                            </b-col>
                            <b-col sm="6" lg="6" xl="3">
                                <div class="text-center border border-dashed p-3 rounded">
                                    <p class="text-muted mb-2">Delivery Date</p>
                                    <h6 class="fs-md mb-0">23 Feb, 2023</h6>
                                </div>
                            </b-col>
                            <b-col sm="6" lg="6" xl="3">
                                <div class="text-center border border-dashed p-3 rounded">
                                    <p class="text-muted mb-2">Order Amount</p>
                                    <h6 class="fs-md mb-0">$2,050.18</h6>
                                </div>
                            </b-col>
                            <b-col sm="6" lg="6" xl="3">
                                <div class="text-center border border-dashed p-3 rounded">
                                    <p class="text-muted mb-2">Order Status</p>
                                    <span class="badge bg-danger-subtle text-danger mb-0">Out of Delivery</span>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="3">
                <b-row>
                    <b-col xxl="12" lg="6">
                        <b-card no-body>
                            <b-card-header>
                                <b-card-title title-tag="h6" class="mb-0">Total order amount</b-card-title>
                            </b-card-header>
                            <b-card-body class="pt-4">
                                <div class="table-responsive table-card">
                                    <table class="table table-borderless mb-0">
                                        <tbody>
                                            <tr>
                                                <td>Sub Total :</td>
                                                <td class="text-end">$2,272.95</td>
                                            </tr>
                                            <tr>
                                                <td>Discount <span class="text-muted">(STEEX30)</span> : :</td>
                                                <td class="text-end">-$681.89</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping Charge :</td>
                                                <td class="text-end">$49.99</td>
                                            </tr>
                                            <tr>
                                                <td>Estimated Tax :</td>
                                                <td class="text-end">$409.13</td>
                                            </tr>
                                            <tr class="border-top border-top-dashed">
                                                <th scope="row">Total (USD) :</th>
                                                <th class="text-end">$2,050.18</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>
                    <b-col xxl="12" lg="6">
                        <b-card no-body>
                            <b-card-body>
                                <div class="d-flex align-items-center">
                                    <b-card-title title-tag="h5" class="flex-grow-1 mb-0">Logistics Details</b-card-title>
                                    <div class="flex-shrink-0">
                                        <b-link href="#" class="badge bg-secondary-subtle text-secondary">Track
                                            Order</b-link>
                                    </div>
                                </div>
                            </b-card-body>
                            <b-card-body class="border-top border-dashed">
                                <div>
                                    <h6 class="text-muted float-end mb-0">ID: MFDS1400457854</h6>
                                    <h5 class="fs-lg clearfix"><b-link href="#!" class="text-reset">Themesbrand</b-link>
                                    </h5>
                                    <p class="text-muted mb-2 mb-md-0">Scan barcode to track </p>
                                    <div class="text-center p-3 pb-0">
                                        <img alt="Scan Me!" :src="barcode" class="img-fluid" />
                                    </div>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="d-flex align-items-center flex-wrap gap-2">
                        <b-card-title title-tag="h6" class="flex-grow-1 mb-0">Order Status</b-card-title>
                        <div class="flex-shrink-0">
                            <b-button type="button" size="sm" class="danger"><i class="ph-x align-middle"></i> Cancel
                                Order</b-button>
                            <router-link to="/invoices/overview" class="btn btn-primary btn-sm ms-1"><i
                                    class="ph-download-simple align-middle me-1"></i> Invoice</router-link>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="progress progress-step-arrow progress-info mb-4">
                        <b-link href="#" class="progress-bar active" role="progressbar" style="width: 100%"
                            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><i
                                class="ph-bag align-baseline me-1 d-none d-lg-inline-block"></i> Order Placed</b-link>
                        <b-link href="#" class="progress-bar active d-none d-xxl-inline-block" role="progressbar"
                            style="width: 100%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"><i
                                class="ph-package align-middle me-1"></i> Packed</b-link>
                        <b-link href="#" class="progress-bar pending d-none d-md-inline-block" role="progressbar"
                            style="width: 100%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"><i
                                class="ph-truck align-baseline me-1 d-none d-lg-inline-block"></i> Shipping</b-link>
                        <b-link href="#" class="progress-bar d-none d-md-inline-block" role="progressbar"
                            style="width: 100%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"><i
                                class="ph-bicycle align-baseline me-1 d-none d-lg-inline-block"></i> Out For
                            Delivery</b-link>
                        <b-link href="#" class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="20"
                            aria-valuemin="0" aria-valuemax="100"><i
                                class="ph-house-line align-baseline me-1 d-none d-lg-inline-block"></i>
                            Delivered</b-link>
                    </div>

                    <!-- google map -->
                    <GoogleMap api-key="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE" style="width: 100%; height: 300px"
                        :center="{ lat: -12.043333, lng: -77.028333 }" :zoom="15">
                        <Markers :options="markerOptions" @click="markerClick" />
                    </GoogleMap>

                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</Layout></template>