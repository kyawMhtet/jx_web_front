<script>
import Layout from "../../../layouts/main.vue";
import {
    SimpleBar
} from "simplebar-vue3";
import {
    CountTo
} from "vue3-count-to";
import SalesbyCountries from "./SalesbyCountries.vue"
import {
    revenueChart,
    budgetChart,
    payoutsChart,
    trafficSourceChart
} from "./chartsData"

// product imgs
import pImg1 from "../../../../images/products/img-1.png"
import pImg2 from "../../../../images/products/img-2.png"
import pImg3 from "../../../../images/products/img-3.png"
import pImg4 from "../../../../images/products/img-4.png"
import pImg5 from "../../../../images/products/img-5.png"
import pImg6 from "../../../../images/products/img-6.png"

// avatar imgs
import avatar1 from "../../../../images/users/avatar-1.jpg";
import avatar2 from "../../../../images/users/avatar-2.jpg";
import avatar4 from "../../../../images/users/avatar-4.jpg";
import avatar5 from "../../../../images/users/avatar-5.jpg";
import avatar6 from "../../../../images/users/avatar-6.jpg";
import avatar7 from "../../../../images/users/avatar-7.jpg";
import avatar8 from "../../../../images/users/avatar-8.jpg";

// cmpany imgs
import cImg1 from "../../../../images/companies/img-1.png";
import cImg2 from "../../../../images/companies/img-2.png";
import cImg3 from "../../../../images/companies/img-3.png";
import cImg4 from "../../../../images/companies/img-4.png";
import cImg5 from "../../../../images/companies/img-5.png";
import cImg7 from "../../../../images/companies/img-7.png";

export default {
    data() {
        return {
            revenueChart: revenueChart,
            budgetChart: budgetChart,
            payoutsChart: payoutsChart,
            trafficSourceChart: trafficSourceChart,
            productModal: false,
            addAmount: false,
            pImg1,
            pImg2,
            pImg3,
            pImg4,
            pImg5,
            pImg6,
            avatar1,
            avatar2,
            avatar4,
            avatar5,
            avatar6,
            avatar7,
            avatar8,
            cImg1,
            cImg2,
            cImg3,
            cImg4,
            cImg5,
            cImg7,
        };
    },
    components: {
        Layout,
        SimpleBar,
        CountTo,
        SalesbyCountries
    },
};
</script>

<template>
<Layout>
    <b-row>
        <b-col xl="4">
            <b-card no-body class="card-height-100 border-0 overflow-hidden">
                <b-card-body class="p-0">
                    <b-row class="g-0">
                        <b-col md="6">
                            <b-card no-body class="shadow-none border-end-md border-bottom rounded-0 mb-0">
                                <b-card-body>
                                    <div class="dropdown float-end">
                                        <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="text-muted fs-lg"><i class="mdi mdi-dots-vertical align-middle"></i></span>
                                        </b-link>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <b-link class="dropdown-item" href="#">Today</b-link>
                                            <b-link class="dropdown-item" href="#">Last Week</b-link>
                                            <b-link class="dropdown-item" href="#">Last Month</b-link>
                                            <b-link class="dropdown-item" href="#">Current Year</b-link>
                                        </div>
                                    </div>
                                    <div class="avatar-sm">
                                        <span class="avatar-title bg-primary-subtle text-primary rounded-circle fs-3">
                                            <i class="ph-wallet"></i>
                                        </span>
                                    </div>
                                    <div class="mt-4">
                                        <p class="text-uppercase fw-medium text-muted text-truncate fs-sm">Total Revenue
                                        </p>
                                        <h4 class="fw-semibold mb-3">
                                            <count-to :startVal="0" :duration="5000" :endVal="750.36" decimals="2" prefix="$" suffix="M"></count-to>
                                        </h4>
                                        <div class="d-flex align-items-center gap-2">
                                            <h5 class="text-success fs-xs mb-0">
                                                <i class="ri-arrow-right-up-line fs-sm align-middle"></i> +19.07 %
                                            </h5>
                                            <p class="text-muted mb-0">than last week</p>
                                        </div>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col md="6">
                            <b-card no-body class="shadow-none border-bottom rounded-0 mb-0">
                                <b-card-body>
                                    <div class="dropdown float-end">
                                        <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="text-muted fs-lg"><i class="mdi mdi-dots-vertical align-middle"></i></span>
                                        </b-link>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <b-link class="dropdown-item" href="#">Today</b-link>
                                            <b-link class="dropdown-item" href="#">Last Week</b-link>
                                            <b-link class="dropdown-item" href="#">Last Month</b-link>
                                            <b-link class="dropdown-item" href="#">Current Year</b-link>
                                        </div>
                                    </div>
                                    <div class="avatar-sm">
                                        <span class="avatar-title bg-dark-subtle text-dark rounded-circle fs-3">
                                            <i class="ph-bag"></i>
                                        </span>
                                    </div>
                                    <div class="mt-4">
                                        <p class="text-uppercase fw-medium text-muted text-truncate fs-sm">Orders</p>
                                        <h4 class="fw-semibold mb-3">
                                            <count-to :startVal="0" :duration="5000" :endVal="684"></count-to>
                                        </h4>
                                        <div class="d-flex align-items-center gap-2">
                                            <h5 class="text-success fs-xs mb-0">
                                                <i class="ri-arrow-right-up-line fs-sm align-middle"></i> +8.13 %
                                            </h5>
                                            <p class="text-muted mb-0">than last week</p>
                                        </div>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col md="6">
                            <b-card no-body class="shadow-none border-end-md rounded-0 mb-0">
                                <b-card-body>
                                    <div class="dropdown float-end">
                                        <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="text-muted fs-lg"><i class="mdi mdi-dots-vertical align-middle"></i></span>
                                        </b-link>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <b-link class="dropdown-item" href="#">Today</b-link>
                                            <b-link class="dropdown-item" href="#">Last Week</b-link>
                                            <b-link class="dropdown-item" href="#">Last Month</b-link>
                                            <b-link class="dropdown-item" href="#">Current Year</b-link>
                                        </div>
                                    </div>
                                    <div class="avatar-sm">
                                        <span class="avatar-title bg-light text-body rounded-circle fs-3">
                                            <i class="ph-eye"></i>
                                        </span>
                                    </div>
                                    <div class="mt-4">
                                        <p class="text-uppercase fw-medium text-muted text-truncate fs-sm">Product Views
                                        </p>
                                        <h4 class="fw-semibold mb-3">
                                            <count-to :startVal="0" :duration="5000" :endVal="113870"></count-to>
                                        </h4>
                                        <div class="d-flex align-items-center gap-2">
                                            <h5 class="text-danger fs-xs mb-0">
                                                <i class="ri-arrow-right-down-line fs-sm align-middle"></i> +2.01 %
                                            </h5>
                                            <p class="text-muted mb-0">than last week</p>
                                        </div>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col md="6">
                            <b-card no-body class="shadow-none border-top border-top-md-0 rounded-0 mb-0">
                                <b-card-body>
                                    <div class="dropdown float-end">
                                        <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="text-muted fs-lg"><i class="mdi mdi-dots-vertical align-middle"></i></span>
                                        </b-link>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <b-link class="dropdown-item" href="#">Today</b-link>
                                            <b-link class="dropdown-item" href="#">Last Week</b-link>
                                            <b-link class="dropdown-item" href="#">Last Month</b-link>
                                            <b-link class="dropdown-item" href="#">Current Year</b-link>
                                        </div>
                                    </div>
                                    <div class="avatar-sm">
                                        <span class="avatar-title bg-info-subtle text-info rounded-circle fs-3">
                                            <i class="ph-users-three"></i>
                                        </span>
                                    </div>
                                    <div class="mt-4">
                                        <p class="text-uppercase fw-medium text-muted text-truncate fs-sm">Customers</p>
                                        <h4 class="fw-semibold mb-3">
                                            <count-to :startVal="0" :duration="5000" :endVal="2500" suffix="k"></count-to>
                                        </h4>
                                        <div class="d-flex align-items-center gap-2">
                                            <h5 class="text-success fs-xs mb-0">
                                                <i class="ri-arrow-right-up-line fs-sm align-middle"></i> +10.42 %
                                            </h5>
                                            <p class="text-muted mb-0">than last week</p>
                                        </div>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xl="8">
            <b-card no-body>
                <b-row class="g-0">
                    <b-col xl="9">
                        <b-card-header class="border-0 align-items-center d-flex">
                            <b-card-title class="mb-0 flex-grow-1">Revenue</b-card-title>
                            <div class="d-flex">
                                <b-button type="button" variant="subtle-secondary me-1" size="sm">
                                    ALL
                                </b-button>
                                <b-button type="button" variant="subtle-secondary me-1" size="sm">
                                    1M
                                </b-button>
                                <b-button type="button" variant="subtle-secondary me-1" size="sm">
                                    6M
                                </b-button>
                                <b-button type="button" variant="subtle-primary" size="sm">
                                    1Y
                                </b-button>
                            </div>
                        </b-card-header>
                        <b-card-body class="ps-0">
                            <div class="w-100">
                                <apexchart class="apex-charts" height="328" dir="ltr" :series="revenueChart.series" :options="revenueChart.chartOptions"></apexchart>
                            </div>
                        </b-card-body>
                    </b-col>
                    <b-col xl="3">
                        <b-card-body class="border-start-xl border-top border-top-xl-0 border-2 h-100">
                            <div>
                                <p class="text-muted mb-2">Budget (USD)</p>
                                <h4>$750.36M <small class="text-success fs-sm fw-normal"><i class="ph-arrow-up align-baseline"></i> 2.17%</small></h4>
                                <p class="text-muted">Budget in than last years</p>
                                <div class="mx-3">
                                    <apexchart class="apex-charts" height="45" dir="ltr" :series="budgetChart.series" :options="budgetChart.chartOptions"></apexchart>
                                </div>
                            </div>

                            <div class="mt-4">
                                <p class="text-muted mb-2">Payouts (USD)</p>
                                <h4>$7,45,123 <small class="text-danger fs-sm fw-normal"><i class="ph-arrow-down align-baseline"></i> -1.36%</small></h4>
                                <p class="text-muted">Payouts in than last years</p>
                                <div class="mx-3">
                                    <apexchart class="apex-charts" height="45" dir="ltr" :series="payoutsChart.series" :options="payoutsChart.chartOptions"></apexchart>
                                </div>
                            </div>
                            <div class="mt-4">
                                <b-button type="button" variant="primary" class="w-100" @click="addAmount = !addAmount">Add
                                    Amount</b-button>
                            </div>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
        </b-col>
    </b-row>

    <b-row>
        <SalesbyCountries />
        <b-col xl="3" lg="6">
            <b-card no-body class="card-height-100">
                <b-card-header class="d-flex">
                    <b-card-title class="mb-0 flex-grow-1">Traffic Source</b-card-title>
                    <div class="dropdown card-header-dropdown float-end">
                        <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="ph-dots-three-outline-vertical"></i>
                        </b-link>
                        <div class="dropdown-menu dropdown-menu-end">
                            <b-link class="dropdown-item" href="#">Today</b-link>
                            <b-link class="dropdown-item" href="#">Last Week</b-link>
                            <b-link class="dropdown-item" href="#">Last Month</b-link>
                            <b-link class="dropdown-item" href="#">Current Year</b-link>
                        </div>
                    </div>
                </b-card-header>
                <b-card-body>
                    <apexchart class="apex-charts" height="360" dir="ltr" :series="trafficSourceChart.series" :options="trafficSourceChart.chartOptions"></apexchart>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xl="3" lg="6">
            <b-card no-body class="card-height-100">
                <b-card-header class="d-flex">
                    <b-card-title class="mb-0 flex-grow-1">Recent Sales</b-card-title>
                    <b-link href="#!" class="text-muted">View All <i class="ph-caret-right align-middle"></i></b-link>
                </b-card-header>
                <b-card-body class="px-0">
                    <SimpleBar class="px-3" style="max-height: 360px;">
                        <table class="table mb-0">
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center gap-1">
                                            <div class="flex-shrink-0">
                                                <img :src="avatar2" alt="" class="avatar-sm rounded-circle p-1" />
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="fs-md mb-1">Bethany Nienow</h6>
                                                <p class="text-muted mb-0">03 Feb, 2023</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-end">
                                        <h6 class="fs-md">$630.73</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center gap-1">
                                            <div class="flex-shrink-0">
                                                <img :src="avatar7" alt="" class="avatar-sm rounded-circle p-1" />
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="fs-md mb-1">Sonia Conn</h6>
                                                <p class="text-muted mb-0">03 Feb, 2023</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-end">
                                        <h6 class="fs-md">$1,452.64</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center gap-1">
                                            <div class="flex-shrink-0">
                                                <img :src="avatar4" alt="" class="avatar-sm rounded-circle p-1" />
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="fs-md mb-1">Talon Bradtke</h6>
                                                <p class="text-muted mb-0">03 Feb, 2023</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-end">
                                        <h6 class="fs-md">$478.87</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center gap-1">
                                            <div class="flex-shrink-0">
                                                <img :src="avatar5" alt="" class="avatar-sm rounded-circle p-1" />
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="fs-md mb-1">Tyrell Kerluke</h6>
                                                <p class="text-muted mb-0">03 Feb, 2023</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-end">
                                        <h6 class="fs-md">$82.14</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center gap-1">
                                            <div class="flex-shrink-0">
                                                <img :src="avatar6" alt="" class="avatar-sm rounded-circle p-1" />
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="fs-md mb-1">Ross Zieme</h6>
                                                <p class="text-muted mb-0">03 Feb, 2023</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-end">
                                        <h6 class="fs-md">$79.00</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center gap-1">
                                            <div class="flex-shrink-0">
                                                <img :src="avatar1" alt="" class="avatar-sm rounded-circle p-1" />
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="fs-md mb-1">Hollis Spencer</h6>
                                                <p class="text-muted mb-0">03 Feb, 2023</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-end">
                                        <h6 class="fs-md">$849.05</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center gap-1">
                                            <div class="flex-shrink-0">
                                                <img :src="avatar8" alt="" class="avatar-sm rounded-circle p-1" />
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="fs-md mb-1">Cordia Grady</h6>
                                                <p class="text-muted mb-0">03 Feb, 2023</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-end">
                                        <h6 class="fs-md">$254.32</h6>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </SimpleBar>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>

    <b-row>
        <b-col lg="8">
            <b-card no-body id="contactList">
                <b-card-header class="align-items-center d-flex">
                    <b-card-title class="mb-0 flex-grow-1">Latest Orders</b-card-title>
                    <div class="flex-shrink-0">
                        <div class="dropdown card-header-dropdown sortble-dropdown">
                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="fw-semibold text-uppercase fs-12">Sort by:
                                </span><span class="text-muted dropdown-title">Order Date</span> <i class="mdi mdi-chevron-down ms-1"></i>
                            </b-link>
                            <div class="dropdown-menu dropdown-menu-end">
                                <b-link class="dropdown-item sort" data-sort="order_date">Order Date</b-link>
                                <b-link class="dropdown-item sort" data-sort="order_id">Order ID</b-link>
                                <b-link class="dropdown-item sort" data-sort="amount">Amount</b-link>
                                <b-link class="dropdown-item sort" data-sort="status">Status</b-link>
                            </div>
                        </div>
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="table-responsive mb-0">
                        <table class="table table-borderless table-centered align-middle table-nowrap mb-0">
                            <thead class="text-muted table-light">
                                <tr>
                                    <th scope="col" class="sort cursor-pointer" data-sort="order_date">Order Date</th>
                                    <th scope="col" class="sort cursor-pointer" data-sort="order_id">Order ID</th>
                                    <th scope="col" class="sort cursor-pointer" data-sort="shop">Shop</th>
                                    <th scope="col" class="sort cursor-pointer" data-sort="customer">Customers</th>
                                    <th scope="col" class="sort cursor-pointer" data-sort="products">Products</th>
                                    <th scope="col" class="sort cursor-pointer" data-sort="amount">Amount</th>
                                    <th scope="col" class="sort cursor-pointer" data-sort="status">Status</th>
                                    <th scope="col" class="sort cursor-pointer" data-sort="rating">Rating</th>
                                </tr>
                            </thead>
                            <tbody class="list">
                                <tr>
                                    <td class="order_date">
                                        15 Feb, 2023
                                    </td>
                                    <td class="order_id">
                                        <router-link to="/ecommerce/order-overview" class="fw-medium link-primary">#TBS250011</router-link>
                                    </td>
                                    <td class="shop">
                                        <img :src="cImg7" alt="" class="avatar-xxs rounded-circle" />
                                    </td>
                                    <td class="customer">
                                        Alex Smith
                                    </td>
                                    <td class="products">Clothes</td>
                                    <td class="amount">
                                        <span class="fw-medium">$109.00</span>
                                    </td>
                                    <td class="status">
                                        <span class="badge bg-secondary-subtle text-secondary">New</span>
                                    </td>
                                    <td class="rating">
                                        <h5 class="fs-md fw-medium mb-0">-</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="order_date">
                                        14 Feb, 2023
                                    </td>
                                    <td class="order_id">
                                        <router-link to="/ecommerce/order-overview" class="fw-medium link-primary">#TBS250010</router-link>
                                    </td>
                                    <td class="shop">
                                        <img :src="cImg1" alt="" class="avatar-xxs rounded-circle" />
                                    </td>
                                    <td class="customer">
                                        Jansh Brown
                                    </td>
                                    <td class="products">Kitchen Storage</td>
                                    <td class="amount">
                                        <span class="fw-medium">$149.00</span>
                                    </td>
                                    <td class="status">
                                        <span class="badge bg-warning-subtle text-warning">Pending</span>
                                    </td>
                                    <td class="rating">
                                        <h5 class="fs-md fw-medium mb-0"><i class="ph-star align-baseline text-warning"></i> 4.5</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="order_date">
                                        30 Jan, 2023
                                    </td>
                                    <td class="order_id">
                                        <router-link to="/ecommerce/order-overview" class="fw-medium link-primary">#TBS250009</router-link>
                                    </td>
                                    <td class="shop">
                                        <img :src="cImg2" alt="" class="avatar-xxs rounded-circle" />
                                    </td>
                                    <td class="customer">
                                        Ayaan Bowen
                                    </td>
                                    <td class="products">Bike Accessories</td>
                                    <td class="amount">
                                        <span class="fw-medium">$215.00</span>
                                    </td>
                                    <td class="status">
                                        <span class="badge bg-danger-subtle text-danger">Out of Delivered</span>
                                    </td>
                                    <td class="rating">
                                        <h5 class="fs-md fw-medium mb-0"><i class="ph-star align-baseline text-warning"></i> 4.9</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="order_date">
                                        25 Jan, 2023
                                    </td>
                                    <td class="order_id">
                                        <router-link to="/ecommerce/order-overview" class="fw-medium link-primary">#TBS250008</router-link>
                                    </td>
                                    <td class="shop">
                                        <img :src="cImg3" alt="" class="avatar-xxs rounded-circle" />
                                    </td>
                                    <td class="customer">
                                        Prezy Mark
                                    </td>
                                    <td class="products">Furniture</td>
                                    <td class="amount">
                                        <span class="fw-medium">$199.00</span>
                                    </td>
                                    <td class="status">
                                        <span class="badge bg-primary-subtle text-primary">Shipping</span>
                                    </td>
                                    <td class="rating">
                                        <h5 class="fs-md fw-medium mb-0"><i class="ph-star align-baseline text-warning"></i> 4.3</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="order_date">
                                        19 Jan, 2023
                                    </td>
                                    <td class="order_id">
                                        <router-link to="/ecommerce/order-overview" class="fw-medium link-primary">#TBS250007</router-link>
                                    </td>
                                    <td class="shop">
                                        <img :src="cImg4" alt="" class="avatar-xxs rounded-circle" />
                                    </td>
                                    <td class="customer">
                                        Vihan Hudda
                                    </td>
                                    <td class="products">Bags and Wallets</td>
                                    <td class="amount">
                                        <span class="fw-medium">$330.00</span>
                                    </td>
                                    <td class="status">
                                        <span class="badge bg-success-subtle text-success">Delivered</span>
                                    </td>
                                    <td class="rating">
                                        <h5 class="fs-md fw-medium mb-0"><i class="ph-star align-baseline text-warning"></i> 4.7</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="order_date">
                                        16 Jan, 2023
                                    </td>
                                    <td class="order_id">
                                        <router-link to="/ecommerce/order-overview" class="fw-medium link-primary">#TBS250006</router-link>
                                    </td>
                                    <td class="shop">
                                        <img :src="cImg5" alt="" class="avatar-xxs rounded-circle" />
                                    </td>
                                    <td class="customer">
                                        Vihan Hudda
                                    </td>
                                    <td class="products">Bags and Wallets</td>
                                    <td class="amount">
                                        <span class="fw-medium">$745.11</span>
                                    </td>
                                    <td class="status">
                                        <span class="badge bg-warning-subtle text-warning">Pending</span>
                                    </td>
                                    <td class="rating">
                                        <h5 class="fs-md fw-medium mb-0"><i class="ph-star align-baseline text-warning"></i> 4.6</h5>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="noresult" style="display: none">
                            <div class="text-center">
                                <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#405189,secondary:#0ab39c" style="width:75px;height:75px"></lord-icon>
                                <h5 class="mt-2">Sorry! No Result Found</h5>
                                <p class="text-muted mb-0">We've searched more than 150+ transactions We did not find
                                    any transactions for you search.</p>
                            </div>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col lg="4">
            <b-card no-body>
                <b-card-header class="d-flex align-items-center">
                    <b-card-title class="mb-0 flex-grow-1">Popular Products</b-card-title>
                    <div class="flex-shrink-0">
                        <div class="dropdown card-header-dropdown">
                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="fw-semibold text-uppercase">Sort by:
                                </span><span class="text-muted">Today<i class="mdi mdi-chevron-down ms-1"></i></span>
                            </b-link>
                            <div class="dropdown-menu dropdown-menu-end">
                                <b-link class="dropdown-item" href="#">Today</b-link>
                                <b-link class="dropdown-item" href="#">Yesterday</b-link>
                                <b-link class="dropdown-item" href="#">Last 7 Days</b-link>
                                <b-link class="dropdown-item" href="#">Last 30 Days</b-link>
                                <b-link class="dropdown-item" href="#">This Month</b-link>
                                <b-link class="dropdown-item" href="#">Last Month</b-link>
                            </div>
                        </div>
                    </div>
                </b-card-header>
                <b-card-body class="px-0">
                    <SimpleBar class="px-3" style="max-height: 333px;">
                        <div class="vstack gap-2">
                            <div class="p-2 border border-dashed">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="avatar-sm flex-shrink-0">
                                        <div class="avatar-title bg-light rounded">
                                            <img :src="pImg1" alt="" class="avatar-xs" />
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <b-link href="#!">
                                            <h6 class="fs-md mb-2">Craft Women Black Sling Bag</h6>
                                        </b-link>
                                        <ul class="hstack list-unstyled gap-2 mb-0 fs-sm fw-medium text-muted">
                                            <li>
                                                <i class="ph-star align-baseline"></i> 487
                                            </li>
                                            <li>
                                                <i class="ph-shopping-cart align-baseline"></i> 936
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="text-end">
                                        <h5 class="fs-md text-primary mb-0">$15.99</h5>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <b-button variant="secondary" size="sm" class="btn-icon" @click="productModal = !productModal"><i class="ph-arrow-right"></i></b-button>
                                    </div>
                                </div>
                            </div>
                            <div class="p-2 border border-dashed">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="avatar-sm flex-shrink-0">
                                        <div class="avatar-title bg-light rounded">
                                            <img :src="pImg2" alt="" class="avatar-xs" />
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <b-link href="#!">
                                            <h6 class="fs-md mb-2">Unique Men's Wrist Watch</h6>
                                        </b-link>
                                        <ul class="hstack list-unstyled gap-2 mb-0 fs-sm fw-medium text-muted">
                                            <li>
                                                <i class="ph-star align-baseline"></i> 452
                                            </li>
                                            <li>
                                                <i class="ph-shopping-cart align-baseline"></i> 1420
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="text-end">
                                        <h5 class="fs-md text-primary mb-0">$84.99</h5>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <b-button variant="secondary" size="sm" class="btn-icon" @click="productModal = !productModal"><i class="ph-arrow-right"></i></b-button>
                                    </div>
                                </div>
                            </div>
                            <div class="p-2 border border-dashed">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="avatar-sm flex-shrink-0">
                                        <div class="avatar-title bg-light rounded">
                                            <img :src="pImg3" alt="" class="avatar-xs" />
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <b-link href="#!">
                                            <h6 class="fs-md mb-2">Twiala Floral Dress</h6>
                                        </b-link>
                                        <ul class="hstack list-unstyled gap-2 mb-0 fs-sm fw-medium text-muted">
                                            <li>
                                                <i class="ph-star align-baseline"></i> 562
                                            </li>
                                            <li>
                                                <i class="ph-shopping-cart align-baseline"></i> 1348
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="text-end">
                                        <h5 class="fs-md text-primary mb-0">$149.99</h5>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <b-button variant="secondary" size="sm" class="btn-icon" @click="productModal = !productModal"><i class="ph-arrow-right"></i></b-button>
                                    </div>
                                </div>
                            </div>
                            <div class="p-2 border border-dashed">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="avatar-sm flex-shrink-0">
                                        <div class="avatar-title bg-light rounded">
                                            <img :src="pImg4" alt="" class="avatar-xs" />
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <b-link href="#!">
                                            <h6 class="fs-md mb-2">Tokyo Fancy Bomber Jacket</h6>
                                        </b-link>
                                        <ul class="hstack list-unstyled gap-2 mb-0 fs-sm fw-medium text-muted">
                                            <li>
                                                <i class="ph-star align-baseline"></i> 644
                                            </li>
                                            <li>
                                                <i class="ph-shopping-cart align-baseline"></i> 1540
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="text-end">
                                        <h5 class="fs-md text-primary mb-0">$245.00</h5>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <b-button variant="secondary" size="sm" class="btn-icon" @click="productModal = !productModal"><i class="ph-arrow-right"></i></b-button>
                                    </div>
                                </div>
                            </div>
                            <div class="p-2 border border-dashed">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="avatar-sm flex-shrink-0">
                                        <div class="avatar-title bg-light rounded">
                                            <img :src="pImg5" alt="" class="avatar-xs" />
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <b-link href="#!">
                                            <h6 class="fs-md mb-2">Aster Dress 2XL / Royal Blue</h6>
                                        </b-link>
                                        <ul class="hstack list-unstyled gap-2 mb-0 fs-sm fw-medium text-muted">
                                            <li>
                                                <i class="ph-star align-baseline"></i> 841
                                            </li>
                                            <li>
                                                <i class="ph-shopping-cart align-baseline"></i> 985
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="text-end">
                                        <h5 class="fs-md text-primary mb-0">$74.63</h5>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <b-button variant="secondary" size="sm" class="btn-icon" @click="productModal = !productModal"><i class="ph-arrow-right"></i></b-button>
                                    </div>
                                </div>
                            </div>
                            <div class="p-2 border border-dashed">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="avatar-sm flex-shrink-0">
                                        <div class="avatar-title bg-light rounded">
                                            <img :src="pImg6" alt="" class="avatar-xs" />
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <b-link href="#!">
                                            <h6 class="fs-md mb-2">Craft Women Black Sling Bag</h6>
                                        </b-link>
                                        <ul class="hstack list-unstyled gap-2 mb-0 fs-sm fw-medium text-muted">
                                            <li>
                                                <i class="ph-star align-baseline"></i> 763
                                            </li>
                                            <li>
                                                <i class="ph-shopping-cart align-baseline"></i> 763
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="text-end">
                                        <h5 class="fs-md text-primary mb-0">$245.74</h5>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <b-button variant="secondary" size="sm" class="btn-icon" @click="productModal = !productModal"><i class="ph-arrow-right"></i></b-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SimpleBar>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>

    <b-row>
        <b-col xl="4">
            <b-card no-body>
                <b-card-header class="d-flex align-items-center">
                    <b-card-title title-tag="h5" class="mb-0 flex-grow-1">Orders Status</b-card-title>
                    <div class="dropdown card-header-dropdown">
                        <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="ph-dots-three-outline-vertical"></i>
                        </b-link>
                        <div class="dropdown-menu dropdown-menu-end">
                            <b-link class="dropdown-item" href="#">Current Years</b-link>
                            <b-link class="dropdown-item" href="#">Last Years</b-link>
                        </div>
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="mb-3 pb-1 text-center">
                        <h6 class="mb-0">01 Jan, 2022 - 01 Jan, 2023</h6>
                    </div>

                    <b-row class="align-items-center mb-3">
                        <b-col lg="4">
                            <div class="hstack gap-2">
                                <p class="mb-0 flex-grow-1">New</p>
                                <h6 class="mb-0">307</h6>
                            </div>
                        </b-col>
                        <b-col lg="8">
                            <div class="progress animated-progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" style="width: 50%"></div>
                            </div>
                        </b-col>
                    </b-row>

                    <b-row class="align-items-center mb-3">
                        <b-col lg="4">
                            <div class="hstack gap-2">
                                <p class="mb-0 flex-grow-1">Pending</p>
                                <h6 class="mb-0">177</h6>
                            </div>
                        </b-col>
                        <b-col lg="8">
                            <div class="progress animated-progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width: 37%"></div>
                            </div>
                        </b-col>
                    </b-row>

                    <b-row class="align-items-center mb-3">
                        <b-col lg="4">
                            <div class="hstack gap-2">
                                <p class="mb-0 flex-grow-1">Rejected</p>
                                <h6 class="mb-0">39</h6>
                            </div>
                        </b-col>
                        <b-col lg="8">
                            <div class="progress animated-progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style="width: 12%"></div>
                            </div>
                        </b-col>
                    </b-row>

                    <b-row class="align-items-center mb-3">
                        <b-col lg="4">
                            <div class="hstack gap-2">
                                <p class="mb-0 flex-grow-1">Returns</p>
                                <h6 class="mb-0">17</h6>
                            </div>
                        </b-col>
                        <b-col lg="8">
                            <div class="progress animated-progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger bg-opacity-75" style="width: 3%"></div>
                            </div>
                        </b-col>
                    </b-row>

                    <b-row class="align-items-center mb-3">
                        <b-col lg="4">
                            <div class="hstack gap-2">
                                <p class="mb-0 flex-grow-1">Dispatched</p>
                                <h6 class="mb-0">661</h6>
                            </div>
                        </b-col>
                        <b-col lg="8">
                            <div class="progress animated-progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" style="width: 57%"></div>
                            </div>
                        </b-col>
                    </b-row>

                    <b-row class="align-items-center mb-3">
                        <b-col lg="4">
                            <div class="hstack gap-2">
                                <p class="mb-0 flex-grow-1">Delivered</p>
                                <h6 class="mb-0">1320</h6>
                            </div>
                        </b-col>
                        <b-col lg="8">
                            <div class="progress animated-progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 86%"></div>
                            </div>
                        </b-col>
                    </b-row>

                    <b-row class="align-items-center">
                        <b-col lg="4">
                            <div class="hstack gap-2">
                                <p class="mb-0 flex-grow-1">Cancelled</p>
                                <h6 class="mb-0">74</h6>
                            </div>
                        </b-col>
                        <b-col lg="8">
                            <div class="progress animated-progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width: 13%"></div>
                            </div>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xl="4" lg="6">
            <b-card no-body class="card-height-100">
                <b-card-header class="d-flex">
                    <b-card-title title-tag="h5" class="flex-grow-1 mb-0">Recent Activity</b-card-title>
                    <div class="flex-shrink-0">
                        <b-link href="#!" class="btn btn-subtle-info btn-sm">View More <i class="ph-caret-right align-middle"></i></b-link>
                    </div>
                </b-card-header>
                <b-card-body class="px-0">
                    <SimpleBar class="px-3" style="max-height: 258px;">
                        <div class="acitivity-timeline acitivity-main">
                            <div class="acitivity-item d-flex">
                                <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                                    <div class="avatar-title bg-success-subtle text-success rounded-circle">
                                        <i class="ph-shopping-cart"></i>
                                    </div>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="mb-1 lh-base">Purchased by James Price</h6>
                                    <p class="text-muted mb-2">Product noise evolve smartwatch </p>
                                    <small class="mb-0 text-muted">05:57 AM Today</small>
                                </div>
                            </div>
                            <div class="acitivity-item py-3 d-flex">
                                <div class="flex-shrink-0">
                                    <img :src="avatar2" alt="" class="avatar-xs rounded-circle acitivity-avatar" />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="mb-1 lh-base">Natasha Carey have liked the products</h6>
                                    <p class="text-muted mb-2">Allow users to like products in your WooCommerce store.
                                    </p>
                                    <small class="mb-0 text-muted">25 Dec, 2022</small>
                                </div>
                            </div>
                            <div class="acitivity-item py-3 d-flex">
                                <div class="flex-shrink-0">
                                    <div class="avatar-xs acitivity-avatar">
                                        <div class="avatar-title rounded-circle bg-secondary-subtle text-secondary">
                                            <i class="mdi mdi-sale fs-14"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="mb-1 lh-base">Today offers by <router-link to="/ecommerce/seller-overview" class="link-secondary">Digitech
                                            Galaxy</router-link>
                                    </h6>
                                    <p class="text-muted mb-2">Offer is valid on orders of $230 Or above for selected
                                        products only.</p>
                                    <small class="mb-0 text-muted">12 Dec, 2022</small>
                                </div>
                            </div>
                            <div class="acitivity-item py-3 d-flex">
                                <div class="flex-shrink-0">
                                    <div class="avatar-xs acitivity-avatar">
                                        <div class="avatar-title rounded-circle bg-warning-subtle text-warning">
                                            <i class="ri-bookmark-fill"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="mb-1 lh-base">Favoried Product</h6>
                                    <p class="text-muted mb-2">Esther James have favorited product.</p>
                                    <small class="mb-0 text-muted">25 Nov, 2022</small>
                                </div>
                            </div>
                            <div class="acitivity-item py-3 d-flex">
                                <div class="flex-shrink-0">
                                    <div class="avatar-xs acitivity-avatar">
                                        <div class="avatar-title rounded-circle bg-secondary-subtle text-secondary">
                                            <i class="mdi mdi-sale fs-14"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="mb-1 lh-base">Flash sale starting <span class="text-primary">Tomorrow.</span></h6>
                                    <p class="text-muted mb-2">Flash sale by <b-link href="javascript:void(0);" class="link-secondary fw-medium">Zoetic Fashion</b-link>
                                    </p>
                                    <small class="mb-0 text-muted">22 Oct, 2022</small>
                                </div>
                            </div>
                            <div class="acitivity-item d-flex">
                                <div class="flex-shrink-0">
                                    <div class="avatar-xs acitivity-avatar">
                                        <div class="avatar-title rounded-circle bg-info-subtle text-info">
                                            <i class="ri-line-chart-line"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="mb-1 lh-base">Monthly sales report</h6>
                                    <p class="text-muted mb-2"><span class="text-danger">2 days left</span> notification
                                        to submit the monthly sales report. <b-link href="javascript:void(0);" class="link-warning text-decoration-underline">Reports Builder</b-link>
                                    </p>
                                    <small class="mb-0 text-muted">15 Oct, 2022</small>
                                </div>
                            </div>
                        </div>
                    </SimpleBar>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xl="4" lg="6">
            <b-card no-body class="card-height-100">
                <b-card-header class="d-flex align-items-center">
                    <b-card-title title-tag="h5" class="flex-grow-1 mb-0">Insight</b-card-title>
                    <div class="flex-shrink-0">
                        <div class="dropdown card-header-dropdown">
                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="text-muted">This Month<i class="mdi mdi-chevron-down ms-1"></i></span>
                            </b-link>
                            <div class="dropdown-menu dropdown-menu-end">
                                <b-link class="dropdown-item" href="#">This Month</b-link>
                                <b-link class="dropdown-item" href="#">Last Month</b-link>
                            </div>
                        </div>
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="vstack gap-2">
                        <div class="border py-2 px-3 w-100 rounded d-flex align-items-center gap-2">
                            <i class="bi bi-check2-square text-primary"></i>
                            <h6 class="mb-0">The recognition that one has a mental illness</h6>
                        </div>
                        <div class="border py-2 px-3 w-100 rounded d-flex align-items-center gap-2">
                            <i class="bi bi-check2-square text-primary"></i>
                            <h6 class="mb-0">Review market characteristics and trends</h6>
                        </div>
                        <div class="border py-2 px-3 w-100 rounded d-flex align-items-center gap-2">
                            <i class="bi bi-check2-square text-primary"></i>
                            <h6 class="mb-0">Digital analytics data including site analytics</h6>
                        </div>
                        <div class="border py-2 px-3 w-100 rounded d-flex align-items-center gap-2">
                            <i class="bi bi-check2-square text-primary"></i>
                            <h6 class="mb-0">Check uikings theme and give customer support</h6>
                        </div>
                        <div class="border py-2 px-3 w-100 rounded d-flex align-items-center gap-2">
                            <i class="bi bi-check2-square text-primary"></i>
                            <h6 class="mb-0">Success stories and case studies</h6>
                        </div>
                        <div class="border py-2 px-3 w-100 rounded d-flex align-items-center gap-2">
                            <i class="bi bi-check2-square text-primary"></i>
                            <h6 class="mb-0">Preferences & purchase activity</h6>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>

    <b-modal v-model="addAmount" id="addAmount" hide-footer title="Add Amount" ok-variant="primary">
        <b-form>
            <b-row class="g-3">
                <b-col lg="12">
                    <div>
                        <label for="AmountInput" class="form-label">Amount</label>
                        <b-form-input type="number" id="AmountInput" placeholder="$000.00"></b-form-input>
                    </div>
                </b-col>
                <b-col lg="12">
                    <label class="form-label">Select Method</label>
                    <b-row class="g-3">
                        <b-col lg="4">
                            <label class="border rounded w-100 form-label p-2">
                                <b-form-radio name="exampleRadios" value="" checked>Visa</b-form-radio>
                            </label>
                        </b-col>
                        <b-col lg="4">
                            <label class="border rounded w-100 form-label p-2">
                                <b-form-radio name="exampleRadios" value="">Mastercard</b-form-radio>
                            </label>
                        </b-col>
                        <b-col lg="4">
                            <label class="border rounded w-100 form-label p-2">
                                <b-form-radio name="exampleRadios" value="">Credit Card</b-form-radio>
                            </label>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col lg="12">
                    <div>
                        <label for="cardNumber" class="form-label">Card Number</label>
                        <b-form-input type="number" id="cardNumber" placeholder="xxxx xxxx xxxx xxxx"></b-form-input>
                    </div>
                </b-col>
                <b-col lg="8">
                    <div>
                        <label for="month" class="form-label">Expiry Date</label>
                        <b-row class="g-3">
                            <b-col lg="6">
                                <b-form-input type="number" id="month" placeholder="MM"></b-form-input>
                            </b-col>
                            <b-col lg="6">
                                <b-form-input type="number" id="years" placeholder="YYYY"></b-form-input>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
                <b-col lg="4">
                    <div>
                        <label for="cvv/cvc" class="form-label">CVV/CVC</label>
                        <b-form-input type="number" id="cvv/cvc" placeholder="***"></b-form-input>
                    </div>
                </b-col>
                <b-col lg="12">
                    <div>
                        <label for="cardHoldersName" class="form-label">Cardholders Name</label>
                        <b-form-input type="text" id="cardHoldersName" placeholder="Enter name"></b-form-input>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col lg="12" class="text-end mt-3">
                    <b-button type="button" variant="ghost-danger" class="me-1" @click="addAmount = false"><i class="ph-x align-middle"></i>
                        Close</b-button>
                    <b-button type="button" variant="primary">Add Amount</b-button>
                </b-col>
            </b-row>
        </b-form>

    </b-modal>

    <!-- Product Modal -->
    <b-modal id="productModal" size="lg" v-model="productModal" body-class="p-0 ribbon-box" content-class="border-0 overflow-hidden" hide-header hide-footer>
        <div class="ribbon ribbon-danger ribbon-shape trending-ribbon">
            <span class="trending-ribbon-text">Trending</span> <i class="ri-flashlight-fill text-white align-bottom float-end ms-1"></i>
        </div>
        <b-row class="g-0">
            <b-col lg="5">
                <div class="bg-primary-subtle p-5 h-100">
                    <div class="p-lg-4">
                        <img :src="pImg3" alt="" class="img-fluid" />
                    </div>
                </div>
            </b-col>
            <b-col lg="7">
                <div class="p-4 h-100">
                    <b-button type="button" variant="none" class="btn-close float-end" @click="productModal = !productModal" aria-label="Close"></b-button>
                    <b-link href="#!">
                        <h5 class="mb-1">Craft Women Black Sling Bag</h5>
                    </b-link>
                    <p class="text-muted">Fashion & Clothing</p>

                    <h5 class="mb-3">$199.99 <del class="text-muted fs-sm fw-normal">$299.99</del></h5>

                    <ul class="list-unstyled hstack gap-2 mb-4">
                        <li>
                            Available Colors
                        </li>
                        <li>
                            <div class="avatar-xxs">
                                <div class="avatar-title rounded bg-primary-subtle"></div>
                            </div>
                        </li>
                        <li>
                            <div class="avatar-xxs">
                                <div class="avatar-title rounded bg-success-subtle"></div>
                            </div>
                        </li>
                        <li>
                            <div class="avatar-xxs">
                                <div class="avatar-title rounded bg-danger-subtle"></div>
                            </div>
                        </li>
                        <li>
                            <div class="avatar-xxs">
                                <div class="avatar-title rounded bg-dark-subtle"></div>
                            </div>
                        </li>
                    </ul>

                    <ul class="list-unstyled vstack gap-2 mb-4">
                        <li class=""><i class="bi bi-check2-circle me-2 align-middle text-success"></i>In stock
                        </li>
                        <li class=""><i class="bi bi-check2-circle me-2 align-middle text-success"></i>Free
                            delivery
                            available</li>
                        <li class=""><i class="bi bi-check2-circle me-2 align-middle text-success"></i>Sales 10%
                            Off Use
                            Code: <b>STEEX10</b></li>
                    </ul>

                    <div class="hstack gap-2 justify-content-end">
                        <b-button variant="primary"><i class="bi bi-cart align-baseline me-1"></i> Add To
                            Cart</b-button>
                        <b-button variant="subtle-secondary">View Details <i class="bi bi-arrow-right align-baseline ms-1"></i></b-button>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-modal>
    <!-- End Product Modal -->

</Layout>
</template>
