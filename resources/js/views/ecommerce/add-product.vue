<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";
import { ref, watch } from "vue";
import useVuelidate from "@vuelidate/core";
import Multiselect from '@vueform/multiselect';

// Editors
import { reactive } from "vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import DropZone from "@/common/dropZone.vue";
import docImg from "../../../images/new-document.png";

export default {
    data() {
        return {
            title: "Add Product",
            items: [
                {
                    text: "Ecommerce",
                    href: "/",
                },
                {
                    text: "Add Product",
                    active: true,
                },
            ],
            docImg,
            selectedCategories: [],
            categoryOptions: [
                { value: '', label: 'Select categories' },
                { value: 'Appliances', label: 'Appliances' },
                { value: 'Automotive Accessories', label: 'Automotive Accessories' },
                { value: 'Electronics', label: 'Electronics' },
                { value: 'Fashion', label: 'Fashion' },
                { value: 'Furniture', label: 'Furniture' },
                { value: 'Footwear', label: 'Footwear' },
                { value: 'Sportswear', label: 'Sportswear' },
                { value: 'Watches', label: 'Watches' },
                { value: 'Headphones', label: 'Headphones' },
                { value: 'Other Accessories', label: 'Other Accessories' },
            ],
            selectedType: '',
            typeOptions: [
                { value: '', label: 'Select Type' },
                { value: 'Simple', label: 'Simple' },
                { value: 'Classified', label: 'Classified' },
            ],
            tags: ["Fashion", "Style", "Brands", "Puma"],
            tagOption: ["Fashion", "Style", "Brands", "Puma"],
            selectedStatus: '',
            statusOptions: [
                { value: 'Published', label: 'Published' },
                { value: 'Scheduled', label: 'Scheduled' },
                { value: 'Draft', label: 'Draft' },
            ],
            selectedVisibility: '',
            visibilityOptions: [
                { value: 'Public', label: 'Public' },
                { value: 'Hidden', label: 'Hidden' },
            ],
            selectedUnit: '',
            unitOptions: [
                { value: '', label: 'Select Unit' },
                { value: 'Kilogram', label: 'Kilogram' },
                { value: 'Pieces', label: 'Pieces' },
            ],
            editor: ClassicEditor,
            editorData: "",
            content: "<h1>Some initial content</h1>",
            plugins: [
                "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "save table contextmenu directionality emoticons template paste textcolor",
            ],
            toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
            options: {
                height: 300,
                style_formats: [
                    { title: "Bold text", inline: "b" },
                    { title: "Red text", inline: "span", styles: { color: "#ff0000" } },
                    { title: "Red header", block: "h1", styles: { color: "#ff0000" } },
                    { title: "Example 1", inline: "span", classes: "example1" },
                    { title: "Example 2", inline: "span", classes: "example2" },
                    { title: "Table styles" },
                    { title: "Table row 1", selector: "tr", classes: "tablerow1" },
                ],
            },
        };
    },
    setup() {
        // product dropzone
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
        // 

        const state = reactive({
            content:
                "<h3><span class='ql-size-large;'>Hello World!</span></h3><p><br></p><h3>This is an simple editable area.</h3><p><br></p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p><br></p><p>End of simple area</p>",
            _content: "",
            disabled: false,
        });

        return { dropzoneFile, files, drop, selectedFile, galleryDropzoneFile, galleryFiles, galleryDrop, gallerySelectedFile, v$: useVuelidate(), state };
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
            <b-col lg="12">
                <b-card no-body>
                    <b-card-body>
                        <b-row>
                            <b-col xxl="4">
                                <b-card-title title-tag class="b-card-title mb-3">Product Information</b-card-title>
                                <p class="text-muted">Product Information refers to any information held by an
                                    organisation about the products it produces, buys, sells or distributes.</p>
                            </b-col>
                            <b-col xxl="8">
                                <form action="#!">
                                    <div class="mb-3">
                                        <label for="productTitle" class="form-label">Product Title <span
                                                class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="productTitle"
                                            placeholder="Enter product title" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="productCategories" class="form-label">Categories <span
                                                class="text-danger">*</span></label>
                                        <Multiselect placeholder="Select Category" v-model="selectedCategories"
                                            :options="categoryOptions" />

                                    </div>
                                    <div class="mb-3">
                                        <label for="productType" class="form-label">Product Type <span
                                                class="text-danger">*</span></label>
                                        <Multiselect placeholder="Select Type" v-model="selectedType"
                                            :options="typeOptions" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="shortDecs" class="form-label">Short Description <span
                                                class="text-danger">*</span></label>
                                        <textarea class="form-control" id="shortDecs"
                                            placeholder="Must enter minimum of a 100 characters" rows="3"></textarea>
                                    </div>
                                    <b-row>
                                        <b-col lg="6">
                                            <div class="mb-3">
                                                <label for="productBrand" class="form-label">Brand <span
                                                        class="text-danger">*</span></label>
                                                <input type="text" class="form-control" id="productBrand"
                                                    placeholder="Enter brand" required>
                                            </div>
                                        </b-col>
                                        <b-col lg="6">
                                            <div class="mb-3">
                                                <label for="productUnit" class="form-label">Unit <span
                                                        class="text-danger">*</span></label>
                                                <Multiselect placeholder="Select Visibility" v-model="selectedUnit"
                                                :options="unitOptions" />
                                            </div>
                                        </b-col>
                                    </b-row>
                                    <div class="mb-3">
                                        <label for="productTags" class="form-label">Tags</label>
                                        <Multiselect placeholder="Select Tags" :searchable="true" mode="tags" v-model="tags"
                                            :options="tagOption" />
                                    </div>
                                    <b-row>
                                        <b-col lg="6">
                                            <div class="form-check form-switch mb-3">
                                                <input class="form-check-input" type="checkbox" role="switch"
                                                    id="exchangeableInput">
                                                <label class="form-check-label" for="exchangeableInput">Exchangeable</label>
                                            </div>
                                        </b-col>
                                        <b-col lg="6">
                                            <div class="form-check form-switch mb-3">
                                                <input class="form-check-input" type="checkbox" role="switch"
                                                    id="refundableInput">
                                                <label class="form-check-label" for="refundableInput">Refundable</label>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </form>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-body>
                        <b-row>
                            <b-col xxl="4">
                                <b-card-title title-tag class="b-card-title mb-3">Description</b-card-title>
                                <p class="text-muted">Product Information refers to any information held by an
                                    organization about the products it produces, buys, sells or distributes.</p>
                            </b-col>
                            <b-col xxl="8">
                                <div>
                                    <label class="form-label">Product Description <span class="text-danger">*</span></label>
                                    <div class="ckeditor-classic">
                                        <ckeditor v-model="editorData" :editor="editor"></ckeditor>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-body>
                        <b-row>
                            <b-col xxl="4">
                                <b-card-title title-tag class="b-card-title mb-3">Images</b-card-title>
                                <p class="text-muted">Product Information refers to any information held by an
                                    organization about the products it produces, buys, sells or distributes.</p>
                            </b-col>
                            <b-col xxl="8">
                                <div class="mb-4">
                                    <label class="form-label">Product Images <span class="text-danger">*</span></label>
                                    <DropZone @drop.prevent="drop" @change="selectedFile" files="product images"
                                        cloudIcon="remix" />

                                    <ul class="list-unstyled mb-0" id="dropzone-preview">
                                        <li class="mt-2" id="dropzone-preview-list">
                                            <div class="border rounded" v-for="(file, index) of files" :key="index">
                                                <div class="d-flex p-2">
                                                    <div class="flex-shrink-0 me-3">
                                                        <div class="avatar-sm bg-light rounded">
                                                            <img class="img-fluid rounded d-block" :src="docImg"
                                                                alt="Dropzone-Image" />
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
                                                        <b-button variant="danger" class="sm"
                                                            @click="deleteRecord">Delete</b-button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Gallery Images <span class="text-danger">*</span></label>
                                    <DropZone @drop.prevent="galleryDrop" @change="gallerySelectedFile"
                                        files="gallery images" cloudIcon="remix" dropzoneFile="galleryDropzoneFile" />
                                    <ul class="list-unstyled mb-0" id="dropzone-preview2">
                                        <li class="mt-2" id="dropzone-preview-list2">
                                            <!-- This is used as the file preview template -->
                                            <div class="border rounded mb-1" v-for="(file, index) of galleryFiles"
                                                :key="index">
                                                <div class="d-flex p-2">
                                                    <div class="flex-shrink-0 me-3">
                                                        <div class="avatar-sm bg-light rounded">
                                                            <img class="img-fluid rounded d-block" :src="docImg"
                                                                alt="Dropzone-Image" />
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
                                                        <b-button variant="danger" class="sm"
                                                            @click="deleteRecord">Delete</b-button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <!-- end dropzon-preview -->
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-body>
                        <b-row>
                            <b-col xxl="4">
                                <b-card-title title-tag class="b-card-title mb-3">General Info</b-card-title>
                                <p class="text-muted mb-0">An informational product can be a digital book (or e-book), a
                                    digital report, a white paper, a piece of software, audio or video files, a website,
                                    an e-zine or a newsletter.</p>
                            </b-col>
                            <b-col xxl="8">
                                <b-row class="gy-3">
                                    <b-col lg="6">
                                        <div>
                                            <label for="manufacturer-name-input" class="form-label">Manufacturer
                                                Name</label>
                                            <input type="text" class="form-control" id="manufacturer-name-input"
                                                placeholder="Enter manufacturer name" required>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div>
                                            <label class="form-label" for="manufacturer-brand-input">Manufacturer
                                                Brand</label>
                                            <input type="text" class="form-control" id="manufacturer-brand-input"
                                                placeholder="Enter manufacturer brand">
                                        </div>
                                    </b-col>
                                    <b-col lg="4">
                                        <div>
                                            <label for="productStocks" class="form-label">Stocks <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" id="productStocks" placeholder="Stocks"
                                                required>
                                        </div>
                                    </b-col>
                                    <b-col lg="4">
                                        <div>
                                            <label class="form-label" for="product-price-input">Price</label>
                                            <div class="input-group has-validation">
                                                <span class="input-group-text" id="product-price-addon">$</span>
                                                <input type="text" class="form-control" id="product-price-input"
                                                    placeholder="Enter price" aria-label="Price"
                                                    aria-describedby="product-price-addon" required="">
                                                <div class="invalid-feedback">Please Enter a product price.</div>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col lg="4">
                                        <div>
                                            <label class="form-label" for="product-discount-input">Discount</label>
                                            <div class="input-group">
                                                <span class="input-group-text" id="product-discount-addon">%</span>
                                                <input type="text" class="form-control" id="product-discount-input"
                                                    placeholder="Enter discount" aria-label="discount"
                                                    aria-describedby="product-discount-addon">
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div>
                                            <label for="choices-publish-status-input" class="form-label">Status</label>
                                            <Multiselect placeholder="Select Status" v-model="selectedStatus"
                                                :options="statusOptions" />
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div>
                                            <label for="choices-publish-visibility-input"
                                                class="form-label">Visibility</label>
                                            <Multiselect placeholder="Select Visibility" v-model="selectedVisibility"
                                                :options="visibilityOptions" />
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <div class="hstack gap-2 justify-content-end mb-3">
            <b-button variant="danger"><i class="ph-x align-middle"></i> Cancel</b-button>
            <b-button variant="primary">Submit</b-button>
    </div>
</Layout></template>