<script>
import Layout from "../../../layouts/main.vue";
import { SimpleBar } from "simplebar-vue3";
import { CountTo } from "vue3-count-to";
import { totalStudentsChart, totalCoursesChart, dailyProgressChart, learningOverviewChart } from "./chartsData";

import react from "../../../../images/learning/react.png";
import shopify from "../../../../images/learning/shopify.png";
import tailwindcss from "../../../../images/learning/tailwindcss.png";
import laravel from "../../../../images/learning/laravel.png";
import sketch from "../../../../images/learning/sketch.png";
import webpack from "../../../../images/learning/webpack.png";

import avatar1 from "../../../../images/users/avatar-1.jpg";
import avatar2 from "../../../../images/users/avatar-2.jpg";
import avatar3 from "../../../../images/users/avatar-3.jpg";
import avatar4 from "../../../../images/users/avatar-4.jpg";
import avatar5 from "../../../../images/users/avatar-5.jpg";
import avatar6 from "../../../../images/users/avatar-6.jpg";
import avatar7 from "../../../../images/users/avatar-7.jpg";
import avatar8 from "../../../../images/users/avatar-8.jpg";

import logo from "../../../../images/logo-light.png";
import pattern from "../../../../images/effect-pattern/pattern-2.svg";


export default {
    data() {
        return {
            react, shopify, tailwindcss, laravel, sketch, webpack, logo, pattern,
            avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, 
            totalStudentsChart: totalStudentsChart,
            totalCoursesChart: totalCoursesChart,
            dailyProgressChart: dailyProgressChart,
            learningOverviewChart: learningOverviewChart,
            page: 1,
            perPage: 5,
            pages: [],
            coursesData: [
                {
                    id: 1,
                    img: react,
                    coursesName: 'Advanced React and Redux',
                    category: 'React Development',
                    instructor: 'Ayaan Bowen',
                    lessons: '15',
                    duration: '2 Years',
                    fees: '$278.12',
                    status: 'Open',
                    rating: '4.5'
                },
                {
                    id: 2,
                    img: shopify,
                    coursesName: 'The Complete Shopify Dropship course',
                    category: 'Shopify Development',
                    instructor: 'Jansh Brown',
                    lessons: '27',
                    duration: '6 Months',
                    fees: '$149.00',
                    status: 'Open',
                    rating: '4.5'
                },
                {
                    id: 3,
                    img: sketch,
                    coursesName: 'UI/UX Style guide With Sketch',
                    category: 'Graphic Design',
                    instructor: 'Ayaan Bowen',
                    lessons: '16',
                    duration: '3 Months',
                    fees: '$215.00',
                    status: 'Close',
                    rating: '4.9'
                },
                {
                    id: 4,
                    img: webpack,
                    coursesName: 'Digital Marketing',
                    category: 'Marketing & Management',
                    instructor: 'Prezy Mark',
                    lessons: '65',
                    duration: '2 Years',
                    fees: '$199.00',
                    status: 'Open',
                    rating: '4.3'
                },
                {
                    id: 5,
                    img: laravel,
                    coursesName: 'Master Laravel for Beginners & Intermediate',
                    category: 'Laravel Development',
                    instructor: 'Nelson Schaden',
                    lessons: '21',
                    duration: '8 Months',
                    fees: '$379.99',
                    status: 'Close',
                    rating: '4.7'
                },
                {
                    id: 6,
                    img: tailwindcss,
                    coursesName: 'Tailwind CSS From Scratch',
                    category: 'Web Design',
                    instructor: 'Domenic Dach',
                    lessons: '53',
                    duration: '1 Months',
                    fees: '$473.99',
                    status: 'Open',
                    rating: '4.8'
                },
            ]
        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.coursesData);
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
        coursesData() {
            this.setPages();
        },
    },
    created() {
        this.setPages();
    },
    methods: {
        setPages() {
            let numberOfPages = Math.ceil(this.coursesData.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(coursesData) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return coursesData.slice(from, to);
        }
    },
    components: {
        Layout,
        SimpleBar,
        CountTo
    },
};
</script>

<template>
    <Layout>
        <b-row>
            <b-col xxl="9">
                <b-row>
                    <b-col xxl="9">
                        <b-row>
                            <b-col lg="6">
                                <b-card no-body>
                                    <b-card-body>
                                        <span class="badge bg-success-subtle text-success float-end"><i
                                                class="bi bi-arrow-up"></i> 4.65%</span>
                                        <p class="fs-md text-muted mb-4">Total Students</p>
                                        <h3 class="mb-n3">
                                            <count-to :startVal="0" :duration="5000" :endVal="4879" suffix="k"></count-to>
                                        </h3>
                                        <apexchart class="apex-charts" height="95" dir="ltr"
                                            :series="totalStudentsChart.series" :options="totalStudentsChart.chartOptions">
                                        </apexchart>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                            <b-col lg="6">
                                <b-card no-body>
                                    <b-card-body>
                                        <span class="badge bg-danger-subtle text-danger float-end"><i
                                                class="bi bi-arrow-down"></i> 1.27%</span>
                                        <p class="fs-md text-muted mb-4">Total Courses</p>
                                        <h3 class="mb-n3">
                                            <count-to :startVal="0" :duration="5000" :endVal="754"></count-to>
                                        </h3>
                                        <apexchart class="apex-charts" height="95" dir="ltr"
                                            :series="totalCoursesChart.series" :options="totalCoursesChart.chartOptions">
                                        </apexchart>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                            <b-col xxl="12">
                                <b-card no-body>
                                    <b-card-header class="d-flex align-items-center">
                                        <b-card-title title-tag="h6" class="mb-0 flex-grow-1">Features Course
                                            Categories</b-card-title>
                                        <div class="flex-shrink-0">
                                            <router-link to="/learning/category" class="icon-link icon-link-hover">View All
                                                <i class="bi bi-arrow-right"></i></router-link>
                                        </div>
                                    </b-card-header>
                                    <b-card-body>
                                        <b-row class="g-4">
                                            <b-col lg="3" sm="6">
                                                <div class="text-center">
                                                    <div class="avatar-sm mx-auto">
                                                        <div class="avatar-title bg-success-subtle rounded">
                                                            <img :src="shopify" alt=""
                                                                class="avatar-xs" />
                                                        </div>
                                                    </div>
                                                    <h6 class="text-trucate mb-0 mt-3"><router-link to="/learning/grid"
                                                            class="text-reset">Shopify Development</router-link></h6>
                                                </div>
                                            </b-col>
                                            <b-col lg="3" sm="6">
                                                <div class="text-center">
                                                    <div class="avatar-sm mx-auto">
                                                        <div class="avatar-title bg-info-subtle rounded">
                                                            <img :src="webpack" alt=""
                                                                class="avatar-xs" />
                                                        </div>
                                                    </div>
                                                    <h6 class="text-trucate mb-0 mt-3"><router-link to="/learning/grid"
                                                            class="text-reset">Marketing & Management</router-link></h6>
                                                </div>
                                            </b-col>
                                            <b-col lg="3" sm="6">
                                                <div class="text-center">
                                                    <div class="avatar-sm mx-auto">
                                                        <div class="avatar-title bg-danger-subtle rounded">
                                                            <img :src="laravel" alt=""
                                                                class="avatar-xs" />
                                                        </div>
                                                    </div>
                                                    <h6 class="text-trucate mb-0 mt-3"><router-link to="/learning/grid"
                                                            class="text-reset">Laravel Development</router-link></h6>
                                                </div>
                                            </b-col>
                                            <b-col lg="3" sm="6">
                                                <div class="text-center">
                                                    <div class="avatar-sm mx-auto">
                                                        <div class="avatar-title bg-info-subtle rounded">
                                                            <img :src="react" alt=""
                                                                class="avatar-xs" />
                                                        </div>
                                                    </div>
                                                    <h6 class="text-trucate mb-0 mt-3"><router-link to="/learning/grid"
                                                            class="text-reset">React Development</router-link></h6>
                                                </div>
                                            </b-col>
                                        </b-row>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col xxl="3">
                        <b-card no-body class="card-height-100">
                            <b-card-header class="d-flex">
                                <b-card-title title-tag="h5" class="mb-0 flex-grow-1">Daily Progress</b-card-title>
                                <div class="flex-shrink-0">
                                    <div class="dropdown card-header-dropdown sortble-dropdown">
                                        <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            <span class="text-muted dropdown-title">Today</span> <i
                                                class="mdi mdi-chevron-down ms-1"></i>
                                        </b-link>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <b-link class="dropdown-item">Today</b-link>
                                            <b-link class="dropdown-item">This Week</b-link>
                                            <b-link class="dropdown-item">This Month</b-link>
                                        </div>
                                    </div>
                                </div>
                            </b-card-header>
                            <b-card-body class="text-center">
                                <apexchart class="apex-charts" height="320" dir="ltr" :series="dailyProgressChart.series"
                                    :options="dailyProgressChart.chartOptions"></apexchart>
                                <p class="text-muted mb-0">Very good, keep improving the quality of your learning</p>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col lg="8">
                        <b-card no-body class="card-height-100">
                            <b-card-header class="align-items-center d-flex">
                                <b-card-title class="mb-0 flex-grow-1">Learning Overview</b-card-title>
                                <div class="d-flex gap-1">
                                    <b-button type="button" variant="subtle-secondary" size="sm">
                                        ALL
                                    </b-button>
                                    <b-button type="button" variant="subtle-secondary" size="sm">
                                        1M
                                    </b-button>
                                    <b-button type="button" variant="subtle-secondary" size="sm">
                                        6M
                                    </b-button>
                                    <b-button type="button" variant="subtle-primary" size="sm">
                                        1Y
                                    </b-button>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <apexchart class="apex-charts ms-n3" height="320" dir="ltr" :series="learningOverviewChart.series"
                                    :options="learningOverviewChart.chartOptions"></apexchart>
                            </b-card-body>
                        </b-card>
                    </b-col>
                    <b-col lg="4">
                        <b-card no-body class="card-height-100">
                            <b-card-header class="d-flex align-items-center">
                                <b-card-title title-tag="h6" class="mb-0 flex-grow-1">Best instructors</b-card-title>
                                <div class="flex-shrink-0">
                                    <router-link to="/instructors/list" class="icon-link icon-link-hover">View All <i
                                            class="bi bi-arrow-right"></i></router-link>
                                </div>
                            </b-card-header>
                            <b-card-body class="px-0">
                                <SimpleBar data-simplebar class="card-body py-0" style="max-height: 330px;">
                                    <div class="table-responsive table-card mt-0">
                                        <table class="table mb-0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center gap-1">
                                                            <div class="flex-shrink-0">
                                                                <img :src="avatar2" alt=""
                                                                    class="avatar-sm rounded-circle p-1" />
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="fs-md mb-1"><router-link
                                                                        to="/instructors/overview"
                                                                        class="text-reset">Bethany Nienow</router-link></h6>
                                                                <p class="text-muted mb-0">236 Courses</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-end">
                                                        <span class="badge bg-warning-subtle text-warning"><i
                                                                class="bi bi-star-fill"></i> 4.9</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center gap-1">
                                                            <div class="flex-shrink-0">
                                                                <img :src="avatar7" alt=""
                                                                    class="avatar-sm rounded-circle p-1" />
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="fs-md mb-1"><router-link
                                                                        to="/instructors/overview"
                                                                        class="text-reset">Sonia Conn</router-link></h6>
                                                                <p class="text-muted mb-0">247 Courses</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-end">
                                                        <span class="badge bg-warning-subtle text-warning"><i
                                                                class="bi bi-star-fill"></i> 4.8</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center gap-1">
                                                            <div class="flex-shrink-0">
                                                                <img :src="avatar4" alt=""
                                                                    class="avatar-sm rounded-circle p-1" />
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="fs-md mb-1"><router-link
                                                                        to="/instructors/overview"
                                                                        class="text-reset">Talon Bradtke</router-link></h6>
                                                                <p class="text-muted mb-0">365 Courses</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-end">
                                                        <span class="badge bg-warning-subtle text-warning"><i
                                                                class="bi bi-star-fill"></i> 4.9</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center gap-1">
                                                            <div class="flex-shrink-0">
                                                                <img :src="avatar5" alt=""
                                                                    class="avatar-sm rounded-circle p-1" />
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="fs-md mb-1"><router-link
                                                                        to="/instructors/overview"
                                                                        class="text-reset">Tyrell Kerluke</router-link></h6>
                                                                <p class="text-muted mb-0">298 Courses</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-end">
                                                        <span class="badge bg-warning-subtle text-warning"><i
                                                                class="bi bi-star-fill"></i> 4.7</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center gap-1">
                                                            <div class="flex-shrink-0">
                                                                <img :src="avatar6" alt=""
                                                                    class="avatar-sm rounded-circle p-1" />
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="fs-md mb-1"><router-link
                                                                        to="/instructors/overview"
                                                                        class="text-reset">Ross Zieme</router-link></h6>
                                                                <p class="text-muted mb-0">196 Courses</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-end">
                                                        <span class="badge bg-warning-subtle text-warning"><i
                                                                class="bi bi-star-fill"></i> 4.9</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center gap-1">
                                                            <div class="flex-shrink-0">
                                                                <img :src="avatar1" alt=""
                                                                    class="avatar-sm rounded-circle p-1" />
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="fs-md mb-1"><router-link
                                                                        to="/instructors/overview"
                                                                        class="text-reset">Hollis Spencer</router-link></h6>
                                                                <p class="text-muted mb-0">321 Courses</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-end">
                                                        <span class="badge bg-warning-subtle text-warning"><i
                                                                class="bi bi-star-fill"></i> 4.7</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center gap-1">
                                                            <div class="flex-shrink-0">
                                                                <img :src="avatar8" alt=""
                                                                    class="avatar-sm rounded-circle p-1" />
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="fs-md mb-1">Cordia Grady</h6>
                                                                <p class="text-muted mb-0">357 Courses</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-end">
                                                        <span class="badge bg-warning-subtle text-warning"><i
                                                                class="bi bi-star-fill"></i> 4.8</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </SimpleBar>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>

                <b-card no-body id="coursesList">
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Recent Courses</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="dropdown card-header-dropdown sortble-dropdown">
                                <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <span class="fw-semibold text-uppercase fs-12">Sort by:
                                    </span><span class="text-muted dropdown-title">Course Name</span> <i
                                        class="mdi mdi-chevron-down ms-1"></i>
                                </b-link>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <b-link href="#" class="dropdown-item sort" data-sort="courses_Name">Course Name</b-link>
                                    <b-link href="#" class="dropdown-item sort" data-sort="instructor">Instructor</b-link>
                                    <b-link href="#" class="dropdown-item sort" data-sort="fees">Amount</b-link>
                                    <b-link href="#" class="dropdown-item sort" data-sort="status">Status</b-link>
                                </div>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="table-responsive table-card my-0">
                            <table class="table table-borderless table-centered align-middle table-nowrap mb-0">
                                <thead class="text-muted table-light">
                                    <tr>
                                        <th scope="col" class="sort cursor-pointer" data-sort="courses_Name">Course Name
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="category">Category</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="instructor">Instructor</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="lessons">Lessons</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="duration">Duration</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="fees">Fees</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="status">Status</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="rating">Rating</th>
                                    </tr>
                                </thead>
                                <tbody class="list">
                                    <tr v-for="(data, index) of resultQuery" :key="index">
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <img :src="data.img" alt="react.png" class="avatar-xxs rounded" />
                                                <router-link to="/learning/overview" class="text-reset courses_Name">
                                                    {{ data.coursesName }}
                                                </router-link>
                                            </div>
                                        </td>
                                        <td class="category">
                                            {{ data.category }}
                                        </td>
                                        <td class="instructor">
                                            {{ data.instructor }}
                                        </td>
                                        <td class="lessons">
                                            {{ data.lessons }}
                                        </td>
                                        <td class="duration">{{ data.duration }}</td>
                                        <td>
                                            <span class="fw-medium fees">{{ data.fees }}</span>
                                        </td>
                                        <td v-if="data.status == 'Open'">
                                            <span class="badge bg-info-subtle text-info status">{{ data.status }}</span>
                                        </td>
                                        <td v-if="data.status == 'Close'">
                                            <span class="badge bg-danger-subtle text-danger status">{{ data.status }}</span>
                                        </td>
                                        <td>
                                            <h5 class="fs-md fw-medium mb-0 rating"><i
                                                    class="ph-star align-baseline text-warning"></i> {{ data.rating }}</h5>
                                        </td>
                                    </tr>
                                </tbody><!-- end tbody -->
                            </table>
                        </div>
                        <div class="align-items-center mt-1 pt-2 row">
                            <b-col cols="sm">
                                <div class="text-muted text-center text-sm-start">
                                    Showing <span class="fw-semibold">{{ displayedPosts.length }}</span> of <span
                                        class="fw-semibold">{{ coursesData.length }}</span> Results
                                </div>
                            </b-col>
                            <b-col sm="auto" class="mt-3 mt-sm-0">
                                <div class="pagination-wrap hstack gap-2 justify-content-center">
                                    <b-link class="page-item pagination-prev" href="#" :disabled="page <= 1"
                                        @click="page--">
                                        Previous
                                    </b-link>
                                    <ul class="pagination listjs-pagination mb-0">
                                        <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
                                            v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                                            <b-link class="page" href="#" data-i="1" data-page="10">{{ pageNumber }}</b-link>
                                        </li>
                                    </ul>
                                    <b-link class="page-item pagination-next" href="#"
                                    :disabled="page >= pages.length" @click="page++">
                                        Next
                                    </b-link>
                                </div>
                            </b-col>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="3">
                <b-card no-body class="">
                    <b-card-body>
                        <div class="d-flex mb-3">
                            <div class="flex-grow-1">
                                <b-card-title title-tag="h6" class="mb-0">Overview</b-card-title>
                            </div>
                            <div class="dropdown flex-shrink-0">
                                <b-button variant="subtle-secondary" class="avatar-xs p-0" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-share"></i>
                                </b-button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><b-link class="dropdown-item" href="#!"><i
                                                class="bi bi-facebook me-1 align-baseline"></i> Facebook</b-link></li>
                                    <li><b-link class="dropdown-item" href="#!"><i
                                                class="bi bi-whatsapp me-1 align-baseline"></i> Whatsapp</b-link></li>
                                    <li><b-link class="dropdown-item" href="#!"><i
                                                class="bi bi-instagram me-1 align-baseline"></i> Instagram</b-link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="text-center mb-4 pb-2">
                            <img :src="avatar3" alt="" class="avatar-md rounded-circle" />
                            <h6 class="fs-md mt-3 mb-1">
                                <router-link to="/pages/profile" class="text-reset">Richard Marshall <i
                                        class="bi bi-patch-check-fill text-info"></i>
                                </router-link>
                            </h6>
                            <p class="text-muted mb-4">Create Designer</p>
                            <b-row class="g-3">
                                <b-col cols="6" class="border-end border-dashed">
                                    <div>
                                        <h5>1549</h5>
                                        <p class="text-muted mb-0">Students</p>
                                    </div>
                                </b-col>
                                <b-col cols="6">
                                    <div>
                                        <h5>137</h5>
                                        <p class="text-muted mb-0">Courses</p>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="p-3 bg-light rounded courses-calendar-dashboard">
                            <div class="d-flex align-items-center gap-2 mb-4">
                                <div class="flex-shrink-0">
                                    <b-button size="sm" variant="secondary"><i class="bi bi-chevron-left"></i></b-button>
                                </div>
                                <h6 class="flex-grow-1 mb-0 text-center fs-md">
                                    December - 2023
                                </h6>
                                <div class="flex-shrink-0">
                                    <b-button size="sm" variant="secondary"><i class="bi bi-chevron-right"></i></b-button>
                                </div>
                            </div>
                            <div class="d-flex gap-2 justify-content-around date-calendar flex-wrap">
                                <b-link href="#!" class="week flex-shrink-0 active">
                                    <h6 class="mb-3">S</h6>
                                    <div class="avatar-xs">
                                        <div class="avatar-title rounded-circle">21</div>
                                    </div>
                                </b-link>
                                <b-link href="#!" class="week flex-shrink-0">
                                    <h6 class="mb-3">M</h6>
                                    <div class="avatar-xs">
                                        <div class="avatar-title rounded-circle">22</div>
                                    </div>
                                </b-link>
                                <b-link href="#!" class="week flex-shrink-0">
                                    <h6 class="mb-3">T</h6>
                                    <div class="avatar-xs">
                                        <div class="avatar-title rounded-circle">23</div>
                                    </div>
                                </b-link>
                                <b-link href="#!" class="week flex-shrink-0">
                                    <h6 class="mb-3">W</h6>
                                    <div class="avatar-xs">
                                        <div class="avatar-title rounded-circle">24</div>
                                    </div>
                                </b-link>
                                <b-link href="#!" class="week flex-shrink-0">
                                    <h6 class="mb-3">T</h6>
                                    <div class="avatar-xs">
                                        <div class="avatar-title rounded-circle">25</div>
                                    </div>
                                </b-link>
                                <b-link href="#!" class="week flex-shrink-0">
                                    <h6 class="mb-3">F</h6>
                                    <div class="avatar-xs">
                                        <div class="avatar-title rounded-circle">26</div>
                                    </div>
                                </b-link>
                                <b-link href="#!" class="week flex-shrink-0">
                                    <h6 class="mb-3">S</h6>
                                    <div class="avatar-xs">
                                        <div class="avatar-title rounded-circle">27</div>
                                    </div>
                                </b-link>
                            </div>
                        </div>

                        <div class="mt-4">
                            <b-card-title title-tag="h6" class="mb-3">Upcoming Schedule</b-card-title>

                            <b-card no-body class="border-start border-primary border-3">
                                <b-card-body>
                                    <router-link to="/learning/overview"
                                        class="btn btn-primary btn-icon btn-sm float-end"><i
                                            class="bi bi-arrow-right"></i>
                                </router-link>
                                    <h6 class="text-truncate"><b-link href="#!" class="text-reset">UI/UX style guide with
                                            sketch</b-link></h6>
                                    <p class="text-muted mb-0"><i class="bi bi-calendar2 align-baseline me-1"></i> Today <i
                                            class="bi bi-clock align-baseline mx-1"></i> 02:18 PM</p>
                                </b-card-body>
                            </b-card>
                            <b-card no-body class="border-start border-primary border-3">
                                <b-card-body>
                                    <router-link to="/learning/overview"
                                        class="btn btn-primary btn-icon btn-sm float-end"><i
                                            class="bi bi-arrow-right"></i>
                                </router-link>
                                    <h6 class="text-truncate"><b-link href="#!" class="text-reset">Advanced React And Redux</b-link>
                                    </h6>
                                    <p class="text-muted mb-0"><i class="bi bi-calendar2 align-baseline me-1"></i> 04 April,
                                        2023 <i class="bi bi-clock align-baseline mx-1"></i> 03:00 to 04:00 PM</p>
                                </b-card-body>
                            </b-card>
                            <b-card no-body class="border-start border-primary border-3">
                                <b-card-body>
                                    <router-link to="/learning/overview"
                                        class="btn btn-primary btn-icon btn-sm float-end"><i
                                            class="bi bi-arrow-right"></i>
                                </router-link>
                                    <h6 class="text-truncate"><b-link href="#!" class="text-reset">Tailwind CSS From Scratch</b-link>
                                    </h6>
                                    <p class="text-muted mb-0"><i class="bi bi-calendar2 align-baseline me-1"></i> 08 April,
                                        2023 <i class="bi bi-clock align-baseline mx-1"></i> 07:36 AM</p>
                                </b-card-body>
                            </b-card>
                            <b-card no-body class="border-start border-primary border-3">
                                <b-card-body>
                                    <router-link to="/learning/overview"
                                        class="btn btn-primary btn-icon btn-sm float-end"><i
                                            class="bi bi-arrow-right"></i>
                                </router-link>
                                    <h6 class="text-truncate"><b-link href="#!" class="text-reset">REST APIs With Flask</b-link></h6>
                                    <p class="text-muted mb-0"><i class="bi bi-calendar2 align-baseline me-1"></i> 15 April,
                                        2023 <i class="bi bi-clock align-baseline mx-1"></i> 10:11 PM</p>
                                </b-card-body>
                            </b-card>
                            <b-card no-body class="border-start border-primary border-3">
                                <b-card-body>
                                    <router-link to="/learning/overview"
                                        class="btn btn-primary btn-icon btn-sm float-end"><i
                                            class="bi bi-arrow-right"></i>
                                </router-link>
                                    <h6 class="text-truncate"><b-link href="#!" class="text-reset">Asp.Net Core 7 True Ultimate
                                            Guide</b-link></h6>
                                    <p class="text-muted mb-0"><i class="bi bi-calendar2 align-baseline me-1"></i> 24 May,
                                        2023 <i class="bi bi-clock align-baseline mx-1"></i> 07:00 to 10:00 AM</p>
                                </b-card-body>
                            </b-card>
                        </div>

                        <b-card no-body class="bg-primary overflow-hidden mb-0">
                            <div class="position-absolute bottom-0" style="opacity: 0.15;">
                                <img :src="pattern2" alt="" class="img-fluid" />
                            </div>
                            <b-card-body class="position-relative">
                                <img :src="logo" alt="" height="22" />
                                <h6 class="text-white fs-md fw-medium mt-4">Go Premium</h6>
                                <p class="text-white-75">Explore 500+ courses with lifetime membership by themesbrand</p>
                                <b-link href="#!" class="icon-link icon-link-hover stretched-link text-white-75">Premium Now <i
                                        class="bi bi-arrow-right"></i></b-link>
                            </b-card-body>
                        </b-card>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>