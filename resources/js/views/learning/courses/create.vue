<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

// Editors
import {
    reactive
} from "vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import DropZone from "@/common/dropZone.vue";
import {
    ref,
    watch
} from "vue";

import Multiselect from '@vueform/multiselect';
import successImg from "../../../../images/success-img.png";
import newDoc from "../../../../images/new-document.png"

export default {
    data() {
        return {
            title: "Create Course",
            successImg,
            newDoc,
            items: [{
                    text: "Courses",
                    href: "/",
                },
                {
                    text: "Create Course",
                    active: true,
                },
            ],
            editor: ClassicEditor,
            editorData: "",
            selectedLanguages: ["English"],
            languageOptions: [{
                    value: '',
                    label: 'Select Language'
                },
                {
                    value: 'English',
                    label: 'English'
                },
                {
                    value: 'Hindi',
                    label: 'Hindi'
                },
                {
                    value: 'France',
                    label: 'France'
                },
                {
                    value: 'Expert',
                    label: 'Expert'
                },
            ],
            selectedLevels: [],
            levelOptions: [{
                    value: '',
                    label: 'Select Level'
                },
                {
                    value: 'Beginner',
                    label: 'Beginner'
                },
                {
                    value: 'Advanced',
                    label: 'Advanced'
                },
                {
                    value: 'Intermediate',
                    label: 'Intermediate'
                },
                {
                    value: 'Expert',
                    label: 'Expert'
                },
            ],
            selectedCategory: '',
            categoryOptions: [{
                    value: '',
                    label: 'Select Course Category'
                },
                {
                    value: 'Marketing & Management',
                    label: 'Marketing & Management'
                },
                {
                    value: 'React Development',
                    label: 'React Development'
                },
                {
                    value: 'Shopify Development',
                    label: 'Shopify Development'
                },
                {
                    value: 'Graphic Design',
                    label: 'Graphic Design'
                },
                {
                    value: 'Laravel Development',
                    label: 'Laravel Development'
                },
                {
                    value: 'Flask Development',
                    label: 'Flask Development'
                },
                {
                    value: 'Web Design',
                    label: 'Web Design'
                },
                {
                    value: 'Asp.Net Development',
                    label: 'Asp.Net Development'
                },
                {
                    value: 'PHP Development',
                    label: 'PHP Development'
                },
                {
                    value: 'Digital Marketing',
                    label: 'Digital Marketing'
                },
                {
                    value: 'Data Science',
                    label: 'Data Science'
                },
            ],
            content: "<h1>Some initial content</h1>",
            plugins: [
                "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "save table contextmenu directionality emoticons template paste textcolor",
            ],
            toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
            options: {
                height: 300,
                style_formats: [{
                        title: "Bold text",
                        inline: "b"
                    },
                    {
                        title: "Red text",
                        inline: "span",
                        styles: {
                            color: "#ff0000"
                        }
                    },
                    {
                        title: "Red header",
                        block: "h1",
                        styles: {
                            color: "#ff0000"
                        }
                    },
                    {
                        title: "Example 1",
                        inline: "span",
                        classes: "example1"
                    },
                    {
                        title: "Example 2",
                        inline: "span",
                        classes: "example2"
                    },
                    {
                        title: "Table styles"
                    },
                    {
                        title: "Table row 1",
                        selector: "tr",
                        classes: "tablerow1"
                    },
                ],
            },
        };
    },
    setup() {
        const state = reactive({
            content: "<h3><span class='ql-size-large;'>Hello World!</span></h3><p><br></p><h3>This is an simple editable area.</h3><p><br></p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p><br></p><p>End of simple area</p>",
            _content: "",
            disabled: false,
        });

        // image dropzone
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

        watch(() => [...files.value],
            () => [...videoFiles.value],
            (currentValue) => {
                return currentValue;
            }
        );

        // video dropzone
        let videoFiles = ref([]);
        let videoDropzoneFile = ref("");
        const videoDrop = (e) => {
            videoDropzoneFile.value = e.dataTransfer.files[0];
            videoFiles.value.push(videoDropzoneFile.value);
        };
        const videoSelectedFile = () => {
            videoDropzoneFile.value = document.querySelector(".videoDropzoneFile").files[0];
            videoFiles.value.push(videoDropzoneFile.value);
        };
        // 

        return {
            state,
            dropzoneFile,
            files,
            drop,
            selectedFile,
            videoDropzoneFile,
            videoFiles,
            videoDrop,
            videoSelectedFile
        };
    },
    methods: {
        deleteRecord(ele) {
            ele.target.parentElement.parentElement.parentElement.remove();
        },
    },
    components: {
        Layout,
        PageHeader,
        DropZone,
        ckeditor: CKEditor.component,
        Multiselect
    },
};
</script>

<template>
<Layout>
    <PageHeader :title="title" :items="items" />
    <b-row>
        <b-col xl="12">
            <b-card no-body>
                <b-card-header>
                    <h5>Create Course</h5>
                </b-card-header>
                <b-card-body class="form-steps">
                    <form action="#">
                        <div id="custom-progress-bar" class="progress-nav mb-4">
                            <div class="progress" style="height: 1px;">
                                <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <ul class="nav nav-pills progress-bar-tab custom-nav" role="tablist">
                                <li class="nav-item" role="presentation" data-bs-toggle="tooltip" data-bs-title="Courses Details">
                                    <b-button variant="none" class="nav-link rounded-pill active" data-progressbar="custom-progress-bar" id="coursesDetails-tab" data-bs-toggle="pill" data-bs-target="#coursesDetails" type="button" role="tab" aria-controls="coursesDetails" aria-selected="true">1</b-button>
                                </li>
                                <li class="nav-item" role="presentation" data-bs-toggle="tooltip" data-bs-title="Course media">
                                    <b-button variant="none" class="nav-link rounded-pill" data-progressbar="custom-progress-bar" id="pills-info-desc-tab" data-bs-toggle="pill" data-bs-target="#pills-info-desc" type="button" role="tab" aria-controls="pills-info-desc" aria-selected="false">2</b-button>
                                </li>
                                <li class="nav-item" role="presentation" data-bs-toggle="tooltip" data-bs-title="Successfully">
                                    <b-button variant="none" class="nav-link rounded-pill" data-progressbar="custom-progress-bar" id="pills-success-tab" data-bs-toggle="pill" data-bs-target="#pills-success" type="button" role="tab" aria-controls="pills-success" aria-selected="false">3</b-button>
                                </li>
                            </ul>
                        </div>

                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="coursesDetails" role="tabpanel" aria-labelledby="coursesDetails-tab">
                                <b-card-title title-tag="h5" class="mb-3">Course details</b-card-title>
                                <b-row class="g-3 align-items-center">
                                    <b-col lg="12">
                                        <div>
                                            <label for="course-title-input" class="form-label">Course title<span class="text-danger">*</span></label>
                                            <input type="text" id="course-title-input" class="form-control" placeholder="Enter course title" required>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div>
                                            <label for="course-category-input" class="form-label">Course Category<span class="text-danger">*</span></label>
                                            <Multiselect placeholder="Course Category" :searchable="true" v-model="selectedCategory" :options="categoryOptions" />
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div>
                                            <label for="lavel-input" class="form-label">Courses Level<span class="text-danger">*</span></label>
                                            <Multiselect placeholder="Courses Level" :searchable="true" mode="tags" v-model="selectedLevels" :options="levelOptions" />
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div>
                                            <label for="language-input" class="form-label">Language<span class="text-danger">*</span></label>
                                            <Multiselect placeholder="Select Language" :searchable="true" mode="tags" v-model="selectedLanguages" :options="languageOptions" />
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div>
                                            <label for="lessons-input" class="form-label">Lessons<span class="text-danger">*</span></label>
                                            <input type="number" id="lessons-input" class="form-control" placeholder="Lessons" required>
                                        </div>
                                    </b-col>
                                    <b-col lg="4">
                                        <div>
                                            <label for="price-input" class="form-label">Course price<span class="text-danger">*</span></label>
                                            <div class="input-group">
                                                <span class="input-group-text">$</span>
                                                <input type="number" class="form-control" id="price-input" placeholder="0.00" required>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col lg="4">
                                        <div>
                                            <label for="discount-input" class="form-label">Discount price<span class="text-danger">*</span></label>
                                            <div class="input-group">
                                                <span class="input-group-text">%</span>
                                                <input type="number" class="form-control" id="discount-input" placeholder="00" required>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col lg="4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="checkBox1" checked="">
                                            <label class="form-check-label" for="checkBox1">
                                                Enable this Discount
                                            </label>
                                        </div>
                                    </b-col>
                                    <b-col lg="12">
                                        <div>
                                            <label for="shortDescription" class="form-label">Short Description<span class="text-danger">*</span></label>
                                            <textarea class="form-control" id="shortDescription" rows="3" placeholder="Enter description"></textarea>
                                        </div>
                                    </b-col>
                                    <b-col lg="12">
                                        <label class="form-label">Add Description<span class="text-danger">*</span></label>
                                        <div class="ckeditor-classic">
                                            <ckeditor v-model="editorData" :editor="editor"></ckeditor>
                                        </div>
                                    </b-col>
                                </b-row>
                                <div class="d-flex align-items-start gap-3 mt-4">
                                    <b-button type="button" variant="primary" class="btn-label right ms-auto nexttab nexttab" data-nexttab="pills-info-desc-tab"><i class="ri-arrow-right-line label-icon align-middle fs-lg ms-2"></i> Next
                                        Step</b-button>
                                </div>
                            </div>
                            <!-- end tab pane -->

                            <div class="tab-pane fade" id="pills-info-desc" role="tabpanel" aria-labelledby="pills-info-desc-tab">
                                <div>
                                    <label class="form-label">Main Course Image<span class="text-danger">*</span></label>

                                    <DropZone @drop.prevent="drop" @change="selectedFile" files="Image" cloudIcon="remix" dropzoneFile="dropzoneFile" />
                                    <ul class="list-unstyled mb-0" id="dropzone-preview">
                                        <li class="mt-2" id="dropzone-preview-list">
                                            <!-- This is used as the file preview template -->
                                            <div class="border rounded" v-for="(file, index) of files" :key="index">
                                                <div class="d-flex p-2">
                                                    <div class="flex-shrink-0 me-3">
                                                        <div class="avatar-sm bg-light rounded">
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
                                <div class="mt-4">
                                    <div class="mb-3">
                                        <label for="videoURL" class="form-label">Video URL</label>
                                        <input type="url" class="form-control" id="videoURL" placeholder="Enter url">
                                    </div>
                                    <div>
                                        <label class="form-label">Upload Video<span class="text-danger">*</span></label>
                                        <DropZone @drop.prevent="videoDrop" @change="videoSelectedFile" files="video" cloudIcon="remix" dropzoneFile="videoDropzoneFile" />
                                        <ul class="list-unstyled mb-0" id="video-preview">
                                            <li class="mt-2" id="video-preview-list">
                                                <!-- This is used as the file preview template -->
                                                <div class="border rounded" v-for="(file, index) of videoFiles" :key="index">
                                                    <div class="d-flex p-2">
                                                        <div class="flex-shrink-0 me-3">
                                                            <div class="avatar-sm bg-light rounded">
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
                                        <!-- end dropzon-preview -->
                                    </div>
                                </div>
                                <div class="d-flex align-items-start gap-3 mt-4">
                                    <b-button type="button" variant="link" class="text-decoration-none btn-label previestab" data-previous="coursesDetails-tab"><i class="ri-arrow-left-line label-icon align-middle fs-lg me-2"></i> Back to
                                        Course Details</b-button>
                                    <b-button type="button" variant="primary" class="btn-label right ms-auto nexttab nexttab" data-nexttab="pills-success-tab"><i class="ri-arrow-right-line label-icon align-middle fs-lg ms-2"></i>Submit</b-button>
                                </div>
                            </div>
                            <!-- end tab pane -->

                            <div class="tab-pane fade" id="pills-success" role="tabpanel" aria-labelledby="pills-success-tab">
                                <div>
                                    <div class="text-center">
                                        <div class="my-4">
                                            <img :src="successImg" alt="" height="150" />
                                        </div>
                                        <h4>Well Done !</h4>
                                        <p class="text-muted mb-0">You have added successfully course</p>
                                    </div>
                                </div>
                            </div>
                            <!-- end tab pane -->
                        </div>
                        <!-- end tab content -->
                    </form>
                </b-card-body>

            </b-card>

        </b-col>

    </b-row>
</Layout>
</template>
