<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import { coursesList } from "../../../common/data";

import DropZone from "@/common/dropZone.vue";
import { ref, watch } from "vue";

import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";

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
            title: "List View",
            items: [
                {
                    text: "Courses",
                    href: "/",
                },
                {
                    text: "List View",
                    active: true,
                },
            ],
            page: 1,
            perPage: 10,
            pages: [],
            coursesList: coursesList,
            newDoc,
            // 
            submitted: false,
            courseModal: false,
            dataEdit: false,
            deleteModal: false,
            searchQuery: null,
            event: {
                id: "",
                category: "",
                img: "",
                img_alt: "",
                name: "",
                instructor: "",
                lessons: "",
                duration: "",
                students: "",
                fees: "",
                rating: "",
                status: ""
            },
            // Slider
            value:[100, 1000]
        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.coursesList);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.category.toLowerCase().includes(search) ||
                        data.name.toLowerCase().includes(search) ||
                        data.instructor.toLowerCase().includes(search) ||
                        data.status.toLowerCase().includes(search)
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        coursesList() {
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
            let numberOfPages = Math.ceil(this.coursesList.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(coursesList) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return coursesList.slice(from, to);
        },
        // 
        handleSubmit() {
            if (this.dataEdit) {
                this.submitted = true;
                if (this.submitted && (this.event.name && this.event.category && this.event.instructor && this.event.lessons && this.event.students && this.event.duration && this.event.fees && this.event.status)) {
                    this.coursesList = this.coursesList.map(item => item.id.toString() == this.event.id.toString() ? { ...item, ...this.event } : item);
                    this.courseModal = false;
                }
            } else {
                this.submitted = true;
                if (this.submitted && (this.event.name && this.event.category && this.event.instructor && this.event.lessons && this.event.students && this.event.duration && this.event.fees && this.event.status)) {
                    const data = {
                        id: (Math.floor(Math.random() * 100 + 20) - 20),
                        category: this.event.category,
                        img: dummyImg,
                        img_alt: "user-dummy-img.jpg",
                        rating: "--",
                        ...this.event
                    };
                    this.coursesList.unshift(data);
                    this.courseModal = false;
                }
            }
        },

        editDetails(data) {
            this.dataEdit = true;
            this.courseModal = true;
            this.event = { ...data };
            this.submitted = false;
        },

        toggleModal() {
            this.courseModal = true;
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
                this.coursesList = this.coursesList.filter((item) => {
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
        DropZone,
        Slider
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <b-row>
            <b-col lg="12">
                <b-card no-body id="coursesList">
                    <b-card-body>
                        <b-row class="align-items-center g-2">
                            <b-col lg="3" class="me-auto">
                                <b-card-title title-tag="h6" class="mb-0">Instructors List <span
                                        class="badge bg-primary ms-1 align-baseline">1452</span></b-card-title>
                            </b-col>
                            <b-col lg="2">
                                <div class="search-box">
                                    <input type="text" class="form-control search" v-model="searchQuery"
                                        placeholder="Search for courses, price or something...">
                                    <i class="ri-search-line search-icon"></i>
                                </div>
                            </b-col>
                            <b-col lg="auto">
                                <div class="hstack flex-wrap gap-2">
                                    <b-button variant="subtle-danger" class="d-none" id="remove-actions"
                                        onClick="deleteMultiple()"><i class="ri-delete-bin-2-line"></i></b-button>
                                    <b-link href="javascript: void(0);" @click="toggleModal" class="btn btn-secondary"><i
                                            class="bi bi-plus-circle align-baseline me-1"></i> Add Course
                                    </b-link>
                                    <div class="d-flex gap-1">
                                        <b-button type="button" variant="info" data-bs-toggle="offcanvas"
                                            data-bs-target="#courseFilters" aria-controls="courseFilters"><i
                                                class="bi bi-funnel align-baseline me-1"></i> Filter</b-button>
                                        <router-link to="/learning/grid" class="btn btn-subtle-primary btn-icon"><i
                                                class="bi bi-grid"></i></router-link>
                                        <router-link to="/learning/list" class="btn btn-subtle-primary active btn-icon"><i
                                                class="bi bi-list-task"></i></router-link>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-body>
                        <div class="table-responsive table-card">
                            <table class="table table-centered align-middle table-custom-effect table-nowrap mb-0">
                                <thead class="text-muted">
                                    <tr>
                                        <th>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="option"
                                                    id="checkAll">
                                                <label class="form-check-label" for="checkAll"></label>
                                            </div>
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="category">Category</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="course_Name">Course Name
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="instructor">Instructor
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="lessons">Lessons</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="duration">Duration</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="students">Students</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="fees">Fees</th>
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
                                        <td class="id d-none"><b-link href="#" class="fw-medium link-primary">#TBS00{{
                                            data.id }}</b-link></td>
                                        <td class="category"><router-link to="/learning/grid" class="text-reset">{{
                                            data.category }}</router-link></td>
                                        <td class="course_Name">
                                            <div class="d-flex gap-2 align-items-center">
                                                <div class="flex-shrink-0">
                                                    <img :src="data.img" :alt="data.img_alt" class="avatar-xxs" />
                                                </div>
                                                <div class="flex-grow-1">
                                                    <router-link to="/learning/overview" class="text-reset">{{ data.name
                                                    }}</router-link>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="instructor">{{ data.instructor }}</td>
                                        <td class="lessons">{{ data.lessons }}</td>
                                        <td class="duration">{{ data.duration }}</td>
                                        <td class="students">{{ data.students }}</td>
                                        <td class="fees"><span class="fw-medium">{{ data.fees }}</span></td>
                                        <td class="rating"><i class="bi bi-star-fill text-warning align-baseline me-1"></i>
                                            <span class="rate-value">{{ data.rating }}</span>
                                        </td>

                                        <td class="status" v-if="data.status == 'Open'">
                                            <span class="badge bg-info-subtle text-info">{{ data.status }}</span>
                                        </td>
                                        <td class="status" v-if="data.status == 'Close'">
                                            <span class="badge bg-danger-subtle text-danger">{{ data.status }}</span>
                                        </td>
                                        <td>
                                            <ul class="d-flex gap-2 list-unstyled mb-0">
                                                <li>
                                                    <router-link to="/learning/overview"
                                                        class="btn btn-subtle-primary btn-icon btn-sm "><i
                                                            class="ph-eye"></i>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <b-link href="javascript: void(0);"
                                                        class="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn"
                                                        @click="editDetails(data)">
                                                        <i class="ph-pencil"></i></b-link>
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
                                    <p class="text-muted mb-0">We've searched more than 150+ Courses We did not find any
                                        Courses for you search.</p>
                                </div>
                            </div>
                        </div>
                        <b-row class="align-items-center mt-4 pt-2" id="pagination-element" v-if="resultQuery.length >= 1">
                            <b-col cols="sm">
                                <div class="text-muted text-center text-sm-start">
                                    Showing <span class="fw-semibold">{{ resultQuery.length }}</span> of <span
                                        class="fw-semibold">{{ coursesList.length }}</span>
                                    Results
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

        <!-- Modal -->
        <b-modal class="fade" v-model="courseModal" hide-footer content-class="border-0" header-class="bg-danger p-3"
            title-class="text-white" :title="dataEdit ? 'Edit Course Details' : 'Add Course'" id="addCourse">
            <b-form class="tablelist-form" novalidate autocomplete="off" @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <label class="form-label">Course Image<span class="text-danger">*</span></label>
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
                                        <b-button variant="danger" size="sm" @click="deleteRecord">Delete</b-button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="mb-3">
                    <label for="course-title-input" class="form-label">Course title<span
                            class="text-danger">*</span></label>
                    <input type="text" id="course-title-input" class="form-control" placeholder="Enter course title"
                        v-model="event.name" :class="{ 'is-invalid': submitted && !event.name }" />
                </div>


                <div class="mb-3">
                    <label for="course-category-input" class="form-label">Course Category
                        <span class="text-danger">*</span>
                    </label>

                    <select class="form-select" id="course-category-input" v-model="event.category"
                        :class="{ 'is-invalid': submitted && !event.category }">
                        <option value="">Select Course Category</option>
                        <option value="Marketing & Management">Marketing & Management</option>
                        <option value="React Development">React Development</option>
                        <option value="Shopify Development">Shopify Development</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Laravel Development">Laravel Development</option>
                        <option value="Flask Development">Flask Development</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Asp.Net Development">Asp.Net Development</option>
                        <option value="PHP Development">PHP Development</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Data Science">Data Science</option>
                    </select>
                </div>

                <b-row>
                    <b-col lg="6">
                        <div class="mb-3">
                            <label for="instructor-input" class="form-label">Instructor<span
                                    class="text-danger">*</span></label>
                            <input type="text" id="instructor-input" class="form-control"
                                placeholder="Enter instructor name" v-model="event.instructor"
                                :class="{ 'is-invalid': submitted && !event.instructor }" />
                        </div>
                    </b-col>
                    <b-col lg="6">
                        <div class="mb-3">
                            <label for="lessons-input" class="form-label">Lessons<span class="text-danger">*</span></label>
                            <input type="number" id="lessons-input" class="form-control" placeholder="Lessons"
                                v-model="event.lessons" :class="{ 'is-invalid': submitted && !event.lessons }" />
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
                            <label for="duration-input" class="form-label">Duration Time<span
                                    class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="duration-input" placeholder="Select duration"
                                v-model="event.duration" :class="{ 'is-invalid': submitted && !event.duration }" />
                        </div>
                    </b-col>
                    <b-col lg="6">
                        <div class="mb-3">
                            <label for="fees-input" class="form-label">Fees<span class="text-danger">*</span></label>
                            <div class="input-group">
                                <span class="input-group-text">$</span>
                                <input type="number" class="form-control" id="fees-input" placeholder="0.00"
                                    v-model="event.fees" :class="{ 'is-invalid': submitted && !event.fees }" />
                            </div>
                        </div>
                    </b-col>
                    <b-col lg="6">
                        <div class="mb-3">
                            <label for="status-input" class="form-label">Status<span class="text-danger">*</span></label>
                            <select class="form-select" id="status-input" v-model="event.status"
                                :class="{ 'is-invalid': submitted && !event.status }">
                                <option value="">Select Status</option>
                                <option value="Open">Open</option>
                                <option value="Close">Close</option>
                            </select>
                        </div>
                    </b-col>
                </b-row>
                <div class="hstack gap-2 justify-content-end">
                    <b-button type="button" variant="ghost-danger" @click="courseModal = false"><i
                            class="bi bi-x-lg align-baseline me-1"></i> Close</b-button>
                    <b-button type="submit" variant="primary" id="add-btn">
                        {{ dataEdit ? "update" : "Add Course" }}
                    </b-button>
                </div>
            </b-form>
        </b-modal><!--end add Property modal-->

        <!-- delete modal -->
        <b-modal v-model="deleteModal" body-class="p-md-5" modal-class="zoomIn" hide-footer no-close-on-backdrop centered>
            <div class="text-center">
                <div class="text-danger">
                    <i class="bi bi-trash display-4"></i>
                </div>
                <div class="mt-4">
                    <h4 class="mb-2">Are you sure ?</h4>
                    <p class="text-muted mx-3 mb-0">Are you sure you want to remove this record ?</p>
                </div>
            </div>
            <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
                <b-button type="button" variant="light" class="w-sm btn-hover" @click="deleteModal = false">Close</b-button>
                <b-button type="button" variant="danger" class="w-sm btn-hover" id="delete-record" @click="deleteData">Yes,
                    Delete It!</b-button>
            </div>
        </b-modal>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="courseFilters" aria-labelledby="courseFiltersLabel">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="courseFiltersLabel">Course Filters</h5>
                <b-button variant="none" type="button" class="btn-close" data-bs-dismiss="offcanvas"
                    aria-label="Close"></b-button>
            </div>
            <div class="offcanvas-body">
                <form action="#!">
                    <b-row>
                        <b-col lg="12">
                            <div class="mb-3">
                                <label
                                    class="select-category-filter form-label fs-md mb-3 text-decoration-underline">Price</label>
                                    <Slider class="form-range" v-model="value" :min="0" :max="1200" :tooltips="false"/>
                                <div class="formCost d-flex gap-2 align-items-center mt-4">
                                    <input class="form-control" type="text" id="minCost" value="100"> <span
                                        class="fw-semibold text-muted">to</span> <input class="form-control" type="text"
                                        id="maxCost" value="1000">
                                </div>
                            </div>
                        </b-col>
                        <b-col lg="12">
                            <div class="mb-3">
                                <label
                                    class="select-category-filter form-label fs-md mb-3 text-decoration-underline">Courses
                                    category</label>
                                <div class="vstack gap-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="courses-category-all">
                                        <label class="form-check-label" for="courses-category-all">
                                            Select All
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value=""
                                            id="courses-category-filter2">
                                        <label class="form-check-label" for="courses-category-filter2">
                                            Data Science
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value=""
                                            id="courses-category-filter3">
                                        <label class="form-check-label" for="courses-category-filter3">
                                            IT & Software
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value=""
                                            id="courses-category-filter4">
                                        <label class="form-check-label" for="courses-category-filter4">
                                            Engineering
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value=""
                                            id="courses-category-filter5">
                                        <label class="form-check-label" for="courses-category-filter5">
                                            Web Development
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value=""
                                            id="courses-category-filter6">
                                        <label class="form-check-label" for="courses-category-filter6">
                                            Finance & Banking
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value=""
                                            id="courses-category-filter7">
                                        <label class="form-check-label" for="courses-category-filter7">
                                            Management
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col lg="12">
                            <div class="mb-3">
                                <label
                                    class="select-category-filter form-label fs-md mb-3 text-decoration-underline">Ratings</label>
                                <div class="vstack gap-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="rating-all">
                                        <label class="form-check-label" for="rating-all">
                                            Select All
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="rating-filter1">
                                        <label class="form-check-label text-warning" for="rating-filter1">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="rating-filter2">
                                        <label class="form-check-label text-warning" for="rating-filter2">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill text-muted"></i>
                                            <span class="ms-1 text-muted">4 & Up</span>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="rating-filter3">
                                        <label class="form-check-label text-warning" for="rating-filter3">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill text-muted"></i>
                                            <i class="bi bi-star-fill text-muted"></i>
                                            <span class="ms-1 text-muted">3 & Up</span>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="rating-filter4">
                                        <label class="form-check-label text-warning" for="rating-filter4">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill text-muted"></i>
                                            <i class="bi bi-star-fill text-muted"></i>
                                            <i class="bi bi-star-fill text-muted"></i>
                                            <span class="ms-1 text-muted">2 & Up</span>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="rating-filter5">
                                        <label class="form-check-label text-warning" for="rating-filter5">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill text-muted"></i>
                                            <i class="bi bi-star-fill text-muted"></i>
                                            <i class="bi bi-star-fill text-muted"></i>
                                            <i class="bi bi-star-fill text-muted"></i>
                                            <span class="ms-1 text-muted">1 & Up</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </form>
            </div>
            <div class="offcanvas-header htsack gap-2 border-top">
                <b-button variant="subtle-danger" class="w-100"><i class="bi bi-x-lg align-baseline me-1"></i>
                    Reset</b-button>
                <b-button variant="secondary" class="w-100"><i class="bi bi-funnel align-baseline me-1"></i>
                    Filters</b-button>
            </div>
        </div>
</Layout></template>