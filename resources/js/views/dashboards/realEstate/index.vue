<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";
import { CountTo } from "vue3-count-to";
import { SimpleBar } from "simplebar-vue3";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import { propertySaleChart, propertyRentChart, visitorsChart, residencyPropertyChart, totalRevenueChart, totalIncomeChart, revenuePropertySaleChart, revenuePropertyRentChart, projectOnHoldChart, ongoingPropertiesChart, pendingPropertiesChart, completedProjectChart, propertiesTypeChart } from "./chartsData";

// property
import rImg1 from "../../../../images/real-estate/img-01.jpg";
import rImg2 from "../../../../images/real-estate/img-02.jpg";
import rImg3 from "../../../../images/real-estate/img-03.jpg";
import rImg4 from "../../../../images/real-estate/img-04.jpg";
import rImg5 from "../../../../images/real-estate/img-05.jpg";
import rImg6 from "../../../../images/real-estate/img-06.jpg";
import rImg7 from "../../../../images/real-estate/img-07.jpg";
import rImg8 from "../../../../images/real-estate/img-08.jpg";

// avatar imgs
import avatar1 from "../../../../images/users/48/avatar-1.jpg";
import avatar2 from "../../../../images/users/48/avatar-2.jpg";
import avatar3 from "../../../../images/users/48/avatar-3.jpg";
import avatar4 from "../../../../images/users/48/avatar-4.jpg";
import avatar5 from "../../../../images/users/48/avatar-5.jpg";
import avatar6 from "../../../../images/users/48/avatar-6.jpg";
import avatar8 from "../../../../images/users/48/avatar-8.jpg";

export default {
    data() {
        return {
            title: "Real Estate",
            items: [
                {
                    text: "Dashboards",
                    href: "/",
                },
                {
                    text: "Real Estate",
                    active: true,
                },
            ],
            rImg1, rImg2, rImg3, rImg4, rImg5, rImg6, rImg7, rImg8, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar8, 
            propertySaleChart: propertySaleChart,
            propertyRentChart: propertyRentChart,
            visitorsChart: visitorsChart,
            residencyPropertyChart: residencyPropertyChart,
            totalRevenueChart: totalRevenueChart,
            totalIncomeChart: totalIncomeChart,
            revenuePropertySaleChart: revenuePropertySaleChart,
            revenuePropertyRentChart: revenuePropertyRentChart,
            projectOnHoldChart: projectOnHoldChart,
            ongoingPropertiesChart: ongoingPropertiesChart,
            pendingPropertiesChart: pendingPropertiesChart,
            completedProjectChart: completedProjectChart,
            propertiesTypeChart: propertiesTypeChart,

            date: "01 Feb 2023 to 28 Feb 2023",
      config: {
                mode: "range",
                dateFormat: "d M, Y",
                defaultDate: "01 Feb 2023 to 28 Feb 2023"
            }

        };
    },
    components: {
        Layout,
        PageHeader,
        CountTo,
        SimpleBar,
        flatPickr
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <b-row>
            <b-col xxl="3" md="6">
                <b-card no-body>
                    <b-card-body>
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <div class="d-flex flex-column h-100">
                                    <p class="fs-md text-muted mb-4">Properties for sale</p>
                                    <h3 class="mb-0 mt-auto">
                                        <count-to :startVal="0" :duration="5000" :endVal="3652"></count-to>
                                        <small class="text-success fs-xs mb-0 ms-2"><i class="bi bi-arrow-up me-1"></i>
                                            06.19%</small>
                                    </h3>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <apexchart class="apex-charts" height="110" width="110" dir="ltr"
                                    :series="propertySaleChart.series" :options="propertySaleChart.chartOptions">
                                </apexchart>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="3" md="6">
                <b-card no-body>
                    <b-card-body>
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <div class="d-flex flex-column h-100">
                                    <p class="fs-md text-muted mb-4">Properties for rent</p>
                                    <h3 class="mb-0 mt-auto">
                                        <count-to :startVal="0" :duration="5000" :endVal="1524"></count-to>
                                        <small class="text-success fs-xs mb-0 ms-2"><i class="bi bi-arrow-up me-1"></i>
                                            02.33%</small>
                                    </h3>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <apexchart class="apex-charts" height="110" width="110" dir="ltr"
                                    :series="propertyRentChart.series" :options="propertyRentChart.chartOptions">
                                </apexchart>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="3" md="6">
                <b-card no-body>
                    <b-card-body>
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <div class="d-flex flex-column h-100">
                                    <p class="fs-md text-muted mb-4">Visitors</p>
                                    <h3 class="mb-0 mt-auto">
                                        <count-to :startVal="0" :duration="5000" :endVal="149.36" decimals="2"
                                            suffix="k"></count-to>
                                        <small class="text-success fs-xs mb-0 ms-2"><i class="bi bi-arrow-up me-1"></i>
                                            12.33%</small>
                                    </h3>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <apexchart class="apex-charts" height="110" width="110" dir="ltr"
                                    :series="visitorsChart.series" :options="visitorsChart.chartOptions"></apexchart>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="3" md="6">
                <b-card no-body>
                    <b-card-body>
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <div class="d-flex flex-column h-100">
                                    <p class="fs-md text-muted mb-4">Residency Property</p>
                                    <h3 class="mb-0 mt-auto">
                                        <count-to :startVal="0" :duration="5000" :endVal="2376"></count-to>
                                        <small class="text-danger fs-xs mb-0 ms-2"><i class="bi bi-arrow-down me-1"></i>
                                            09.57%</small>
                                    </h3>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <apexchart class="apex-charts" height="110" width="110" dir="ltr"
                                    :series="residencyPropertyChart.series" :options="residencyPropertyChart.chartOptions">
                                </apexchart>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xxl="4" class="order-last order-xxl-first">
                <b-card no-body>
                    <b-card-header class="d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Properties Type</b-card-title>
                        <div class="dropdown card-header-dropdown float-end mb-3">
                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i class="bi bi-three-dots-vertical"></i>
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
                        <apexchart class="apex-charts" height="340" dir="ltr" :series="propertiesTypeChart.series"
                            :options="propertiesTypeChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="8">
                <b-card no-body>
                    <b-card-header class="d-flex align-items-center">
                        <b-card-title title-tag="h5" class="flex-grow-1 mb-0">Revenue Overview</b-card-title>
                        <div class="flex-shrink-0">
                            <flat-pickr v-model="date" :config="config" class="form-control form-control-sm" id="exampleInputPassword1" placeholder="Select date"></flat-pickr>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <b-row class="align-items-center">
                            <b-col lg="3">
                                <div class="nav flex-column nav-light nav-pills gap-3" id="v-pills-tab" role="tablist"
                                    aria-orientation="vertical">
                                    <b-link class="nav-link d-flex p-2 gap-3 active" id="revenue-tab" data-bs-toggle="pill"
                                        href="#revenue" role="tab" aria-controls="revenue" aria-selected="true">
                                        <div class="avatar-sm flex-shrink-0">
                                            <div class="avatar-title rounded bg-warning-subtle text-warning fs-2xl">
                                                <i class="bi bi-coin"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <h5 class="text-reset">
                                                <count-to :startVal="0" :duration="5000" :endVal="2478" prefix="$"
                                                    suffix="M"></count-to>
                                            </h5>
                                            <p class="mb-0">Total Revenue</p>
                                        </div>
                                    </b-link>
                                    <b-link class="nav-link d-flex p-2 gap-3" id="income-tab" data-bs-toggle="pill"
                                        href="#income" role="tab" aria-controls="income" aria-selected="false">
                                        <div class="avatar-sm flex-shrink-0">
                                            <div class="avatar-title rounded bg-success-subtle text-success fs-2xl">
                                                <i class="bi bi-coin"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <h5 class="text-reset">
                                                <count-to :startVal="0" :duration="5000" :endVal="14587.37" decimals="2"
                                                    prefix="$"></count-to>
                                            </h5>
                                            <p class="mb-0">Total Income</p>
                                        </div>
                                    </b-link>
                                    <b-link class="nav-link d-flex p-2 gap-3" id="property-sale-tab" data-bs-toggle="pill"
                                        href="#property-sale" role="tab" aria-controls="property-sale"
                                        aria-selected="false">
                                        <div class="avatar-sm flex-shrink-0">
                                            <div class="avatar-title rounded bg-danger-subtle text-danger fs-2xl">
                                                <i class="bi bi-coin"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <h5 class="text-reset">
                                                <count-to :startVal="0" :duration="5000" :endVal="2365"></count-to>
                                            </h5>
                                            <p class="mb-0">Property Sell</p>
                                        </div>
                                    </b-link>
                                    <b-link class="nav-link d-flex p-2 gap-3" id="_-tab" data-bs-toggle="pill"
                                        href="#propetry-rent" role="tab" aria-controls="propetry-rent"
                                        aria-selected="false">
                                        <div class="avatar-sm flex-shrink-0">
                                            <div class="avatar-title rounded bg-primary-subtle text-primary fs-2xl">
                                                <i class="bi bi-coin"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <h5 class="text-reset">
                                                <count-to :startVal="0" :duration="5000" :endVal="3456"></count-to>
                                            </h5>
                                            <p class="mb-0">Property Rent</p>
                                        </div>
                                    </b-link>
                                </div>
                            </b-col>
                            <b-col lg="9">
                                <div class="tab-content text-muted">
                                    <div class="tab-pane active" id="revenue" role="tabpanel">
                                        <apexchart class="apex-charts" height="328" dir="ltr"
                                            :series="totalRevenueChart.series" :options="totalRevenueChart.chartOptions">
                                        </apexchart>
                                    </div>
                                    <div class="tab-pane" id="income" role="tabpanel">
                                        <apexchart class="apex-charts" height="328" dir="ltr"
                                            :series="totalIncomeChart.series" :options="totalIncomeChart.chartOptions">
                                        </apexchart>
                                    </div>
                                    <div class="tab-pane" id="property-sale" role="tabpanel">
                                        <apexchart class="apex-charts" height="328" dir="ltr"
                                            :series="revenuePropertySaleChart.series"
                                            :options="revenuePropertySaleChart.chartOptions"></apexchart>
                                    </div>
                                    <div class="tab-pane" id="propetry-rent" role="tabpanel">
                                        <apexchart class="apex-charts" height="328" dir="ltr"
                                            :series="revenuePropertyRentChart.series"
                                            :options="revenuePropertyRentChart.chartOptions"></apexchart>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xxl="9">
                <b-card no-body id="propertyList">
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Recently Added Property</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="dropdown card-header-dropdown sortble-dropdown">
                                <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <span class="fw-semibold text-uppercase fs-12">Sort by:
                                    </span><span class="text-muted dropdown-title">Property Name</span> <i
                                        class="mdi mdi-chevron-down ms-1"></i>
                                </b-link>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <b-link href="#" class="dropdown-item sort" data-sort="propert_name">Property Name</b-link>
                                    <b-link href="#" class="dropdown-item sort" data-sort="price">Price</b-link>
                                    <b-link href="#" class="dropdown-item sort" data-sort="agent_name">Agent Name</b-link>
                                    <b-link href="#" class="dropdown-item sort" data-sort="status">Status</b-link>
                                </div>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body class="mb-n3">
                        <div class="table-responsive">
                            <table class="table table-borderless table-centered align-middle table-nowrap mb-0">
                                <thead class="text-muted table-light">
                                    <tr>
                                        <th scope="col" class="sort cursor-pointer" data-sort="propert_id">#</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="propert_type">Property Type
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="propert_name">Property Name
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="address">Address</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="agent_name">Agent Name</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="price">Price</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="status">Status</th>
                                        <th scope="col" class="sort cursor-pointer">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="list">
                                    <tr>
                                        <td class="propert_id">
                                            <router-link to="/ecommerce/order-overview"
                                                class="fw-medium link-primary">#TBS01
                                            </router-link>
                                        </td>
                                        <td class="propert_type">
                                            Villa
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2 position-relative">
                                                <img :src="rImg1" alt="" height="35"
                                                    class="rounded" />
                                                <router-link to="/real-estate/property-overview"
                                                    class="propert_name text-reset stretched-link">The Country House
                                                </router-link>
                                            </div>
                                        </td>
                                        <td class="address">
                                            United Kingdom
                                        </td>
                                        <td class="agent_name">Josefa Weissnat</td>
                                        <td class="price">
                                            <span class="fw-medium">$2451.39</span>
                                        </td>
                                        <td>
                                            <span class="badge bg-danger-subtle text-danger status">Sale</span>
                                        </td>
                                        <td>
                                            <ul class="d-flex gap-2 list-unstyled mb-0">
                                                <li>
                                                    <router-link to="/real-estate/property-overview"
                                                        class="btn btn-subtle-primary btn-icon btn-sm "><i class="ph-eye"></i>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <b-link href="#!"
                                                        class="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn"><i
                                                            class="ph-pencil"></i></b-link>
                                                </li>
                                                <li>
                                                    <b-link href="#!"
                                                        class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"><i
                                                            class="ph-trash"></i></b-link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="propert_id">
                                            <router-link to="/ecommerce/order-overview" class="fw-medium link-primary">
                                                #TBS02
                                            </router-link>
                                        </td>
                                        <td class="propert_type">
                                            Residency
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2 position-relative">
                                                <img :src="rImg2" alt="" height="35"
                                                    class="rounded" />
                                                <router-link to="/real-estate/property-overview" class="propert_name text-reset stretched-link">
                                                    Classic White House
                                                </router-link>
                                            </div>
                                        </td>
                                        <td class="address">
                                            Germany
                                        </td>
                                        <td class="agent_name">Jerry Emard</td>
                                        <td class="price">
                                            <span class="fw-medium">$2451.20</span>
                                        </td>
                                        <td>
                                            <span class="badge bg-info-subtle text-info status">Rent</span>
                                        </td>
                                        <td>
                                            <ul class="d-flex gap-2 list-unstyled mb-0">
                                                <li>
                                                    <router-link to="/real-estate/property-overview" class="btn btn-subtle-primary btn-icon btn-sm ">
                                                        <i class="ph-eye"></i>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <b-link href="#!"
                                                        class="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn"><i
                                                            class="ph-pencil"></i></b-link>
                                                </li>
                                                <li>
                                                    <b-link href="#!"
                                                        class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"><i
                                                            class="ph-trash"></i></b-link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="propert_id">
                                            <router-link to="/ecommerce/order-overview" class="fw-medium link-primary">
                                                #TBS03
                                            </router-link>
                                        </td>
                                        <td class="propert_type">
                                            Apartment
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2 position-relative">
                                                <img :src="rImg3" alt="" height="35"
                                                    class="rounded" />
                                                <router-link to="/real-estate/property-overview" class="propert_name text-reset stretched-link">
                                                    Vintage Apartment
                                                </router-link>
                                            </div>
                                        </td>
                                        <td class="address">
                                            Brazil
                                        </td>
                                        <td class="agent_name">Domenic Dach</td>
                                        <td class="price">
                                            <span class="fw-medium">$1249.99</span>
                                        </td>
                                        <td>
                                            <span class="badge bg-info-subtle text-info status">Rent</span>
                                        </td>
                                        <td>
                                            <ul class="d-flex gap-2 list-unstyled mb-0">
                                                <li>
                                                    <router-link to="/real-estate/property-overview" class="btn btn-subtle-primary btn-icon btn-sm ">
                                                        <i class="ph-eye"></i>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <b-link href="#!" class="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn">
                                                        <i class="ph-pencil"></i>
                                                    </b-link>
                                                </li>
                                                <li>
                                                    <b-link href="#!"
                                                        class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"><i
                                                            class="ph-trash"></i></b-link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="propert_id">
                                            <router-link to="/ecommerce/order-overview" class="fw-medium link-primary">
                                                #TBS04
                                            </router-link>
                                        </td>
                                        <td class="propert_type">
                                            Villa
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2 position-relative">
                                                <img :src="rImg4" alt="" height="35"
                                                    class="rounded" />
                                                <router-link to="/real-estate/property-overview" class="propert_name text-reset stretched-link">
                                                    Whitespace Vintage Villa
                                                </router-link>
                                            </div>
                                        </td>
                                        <td class="address">
                                            Spain
                                        </td>
                                        <td class="agent_name">Axel Kozey</td>
                                        <td class="price">
                                            <span class="fw-medium">$3495.76</span>
                                        </td>
                                        <td>
                                            <span class="badge bg-danger-subtle text-danger status">Sale</span>
                                        </td>
                                        <td>
                                            <ul class="d-flex gap-2 list-unstyled mb-0">
                                                <li>
                                                    <router-link to="/real-estate/property-overview" class="btn btn-subtle-primary btn-icon btn-sm ">
                                                        <i class="ph-eye"></i>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <b-link href="#!"
                                                        class="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn"><i
                                                            class="ph-pencil"></i></b-link>
                                                </li>
                                                <li>
                                                    <b-link href="#!"
                                                        class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"><i
                                                            class="ph-trash"></i></b-link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="propert_id">
                                            <router-link to="/ecommerce/order-overview"
                                                class="fw-medium link-primary">#TBS05
                                            </router-link>
                                        </td>
                                        <td class="propert_type">
                                            Residency
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2 position-relative">
                                                <img :src="rImg5" alt="" height="35"
                                                    class="rounded" />
                                                <router-link to="/real-estate/property-overview" class="propert_name text-reset stretched-link">
                                                    Duplex Square Valley
                                                </router-link>
                                            </div>
                                        </td>
                                        <td class="address">
                                            Mexico
                                        </td>
                                        <td class="agent_name">Buck Roberts</td>
                                        <td class="price">
                                            <span class="fw-medium">$2579.31</span>
                                        </td>
                                        <td>
                                            <span class="badge bg-info-subtle text-info status">Rent</span>
                                        </td>
                                        <td>
                                            <ul class="d-flex gap-2 list-unstyled mb-0">
                                                <li>
                                                    <router-link to="/real-estate/property-overview" class="btn btn-subtle-primary btn-icon btn-sm ">
                                                        <i class="ph-eye"></i>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <b-link href="#!"
                                                        class="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn"><i
                                                            class="ph-pencil"></i></b-link>
                                                </li>
                                                <li>
                                                    <b-link href="#!"
                                                        class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"><i
                                                            class="ph-trash"></i></b-link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="propert_id">
                                            <router-link to="/ecommerce/order-overview"
                                                class="fw-medium link-primary">#TBS06
                                            </router-link>
                                        </td>
                                        <td class="propert_type">
                                            Residency
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2 position-relative">
                                                <img :src="rImg6" alt="" height="35"
                                                    class="rounded" />
                                                <router-link to="/real-estate/property-overview" class="propert_name text-reset stretched-link">
                                                    Small Grey Brick Home In A Subdivision
                                                </router-link>
                                            </div>
                                        </td>
                                        <td class="address">
                                            USA
                                        </td>
                                        <td class="agent_name">Josefa Weissnat</td>
                                        <td class="price">
                                            <span class="fw-medium">$1478.00</span>
                                        </td>
                                        <td>
                                            <span class="badge bg-danger-subtle text-danger status">Sale</span>
                                        </td>
                                        <td>
                                            <ul class="d-flex gap-2 list-unstyled mb-0">
                                                <li>
                                                    <router-link to="/real-estate/property-overview" class="btn btn-subtle-primary btn-icon btn-sm">
                                                        <i class="ph-eye"></i>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <b-link href="#!"
                                                        class="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn"><i
                                                            class="ph-pencil"></i></b-link>
                                                </li>
                                                <li>
                                                    <b-link href="#!"
                                                        class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"><i
                                                            class="ph-trash"></i></b-link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody><!-- end tbody -->
                            </table>
                            <div class="noresult" style="display: none">
                                <div class="text-center">
                                    <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop"
                                        colors="primary:#405189,secondary:#0ab39c"
                                        style="width:75px;height:75px"></lord-icon>
                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                    <p class="text-muted mb-0">We've searched more than 150+ transactions We did not find
                                        any transactions for you search.</p>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="3" lg="6">
                <b-card no-body>
                    <b-card-header class="d-flex align-items-center">
                        <b-card-title class="mb-0 flex-grow-1">Customer Feedback</b-card-title>
                        <div class="flex-shrink-0">
                            <b-link href="#!" class="text-muted">View All <i class="bi bi-chevron-right align-baseline"></i></b-link>
                        </div>
                    </b-card-header>
                    <b-card-body class="px-0">
                        <SimpleBar data-simplebar style="max-height: 400px;">
                            <b-card no-body class="border-bottom rounded-0 border-0 shadow-none mb-0">
                                <b-card-body class="pt-0">
                                    <div class="d-flex gap-2">
                                        <div class="flex-shrink-0">
                                            <img :src="avatar2" alt=""
                                                class="avatar-sm rounded" />
                                        </div>
                                        <div class="flex-grow-1">
                                            <span class="text-muted clearfix float-end">04:47 PM</span>
                                            <h6 class="fs-md mb-1"><b-link href="#!" class="text-reset">Josefa Weissnat</b-link></h6>
                                            <div class="text-warning mb-2 fs-xs">
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                            </div>
                                            <p class="text-muted mb-0">" Themebrand used AnyDesk to fix the bug in Flask and
                                                django version. I highly recommend this product! "</p>
                                        </div>
                                    </div>
                                </b-card-body>
                            </b-card>
                            <b-card no-body class="border-bottom rounded-0 border-0 shadow-none mb-0">
                                <b-card-body>
                                    <div class="d-flex gap-2">
                                        <div class="flex-shrink-0">
                                            <img :src="avatar3" alt=""
                                                class="avatar-sm rounded" />
                                        </div>
                                        <div class="flex-grow-1">
                                            <span class="text-muted clearfix float-end">11:24 AM</span>
                                            <h6 class="fs-md mb-1"><b-link href="#!" class="text-reset">Ophelia Steuber</b-link></h6>
                                            <div class="text-warning mb-2 fs-xs">
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                            </div>
                                            <p class="text-muted mb-0">" Thank you for this awesome admin panel. I'm very
                                                happy with it, it's a pleasure to work with it! "</p>
                                        </div>
                                    </div>
                                </b-card-body>
                            </b-card>
                            <b-card no-body class="border-bottom rounded-0 border-0 shadow-none mb-0">
                                <b-card-body>
                                    <div class="d-flex gap-2">
                                        <div class="flex-shrink-0">
                                            <img :src="avatar4" alt=""
                                                class="avatar-sm rounded" />
                                        </div>
                                        <div class="flex-grow-1">
                                            <span class="text-muted clearfix float-end">03:19 PM</span>
                                            <h6 class="fs-md mb-1"><b-link href="#!" class="text-reset">Dianna Bogan</b-link></h6>
                                            <div class="text-warning mb-2 fs-xs">
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                            </div>
                                            <p class="text-muted mb-0">" High theme quality. Very good support, they spent
                                                almost an hour remotely to fix a problem. I hope this theme will have a long
                                                term support. "</p>
                                        </div>
                                    </div>
                                </b-card-body>
                            </b-card>
                            <b-card no-body class="border-bottom rounded-0 border-0 shadow-none mb-0">
                                <b-card-body>
                                    <div class="d-flex gap-2">
                                        <div class="flex-shrink-0">
                                            <img :src="avatar5" alt=""
                                                class="avatar-sm rounded" />
                                        </div>
                                        <div class="flex-grow-1">
                                            <span class="text-muted clearfix float-end">06:39 AM</span>
                                            <h6 class="fs-md mb-1"><b-link href="#!" class="text-reset">Jerry Emard</b-link></h6>
                                            <div class="text-warning mb-2 fs-xs">
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                            </div>
                                            <p class="text-muted mb-0">" There is as lot packed in this template. The
                                                savings in time and energy is so worth it. "</p>
                                        </div>
                                    </div>
                                </b-card-body>
                            </b-card>
                            <b-card no-body class="border-bottom rounded-0 border-0 shadow-none mb-0">
                                <b-card-body>
                                    <div class="d-flex gap-2">
                                        <div class="flex-shrink-0">
                                            <img :src="avatar6" alt=""
                                                class="avatar-sm rounded" />
                                        </div>
                                        <div class="flex-grow-1">
                                            <span class="text-muted clearfix float-end">09:18 AM</span>
                                            <h6 class="fs-md mb-1"><b-link href="#!" class="text-reset">Axel Kozey</b-link></h6>
                                            <div class="text-warning mb-2 fs-xs">
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                            </div>
                                            <p class="text-muted mb-0">" Works like a component library, a crazy amount of
                                                design elements already built and given. "</p>
                                        </div>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </SimpleBar>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="4" lg="6">
                <b-card no-body>
                    <b-card-header class="d-flex align-items-center">
                        <b-card-title class="mb-0 flex-grow-1">Popular Property</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="nav nav-pills gap-1" id="popularProperty" role="tablist"
                                aria-orientation="vertical">
                                <b-button variant="ghost-danger" size="sm" class="active" id="saleProperty" data-bs-toggle="pill"
                                    data-bs-target="#salePropertyTabs" type="button" role="tab"
                                    aria-controls="salePropertyTabs" aria-selected="true">Sale</b-button>
                                <b-button variant="ghost-info" size="sm" id="rentProperty" data-bs-toggle="pill"
                                    data-bs-target="#rentPropertyTabs" type="button" role="tab"
                                    aria-controls="rentPropertyTabs" aria-selected="false" tabindex="-1">Rent</b-button>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="tab-content mb-2" id="popularPropertyContent">
                            <div class="tab-pane show active" id="salePropertyTabs" role="tabpanel"
                                aria-labelledby="saleProperty" tabindex="0">
                                <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                    <div class="flex-shrink-0">
                                        <img :src="rImg8" alt="" height="44"
                                            class="object-fit-cover rounded" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <router-link to="/real-estate/property-overview" class="stretched-link">
                                            <h6>Crystal House</h6>
                                        </router-link>
                                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-house align-baseline text-primary me-1"></i> 2 Bedroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="ph ph-bathtub align-middle text-primary me-1"></i> 1 Bathroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-columns align-baseline text-primary me-1"></i> 1039
                                                    sqft</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span class="badge bg-warning-subtle text-warning"><i
                                                class="bi bi-star-fill text-warning"></i> 4.5</span>
                                    </div>
                                </div>
                                <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                    <div class="flex-shrink-0">
                                        <img :src="rImg7" alt="" height="44"
                                            class="object-fit-cover rounded" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <router-link to="/real-estate/property-overview" class="stretched-link">
                                            <h6>Whitespace Vintage Villa</h6>
                                        </router-link>
                                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-house align-baseline text-primary me-1"></i> 4 Bedroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="ph ph-bathtub align-middle text-primary me-1"></i> 2 Bathroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-columns align-baseline text-primary me-1"></i> 1145
                                                    sqft</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span class="badge bg-warning-subtle text-warning"><i
                                                class="bi bi-star-fill text-warning"></i> 4.9</span>
                                    </div>
                                </div>
                                <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                    <div class="flex-shrink-0">
                                        <img :src="rImg5" alt="" height="44"
                                            class="object-fit-cover rounded" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <router-link to="/real-estate/property-overview" class="stretched-link">
                                            <h6>Northlight Residency</h6>
                                        </router-link>
                                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-house align-baseline text-primary me-1"></i> 3 Bedroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="ph ph-bathtub align-middle text-primary me-1"></i> 3 Bathroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-columns align-baseline text-primary me-1"></i> 1859
                                                    sqft</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span class="badge bg-warning-subtle text-warning"><i
                                                class="bi bi-star-fill text-warning"></i> 4.7</span>
                                    </div>
                                </div>
                                <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                    <div class="flex-shrink-0">
                                        <img :src="rImg8" alt="" height="44"
                                            class="object-fit-cover rounded" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <router-link to="/real-estate/property-overview" class="stretched-link">
                                            <h6>Park Side Colonial</h6>
                                        </router-link>
                                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-house align-baseline text-primary me-1"></i> 5 Bedroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="ph ph-bathtub align-middle text-primary me-1"></i> 3 Bathroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-columns align-baseline text-primary me-1"></i> 5643
                                                    sqft</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span class="badge bg-warning-subtle text-warning"><i
                                                class="bi bi-star-fill text-warning"></i> 4.7</span>
                                    </div>
                                </div>
                                <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                    <div class="flex-shrink-0">
                                        <img :src="rImg4" alt="" height="44"
                                            class="object-fit-cover rounded" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <router-link to="/real-estate/property-overview" class="stretched-link">
                                            <h6>Marina Hill Vintage</h6>
                                        </router-link>
                                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-house align-baseline text-primary me-1"></i> 4 Bedroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="ph ph-bathtub align-middle text-primary me-1"></i> 3 Bathroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-columns align-baseline text-primary me-1"></i> 1963
                                                    sqft</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span class="badge bg-warning-subtle text-warning"><i
                                                class="bi bi-star-fill text-warning"></i> 4.8</span>
                                    </div>
                                </div>
                                <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                    <div class="flex-shrink-0">
                                        <img :src="rImg7" alt="" height="44"
                                            class="object-fit-cover rounded" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <router-link to="/real-estate/property-overview" class="stretched-link">
                                            <h6>Grand Cub Hotel</h6>
                                        </router-link>
                                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-house align-baseline text-primary me-1"></i> 3 Bedroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="ph ph-bathtub align-middle text-primary me-1"></i> 1 Bathroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-columns align-baseline text-primary me-1"></i> 1543
                                                    sqft</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span class="badge bg-warning-subtle text-warning"><i
                                                class="bi bi-star-fill text-warning"></i> 4.4</span>
                                    </div>
                                </div>
                                <div class="d-flex gap-2 align-items-center position-relative">
                                    <div class="flex-shrink-0">
                                        <img :src="rImg3" alt="" height="44"
                                            class="object-fit-cover rounded" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <router-link to="/real-estate/property-overview" class="stretched-link">
                                            <h6>Evergreen Villa with Residency</h6>
                                        </router-link>
                                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-house align-baseline text-primary me-1"></i> 5 Bedroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="ph ph-bathtub align-middle text-primary me-1"></i> 3 Bathroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-columns align-baseline text-primary me-1"></i> 3652
                                                    sqft</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span class="badge bg-warning-subtle text-warning"><i
                                                class="bi bi-star-fill text-warning"></i> 4.5</span>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="rentPropertyTabs" role="tabpanel" aria-labelledby="rentProperty"
                                tabindex="0">
                                <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                    <div class="flex-shrink-0">
                                        <img :src="rImg1" alt="" height="44"
                                            class="object-fit-cover rounded" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <router-link to="/real-estate/property-overview" class="stretched-link">
                                            <h6>Liberty Property</h6>
                                        </router-link>
                                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-house align-baseline text-primary me-1"></i> 1 Bedroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="ph ph-bathtub align-middle text-primary me-1"></i> 1 Bathroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-columns align-baseline text-primary me-1"></i> 958 sqft
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span class="badge bg-warning-subtle text-warning"><i
                                                class="bi bi-star-fill text-warning"></i> 4.3</span>
                                    </div>
                                </div>
                                <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                    <div class="flex-shrink-0">
                                        <img :src="rImg2" alt="" height="44"
                                            class="object-fit-cover rounded" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <router-link to="/real-estate/property-overview" class="stretched-link">
                                            <h6>Duplex Square Valley</h6>
                                        </router-link>
                                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-house align-baseline text-primary me-1"></i> 3 Bedroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="ph ph-bathtub align-middle text-primary me-1"></i> 2 Bathroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-columns align-baseline text-primary me-1"></i> 2659
                                                    sqft</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span class="badge bg-warning-subtle text-warning"><i
                                                class="bi bi-star-fill text-warning"></i> 3.8</span>
                                    </div>
                                </div>
                                <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                    <div class="flex-shrink-0">
                                        <img :src="rImg3" alt="" height="44"
                                            class="object-fit-cover rounded" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <router-link to="/real-estate/property-overview" class="stretched-link">
                                            <h6>Small house on an autumn’s</h6>
                                        </router-link>
                                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-house align-baseline text-primary me-1"></i> 2 Bedroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="ph ph-bathtub align-middle text-primary me-1"></i> 1 Bathroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-columns align-baseline text-primary me-1"></i> 2230
                                                    sqft</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span class="badge bg-warning-subtle text-warning"><i
                                                class="bi bi-star-fill text-warning"></i> 4.3</span>
                                    </div>
                                </div>
                                <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                    <div class="flex-shrink-0">
                                        <img :src="rImg7" alt="" height="44"
                                            class="object-fit-cover rounded" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <router-link to="/real-estate/property-overview" class="stretched-link">
                                            <h6>New Grand Hotel Room</h6>
                                        </router-link>
                                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-house align-baseline text-primary me-1"></i> 3 Bedroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="ph ph-bathtub align-middle text-primary me-1"></i> 2 Bathroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-columns align-baseline text-primary me-1"></i> 2785
                                                    sqft</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span class="badge bg-warning-subtle text-warning"><i
                                                class="bi bi-star-fill text-warning"></i> 4.9</span>
                                    </div>
                                </div>
                                <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                    <div class="flex-shrink-0">
                                        <img :src="rImg8" alt="" height="44"
                                            class="object-fit-cover rounded" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <router-link to="/real-estate/property-overview" class="stretched-link">
                                            <h6>Park Side Colonial</h6>
                                        </router-link>
                                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-house align-baseline text-primary me-1"></i> 5 Bedroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="ph ph-bathtub align-middle text-primary me-1"></i> 3 Bathroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-columns align-baseline text-primary me-1"></i> 5643
                                                    sqft</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span class="badge bg-warning-subtle text-warning"><i
                                                class="bi bi-star-fill text-warning"></i> 4.7</span>
                                    </div>
                                </div>
                                <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                    <div class="flex-shrink-0">
                                        <img :src="rImg7" alt="" height="44"
                                            class="object-fit-cover rounded" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <router-link to="/real-estate/property-overview" class="stretched-link">
                                            <h6>Whitespace Vintage Villa</h6>
                                        </router-link>
                                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-house align-baseline text-primary me-1"></i> 4 Bedroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="ph ph-bathtub align-middle text-primary me-1"></i> 2 Bathroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-columns align-baseline text-primary me-1"></i> 1145
                                                    sqft</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span class="badge bg-warning-subtle text-warning"><i
                                                class="bi bi-star-fill text-warning"></i> 4.9</span>
                                    </div>
                                </div>
                                <div class="d-flex gap-2 align-items-center position-relative">
                                    <div class="flex-shrink-0">
                                        <img :src="rImg5" alt="" height="44"
                                            class="object-fit-cover rounded" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <router-link to="/real-estate/property-overview" class="stretched-link">
                                            <h6>Nightlight Residency</h6>
                                        </router-link>
                                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-house align-baseline text-primary me-1"></i> 2 Bedroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="ph ph-bathtub align-middle text-primary me-1"></i> 1 Bathroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i
                                                        class="bi bi-columns align-baseline text-primary me-1"></i> 1324
                                                    sqft</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span class="badge bg-warning-subtle text-warning"><i
                                                class="bi bi-star-fill text-warning"></i> 4.9</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <router-link to="/real-estate/list" class="icon-link">View All <i
                                    class="bi bi-arrow-right"></i></router-link>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="8">
                <div class="d-flex flex-column h-100">
                <b-row class="h-100 justify-content-between">
                    <b-col lg="12">
                        <b-card no-body>
                            <b-card-body>
                                <b-row class="g-4">
                                    <b-col xxl="3" md="6" class="border-end-md border-dashed">
                                        <div class="text-center">
                                            <p class="text-muted">Project On Hold</p>
                                            <div class="mx-3 mb-3 pb-1">
                                                <apexchart class="apex-charts" height="50" dir="ltr"
                                                    :series="projectOnHoldChart.series"
                                                    :options="projectOnHoldChart.chartOptions"></apexchart>
                                            </div>
                                            <h5 class="mb-0">2451 <small
                                                    class="badge fs-2xs bg-danger-subtle text-danger ms-1"><i
                                                        class="ph-arrow-down align-baseline"></i> 1.02%</small></h5>
                                        </div>
                                    </b-col>
                                    <b-col xxl="3" md="6" class="border-end-xxl border-dashed">
                                        <div class="text-center">
                                            <p class="text-muted">Ongoing Properties</p>
                                            <div class="mx-3 mb-3 pb-1">
                                                <apexchart class="apex-charts" height="50" dir="ltr"
                                                    :series="ongoingPropertiesChart.series"
                                                    :options="ongoingPropertiesChart.chartOptions"></apexchart>
                                            </div>
                                            <h5 class="mb-0">$750.36M <small
                                                    class="badge fs-2xs bg-success-subtle text-success ms-1"><i
                                                        class="ph-arrow-up align-baseline"></i> 2.17%</small></h5>
                                        </div>
                                    </b-col>
                                    <b-col xxl="3" md="6" class="border-end-md border-dashed">
                                        <div class="text-center">
                                            <p class="text-muted">Pending Properties</p>
                                            <div class="mx-3 mb-3 pb-1">
                                                <apexchart class="apex-charts" height="50" dir="ltr"
                                                    :series="pendingPropertiesChart.series"
                                                    :options="pendingPropertiesChart.chartOptions"></apexchart>
                                            </div>
                                            <h5 class="mb-0">$750.36M <small
                                                    class="badge fs-2xs bg-success-subtle text-success ms-1"><i
                                                        class="ph-arrow-up align-baseline"></i> 07.26%</small></h5>
                                        </div>
                                    </b-col>
                                    <b-col xxl="3" md="6">
                                        <div class="text-center">
                                            <p class="text-muted">Completed Project</p>
                                            <div class="mx-3 mb-3 pb-1">
                                                <apexchart class="apex-charts" height="50" dir="ltr"
                                                    :series="completedProjectChart.series"
                                                    :options="completedProjectChart.chartOptions"></apexchart>
                                            </div>
                                            <h5 class="mb-0">4689 <small
                                                    class="badge fs-2xs bg-success-subtle text-success ms-1"><i
                                                        class="ph-arrow-up align-baseline"></i> 3.62%</small></h5>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>
                    </b-col>
                    <b-col lg="6">
                        <b-card no-body>
                            <b-card-header class="d-flex align-items-center">
                                <b-card-title class="mb-0 flex-grow-1">Recent Activity</b-card-title>
                                <div class="flex-shrink-0">
                                    <router-link to="/pages/timeline" class="text-muted">View All <i
                                            class="bi bi-chevron-right align-baseline"></i></router-link>
                                </div>
                            </b-card-header>
                            <b-card-body class="px-0">
                                <SimpleBar class="px-3" data-simplebar style="height: 255px">
                                    <div class="acitivity-timeline acitivity-main">
                                        <div class="acitivity-item d-flex">
                                            <div class="flex-shrink-0">
                                                <img :src="avatar2" alt=""
                                                    class="avatar-xs rounded-circle acitivity-avatar" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 lh-base">Purchased by James Price</h6>
                                                <p class="text-muted mb-2">Product noise evolve smartwatch </p>
                                                <small class="mb-0 text-muted">05:57 AM Today</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0">
                                                <img :src="avatar1" alt=""
                                                    class="avatar-xs rounded-circle acitivity-avatar" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 lh-base">Natasha Carey have liked the products</h6>
                                                <p class="text-muted mb-2">Allow users to like products in your
                                                    WooCommerce store.</p>
                                                <small class="mb-0 text-muted">25 Dec, 2022</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0">
                                                <img :src="avatar3" alt=""
                                                    class="avatar-xs rounded-circle acitivity-avatar" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 lh-base">Today offers by <router-link
                                                        to="/ecommerce/seller-overview"
                                                        class="link-secondary">Digitech Galaxy</router-link></h6>
                                                <p class="text-muted mb-2">Offer is valid on orders of $230 Or above for
                                                    selected products only.</p>
                                                <small class="mb-0 text-muted">12 Dec, 2022</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0">
                                                <img :src="avatar2" alt=""
                                                    class="avatar-xs rounded-circle acitivity-avatar" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 lh-base">Favorites Product</h6>
                                                <p class="text-muted mb-2">Esther James have favorites product.</p>
                                                <small class="mb-0 text-muted">25 Nov, 2022</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0">
                                                <img :src="avatar2" alt=""
                                                    class="avatar-xs rounded-circle acitivity-avatar" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 lh-base">Flash sale starting <span
                                                        class="text-primary">Tomorrow.</span></h6>
                                                <p class="text-muted mb-2">Flash sale by <b-link href="#"
                                                        class="link-secondary fw-medium">Zoetic Fashion</b-link></p>
                                                <small class="mb-0 text-muted">22 Oct, 2022</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item d-flex">
                                            <div class="flex-shrink-0">
                                                <img :src="avatar5" alt=""
                                                    class="avatar-xs rounded-circle acitivity-avatar" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 lh-base">Monthly sales report</h6>
                                                <p class="text-muted mb-2"><span class="text-danger">2 days left</span>
                                                    notification to submit the monthly sales report. <b-link
                                                        href="#"
                                                        class="link-warning text-decoration-underline">Reports
                                                        Builder</b-link></p>
                                                <small class="mb-0 text-muted">15 Oct, 2022</small>
                                            </div>
                                        </div>
                                    </div>
                                </SimpleBar>
                            </b-card-body>
                        </b-card>
                    </b-col>
                    <b-col lg="6">
                        <b-card no-body>
                            <b-card-header class="d-flex align-items-center">
                                <b-card-title class="mb-0 flex-grow-1">Agent List</b-card-title>
                                <div class="flex-shrink-0">
                                    <router-link to="/real-estate-agent/list" class="text-muted">View All <i
                                            class="bi bi-chevron-right align-baseline"></i></router-link>
                                </div>
                            </b-card-header>
                            <b-card-body class="pt-4 mb-n3">
                                <div class="table-responsive table-card mb-0">
                                    <table class="table table-borderless table-centered align-middle table-nowrap mb-0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 me-2">
                                                            <img :src="avatar1" alt=""
                                                                class="avatar-xxs rounded-circle" />
                                                        </div>
                                                        <div class="flex-grow-1">Dianna Bogan</div>
                                                    </div>
                                                </td>
                                                <td>United Kingdom</td>
                                                <td>
                                                    +(86) 9985-9220
                                                </td>
                                            </tr><!-- end tr -->
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 me-2">
                                                            <img :src="avatar2" alt=""
                                                                class="avatar-xxs rounded-circle" />
                                                        </div>
                                                        <div class="flex-grow-1">Jansh Brown</div>
                                                    </div>
                                                </td>
                                                <td>Germany</td>
                                                <td>
                                                    +(27) 3041-1766
                                                </td>
                                            </tr><!-- end tr -->
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 me-2">
                                                            <img :src="avatar3" alt=""
                                                                class="avatar-xxs rounded-circle" />
                                                        </div>
                                                        <div class="flex-grow-1">Ayaan Bowen</div>
                                                    </div>
                                                </td>
                                                <td>Brazil</td>
                                                <td>
                                                    +(51) 3233-7909
                                                </td>
                                            </tr><!-- end tr -->
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 me-2">
                                                            <img :src="avatar4" alt=""
                                                                class="avatar-xxs rounded-circle" />
                                                        </div>
                                                        <div class="flex-grow-1">Prezy Mark</div>
                                                    </div>
                                                </td>
                                                <td>Spain</td>
                                                <td>
                                                    +(48) 3877-9000
                                                </td>
                                            </tr><!-- end tr -->
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 me-2">
                                                            <img :src="avatar6" alt=""
                                                                class="avatar-xxs rounded-circle" />
                                                        </div>
                                                        <div class="flex-grow-1">Vihan Hudda</div>
                                                    </div>
                                                </td>
                                                <td>Brazil</td>
                                                <td>
                                                    +(11) 3885-1022
                                                </td>
                                            </tr><!-- end tr -->
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 me-2">
                                                            <img :src="avatar8" alt=""
                                                                class="avatar-xxs rounded-circle" />
                                                        </div>
                                                        <div class="flex-grow-1">Uriel King</div>
                                                    </div>
                                                </td>
                                                <td>USA</td>
                                                <td>
                                                    +(21) 2345-6789
                                                </td>
                                            </tr><!-- end tr -->
                                        </tbody><!-- end tbody -->
                                    </table>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </div>
        </b-col>
    </b-row>
</Layout></template>