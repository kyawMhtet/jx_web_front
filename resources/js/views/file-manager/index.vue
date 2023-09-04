<script>
import Layout from "../../layouts/main.vue";
import { storageDetailsChart } from "./chartsData";
import { SimpleBar } from "simplebar-vue3";
import DropZone from "@/common/dropZone.vue";
import { ref, watch } from "vue";

import avatar1 from "../../../images/users/48/avatar-1.jpg"
import newDoc from "../../../images/new-document.png"
import rocket from "../../../images/techny-rocket.png"
import dropbox from "../../../images/brands/dropbox.png"
import google_drive from "../../../images/brands/google-drive.png"
import cloud_computing from "../../../images/brands/cloud-computing.png"


export default {
    data() {
        return {
            storageDetailsChart: storageDetailsChart,
            createFolder: false,
            avatar1, newDoc, rocket, dropbox, google_drive, cloud_computing, 
        };
    },
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

        watch(() => [...files.value], () => [...galleryFiles.value], (currentValue) => { return currentValue; });

        // gallery dropzone
        let galleryFiles = ref([]);
        let galleryDropzoneFile = ref("");
        const galleryDrop = (e) => {
            galleryDropzoneFile.value = e.dataTransfer.files[0];
            galleryFiles.value.push(galleryDropzoneFile.value);
        };
        const gallerySelectedFile = () => {
            galleryDropzoneFile.value = document.querySelector(".galleryDropzoneFile").files[0];
            galleryFiles.value.push(galleryDropzoneFile.value);
        };

        return { dropzoneFile, files, drop, selectedFile, galleryDrop, gallerySelectedFile, galleryFiles };
    },
    mounted() {
        document.body.classList.add("file-detail-show");

        window.addEventListener('resize', function (ev) {
            ev.preventDefault();
            var windowSize = document.documentElement.clientWidth;
            if (windowSize < 1400) {
                document.body.classList.remove("file-detail-show");
            } else {
                document.body.classList.add("file-detail-show");
            }
        });
    },
    methods: {
        sidebarClose() {
            document.body.classList.remove("file-detail-show");
        },
        sidebarOpen() {
            document.body.classList.add("file-detail-show");
        },
        deleteRecord(ele) {
            ele.target.parentElement.parentElement.parentElement.remove();
        }
    },
    components: {
        Layout,
        SimpleBar,
        DropZone
    },
};
</script>

<template>
    <Layout>
        <div class="m-n2">
            <div class="d-flex">
                <b-card no-body class="file-manager-wrapper rounded-end-0 shadow-none">
                    <SimpleBar data-simplebar class="h-100">
                        <b-card-body class="d-flex flex-column h-100">
                            <div class="position-relative mb-4 d-flex align-items-center gap-2">
                                <div class="flex-shrink-0 position-relative">
                                    <img :src="avatar1" alt="" class="avatar-sm rounded">
                                    <span
                                        class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span
                                            class="visually-hidden">unread messages</span></span>
                                </div>
                                <div class="flex-grow-1">
                                    <p class="text-muted mb-2">Welcom to file manager</p>
                                    <b-link href="#!" class="stretched-link">
                                        <h6 class="fs-md mb-0">Silene Oliveira</h6>
                                    </b-link>
                                </div>
                            </div>
                            <div class="mb-4">
                                <DropZone @drop.prevent="drop" @change="selectedFile" cloudIcon="bootstrap"
                                    dropzoneClass="file-dropzone border border-1 border-dashed" />
                                <ul class="list-unstyled mb-0" id="dropzone-preview">
                                    <li class="mt-2" id="dropzone-preview-list">

                                        <div class="border rounded" v-for="(file, index) of files" :key="index">
                                            <div class="d-flex flex-wrap gap-2 p-2">
                                                <div class="flex-shrink-0 me-3">
                                                    <div class="avatar-sm bg-light rounded p-2">
                                                        <img class="img-fluid rounded d-block"
                                                            :src="newDoc" />
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
                                                    <b-button size="sm" variant="danger"
                                                        @click="deleteRecord">Delete</b-button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <!-- end dropzon-preview -->

                            </div>
                            <div class="mb-4">
                                <h6>File Manager</h6>
                                <ul class="file-manager-menu list-unstyled">
                                    <li>
                                        <b-link href="#!"><i class="bi bi-folder align-baseline me-1"></i> All Folders</b-link>
                                    </li>
                                    <li>
                                        <b-link href="#!"><i class="bi bi-file-text align-baseline me-1"></i> Documents</b-link>
                                    </li>
                                    <li>
                                        <b-link href="#!"><i class="bi bi-images align-baseline me-1"></i> Media</b-link>
                                    </li>
                                    <li>
                                        <b-link href="#!"><i class="bi bi-clock-history align-baseline me-1"></i> Recent File</b-link>
                                    </li>
                                    <li>
                                        <b-link href="#!"><i class="bi bi-star align-baseline me-1"></i> Important</b-link>
                                    </li>
                                </ul>
                            </div>
                            <b-card no-body class="mt-auto mb-0">
                                <b-card-body class="pt-2">
                                    <div class="text-center mt-n5">
                                        <img :src="rocket" alt="" height="90">
                                        <p class="text-md mt-4">Upgrade to Pro for unlimited storage</p>
                                        <b-link href="#!" class="link-effect">Upgrade Now <i class="bi bi-arrow-right align-baseline ms-1"></i></b-link>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-card-body>
                    </SimpleBar>
                </b-card><!--end file-manager-wrapper-->
                <b-card no-body
                    class="file-manager-content-wrapper w-100 rounded-0 border border-1 border-top-0 border-bottom-0 shadow-none">
                    <b-card-body>
                        <div class="d-flex gap-3 align-items-center mb-3">
                            <div class="flex-shrink-0 d-block d-lg-none">
                                <b-button type="button" variant="subtle-success" class="btn-icon file-menu-btn">
                                    <i class="ri-menu-2-fill align-bottom"></i>
                                </b-button>
                            </div>
                            <div class="search-box flex-grow-1">
                                <input type="text" class="form-control search" placeholder="Search products, price etc...">
                                <i class="ri-search-line search-icon"></i>
                            </div>
                            <div class="flex-shrink-0">
                                <b-button type="button" variant="primary" @click="createFolder = !createFolder"><i
                                        class="bi bi-plus-lg align-baseline"></i> <span
                                        class="ms-1 d-none d-sm-inline-block">Create Folders</span></b-button>
                            </div>
                        </div>
                        <b-row class="row-cols-xxl-5">
                            <b-col>
                                <b-link href="#!" class="card">
                                    <b-card-body class="d-flex align-items-center gap-3 p-2">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div class="avatar-title bg-primary-subtle text-primary-emphasis fs-md rounded">
                                                <i class="bi bi-file-earmark-text"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <p class="flex-grow-1 mb-0 text-muted"><b>345</b> Files</p>
                                        </div>
                                    </b-card-body>
                                </b-link>
                            </b-col>
                            <b-col>
                                <b-link href="#!" class="card">
                                    <b-card-body class="d-flex align-items-center gap-3 p-2">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div class="avatar-title bg-danger-subtle text-danger-emphasis fs-md rounded">
                                                <i class="bi bi-images"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <p class="flex-grow-1 mb-0 text-muted"><b>3124</b> Images</p>
                                        </div>
                                    </b-card-body>
                                </b-link>
                            </b-col>
                            <b-col>
                                <b-link href="#!" class="card">
                                    <b-card-body class="d-flex align-items-center gap-3 p-2">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div
                                                class="avatar-title bg-secondary-subtle text-secondary-emphasis fs-md rounded">
                                                <i class="bi bi-camera-reels"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <p class="flex-grow-1 mb-0 text-muted"><b>213</b> Video</p>
                                        </div>
                                    </b-card-body>
                                </b-link>
                            </b-col>
                            <b-col>
                                <b-link href="#!" class="card">
                                    <b-card-body class="d-flex align-items-center gap-3 p-2">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div class="avatar-title bg-warning-subtle text-warning-emphasis fs-md rounded">
                                                <i class="bi bi-filetype-doc"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <p class="flex-grow-1 mb-0 text-muted"><b>469</b> Docs Files</p>
                                        </div>
                                    </b-card-body>
                                </b-link>
                            </b-col>
                            <b-col>
                                <b-link href="#!" class="card">
                                    <b-card-body class="d-flex align-items-center gap-3 p-2">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div class="avatar-title bg-success-subtle text-success-emphasis fs-md rounded">
                                                <i class="bi bi-google-play"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <p class="flex-grow-1 mb-0 text-muted"><b>18</b> Application</p>
                                        </div>
                                    </b-card-body>
                                </b-link>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col lg="4">
                                <b-card no-body class="border shadow-none">
                                    <b-card-body>
                                        <div class="d-flex gap-3 align-items-center mb-4">
                                            <div class="avatar-sm flex-shrink-0">
                                                <div class="avatar-title bg-light rounded">
                                                    <img :src="dropbox" alt="" class="avatar-xs">
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="fs-md">Dropbox</h6>
                                                <p class="mb-0"><b-link href="#!">Open Folders</b-link></p>
                                            </div>
                                        </div>

                                        <!-- Progress sm -->
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 93%;"
                                                aria-valuenow="93" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div class="d-flex mt-2">
                                            <p class="flex-grow-1 mb-0">1,324 Files</p>
                                            <div class="fw-semibold flex-shrink-0">14.57GB</div>
                                        </div>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                            <b-col lg="4">
                                <b-card no-body class="border shadow-none">
                                    <b-card-body>
                                        <div class="d-flex gap-3 align-items-center mb-4">
                                            <div class="avatar-sm flex-shrink-0">
                                                <div class="avatar-title bg-light rounded">
                                                    <img :src="google_drive" alt="Google Drive"
                                                        class="avatar-xs">
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="fs-md">Google Drive</h6>
                                                <p class="mb-0"><b-link href="#!">Open Folders</b-link></p>
                                            </div>
                                        </div>

                                        <!-- Progress sm -->
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 74%;"
                                                aria-valuenow="74" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div class="d-flex mt-2">
                                            <p class="flex-grow-1 mb-0">3451 Files</p>
                                            <div class="fw-semibold flex-shrink-0">30.45GB</div>
                                        </div>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                            <b-col lg="4">
                                <b-card no-body class="border shadow-none">
                                    <b-card-body>
                                        <div class="d-flex gap-3 align-items-center mb-4">
                                            <div class="avatar-sm flex-shrink-0">
                                                <div class="avatar-title bg-light rounded">
                                                    <img :src="cloud_computing" alt="Google Drive"
                                                        class="avatar-xs">
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="fs-md">Cloud Storage</h6>
                                                <p class="mb-0"><b-link href="#!">Open Folders</b-link></p>
                                            </div>
                                        </div>

                                        <!-- Progress sm -->
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-secondary" role="progressbar" style="width: 20%;"
                                                aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div class="d-flex mt-2">
                                            <p class="flex-grow-1 mb-0">2416 Files</p>
                                            <div class="fw-semibold flex-shrink-0">29.57GB</div>
                                        </div>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                        </b-row>

                        <div class="d-flex align-items-center gap-2 mb-3">
                            <b-card-title title tag="h6" class="flex-grow-1 mb-0">Folders</b-card-title>
                            <div class="flex-shrink-0 dropdown">
                                <b-button variant="subtle-secondary" size="sm" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i class="bi bi-three-dots-vertical"></i>
                                </b-button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><b-link class="dropdown-item" href="#"><i
                                                class="bi bi-folder-plus me-1 align-baseline"></i> Add Folder</b-link></li>
                                    <li><b-link class="dropdown-item" href="#"><i
                                                class="bi bi-cloud-arrow-down me-1 align-baseline"></i> Import</b-link></li>
                                    <li><b-link class="dropdown-item" href="#"><i
                                                class="bi bi-cloud-arrow-up me-1 align-baseline"></i> Export</b-link></li>
                                </ul>
                            </div>
                        </div>

                        <b-row>
                            <b-col lg="4">
                                <b-card no-body class="border shadow-none">
                                    <b-card-body>
                                        <div class="d-flex gap-3 mb-4">
                                            <div class="flex-grow-1">
                                                <div class="avatar-xs">
                                                    <div class="avatar-title bg-transparent rounded text-primary fs-3">
                                                        <i class="bi bi-folder2-open"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 dropdown">
                                                <b-link href="#!" class="text-reset d-inline-block" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </b-link>
                                                <ul class="dropdown-menu dropdown-menu-end">
                                                    <li><b-link class="dropdown-item" href="#"><i
                                                                class="bi bi-folder2-open me-1 align-baseline"></i> Open
                                                            Folder</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#"><i
                                                                class="bi bi-pencil-square me-1 align-baseline"></i>
                                                            Edit</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#"><i
                                                                class="bi bi-trash3 me-1 align-baseline"></i> Delete</b-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <b-link href="#!">
                                            <h6 class="fs-md text-truncate">My Documents</h6>
                                        </b-link>
                                        <ul class="list-unstyled hstack gap-2 text-muted mb-0">
                                            <li>
                                                <b>24</b> Feb
                                            </li>
                                            <li>
                                                <b>733</b> Files
                                            </li>
                                            <li>
                                                <b>1.4</b> GB
                                            </li>
                                        </ul>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                            <b-col lg="4">
                                <b-card no-body class="border shadow-none">
                                    <b-card-body>
                                        <div class="d-flex gap-3 mb-4">
                                            <div class="flex-grow-1">
                                                <div class="avatar-xs">
                                                    <div class="avatar-title bg-transparent rounded text-primary fs-3">
                                                        <i class="bi bi-folder2-open"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 dropdown">
                                                <b-link href="#!" class="text-reset d-inline-block" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </b-link>
                                                <ul class="dropdown-menu dropdown-menu-end">
                                                    <li><b-link class="dropdown-item" href="#"><i
                                                                class="bi bi-folder2-open me-1 align-baseline"></i> Open
                                                            Folder</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#"><i
                                                                class="bi bi-pencil-square me-1 align-baseline"></i>
                                                            Edit</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#"><i
                                                                class="bi bi-trash3 me-1 align-baseline"></i> Delete</b-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <b-link href="#!">
                                            <h6 class="fs-md text-truncate">Steex - Admin & Dashboard Templates</h6>
                                        </b-link>
                                        <ul class="list-unstyled hstack gap-2 text-muted mb-0">
                                            <li>
                                                <b>08</b> Feb
                                            </li>
                                            <li>
                                                <b>2473</b> Files
                                            </li>
                                            <li>
                                                <b>1.6</b> GB
                                            </li>
                                        </ul>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                            <b-col lg="4">
                                <b-card no-body class="border shadow-none">
                                    <b-card-body>
                                        <div class="d-flex gap-3 mb-4">
                                            <div class="flex-grow-1">
                                                <div class="avatar-xs">
                                                    <div class="avatar-title bg-transparent rounded text-primary fs-3">
                                                        <i class="bi bi-folder2-open"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 dropdown">
                                                <b-link href="#!" class="text-reset d-inline-block" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </b-link>
                                                <ul class="dropdown-menu dropdown-menu-end">
                                                    <li><b-link class="dropdown-item" href="#"><i
                                                                class="bi bi-folder2-open me-1 align-baseline"></i> Open
                                                            Folder</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#"><i
                                                                class="bi bi-pencil-square me-1 align-baseline"></i>
                                                            Edit</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#"><i
                                                                class="bi bi-trash3 me-1 align-baseline"></i> Delete</b-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <b-link href="#!">
                                            <h6 class="fs-md text-truncate">Database</h6>
                                        </b-link>
                                        <ul class="list-unstyled hstack gap-2 text-muted mb-0">
                                            <li>
                                                <b>16</b> March
                                            </li>
                                            <li>
                                                <b>269</b> Files
                                            </li>
                                            <li>
                                                <b>716</b> MB
                                            </li>
                                        </ul>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                        </b-row>

                        <div id="contactList" class="mt-2">
                            <div class="d-flex align-items-center gap-2 mb-3">
                                <b-card-title title tag="h6" class="flex-grow-1 mb-0">File Recent</b-card-title>
                                <div class="dropdown card-header-dropdown sortble-dropdown flex-shrink-0">
                                    <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <span class="fw-semibold text-uppercase fs-12">Sort by:
                                        </span><span class="text-muted dropdown-title">Docs Type</span> <i
                                            class="mdi mdi-chevron-down ms-1"></i>
                                    </b-link>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <b-link herf="#" class="dropdown-item sort" data-sort="docs_type">Docs Type</b-link>
                                        <b-link herf="#" class="dropdown-item sort" data-sort="size">Size</b-link>
                                        <b-link herf="#" class="dropdown-item sort" data-sort="date">Date</b-link>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-borderless table-centered align-middle table-nowrap mb-0">
                                    <thead class="text-muted table-light">
                                        <tr>
                                            <th>
                                                <div class="form-check checkbox-product-list">
                                                    <input class="form-check-input" type="checkbox" value="1"
                                                        id="checkbox-1">
                                                    <label class="form-check-label" for="checkbox-1"></label>
                                                </div>
                                            </th>
                                            <th scope="col" class="sort cursor-pointer" data-sort="docs_type">Type</th>
                                            <th scope="col" class="sort cursor-pointer" data-sort="document_name">
                                                Document Name</th>
                                            <th scope="col" class="sort cursor-pointer" data-sort="file_item">File Item
                                            </th>
                                            <th scope="col" class="sort cursor-pointer" data-sort="size">Size</th>
                                            <th scope="col" class="sort cursor-pointer" data-sort="date">Last Modified
                                            </th>
                                            <th scope="col" class="sort cursor-pointer">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody class="list" id="file-list">
                                        <tr>
                                            <th>
                                                <div class="form-check checkbox-product-list">
                                                    <input class="form-check-input" type="checkbox" value="2"
                                                        id="checkbox-2">
                                                    <label class="form-check-label" for="checkbox-2"></label>
                                                </div>
                                            </th>
                                            <td class="docs_type">
                                                <i class="bi bi-filetype-pdf text-danger-emphasis fs-4"></i>
                                            </td>
                                            <td>
                                                <b-link href="#!" class="text-reset document_name">Velzon Docs File</b-link>
                                            </td>
                                            <td class="file_item">24</td>
                                            <td class="size">
                                                2.5 MB
                                            </td>
                                            <td class="date">
                                                15 Feb, 2023
                                            </td>
                                            <td>
                                                <div class="dropdown">
                                                    <b-button variant="subtle-secondary" size="sm" class="dropdown" type="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="ri-more-fill align-middle"></i>
                                                    </b-button>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li><b-link class="dropdown-item view-item-btn" @click="sidebarOpen"
                                                                href="javascript:void(0);"><i
                                                                    class="ri-eye-fill align-bottom me-2 text-muted"></i>View</b-link>
                                                        </li>
                                                        <li><b-link class="dropdown-item edit-item-btn"><i
                                                                    class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                Edit</b-link></li>
                                                        <li><b-link class="dropdown-item remove-item-btn"><i
                                                                    class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                Delete</b-link></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr><!-- end tr -->
                                        <tr>
                                            <th>
                                                <div class="form-check checkbox-product-list">
                                                    <input class="form-check-input" type="checkbox" value="3"
                                                        id="checkbox-3">
                                                    <label class="form-check-label" for="checkbox-3"></label>
                                                </div>
                                            </th>
                                            <td class="docs_type">
                                                <i class="bi bi-filetype-psd text-primary-emphasis fs-4"></i>
                                            </td>
                                            <td>
                                                <b-link href="#!" class="text-reset document_name">Steex Design Kit.psd</b-link>
                                            </td>
                                            <td class="file_item">148</td>
                                            <td class="size">
                                                234.87 MB
                                            </td>
                                            <td class="date">
                                                29 Jan, 2023
                                            </td>
                                            <td>
                                                <div class="dropdown">
                                                    <b-button class="dropdown" variant="subtle-secondary" size="sm" type="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="ri-more-fill align-middle"></i>
                                                    </b-button>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li><b-link class="dropdown-item view-item-btn" @click="sidebarOpen"
                                                                href="javascript:void(0);"><i
                                                                    class="ri-eye-fill align-bottom me-2 text-muted"></i>View</b-link>
                                                        </li>
                                                        <li><b-link class="dropdown-item edit-item-btn"><i
                                                                    class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                Edit</b-link></li>
                                                        <li><b-link class="dropdown-item remove-item-btn"><i
                                                                    class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                Delete</b-link></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr><!-- end tr -->
                                        <tr>
                                            <th>
                                                <div class="form-check checkbox-product-list">
                                                    <input class="form-check-input" type="checkbox" value="4"
                                                        id="checkbox-4">
                                                    <label class="form-check-label" for="checkbox-4"></label>
                                                </div>
                                            </th>
                                            <td class="docs_type">
                                                <i class="bi bi-filetype-mp4 text-warning-emphasis fs-4"></i>
                                            </td>
                                            <td>
                                                <b-link href="#!" class="text-reset document_name">Velzon Docs Video.mp4</b-link>
                                            </td>
                                            <td class="file_item">19</td>
                                            <td class="size">
                                                149.33 MB
                                            </td>
                                            <td class="date">
                                                12 Nov, 2022
                                            </td>
                                            <td>
                                                <div class="dropdown">
                                                    <b-button class="dropdown" variant="subtle-secondary" size="sm" type="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="ri-more-fill align-middle"></i>
                                                    </b-button>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li><b-link class="dropdown-item view-item-btn" @click="sidebarOpen"
                                                                href="javascript:void(0);"><i
                                                                    class="ri-eye-fill align-bottom me-2 text-muted"></i>View</b-link>
                                                        </li>
                                                        <li><b-link class="dropdown-item edit-item-btn"><i
                                                                    class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                Edit</b-link></li>
                                                        <li><b-link class="dropdown-item remove-item-btn"><i
                                                                    class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                Delete</b-link></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr><!-- end tr -->
                                        <tr>
                                            <th>
                                                <div class="form-check checkbox-product-list">
                                                    <input class="form-check-input" type="checkbox" value="4"
                                                        id="checkbox-4">
                                                    <label class="form-check-label" for="checkbox-4"></label>
                                                </div>
                                            </th>
                                            <td class="docs_type">
                                                <i class="bi bi-filetype-gif text-success-emphasis fs-4"></i>
                                            </td>
                                            <td>
                                                <b-link href="#!" class="text-reset document_name">Offline Pages.gif</b-link>
                                            </td>
                                            <td class="file_item">01</td>
                                            <td class="size">
                                                0.987 MB
                                            </td>
                                            <td class="date">
                                                12 Nov, 2022
                                            </td>
                                            <td>
                                                <div class="dropdown">
                                                    <b-button class="dropdown" variant="subtle-secondary" size="sm" type="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="ri-more-fill align-middle"></i>
                                                    </b-button>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li><b-link class="dropdown-item view-item-btn" @click="sidebarOpen"
                                                                href="javascript:void(0);"><i
                                                                    class="ri-eye-fill align-bottom me-2 text-muted"></i>View</b-link>
                                                        </li>
                                                        <li><b-link class="dropdown-item edit-item-btn"><i
                                                                    class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                Edit</b-link></li>
                                                        <li><b-link class="dropdown-item remove-item-btn"><i
                                                                    class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                Delete</b-link></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr><!-- end tr -->
                                        <tr>
                                            <th>
                                                <div class="form-check checkbox-product-list">
                                                    <input class="form-check-input" type="checkbox" value="4"
                                                        id="checkbox-4">
                                                    <label class="form-check-label" for="checkbox-4"></label>
                                                </div>
                                            </th>
                                            <td class="docs_type">
                                                <i class="bi bi-filetype-svg text-secondary-emphasis fs-4"></i>
                                            </td>
                                            <td>
                                                <b-link href="#!" class="text-reset document_name">home Pattern Wave.svg</b-link>
                                            </td>
                                            <td class="file_item">01</td>
                                            <td class="size">
                                                3.87 MB
                                            </td>
                                            <td class="date">
                                                19 Dec, 2022
                                            </td>
                                            <td>
                                                <div class="dropdown">
                                                    <b-button class="dropdown" variant="subtle-secondary" size="sm" type="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="ri-more-fill align-middle"></i>
                                                    </b-button>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li><b-link class="dropdown-item view-item-btn" @click="sidebarOpen"
                                                                href="javascript:void(0);"><i
                                                                    class="ri-eye-fill align-bottom me-2 text-muted"></i>View</b-link>
                                                        </li>
                                                        <li><b-link class="dropdown-item edit-item-btn"><i
                                                                    class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                Edit</b-link></li>
                                                        <li><b-link class="dropdown-item remove-item-btn"><i
                                                                    class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                Delete</b-link></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr><!-- end tr -->
                                        <tr>
                                            <th>
                                                <div class="form-check checkbox-product-list">
                                                    <input class="form-check-input" type="checkbox" value="4"
                                                        id="checkbox-4">
                                                    <label class="form-check-label" for="checkbox-4"></label>
                                                </div>
                                            </th>
                                            <td class="docs_type">
                                                <i class="bi bi-filetype-scss text-danger fs-4"></i>
                                            </td>
                                            <td>
                                                <b-link href="#!" class="text-reset document_name">_variables.scss</b-link>
                                            </td>
                                            <td class="file_item">01</td>
                                            <td class="size">
                                                0.234 KB
                                            </td>
                                            <td class="date">
                                                03 April, 2023
                                            </td>
                                            <td>
                                                <div class="dropdown">
                                                    <b-button class="dropdown" variant="subtle-secondary" size="sm" type="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="ri-more-fill align-middle"></i>
                                                    </b-button>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li><b-link class="dropdown-item view-item-btn" @click="sidebarOpen"
                                                                href="javascript:void(0);"><i
                                                                    class="ri-eye-fill align-bottom me-2 text-muted"></i>View</b-link>
                                                        </li>
                                                        <li><b-link class="dropdown-item edit-item-btn"><i
                                                                    class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                Edit</b-link></li>
                                                        <li><b-link class="dropdown-item remove-item-btn"><i
                                                                    class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                Delete</b-link></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr><!-- end tr -->
                                    </tbody><!-- end tbody -->
                                </table>
                                <div class="noresult" style="display: none">
                                    <div class="text-center">
                                        <h5 class="mt-2">Sorry! No Result Found</h5>
                                        <p class="text-muted mb-0">We've searched more than 150+ transactions We did not
                                            find any transactions for you search.</p>
                                    </div>
                                </div>
                            </div>
                            <b-row class="align-items-center text-center text-sm-start mt-3">
                                <b-col cols="sm">
                                    <div class="text-muted">
                                        Showing <span class="fw-semibold">6</span> of <span class="fw-semibold">10</span>
                                        Results
                                    </div>
                                </b-col>
                                <b-col sm="auto" class="mt-3 mt-sm-0">
                                    <div class="pagination-wrap hstack justify-content-center gap-2">
                                        <b-link class="page-item pagination-prev disabled" href="#">
                                            Previous
                                        </b-link>
                                        <ul class="pagination listjs-pagination mb-0">
                                            <li class="active"><b-link class="page" href="#" data-i="1" data-page="10">1</b-link>
                                            </li>
                                            <li><b-link class="page" href="#" data-i="2" data-page="10">2</b-link></li>
                                        </ul>
                                        <b-link class="page-item pagination-next" href="#">
                                            Next
                                        </b-link>
                                    </div>
                                </b-col>
                            </b-row>
                        </div><!--end file tables-->
                    </b-card-body>
                </b-card>
                <b-card no-body class="file-manager-right-wrapper rounded-start-0 shadow-none">
                    <SimpleBar data-simplebar class="h-100">
                        <b-card-header class="d-flex gap-2 align-items-center">
                            <div>
                                <b-button type="button" class="btn btn-sm btn-icon btn-subtle-danger close-btn-overview"
                                    @click="sidebarClose">
                                    <i class="ri-close-fill align-bottom"></i>
                                </b-button>
                            </div>
                            <b-card-title title tag="h6" class="flex-grow-1 mb-0">Storage Details</b-card-title>
                            <div class="flex-shrink-0">
                                <p class="text-danger mb-0">Used 57%</p>
                            </div>
                        </b-card-header>
                        <b-card-body>
                            <apexchart type="donut" class="e-charts shadow-none mt-2" height="350" width="270" dir="ltr"
                                :series="storageDetailsChart.series" :options="storageDetailsChart.chartOptions">
                            </apexchart>
                            <div class="mt-4 mb-3">
                                <b-card-title title tag="h6" class="mb-0">Pined Items</b-card-title>
                            </div>
                            <ul class="vstack gap-2 list-unstyled">
                                <li>
                                    <b-link href="#!" class="d-block p-2 bg-light bg-opacity-50 rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0 ronded">
                                                <div class="avatar-title bg-body-secondary text-body">
                                                    <i class="bi bi-pin"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Skote Design file.psd</h6>
                                            </div>
                                            <div class="flex-shrink-0 text-muted">
                                                2.5 MB
                                            </div>
                                        </div>
                                    </b-link>
                                </li>
                                <li>
                                    <b-link href="#!" class="d-block p-2 bg-light bg-opacity-50 rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0 ronded">
                                                <div class="avatar-title bg-body-secondary text-body">
                                                    <i class="bi bi-pin"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Trip Photography</h6>
                                            </div>
                                            <div class="flex-shrink-0 text-muted">
                                                276 MB
                                            </div>
                                        </div>
                                    </b-link>
                                </li>
                                <li>
                                    <b-link href="#!" class="d-block p-2 bg-light bg-opacity-50 rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0 ronded">
                                                <div class="avatar-title bg-body-secondary text-body">
                                                    <i class="bi bi-pin"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Steex Admin</h6>
                                            </div>
                                            <div class="flex-shrink-0 text-muted">
                                                631 MB
                                            </div>
                                        </div>
                                    </b-link>
                                </li>
                                <li>
                                    <b-link href="#!" class="d-block p-2 bg-light bg-opacity-50 rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0 ronded">
                                                <div class="avatar-title bg-body-secondary text-body">
                                                    <i class="bi bi-pin"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Velzon Design file</h6>
                                            </div>
                                            <div class="flex-shrink-0 text-muted">
                                                1.3 GB
                                            </div>
                                        </div>
                                    </b-link>
                                </li>
                                <li>
                                    <b-link href="#!" class="d-block p-2 bg-light bg-opacity-50 rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0 ronded">
                                                <div class="avatar-title bg-body-secondary text-body">
                                                    <i class="bi bi-pin"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Velzon React</h6>
                                            </div>
                                            <div class="flex-shrink-0 text-muted">
                                                698 MB
                                            </div>
                                        </div>
                                    </b-link>
                                </li>
                                <li>
                                    <b-link href="#!" class="d-block p-2 bg-light bg-opacity-50 rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0 ronded">
                                                <div class="avatar-title bg-body-secondary text-body">
                                                    <i class="bi bi-pin"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Steex Docs</h6>
                                            </div>
                                            <div class="flex-shrink-0 text-muted">
                                                32.19 MB
                                            </div>
                                        </div>
                                    </b-link>
                                </li>
                                <li>
                                    <b-link href="#!" class="d-block p-2 bg-light bg-opacity-50 rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0 ronded">
                                                <div class="avatar-title bg-body-secondary text-body">
                                                    <i class="bi bi-pin"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Skote Design file.psd</h6>
                                            </div>
                                            <div class="flex-shrink-0 text-muted">
                                                2.5 MB
                                            </div>
                                        </div>
                                    </b-link>
                                </li>
                            </ul>
                            <b-card no-body class="card-primary file-manager-widgets mb-0">
                                <b-card-body>
                                    <p class="fs-md text-white text-opacity-75">Invite 2 friends and get 5 GB extra
                                        space.</p>
                                    <b-link href="#!" class="stretched-link text-decoration-underline text-reset">Invite
                                        Friends <i class="bi bi-arrow-right align-baseline ms-1"></i></b-link>
                                </b-card-body>
                            </b-card>
                        </b-card-body>
                    </SimpleBar>
                </b-card>
            </div>
        </div>
    </Layout>

    <!-- Modal -->
    <b-modal class="fade" v-model="createFolder" id="createFolder" title="Product" hide-footer>
        <b-form class="tablelist-form" novalidate autocomplete="off">
            
            <div class="mb-3">
                <label for="product-title-input" class="form-label">Product title</label>
                <input type="text" id="product-title-input" class="form-control" placeholder="Enter product title" required>
            </div>

            <div class="mb-3">
                <DropZone @drop.prevent="galleryDrop" @change="gallerySelectedFile" files="files" cloudIcon="remix"
                    dropzoneFile="galleryDropzoneFile" />
                <ul class="list-unstyled mb-0" id="dropzone-preview2">
                    <li class="mt-2" id="dropzone-preview-list2">
                        <!-- This is used as the file preview template -->
                        <div class="border rounded mb-1" v-for="(file, index) of galleryFiles" :key="index">
                            <div class="d-flex p-2">
                                <div class="flex-shrink-0 me-3">
                                    <div class="avatar-sm bg-light rounded">
                                        <img class="img-fluid rounded d-block"
                                            :src="newDoc" alt="Dropzone-Image" />
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
                                    <b-button size="sm" variant="danger"
                                        @click="deleteRecord">Delete</b-button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>

            <div class="mb-3">
                <label for="product-category-input" class="form-label">Product category</label>

                <select class="form-select" id="product-category-input" data-choices data-choices-search-false
                    data-choices-removeItem>
                    <option value="">Select product category</option>
                    <option value="Appliances">Appliances</option>
                    <option value="Automotive Accessories">Automotive Accessories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Headphones">Headphones</option>
                    <option value="Kids">Kids</option>
                    <option value="Luggage">Luggage</option>
                    <option value="Sports">Sports</option>
                    <option value="Watches">Watches</option>
                </select>
            </div>

            <b-row>
                <b-col lg="6">
                    <div class="mb-3">
                        <label for="product-stock-input" class="form-label">Stocks</label>
                        <input type="number" id="product-stock-input" class="form-control"
                            placeholder="Enter product stocks" required>
                    </div>
                </b-col>
                <b-col lg="6">
                    <div class="mb-3">
                        <label for="product-price-input" class="form-label">Price</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text">$</span>
                            <input type="number" class="form-control" id="product-price-input"
                                placeholder="Enter product price" required>
                        </div>
                    </div>
                </b-col>
            </b-row>
            <div class="hstack gap-2 justify-content-end">
                <b-button type="button" variant="ghost-danger" @click="createFolder = !createFolder"><i
                        class="bi bi-x-lg align-baseline me-1"></i> Close</b-button>
                <b-button type="submit" variant="primary" id="add-btn">Add Folder</b-button>
            </div>
        </b-form>
    </b-modal>
</template>