<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import "prismjs";

export default {
    data() {
        return {
            title: "Form Layout",
            items: [
                {
                    text: "Forms",
                    href: "/",
                },
                {
                    text: "Form Layout",
                    active: true,
                },
            ],
            config: {
                enableTime: true,
                noCalendar: true,
                dateFormat: "H:i",
            }
        };
    },
    components: {
        Layout,
        PageHeader,
        flatPickr
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <b-row>
            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Form Grid</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">More complex forms can be built using our grid classes. Use these for form
                            layouts that require multiple columns, varied widths, and additional alignment options. <span
                                class="fw-medium">Requires the <code>$enable-grid-classes</code> Sass variable to be
                                enabled</span> (on by default).</p>

                        <b-form action="#">
                            <b-row>
                                <b-col md="6">
                                    <div class="mb-3">
                                        <label for="firstNameinput" class="form-label">First Name</label>
                                        <b-form-input type="text" placeholder="Enter your firstname"
                                            id="firstNameinput"></b-form-input>
                                    </div>
                                </b-col>
                                <b-col md="6">
                                    <div class="mb-3">
                                        <label for="lastNameinput" class="form-label">Last Name</label>
                                        <b-form-input type="text" placeholder="Enter your lastname"
                                            id="lastNameinput"></b-form-input>
                                    </div>
                                </b-col>
                                <b-col md="12">
                                    <div class="mb-3">
                                        <label for="compnayNameinput" class="form-label">Company Name</label>
                                        <b-form-input type="text" placeholder="Enter company name"
                                            id="compnayNameinput"></b-form-input>
                                    </div>
                                </b-col>
                                <b-col md="6">
                                    <div class="mb-3">
                                        <label for="phonenumberInput" class="form-label">Phone Number</label>
                                        <b-form-input type="tel" placeholder="+(245) 451 45123"
                                            id="phonenumberInput"></b-form-input>
                                    </div>
                                </b-col>
                                <b-col md="6">
                                    <div class="mb-3">
                                        <label for="emailidInput" class="form-label">Email Address</label>
                                        <b-form-input type="email" placeholder="example@gamil.com"
                                            id="emailidInput"></b-form-input>
                                    </div>
                                </b-col>
                                <b-col md="12">
                                    <div class="mb-3">
                                        <label for="address1ControlTextarea" class="form-label">Address</label>
                                        <b-form-input type="text" placeholder="Address 1"
                                            id="address1ControlTextarea"></b-form-input>
                                    </div>
                                </b-col>
                                <b-col md="6">
                                    <div class="mb-3">
                                        <label for="citynameInput" class="form-label">City</label>
                                        <b-form-input type="text" placeholder="Enter your city"
                                            id="citynameInput"></b-form-input>
                                    </div>
                                </b-col>
                                <b-col md="6">
                                    <div class="mb-3">
                                        <label for="ForminputState" class="form-label">State</label>
                                        <b-form-select id="ForminputState" data-choices data-choices-sorting="true">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </b-form-select>
                                    </div>
                                </b-col>
                                <b-col lg="12">
                                    <div class="text-end">
                                        <b-button type="submit" variant="primary">Submit</b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 375px;"><code>&lt;b-form action=&quot;#&quot;&gt;
    &lt;b-row&gt;
        &lt;b-col md=&quot;6&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;                                        
                &lt;label for=&quot;firstNameinput&quot; class=&quot;form-label&quot;&gt;First Name&lt;/label&gt;
                &lt;b-form-input type=&quot;text&quot; placeholder=&quot;Enter your firstname&quot; id=&quot;firstNameinput&quot;&gt;&lt;/b-form-input&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col md=&quot;6&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;lastNameinput&quot; class=&quot;form-label&quot;&gt;Last Name&lt;/label&gt;
                &lt;b-form-input type=&quot;text&quot; placeholder=&quot;Enter your lastname&quot; id=&quot;lastNameinput&quot;&gt;&lt;/b-form-input&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col md=&quot;12&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;compnayNameinput&quot; class=&quot;form-label&quot;&gt;Company Name&lt;/label&gt;
                &lt;b-form-input type=&quot;text&quot; placeholder=&quot;Enter company name&quot; id=&quot;compnayNameinput&quot;&gt;&lt;/b-form-input&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col md=&quot;6&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;phonenumberInput&quot; class=&quot;form-label&quot;&gt;Phone Number&lt;/label&gt;
                &lt;b-form-input type=&quot;tel&quot; placeholder=&quot;+(245) 451 45123&quot; id=&quot;phonenumberInput&quot;&gt;&lt;/b-form-input&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col md=&quot;6&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;emailidInput&quot; class=&quot;form-label&quot;&gt;Email Address&lt;/label&gt;
                &lt;b-form-input type=&quot;email&quot; placeholder=&quot;example@gamil.com&quot; id=&quot;emailidInput&quot;&gt;&lt;/b-form-input&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col md=&quot;12&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;address1ControlTextarea&quot; class=&quot;form-label&quot;&gt;Address&lt;/label&gt;
                &lt;b-form-input type=&quot;text&quot; placeholder=&quot;Address 1&quot; id=&quot;address1ControlTextarea&quot;&gt;&lt;/b-form-input&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col md=&quot;6&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;citynameInput&quot; class=&quot;form-label&quot;&gt;City&lt;/label&gt;
                &lt;b-form-input type=&quot;text&quot; placeholder=&quot;Enter your city&quot; id=&quot;citynameInput&quot;&gt;&lt;/b-form-input&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col md=&quot;6&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;ForminputState&quot; class=&quot;form-label&quot;&gt;State&lt;/label&gt;
                &lt;b-form-select id=&quot;ForminputState&quot; data-choices data-choices-sorting=&quot;true&quot;&gt;
                    &lt;option selected&gt;Choose...&lt;/option&gt;
                    &lt;option&gt;...&lt;/option&gt;
                &lt;/b-form-select&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col lg=&quot;12&quot;&gt;
            &lt;div class=&quot;text-end&quot;&gt;
                &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Submit&lt;/b-button&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
    &lt;/b-row&gt;
&lt;/b-form&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Gutters</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">By adding <b-link href="/docs/5.1/layout/gutters/"
                                class="text-decoration-underline">gutter modifier classes</b-link>, you can have control
                            over the
                            gutter width in as well the inline as block direction. <span class="fw-medium">Also requires the
                                <code>$enable-grid-classes</code> Sass variable to be enabled</span> (on by default).</p>

                        <b-form action="#" class="g-3">
                            <b-row>
                                <b-col md="12">
                                    <div class="mb-3">
                                        <label for="fullnameInput" class="form-label">Name</label>
                                        <b-form-input type="text" id="fullnameInput"
                                            placeholder="Enter your name"></b-form-input>
                                    </div>
                                </b-col>
                                <b-col md="6">
                                    <div class="mb-3">
                                        <label for="inputEmail4" class="form-label">Email</label>
                                        <b-form-input type="email" id="inputEmail4" placeholder="Email"></b-form-input>
                                    </div>
                                </b-col>
                                <b-col md="6">
                                    <div class="mb-3">
                                        <label for="inputPassword4" class="form-label">Password</label>
                                        <b-form-input type="password" id="inputPassword4"
                                            placeholder="Password"></b-form-input>
                                    </div>
                                </b-col>
                                <b-col cols="12">
                                    <div class="mb-3">
                                        <label for="inputAddress" class="form-label">Address</label>
                                        <b-form-input type="text" id="inputAddress"
                                            placeholder="1234 Main St"></b-form-input>
                                    </div>
                                </b-col>
                                <b-col cols="12">
                                    <div class="mb-3">
                                        <label for="inputAddress2" class="form-label">Address 2</label>
                                        <b-form-input type="text" id="inputAddress2"
                                            placeholder="Apartment, studio, or floor"></b-form-input>
                                    </div>
                                </b-col>
                                <b-col md="6">
                                    <div class="mb-3">
                                        <label for="inputCity" class="form-label">City</label>
                                        <b-form-input type="text" id="inputCity"
                                            placeholder="Enter your city"></b-form-input>
                                    </div>
                                </b-col>
                                <b-col md="4">
                                    <div class="mb-3">
                                        <label for="inputState" class="form-label">State</label>
                                        <b-form-select id="inputState" data-choices data-choices-sorting="true">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </b-form-select>
                                    </div>
                                </b-col>
                                <b-col md="2">
                                    <div class="mb-3">
                                        <label for="inputZip" class="form-label">Zip</label>
                                        <b-form-input type="text" id="inputZip" placeholder="Zip code"></b-form-input>
                                    </div>
                                </b-col>
                                <b-col cols="12">
                                    <div class="form-check mb-3 ps-0">
                                        <b-form-checkbox id="gridCheck" class="form-check-input">Check me
                                            out</b-form-checkbox>
                                    </div>
                                </b-col>
                                <b-col cols="12">
                                    <div class="text-end">
                                        <b-button type="submit" variant="primary">Sign in</b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 338px;"><code>&lt;b-form action=&quot;#&quot; class=&quot;g-3&quot;&gt;
    &lt;b-row&gt;
        &lt;b-col md=&quot;12&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;fullnameInput&quot; class=&quot;form-label&quot;&gt;Name&lt;/label&gt;
                &lt;b-form-input type=&quot;text&quot; id=&quot;fullnameInput&quot;
                    placeholder=&quot;Enter your name&quot;&gt;&lt;/b-form-input&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col md=&quot;6&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;inputEmail4&quot; class=&quot;form-label&quot;&gt;Email&lt;/label&gt;
                &lt;b-form-input type=&quot;email&quot; id=&quot;inputEmail4&quot; placeholder=&quot;Email&quot;&gt;&lt;/b-form-input&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col md=&quot;6&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;inputPassword4&quot; class=&quot;form-label&quot;&gt;Password&lt;/label&gt;
                &lt;b-form-input type=&quot;password&quot; id=&quot;inputPassword4&quot;
                    placeholder=&quot;Password&quot;&gt;&lt;/b-form-input&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col cols=&quot;12&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;inputAddress&quot; class=&quot;form-label&quot;&gt;Address&lt;/label&gt;
                &lt;b-form-input type=&quot;text&quot; id=&quot;inputAddress&quot;
                    placeholder=&quot;1234 Main St&quot;&gt;&lt;/b-form-input&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col cols=&quot;12&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;inputAddress2&quot; class=&quot;form-label&quot;&gt;Address 2&lt;/label&gt;
                &lt;b-form-input type=&quot;text&quot; id=&quot;inputAddress2&quot;
                    placeholder=&quot;Apartment, studio, or floor&quot;&gt;&lt;/b-form-input&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col md=&quot;6&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;inputCity&quot; class=&quot;form-label&quot;&gt;City&lt;/label&gt;
                &lt;b-form-input type=&quot;text&quot; id=&quot;inputCity&quot;
                    placeholder=&quot;Enter your city&quot;&gt;&lt;/b-form-input&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col md=&quot;4&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;inputState&quot; class=&quot;form-label&quot;&gt;State&lt;/label&gt;
                &lt;b-form-select id=&quot;inputState&quot; data-choices data-choices-sorting=&quot;true&quot;&gt;
                    &lt;option selected&gt;Choose...&lt;/option&gt;
                    &lt;option&gt;...&lt;/option&gt;
                &lt;/b-form-select&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col md=&quot;2&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;inputZip&quot; class=&quot;form-label&quot;&gt;Zip&lt;/label&gt;
                &lt;b-form-input type=&quot;text&quot; id=&quot;inputZip&quot; placeholder=&quot;Zip code&quot;&gt;&lt;/b-form-input&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col cols=&quot;12&quot;&gt;
            &lt;div class=&quot;form-check mb-3 ps-0&quot;&gt;
                &lt;b-form-checkbox id=&quot;gridCheck&quot; class=&quot;form-check-input&quot;&gt;Check me
                    out&lt;/b-form-checkbox&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col cols=&quot;12&quot;&gt;
            &lt;div class=&quot;text-end&quot;&gt;
                &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Sign in&lt;/b-button&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
    &lt;/b-row&gt;
&lt;/b-form&gt;</code>
                    </pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>


        <b-row>
            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Vertical Form</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Example of vertical form using <code>form-control</code> class. No need to
                            specify row and col class to create vertical form.</p>

                        <b-form action="#">
                            <div class="mb-3">
                                <label for="employeeName" class="form-label">Employee Name</label>
                                <b-form-input type="text" id="employeeName"
                                    placeholder="Enter employee name"></b-form-input>
                            </div>
                            <div class="mb-3">
                                <label for="employeeUrl" class="form-label">Employee Department URL</label>
                                <b-form-input type="url" id="employeeUrl" placeholder="Enter employee URL"></b-form-input>
                            </div>
                            <div class="mb-3">
                                <label for="StartleaveDate" class="form-label">Start Leave Date</label>
                                <flat-pickr id="StartleaveDate" class="form-control"></flat-pickr>
                            </div>
                            <div class="mb-3">
                                <label for="EndleaveDate" class="form-label">End Leave Date</label>
                                <flat-pickr id="EndleaveDate" class="form-control"></flat-pickr>
                            </div>
                            <div class="mb-3">
                                <label for="VertimeassageInput" class="form-label">Message</label>
                                <b-form-textarea id="VertimeassageInput" rows="3"
                                    placeholder="Enter your message"></b-form-textarea>
                            </div>
                            <div class="text-end">
                                <b-button type="submit" variant="primary">Add Leave</b-button>
                            </div>
                        </b-form>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 375px;"><code>&lt;b-form action=&quot;#&quot;&gt;
    &lt;div class=&quot;mb-3&quot;&gt;
        &lt;label for=&quot;employeeName&quot; class=&quot;form-label&quot;&gt;Employee Name&lt;/label&gt;
        &lt;b-form-input type=&quot;text&quot; id=&quot;employeeName&quot;
            placeholder=&quot;Enter employee name&quot;&gt;&lt;/b-form-input&gt;
    &lt;/div&gt;
    &lt;div class=&quot;mb-3&quot;&gt;
        &lt;label for=&quot;employeeUrl&quot; class=&quot;form-label&quot;&gt;Employee Department URL&lt;/label&gt;
        &lt;b-form-input type=&quot;url&quot; id=&quot;employeeUrl&quot; placeholder=&quot;Enter employee URL&quot;&gt;&lt;/b-form-input&gt;
    &lt;/div&gt;
    &lt;div class=&quot;mb-3&quot;&gt;
        &lt;label for=&quot;StartleaveDate&quot; class=&quot;form-label&quot;&gt;Start Leave Date&lt;/label&gt;
        &lt;flat-pickr id=&quot;StartleaveDate&quot; class=&quot;form-control&quot;&gt;&lt;/flat-pickr&gt;
    &lt;/div&gt;
    &lt;div class=&quot;mb-3&quot;&gt;
        &lt;label for=&quot;EndleaveDate&quot; class=&quot;form-label&quot;&gt;End Leave Date&lt;/label&gt;
        &lt;flat-pickr id=&quot;EndleaveDate&quot; class=&quot;form-control&quot;&gt;&lt;/flat-pickr&gt;
    &lt;/div&gt;
    &lt;div class=&quot;mb-3&quot;&gt;
        &lt;label for=&quot;VertimeassageInput&quot; class=&quot;form-label&quot;&gt;Message&lt;/label&gt;
        &lt;b-form-textarea id=&quot;VertimeassageInput&quot; rows=&quot;3&quot;
            placeholder=&quot;Enter your message&quot;&gt;&lt;/b-form-textarea&gt;
    &lt;/div&gt;
    &lt;div class=&quot;text-end&quot;&gt;
        &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Add Leave&lt;/b-button&gt;
    &lt;/div&gt;
&lt;/b-form&gt;</code>
                    </pre>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Horizontal Form</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Create horizontal forms with the grid by adding the <code>row</code> class to
                            form groups and using the <code>col-*-*</code> class to specify the width of your labels and
                            controls. Be sure to add <code>col-form-label</code> class to your <code>&lt;label&gt;</code>s
                            as well so they’re vertically centered with their associated form controls.</p>

                        <b-form action="#">
                            <b-row class="mb-3">
                                <b-col lg="3">
                                    <label for="nameInput" class="form-label">Name</label>
                                </b-col>
                                <b-col lg="9">
                                    <b-form-input type="text" id="nameInput" placeholder="Enter your name"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="mb-3">
                                <b-col lg="3">
                                    <label for="websiteUrl" class="form-label">Website URL</label>
                                </b-col>
                                <b-col lg="9">
                                    <b-form-input type="url" id="websiteUrl" placeholder="Enter your URL"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="mb-3">
                                <b-col lg="3">
                                    <label for="dateInput" class="form-label">Date</label>
                                </b-col>
                                <b-col lg="9">
                                    <flat-pickr id="dateInput" class="form-control"></flat-pickr>
                                </b-col>
                            </b-row>
                            <b-row class="mb-3">
                                <b-col lg="3">
                                    <label for="timeInput" class="form-label">Time</label>
                                </b-col>
                                <b-col lg="9">
                                    <flat-pickr id="timeInput" :config="config" class="form-control"></flat-pickr>
                                </b-col>
                            </b-row>
                            <b-row class="mb-3">
                                <b-col lg="3">
                                    <label for="leaveemails" class="form-label">Email Id</label>
                                </b-col>
                                <b-col lg="9">
                                    <b-form-input type="email" id="leaveemails"
                                        placeholder="Enter your email"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="mb-3">
                                <b-col lg="3">
                                    <label for="contactNumber" class="form-label">Contact Number</label>
                                </b-col>
                                <b-col lg="9">
                                    <b-form-input type="number" id="contactNumber"
                                        placeholder="+91 9876543210"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="mb-3">
                                <b-col lg="3">
                                    <label for="meassageInput" class="form-label">Message</label>
                                </b-col>
                                <b-col lg="9">
                                    <b-form-textarea id="meassageInput" rows="3"
                                        placeholder="Enter your message"></b-form-textarea>
                                </b-col>
                            </b-row>
                            <div class="text-end">
                                <b-button type="submit" variant="primary">Add Leave</b-button>
                            </div>
                        </b-form>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 360px;"><code>&lt;b-form action=&quot;#&quot;&gt;
    &lt;b-row class=&quot;mb-3&quot;&gt;
        &lt;b-col lg=&quot;3&quot;&gt;
            &lt;label for=&quot;nameInput&quot; class=&quot;form-label&quot;&gt;Name&lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col lg=&quot;9&quot;&gt;
            &lt;b-form-input type=&quot;text&quot; id=&quot;nameInput&quot; placeholder=&quot;Enter your name&quot;&gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
    &lt;/b-row&gt;
    &lt;b-row class=&quot;mb-3&quot;&gt;
        &lt;b-col lg=&quot;3&quot;&gt;
            &lt;label for=&quot;websiteUrl&quot; class=&quot;form-label&quot;&gt;Website URL&lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col lg=&quot;9&quot;&gt;
            &lt;b-form-input type=&quot;url&quot; id=&quot;websiteUrl&quot; placeholder=&quot;Enter your URL&quot;&gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
    &lt;/b-row&gt;
    &lt;b-row class=&quot;mb-3&quot;&gt;
        &lt;b-col lg=&quot;3&quot;&gt;
            &lt;label for=&quot;dateInput&quot; class=&quot;form-label&quot;&gt;Date&lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col lg=&quot;9&quot;&gt;
            &lt;flat-pickr id=&quot;dateInput&quot; class=&quot;form-control&quot;&gt;&lt;/flat-pickr&gt;
        &lt;/b-col&gt;
    &lt;/b-row&gt;
    &lt;b-row class=&quot;mb-3&quot;&gt;
        &lt;b-col lg=&quot;3&quot;&gt;
            &lt;label for=&quot;timeInput&quot; class=&quot;form-label&quot;&gt;Time&lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col lg=&quot;9&quot;&gt;
            &lt;flat-pickr id="timeInput" :config="config" class="form-control"&gt;&lt;/flat-pickr&gt;
        &lt;/b-col&gt;
    &lt;/b-row&gt;
    &lt;b-row class=&quot;mb-3&quot;&gt;
        &lt;b-col lg=&quot;3&quot;&gt;
            &lt;label for=&quot;leaveemails&quot; class=&quot;form-label&quot;&gt;Email Id&lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col lg=&quot;9&quot;&gt;
            &lt;b-form-input type=&quot;email&quot; id=&quot;leaveemails&quot;
                placeholder=&quot;Enter your email&quot;&gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
    &lt;/b-row&gt;
    &lt;b-row class=&quot;mb-3&quot;&gt;
        &lt;b-col lg=&quot;3&quot;&gt;
            &lt;label for=&quot;contactNumber&quot; class=&quot;form-label&quot;&gt;Contact Number&lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col lg=&quot;9&quot;&gt;
            &lt;b-form-input type=&quot;number&quot; id=&quot;contactNumber&quot;
                placeholder=&quot;+91 9876543210&quot;&gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
    &lt;/b-row&gt;
    &lt;b-row class=&quot;mb-3&quot;&gt;
        &lt;b-col lg=&quot;3&quot;&gt;
            &lt;label for=&quot;meassageInput&quot; class=&quot;form-label&quot;&gt;Message&lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col lg=&quot;9&quot;&gt;
            &lt;b-form-textarea id=&quot;meassageInput&quot; rows=&quot;3&quot;
                placeholder=&quot;Enter your message&quot;&gt;&lt;/b-form-textarea&gt;
        &lt;/b-col&gt;
    &lt;/b-row&gt;
    &lt;div class=&quot;text-end&quot;&gt;
        &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Add Leave&lt;/b-button&gt;
    &lt;/div&gt;
&lt;/b-form&gt;</code>
                    </pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>


        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Horizontal Form Label Sizing</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>col-form-label-sm</code> class to set small size form label or
                            <code>col-form-label-lg</code> class to set large size form label to &lt;label&gt;. No such
                            class is required for the default size form label.
                        </p>
                        <b-row class="align-items-center g-3">
                            <b-col xxl="4">
                                <b-row>
                                    <b-col sm="2" class="col-form-label col-form-label-sm">Email</b-col>
                                    <b-col sm="10">
                                        <b-form-input type="email" class="form-control form-control-sm" id="colFormLabelSm"
                                            placeholder="col-form-label-sm"></b-form-input>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col xxl="4">
                                <b-row>
                                    <b-col sm="2" class="col-form-label">Email</b-col>
                                    <b-col sm="10">
                                        <b-form-input type="email" class="form-control" id="colFormLabel"
                                            placeholder="col-form-label"></b-form-input>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col xxl="4">
                                <b-row>
                                    <b-col sm="2" class="col-form-label col-form-label-lg">Email</b-col>
                                    <b-col sm="10">
                                        <b-form-input type="email" class="form-control form-control-lg" id="colFormLabelLg"
                                            placeholder="col-form-label-lg"></b-form-input>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Col Form Label Small --&gt;
    &lt;b-row&gt;
        &lt;b-col sm=&quot;2&quot; class=&quot;col-form-label col-form-label-sm&quot;&gt;Email&lt;/b-col&gt;
        &lt;b-col sm=&quot;10&quot;&gt;
            &lt;b-form-input type=&quot;email&quot; class=&quot;form-control form-control-sm&quot; id=&quot;colFormLabelSm&quot;
                placeholder=&quot;col-form-label-sm&quot;&gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
    &lt;/b-row&gt;</code>

                        <code>&lt;!-- Col Form Label Default --&gt;
    &lt;b-row&gt;
        &lt;b-col sm=&quot;2&quot; class=&quot;col-form-label&quot;&gt;Email&lt;/b-col&gt;
        &lt;b-col sm=&quot;10&quot;&gt;
            &lt;b-form-input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;colFormLabel&quot;
                placeholder=&quot;col-form-label&quot;&gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
    &lt;/b-row&gt;;</code>

                        <code>&lt;!-- Col Form Label Large --&gt;
    &lt;b-row&gt;
        &lt;b-col sm=&quot;2&quot; class=&quot;col-form-label col-form-label-lg&quot;&gt;Email&lt;/b-col&gt;
        &lt;b-col sm=&quot;10&quot;&gt;
            &lt;b-form-input type=&quot;email&quot; class=&quot;form-control form-control-lg&quot; id=&quot;colFormLabelLg&quot;
                placeholder=&quot;col-form-label-lg&quot;&gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
    &lt;/b-row&gt;</code>
                    </pre>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Column Sizing</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>col-sm-</code> class with required size value to set column size as
                            per your requirement.</p>

                        <b-row class="g-3">
                            <b-col sm="6">
                                <b-form-input type="text" class="form-control" placeholder="Firstname"
                                    aria-label="First-Name"></b-form-input>
                            </b-col>
                            <b-col sm="6">
                                <b-form-input type="text" class="form-control" placeholder="Lastname"
                                    aria-label="Last-Name"></b-form-input>
                            </b-col>
                            <b-col sm="4">
                                <b-form-input type="text" class="form-control" placeholder="Email id"
                                    aria-label="Email Id"></b-form-input>
                            </b-col>
                            <b-col sm="4">
                                <b-form-input type="password" class="form-control" placeholder="Password"
                                    aria-label="Password"></b-form-input>
                            </b-col>
                            <b-col sm="4">
                                <b-form-input type="password" class="form-control" placeholder="Confirm Password"
                                    aria-label="confirm-password"></b-form-input>
                            </b-col>
                            <b-col sm="7">
                                <b-form-input type="text" class="form-control" placeholder="City"
                                    aria-label="City"></b-form-input>
                            </b-col>
                            <b-col cols="sm">
                                <b-form-input type="text" class="form-control" placeholder="State"
                                    aria-label="State"></b-form-input>
                            </b-col>
                            <b-col cols="sm">
                                <b-form-input type="text" class="form-control" placeholder="Zip"
                                    aria-label="Zip"></b-form-input>
                            </b-col>
                        </b-row>

                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px;"><code>&lt;b-row class=&quot;g-3&quot;&gt;
    &lt;b-col sm=&quot;6&quot;&gt;
        &lt;b-form-input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Firstname&quot;
            aria-label=&quot;First-Name&quot;&gt;&lt;/b-form-input&gt;
    &lt;/b-col&gt;
    &lt;b-col sm=&quot;6&quot;&gt;
        &lt;b-form-input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Lastname&quot;
            aria-label=&quot;Last-Name&quot;&gt;&lt;/b-form-input&gt;
    &lt;/b-col&gt;
    &lt;b-col sm=&quot;4&quot;&gt;
        &lt;b-form-input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Email id&quot;
            aria-label=&quot;Email Id&quot;&gt;&lt;/b-form-input&gt;
    &lt;/b-col&gt;
    &lt;b-col sm=&quot;4&quot;&gt;
        &lt;b-form-input type=&quot;password&quot; class=&quot;form-control&quot; placeholder=&quot;Password&quot;
            aria-label=&quot;Password&quot;&gt;&lt;/b-form-input&gt;
    &lt;/b-col&gt;
    &lt;b-col sm=&quot;4&quot;&gt;
        &lt;b-form-input type=&quot;password&quot; class=&quot;form-control&quot; placeholder=&quot;Confirm Password&quot;
            aria-label=&quot;confirm-password&quot;&gt;&lt;/b-form-input&gt;
    &lt;/b-col&gt;
    &lt;b-col sm=&quot;7&quot;&gt;
        &lt;b-form-input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;City&quot;
            aria-label=&quot;City&quot;&gt;&lt;/b-form-input&gt;
    &lt;/b-col&gt;
    &lt;b-col cols=&quot;sm&quot;&gt;
        &lt;b-form-input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;State&quot;
            aria-label=&quot;State&quot;&gt;&lt;/b-form-input&gt;
    &lt;/b-col&gt;
    &lt;b-col cols=&quot;sm&quot;&gt;
        &lt;b-form-input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Zip&quot;
            aria-label=&quot;Zip&quot;&gt;&lt;/b-form-input&gt;
    &lt;/b-col&gt;
&lt;/b-row&gt;</code>
                    </pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Auto Sizing</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Change <code>col</code> class to <code>col-auto</code> class so that your
                            columns only take up as much space as needed. Put another way, the column sizes itself based on
                            the contents.</p>

                        <b-form action="#">
                            <b-row class="gy-2 gx-3 mb-3 align-items-center">
                                <b-col sm="auto">
                                    <b-form-input type="text" class="form-control" id="autoSizingInput"
                                        placeholder="Jane Doe"></b-form-input>
                                </b-col>
                                <b-col sm="auto">
                                    <b-input-group>
                                        <b-input-group-prepend is-text>
                                            @
                                        </b-input-group-prepend>
                                        <b-form-input type="text" class="form-control" id="autoSizingInputGroup"
                                            placeholder="Username"></b-form-input>
                                    </b-input-group>
                                </b-col>
                                <b-col sm="auto">
                                    <b-form-select class="form-select" data-choices data-choices-sorting="true"
                                        id="autoSizingSelect">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </b-form-select>
                                </b-col>
                                <b-col sm="auto">
                                    <b-form-checkbox id="autoSizingCheck" v-model="rememberMe">
                                        Remember me
                                    </b-form-checkbox>
                                </b-col>
                                <b-col sm="auto">
                                    <b-button type="submit" variant="primary">Submit</b-button>
                                </b-col>
                            </b-row>

                        </b-form>

                        <b-form action="#">
                            <b-row class="gx-3 gy-2 align-items-center">
                                <b-col sm="3">
                                    <b-form-input type="text" class="form-control" id="specificSizeInputName"
                                        placeholder="Jane Doe"></b-form-input>
                                </b-col>
                                <b-col sm="3">
                                    <b-input-group>
                                        <b-input-group-prepend is-text>
                                            @
                                        </b-input-group-prepend>
                                        <b-form-input type="text" class="form-control" id="specificSizeInputGroupUsername"
                                            placeholder="Username"></b-form-input>
                                    </b-input-group>
                                </b-col>
                                <b-col sm="3">
                                    <b-form-select class="form-select" data-choices data-choices-sorting="true"
                                        id="specificSizeSelect">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </b-form-select>
                                </b-col>
                                <b-col cols="auto">
                                    <b-form-checkbox id="autoSizingCheck2" v-model="rememberMe">
                                        Remember me
                                    </b-form-checkbox>
                                </b-col>
                                <b-col cols="auto">
                                    <b-button type="submit" variant="primary">Submit</b-button>
                                </b-col>
                            </b-row>

                        </b-form>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px"><code>&lt;b-form action=&quot;#&quot;&gt;
    &lt;b-row class=&quot;gy-2 gx-3 mb-3 align-items-center&quot;&gt;
        &lt;b-col sm=&quot;auto&quot;&gt;
            &lt;b-form-input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;autoSizingInput&quot;
                placeholder=&quot;Jane Doe&quot;&gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
        &lt;b-col sm=&quot;auto&quot;&gt;
            &lt;b-input-group&gt;
                &lt;b-input-group-prepend is-text&gt;
                    @
                &lt;/b-input-group-prepend&gt;
                &lt;b-form-input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;autoSizingInputGroup&quot;
                    placeholder=&quot;Username&quot;&gt;&lt;/b-form-input&gt;
            &lt;/b-input-group&gt;
        &lt;/b-col&gt;
        &lt;b-col sm=&quot;auto&quot;&gt;
            &lt;b-form-select class=&quot;form-select&quot; data-choices data-choices-sorting=&quot;true&quot;
                id=&quot;autoSizingSelect&quot;&gt;
                &lt;option selected&gt;Choose...&lt;/option&gt;
                &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
                &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
                &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
            &lt;/b-form-select&gt;
        &lt;/b-col&gt;
        &lt;b-col sm=&quot;auto&quot;&gt;
            &lt;b-form-checkbox id=&quot;autoSizingCheck&quot; v-model=&quot;rememberMe&quot;&gt;
                Remember me
            &lt;/b-form-checkbox&gt;
        &lt;/b-col&gt;
        &lt;b-col sm=&quot;auto&quot;&gt;
            &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Submit&lt;/b-button&gt;
        &lt;/b-col&gt;
    &lt;/b-row&gt;
&lt;/b-form&gt;</code>

                        <code>&lt;b-form action=&quot;#&quot;&gt;
    &lt;b-row class=&quot;gx-3 gy-2 align-items-center&quot;&gt;
        &lt;b-col sm=&quot;3&quot;&gt;
            &lt;b-form-input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;specificSizeInputName&quot;
                placeholder=&quot;Jane Doe&quot;&gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
        &lt;b-col sm=&quot;3&quot;&gt;
            &lt;b-input-group&gt;
                &lt;b-input-group-prepend is-text&gt;
                    @
                &lt;/b-input-group-prepend&gt;
                &lt;b-form-input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;specificSizeInputGroupUsername&quot;
                    placeholder=&quot;Username&quot;&gt;&lt;/b-form-input&gt;
            &lt;/b-input-group&gt;
        &lt;/b-col&gt;
        &lt;b-col sm=&quot;3&quot;&gt;
            &lt;b-form-select class=&quot;form-select&quot; data-choices data-choices-sorting=&quot;true&quot;
                id=&quot;specificSizeSelect&quot;&gt;
                &lt;option selected&gt;Choose...&lt;/option&gt;
                &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
                &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
                &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
            &lt;/b-form-select&gt;
        &lt;/b-col&gt;
        &lt;b-col cols=&quot;auto&quot;&gt;
            &lt;b-form-checkbox id=&quot;autoSizingCheck2&quot; v-model=&quot;rememberMe&quot;&gt;
                Remember me
            &lt;/b-form-checkbox&gt;
        &lt;/b-col&gt;
        &lt;b-col cols=&quot;auto&quot;&gt;
            &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Submit&lt;/b-button&gt;
        &lt;/b-col&gt;
    &lt;/b-row&gt;
&lt;/b-form&gt;</code>
                    </pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>


        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Inline Forms</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>row-cols-*</code> class to set form inline.</p>
                        <b-form action="#">
                            <b-row class="row-cols-lg-auto g-3 align-items-center">
                                <b-col cols="12">
                                    <b-input-group>
                                        <b-input-group-prepend is-text>
                                            @
                                        </b-input-group-prepend>
                                        <b-form-input type="text" class="form-control" id="inlineFormInputGroupUsername"
                                            placeholder="Username"></b-form-input>
                                    </b-input-group>
                                </b-col>
                                <b-col cols="12">
                                    <b-form-select class="form-select" data-choices data-choices-sorting="true"
                                        id="inlineFormSelectPref">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </b-form-select>
                                </b-col>
                                <b-col cols="12">
                                    <b-form-checkbox id="inlineFormCheck" v-model="rememberMe">
                                        Remember me
                                    </b-form-checkbox>
                                </b-col>
                                <b-col cols="12">
                                    <b-button type="submit" variant="primary">Submit</b-button>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px"><code>&lt;b-form action=&quot;#&quot;&gt;
    &lt;b-row class=&quot;row-cols-lg-auto g-3 align-items-center&quot;&gt;
        &lt;b-col cols=&quot;12&quot;&gt;
            &lt;b-input-group&gt;
                &lt;b-input-group-prepend is-text&gt;
                    @
                &lt;/b-input-group-prepend&gt;
                &lt;b-form-input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inlineFormInputGroupUsername&quot;
                    placeholder=&quot;Username&quot;&gt;&lt;/b-form-input&gt;
            &lt;/b-input-group&gt;
        &lt;/b-col&gt;
        &lt;b-col cols=&quot;12&quot;&gt;
            &lt;b-form-select class=&quot;form-select&quot; data-choices data-choices-sorting=&quot;true&quot;
                id=&quot;inlineFormSelectPref&quot;&gt;
                &lt;option selected&gt;Choose...&lt;/option&gt;
                &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
                &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
                &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
            &lt;/b-form-select&gt;
        &lt;/b-col&gt;
        &lt;b-col cols=&quot;12&quot;&gt;
            &lt;b-form-checkbox id=&quot;inlineFormCheck&quot; v-model=&quot;rememberMe&quot;&gt;
                Remember me
            &lt;/b-form-checkbox&gt;
        &lt;/b-col&gt;
        &lt;b-col cols=&quot;12&quot;&gt;
            &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Submit&lt;/b-button&gt;
        &lt;/b-col&gt;
    &lt;/b-row&gt;
&lt;/b-form&gt;</code>
                    </pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Floating Labels</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>form-floating</code> class to enable floating labels with
                            Bootstrap’s textual form fields.</p>

                        <b-form action="#">
                            <b-row class="g-3">
                                <b-col lg="6">
                                    <div class="form-floating">
                                        <b-form-input type="text" placeholder="Enter your firstname"></b-form-input>
                                        <label for="firstnamefloatingInput">First Name</label>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div class="form-floating">
                                        <b-form-input type="text" placeholder="Enter your Lastname"></b-form-input>
                                        <label for="lastnamefloatingInput">Last Name</label>
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div class="form-floating">
                                        <b-form-input type="email" placeholder="Enter your email"></b-form-input>
                                        <label for="emailfloatingInput">Email Address</label>
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div class="form-floating">
                                        <b-form-input type="password" placeholder="Enter your password"></b-form-input>
                                        <label for="passwordfloatingInput">Password</label>
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div class="form-floating">
                                        <b-form-input type="password" placeholder="Confirm password"></b-form-input>
                                        <label for="passwordfloatingInput1">Confirm Password</label>
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div class="form-floating">
                                        <b-form-input type="text" placeholder="Enter your city"></b-form-input>
                                        <label for="cityfloatingInput">City</label>
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div class="form-floating">
                                        <b-form-select>
                                            <option value="">Choose...</option>
                                            <option value="1">USA</option>
                                            <option value="2">Brazil</option>
                                            <option value="3">France</option>
                                            <option value="4">Germany</option>
                                        </b-form-select>
                                        <label for="floatingSelect">Country</label>
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div class="form-floating">
                                        <b-form-input type="number" placeholder="Enter your zipcode"></b-form-input>
                                        <label for="zipfloatingInput">Zipcode</label>
                                    </div>
                                </b-col>
                                <b-col lg="12">
                                    <div class="text-end">
                                        <b-button type="submit" variant="primary">Submit</b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px"><code>&lt;b-form action="#"&gt;
    &lt;b-row class=&quot;g-3&quot;&gt;
        &lt;b-col lg=&quot;6&quot;&gt;
            &lt;div class=&quot;form-floating&quot;&gt;
                &lt;b-form-input type=&quot;text&quot; placeholder=&quot;Enter your firstname&quot;&gt;&lt;/b-form-input&gt;
                &lt;label for=&quot;firstnamefloatingInput&quot;&gt;First Name&lt;/label&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col lg=&quot;6&quot;&gt;
            &lt;div class=&quot;form-floating&quot;&gt;
                &lt;b-form-input type=&quot;text&quot; placeholder=&quot;Enter your Lastname&quot;&gt;&lt;/b-form-input&gt;
                &lt;label for=&quot;lastnamefloatingInput&quot;&gt;Last Name&lt;/label&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col lg=&quot;4&quot;&gt;
            &lt;div class=&quot;form-floating&quot;&gt;
                &lt;b-form-input type=&quot;email&quot; placeholder=&quot;Enter your email&quot;&gt;&lt;/b-form-input&gt;
                &lt;label for=&quot;emailfloatingInput&quot;&gt;Email Address&lt;/label&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col lg=&quot;4&quot;&gt;
            &lt;div class=&quot;form-floating&quot;&gt;
                &lt;b-form-input type=&quot;password&quot; placeholder=&quot;Enter your password&quot;&gt;&lt;/b-form-input&gt;
                &lt;label for=&quot;passwordfloatingInput&quot;&gt;Password&lt;/label&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col lg=&quot;4&quot;&gt;
            &lt;div class=&quot;form-floating&quot;&gt;
                &lt;b-form-input type=&quot;password&quot; placeholder=&quot;Confirm password&quot;&gt;&lt;/b-form-input&gt;
                &lt;label for=&quot;passwordfloatingInput1&quot;&gt;Confirm Password&lt;/label&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col lg=&quot;4&quot;&gt;
            &lt;div class=&quot;form-floating&quot;&gt;
                &lt;b-form-input type=&quot;text&quot; placeholder=&quot;Enter your city&quot;&gt;&lt;/b-form-input&gt;
                &lt;label for=&quot;cityfloatingInput&quot;&gt;City&lt;/label&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col lg=&quot;4&quot;&gt;
            &lt;div class=&quot;form-floating&quot;&gt;
                &lt;b-form-select&gt;
                    &lt;option value=&quot;&quot;&gt;Choose...&lt;/option&gt;
                    &lt;option value=&quot;1&quot;&gt;USA&lt;/option&gt;
                    &lt;option value=&quot;2&quot;&gt;Brazil&lt;/option&gt;
                    &lt;option value=&quot;3&quot;&gt;France&lt;/option&gt;
                    &lt;option value=&quot;4&quot;&gt;Germany&lt;/option&gt;
                &lt;/b-form-select&gt;
                &lt;label for=&quot;floatingSelect&quot;&gt;Country&lt;/label&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col lg=&quot;4&quot;&gt;
            &lt;div class=&quot;form-floating&quot;&gt;
                &lt;b-form-input type=&quot;number&quot; placeholder=&quot;Enter your zipcode&quot;&gt;&lt;/b-form-input&gt;
                &lt;label for=&quot;zipfloatingInput&quot;&gt;Zipcode&lt;/label&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
        &lt;b-col lg=&quot;12&quot;&gt;
            &lt;div class=&quot;text-end&quot;&gt;
                &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Submit&lt;/b-button&gt;
            &lt;/div&gt;
        &lt;/b-col&gt;
    &lt;/b-row&gt;
&lt;/b-form&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>