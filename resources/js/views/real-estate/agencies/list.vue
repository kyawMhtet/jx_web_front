<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import DropZone from "@/common/dropZone.vue";
import {
    ref,
    watch
} from "vue";

import {
    agenciesList
} from "../../../common/data";

import cImg6 from "../../../../images/companies/img-6.png";
import newDoc from "../../../../images/new-document.png";

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

        watch(() => [...files.value], (currentValue) => {
            return currentValue;
        });
        return {
            dropzoneFile,
            files,
            drop,
            selectedFile
        };
    },
    data() {
        return {
            title: "List View",
            items: [{
                text: "Agencies",
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
            agenciesList: agenciesList,
            newDoc,
            // 
            submitted: false,
            agenciesModal: false,
            dataEdit: false,
            deleteModal: false,
            searchQuery: null,
            event: {
                id: "",
                img: "",
                img_alt: "",
                name: "",
                property: "",
                employee: "",
                email: "",
                contact: "",
                location: "",
                since: "",
            },
        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.agenciesList);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.email.toLowerCase().includes(search) ||
                        data.employee.toLowerCase().includes(search) ||
                        data.location.toLowerCase().includes(search) ||
                        data.name.toLowerCase().includes(search)
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        agenciesList() {
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
            let numberOfPages = Math.ceil(this.agenciesList.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(agenciesList) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return agenciesList.slice(from, to);
        },

        // 
        handleSubmit() {
            if (this.dataEdit) {
                this.submitted = true;
                if (this.submitted && (this.event.name && this.event.since && this.event.property && this.event.employee && this.event.email && this.event.contact && this.event.location)) {
                    this.agenciesList = this.agenciesList.map(item => item.id.toString() == this.event.id.toString() ? {
                        ...item,
                        ...this.event
                    } : item);
                    this.agenciesModal = false;
                }
            } else {
                this.submitted = true;
                if (this.submitted && (this.event.name && this.event.since && this.event.property && this.event.employee && this.event.email && this.event.contact && this.event.location)) {
                    const data = {
                        id: (Math.floor(Math.random() * 100 + 20) - 20),
                        img: cImg6,
                        img_alt: "img-6.png",
                        ...this.event
                    };
                    this.agenciesList.unshift(data);
                    this.agenciesModal = false;
                }
            }
        },

        editDetails(data) {
            this.dataEdit = true;
            this.agenciesModal = true;
            this.event = {
                ...data
            };
            this.submitted = false;
        },

        toggleModal() {
            this.agenciesModal = true;
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
                this.agenciesList = this.agenciesList.filter((item) => {
                    return item.id != this.event.id;
                });
                this.deleteModal = false;
            }
        }
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
        <b-row>
            <b-col lg="12">
                <b-card no-body id="agenciesList">
                    <b-card-header>
                        <b-row class="align-items-center gy-3">
                            <b-col lg="3" md="6" class="order-last order-md-first me-auto">
                                <div class="search-box">
                                    <input type="text" class="form-control search"
                                        placeholder="Search for agencies, email, address or something..."
                                        v-model="searchQuery" />
                                    <i class="ri-search-line search-icon"></i>
                                </div>
                            </b-col>
                            <b-col md="auto" class="text-end">
                                <b-row class="align-items-center g-2">
                                    <b-col sm="auto">
                                        <div class="dropdown card-header-dropdown sortble-dropdown">
                                            <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                                <span class="fw-semibold text-uppercase fs-12">Sort by: </span><span
                                                    class="text-muted dropdown-title">Since</span>
                                                <i class="mdi mdi-chevron-down ms-1"></i>
                                            </b-link>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <b-link href="#" class="dropdown-item sort" data-sort="since">
                                                    Since
                                                </b-link>
                                                <b-link href="#" class="dropdown-item sort" data-sort="agencies_Name">
                                                    Agencies name
                                                </b-link>
                                                <b-link href="#" class="dropdown-item sort" data-sort="address">
                                                    Address
                                                </b-link>
                                                <b-link href="#" class="dropdown-item sort" data-sort="total_property">
                                                    Total Property
                                                </b-link>
                                                <b-link href="#" class="dropdown-item sort" data-sort="employee">
                                                    Employee
                                                </b-link>
                                                <b-link href="#" class="dropdown-item sort" data-sort="email">
                                                    Email
                                                </b-link>
                                                <b-link href="#" class="dropdown-item sort" data-sort="contact">
                                                    Contacts
                                                </b-link>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col sm="auto" class="ms-auto">
                                        <div class="d-flex gap-2">
                                            <b-button variant="subtle-danger" class="d-none order-2 order-sm-1"
                                                id="remove-actions" onClick="deleteMultiple()">
                                                <i class="ri-delete-bin-2-line"></i>
                                            </b-button>
                                            <b-button variant="secondary" class="order-1 order-sm-2" @click="toggleModal">
                                                <i class="bi bi-plus-circle align-baseline me-1"></i>
                                                Add Agencies
                                            </b-button>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-card-header>
                    <b-card-body>
                        <div class="table-responsive">
                            <table class="table table-borderless table-centered align-middle table-nowrap mb-0">
                                <thead class="text-muted table-light">
                                    <tr>
                                        <th>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="option"
                                                    id="checkAll" />
                                                <label class="form-check-label" for="checkAll"></label>
                                            </div>
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="agencies_id">
                                            #
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="since">
                                            Since
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="agencies_Name">
                                            Agencies Name
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="address">
                                            Address
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="total_property">
                                            Total Property
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="employee">
                                            Employee
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="email">
                                            Email
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="contact">
                                            Contacts
                                        </th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="list form-check-all">
                                    <tr v-for="(data, index) of resultQuery" :key="index">
                                        <td>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="chk_child" />
                                                <label class="form-check-label"></label>
                                            </div>
                                        </td>
                                        <td class="agencies_id">
                                            <router-link to="/real-estate-agencies/overview"
                                                class="fw-medium link-primary">#TBA00{{ data.id }}</router-link>
                                        </td>
                                        <td class="since">{{ data.since }}</td>
                                        <td class="agencies_Name">
                                            <div class="d-flex align-items-center gap-2">
                                                <img :src="data.img" :alt="data.img_alt" class="avatar-xxs rounded" />
                                                <router-link to="/real-estate-agencies/overview"
                                                    class="text-reset text-capitalize">{{ data.name }}</router-link>
                                            </div>
                                        </td>
                                        <td class="address">{{ data.location }}</td>
                                        <td class="total_property">{{ data.property }}</td>
                                        <td class="employee">{{ data.employee }}</td>
                                        <td class="email">{{ data.email }}</td>
                                        <td class="contact">{{ data.contact }}</td>
                                        <td>
                                            <ul class="d-flex gap-2 list-unstyled mb-0">
                                                <li>
                                                    <router-link to="/real-estate-agencies/overview"
                                                        class="btn btn-subtle-primary btn-icon btn-sm"><i
                                                            class="ph-eye"></i></router-link>
                                                </li>
                                                <li>
                                                    <b-link href="javascript: void(0);"
                                                        class="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn"
                                                        @click="editDetails(data)"><i class="ph-pencil"></i></b-link>
                                                </li>
                                                <li>
                                                    <b-link href="javascript: void(0);"
                                                        class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"
                                                        @click="deleteModalToggle(data)"><i class="ph-trash"></i></b-link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                                <!-- end tbody -->
                            </table>

                            <div class="noresult" v-if="resultQuery.length < 1">
                                <div class="text-center py-4">
                                    <i class="ph-magnifying-glass fs-1 text-primary"></i>
                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                    <p class="text-muted mb-0">
                                        We've searched more than 150+ agencies We did not find any
                                        agencies for you search.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <b-row class="mt-3 align-items-center" id="pagination-element" v-if="resultQuery.length >= 1">
                            <b-col cols="sm">
                                <div class="text-muted text-center text-sm-start">
                                    Showing <span class="fw-semibold">{{ resultQuery.length }}</span> of
                                    <span class="fw-semibold">{{ agenciesList.length }}</span> Results
                                </div>
                            </b-col>
                            <b-col sm="auto" class="mt-3 mt-sm-0">
                                <div class="pagination-wrap justify-content-center hstack gap-2">
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
    </Layout>

    <!-- Add & Edit Modal -->
    <b-modal v-model="agenciesModal" title-class="exampleModalLabel"
        :title="dataEdit ? 'Edit Agencies Details' : 'Add Agencies'" id="addAgencies" hide-footer no-close-on-backdrop
        centered>
        <form @submit.prevent="handleSubmit" class="tablelist-form" novalidate="" autocomplete="off">

            <div class="mb-3">
                <label class="form-label">Agencies Images<span class="text-danger">*</span></label>
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
                <label for="agencies-name-input" class="form-label">Agencies Name<span class="text-danger">*</span></label>
                <input type="text" id="agencies-name-input" class="form-control" placeholder="Enter agencies name"
                    v-model="event.name" :class="{ 'is-invalid': submitted && !event.name }" />
            </div>
            <div class="mb-3">
                <label for="since-input" class="form-label">Since<span class="text-danger">*</span></label>
                <input type="date" class="form-control flatpickr-input" id="since-input" placeholder="Enter since from"
                    v-model="event.since" :class="{ 'is-invalid': submitted && !event.since }">
            </div>

            <b-row>
                <b-col lg="6">
                    <div class="mb-3">
                        <label for="property-input" class="form-label">Total Property<span
                                class="text-danger">*</span></label>
                        <input type="number" class="form-control" id="property-input" placeholder="Enter property"
                            v-model="event.property" :class="{ 'is-invalid': submitted && !event.property }">
                    </div>
                </b-col>
                <b-col lg="6">
                    <div class="mb-3">
                        <label for="employee-input" class="form-label">Employee<span class="text-danger">*</span></label>
                        <input type="number" class="form-control" id="employee-input" placeholder="Enter employee"
                            v-model="event.employee" :class="{ 'is-invalid': submitted && !event.employee }">
                    </div>
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="6">
                    <div class="mb-3">
                        <label for="email-input" class="form-label">Email<span class="text-danger">*</span></label>
                        <input type="email" class="form-control" id="email-input" placeholder="Enter email"
                            v-model="event.email" :class="{ 'is-invalid': submitted && !event.email }">
                    </div>
                </b-col>
                <b-col lg="6">
                    <div class="mb-3">
                        <label for="contact-input" class="form-label">Contact No<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" id="contact-input" placeholder="Enter contact number"
                            v-model="event.contact" :class="{ 'is-invalid': submitted && !event.contact }">
                    </div>
                </b-col>
            </b-row>

            <div>
                <label for="address-input" class="form-label">Address<span class="text-danger">*</span></label>
                <textarea class="form-control" id="address-input" rows="3" placeholder="Enter address"
                    v-model="event.location" :class="{ 'is-invalid': submitted && !event.location }"></textarea>
        </div>
        <div class="mt-3 hstack gap-2 justify-content-end">
            <b-button type="button" variant="ghost-danger" @click="agenciesModal = false">
                <i class="bi bi-x-lg align-baseline me-1"></i> Close</b-button>
            <b-button type="submit" variant="primary" id="add-btn">{{ dataEdit ? "update" : "Add" }}</b-button>
        </div>
    </form>
</b-modal>

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
</b-modal></template>
