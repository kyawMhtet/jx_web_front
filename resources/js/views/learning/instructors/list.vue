<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import { totalInstructorsChart, totalCoursesChart, instructorActivityChart } from "../chartsData";

import { instructorsList } from "../../../common/data";
import DropZone from "@/common/dropZone.vue";
import { ref, watch } from "vue";

import newDoc from "../../../../images/new-document.png";
import userDummy from "../../../../images/users/32/user-dummy-img.jpg";

export default {
    setup() {
        let files = ref([]);
        let dropzoneFile = ref("");
        const drop = (e) => {
            dropzoneFile.value = e.dataTransfer.files[0];
            files.value.push(dropzoneFile.value);
        };
        const selectedFile = () => {
            dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
            files.value.push(dropzoneFile.value);
        };

        watch(() => [...files.value], (currentValue) => { return currentValue; });
        return { dropzoneFile, files, drop, selectedFile };
    },
    data() {
        return {
            title: "List View",
            items: [
                {
                    text: "Instructors",
                    href: "/",
                },
                {
                    text: "List View",
                    active: true,
                },
            ],
            totalInstructorsChart: totalInstructorsChart,
            totalCoursesChart: totalCoursesChart,
            instructorActivityChart: instructorActivityChart,
            page: 1,
            perPage: 10,
            pages: [],
            instructorsList: instructorsList,
            newDoc,
            // 
            submitted: false,
            instructorsModal: false,
            dataEdit: false,
            deleteModal: false,
            searchQuery: null,
            event: {
                id: "",
                img: "",
                img_alt: "",
                name: "",
                total_course: "",
                email: "",
                experience: "",
                students: "",
                contact: "",
                rating: "",
                status: ""
            },
        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.instructorsList);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.email.toLowerCase().includes(search) ||
                        data.name.toLowerCase().includes(search) ||
                        data.status.toLowerCase().includes(search) ||
                        data.students.toLowerCase().includes(search)
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        instructorsList() {
            this.setPages();
        },
    },
    created() {
        this.setPages();
    },
    methods: {
        deleteRecord(ele) {
            ele.target.parentElement.parentElement.parentElement.remove();
        },
        setPages() {
            let numberOfPages = Math.ceil(this.instructorsList.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(instructorsList) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return instructorsList.slice(from, to);
        },

        // 
        handleSubmit() {
            if (this.dataEdit) {
                this.submitted = true;
                if (this.submitted && (this.event.name && this.event.email && this.event.total_course && this.event.experience && this.event.students && this.event.contact && this.event.status)) {
                    this.instructorsList = this.instructorsList.map(item => item.id.toString() == this.event.id.toString() ? { ...item, ...this.event } : item);
                    this.instructorsModal = false;
                }
            } else {
                this.submitted = true;
                if (this.submitted && (this.event.name && this.event.email && this.event.total_course && this.event.experience && this.event.students && this.event.contact && this.event.status)) {
                    const data = {
                        id: (Math.floor(Math.random() * 100 + 20) - 20),
                        img: userDummy,
                        img_alt: "user-dummy-img.jpg",
                        rating: "--",
                        ...this.event
                    };
                    this.instructorsList.unshift(data);
                    this.instructorsModal = false;
                }
            }
        },

        editDetails(data) {
            this.dataEdit = true;
            this.instructorsModal = true;
            this.event = { ...data };
            this.submitted = false;
        },

        toggleModal() {
            this.instructorsModal = true;
            this.dataEdit = false;
            this.event = {};
            this.submitted = false;
        },

        deleteModalToggle(data) {
            this.deleteModal = true;
            this.event.id = data.id;
        },

        deleteData() {
            if (this.event.id) {
                this.instructorsList = this.instructorsList.filter((item) => {
                    return item.id != this.event.id;
                });
                this.deleteModal = false;
            }
        }
        //
    },
    components: {
        Layout,
        PageHeader,
        DropZone
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <div id="instructorList">

            <b-row>
                <b-col xl="2" sm="6">
                    <b-card no-body class="card-height-100">
                        <b-card-body class="text-center">
                            <apexchart class="apex-charts radialbar-chart-effect-primary" height="170" dir="ltr"
                                :series="totalInstructorsChart.series" :options="totalInstructorsChart.chartOptions">
                            </apexchart>
                            <b-card-title title-tag="h5" class="mt-3">Total Instructors</b-card-title>
                            <p class="text-muted mb-0"><span class="text-success"><i
                                        class="ph ph-trend-up align-middle me-1"></i> 07.78%</span> than last week</p>
                        </b-card-body>
                    </b-card>
                </b-col>
                <b-col xl="2" sm="6">
                    <b-card no-body class="card-height-100">
                        <b-card-body class="text-center">
                            <apexchart class="apex-charts radialbar-chart-effect-secondary" height="170" dir="ltr"
                                :series="totalCoursesChart.series" :options="totalCoursesChart.chartOptions">
                            </apexchart>
                            <b-card-title title-tag="h5" class="mt-3">Total Courses</b-card-title>
                            <p class="text-muted mb-0"><span class="text-danger"><i
                                        class="ph ph-trend-down align-middle me-1"></i> 01.39%</span> than last week</p>
                        </b-card-body>
                    </b-card>
                </b-col>
                <b-col xl="8">
                    <b-card no-body>
                        <b-card-header class="d-flex align-items-center">
                            <div class="h6 card-title flex-grow-1 mb-0">Instructor Activity</div>
                            <div class="flex-shrink-0">
                                <b-button type="button" size="sm" variant="subtle-secondary" class="me-1">
                                    ALL
                                </b-button>
                                <b-button type="button" size="sm" variant="secondary" class="me-1">
                                    1M
                                </b-button>
                                <b-button type="button" size="sm" variant="subtle-secondary" class="me-1">
                                    6M
                                </b-button>
                                <b-button type="button" size="sm" variant="subtle-secondary">
                                    1Y
                                </b-button>
                            </div>
                        </b-card-header>
                        <b-card-body class="ps-2">
                            <apexchart class="apex-charts" height="190" dir="ltr" :series="instructorActivityChart.series"
                                :options="instructorActivityChart.chartOptions"></apexchart>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="12">
                    <b-card no-body>
                        <b-card-header>
                            <b-row class="align-items-center g-2">
                                <b-col lg="3" class="me-auto">
                                    <b-card-title title-tag="h6" class="mb-0">Instructors List <span
                                            class="badge bg-primary ms-1 align-baseline">235</span></b-card-title>
                                </b-col>
                                <b-col xl="2" lg="3" sm="5">
                                    <div class="search-box">
                                        <input type="text" class="form-control search"
                                            placeholder="Search for instructors, email, students or something..."
                                            v-model="searchQuery">
                                        <i class="ri-search-line search-icon"></i>
                                    </div>
                                </b-col>
                                <b-col sm="auto">
                                    <div class="hstack gap-2">
                                        <b-button variant="subtle-danger" class="d-none" id="remove-actions"
                                            onClick="deleteMultiple()"><i class="ri-delete-bin-2-line"></i></b-button>
                                        <b-link href="javascript: void(0);" @click="toggleModal"
                                            class="btn btn-secondary"><i class="bi bi-plus-circle align-baseline me-1"></i>
                                            Add Instructor</b-link>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-card-header>
                        <b-card-body class="mt-3">
                            <div class="table-responsive table-card">
                                <table class="table table-centered align-middle table-custom-effect table-nowrap mb-0">
                                    <thead class="table-light">
                                        <tr>
                                            <th>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="option"
                                                        id="checkAll">
                                                    <label class="form-check-label" for="checkAll"></label>
                                                </div>
                                            </th>
                                            <th scope="col" class="sort cursor-pointer" data-sort="instructor_id">ID
                                            </th>
                                            <th scope="col" class="sort cursor-pointer" data-sort="instructor">
                                                Instructor</th>
                                            <th scope="col" class="sort cursor-pointer" data-sort="courses_total">Total
                                                Courses</th>
                                            <th scope="col" class="sort cursor-pointer" data-sort="email">Email</th>
                                            <th scope="col" class="sort cursor-pointer" data-sort="experience">
                                                Experience</th>
                                            <th scope="col" class="sort cursor-pointer" data-sort="students">Students
                                            </th>
                                            <th scope="col" class="sort cursor-pointer" data-sort="contact">contact</th>
                                            <th scope="col" class="sort cursor-pointer" data-sort="rating">Rating</th>
                                            <th scope="col" class="sort cursor-pointer" data-sort="status">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody class="list form-check-all">

                                        <tr v-for="(data, index) of resultQuery" :key="index">
                                            <td>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" name="chk_child">
                                                    <label class="form-check-label"></label>
                                                </div>
                                            </td>
                                            <td class="instructor_id">
                                                <router-link to="/instructors/overview"
                                                    class="fw-medium link-primary">#TBSI15900{{ data.id }}
                                                </router-link>
                                            </td>
                                            <td class="instructor">
                                                <div class="d-flex gap-2 align-items-center">
                                                    <div class="flex-shrink-0">
                                                        <img :src="data.img" :alt="data.img_alt"
                                                            class="avatar-xxs rounded-circle" />
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <router-link to="/instructors/overview" class="text-reset">{{
                                                            data.name }}
                                                        </router-link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="courses_total">{{ data.total_course }}</td>
                                            <td class="email">{{ data.email }}</td>
                                            <td class="experience">{{ data.experience }}</td>
                                            <td class="students">{{ data.students }}</td>
                                            <td class="contact">{{ data.contact }}</td>
                                            <td class="rating">
                                                <i class="bi bi-star-fill text-warning align-baseline me-1"></i>
                                                <span class="rating-value">{{ data.rating }}</span>
                                            </td>
                                            <td class="status" v-if="data.status == 'Active'">
                                                <span class="badge bg-success-subtle text-success">{{ data.status }}</span>
                                            </td>
                                            <td class="status" v-if="data.status == 'Unactive'">
                                                <span class="badge bg-danger-subtle text-danger">{{ data.status }}</span>
                                            </td>
                                            <td>
                                                <ul class="d-flex gap-2 list-unstyled mb-0">
                                                    <li>
                                                        <router-link to="/instructors/overview"
                                                            class="btn btn-subtle-primary btn-icon btn-sm "><i
                                                                class="ph-eye"></i>
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <b-link href="javascript: void(0);"
                                                            class="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn"
                                                            @click="editDetails(data)">
                                                            <i class="ph-pencil"></i>
                                                        </b-link>
                                                    </li>
                                                    <li>
                                                        <b-link href="javascript: void(0);"
                                                            class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"
                                                            @click="deleteModalToggle(data)">
                                                            <i class="ph-trash"></i>
                                                        </b-link>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody><!-- end tbody -->
                                </table>
                                <div class="noresult" v-if="resultQuery.length < 1">
                                    <div class="text-center py-4">
                                        <i class="ph-magnifying-glass fs-1 text-primary"></i>
                                        <h5 class="mt-2">Sorry! No Result Found</h5>
                                        <p class="text-muted mb-0">We've searched more than 164+ instructors We did not
                                            find any instructors for you search.</p>
                                    </div>
                                </div>
                            </div>

                            <b-row class="align-items-center mt-4 pt-3" id="pagination-element" style="display: flex;"
                                v-if="resultQuery.length >= 1">
                                <b-col cols="sm">
                                    <div class="text-muted text-center text-sm-start">
                                        Showing <span class="fw-semibold">{{ resultQuery.length }}</span> of <span
                                            class="fw-semibold">{{ instructorsList.length }}</span> Results
                                    </div>
                                </b-col>
                                <b-col sm="auto" class="mt-3 mt-sm-0">
                                    <div class="pagination-wrap hstack justify-content-center gap-2">
                                        <b-link class="page-item pagination-prev" href="#" :disabled="page <= 1"
                                            @click="page--">
                                            Previous
                                        </b-link>
                                        <ul class="pagination listjs-pagination mb-0">
                                            <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
                                                v-for="(pageNumber, index) in pages" :key="index"
                                                @click="page = pageNumber">
                                                <b-link class="page" href="#" data-i="1" data-page="10">{{ pageNumber
                                                }}</b-link>
                                            </li>
                                        </ul>
                                        <b-link class="page-item pagination-next" href="#" @click="page++"
                                            :disabled="page >= pages.length">
                                            Next
                                        </b-link>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </div>

        <!-- Modal -->
        <b-modal v-model="instructorsModal" class="fade" id="modalShow" hide-footer content-class="border-0"
            :title="dataEdit ? 'Edit Instructor Details' : 'Add Instructor'">
            <b-form class="tablelist-form" novalidate autocomplete="off" @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <label class="form-label">Instructor Image<span class="text-danger">*</span></label>
                    <DropZone @drop.prevent="drop" @change="selectedFile" cloudIcon="bootstrap"
                        dropzoneClass="file-dropzone border border-1 border-dashed" />
                    <ul class="list-unstyled mb-0" id="dropzone-preview">
                        <li class="mt-2" id="dropzone-preview-list">

                            <div class="border rounded" v-for="(file, index) of files" :key="index">
                                <div class="d-flex flex-wrap gap-2 p-2">
                                    <div class="flex-shrink-0 me-3">
                                        <div class="avatar-sm bg-light rounded p-2">
                                            <img class="img-fluid rounded d-block" :src="newDoc" alt="Dropzone-Image" />
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <div class="pt-1">
                                            <h5 class="fs-md mb-1">&nbsp;
                                                {{ file.name }}
                                            </h5>
                                            <p class="fs-sm text-muted mb-0">
                                                <strong>{{ file.size / 1024 }}</strong> KB
                                            </p>
                                            <strong class="error text-danger"></strong>
                                        </div>
                                    </div>
                                    <div class="flex-shrink-0 ms-3">
                                        <b-button size="sm" variant="danger" @click="deleteRecord">Delete</b-button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!-- end dropzon-preview -->
                </div>

                <b-row>
                    <b-col lg="12">
                        <div class="mb-3">
                            <label for="instructor-name-input" class="form-label">Instructor Name<span
                                    class="text-danger">*</span></label>
                            <input type="text" id="instructor-name-input" class="form-control"
                                placeholder="Enter instructor name" v-model="event.name"
                                :class="{ 'is-invalid': submitted && !event.name }" />
                        </div>
                    </b-col>

                    <b-col lg="12">
                        <div class="mb-3">
                            <label for="email-input" class="form-label">Email<span class="text-danger">*</span></label>
                            <input type="email" id="email-input" class="form-control" placeholder="Email"
                                v-model="event.email" :class="{ 'is-invalid': submitted && !event.email }" />
                        </div>
                    </b-col>

                    <b-col lg="6">
                        <div class="mb-3">
                            <label for="total-courses-input" class="form-label">Total Courses<span
                                    class="text-danger">*</span></label>
                            <input type="number" id="total-courses-input" class="form-control" placeholder="Total courses"
                                v-model="event.total_course" :class="{ 'is-invalid': submitted && !event.total_course }">
                        </div>
                    </b-col>
                    <b-col lg="6">
                        <div class="mb-3">
                            <label for="experience-input" class="form-label">Experience<span
                                    class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="experience-input" placeholder="Experience"
                                v-model="event.experience" :class="{ 'is-invalid': submitted && !event.experience }">
                        </div>
                    </b-col>
                    <b-col lg="6">
                        <div class="mb-3">
                            <label for="students-input" class="form-label">Students</label>
                            <input type="number" id="students-input" class="form-control" placeholder="Students"
                                v-model="event.students" :class="{ 'is-invalid': submitted && !event.students }">
                        </div>
                    </b-col>
                    <b-col lg="6">
                        <div class="mb-3">
                            <label for="contact-input" class="form-label">Contact<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="contact-input" placeholder="Contact no"
                                v-model="event.contact" :class="{ 'is-invalid': submitted && !event.contact }">
                        </div>
                    </b-col>
                    <b-col lg="12">
                        <div class="mb-3">
                            <label for="status-input" class="form-label">Status<span class="text-danger">*</span></label>

                            <select class="form-select" id="status-input" v-model="event.status"
                                :class="{ 'is-invalid': submitted && !event.status }">
                                <option value="">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Unactive">Unactive</option>
                            </select>
                        </div>
                    </b-col>
                </b-row>
                <div>
                    <div class="hstack gap-2 justify-content-end">
                        <b-button type="button" variant="ghost-danger" @click="instructorsModal = false"><i
                                class="bi bi-x-lg align-baseline me-1"></i> Close</b-button>
                        <b-button type="submit" variant="primary" id="add-btn">{{ dataEdit ? "update" : "Add Instructor" }}
                        </b-button>
                    </div>
                </div>
            </b-form>
        </b-modal><!--end modal-->

        <!-- delete modal -->
        <b-modal v-model="deleteModal" body-class="p-md-5" modal-class="zoomIn" hide-footer no-close-on-backdrop centered>
            <div class="text-center">
                <div class="text-danger">
                    <i class="bi bi-trash display-4"></i>
                </div>
                <div class="mt-4">
                    <h3 class="mb-2">Are you sure ?</h3>
                    <p class="text-muted fs-lg mx-3 mb-0">Are you sure you want to remove this record ?</p>
                </div>
            </div>
            <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
                <b-button type="button" variant="light" class="w-sm btn-hover" @click="deleteModal = false">Close</b-button>
                <b-button type="button" variant="danger" class="w-sm btn-hover" id="delete-record" @click="deleteData">Yes,
                    Delete It!</b-button>
            </div>
        </b-modal>
    </Layout>
</template>