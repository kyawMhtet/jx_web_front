<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";
import ActiveUsers from "./ActiveUsers.vue";
import { CountTo } from "vue3-count-to";
import { pageViewChart, clicksChart, conversationsChart, salesReportChart, totalSessionsChart, avgVisitDurationChart, impressionsChart, totalViewsChart, timeOnSalesChart, goalCompletionsChart, bounceRateChart, newSessionsChart } from "./chartsData";

import chrome from "../../../../images/brands/chrome.png";
import firefox from "../../../../images/brands/firefox.png";
import safari from "../../../../images/brands/safari.png";
import opera from "../../../../images/brands/opera.png";
import microsoft from "../../../../images/brands/microsoft.png";
import microsoft2 from "../../../../images/brands/microsoft2.png";
import chromium from "../../../../images/brands/chromium.png";

export default {
    data() {
        return {
            title: "Analytics",
            items: [
                {
                    text: "Dashboards",
                    href: "/",
                },
                {
                    text: "Analytics",
                    active: true,
                },
            ],
            chrome, firefox, safari, opera, microsoft2, chromium, microsoft,
            pageViewChart: pageViewChart,
            clicksChart: clicksChart,
            conversationsChart: conversationsChart,
            salesReportChart: salesReportChart,
            totalSessionsChart: totalSessionsChart,
            avgVisitDurationChart: avgVisitDurationChart,
            impressionsChart: impressionsChart,
            totalViewsChart: totalViewsChart,
            timeOnSalesChart: timeOnSalesChart,
            goalCompletionsChart: goalCompletionsChart,
            bounceRateChart: bounceRateChart,
            newSessionsChart: newSessionsChart
        };
    },
    components: {
        Layout,
        PageHeader,
        CountTo,
        ActiveUsers
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <b-row>
            <b-col xl="3" sm="6">
                <b-card no-body>
                    <b-card-body>
                        <div class="dropdown float-end">
                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
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
                                    <count-to :startVal="0" :duration="5000" :endVal="368.24" decimals="2" suffix="k"></count-to> </h3>
                                <p class="text-success mb-0"><i class="bi bi-arrow-up me-1"></i> 06.41% Last Month</p>
                            </b-col>
                            <b-col lg="6">
                                <apexchart class="apex-charts m-n3 mt-n4" height="124" dir="ltr" :series="totalSessionsChart.series"
                                    :options="totalSessionsChart.chartOptions"></apexchart>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="3" sm="6">
                <b-card no-body>
                    <b-card-body>
                        <div class="dropdown float-end">
                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
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
                                <h3 class="mb-4"><count-to :startVal="0" :duration="5000" :endVal="1.47" decimals="2"
                                        suffix="sec"></count-to> </h3>
                                <p class="text-success mb-0"><i class="bi bi-arrow-up me-1"></i> 13% Last Month</p>
                            </b-col>
                            <b-col lg="6">
                                <apexchart class="apex-charts m-n3 mt-n4" height="124" dir="ltr" :series="avgVisitDurationChart.series"
                                    :options="avgVisitDurationChart.chartOptions"></apexchart>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="3" sm="6">
                <b-card no-body>
                    <b-card-body>
                        <div class="dropdown float-end">
                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
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
                                <h3 class="mb-4"><count-to :startVal="0" :duration="5000" :endVal="1647"></count-to></h3>
                                <p class="text-danger mb-0"><i class="bi bi-arrow-down me-1"></i> 07.26% Last Week</p>
                            </b-col>
                            <b-col lg="6">
                                <apexchart class="apex-charts m-n3 mt-n4" height="124" dir="ltr" :series="impressionsChart.series"
                                    :options="impressionsChart.chartOptions"></apexchart>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="3" sm="6">
                <b-card no-body>
                    <b-card-body>
                        <div class="dropdown float-end">
                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
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
                                <h3 class="mb-4"><count-to :startVal="0" :duration="5000" :endVal="291.32" decimals="2"
                                        suffix="k"></count-to> </h3>
                                <p class="text-success mb-0"><i class="bi bi-arrow-up me-1"></i> 13% Last Month</p>
                            </b-col>
                            <b-col lg="6">
                                <apexchart class="apex-charts m-n3 mt-n4" height="124" dir="ltr" :series="totalViewsChart.series"
                                    :options="totalViewsChart.chartOptions"></apexchart>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="8">
                <b-card no-body>
                    <b-card-header class="d-flex align-items-center flex-wrap gap-3">
                        <b-card-title title-tag="h5" class="mb-0 flex-grow-1">Performance Overview</b-card-title>
                        <ul class="nav nav-pills flex-shrink-0" role="tablist">
                            <li class="nav-item" role="presentation">
                                <b-link class="nav-link active" data-bs-toggle="tab" href="#pageViews" role="tab"
                                    aria-selected="true">
                                    Pageviews
                                </b-link>
                            </li>
                            <li class="nav-item" role="presentation">
                                <b-link class="nav-link" data-bs-toggle="tab" href="#Clicks" role="tab" aria-selected="false"
                                    tabindex="-1">
                                    Clicks
                                </b-link>
                            </li>
                            <li class="nav-item" role="presentation">
                                <b-link class="nav-link" data-bs-toggle="tab" href="#conversations" role="tab"
                                    aria-selected="false" tabindex="-1">
                                    Conversations
                                </b-link>
                            </li>
                        </ul>
                    </b-card-header>
                    <b-card-body class="ps-0">
                        <div class="tab-content text-muted">
                            <div class="tab-pane active" id="pageViews" role="tabpanel">
                                <apexchart class="apex-charts" height="373" dir="ltr" :redrawOnWindowResize="true" :series="pageViewChart.series" :options="pageViewChart.chartOptions"></apexchart>
                            </div>
                            <div class="tab-pane" id="Clicks" role="tabpanel">
                                <apexchart class="apex-charts" height="373" dir="ltr" :series="clicksChart.series"
                                    :options="clicksChart.chartOptions"></apexchart>
                            </div>
                            <div class="tab-pane" id="conversations" role="tabpanel">
                                <apexchart class="apex-charts" height="373" dir="ltr" :series="conversationsChart.series"
                                    :options="conversationsChart.chartOptions"></apexchart>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="4">
                <b-card no-body class="card-height-100" id="networks">
                    <b-card-header class="d-flex">
                        <b-card-title title-tag="h5" class="mb-0 flex-grow-1">Browser Usage</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="dropdown card-header-dropdown sortble-dropdown">
                                <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <span class="text-muted dropdown-title">Order Date</span> <i
                                        class="mdi mdi-chevron-down ms-1"></i>
                                </b-link>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <b-link class="dropdown-item sort" data-sort="browsers">Browsers</b-link>
                                    <b-link class="dropdown-item sort" data-sort="click">Click</b-link>
                                    <b-link class="dropdown-item sort" data-sort="pageviews">Bounce Rate</b-link>
                                </div>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="table-responsive mb-0">
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
                                            <span class="ms-2 browsers">Google Chrome</span>
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
                                            <span class="ms-2 browsers">Firefox</span>
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
                                            <span class="ms-2 browsers">Safari</span>
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
                                            <span class="ms-2 browsers">Opera</span>
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
                                            <span class="ms-2 browsers">Microsoft Edge</span>
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
                                            <span class="ms-2 browsers">Internet Explorer</span>
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
                                            <span class="ms-2 browsers">Chromium</span>
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
        </b-row>

        <b-row>
            <ActiveUsers />
            <b-col xl="3">
                <b-card no-body class="card-height-100" id="top-Pages">
                    <b-card-header class="d-flex align-items-center">
                        <b-card-title title-tag="h5" class="mb-0 flex-grow-1">Top Pages</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="dropdown card-header-dropdown">
                                <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <span class="text-muted fs-lg"><i class="mdi mdi-dots-vertical align-middle"></i></span>
                                </b-link>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <b-link class="dropdown-item sort" data-sort="activePage" href="#!">Active Page</b-link>
                                    <b-link class="dropdown-item sort" data-sort="pageUsers" href="#!">Users</b-link>
                                </div>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="table-responsive">
                            <table class="table align-middle table-borderless table-centered table-nowrap mb-0">
                                <thead class="text-muted table-light">
                                    <tr>
                                        <th scope="col" class="sort cursor-pointer" data-sort="activePage"
                                            style="width: 62;">Active Page</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="activePageNo">Active</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="pageUsers">Users</th>
                                    </tr>
                                </thead>
                                <tbody class="list">
                                    <tr>
                                        <td>
                                            <b-link href="#" class="activePage text-reset">/themesbrand/velzon</b-link>
                                        </td>
                                        <td class="activePageNo">299</td>
                                        <td class="pageUsers">25.3%</td>
                                    </tr><!-- end -->
                                    <tr>
                                        <td>
                                            <b-link href="#" class="activePage text-reset">/skote/index.html</b-link>
                                        </td>
                                        <td class="activePageNo">240</td>
                                        <td class="pageUsers">22.7%</td>
                                    </tr><!-- end -->
                                    <tr>
                                        <td>
                                            <b-link href="#" class="activePage text-reset">/hybrix/timeline</b-link>
                                        </td>
                                        <td class="activePageNo">190</td>
                                        <td class="pageUsers">18.7%</td>
                                    </tr><!-- end -->
                                    <tr>
                                        <td>
                                            <b-link href="#" class="activePage text-reset">/themesbrand/minia</b-link>
                                        </td>
                                        <td class="activePageNo">135</td>
                                        <td class="pageUsers">14.2%</td>
                                    </tr><!-- end -->
                                    <tr>
                                        <td>
                                            <b-link href="#" class="activePage text-reset">/dashon/dashboard</b-link>
                                        </td>
                                        <td class="activePageNo">118</td>
                                        <td class="pageUsers">12.6%</td>
                                    </tr><!-- end -->
                                    <tr>
                                        <td>
                                            <b-link href="#" class="activePage text-reset">/doot/chats</b-link>
                                        </td>
                                        <td class="activePageNo">90</td>
                                        <td class="pageUsers">10.9%</td>
                                    </tr><!-- end -->
                                    <tr>
                                        <td>
                                            <b-link href="#" class="activePage text-reset">/steex/learning</b-link>
                                        </td>
                                        <td class="activePageNo">75</td>
                                        <td class="pageUsers">07.3%</td>
                                    </tr><!-- end -->
                                </tbody><!-- end tbody -->
                            </table>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="4">
                <b-card no-body class="card-height-100 border-0 overflow-hidden">
                    <b-card-body class="p-0">
                        <b-row class="g-0">
                            <b-col md="6">
                                
                                <b-card no-body class="shadow-none border-end-md border-bottom rounded-0 mb-0">
                                    <b-card-body>
                                        <div class="dropdown float-end">
                                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                                <span class="text-muted fs-lg"><i
                                                        class="mdi mdi-dots-vertical align-middle"></i></span>
                                            </b-link>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <b-link class="dropdown-item" href="#">Today</b-link>
                                                <b-link class="dropdown-item" href="#">Last Week</b-link>
                                                <b-link class="dropdown-item" href="#">Last Month</b-link>
                                                <b-link class="dropdown-item" href="#">Current Year</b-link>
                                            </div>
                                        </div>
                                        <apexchart height="100" width="50" dir="ltr"
                                            :series="timeOnSalesChart.series" :options="timeOnSalesChart.chartOptions">
                                        </apexchart>
                                        <div class="mt-2">
                                            <p class="text-uppercase fw-medium text-muted text-truncate fs-sm">Time on Sale
                                            </p>
                                            <h4 class="fw-semibold mb-3">
                                                <count-to :startVal="0" :duration="5000" :endVal="32" suffix="M"></count-to>{{ " " }}
                                                <count-to :startVal="0" :duration="5000" :endVal="12" suffix="s"></count-to>
                                            </h4>
                                            <div class="d-flex align-items-center gap-2">
                                                <h5 class="text-success flex-shrink-0 fs-xs mb-0">
                                                    <i class="ri-arrow-right-up-line fs-sm align-middle"></i> +21.36 %
                                                </h5>
                                                <div class="flex-grow-1 overflow-hidden">
                                                    <p class="text-muted text-truncate mb-0">Analytics for last week</p>
                                                </div>
                                            </div>
                                        </div>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                            <b-col md="6">
                                
                                <b-card no-body class="shadow-none border-bottom rounded-0 mb-0">
                                    <b-card-body>
                                        <div class="dropdown float-end">
                                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                                <span class="text-muted fs-lg"><i
                                                        class="mdi mdi-dots-vertical align-middle"></i></span>
                                            </b-link>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <b-link class="dropdown-item" href="#">Today</b-link>
                                                <b-link class="dropdown-item" href="#">Last Week</b-link>
                                                <b-link class="dropdown-item" href="#">Last Month</b-link>
                                                <b-link class="dropdown-item" href="#">Current Year</b-link>
                                            </div>
                                        </div>
                                        <apexchart height="100" width="50" dir="ltr"
                                            :series="goalCompletionsChart.series"
                                            :options="goalCompletionsChart.chartOptions"></apexchart>
                                        <div class="mt-2">
                                            <p class="text-uppercase fw-medium text-muted text-truncate fs-sm">Goal
                                                Completions</p>
                                            <h4 class="fw-semibold mb-3">
                                                <count-to :startVal="0" :duration="5000" :endVal="254157"></count-to>
                                            </h4>
                                            <div class="d-flex align-items-center gap-2">
                                                <h5 class="text-success flex-shrink-0 fs-xs mb-0">
                                                    <i class="ri-arrow-right-up-line fs-sm align-middle"></i> +6.30 %
                                                </h5>
                                                <div class="flex-grow-1 overflow-hidden">
                                                    <p class="text-muted text-truncate mb-0">Analytics for last week</p>
                                                </div>
                                            </div>
                                        </div>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                            <b-col md="6">
                                
                                <b-card no-body class="shadow-none border-end-md rounded-0 mb-0">
                                    <b-card-body>
                                        <div class="dropdown float-end">
                                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                                <span class="text-muted fs-lg"><i
                                                        class="mdi mdi-dots-vertical align-middle"></i></span>
                                            </b-link>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <b-link class="dropdown-item" href="#">Today</b-link>
                                                <b-link class="dropdown-item" href="#">Last Week</b-link>
                                                <b-link class="dropdown-item" href="#">Last Month</b-link>
                                                <b-link class="dropdown-item" href="#">Current Year</b-link>
                                            </div>
                                        </div>
                                        <apexchart height="100" width="50" dir="ltr"
                                            :series="bounceRateChart.series" :options="bounceRateChart.chartOptions">
                                        </apexchart>
                                        <div class="mt-2">
                                            <p class="text-uppercase fw-medium text-muted text-truncate fs-sm">Bounce Rate
                                            </p>
                                            <h4 class="fw-semibold mb-3">
                                                <count-to :startVal="0" :duration="5000" :endVal="68" suffix="%"></count-to>
                                            </h4>
                                            <div class="d-flex align-items-center gap-2">
                                                <h5 class="text-danger flex-shrink-0 fs-xs mb-0">
                                                    <i class="ri-arrow-right-down-line fs-sm align-middle"></i> +2.01 %
                                                </h5>
                                                <div class="flex-grow-1 overflow-hidden">
                                                    <p class="text-muted text-truncate mb-0">Analytics for last week</p>
                                                </div>
                                            </div>
                                        </div>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                            <b-col md="6">
                                
                                <b-card no-body class="shadow-none border-top border-top-md-0 rounded-0 mb-0">
                                    <b-card-body>
                                        <div class="dropdown float-end">
                                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                                <span class="text-muted fs-lg"><i
                                                        class="mdi mdi-dots-vertical align-middle"></i></span>
                                            </b-link>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <b-link class="dropdown-item" href="#">Today</b-link>
                                                <b-link class="dropdown-item" href="#">Last Week</b-link>
                                                <b-link class="dropdown-item" href="#">Last Month</b-link>
                                                <b-link class="dropdown-item" href="#">Current Year</b-link>
                                            </div>
                                        </div>
                                        <apexchart height="100" width="50" dir="ltr"
                                            :series="newSessionsChart.series" :options="newSessionsChart.chartOptions">
                                        </apexchart>
                                        <div class="mt-2">
                                            <p class="text-uppercase fw-medium text-muted text-truncate fs-sm">New Sessions
                                            </p>
                                            <h4 class="fw-semibold mb-3">
                                                <count-to :startVal="0" :duration="5000" :endVal="32548"></count-to>
                                            </h4>
                                            <div class="d-flex align-items-center gap-2">
                                                <h5 class="text-success flex-shrink-0 fs-xs mb-0">
                                                    <i class="ri-arrow-right-up-line fs-sm align-middle"></i> +10.42 %
                                                </h5>
                                                <div class="flex-grow-1 overflow-hidden">
                                                    <p class="text-muted text-truncate mb-0">than last week</p>
                                                </div>
                                            </div>
                                        </div>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                        </b-row> 
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="4">
                <b-card no-body class="card-height-100">
                    <b-card-header class="d-flex align-items-center">
                        <b-card-title title-tag="h5" class="mb-0 flex-grow-1">Sales Report</b-card-title>
                        <div class="flex-shrink-0">
                            <b-button type="button" variant="subtle-info" size="sm"><i
                                    class="bi bi-file-earmark-text me-1 align-baseline"></i> Generate Reports</b-button>
                        </div>
                    </b-card-header>
                    <b-card-body class="pb-0">
                        <h4>
                            <count-to :startVal="0" :duration="5000" :endVal="452.32" decimals="2" prefix="$"
                                suffix="M"></count-to>
                            <span class="text-success fw-normal fs-sm ms-1"><i class="bi bi-arrow-up"></i> +23.57%</span>
                        </h4>
                        <p class="text-muted mb-0">($215.32 Avg. revenue monthly)</p>
                    </b-card-body>
                    <b-card-body class="pt-0 pb-2 ps-0 mt-2 mt-lg-n3">
                        <apexchart class="apex-charts" height="333" dir="ltr" :series="salesReportChart.series"
                            :options="salesReportChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="4">
                <b-card no-body class="card-height-100">
                    <b-card-header class="d-flex align-items-center">
                        <b-card-title title-tag="h5" class="mb-0 flex-grow-1">Earning</b-card-title>
                        <div class="dropdown card-header-dropdown">
                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <span class="text-muted fs-lg"><i class="mdi mdi-dots-vertical align-middle"></i></span>
                            </b-link>
                            <div class="dropdown-menu dropdown-menu-end">
                                <b-link class="dropdown-item" href="#">Current Years</b-link>
                                <b-link class="dropdown-item" href="#">Last Years</b-link>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="p-3 text-center bg-light-subtle mb-4 rounded">
                            <h4 class="mb-0">
                                <count-to :startVal="0" :duration="5000" :endVal="314.57" decimals="2" prefix="$"
                                    suffix="M"></count-to>
                                <span class="text-muted fw-normal fs-sm ms-1"><span class="text-success fw-medium"><i
                                            class="bi bi-arrow-up"></i> +23.57%</span> Last Month</span>
                            </h4>
                        </div>
                        <div class="progress progress-bar-animated">
                            <div class="progress-bar" role="progressbar" data-bs-toggle="tooltip"
                                data-bs-title="Product Development (28%)" style="width: 28%" aria-valuenow="28"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress-bar bg-secondary" role="progressbar" data-bs-toggle="tooltip"
                                data-bs-title="Startup Business (15%)" style="width: 15%" aria-valuenow="15"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress-bar bg-info" role="progressbar" data-bs-toggle="tooltip"
                                data-bs-title="Corporate Design (20%)" style="width: 20%" aria-valuenow="20"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress-bar bg-light" role="progressbar" data-bs-toggle="tooltip"
                                data-bs-title="Develop Project (18%)" style="width: 18%" aria-valuenow="18"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress-bar bg-success" role="progressbar" data-bs-toggle="tooltip"
                                data-bs-title="Prototype (13%)" style="width: 13%" aria-valuenow="13" aria-valuemin="0"
                                aria-valuemax="100"></div>
                            <div class="progress-bar bg-warning" role="progressbar" data-bs-toggle="tooltip"
                                data-bs-title="Design (8%)" style="width: 8%" aria-valuenow="8" aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <ul class="list-unstyled mt-4 pt-2 vstack gap-3">
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <i class="bi bi-circle-square text-primary me-2"></i> Product Development
                                    </div>
                                    <div class="flex-shrink-0">
                                        28%
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <i class="bi bi-circle-square text-secondary me-2"></i> Startup Business
                                    </div>
                                    <div class="flex-shrink-0">
                                        15%
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <i class="bi bi-circle-square text-info me-2"></i> Corporate Design
                                    </div>
                                    <div class="flex-shrink-0">
                                        20%
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <i class="bi bi-circle-square text-light me-2"></i> Develop Project
                                    </div>
                                    <div class="flex-shrink-0">
                                        18%
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <i class="bi bi-circle-square text-success me-2"></i> Prototype
                                    </div>
                                    <div class="flex-shrink-0">
                                        13%
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <i class="bi bi-circle-square text-warning me-2"></i> Design
                                    </div>
                                    <div class="flex-shrink-0">
                                        8%
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="text-center">
                            <b-link href="#!" class="link-secondary fw-medium link-effect">View All Earning <i
                                    class="bi bi-arrow-right align-baseline ms-1"></i></b-link>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>