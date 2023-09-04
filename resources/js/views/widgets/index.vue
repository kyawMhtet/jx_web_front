<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";
import {
    CountTo
} from "vue3-count-to";
import {
    SimpleBar
} from "simplebar-vue3";

import SalesbyCountries from "../dashboards/ecommerce/SalesbyCountries.vue"
// property
import rImg1 from "../../../images/real-estate/img-01.jpg";
import rImg2 from "../../../images/real-estate/img-02.jpg";
import rImg3 from "../../../images/real-estate/img-03.jpg";
import rImg4 from "../../../images/real-estate/img-04.jpg";
import rImg5 from "../../../images/real-estate/img-05.jpg";
import rImg7 from "../../../images/real-estate/img-07.jpg";
import rImg8 from "../../../images/real-estate/img-08.jpg";

// avatar imgs
import avatar2 from "../../../images/users/32/avatar-2.jpg";
import avatar3 from "../../../images/users/32/avatar-3.jpg";
import avatar4 from "../../../images/users/32/avatar-4.jpg";
import avatar5 from "../../../images/users/32/avatar-5.jpg";
import avatar6 from "../../../images/users/32/avatar-6.jpg";

// brands
import firefox from "../../../images/brands/firefox.png";
import microsoft from "../../../images/brands/microsoft.png";
import microsoft2 from "../../../images/brands/microsoft2.png";
import chrome from "../../../images/brands/chrome.png";
import safari from "../../../images/brands/safari.png";
import opera from "../../../images/brands/opera.png";
import chromium from "../../../images/brands/chromium.png";

import {
    salesReportChart,
    realizedRateChart,
    emailSentChart,
    syncStatusBreakdownChart,
    totalSessionsChart,
    avgVisitDurationChart,
    impressionsChart,
    totalViewsChart,
    projectOnHoldChart,
    ongoingPropertiesChart,
    pendingPropertiesChart,
    completedProjectChart
} from "./chartsData";

export default {
    data() {
        return {
            title: "Widgets",
            items: [{
                    text: "Pages",
                    href: "/",
                },
                {
                    text: "Widgets",
                    active: true,
                },
            ],
            rImg1,
            rImg2,
            rImg3,
            rImg4,
            rImg5,
            rImg7,
            rImg8,
            avatar2,
            avatar3,
            avatar4,
            avatar5,
            firefox,
            microsoft,
            microsoft2,
            chrome,
            safari,
            opera,
            chromium,
            avatar6,
            salesReportChart: salesReportChart,
            realizedRateChart: realizedRateChart,
            emailSentChart: emailSentChart,
            syncStatusBreakdownChart: syncStatusBreakdownChart,
            totalSessionsChart: totalSessionsChart,
            avgVisitDurationChart: avgVisitDurationChart,
            impressionsChart: impressionsChart,
            totalViewsChart: totalViewsChart,
            projectOnHoldChart: projectOnHoldChart,
            ongoingPropertiesChart: ongoingPropertiesChart,
            pendingPropertiesChart: pendingPropertiesChart,
            completedProjectChart: completedProjectChart
        };
    },
    components: {
        Layout,
        PageHeader,
        CountTo,
        SimpleBar,
        SalesbyCountries
    },
};
</script>

<template>
<Layout>
    <PageHeader :title="title" :items="items" />
    <b-row>
        <b-col cols="12">
            <h5 class="text-decoration-underline mb-3 pb-1">Tile Boxs</h5>
        </b-col>
    </b-row>

    <b-row>
        <b-col xl="3" sm="6">
            <b-card no-body>
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
                    <p class="fs-md text-muted mb-0">Total Sessions</p>

                    <b-row class="mt-4 align-items-end">
                        <b-col lg="6">
                            <h3 class="mb-4">
                                <count-to :startVal="0" :duration="5000" :endVal="368.24" decimals="2" suffix="k"></count-to>
                            </h3>
                            <p class="text-success mb-0"><i class="bi bi-arrow-up me-1"></i> 06.41% Last Month</p>
                        </b-col>
                        <b-col lg="6">
                            <apexchart class="apex-charts m-n3 mt-n4" height="124" dir="ltr" :series="totalSessionsChart.series" :options="totalSessionsChart.chartOptions">
                            </apexchart>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xl="3" sm="6">
            <b-card no-body>
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
                    <p class="fs-md text-muted mb-0">Avg. Visit Duration</p>

                    <b-row class="mt-4 align-items-end">
                        <b-col lg="6">
                            <h3 class="mb-4">
                                <count-to :startVal="0" :duration="5000" :endVal="1.47" decimals="2" suffix="sec"></count-to>
                            </h3>
                            <p class="text-success mb-0"><i class="bi bi-arrow-up me-1"></i> 13% Last Month</p>
                        </b-col>
                        <b-col lg="6">
                            <apexchart class="apex-charts m-n3 mt-n4" height="124" dir="ltr" :series="avgVisitDurationChart.series" :options="avgVisitDurationChart.chartOptions">
                            </apexchart>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xl="3" sm="6">
            <b-card no-body>
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
                    <p class="fs-md text-muted mb-0">Impressions</p>

                    <b-row class="mt-4 align-items-end">
                        <b-col lg="6">
                            <h3 class="mb-4">
                                <count-to :startVal="0" :duration="5000" :endVal="1647"></count-to>
                            </h3>
                            <p class="text-danger mb-0"><i class="bi bi-arrow-down me-1"></i> 07.26% Last Week</p>
                        </b-col>
                        <b-col lg="6">
                            <apexchart class="apex-charts m-n3 mt-n4" height="124" dir="ltr" :series="impressionsChart.series" :options="impressionsChart.chartOptions"></apexchart>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xl="3" sm="6">
            <b-card no-body>
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
                    <p class="fs-md text-muted mb-0">Total Views</p>

                    <b-row class="mt-4 align-items-end">
                        <b-col lg="6">
                            <h3 class="mb-4">
                                <count-to :startVal="0" :duration="5000" :endVal="291.32" decimals="2" suffix="k"></count-to>
                            </h3>
                            <p class="text-success mb-0"><i class="bi bi-arrow-up me-1"></i> 13% Last Month</p>
                        </b-col>
                        <b-col lg="6">
                            <apexchart class="apex-charts m-n3 mt-n4" height="124" dir="ltr" :series="totalViewsChart.series" :options="totalViewsChart.chartOptions"></apexchart>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>

    <b-row>
        <b-col xl="3" sm="6">
            <b-card no-body class="file-manager-widgets" style="background-size: 95px;background-position:right bottom;">
                <b-card-body>
                    <div class="d-flex align-items-center mb-4">
                        <div class="flex-grow-1">
                            <div class="avatar-sm">
                                <div class="avatar-title bg-success-subtle text-success rounded fs-xl">
                                    <i class="bi bi-ticket"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex-shrink-0">
                            <p><span class="text-success me-1"><i class="ri-arrow-right-up-line fs-sm align-middle"></i>
                                    +3.47 %</span> than last week</p>
                        </div>
                    </div>
                    <h4 class="fw-semibold mb-3">
                        <count-to :startVal="0" :duration="5000" :endVal="249" suffix="k"></count-to>
                    </h4>
                    <p class="fw-medium text-muted mb-0">Total Tickets</p>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xl="3" sm="6">
            <b-card no-body class="file-manager-widgets" style="background-size: 95px;background-position:right bottom;">
                <b-card-body>
                    <div class="d-flex align-items-center mb-4">
                        <div class="flex-grow-1">
                            <div class="avatar-sm">
                                <div class="avatar-title bg-warning-subtle text-warning rounded fs-xl">
                                    <i class="bi bi-hourglass-split"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex-shrink-0">
                            <p><span class="text-danger me-1"><i class="ri-arrow-right-down-line fs-sm align-middle"></i> +6.33 %</span> than
                                last week</p>
                        </div>
                    </div>
                    <h4 class="fw-semibold mb-3">
                        <count-to :startVal="0" :duration="5000" :endVal="3174"></count-to>
                    </h4>
                    <p class="fw-medium text-muted mb-0">Pending Tickets</p>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xl="3" sm="6">
            <b-card no-body class="file-manager-widgets" style="background-size: 95px;background-position:right bottom;">
                <b-card-body>
                    <div class="d-flex align-items-center mb-4">
                        <div class="flex-grow-1">
                            <div class="avatar-sm">
                                <div class="avatar-title bg-danger-subtle text-danger rounded fs-xl">
                                    <i class="bi bi-lock"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex-shrink-0">
                            <p><span class="text-success me-1"><i class="ri-arrow-right-up-line fs-sm align-middle"></i>
                                    +7.34 %</span> than last week</p>
                        </div>
                    </div>
                    <h4 class="fw-semibold mb-3">
                        <count-to :startVal="0" :duration="5000" :endVal="1596"></count-to>
                    </h4>
                    <p class="fw-medium text-muted mb-0">Closed Tickets</p>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xl="3" sm="6">
            <b-card no-body class="card-primary file-manager-widgets" style="background-size: 95px;background-position:right bottom;">
                <b-card-body>
                    <div class="d-flex align-items-center mb-4">
                        <div class="flex-grow-1">
                            <div class="avatar-sm">
                                <div class="avatar-title bg-primary-subtle text-primary rounded fs-xl">
                                    <i class="bi bi-ticket-perforated"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex-shrink-0">
                            <p><span class="text-danger me-1"><i class="ri-arrow-right-down-line fs-sm align-middle"></i> +1.29 %</span> than
                                last week</p>
                        </div>
                    </div>
                    <h4 class="fw-semibold text-reset mb-3">
                        <count-to :startVal="0" :duration="5000" :endVal="365"></count-to>
                    </h4>
                    <p class="fw-medium text-white text-opacity-50 mb-0">New Tickets</p>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>

    <b-row>
        <b-col cols="xxl" sm="6">
            <b-card no-body class="overflow-hidden">
                <b-card-body>
                    <div class="avatar-sm float-end">
                        <div class="avatar-title bg-primary-subtle text-primary fs-3xl rounded">
                            <i class="ph ph-briefcase"></i>
                        </div>
                    </div>
                    <h4>
                        <count-to :startVal="0" :duration="5000" :endVal="368.24" decimals="2" suffix="M" prefix="$"></count-to>
                    </h4>
                    <p class="text-muted mb-4">Annual Profit</p>
                    <p class="text-muted mb-0"><span class="badge bg-success-subtle text-success"><i class="bi bi-arrow-up"></i> 4.65%</span> vs last month</p>
                </b-card-body>
                <div class="progress progress-sm rounded-0" role="progressbar" aria-valuenow="76" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar" style="width: 76%"></div>
                </div>
            </b-card>
        </b-col>
        <b-col cols="xxl" sm="6">
            <b-card no-body class="overflow-hidden">
                <b-card-body>
                    <div class="avatar-sm float-end">
                        <div class="avatar-title bg-secondary-subtle text-secondary fs-3xl rounded">
                            <i class="ph ph-wallet"></i>
                        </div>
                    </div>
                    <h4>
                        <count-to :startVal="0" :duration="5000" :endVal="1454.71" decimals="2" suffix="k" prefix="$"></count-to>
                    </h4>
                    <p class="text-muted mb-4">Daily average income</p>
                    <p class="text-muted mb-0"><span class="badge bg-success-subtle text-success"><i class="bi bi-arrow-up"></i> 1.33%</span> vs last month</p>
                </b-card-body>
                <div class="progress progress-sm rounded-0" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-secondary" style="width: 88%"></div>
                </div>
            </b-card>
        </b-col>
        <b-col cols="xxl" sm="6">
            <b-card no-body class="overflow-hidden">
                <b-card-body>
                    <div class="avatar-sm float-end">
                        <div class="avatar-title bg-danger-subtle text-danger fs-3xl rounded">
                            <i class="bi bi-broadcast"></i>
                        </div>
                    </div>
                    <h4>
                        <count-to :startVal="0" :duration="5000" :endVal="33.37" decimals="2" suffix="%"></count-to>
                    </h4>
                    <p class="text-muted mb-4">Lead Conversations</p>
                    <p class="text-muted mb-0"><span class="badge bg-success-subtle text-success"><i class="bi bi-arrow-up"></i> 2.69%</span> vs last month</p>
                </b-card-body>
                <div class="progress progress-sm rounded-0" role="progressbar" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-danger" style="width: 18%"></div>
                </div>
            </b-card>
        </b-col>
        <b-col cols="xxl" sm="6">
            <b-card no-body class="overflow-hidden">
                <b-card-body>
                    <div class="avatar-sm float-end">
                        <div class="avatar-title bg-success-subtle text-success fs-3xl rounded">
                            <i class="ph ph-rocket-launch"></i>
                        </div>
                    </div>
                    <h4>
                        <count-to :startVal="0" :duration="5000" :endVal="648"></count-to>
                    </h4>
                    <p class="text-muted mb-4">Campaign Sent</p>
                    <p class="text-muted mb-0"><span class="badge bg-danger-subtle text-danger"><i class="bi bi-arrow-down"></i> 0.78%</span> vs last month</p>
                </b-card-body>
                <div class="progress progress-sm rounded-0" role="progressbar" aria-valuenow="49" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-success" style="width: 49%"></div>
                </div>
            </b-card>
        </b-col>
        <b-col cols="xxl">
            <b-card no-body class="overflow-hidden">
                <b-card-body>
                    <div class="avatar-sm float-end">
                        <div class="avatar-title bg-warning-subtle text-warning fs-3xl rounded">
                            <i class="ph ph-heartbeat"></i>
                        </div>
                    </div>
                    <h4>
                        <count-to :startVal="0" :duration="5000" :endVal="1742"></count-to>
                    </h4>
                    <p class="text-muted mb-4">Annual Deals</p>
                    <p class="text-muted mb-0"><span class="badge bg-success-subtle text-success"><i class="bi bi-arrow-up"></i> 7.93%</span> vs last month</p>
                </b-card-body>
                <div class="progress progress-sm rounded-0" role="progressbar" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-warning" style="width: 83%"></div>
                </div>
            </b-card>
        </b-col>
    </b-row>

    <b-card no-body>
        <b-card-body>
            <b-row class="g-4">
                <b-col xxl="3" md="6" class="border-end-md border-dashed">
                    <div class="text-center">
                        <p class="text-muted">Project On Hold</p>
                        <div class="mx-3 mb-3 pb-1">
                            <apexchart class="apex-charts" height="50" dir="ltr" :series="projectOnHoldChart.series" :options="projectOnHoldChart.chartOptions"></apexchart>
                        </div>
                        <h5 class="mb-0">2451 <small class="badge fs-2xs bg-danger-subtle text-danger ms-1"><i class="ph-arrow-down align-baseline"></i> 1.02%</small></h5>
                    </div>
                </b-col>
                <b-col xxl="3" md="6" class="border-end-xxl border-dashed">
                    <div class="text-center">
                        <p class="text-muted">Ongoing Properties</p>
                        <div class="mx-3 mb-3 pb-1">
                            <apexchart class="apex-charts" height="50" dir="ltr" :series="ongoingPropertiesChart.series" :options="ongoingPropertiesChart.chartOptions"></apexchart>
                        </div>
                        <h5 class="mb-0">$750.36M <small class="badge fs-2xs bg-success-subtle text-success ms-1"><i class="ph-arrow-up align-baseline"></i> 2.17%</small></h5>
                    </div>
                </b-col>
                <b-col xxl="3" md="6" class="border-end-md border-dashed">
                    <div class="text-center">
                        <p class="text-muted">Pending Properties</p>
                        <div class="mx-3 mb-3 pb-1">
                            <apexchart class="apex-charts" height="50" dir="ltr" :series="pendingPropertiesChart.series" :options="pendingPropertiesChart.chartOptions"></apexchart>
                        </div>
                        <h5 class="mb-0">$750.36M <small class="badge fs-2xs bg-success-subtle text-success ms-1"><i class="ph-arrow-up align-baseline"></i> 07.26%</small></h5>
                    </div>
                </b-col>
                <b-col xxl="3" md="6">
                    <div class="text-center">
                        <p class="text-muted">Completed Project</p>
                        <div class="mx-3 mb-3 pb-1">
                            <apexchart class="apex-charts" height="50" dir="ltr" :series="completedProjectChart.series" :options="completedProjectChart.chartOptions"></apexchart>
                        </div>
                        <h5 class="mb-0">4689 <small class="badge fs-2xs bg-success-subtle text-success ms-1"><i class="ph-arrow-up align-baseline"></i> 3.62%</small></h5>
                    </div>
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>

    <b-row class="row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1">
        <b-col>
            <b-card no-body class="border-bottom border-3 card-animate border-primary">
                <b-card-body>
                    <span class="badge bg-success-subtle text-success float-end"><i class="ph-trend-up align-middle me-1"></i> 3.8%</span>
                    <h4 class="mb-4">
                        <count-to :startVal="0" :duration="5000" :endVal="21438"></count-to>
                    </h4>

                    <p class="text-muted fw-medium text-uppercase mb-0">Total Orders</p>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col>
            <b-card no-body class="border-bottom border-3 card-animate card-secondary border-secondary">
                <b-card-body>
                    <span class="badge bg-success-subtle text-success float-end"><i class="ph-trend-up align-middle me-1"></i> 20.8%</span>
                    <h4 class="mb-4 text-reset">
                        <count-to :startVal="0" :duration="5000" :endVal="5963"></count-to>
                    </h4>

                    <p class="text-white text-opacity-50 fw-medium text-uppercase mb-0">New Orders</p>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col>
            <b-card no-body class="border-bottom border-3 card-animate border-warning">
                <b-card-body>
                    <span class="badge bg-success-subtle text-success float-end"><i class="ph-trend-up align-middle me-1"></i> 12.6%</span>
                    <h4 class="mb-4">
                        <count-to :startVal="0" :duration="5000" :endVal="4620"></count-to>
                    </h4>

                    <p class="text-muted fw-medium text-uppercase mb-0">Pending Orders</p>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col>
            <b-card no-body class="border-bottom border-3 card-animate border-success">
                <b-card-body>
                    <span class="badge bg-success-subtle text-success float-end"><i class="ph-trend-up align-middle me-1"></i> 18.7%</span>
                    <h4 class="mb-4">
                        <count-to :startVal="0" :duration="5000" :endVal="8541"></count-to>
                    </h4>

                    <p class="text-muted fw-medium text-uppercase mb-0">Delivered Orders</p>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col>
            <b-card no-body class="border-bottom border-3 card-animate border-danger">
                <b-card-body>
                    <span class="badge bg-danger-subtle text-danger float-end"><i class="ph-trend-down align-middle me-1"></i> 7.1%</span>
                    <h4 class="mb-4">
                        <count-to :startVal="0" :duration="5000" :endVal="2314"></count-to>
                    </h4>

                    <p class="text-muted fw-medium text-uppercase mb-0">Cancelled Orders</p>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>

    <b-row>
        <b-col cols="12">
            <h5 class="text-decoration-underline mb-3 pb-1">Other Widgets</h5>
        </b-col>
    </b-row>

    <b-row>
        <b-col xl="4" lg="6">
            <b-card no-body id="networks">
                <b-card-header class="d-flex">
                    <b-card-title title-tag="h5" class="mb-0 flex-grow-1">Browsers</b-card-title>
                    <div class="flex-shrink-0">
                        <div class="dropdown card-header-dropdown sortble-dropdown">
                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="text-muted dropdown-title">Browsers</span> <i class="mdi mdi-chevron-down ms-1"></i>
                            </b-link>
                            <div class="dropdown-menu dropdown-menu-end">
                                <b-link href="#" class="dropdown-item sort" data-sort="browsers">Browsers</b-link>
                                <b-link href="#" class="dropdown-item sort" data-sort="click">Click</b-link>
                                <b-link href="#" class="dropdown-item sort" data-sort="pageviews">Bounce Rate</b-link>
                            </div>
                        </div>
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="table-responsive">
                        <table class="table align-middle mb-0">
                            <thead class="table-active">
                                <tr>
                                    <th class="sort cursor-pointer" data-sort="browsers">
                                        Browsers
                                    </th>
                                    <th class="sort cursor-pointer text-center" data-sort="click">
                                        Click
                                    </th>
                                    <th class="sort cursor-pointer text-center" data-sort="pageviews">
                                        Bounce Rate
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="list">
                                <tr>
                                    <td>
                                        <img :src="chrome" alt="" class="avatar-xxs" />
                                        <span class="ms-1 browsers">Google Chrome</span>
                                    </td>
                                    <td class="click text-center">
                                        640
                                    </td>
                                    <td class="pageviews text-center">
                                        86.01%
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img :src="firefox" alt="" class="avatar-xxs" />
                                        <span class="ms-1 browsers">Firefox</span>
                                    </td>
                                    <td class="click text-center">
                                        274
                                    </td>
                                    <td class="pageviews text-center">
                                        59.22%
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img :src="safari" alt="" class="avatar-xxs" />
                                        <span class="ms-1 browsers">Safari</span>
                                    </td>
                                    <td class="click text-center">
                                        591
                                    </td>
                                    <td class="pageviews text-center">
                                        71.36%
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img :src="opera" alt="" class="avatar-xxs" />
                                        <span class="ms-1 browsers">Opera</span>
                                    </td>
                                    <td class="click text-center">
                                        456
                                    </td>
                                    <td class="pageviews text-center">
                                        63.82%
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img :src="microsoft" alt="" class="avatar-xxs" />
                                        <span class="ms-1 browsers">Microsoft Edge</span>
                                    </td>
                                    <td class="click text-center">
                                        312
                                    </td>
                                    <td class="pageviews text-center">
                                        57.48%
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img :src="microsoft2" alt="" class="avatar-xxs" />
                                        <span class="ms-1 browsers">Internet Explorer</span>
                                    </td>
                                    <td class="click text-center">
                                        164
                                    </td>
                                    <td class="pageviews text-center">
                                        77.21%
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img :src="chromium" alt="" class="avatar-xxs" />
                                        <span class="ms-1 browsers">Chromium</span>
                                    </td>
                                    <td class="click text-center">
                                        36
                                    </td>
                                    <td class="pageviews text-center">
                                        18.90%
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xxl="4" lg="6">
            <b-card no-body>
                <b-card-header class="d-flex align-items-center">
                    <b-card-title class="mb-0 flex-grow-1">Popular Property</b-card-title>
                    <div class="flex-shrink-0">
                        <div class="nav nav-pills gap-1" id="popularProperty" role="tablist" aria-orientation="vertical">
                            <b-button variant="ghost-danger" size="sm" class="active" id="saleProperty" data-bs-toggle="pill" data-bs-target="#salePropertyTabs" type="button" role="tab" aria-controls="salePropertyTabs" aria-selected="true">Sale</b-button>
                            <b-button variant="ghost-info" size="sm" id="rentProperty" data-bs-toggle="pill" data-bs-target="#rentPropertyTabs" type="button" role="tab" aria-controls="rentPropertyTabs" aria-selected="false" tabindex="-1">Rent</b-button>
                        </div>
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="tab-content" id="popularPropertyContent">
                        <div class="tab-pane show active" id="salePropertyTabs" role="tabpanel" aria-labelledby="saleProperty" tabindex="0">
                            <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                <div class="flex-shrink-0">
                                    <img :src="rImg8" alt="" class="avatar-sm object-fit-cover rounded" />
                                </div>
                                <div class="flex-grow-1">
                                    <router-link to="/real-estate/property-overview" class="stretched-link">
                                        <h6>Crystal House</h6>
                                    </router-link>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 2 Bedroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 1 Bathroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1039
                                                sqft</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill text-warning"></i> 4.5</span>
                                </div>
                            </div>
                            <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                <div class="flex-shrink-0">
                                    <img :src="rImg7" alt="" class="avatar-sm object-fit-cover rounded" />
                                </div>
                                <div class="flex-grow-1">
                                    <router-link to="/real-estate/property-overview" class="stretched-link">
                                        <h6>Whitepace Vintage Villa</h6>
                                    </router-link>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 4 Bedroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 2 Bathroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1145
                                                sqft</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill text-warning"></i> 4.9</span>
                                </div>
                            </div>
                            <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                <div class="flex-shrink-0">
                                    <img :src="rImg5" alt="" class="avatar-sm object-fit-cover rounded" />
                                </div>
                                <div class="flex-grow-1">
                                    <router-link to="/real-estate/property-overview" class="stretched-link">
                                        <h6>Northlight Residency</h6>
                                    </router-link>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 3 Bedroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 3 Bathroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1859
                                                sqft</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill text-warning"></i> 4.7</span>
                                </div>
                            </div>
                            <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                <div class="flex-shrink-0">
                                    <img :src="rImg8" alt="" class="avatar-sm object-fit-cover rounded" />
                                </div>
                                <div class="flex-grow-1">
                                    <router-link to="/real-estate/property-overview" class="stretched-link">
                                        <h6>Park Side Colonial</h6>
                                    </router-link>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 5 Bedroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 3 Bathroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 5643
                                                sqft</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill text-warning"></i> 4.7</span>
                                </div>
                            </div>
                            <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                <div class="flex-shrink-0">
                                    <img :src="rImg4" alt="" class="avatar-sm object-fit-cover rounded" />
                                </div>
                                <div class="flex-grow-1">
                                    <router-link to="/real-estate/property-overview" class="stretched-link">
                                        <h6>Marina Hill Vintage</h6>
                                    </router-link>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 4 Bedroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 3 Bathroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1963
                                                sqft</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill text-warning"></i> 4.8</span>
                                </div>
                            </div>
                            <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                <div class="flex-shrink-0">
                                    <img :src="rImg7" alt="" class="avatar-sm object-fit-cover rounded" />
                                </div>
                                <div class="flex-grow-1">
                                    <router-link to="/real-estate/property-overview" class="stretched-link">
                                        <h6>Grand Cub Hotel</h6>
                                    </router-link>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 3 Bedroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 1 Bathroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1543
                                                sqft</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill text-warning"></i> 4.4</span>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="rentPropertyTabs" role="tabpanel" aria-labelledby="rentProperty" tabindex="0">
                            <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                <div class="flex-shrink-0">
                                    <img :src="rImg1" alt="" class="avatar-sm object-fit-cover rounded" />
                                </div>
                                <div class="flex-grow-1">
                                    <router-link to="/real-estate/property-overview" class="stretched-link">
                                        <h6>Liberty Property</h6>
                                    </router-link>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 1 Bedroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 1 Bathroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 958 sqft
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill text-warning"></i> 4.3</span>
                                </div>
                            </div>
                            <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                <div class="flex-shrink-0">
                                    <img :src="rImg2" alt="" class="avatar-sm object-fit-cover rounded" />
                                </div>
                                <div class="flex-grow-1">
                                    <router-link to="/real-estate/property-overview" class="stretched-link">
                                        <h6>Duplex Square Valley</h6>
                                    </router-link>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 3 Bedroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 2 Bathroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 2659
                                                sqft</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill text-warning"></i> 3.8</span>
                                </div>
                            </div>
                            <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                <div class="flex-shrink-0">
                                    <img :src="rImg3" alt="" class="avatar-sm object-fit-cover rounded" />
                                </div>
                                <div class="flex-grow-1">
                                    <router-link to="/real-estate/property-overview" class="stretched-link">
                                        <h6>Small house on an autumn’s</h6>
                                    </router-link>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 2 Bedroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 1 Bathroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 2230
                                                sqft</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill text-warning"></i> 4.3</span>
                                </div>
                            </div>
                            <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                <div class="flex-shrink-0">
                                    <img :src="rImg7" alt="" class="avatar-sm object-fit-cover rounded" />
                                </div>
                                <div class="flex-grow-1">
                                    <router-link to="/real-estate/property-overview" class="stretched-link">
                                        <h6>New Grand Hotel Room</h6>
                                    </router-link>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 3 Bedroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 2 Bathroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 2785
                                                sqft</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill text-warning"></i> 4.9</span>
                                </div>
                            </div>
                            <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                <div class="flex-shrink-0">
                                    <img :src="rImg8" alt="" class="avatar-sm object-fit-cover rounded" />
                                </div>
                                <div class="flex-grow-1">
                                    <router-link to="/real-estate/property-overview" class="stretched-link">
                                        <h6>Park Side Colonial</h6>
                                    </router-link>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 5 Bedroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 3 Bathroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 5643
                                                sqft</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill text-warning"></i> 4.7</span>
                                </div>
                            </div>
                            <div class="d-flex gap-2 align-items-center position-relative mb-3">
                                <div class="flex-shrink-0">
                                    <img :src="rImg7" alt="" class="avatar-sm object-fit-cover rounded" />
                                </div>
                                <div class="flex-grow-1">
                                    <router-link to="/real-estate/property-overview" class="stretched-link">
                                        <h6>Whitepace Vintage Villa</h6>
                                    </router-link>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 4 Bedroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 2 Bathroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1145
                                                sqft</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill text-warning"></i> 4.9</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xxl="4">
            <b-card no-body>
                <b-card-header class="d-flex align-items-center">
                    <b-card-title class="mb-0 flex-grow-1">Customer Feedback</b-card-title>
                    <div class="flex-shrink-0">
                        <router-link to="#!" class="text-muted">View All <i class="bi bi-chevron-right align-baseline"></i></router-link>
                    </div>
                </b-card-header>
                <b-card-body class="px-0">
                    <SimpleBar data-simplebar style="max-height: 390px;">
                        <b-card no-body class="border-bottom rounded-0 shadow-none mb-0">
                            <b-card-body class="pt-0">
                                <div class="d-flex gap-2">
                                    <div class="flex-shrink-0">
                                        <img :src="avatar2" alt="" class="avatar-sm rounded" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <span class="text-muted clearfix float-end">04:47 PM</span>
                                        <h6 class="fs-md mb-1">
                                            <router-link to="#!" class="text-reset">Josefa
                                                Weissnat</router-link>
                                        </h6>
                                        <div class="text-warning mb-2 fs-xs">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                        </div>
                                        <p class="text-muted mb-0">" Themebrand used Anydesk to fix the bug in Flask and
                                            django version. I highly recommend this product! "</p>
                                    </div>
                                </div>
                            </b-card-body>
                        </b-card>
                        <b-card no-body class="border-bottom rounded-0 shadow-none mb-0">
                            <b-card-body>
                                <div class="d-flex gap-2">
                                    <div class="flex-shrink-0">
                                        <img :src="avatar3" alt="" class="avatar-sm rounded" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <span class="text-muted clearfix float-end">11:24 AM</span>
                                        <h6 class="fs-md mb-1">
                                            <router-link to="#!" class="text-reset">Ophelia
                                                Steuber</router-link>
                                        </h6>
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
                        <b-card no-body class="border-bottom rounded-0 shadow-none mb-0">
                            <b-card-body>
                                <div class="d-flex gap-2">
                                    <div class="flex-shrink-0">
                                        <img :src="avatar4" alt="" class="avatar-sm rounded" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <span class="text-muted clearfix float-end">03:19 PM</span>
                                        <h6 class="fs-md mb-1">
                                            <router-link to="#!" class="text-reset">Dianna
                                                Bogan</router-link>
                                        </h6>
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
                        <b-card no-body class="border-bottom rounded-0 shadow-none mb-0">
                            <b-card-body>
                                <div class="d-flex gap-2">
                                    <div class="flex-shrink-0">
                                        <img :src="avatar5" alt="" class="avatar-sm rounded" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <span class="text-muted clearfix float-end">06:39 AM</span>
                                        <h6 class="fs-md mb-1">
                                            <router-link to="#!" class="text-reset">Jerry
                                                Emard</router-link>
                                        </h6>
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
                        <b-card no-body class="border-bottom rounded-0 shadow-none mb-0">
                            <b-card-body>
                                <div class="d-flex gap-2">
                                    <div class="flex-shrink-0">
                                        <img :src="avatar6" alt="" class="avatar-sm rounded" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <span class="text-muted clearfix float-end">09:18 AM</span>
                                        <h6 class="fs-md mb-1">
                                            <router-link to="#!" class="text-reset">Axel
                                                Kozey</router-link>
                                        </h6>
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
    </b-row>

    <b-row>
        <b-col cols="12">
            <h5 class="text-decoration-underline mb-3 mt-2 pb-3">Chart & Map Widgets</h5>
        </b-col>
    </b-row>

    <b-row>
        <b-col xxl="4" lg="6">
            <b-card no-body>
                <b-card-header class="d-flex align-items-center">
                    <b-card-title title-tag="h5" class="mb-0 flex-grow-1">Sales Report</b-card-title>
                    <div class="flex-shrink-0">
                        <b-button type="button" variant="subtle-info" size="sm"><i class="bi bi-file-earmark-text me-1 align-baseline"></i> Generate Reports</b-button>
                    </div>
                </b-card-header>
                <b-card-body class="pb-0">
                    <h4>
                        <count-to :startVal="0" :duration="5000" :endVal="452.32" decimals="2" suffix="M" prefix="$"></count-to>
                        <span class="text-success fw-normal fs-sm"><i class="bi bi-arrow-up"></i> +23.57%</span>
                    </h4>
                    <p class="text-muted mb-0">($215.32 Avg. revenue monthly)</p>
                </b-card-body>
                <b-card-body class="pt-0 pb-2 ps-0 mt-2 mt-lg-n3">
                    <apexchart class="apex-charts" height="333" dir="ltr" :series="salesReportChart.series" :options="salesReportChart.chartOptions"></apexchart>
                </b-card-body>
            </b-card>
        </b-col>

        <b-col xxl="4" lg="6">
            <b-card no-body>
                <b-card-header class="align-items-center d-flex">
                    <b-card-title title-tag="h6" class="mb-0 flex-grow-1">Sync Status Breakdown</b-card-title>
                    <div class="dropdown card-header-dropdown flex-shrink-0">
                        <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="text-muted">This Month<i class="mdi mdi-chevron-down ms-1"></i></span>
                        </b-link>
                        <div class="dropdown-menu dropdown-menu-end">
                            <b-link class="dropdown-item" href="#">This Month</b-link>
                            <b-link class="dropdown-item" href="#">Last Month</b-link>
                        </div>
                    </div>
                </b-card-header>
                <b-card-body>
                    <apexchart class="apex-charts" height="350" dir="ltr" :series="syncStatusBreakdownChart.series" :options="syncStatusBreakdownChart.chartOptions"></apexchart>
                </b-card-body>
            </b-card>
        </b-col>

        <b-col xxl="4">
            <b-card no-body>
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
                                            <count-to :startVal="0" :duration="5000" :endVal="750.36" decimals="2" suffix="M" prefix="$"></count-to>

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
                                        <span class="avatar-title bg-light text-light-emphasis rounded-circle fs-3">
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

                            <b-card no-body class="shadow-none border-top border-md-0 rounded-0 mb-0">
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
    </b-row>

    <b-row>
        <SalesbyCountries />
        <b-col xl="3" lg="6">
            <b-card no-body>
                <b-card-header class="align-items-center d-flex">
                    <b-card-title title-tag="h6" class="mb-0 flex-grow-1">Realized Rate</b-card-title>
                    <div class="dropdown card-header-dropdown flex-shrink-0">
                        <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="bi bi-three-dots-vertical"></i>
                        </b-link>
                        <div class="dropdown-menu dropdown-menu-end">
                            <b-link class="dropdown-item" href="#">Current Years</b-link>
                            <b-link class="dropdown-item" href="#">Last Years</b-link>
                        </div>
                    </div>
                </b-card-header>
                <b-card-body>
                    <apexchart class="apex-charts" height="360" dir="ltr" :series="realizedRateChart.series" :options="realizedRateChart.chartOptions"></apexchart>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xl="3" lg="6">
            <b-card no-body>
                <b-card-header class="align-items-center d-flex">
                    <b-card-title title-tag="h6" class="mb-0 flex-grow-1">Email Sent</b-card-title>
                    <div class="dropdown card-header-dropdown flex-shrink-0">
                        <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="bi bi-three-dots-vertical"></i>
                        </b-link>
                        <div class="dropdown-menu dropdown-menu-end">
                            <b-link class="dropdown-item" href="#">Current Years</b-link>
                            <b-link class="dropdown-item" href="#">Last Years</b-link>
                        </div>
                    </div>
                </b-card-header>
                <b-card-body>
                    <apexchart class="apex-charts" height="390" dir="ltr" :series="emailSentChart.series" :options="emailSentChart.chartOptions"></apexchart>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</Layout>
</template>
