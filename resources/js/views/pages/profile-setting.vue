<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Multiselect from '@vueform/multiselect';

import small7 from "../../../images/small/img-7.jpg"
import avatar1 from "../../../images/users/avatar-1.jpg"

export default {
    data() {
        return {
            title: "Profile Settings",
            items: [{
                text: "Pages",
                href: "/",
            },
            {
                text: "Profile Settings",
                active: true,
            },
            ],
            small7,
            avatar1,
            birthDate: "24 Jun, 1998",
            joiningDate: "30 Oct, 2023",

            birthDateConfig: {
                dateFormat: "d M, Y",
            },
            joiningDateConfig: {
                dateFormat: "d M, Y",
            },

            // MultiSelect
            skillSelectValue: [
                { value: 'javascript', label: 'Javascript' },
            ],
            skillOptions: [
                { value: 'illustrator', label: 'Illustrator' },
                { value: 'photoshop', label: 'Photoshop' },
                { value: 'css', label: 'CSS' },
                { value: 'html', label: 'HTML' },
                { value: 'javascript', label: 'Javascript' },
                { value: 'python', label: 'Python' },
                { value: 'php', label: 'PHP' },
            ],

            addmissionSelectValue: [{ value: 'Choice 17', label: '2017' }],
            passedSelectValue: { value: 'Choice 20', label: '2020' },
            passedOptions: [
                { value: '', label: 'Select years' },
                { value: 'Choice 1', label: '2001' },
                { value: 'Choice 2', label: '2002' },
                { value: 'Choice 3', label: '2003' },
                { value: 'Choice 4', label: '2004' },
                { value: 'Choice 6', label: '2006' },
                { value: 'Choice 7', label: '2007' },
                { value: 'Choice 8', label: '2008' },
                { value: 'Choice 9', label: '2009' },
                { value: 'Choice 10', label: '2010' },
                { value: 'Choice 11', label: '2011' },
                { value: 'Choice 12', label: '2012' },
                { value: 'Choice 13', label: '2013' },
                { value: 'Choice 14', label: '2014' },
                { value: 'Choice 15', label: '2015' },
                { value: 'Choice 16', label: '2016' },
                { value: 'Choice 17', label: '2017' },
                { value: 'Choice 18', label: '2018' },
                { value: 'Choice 20', label: '2020' },
                { value: 'Choice 21', label: '2021' },
                { value: 'Choice 22', label: '2022' },
            ],

            // 
            oldPassword: false,
            newPassword: false,
            confirmPassword: false,
        };
    },
    components: {
        Layout,
        PageHeader,
        flatPickr,
        Multiselect
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <b-row>

            <b-col xxl="3">
                <b-card no-body class="overflow-hidden">
                    <div>
                        <img :src="small7" alt=""
                            class="card-img-top profile-wid-img object-fit-cover" style="height: 200px;" />
                        <div>
                            <input id="profile-foreground-img-file-input" type="file"
                                class="profile-foreground-img-file-input d-none">
                            <label for="profile-foreground-img-file-input"
                                class="profile-photo-edit btn btn-light btn-sm position-absolute end-0 top-0 m-3">
                                <i class="ri-image-edit-line align-bottom me-1"></i> Edit Cover Images
                            </label>
                        </div>
                    </div>
                    <b-card-body class="pt-0 mt-n5">
                        <div class="text-center">
                            <div class="profile-user position-relative d-inline-block mx-auto">
                                <img :src="avatar1" alt=""
                                    class="avatar-lg rounded-circle object-fit-cover border-0 img-thumbnail user-profile-image" />
                                <div
                                    class="avatar-xs p-0 rounded-circle profile-photo-edit position-absolute end-0 bottom-0">
                                    <input id="profile-img-file-input" type="file" class="profile-img-file-input d-none">
                                    <label for="profile-img-file-input" class="profile-photo-edit avatar-xs">
                                        <span class="avatar-title rounded-circle bg-light text-body">
                                            <i class="bi bi-camera"></i>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div class="mt-3">
                                <h5>Richard Marshall <i class="bi bi-patch-check-fill align-baseline text-info ms-1"></i>
                                </h5>
                                <p class="text-muted">Web Developer</p>
                            </div>

                            <div class="d-flex gap-2 mt-4">
                                <b-button type="button" variant="subtle-secondary" class="text-truncate w-50"><i
                                        class="bi bi-chat-left-text align-baseline me-1"></i> Contact Us</b-button>
                                <b-button type="button" variant="primary" class="text-truncate w-50"><i
                                        class="bi bi-chat-left-text align-baseline me-1"></i> Contact Us</b-button>
                            </div>
                        </div>
                    </b-card-body>
                    <b-card-body class="border-top">
                        <div class="d-flex align-items-center mb-4 pb-2">
                            <div class="flex-grow-1">
                                <b-card-title title-tag="h5" class="mb-0">Complete Your Profile</b-card-title>
                            </div>
                            <div class="flex-shrink-0">
                                <b-link href="#" class="badge bg-light text-secondary"><i
                                        class="ri-edit-box-line align-bottom me-1"></i> Edit</b-link>
                            </div>
                        </div>
                        <div class="progress animated-progress custom-progress progress-label">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 30%" aria-valuenow="30"
                                aria-valuemin="0" aria-valuemax="100">
                                <div class="label">30%</div>
                            </div>
                        </div>
                    </b-card-body>
                    <b-card-body class="border-top">
                        <div class="d-flex align-items-center mb-4">
                            <div class="flex-grow-1">
                                <b-card-title title-tag="h5" class="mb-0">Portfolio</b-card-title>
                            </div>
                            <div class="flex-shrink-0">
                                <b-link href="#" class="badge bg-info-subtle text-info fs-12"><i
                                        class="ri-add-fill align-bottom me-1"></i> Add</b-link>
                            </div>
                        </div>
                        <div class="mb-3 d-flex">
                            <div class="avatar-xs d-block flex-shrink-0 me-3">
                                <span class="avatar-title rounded-circle bg-dark-subtle text-dark">
                                    <i class="bi bi-github"></i>
                                </span>
                            </div>
                            <input type="email" class="form-control" id="gitUsername" placeholder="Username"
                                value="@richardmarshall">
                        </div>
                        <div class="mb-3 d-flex">
                            <div class="avatar-xs d-block flex-shrink-0 me-3">
                                <span class="avatar-title rounded-circle bg-primary-subtle text-primary">
                                    <i class="bi bi-facebook"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" id="websiteInput" placeholder="www.example.com"
                                value="www.steex.com">
                        </div>
                        <div class="mb-3 d-flex">
                            <div class="avatar-xs d-block flex-shrink-0 me-3">
                                <span class="avatar-title rounded-circle bg-success-subtle text-success">
                                    <i class="bi bi-dribbble"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" id="dribbleName" placeholder="Username"
                                value="@richard_marshall">
                        </div>
                        <div class="d-flex">
                            <div class="avatar-xs d-block flex-shrink-0 me-3">
                                <span class="avatar-title rounded-circle bg-danger-subtle text-danger">
                                    <i class="bi bi-instagram"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" id="pinterestName" placeholder="Username"
                                value="Richard Marshall">
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="9">
                <div class="d-flex align-items-center flex-wrap gap-2 mb-4">
                    <ul class="nav nav-pills arrow-navtabs nav-secondary gap-2 flex-grow-1 order-2 order-lg-1"
                        role="tablist">
                        <li class="nav-item" role="presentation">
                            <b-link class="nav-link active" data-bs-toggle="tab" href="#personalDetails" role="tab"
                                aria-selected="true">
                                Personal Details
                            </b-link>
                        </li>
                        <li class="nav-item" role="presentation">
                            <b-link class="nav-link" data-bs-toggle="tab" href="#changePassword" role="tab"
                                aria-selected="false" tabindex="-1">
                                Changes Password
                            </b-link>
                        </li>
                        <li class="nav-item" role="presentation">
                            <b-link class="nav-link" data-bs-toggle="tab" href="#education" role="tab" aria-selected="false"
                                tabindex="-1">
                                Education
                            </b-link>
                        </li>
                        <li class="nav-item" role="presentation">
                            <b-link class="nav-link" data-bs-toggle="tab" href="#securityPrivacy" role="tab"
                                aria-selected="false" tabindex="-1">
                                Security & Privacy
                            </b-link>
                        </li>
                    </ul>
                    <div class="flex-shrink-0 ms-auto order-1 order-lg-2">
                        <router-link to="/pages/profile-settings" class="btn btn-secondary"><i
                                class="bi bi-pencil-square align-baseline me-1"></i> Edit Profile</router-link>
                    </div>
                </div>

                <b-card no-body>
                    <div class="tab-content">
                        <div class="tab-pane active" id="personalDetails" role="tabpanel">
                            <b-card-header>
                                <b-card-title title-tag="h6" class="mb-0">Personal Details</b-card-title>
                            </b-card-header>
                            <b-card-body>
                                <form action="#">
                                    <b-row>
                                        <b-col lg="6">
                                            <div class="mb-3">
                                                <label for="firstnameInput" class="form-label">First Name</label>
                                                <input type="text" class="form-control" id="firstnameInput"
                                                    placeholder="Enter your firstname" value="Richard">
                                            </div>
                                        </b-col>

                                        <b-col lg="6">
                                            <div class="mb-3">
                                                <label for="lastnameInput" class="form-label">Last Name</label>
                                                <input type="text" class="form-control" id="lastnameInput"
                                                    placeholder="Enter your last name" value="Marshall">
                                            </div>
                                        </b-col>

                                        <b-col lg="6">
                                            <div class="mb-3">
                                                <label for="phonenumberInput" class="form-label">Phone Number</label>
                                                <input type="text" class="form-control" id="phonenumberInput"
                                                    placeholder="Enter your phone number" value="617 219 6245">
                                            </div>
                                        </b-col>

                                        <b-col lg="6">
                                            <div class="mb-3">
                                                <label for="emailInput" class="form-label">Email Address</label>
                                                <input type="email" class="form-control" id="emailInput"
                                                    placeholder="Enter your email" value="richardmarshall@steex.com">
                                            </div>
                                        </b-col>

                                        <b-col lg="6">
                                            <div class="mb-3">
                                                <label for="JoiningdatInput" class="form-label">Birth of Date</label>
                                                <flat-pickr v-model="birthDate" :config="birthDateConfig"
                                                    class="form-control" id="BirthingdatInput"
                                                    placeholder="Select date"></flat-pickr>
                                            </div>
                                        </b-col>
                                        <b-col lg="6">
                                            <div class="mb-3">
                                                <label for="JoiningdatInput" class="form-label">Joining Date</label>
                                                <flat-pickr v-model="joiningDate" :config="joiningDateConfig"
                                                    class="form-control" id="JoiningdatInput"
                                                    placeholder="Select date"></flat-pickr>
                                            </div>
                                        </b-col>

                                        <b-col lg="12">
                                            <div class="mb-3">
                                                <label for="skillsInput" class="form-label">Skills</label>
                                                <Multiselect placeholder="Select Skills" :searchable="true" mode="tags"
                                                    :object="true" v-model="skillSelectValue" :options="skillOptions" />
                                            </div>
                                        </b-col>

                                        <b-col lg="6">
                                            <div class="mb-3">
                                                <label for="designationInput" class="form-label">Designation</label>
                                                <input type="text" class="form-control" id="designationInput"
                                                    placeholder="Designation" value="Web Developer">
                                            </div>
                                        </b-col>

                                        <b-col lg="6">
                                            <div class="mb-3">
                                                <label for="websiteInput1" class="form-label">Website</label>
                                                <input type="text" class="form-control" id="websiteInput1"
                                                    placeholder="www.example.com" value="www.themesbrand.com" />
                                            </div>
                                        </b-col>

                                        <b-col lg="4">
                                            <div class="mb-3">
                                                <label for="cityInput" class="form-label">City</label>
                                                <input type="text" class="form-control" id="cityInput" placeholder="City"
                                                    value="Phoenix" />
                                            </div>
                                        </b-col>

                                        <b-col lg="4">
                                            <div class="mb-3">
                                                <label for="countryInput" class="form-label">Country</label>
                                                <input type="text" class="form-control" id="countryInput"
                                                    placeholder="Country" value="USA" />
                                            </div>
                                        </b-col>

                                        <b-col lg="4">
                                            <div class="mb-3">
                                                <label for="zipcodeInput" class="form-label">Zip Code</label>
                                                <input type="text" class="form-control" minlength="5" maxlength="6"
                                                    id="zipcodeInput" placeholder="Enter zipcode" value="00012">
                                            </div>
                                        </b-col>

                                        <b-col lg="12">
                                            <div class="mb-3 pb-2">
                                                <label for="exampleFormControlTextarea"
                                                    class="form-label">Description</label>
                                                <textarea class="form-control" id="exampleFormControlTextarea"
                                                    placeholder="Enter your description" rows="5">A Web Developer creates
                                                and designs different websites for clients. They are responsible for
                                                their aesthetic as well as their function. Professionals in this field
                                                may also need to be able to ensure sites are compatible with multiple
                                                types of media. Web Developers need to have a firm understanding of
                                                programming and graphical design. Having a strong resume that emphasizes
                                                these attributes makes it significantly easier to get hired as a Web
                                                Developer. As a web designer, my objective is to make a positive impact
                                                on clients, co-workers, and the Internet using my skills and experience
                                                to design compelling and attractive websites. Solving code problems.
                                                Editing & Design with designing team in the company to build perfect web
                                                designs.</textarea>
                                            </div>
                                        </b-col>

                                        <b-col lg="12">
                                            <div class="hstack gap-2 justify-content-end">
                                                <b-button type="submit" variant="primary">Updates</b-button>
                                                <b-button type="button" variant="subtle-danger">Cancel</b-button>
                                            </div>
                                        </b-col>

                                    </b-row>

                                </form>
                            </b-card-body>
                        </div>

                        <div class="tab-pane" id="changePassword" role="tabpanel">
                            <b-card-header>
                                <b-card-title title-tag="h6" class="mb-0">Changes Password</b-card-title>
                            </b-card-header>
                            <b-card-body>
                                <form action="/pages/profile-settings">
                                    <b-row class="g-2 justify-content-lg-between align-items-center">
                                        <b-col lg="4">
                                            <div>
                                                <label for="oldpasswordInput" class="form-label">Old Password*</label>
                                                <div class="position-relative">
                                                    <input :type="oldPassword ? 'text' : 'password'"
                                                        class="form-control password-input" id="oldpasswordInput"
                                                        placeholder="Enter current password">
                                                    <b-button variant="link"
                                                        class="position-absolute top-0 end-0 text-decoration-none text-muted password-addon"
                                                        type="button" id="password-addon"
                                                        @click="oldPassword = !oldPassword"><i
                                                            class="ri-eye-fill align-middle"></i></b-button>

                                                </div>
                                            </div>
                                        </b-col>

                                        <b-col lg="4">
                                            <div class="auth-pass-inputgroup">
                                                <label for="password-input" class="form-label">New Password*</label>
                                                <div class="position-relative">
                                                    <input :type="newPassword ? 'text' : 'password'"
                                                        class="form-control password-input" id="password-input"
                                                        onpaste="return false" placeholder="Enter new password"
                                                        aria-describedby="passwordInput"
                                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required>
                                                    <b-button variant="link"
                                                        class="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                                        type="button" id="password-addon"
                                                        @click="newPassword = !newPassword"><i
                                                            class="ri-eye-fill align-middle"></i></b-button>
                                                </div>

                                            </div>
                                        </b-col>

                                        <b-col lg="4">
                                            <div class="auth-pass-inputgroup">
                                                <label for="confirm-password-input" class="form-label">Confirm
                                                    Password*</label>
                                                <div class="position-relative">
                                                    <input :type="confirmPassword ? 'text' : 'password'"
                                                        class="form-control password-input" onpaste="return false"
                                                        id="confirm-password-input" placeholder="Confirm password"
                                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required>
                                                    <b-button variant="link"
                                                        class="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                                        type="button" id="confirm-password-input"
                                                        @click="confirmPassword = !confirmPassword"><i
                                                            class="ri-eye-fill align-middle"></i></b-button>
                                                </div>

                                            </div>
                                        </b-col>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <b-link href="#" class="link-primary text-decoration-underline">Forgot Password
                                                ?</b-link>
                                            <div class="">

                                                <b-button type="submit" variant="success">Change Password</b-button>
                                            </div>
                                        </div>



                                        <b-col lg="12">
                                            <b-card class="bg-light shadow-none passwd-bg" id="password-contain">
                                                <b-card-body>
                                                    <div class="mb-4">
                                                        <h5 class="fs-sm">Password must contain:</h5>
                                                    </div>
                                                    <div class="">
                                                        <p id="pass-length" class="invalid fs-xs mb-2">Minimum <b>8
                                                                characters</b></p>
                                                        <p id="pass-lower" class="invalid fs-xs mb-2">At <b>lowercase</b>
                                                            letter (a-z)</p>
                                                        <p id="pass-upper" class="invalid fs-xs mb-2">At least
                                                            <b>uppercase</b> letter (A-Z)
                                                        </p>
                                                        <p id="pass-number" class="invalid fs-xs mb-0">A least <b>number</b>
                                                            (0-9)</p>

                                                    </div>
                                                </b-card-body>
                                            </b-card>

                                        </b-col>
                                    </b-row>

                                </form>
                                <div class="mt-4 mb-4 pb-3 border-bottom d-flex justify-content-between align-items-center">
                                    <b-card-title title-tag="h5" class="mb-0">Login History</b-card-title>
                                    <div class="flex-shrink-0">
                                        <b-button type="button" variant="secondary">All Logout</b-button>
                                    </div>
                                </div>

                                <b-row>
                                    <b-col lg="12">
                                        <div class="table-responsive">
                                            <table class="table table-borderless align-middle mb-0">
                                                <thead class="table-light">
                                                    <tr>
                                                        <th scope="col">Mobile</th>
                                                        <th scope="col">IP Address</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Address</th>
                                                        <th scope="col"><i class="ri-logout-box-r-line"></i></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><i class="bi bi-phone align-baseline me-1"></i> iPhone 12 Pro
                                                        </td>
                                                        <td>192.44.234.160</td>
                                                        <td>18 Dec, 2023</td>
                                                        <td>Los Angeles, United States</td>
                                                        <td><b-link href="#" class="icon-link icon-link-hover">Logout <i
                                                                    class="bi bi-box-arrow-right"></i></b-link></td>

                                                    </tr>

                                                    <tr>
                                                        <td><i class="bi bi-tablet align-baseline me-1"></i> Apple iPad Pro
                                                        </td>
                                                        <td>192.44.234.162</td>
                                                        <td>03 Jan, 2023</td>
                                                        <td>Phoenix, United States</td>
                                                        <td><b-link href="#" class="icon-link icon-link-hover">Logout <i
                                                                    class="bi bi-box-arrow-right"></i></b-link></td>
                                                    </tr>

                                                    <tr>
                                                        <td><i class="bi bi-phone align-baseline me-1"></i> Galaxy S21 Ultra
                                                            5G</td>
                                                        <td>192.45.234.54</td>
                                                        <td>25 Feb, 2023</td>
                                                        <td>Washington, United States</td>
                                                        <td><b-link href="#" class="icon-link icon-link-hover">Logout <i
                                                                    class="bi bi-box-arrow-right"></i></b-link></td>
                                                    </tr>

                                                    <tr>
                                                        <td><i class="bi bi-laptop align-baseline me-1"></i> Dell Inspiron
                                                            14</td>
                                                        <td>192.40.234.32</td>
                                                        <td>16 Oct, 2022</td>
                                                        <td>Phoenix, United States</td>
                                                        <td><b-link href="#" class="icon-link icon-link-hover">Logout <i
                                                                    class="bi bi-box-arrow-right"></i></b-link></td>
                                                    </tr>

                                                    <tr>
                                                        <td><i class="bi bi-phone align-baseline me-1"></i> iPhone 12 Pro
                                                        </td>
                                                        <td>192.44.326.42</td>
                                                        <td>22 May, 2022</td>
                                                        <td>Conneticut, United States</td>
                                                        <td><b-link href="#" class="icon-link icon-link-hover">Logout <i
                                                                    class="bi bi-box-arrow-right"></i></b-link></td>

                                                    </tr>

                                                    <tr>
                                                        <td><i class="bi bi-tablet align-baseline me-1"></i> Apple iPad Pro
                                                        </td>
                                                        <td>190.44.182.33</td>
                                                        <td>19 Nov, 2023</td>
                                                        <td>Los Angeles, United States</td>
                                                        <td><b-link href="#" class="icon-link icon-link-hover">Logout <i
                                                                    class="bi bi-box-arrow-right"></i></b-link></td>

                                                    </tr>

                                                    <tr>
                                                        <td><i class="bi bi-phone align-baseline me-1"></i> Galaxy S21 Ultra
                                                            5G</td>
                                                        <td>194.44.235.87</td>
                                                        <td>30 Aug, 2022</td>
                                                        <td>Conneticut, United States</td>
                                                        <td><b-link href="#" class="icon-link icon-link-hover">Logout <i
                                                                    class="bi bi-box-arrow-right"></i></b-link></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </div>

                        <div class="tab-pane" id="education" role="tabpanel">
                            <b-card-header>
                                <b-card-title title-tag="h6" class="mb-0">Education</b-card-title>
                            </b-card-header>
                            <b-card-body>
                                <form>
                                    <div id="newlink">
                                        <div id="1">
                                            <b-row>
                                                <b-col lg="12">
                                                    <div class="mb-3">
                                                        <label for="degreeName" class="form-label">Degree Name</label>
                                                        <input type="text" class="form-control" id="degreeName"
                                                            placeholder="Degree name">
                                                    </div>
                                                </b-col>

                                                <b-col lg="6">
                                                    <div class="mb-3">
                                                        <label for="universityName" class="form-label">University/school
                                                            Name</label>
                                                        <input type="text" class="form-control" id="universityName"
                                                            placeholder="University/school name">
                                                    </div>
                                                </b-col>

                                                <b-col lg="6">
                                                    <div class="mb-3">
                                                        <label for="passedYear" class="form-label">Passed Years</label>
                                                        <b-row class="g-2 justify-content-center">
                                                            <b-col lg="5">
                                                                <Multiselect placeholder="Select years"
                                                                    v-model="addmissionSelectValue"
                                                                    :options="passedOptions" />
                                                            </b-col>

                                                            <b-col cols="auto" class="align-self-center">
                                                                to
                                                            </b-col>

                                                            <b-col lg="5">
                                                                <Multiselect placeholder="Select years"
                                                                    v-model="passedSelectValue" :options="passedOptions" />
                                                            </b-col>

                                                        </b-row>

                                                    </div>
                                                </b-col>

                                                <b-col lg="12">
                                                    <div class="mb-3">
                                                        <label for="degreeDescription" class="form-label">Degree
                                                            Description</label>
                                                        <textarea class="form-control" id="degreeDescription" rows="3"
                                                            placeholder="Enter description"></textarea>
                                                    </div>
                                                </b-col>

                                                <div class="hstack gap-2 justify-content-end">
                                                    <b-link class="btn btn-danger" href="#">Delete</b-link>
                                                </div>
                                            </b-row>

                                        </div>
                                    </div>
                                    <div id="newForm" style="display: none;">

                                    </div>
                                    <b-col lg="12">
                                        <div class="hstack gap-2">
                                            <b-button type="submit" variant="secondary">Update</b-button>
                                            <b-link href="#" class="btn btn-primary">Add New</b-link>
                                        </div>
                                    </b-col>

                                </form>
                            </b-card-body>
                        </div>

                        <div class="tab-pane" id="securityPrivacy" role="tabpanel">
                            <b-card-header>
                                <b-card-title title-tag="h6" class="mb-0">Security & Privacy</b-card-title>
                            </b-card-header>
                            <b-card-body>
                                <div class="mb-4 pb-2">
                                    <div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0">
                                        <div class="flex-grow-1">
                                            <h6 class="fs-md mb-1">Two-factor Authentication</h6>
                                            <p class="text-muted">Two-factor authentication is an enhanced security. Once
                                                enabled, you'll be required to give two types of identification when you log
                                                into Google Authentication and SMS are Supported.</p>
                                        </div>
                                        <div class="flex-shrink-0 ms-sm-3">
                                            <b-link href="#" class="btn btn-sm btn-primary">Enable Two-factor
                                                Authentication</b-link>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                                        <div class="flex-grow-1">
                                            <h6 class="fs-md mb-1">Secondary Verification</h6>
                                            <p class="text-muted">The first factor is a password and the second commonly
                                                includes a text with a code sent to your smartphone, or biometrics using
                                                your fingerprint, face, or retina.</p>
                                        </div>
                                        <div class="flex-shrink-0 ms-sm-3">
                                            <b-link href="#" class="btn btn-sm btn-primary">Set up secondary method</b-link>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                                        <div class="flex-grow-1">
                                            <h6 class="fs-md mb-1">Backup Codes</h6>
                                            <p class="text-muted mb-sm-0">A backup code is automatically generated for you
                                                when you turn on two-factor authentication through your iOS or Android
                                                Twitter app. You can also generate a backup code on twitter.com.</p>
                                        </div>
                                        <div class="flex-shrink-0 ms-sm-3">
                                            <b-link href="#" class="btn btn-sm btn-primary">Generate backup codes</b-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <b-card-title title-tag="h5" class="text-decoration-underline mb-3">Application
                                        Notifications:</b-card-title>
                                    <ul class="list-unstyled mb-0">
                                        <li class="d-flex">
                                            <div class="flex-grow-1">
                                                <label for="directMessage" class="form-check-label fs-md">Direct
                                                    messages</label>
                                                <p class="text-muted">Messages from people you follow</p>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" role="switch"
                                                        id="directMessage" checked />
                                                </div>
                                            </div>
                                        </li>
                                        <li class="d-flex mt-2">
                                            <div class="flex-grow-1">
                                                <label class="form-check-label fs-md mb-1" for="desktopNotification">
                                                    Show desktop notifications
                                                </label>
                                                <p class="text-muted">Choose the option you want as your default setting.
                                                    Block a site: Next to "Not allowed to send notifications," click Add.
                                                </p>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" role="switch"
                                                        id="desktopNotification" checked />
                                                </div>
                                            </div>
                                        </li>
                                        <li class="d-flex mt-2">
                                            <div class="flex-grow-1">
                                                <label class="form-check-label fs-md mb-1" for="emailNotification">
                                                    Show email notifications
                                                </label>
                                                <p class="text-muted"> Under Settings, choose Notifications. Under Select an
                                                    account, choose the account to enable notifications for. </p>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" role="switch"
                                                        id="emailNotification" />
                                                </div>
                                            </div>
                                        </li>
                                        <li class="d-flex mt-2">
                                            <div class="flex-grow-1">
                                                <label class="form-check-label fs-md mb-1" for="chatNotification">
                                                    Show chat notifications
                                                </label>
                                                <p class="text-muted">To prevent duplicate mobile notifications from the
                                                    Gmail and Chat apps, in settings, turn off Chat notifications.</p>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" role="switch"
                                                        id="chatNotification" />
                                                </div>
                                            </div>
                                        </li>
                                        <li class="d-flex mt-2">
                                            <div class="flex-grow-1">
                                                <label class="form-check-label fs-md mb-1" for="purchaesNotification">
                                                    Show purchase notifications
                                                </label>
                                                <p class="text-muted">Get real-time purchase alerts to protect yourself from
                                                    fraudulent charges.</p>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" role="switch"
                                                        id="purchaesNotification" />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <b-card-title title-tag="h5" class="text-decoration-underline mb-3">Delete This
                                        Account:</b-card-title>
                                    <p class="text-muted">Go to the Data & Privacy section of your profile Account. Scroll
                                        to "Your data & privacy options." Delete your Profile Account. Follow the
                                        instructions to delete your account :</p>
                                    <div>
                                    <input type="password" class="form-control" id="passwordInput"
                                        placeholder="Enter your password" value="richard@321654987"
                                        style="max-width: 265px;">
                                </div>
                                <div class="hstack gap-2 mt-3">
                                    <b-link href="#" class="btn btn-subtle-danger">Close & Delete This Account</b-link>
                                    <b-link href="#" class="btn btn-light">Cancel</b-link>
                                </div>
                            </div>
                        </b-card-body>
                    </div>

                </div>
            </b-card>
        </b-col>

    </b-row>
</Layout></template>
