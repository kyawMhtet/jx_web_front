<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";
import { CountTo } from "vue3-count-to";
import { SimpleBar } from "simplebar-vue3";
import { realizedRateChart, balanceOverviewChart, emailSentChart, usersActivityChart, syncStatusBreakdownChart } from "./chartsData";

// avatar imgs
import avatar2 from "../../../../images/users/48/avatar-2.jpg";
import avatar3 from "../../../../images/users/48/avatar-3.jpg";
import avatar4 from "../../../../images/users/48/avatar-4.jpg";
import avatar5 from "../../../../images/users/48/avatar-5.jpg";
import avatar6 from "../../../../images/users/48/avatar-6.jpg";
import avatar7 from "../../../../images/users/48/avatar-7.jpg";
import avatar8 from "../../../../images/users/48/avatar-8.jpg";
import avatar9 from "../../../../images/users/48/avatar-9.jpg";
import avatar10 from "../../../../images/users/48/avatar-10.jpg";

export default {
    data() {
        return {
            title: "CRM",
            items: [
                {
                    text: "Dashboards",
                    href: "/",
                },
                {
                    text: "CRM",
                    active: true,
                },
            ],
            avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10,
            realizedRateChart: realizedRateChart,
            balanceOverviewChart: balanceOverviewChart,
            emailSentChart: emailSentChart,
            usersActivityChart: usersActivityChart,
            syncStatusBreakdownChart: syncStatusBreakdownChart,
            page: 1,
            perPage: 5,
            pages: [],
            contactData: [
                {
                    img: avatar2,
                    name: 'Buck Roberts',
                    phoneNumber: '(11) 3885-1022',
                    score: '234',
                    location: 'Guarulhos, Brazil',
                    date: '17 Mar, 2023'
                },
                {
                    img: avatar3,
                    name: 'Josefa Weissnat',
                    phoneNumber: '(53) 3035-3100',
                    score: '418',
                    location: 'California, USA',
                    date: '15Mar, 2023'
                },
                {
                    img: avatar5,
                    name: 'Jacinthe Will',
                    phoneNumber: '(33) 3521-6761',
                    score: '357',
                    location: 'Brasília, Brazil',
                    date: '11 Mar, 2023'
                },
                {
                    img: avatar6,
                    name: 'Donnell Schultz',
                    phoneNumber: '(51) 3233-7909',
                    score: '631',
                    location: 'Natal, Brazil',
                    date: '29 Feb, 2023'
                },
                {
                    img: avatar7,
                    name: 'Xander Wyman',
                    phoneNumber: '(48) 3877-9000',
                    score: '249',
                    location: 'Logrono, Spain',
                    date: '24 Feb, 2023'
                },
                {
                    img: avatar8,
                    name: 'Buck Roberts',
                    phoneNumber: '(92) 3639-8685',
                    score: '176',
                    location: 'Ibiza, Spain',
                    date: '27 Jan, 2023'
                },
                {
                    img: avatar9,
                    name: 'Federico Hand',
                    phoneNumber: '(11) 3666-9716',
                    score: '176',
                    location: 'San Luis Potosi, Mexico',
                    date: '21 Dec, 2022'
                },
            ]
        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.contactData);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.title.toLowerCase().includes(search)
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        contactData() {
            this.setPages();
        },
    },
    created() {
        this.setPages();
    },
    methods: {
        setPages() {
            let numberOfPages = Math.ceil(this.contactData.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(contactData) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return contactData.slice(from, to);
        }
    },
    components: {
        Layout,
        PageHeader,
        CountTo,
        SimpleBar
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
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
                            <count-to :startVal="0" :duration="5000" :endVal="368.24" decimals="2" prefix="$"
                                suffix="M"></count-to>
                        </h4>
                        <p class="text-muted mb-4">Annual Profit</p>
                        <p class="text-muted mb-0"><span class="badge bg-success-subtle text-success"><i
                                    class="bi bi-arrow-up"></i> 4.65%</span> vs last month</p>
                    </b-card-body>
                    <div class="progress progress-sm rounded-0" role="progressbar" aria-valuenow="76" aria-valuemin="0"
                        aria-valuemax="100">
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
                            <count-to :startVal="0" :duration="5000" :endVal="1454.71" decimals="2" prefix="$"
                                suffix="k"></count-to>
                        </h4>
                        <p class="text-muted mb-4">Daily average income</p>
                        <p class="text-muted mb-0"><span class="badge bg-success-subtle text-success"><i
                                    class="bi bi-arrow-up"></i> 1.33%</span> vs last month</p>
                    </b-card-body>
                    <div class="progress progress-sm rounded-0" role="progressbar" aria-valuenow="88" aria-valuemin="0"
                        aria-valuemax="100">
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
                        <p class="text-muted mb-0"><span class="badge bg-success-subtle text-success"><i
                                    class="bi bi-arrow-up"></i> 2.69%</span> vs last month</p>
                    </b-card-body>
                    <div class="progress progress-sm rounded-0" role="progressbar" aria-valuenow="18" aria-valuemin="0"
                        aria-valuemax="100">
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
                        <p class="text-muted mb-0"><span class="badge bg-danger-subtle text-danger"><i
                                    class="bi bi-arrow-down"></i> 0.78%</span> vs last month</p>
                    </b-card-body>
                    <div class="progress progress-sm rounded-0" role="progressbar" aria-valuenow="49" aria-valuemin="0"
                        aria-valuemax="100">
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
                        <p class="text-muted mb-0"><span class="badge bg-success-subtle text-success"><i
                                    class="bi bi-arrow-up"></i> 7.93%</span> vs last month</p>
                    </b-card-body>
                    <div class="progress progress-sm rounded-0" role="progressbar" aria-valuenow="83" aria-valuemin="0"
                        aria-valuemax="100">
                        <div class="progress-bar bg-warning" style="width: 83%"></div>
                    </div>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="3">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title title-tag="h6" class="mb-0 flex-grow-1">Realized Rate</b-card-title>
                        <div class="dropdown card-header-dropdown flex-shrink-0">
                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i class="bi bi-three-dots-vertical"></i>
                            </b-link>
                            <div class="dropdown-menu dropdown-menu-end">
                                <b-link class="dropdown-item" href="#">Current Years</b-link>
                                <b-link class="dropdown-item" href="#">Last Years</b-link>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="403" dir="ltr" :series="realizedRateChart.series"
                            :options="realizedRateChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="9">
                <b-card no-body class="card-height-100">
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title title-tag="h6" class="mb-0 flex-grow-1">Balance Overview</b-card-title>
                        <div>
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
                    <b-card-body>
                        <apexchart class="apex-charts ms-n3" height="300" dir="ltr" :series="balanceOverviewChart.series"
                            :options="balanceOverviewChart.chartOptions"></apexchart>

                        <div class="table-responsive table-card mb-0 mt-2">
                            <table class="table table-sm table-borderless align-middle text-center mb-0 table-nowrap">
                                <tbody>
                                <tr>
                                    <td class="text-start"><i
                                            class="bi bi-diamond-fill align-baseline me-1 text-primary"></i> Total Revenue
                                    </td>
                                    <th>$795.69k</th>
                                    <td class="text-muted"><span class="text-success"><i
                                                class="bi bi-caret-up-fill align-baseline me-1"></i> 6.19%</span> than last
                                        years</td>
                                    <td class="text-end" style="width: 150px;"><b-link href="#!"
                                            class="icon-link icon-link-hover text-decoration-underline link-underline link-underline-opacity-0 link-underline-opacity-75-hover">View
                                            All <i class="bi bi-arrow-right"></i></b-link></td>
                                </tr>
                                <tr>
                                    <td class="text-start"><i class="bi bi-diamond-fill align-baseline me-1 text-light"></i>
                                        Total Expenses</td>
                                    <th>$415.37k</th>
                                    <td class="text-muted"><span class="text-success"><i
                                                class="bi bi-caret-up-fill align-baseline me-1"></i> 3.62%</span> than last
                                        years</td>
                                    <td class="text-end" style="width: 150px;"><b-link href="#!"
                                            class="icon-link icon-link-hover text-decoration-underline link-underline link-underline-opacity-0 link-underline-opacity-75-hover">View
                                            All <i class="bi bi-arrow-right"></i></b-link></td>
                                </tr>
                                <tr>
                                    <td class="text-start"><i
                                            class="bi bi-diamond-fill align-baseline me-1 text-secondary"></i> Profit Ratio
                                    </td>
                                    <th>3.6%</th>
                                    <td class="text-muted"><span class="text-danger"><i
                                                class="bi bi-caret-down-fill align-baseline me-1"></i> 1.47%</span> than
                                        last years</td>
                                    <td class="text-end" style="width: 150px;"><b-link href="#!"
                                            class="icon-link icon-link-hover text-decoration-underline link-underline link-underline-opacity-0 link-underline-opacity-75-hover">View
                                            All <i class="bi bi-arrow-right"></i></b-link></td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="6">
                <b-card no-body id="leadsList">
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Contact Leads</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="dropdown card-header-dropdown sortble-dropdown">
                                <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <span class="fw-semibold text-uppercase fs-12">Sort by:
                                    </span><span class="text-muted dropdown-title">Leads Score</span> <i
                                        class="mdi mdi-chevron-down ms-1"></i>
                                </b-link>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <b-link href="#" class="dropdown-item sort" data-sort="leads_score">Leads Score</b-link>
                                    <b-link href="#" class="dropdown-item sort" data-sort="contact_name">Contact Name</b-link>
                                    <b-link href="#" class="dropdown-item sort" data-sort="phone_number">Phone Number</b-link>
                                </div>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="table-responsive table-card my-0">
                            <table class="table table-borderless table-centered align-middle table-nowrap mb-0">
                                <thead class="text-muted table-light">
                                    <tr>
                                        <th scope="col" class="sort cursor-pointer" data-sort="contact_name">Contact Name
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="phone_number">Phone Number
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="leads_score">Leads Score</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="location">Location</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="create_date">Create Date</th>
                                    </tr>
                                </thead>
                                <tbody class="list">
                                    <tr v-for="(data, index) of resultQuery" :key="index">
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <img :src="data.img" alt="react.png" class="avatar-xxs rounded" />
                                                <router-link to="/pages/profile" class="text-reset contact_name">
                                                    {{ data.name }}
                                                </router-link>
                                            </div>
                                        </td>
                                        <td class="phone_number">{{ data.phoneNumber }}</td>
                                        <td class="leads_score">{{ data.score }}</td>
                                        <td class="location">{{ data.location }}</td>
                                        <td class="create_date">{{ data.date }}</td>
                                    </tr>
                                </tbody><!-- end tbody -->
                            </table>
                        </div>
                        <div class="align-items-center mt-2 pt-2 row">
                            <b-col cols="sm">
                                <div class="text-muted text-center text-sm-start">
                                    Showing <span class="fw-semibold">{{ displayedPosts.length }}</span> of <span
                                        class="fw-semibold">{{ contactData.length }}</span>
                                    Results
                                </div>
                            </b-col>
                            <b-col sm="auto" class="mt-3 mt-sm-0">
                                <div class="pagination-wrap pagination-sm hstack gap-2 justify-content-center">
                                    <b-link class="page-item pagination-prev" href="#" :disabled="page <= 1"
                                        @click="page--">
                                        <i class="bi bi-arrow-left"></i>
                                    </b-link>
                                    <ul class="pagination listjs-pagination mb-0">
                                        <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
                                            v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                                            <b-link class="page" href="#" data-i="1" data-page="10">{{ pageNumber }}</b-link>
                                        </li>
                                    </ul>
                                    <b-link class="page-item pagination-next" href="#"
                                    :disabled="page >= pages.length" @click="page++">
                                        <i class="bi bi-arrow-right"></i>
                                    </b-link>
                                </div>
                            </b-col>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="3" lg="6">
                <b-card no-body class="card-height-100">
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title title-tag="h6" class="mb-0 flex-grow-1">Email Sent</b-card-title>
                        <div class="dropdown card-header-dropdown flex-shrink-0">
                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i class="bi bi-three-dots-vertical"></i>
                            </b-link>
                            <div class="dropdown-menu dropdown-menu-end">
                                <b-link class="dropdown-item" href="#">Current Years</b-link>
                                <b-link class="dropdown-item" href="#">Last Years</b-link>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="365" dir="ltr" :series="emailSentChart.series"
                            :options="emailSentChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="3" lg="6">
                <b-card no-body class="card-height-100">
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title title-tag="h6" class="mb-0 flex-grow-1">Users Activity</b-card-title>
                        <div class="dropdown card-header-dropdown flex-shrink-0">
                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <span class="text-muted">This Month<i class="mdi mdi-chevron-down ms-1"></i></span>
                            </b-link>
                            <div class="dropdown-menu dropdown-menu-end">
                                <b-link class="dropdown-item" href="#">This Month</b-link>
                                <b-link class="dropdown-item" href="#">Last Month</b-link>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="330" dir="ltr" :series="usersActivityChart.series"
                            :options="usersActivityChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="4">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title title-tag="h6" class="mb-0 flex-grow-1">Sync Status Breakdown</b-card-title>
                        <div class="dropdown card-header-dropdown flex-shrink-0">
                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <span class="text-muted">This Month<i class="mdi mdi-chevron-down ms-1"></i></span>
                            </b-link>
                            <div class="dropdown-menu dropdown-menu-end">
                                <b-link class="dropdown-item" href="#">This Month</b-link>
                                <b-link class="dropdown-item" href="#">Last Month</b-link>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="syncStatusBreakdownChart.series"
                            :options="syncStatusBreakdownChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="4">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title title-tag="h6" class="mb-0 flex-grow-1">Open Deals</b-card-title>
                        <div class="dropdown card-header-dropdown flex-shrink-0">
                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
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
                    </b-card-header>
                    <b-card-body class="px-0">
                        <SimpleBar data-simplebar class="card-body py-0" style="max-height: 350px;">
                            <div class="vstack gap-2">
                                <div class="py-2 px-3 border border-dashed rounded">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="flex-shrink-0">
                                            <img :src="avatar10" alt="" class="avatar-sm rounded" />
                                        </div>
                                        <div class="flex-grow-1 overflow-hidden">
                                            <h6 class="fs-md text-truncate"><b-link href="#!" class="text-reset">SASS app
                                                    workflow diagram</b-link></h6>
                                            <p class="text-muted mb-0">Closing Deal date 14 Jan, 2023</p>
                                        </div>
                                        <div class="text-end">
                                            <h5 class="fs-md text-primary mb-0">$49.99</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-2 px-3 border border-dashed rounded">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="flex-shrink-0">
                                            <img :src="avatar9" alt=""
                                                class="avatar-sm rounded" />
                                        </div>
                                        <div class="flex-grow-1 overflow-hidden">
                                            <h6 class="fs-md text-truncate"><b-link href="#!" class="text-reset">Steex - Admin
                                                    Dashboard</b-link></h6>
                                            <p class="text-muted mb-0">Closing Deal date 22 April, 2023</p>
                                        </div>
                                        <div class="text-end">
                                            <h5 class="fs-md text-primary mb-0">$132.94</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-2 px-3 border border-dashed rounded">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="flex-shrink-0">
                                            <img :src="avatar8" alt=""
                                                class="avatar-sm rounded" />
                                        </div>
                                        <div class="flex-grow-1 overflow-hidden">
                                            <h6 class="fs-md text-truncate"><b-link href="#!" class="text-reset">Create New
                                                    Components</b-link></h6>
                                            <p class="text-muted mb-0">Closing Deal date 29 April, 2023</p>
                                        </div>
                                        <div class="text-end">
                                            <h5 class="fs-md text-primary mb-0">$349.99</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-2 px-3 border border-dashed rounded">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="flex-shrink-0">
                                            <img :src="avatar7" alt=""
                                                class="avatar-sm rounded" />
                                        </div>
                                        <div class="flex-grow-1 overflow-hidden">
                                            <h6 class="fs-md text-truncate"><b-link href="#!" class="text-reset">New Email Design
                                                    Templates</b-link></h6>
                                            <p class="text-muted mb-0">Closing Deal date 23 March, 2023</p>
                                        </div>
                                        <div class="text-end">
                                            <h5 class="fs-md text-primary mb-0">$258.73</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-2 px-3 border border-dashed rounded">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="flex-shrink-0">
                                            <img :src="avatar6" alt=""
                                                class="avatar-sm rounded" />
                                        </div>
                                        <div class="flex-grow-1 overflow-hidden">
                                            <h6 class="fs-md text-truncate"><b-link href="#!" class="text-reset">Urban Modern
                                                    Design</b-link></h6>
                                            <p class="text-muted mb-0">Closing Deal date 17 March, 2023</p>
                                        </div>
                                        <div class="text-end">
                                            <h5 class="fs-md text-primary mb-0">$374.61</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-2 px-3 border border-dashed rounded">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="flex-shrink-0">
                                            <img :src="avatar4" alt=""
                                                class="avatar-sm rounded" />
                                        </div>
                                        <div class="flex-grow-1 overflow-hidden">
                                            <h6 class="fs-md text-truncate"><b-link href="#!" class="text-reset">Airbnb React
                                                    Development</b-link></h6>
                                            <p class="text-muted mb-0">Closing Deal date 03 Feb, 2023</p>
                                        </div>
                                        <div class="text-end">
                                            <h5 class="fs-md text-primary mb-0">$976.07</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SimpleBar>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="4">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title title-tag="h6" class="mb-0 flex-grow-1">Create Tasks List</b-card-title>
                        <div class="dropdown card-header-dropdown flex-shrink-0">
                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
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
                    </b-card-header>
                    <b-card-body class="px-0">
                        <SimpleBar data-simplebar class="card-body py-0" style="max-height: 350px;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item ps-0">
                                    <div class="d-flex align-items-start">
                                        <div class="form-check ps-0 flex-sharink-0">
                                            <input type="checkbox" class="form-check-input ms-0" id="task_one">
                                        </div>
                                        <div class="flex-grow-1 overflow-hidden">
                                            <label class="form-check-label mb-0 ps-2" for="task_one">
                                                <span class="d-block fw-semibold mb-1 text-truncate">Review and make sure
                                                    nothing slips through cracks</span>
                                                <span class="text-muted d-block">If someone cracks, they lose control of
                                                    their emotions or actions because they are under a lot of
                                                    pressure.</span>
                                            </label>
                                        </div>
                                        <div class="flex-shrink-0 ms-2">
                                            <p class="text-muted fs-xs fw-medium mb-0">15 Sep, 2023</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item ps-0">
                                    <div class="d-flex align-items-start">
                                        <div class="form-check ps-0 flex-sharink-0">
                                            <input type="checkbox" class="form-check-input ms-0" id="task_two">
                                        </div>
                                        <div class="flex-grow-1 overflow-hidden">
                                            <label class="form-check-label mb-0 ps-2" for="task_two">
                                                <span class="d-block fw-semibold mb-1 text-truncate">Send meeting invites
                                                    for sales campaign</span>
                                                <span class="text-muted d-block">I will send you a meeting invite" is
                                                    grammatically incorrect. Invite is a verb and invitation is the
                                                    noun.</span>
                                            </label>
                                        </div>
                                        <div class="flex-shrink-0 ms-2">
                                            <p class="text-muted fs-xs fw-medium mb-0">20 Sep, 2023</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item ps-0">
                                    <div class="d-flex align-items-start">
                                        <div class="form-check flex-sharink-0 ps-0">
                                            <input type="checkbox" class="form-check-input ms-0" id="task_three">
                                        </div>
                                        <div class="flex-grow-1 overflow-hidden">
                                            <label class="form-check-label mb-0 ps-2" for="task_three">
                                                <span class="d-block fw-semibold mb-1 text-truncate">Make a creating an
                                                    account profile</span>
                                                <span class="text-muted d-block">Like any other essay, a profile essay has
                                                    three main parts, the introduction, body, and conclusion.</span>
                                            </label>
                                        </div>
                                        <div class="flex-shrink-0 ms-2">
                                            <p class="text-muted fs-xs fw-medium mb-0">08 Feb, 2023</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item ps-0">
                                    <div class="d-flex align-items-start">
                                        <div class="form-check ps-0 flex-sharink-0">
                                            <input type="checkbox" class="form-check-input ms-0" id="task_four">
                                        </div>
                                        <div class="flex-grow-1 overflow-hidden">
                                            <label class="form-check-label mb-0 ps-2" for="task_four">
                                                <span class="d-block fw-semibold mb-1 text-truncate">Change email option
                                                    process</span>
                                                <span class="text-muted d-block">If people have you saved as something else
                                                    in their contacts, that's the name they'll see.</span>
                                            </label>
                                        </div>
                                        <div class="flex-shrink-0 ms-2">
                                            <p class="text-muted fs-xs fw-medium mb-0">19 Jan, 2023</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item ps-0">
                                    <div class="d-flex align-items-start">
                                        <div class="form-check ps-0 flex-sharink-0">
                                            <input type="checkbox" class="form-check-input ms-0" id="task_five">
                                        </div>
                                        <div class="flex-grow-1 overflow-hidden">
                                            <label class="form-check-label mb-0 ps-2" for="task_five">
                                                <span class="d-block fw-semibold mb-1 text-truncate">Additional
                                                    Calendar</span>
                                                <span class="text-muted d-block">Employees can use shared calendars to
                                                    manage their own assignments and appointments</span>
                                            </label>
                                        </div>
                                        <div class="flex-shrink-0 ms-2">
                                            <p class="text-muted fs-xs fw-medium mb-0">03 Jan, 2023</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </SimpleBar>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>