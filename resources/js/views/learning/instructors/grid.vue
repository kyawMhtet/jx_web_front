<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import { instructorGrid } from "../../../common/data";
import DropZone from "@/common/dropZone.vue";
import { ref, watch } from "vue";

import newDoc from "../../../../images/new-document.png";
import dummyImg from "../../../../images/users/user-dummy-img.jpg";

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
            title: "Grid View",
            items: [
                {
                    text: "Instructors",
                    href: "/",
                },
                {
                    text: "Grid View",
                    active: true,
                },
            ],
            page: 1,
            perPage: 10,
            pages: [],
            instructorGridview: instructorGrid,
            newDoc,
            // 
            submitted: false,
            instructorsModal: false,
            dataEdit: false,
            deleteModal: false,
            searchQuery: null,
            event: {
                id: "",
                designation: "",
                students: "",
                userImg: "",
                username: "",
                email: "",
                experience: "",
                phone: "",
                course: "",
                rating: "",
                status: ""
            },
        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.instructorGridview);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.designation.toLowerCase().includes(search) ||
                        data.email.toLowerCase().includes(search) ||
                        data.username.toLowerCase().includes(search) ||
                        data.course.toString().includes(search)
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        instructorGridview() {
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
            let numberOfPages = Math.ceil(this.instructorGridview.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(instructorGridview) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return instructorGridview.slice(from, to);
        },

        // 
        handleSubmit() {
            if (this.dataEdit) {
                this.submitted = true;
                if (this.submitted && (this.event.username && this.event.email && this.event.course && this.event.experience && this.event.students && this.event.phone && this.event.status)) {
                    this.instructorGridview = this.instructorGridview.map(item => item.id.toString() == this.event.id.toString() ? { ...item, ...this.event } : item);
                    this.instructorsModal = false;
                }
            } else {
                this.submitted = true;
                if (this.submitted && (this.event.username && this.event.email && this.event.course && this.event.experience && this.event.students && this.event.phone && this.event.status)) {
                    const data = {
                        id: (Math.floor(Math.random() * 100 + 20) - 20),
                        userImg: dummyImg,
                        designation: "Project Manager",
                        rating: "--",
                        ...this.event
                    };
                    this.instructorGridview.unshift(data);
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
                this.instructorGridview = this.instructorGridview.filter((item) => {
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
        <b-card no-body>
            <b-card-body>
                <b-row class="align-items-center g-2">
                    <b-col lg="3" class="me-auto">
                        <b-card-title title-tag="h6" class="mb-0">Instructors List <span
                                class="badge bg-primary ms-1 align-baseline">1452</span></b-card-title>
                    </b-col>
                    <b-col lg="2">
                        <div class="search-box">
                            <input type="text" class="form-control search"
                                placeholder="Search for instructors, email or something..." v-model="searchQuery">
                            <i class="ri-search-line search-icon"></i>
                        </div>
                    </b-col>
                    <b-col lg="auto">
                        <div class="hstack gap-2">
                            <b-link href="javascript: void(0);" class="btn btn-secondary" @click="toggleModal">
                                <i class="bi bi-plus-circle align-baseline me-1"></i>
                                Add Instructor
                            </b-link>
                            <router-link to="/instructors/grid" class="btn btn-subtle-primary active btn-icon ms-auto"><i
                                    class="bi bi-grid"></i></router-link>
                            <router-link to="/instructors/list" class="btn btn-subtle-primary btn-icon"><i
                                    class="bi bi-list-task"></i></router-link>
                        </div>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-card>

        <b-row class="row-cols-xxl-5">
            <b-col v-for="(data, index) of resultQuery" :key="index">
                <b-card no-body>
                    <b-card-body>
                        <div class="d-flex align-items-center">
                            <div class="form-check flex-grow-1">
                                <input class="form-check-input" type="checkbox" value="1" id="checkbox-1">
                                <label class="form-check-label" for="checkbox-1"></label>
                            </div>
                            <div class="flex-shrink-0">
                                <div class="dropdown">
                                    <b-button variant="light" size="sm" class="btn-icon" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-three-dots-vertical"></i>
                                    </b-button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <b-link class="dropdown-item edit-list" href="javascript:void(0)"
                                                @click="editDetails(data)">
                                                <i class="bi bi-pencil-square me-1 align-baseline"></i> Edit</b-link>
                                        </li>
                                        <li>
                                            <b-link class="dropdown-item remove-list" href="javascript:void(0)"
                                                @click="deleteModalToggle(data)">
                                                <i class="bi bi-trash3 me-1 align-baseline"></i> Delete</b-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-4 mb-3">
                            <div class="position-relative d-inline-block">
                                <img :src="data.userImg" alt="" class="avatar-md rounded" />
                                <span
                                    :class="data.status + ' position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle p-1'">
                                    <span class="visually-hidden">unread messages</span></span>
                            </div>
                            <router-link to="/instructors/overview">
                                <h6 class="fs-md mt-4 mb-1">{{ data.username }}</h6>
                            </router-link>
                            <p class="text-muted fs-sm mb-0">{{ data.designation }}</p>
                        </div>
                        <ul class="list-unstyled text-muted vstack gap-2 mb-0">
                            <li>
                                <b-link href="javascript: void(0);" class="text-reset text-truncate">
                                    <i class="bi bi-envelope align-baseline me-1"></i> {{ data.email }}
                                </b-link>
                            </li>
                            <li>
                                <b-link href="javascript: void(0);" class="text-reset">
                                    <i class="bi bi-telephone align-baseline me-1"></i> {{ data.phone }}
                                </b-link>
                            </li>
                            <li>
                                <i class="ph ph-graduation-cap align-baseline me-1"></i> {{ data.course }} Courses
                            </li>
                        </ul>
                    </b-card-body>
                    <b-card-body class="border-top border-dashed d-flex align-items-center">
                        <div class="flex-grow-1">
                            <span class="badge bg-warning-subtle text-warning">
                                <i class="bi bi-star-fill align-baseline me-1"></i> {{ data.rating }}
                            </span>
                        </div>
                        <div class="flex-shrink-0"></div>
                        <router-link to="/instructors/overview" class="link-effect">Overview
                            <i class="bi bi-arrow-right align-baseline ms-1"></i></router-link>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row class="align-items-center mb-3" v-if="resultQuery.length >= 1">
            <b-col cols="sm">
                <div class="text-muted text-center text-sm-start">
                    Showing <span class="fw-semibold">{{ displayedPosts.length }}</span> of <span class="fw-semibold">{{
                        instructorGridview.length }}</span> Results
                </div>
            </b-col>
            <b-col sm="auto" class="mt-3 mt-sm-0">
                <div class="pagination-wrap hstack justify-content-center gap-2">
                    <b-link class="page-item pagination-prev" href="#" :disabled="page <= 1" @click="page--">
                        Previous
                    </b-link>
                    <ul class="pagination listjs-pagination mb-0">
                        <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
                            v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                            <b-link class="page" href="#" data-i="1" data-page="10">{{ pageNumber }}</b-link>
                        </li>
                    </ul>
                    <b-link class="page-item pagination-next" href="#" @click="page++" :disabled="page >= pages.length">
                        Next
                    </b-link>
                </div>
            </b-col>
        </b-row>

        <div class="noresult" style="display: block;" v-if="resultQuery.length < 1">
            <div class="text-center py-4">
                <div class="avatar-md mx-auto mb-4">
                    <div class="avatar-title bg-light text-primary rounded-circle fs-4xl">
                        <i class="bi bi-search"></i>
                    </div>
                </div>
                <h5 class="mt-2">Sorry! No Result Found</h5>
            </div>
        </div>

        <!-- Modal -->
        <b-modal v-model="instructorsModal" class="fade" id="addInstructor" hide-footer content-class="border-0"
            :title="dataEdit ? 'Edit Instructor Details' : 'Add Instructor'">
            <b-form class="tablelist-form" novalidate autocomplete="off" @submit.prevent="handleSubmit">
                <input type="hidden" id="id-field">
                <input type="hidden" id="rating-field">
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
                                placeholder="Enter instructor name" v-model="event.username"
                                :class="{ 'is-invalid': submitted && !event.username }" />
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
                                v-model="event.course" :class="{ 'is-invalid': submitted && !event.course }" />
                        </div>
                    </b-col>
                    <b-col lg="6">
                        <div class="mb-3">
                            <label for="experience-input" class="form-label">Experience<span
                                    class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="experience-input" placeholder="Experience"
                                v-model="event.experience" :class="{ 'is-invalid': submitted && !event.experience }" />
                        </div>
                    </b-col>
                    <b-col lg="6">
                        <div class="mb-3">
                            <label for="students-input" class="form-label">Students</label>
                            <input type="number" id="students-input" class="form-control" placeholder="Students"
                                v-model="event.students" :class="{ 'is-invalid': submitted && !event.students }" />
                        </div>
                    </b-col>
                    <b-col lg="6">
                        <div class="mb-3">
                            <label for="contact-input" class="form-label">Contact<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="contact-input" placeholder="Contact no"
                                v-model="event.phone" :class="{ 'is-invalid': submitted && !event.phone }" />
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
                        <b-button type="submit" variant="primary" id="add-btn">
                            {{ dataEdit ? "update" : "Add Instructor" }}
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