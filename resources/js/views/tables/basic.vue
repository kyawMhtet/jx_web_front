<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import avatar1 from "../../../images/users/32/avatar-1.jpg";
import avatar3 from "../../../images/users/32/avatar-3.jpg";
import avatar4 from "../../../images/users/32/avatar-4.jpg";
import avatar5 from "../../../images/users/32/avatar-5.jpg";
import avatar6 from "../../../images/users/32/avatar-6.jpg";

import "prismjs";

export default {
    data() {
        return {
            title: "Basic Tables",
            items: [
                {
                    text: "Tables",
                    href: "/",
                },
                {
                    text: "Basic Tables",
                    active: true,
                },
            ],
            avatar1, avatar3, avatar4, avatar5, avatar6, 
        };
    },
    components: {
        Layout,
        PageHeader,
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Default Table</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>b-table-simple</code> tag to show bootstrap-based default table.</p>
                        <b-table-simple responsive class="align-middle table-nowrap mb-0">
                            <b-thead>
                                <b-tr>
                                    <b-th scope="col">ID</b-th>
                                    <b-th scope="col">Customer</b-th>
                                    <b-th scope="col">Date</b-th>
                                    <b-th scope="col">Invoice</b-th>
                                    <b-th scope="col">Action</b-th>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-th scope="row"><b-link href="#" class="fw-medium">#VZ2110</b-link></b-th>
                                    <b-td>Bobby Davis</b-td>
                                    <b-td>October 15, 2021</b-td>
                                    <b-td>$2,300</b-td>
                                    <b-td><b-link href="#" class="link-success">View More <i
                                                class="ri-arrow-right-line align-middle"></i></b-link></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th scope="row"><b-link href="#" class="fw-medium">#VZ2109</b-link></b-th>
                                    <b-td>Christopher Neal</b-td>
                                    <b-td>October 7, 2021</b-td>
                                    <b-td>$5,500</b-td>
                                    <b-td><b-link href="#" class="link-success">View More <i
                                                class="ri-arrow-right-line align-middle"></i></b-link></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th scope="row"><b-link href="#" class="fw-medium">#VZ2108</b-link></b-th>
                                    <b-td>Monkey Karry</b-td>
                                    <b-td>October 5, 2021</b-td>
                                    <b-td>$2,420</b-td>
                                    <b-td><b-link href="#" class="link-success">View More <i
                                                class="ri-arrow-right-line align-middle"></i></b-link></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th scope="row"><b-link href="#" class="fw-medium">#VZ2107</b-link></b-th>
                                    <b-td>James White</b-td>
                                    <b-td>October 2, 2021</b-td>
                                    <b-td>$7,452</b-td>
                                    <b-td><b-link href="#" class="link-success">View More <i
                                                class="ri-arrow-right-line align-middle"></i></b-link></b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;b-table-simple responsive class="align-middle table-nowrap mb-0"&gt;
&lt;b-thead&gt;
    &lt;b-tr&gt;
        &lt;b-th scope="col"&gt;ID&lt;/b-th&gt;
        &lt;b-th scope="col"&gt;Customer&lt;/b-th&gt;
        &lt;b-th scope="col"&gt;Date&lt;/b-th&gt;
        &lt;b-th scope="col"&gt;Invoice&lt;/b-th&gt;
        &lt;b-th scope="col"&gt;Action&lt;/b-th&gt;
    &lt;/b-tr&gt;
&lt;/b-thead&gt;
&lt;b-tbody&gt;
    &lt;b-tr&gt;
        &lt;b-th scope="row"&gt;&lt;b-link href="#" class="fw-medium"&gt;#VZ2110&lt;/b-link&gt;&lt;/b-th&gt;
        &lt;b-td&gt;Bobby Davis&lt;/b-td&gt;
        &lt;b-td&gt;October 15, 2021&lt;/b-td&gt;
        &lt;b-td&gt;$2,300&lt;/b-td&gt;
        &lt;b-td&gt;&lt;b-link href="#" class="link-success"&gt;View More &lt;i class="ri-arrow-right-line align-middle"&gt;&lt;/i&gt;&lt;/b-link&gt;&lt;/b-td&gt;
    &lt;/b-tr&gt;
    &lt;b-tr&gt;
        &lt;b-th scope="row"&gt;&lt;b-link href="#" class="fw-medium"&gt;#VZ2109&lt;/b-link&gt;&lt;/b-th&gt;
        &lt;b-td&gt;Christopher Neal&lt;/b-td&gt;
        &lt;b-td&gt;October 7, 2021&lt;/b-td&gt;
        &lt;b-td&gt;$5,500&lt;/b-td&gt;
        &lt;b-td&gt;&lt;b-link href="#" class="link-success"&gt;View More &lt;i class="ri-arrow-right-line align-middle"&gt;&lt;/i&gt;&lt;/b-link&gt;&lt;/b-td&gt;
    &lt;/b-tr&gt;
    &lt;b-tr&gt;
        &lt;b-th scope="row"&gt;&lt;b-link href="#" class="fw-medium"&gt;#VZ2108&lt;/b-link&gt;&lt;/b-th&gt;
        &lt;b-td&gt;Monkey Karry&lt;/b-td&gt;
        &lt;b-td&gt;October 5, 2021&lt;/b-td&gt;
        &lt;b-td&gt;$2,420&lt;/b-td&gt;
        &lt;b-td&gt;&lt;b-link href="#" class="link-success"&gt;View More &lt;i class="ri-arrow-right-line align-middle"&gt;&lt;/i&gt;&lt;/b-link&gt;&lt;/b-td&gt;
    &lt;/b-tr&gt;
    &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>


            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Striped Rows</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>striped</code> attribute to add zebra-striping to any table row
                            within the &lt;b-tbody&gt;.</p>
                        <b-table-simple striped responsive class="table-nowrap align-middle mb-0">
                            <b-thead>
                                <b-tr>
                                    <b-th scope="col">ID</b-th>
                                    <b-th scope="col">Customer</b-th>
                                    <b-th scope="col">Date</b-th>
                                    <b-th scope="col">Invoice</b-th>
                                    <b-th scope="col">Action</b-th>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="fw-medium">01</b-td>
                                    <b-td>Bobby Davis</b-td>
                                    <b-td>Nov 14, 2021</b-td>
                                    <b-td>$2,410</b-td>
                                    <b-td><span class="badge bg-success">Confirmed</span></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="fw-medium">02</b-td>
                                    <b-td>Christopher Neal</b-td>
                                    <b-td>Nov 21, 2021</b-td>
                                    <b-td>$1,450</b-td>
                                    <b-td><span class="badge bg-warning">Waiting</span></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="fw-medium">03</b-td>
                                    <b-td>Monkey Karry</b-td>
                                    <b-td>Nov 24, 2021</b-td>
                                    <b-td>$3,500</b-td>
                                    <b-td><span class="badge bg-success">Confirmed</span></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="fw-medium">04</b-td>
                                    <b-td>Aaron James</b-td>
                                    <b-td>Nov 25, 2021</b-td>
                                    <b-td>$6,875</b-td>
                                    <b-td><span class="badge bg-danger">Cancelled</span></b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;b-table-simple striped responsive class="table-nowrap align-middle mb-0"&gt;
    &lt;b-thead&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="col"&gt;ID&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Customer&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Date&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Invoice&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Action&lt;/b-th&gt;
        &lt;/b-tr&gt;
    &lt;/b-thead&gt;
    &lt;b-tbody&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;01&lt;/b-td&gt;
            &lt;b-td&gt;Bobby Davis&lt;/b-td&gt;
            &lt;b-td&gt;Nov 14, 2021&lt;/b-td&gt;
            &lt;b-td&gt;$2,410&lt;/b-td&gt;
            &lt;b-td&gt;&lt;span class="badge bg-success"&gt;Confirmed&lt;/span&gt;&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;02&lt;/b-td&gt;
            &lt;b-td&gt;Christopher Neal&lt;/b-td&gt;
            &lt;b-td&gt;Nov 21, 2021&lt;/b-td&gt;
            &lt;b-td&gt;$1,450&lt;/b-td&gt;
            &lt;b-td&gt;&lt;span class="badge bg-warning"&gt;Waiting&lt;/span&gt;&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;03&lt;/b-td&gt;
            &lt;b-td&gt;Monkey Karry&lt;/b-td&gt;
            &lt;b-td&gt;Nov 24, 2021&lt;/b-td&gt;
            &lt;b-td&gt;$3,500&lt;/b-td&gt;
            &lt;b-td&gt;&lt;span class="badge bg-success"&gt;Confirmed&lt;/span&gt;&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;04&lt;/b-td&gt;
            &lt;b-td&gt;Aaron James&lt;/b-td&gt;
            &lt;b-td&gt;Nov 25, 2021&lt;/b-td&gt;
            &lt;b-td&gt;$6,875&lt;/b-td&gt;
            &lt;b-td&gt;&lt;span class="badge bg-danger"&gt;Cancelled&lt;/span&gt;&lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>

        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Tables Colors</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>dark</code> attribute to set dark color table body and
                            <code>tableVariant="success"</code> attribute to set success color table body respectively. use
                            <code>table-</code> class with different color variation to set required table body color.
                        </p>
                        <b-row>
                            <b-col xl="6">
                                    <b-table-simple responsive striped dark class="table-nowrap mb-0">
                                        <b-thead>
                                            <b-tr>
                                                <b-th scope="col">ID</b-th>
                                                <b-th scope="col">Customer</b-th>
                                                <b-th scope="col">Date</b-th>
                                                <b-th scope="col">Invoice</b-th>
                                            </b-tr>
                                        </b-thead>
                                        <b-tbody>
                                            <b-tr>
                                                <b-td class="fw-medium">01</b-td>
                                                <b-td>Bobby Davis</b-td>
                                                <b-td>Nov 14, 2021</b-td>
                                                <b-td>$2,410</b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-td class="fw-medium">02</b-td>
                                                <b-td>Christopher Neal</b-td>
                                                <b-td>Nov 21, 2021</b-td>
                                                <b-td>$1,450</b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-td class="fw-medium">03</b-td>
                                                <b-td>Monkey Karry</b-td>
                                                <b-td>Nov 24, 2021</b-td>
                                                <b-td>$3,500</b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-td class="fw-medium">04</b-td>
                                                <b-td>Aaron James</b-td>
                                                <b-td>Nov 25, 2021</b-td>
                                                <b-td>$6,875</b-td>
                                            </b-tr>
                                        </b-tbody>
                                    </b-table-simple>
                            </b-col>


                            <b-col xl="6">
                                <div class="mt-4 mt-xl-0">
                                    <b-table-simple responsive tableVariant="success" striped class="table-nowrap align-middle mb-0">
                                        <b-thead>
                                            <b-tr>
                                                <b-th scope="col">ID</b-th>
                                                <b-th scope="col">Invoice</b-th>
                                                <b-th scope="col">Amount</b-th>
                                                <b-th scope="col">Date</b-th>
                                                <b-th scope="col">Status</b-th>
                                                <b-th scope="col">Action</b-th>
                                            </b-tr>
                                        </b-thead>
                                        <b-tbody>
                                            <b-tr>
                                                <b-td class="fw-medium">01</b-td>
                                                <b-td>Basic Plan</b-td>
                                                <b-td>$860</b-td>
                                                <b-td>Nov 22, 2021</b-td>
                                                <b-td><i class="ri-checkbox-circle-line align-middle text-success"></i>
                                                    Subscribed</b-td>
                                                <b-td>
                                                    <div class="hstack gap-3 flex-wrap">
                                                        <b-link href="#" class="link-success fs-base"><i
                                                                class="ri-edit-2-line"></i></b-link>
                                                        <b-link href="#" class="link-danger fs-base"><i
                                                                class="ri-delete-bin-line"></i></b-link>
                                                    </div>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-td class="fw-medium">02</b-td>
                                                <b-td>Premium Plan</b-td>
                                                <b-td>$1200</b-td>
                                                <b-td>Nov 10, 2021</b-td>
                                                <b-td><i class="ri-close-circle-line align-middle text-danger"></i>
                                                    Unsubscribed</b-td>
                                                <b-td>
                                                    <div class="hstack gap-3 flex-wrap">
                                                        <b-link href="#" class="link-success fs-base"><i
                                                                class="ri-edit-2-line"></i></b-link>
                                                        <b-link href="#" class="link-danger fs-base"><i
                                                                class="ri-delete-bin-line"></i></b-link>
                                                    </div>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-td class="fw-medium">03</b-td>
                                                <b-td>Basic Plan</b-td>
                                                <b-td>$860</b-td>
                                                <b-td>Nov 19, 2021</b-td>
                                                <b-td><i class="ri-checkbox-circle-line align-middle text-success"></i>
                                                    Subscribed</b-td>
                                                <b-td>
                                                    <div class="hstack gap-3 flex-wrap">
                                                        <b-link href="#" class="link-success fs-base"><i
                                                                class="ri-edit-2-line"></i></b-link>
                                                        <b-link href="#" class="link-danger fs-base"><i
                                                                class="ri-delete-bin-line"></i></b-link>
                                                    </div>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-td class="fw-medium">04</b-td>
                                                <b-td>Corporate Plan</b-td>
                                                <b-td>$1599</b-td>
                                                <b-td>Nov 22, 2021</b-td>
                                                <b-td><i class="ri-checkbox-circle-line align-middle text-success"></i>
                                                    Subscribed</b-td>
                                                <b-td>
                                                    <div class="hstack gap-3 flex-wrap">
                                                        <b-link href="#" class="link-success fs-base"><i
                                                                class="ri-edit-2-line"></i></b-link>
                                                        <b-link href="#" class="link-danger fs-base"><i
                                                                class="ri-delete-bin-line"></i></b-link>
                                                    </div>
                                                </b-td>
                                            </b-tr>
                                        </b-tbody>
                                    </b-table-simple>
                                </div>
                            </b-col>

                        </b-row>

                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;b-table-simple responsive striped dark class="table-nowrap mb-0"&gt;
    &lt;b-thead&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="col"&gt;ID&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Customer&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Date&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Invoice&lt;/b-th&gt;
        &lt;/b-tr&gt;
    &lt;/b-thead&gt;
    &lt;b-tbody&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;01&lt;/b-td&gt;
            &lt;b-td&gt;Bobby Davis&lt;/b-td&gt;
            &lt;b-td&gt;Nov 14, 2021&lt;/b-td&gt;
            &lt;b-td&gt;$2,410&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;02&lt;/b-td&gt;
            &lt;b-td&gt;Christopher Neal&lt;/b-td&gt;
            &lt;b-td&gt;Nov 21, 2021&lt;/b-td&gt;
            &lt;b-td&gt;$1,450&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;03&lt;/b-td&gt;
            &lt;b-td&gt;Monkey Karry&lt;/b-td&gt;
            &lt;b-td&gt;Nov 24, 2021&lt;/b-td&gt;
            &lt;b-td&gt;$3,500&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;04&lt;/b-td&gt;
            &lt;b-td&gt;Aaron James&lt;/b-td&gt;
            &lt;b-td&gt;Nov 25, 2021&lt;/b-td&gt;
            &lt;b-td&gt;$6,875&lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;</code>

<code>&lt;b-table-simple responsive tableVariant="success" striped class="table-nowrap align-middle mb-0"&gt;
    &lt;b-thead&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="col"&gt;ID&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Invoice&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Amount&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Date&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Status&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Action&lt;/b-th&gt;
        &lt;/b-tr&gt;
    &lt;/b-thead&gt;
    &lt;b-tbody&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;01&lt;/b-td&gt;
            &lt;b-td&gt;Basic Plan&lt;/b-td&gt;
            &lt;b-td&gt;$860&lt;/b-td&gt;
            &lt;b-td&gt;Nov 22, 2021&lt;/b-td&gt;
            &lt;b-td&gt;&lt;i class="ri-checkbox-circle-line align-middle text-success"&gt;&lt;/i&gt;
                Subscribed&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="hstack gap-3 flex-wrap"&gt;
                    &lt;b-link href="#" class="link-success fs-base"&gt;&lt;i
                            class="ri-edit-2-line"&gt;&lt;/i&gt;&lt;/b-link&gt;
                    &lt;b-link href="#" class="link-danger fs-base"&gt;&lt;i
                            class="ri-delete-bin-line"&gt;&lt;/i&gt;&lt;/b-link&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;02&lt;/b-td&gt;
            &lt;b-td&gt;Premium Plan&lt;/b-td&gt;
            &lt;b-td&gt;$1200&lt;/b-td&gt;
            &lt;b-td&gt;Nov 10, 2021&lt;/b-td&gt;
            &lt;b-td&gt;&lt;i class="ri-close-circle-line align-middle text-danger"&gt;&lt;/i&gt;
                Unsubscribed&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="hstack gap-3 flex-wrap"&gt;
                    &lt;b-link href="#" class="link-success fs-base"&gt;&lt;i
                            class="ri-edit-2-line"&gt;&lt;/i&gt;&lt;/b-link&gt;
                    &lt;b-link href="#" class="link-danger fs-base"&gt;&lt;i
                            class="ri-delete-bin-line"&gt;&lt;/i&gt;&lt;/b-link&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
    &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>

        </b-row>


        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Hoverable Rows</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>hover</code> attribute to enable a hover state on table rows
                            within a &lt;b-tbody&gt;.</p>
                        <b-row>
                            <b-col xl="6">
                                    <b-table-simple responsive hover class="align-middle table-nowrap mb-0">
                                        <b-thead>
                                            <b-tr>
                                                <b-th scope="col" style="width: 25px;">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="checkAll"
                                                            value="option1">
                                                    </div>
                                                </b-th>
                                                <b-th scope="col">Order ID</b-th>
                                                <b-th scope="col">Shop</b-th>
                                                <b-th scope="col">Customer</b-th>
                                                <b-th scope="col">Price</b-th>
                                                <b-th scope="col">Action</b-th>
                                            </b-tr>
                                        </b-thead>
                                        <b-tbody>
                                            <b-tr>
                                                <b-th scope="row">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2"
                                                            value="option1" checked>
                                                    </div>
                                                </b-th>
                                                <b-td>#541254265</b-td>
                                                <b-td>Amezon</b-td>
                                                <b-td>Cleo Carson</b-td>
                                                <b-td>$4,521</b-td>
                                                <b-td><b-link href="#"><i
                                                            class="ri-download-2-line fs-xl lh-1 align-middle"></i></b-link>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-th scope="row">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3"
                                                            value="option1" checked>
                                                    </div>
                                                </b-th>
                                                <b-td>#744145235</b-td>
                                                <b-td>Shoppers</b-td>
                                                <b-td>Juston Eichmann</b-td>
                                                <b-td>$7,546</b-td>
                                                <b-td><b-link href="#"><i
                                                            class="ri-download-2-line fs-xl lh-1 align-middle"></i></b-link>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-th scope="row">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox4"
                                                            value="option1">
                                                    </div>
                                                </b-th>
                                                <b-td>#9855126598</b-td>
                                                <b-td>Flipkart</b-td>
                                                <b-td>Bettie Johson</b-td>
                                                <b-td>$1,350</b-td>
                                                <b-td><b-link href="#"><i
                                                            class="ri-download-2-line fs-xl lh-1 align-middle"></i></b-link>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-th scope="row">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox5"
                                                            value="option1">
                                                    </div>
                                                </b-th>
                                                <b-td>#847512653</b-td>
                                                <b-td>Shoppers</b-td>
                                                <b-td>Maritza Blanda</b-td>
                                                <b-td>$4,521</b-td>
                                                <b-td><b-link href="#"><i
                                                            class="ri-download-2-line fs-xl lh-1 align-middle"></i></b-link>
                                                </b-td>
                                            </b-tr>
                                        </b-tbody>
                                    </b-table-simple>
                            </b-col>


                            <b-col xl="6">
                                <div class="mt-4 mt-xl-0">
                                    <b-table-simple responsive hover striped class="align-middle table-nowrap mb-0">
                                        <b-thead>
                                            <b-tr>
                                                <b-th scope="col">ID</b-th>
                                                <b-th scope="col">Invoice</b-th>
                                                <b-th scope="col">Amount</b-th>
                                                <b-th scope="col">Date</b-th>
                                                <b-th scope="col">Status</b-th>
                                                <b-th scope="col">Action</b-th>
                                            </b-tr>
                                        </b-thead>
                                        <b-tbody>
                                            <b-tr>
                                                <b-td class="fw-medium">01</b-td>
                                                <b-td>Basic Plan</b-td>
                                                <b-td>$860</b-td>
                                                <b-td>Nov 22, 2021</b-td>
                                                <b-td><i class="ri-checkbox-circle-line align-middle text-success"></i>
                                                    Subscribed</b-td>
                                                <b-td>
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch"
                                                            id="SwitchCheck1" checked="">
                                                        <label class="form-check-label ms-2"
                                                            for="SwitchCheck1">Yes/No</label>
                                                    </div>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-td class="fw-medium">02</b-td>
                                                <b-td>Premium Plan</b-td>
                                                <b-td>$1200</b-td>
                                                <b-td>Nov 10, 2021</b-td>
                                                <b-td><i class="ri-close-circle-line align-middle text-danger"></i>
                                                    Unsubscribed</b-td>
                                                <b-td>
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch"
                                                            id="SwitchCheck2">
                                                        <label class="form-check-label ms-2"
                                                            for="SwitchCheck2">Yes/No</label>
                                                    </div>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-td class="fw-medium">03</b-td>
                                                <b-td>Basic Plan</b-td>
                                                <b-td>$860</b-td>
                                                <b-td>Nov 19, 2021</b-td>
                                                <b-td><i class="ri-checkbox-circle-line align-middle text-success"></i>
                                                    Subscribed</b-td>
                                                <b-td>
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch"
                                                            id="SwitchCheck3">
                                                        <label class="form-check-label ms-2"
                                                            for="SwitchCheck3">Yes/No</label>
                                                    </div>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-td class="fw-medium">04</b-td>
                                                <b-td>Corporate Plan</b-td>
                                                <b-td>$1599</b-td>
                                                <b-td>Nov 22, 2021</b-td>
                                                <b-td><i class="ri-checkbox-circle-line align-middle text-success"></i>
                                                    Subscribed</b-td>
                                                <b-td>
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch"
                                                            id="SwitchCheck4" checked="">
                                                        <label class="form-check-label ms-2"
                                                            for="SwitchCheck4">Yes/No</label>
                                                    </div>
                                                </b-td>
                                            </b-tr>
                                        </b-tbody>
                                    </b-table-simple>
                                </div>
                            </b-col>
                        </b-row>

                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;b-table-simple responsive hover class="align-middle table-nowrap mb-0"&gt;
    &lt;b-thead&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="col" style="width: 25px;"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" id="checkAll" value="option1"&gt;
                &lt;/div&gt;
            &lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Order ID&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Shop&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Customer&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Price&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Action&lt;/b-th&gt;
        &lt;/b-tr&gt;
    &lt;/b-thead&gt;
    &lt;b-tbody&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="row"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" checked&gt;
                &lt;/div&gt;
            &lt;/b-th&gt;
            &lt;b-td&gt;#541254265&lt;/b-td&gt;
            &lt;b-td&gt;Amezon&lt;/b-td&gt;
            &lt;b-td&gt;Cleo Carson&lt;/b-td&gt;
            &lt;b-td&gt;$4,521&lt;/b-td&gt;
            &lt;b-td&gt;&lt;b-link href="#"&gt;&lt;i class="ri-download-2-line fs-xl lh-1 align-middle"&gt;&lt;/i&gt;&lt;/b-link&gt;
            &lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="row"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option1" checked&gt;
                &lt;/div&gt;
            &lt;/b-th&gt;
            &lt;b-td&gt;#744145235&lt;/b-td&gt;
            &lt;b-td&gt;Shoppers&lt;/b-td&gt;
            &lt;b-td&gt;Juston Eichmann&lt;/b-td&gt;
            &lt;b-td&gt;$7,546&lt;/b-td&gt;
            &lt;b-td&gt;&lt;b-link href="#"&gt;&lt;i class="ri-download-2-line fs-xl lh-1 align-middle"&gt;&lt;/i&gt;&lt;/b-link&gt;
            &lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;</code>
<code>
    &lt;b-table-simple responsive hover striped class="align-middle table-nowrap mb-0"&gt;
    &lt;b-thead&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="col"&gt;ID&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Invoice&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Amount&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Date&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Status&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Action&lt;/b-th&gt;
        &lt;/b-tr&gt;
    &lt;/b-thead&gt;
    &lt;b-tbody&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;01&lt;/b-td&gt;
            &lt;b-td&gt;Basic Plan&lt;/b-td&gt;
            &lt;b-td&gt;$860&lt;/b-td&gt;
            &lt;b-td&gt;Nov 22, 2021&lt;/b-td&gt;
            &lt;b-td&gt;&lt;i class="ri-checkbox-circle-line align-middle text-success"&gt;&lt;/i&gt;
                Subscribed&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="form-check form-switch"&gt;
                    &lt;input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck1" checked&gt;
                    &lt;label class="form-check-label ms-2" for="SwitchCheck1"&gt;Yes/No&lt;/label&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;02&lt;/b-td&gt;
            &lt;b-td&gt;Premium Plan&lt;/b-td&gt;
            &lt;b-td&gt;$1200&lt;/b-td&gt;
            &lt;b-td&gt;Nov 10, 2021&lt;/b-td&gt;
            &lt;b-td&gt;&lt;i class="ri-close-circle-line align-middle text-danger"&gt;&lt;/i&gt;
                Unsubscribed&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="form-check form-switch"&gt;
                    &lt;input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck2"&gt;
                    &lt;label class="form-check-label ms-2" for="SwitchCheck2"&gt;Yes/No&lt;/label&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>


        <b-row>
            <b-col xl="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Card Tables</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted mb-4">Use <code>table-card</code> class to show card-based table within a
                            &lt;tbody&gt;.</p>
                        <div class="table-card">
                            <b-table-simple responsive class="align-middle table-nowrap mb-0">
                                <b-thead class="table-light">
                                    <b-tr>
                                        <b-th scope="col" style="width: 46px;">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="cardtableCheck">
                                                <label class="form-check-label" for="cardtableCheck"></label>
                                            </div>
                                        </b-th>
                                        <b-th scope="col">ID</b-th>
                                        <b-th scope="col">Name</b-th>
                                        <b-th scope="col">Date</b-th>
                                        <b-th scope="col">Total</b-th>
                                        <b-th scope="col">Status</b-th>
                                        <b-th scope="col" style="width: 150px;">Action</b-th>
                                    </b-tr>
                                </b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="cardtableCheck01">
                                                <label class="form-check-label" for="cardtableCheck01"></label>
                                            </div>
                                        </b-td>
                                        <b-td><b-link href="#" class="fw-medium">#VL2110</b-link></b-td>
                                        <b-td>William Elmore</b-td>
                                        <b-td>07 Oct, 2021</b-td>
                                        <b-td>$24.05</b-td>
                                        <b-td><span class="badge bg-success">Paid</span></b-td>
                                        <b-td>
                                            <b-button type="button" size="sm" variant="light">Details</b-button>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="cardtableCheck02">
                                                <label class="form-check-label" for="cardtableCheck02"></label>
                                            </div>
                                        </b-td>
                                        <b-td><b-link href="#" class="fw-medium">#VL2109</b-link></b-td>
                                        <b-td>Georgie Winters</b-td>
                                        <b-td>07 Oct, 2021</b-td>
                                        <b-td>$26.15</b-td>
                                        <b-td><span class="badge bg-success">Paid</span></b-td>
                                        <b-td>
                                            <b-button type="button" size="sm" variant="light">Details</b-button>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="cardtableCheck03">
                                                <label class="form-check-label" for="cardtableCheck03"></label>
                                            </div>
                                        </b-td>
                                        <b-td><b-link href="#" class="fw-medium">#VL2108</b-link></b-td>
                                        <b-td>Whitney Meier</b-td>
                                        <b-td>06 Oct, 2021</b-td>
                                        <b-td>$21.25</b-td>
                                        <b-td><span class="badge bg-danger">Refund</span></b-td>
                                        <b-td>
                                            <b-button type="button" size="sm" variant="light">Details</b-button>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="cardtableCheck04">
                                                <label class="form-check-label" for="cardtableCheck04"></label>
                                            </div>
                                        </b-td>
                                        <b-td><b-link href="#" class="fw-medium">#VL2107</b-link></b-td>
                                        <b-td>Justin Maier</b-td>
                                        <b-td>05 Oct, 2021</b-td>
                                        <b-td>$25.03</b-td>
                                        <b-td><span class="badge bg-success">Paid</span></b-td>
                                        <b-td>
                                            <b-button type="button" size="sm" variant="light">Details</b-button>
                                        </b-td>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25 mt-3">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;b-table-simple responsive class="align-middle table-nowrap mb-0"&gt;
    &lt;b-thead class="table-light"&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="col" style="width: 46px;"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" value="" id="cardtableCheck"&gt;
                    &lt;label class="form-check-label" for="cardtableCheck"&gt;&lt;/label&gt;
                &lt;/div&gt;
            &lt;/b-th&gt;
            &lt;b-th scope="col"&gt;ID&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Name&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Date&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Total&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Status&lt;/b-th&gt;
            &lt;b-th scope="col" style="width: 150px;"&gt;Action&lt;/b-th&gt;
        &lt;/b-tr&gt;
    &lt;/b-thead&gt;
    &lt;b-tbody&gt;
        &lt;b-tr&gt;
            &lt;b-td&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" value="" id="cardtableCheck01"&gt;
                    &lt;label class="form-check-label" for="cardtableCheck01"&gt;&lt;/label&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
            &lt;b-td&gt;&lt;b-link href="#" class="fw-medium"&gt;#VL2110&lt;/b-link&gt;&lt;/b-td&gt;
            &lt;b-td&gt;William Elmore&lt;/b-td&gt;
            &lt;b-td&gt;07 Oct, 2021&lt;/b-td&gt;
            &lt;b-td&gt;$24.05&lt;/b-td&gt;
            &lt;b-td&gt;&lt;span class="badge bg-success"&gt;Paid&lt;/span&gt;&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;b-button type="button" size="sm" variant="light"&gt;Details&lt;/b-button&gt;
            &lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Active Tables</b-card-title>
                    </b-card-header>

                    <b-card-body>
                            <b-table-simple responsive class="align-middle table-nowrap mb-0">
                                <b-thead>
                                    <b-tr>
                                        <b-th scope="col" style="width: 42px;">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="activetableCheck">
                                                <label class="form-check-label" for="activetableCheck"></label>
                                            </div>
                                        </b-th>
                                        <b-th scope="col">Order ID</b-th>
                                        <b-th scope="col">Shop</b-th>
                                        <b-th scope="col">Customer</b-th>
                                        <b-th scope="col">Price</b-th>
                                        <b-th scope="col">Action</b-th>
                                    </b-tr>
                                </b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-th scope="row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="activetableCheck01" checked>
                                                <label class="form-check-label" for="activetableCheck01"></label>
                                            </div>
                                        </b-th>
                                        <b-td>#541254265</b-td>
                                        <b-td>Amezon</b-td>
                                        <b-td>Cleo Carson</b-td>
                                        <b-td>$4,521</b-td>
                                        <b-td><b-link href="#"><i
                                                    class="ri-download-2-line fs-xl lh-1 align-middle"></i></b-link></b-td>
                                    </b-tr>
                                    <b-tr class="table-active">
                                        <b-th scope="row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="activetableCheck02" checked>
                                                <label class="form-check-label" for="activetableCheck02"></label>
                                            </div>
                                        </b-th>
                                        <b-td>#744145235</b-td>
                                        <b-td>Shoppers</b-td>
                                        <b-td>Juston Eichmann</b-td>
                                        <b-td>$7,546</b-td>
                                        <b-td><b-link href="#"><i
                                                    class="ri-download-2-line fs-xl lh-1 align-middle"></i></b-link></b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-th scope="row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="activetableCheck03">
                                                <label class="form-check-label" for="activetableCheck03"></label>
                                            </div>
                                        </b-th>
                                        <b-td>#9855126598</b-td>
                                        <b-td>Flipkart</b-td>
                                        <b-td>Bettie Johson</b-td>
                                        <b-td>$1,350</b-td>
                                        <b-td><b-link href="#"><i
                                                    class="ri-download-2-line fs-xl lh-1 align-middle"></i></b-link></b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-th scope="row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="activetableCheck04">
                                                <label class="form-check-label" for="activetableCheck04"></label>
                                            </div>
                                        </b-th>
                                        <b-td>#847512653</b-td>
                                        <b-td>Shoppers</b-td>
                                        <b-td class="table-active">Maritza Blanda</b-td>
                                        <b-td>$4,521</b-td>
                                        <b-td><b-link href="#"><i
                                                    class="ri-download-2-line fs-xl lh-1 align-middle"></i></b-link></b-td>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;b-table-simple responsive class="align-middle table-nowrap mb-0"&gt;
    &lt;b-thead&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="col" style="width: 42px;"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" value="" id="activetableCheck"&gt;
                    &lt;label class="form-check-label" for="activetableCheck"&gt;&lt;/label&gt;
                &lt;/div&gt;
            &lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Order ID&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Shop&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Customer&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Price&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Action&lt;/b-th&gt;
        &lt;/b-tr&gt;
    &lt;/b-thead&gt;
    &lt;b-tbody&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="row"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" value="" id="activetableCheck01" checked&gt;
                    &lt;label class="form-check-label" for="activetableCheck01"&gt;&lt;/label&gt;
                &lt;/div&gt;
            &lt;/b-th&gt;
            &lt;b-td&gt;#541254265&lt;/b-td&gt;
            &lt;b-td&gt;Amezon&lt;/b-td&gt;
            &lt;b-td&gt;Cleo Carson&lt;/b-td&gt;
            &lt;b-td&gt;$4,521&lt;/b-td&gt;
            &lt;b-td&gt;&lt;b-link href="#"&gt;&lt;i class="ri-download-2-line fs-xl lh-1 align-middle"&gt;&lt;/i&gt;&lt;/b-link&gt;&lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>


            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Bordered Tables</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>bordered</code> attribute to show borders on all sides of the
                            table and cells.</p>
                            <b-table-simple bordered responsive class="align-middle table-nowrap mb-0">
                                <b-thead>
                                    <b-tr>
                                        <b-th scope="col">ID</b-th>
                                        <b-th scope="col">Title</b-th>
                                        <b-th scope="col">Status</b-th>
                                        <b-th scope="col">Assignee</b-th>
                                        <b-th scope="col">Price</b-th>
                                        <b-th scope="col"></b-th>
                                    </b-tr>
                                </b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td class="fw-medium">01</b-td>
                                        <b-td>Implement new UX</b-td>
                                        <b-td><span class="badge bg-primary-subtle text-primary">Backlog</span></b-td>
                                        <b-td>Lanora Sandoval</b-td>
                                        <b-td>$4,521</b-td>
                                        <b-td>
                                            <div class="dropdown">
                                                <b-link href="#" role="button" id="dropdownMenuLink1"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ri-more-2-fill"></i>
                                                </b-link>

                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                                    <li><b-link class="dropdown-item" href="#">View</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#">Edit</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#">Delete</b-link></li>
                                                </ul>
                                            </div>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">02</b-td>
                                        <b-td>Design syntax</b-td>
                                        <b-td><span class="badge bg-secondary-subtle text-secondary">In
                                                Progress</span></b-td>
                                        <b-td>Calvin Garrett</b-td>
                                        <b-td>$7,546</b-td>
                                        <b-td>
                                            <div class="dropdown">
                                                <b-link href="#" role="button" id="dropdownMenuLink2"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ri-more-2-fill"></i>
                                                </b-link>

                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                                                    <li><b-link class="dropdown-item" href="#">View</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#">Edit</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#">Delete</b-link></li>
                                                </ul>
                                            </div>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">03</b-td>
                                        <b-td>Configurable resources</b-td>
                                        <b-td><span class="badge bg-success-subtle text-success">Done</span></b-td>
                                        <b-td>Florence Guzman</b-td>
                                        <b-td>$1,350</b-td>
                                        <b-td>
                                            <div class="dropdown">
                                                <b-link href="#" role="button" id="dropdownMenuLink3"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ri-more-2-fill"></i>
                                                </b-link>

                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink3">
                                                    <li><b-link class="dropdown-item" href="#">View</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#">Edit</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#">Delete</b-link></li>
                                                </ul>
                                            </div>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">04</b-td>
                                        <b-td>Implement extensions</b-td>
                                        <b-td><span class="badge bg-secondary-subtle text-secondary">In
                                                Progress</span></b-td>
                                        <b-td>Maritza Blanda</b-td>
                                        <b-td>$4,521</b-td>
                                        <b-td>
                                            <div class="dropdown">
                                                <b-link href="#" role="button" id="dropdownMenuLink4"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ri-more-2-fill"></i>
                                                </b-link>

                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink4">
                                                    <li><b-link class="dropdown-item" href="#">View</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#">Edit</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#">Delete</b-link></li>
                                                </ul>
                                            </div>
                                        </b-td>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;b-table-simple bordered responsive class="align-middle table-nowrap mb-0"&gt;
    &lt;b-thead&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="col"&gt;ID&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Title&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Status&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Assignee&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Price&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;&lt;/b-th&gt;
        &lt;/b-tr&gt;
    &lt;/b-thead&gt;
    &lt;b-tbody&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;01&lt;/b-td&gt;
            &lt;b-td&gt;Implement new UX&lt;/b-td&gt;
            &lt;b-td&gt;&lt;span class="badge bg-primary-subtle text-primary"&gt;Backlog&lt;/span&gt;&lt;/b-td&gt;
            &lt;b-td&gt;Lanora Sandoval&lt;/b-td&gt;
            &lt;b-td&gt;$4,521&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="dropdown"&gt;
                    &lt;b-link href="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false"&gt;
                        &lt;i class="ri-more-2-fill"&gt;&lt;/i&gt;
                    &lt;/b-link&gt;

                    &lt;ul class="dropdown-menu" aria-labelledby="dropdownMenuLink1"&gt;
                        &lt;li&gt;&lt;b-link class="dropdown-item" href="#"&gt;View&lt;/b-link&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;b-link class="dropdown-item" href="#"&gt;Edit&lt;/b-link&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;b-link class="dropdown-item" href="#"&gt;Delete&lt;/b-link&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;04&lt;/b-td&gt;
            &lt;b-td&gt;Implement extensions&lt;/b-td&gt;
            &lt;b-td&gt;&lt;span class="badge bg-secondary-subtle text-secondary"&gt;In Progress&lt;/span&gt;&lt;/b-td&gt;
            &lt;b-td&gt;Maritza Blanda&lt;/b-td&gt;
            &lt;b-td&gt;$4,521&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="dropdown"&gt;
                    &lt;b-link href="#" role="button" id="dropdownMenuLink4" data-bs-toggle="dropdown" aria-expanded="false"&gt;
                        &lt;i class="ri-more-2-fill"&gt;&lt;/i&gt;
                    &lt;/b-link&gt;

                    &lt;ul class="dropdown-menu" aria-labelledby="dropdownMenuLink4"&gt;
                        &lt;li&gt;&lt;b-link class="dropdown-item" href="#"&gt;View&lt;/b-link&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;b-link class="dropdown-item" href="#"&gt;Edit&lt;/b-link&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;b-link class="dropdown-item" href="#"&gt;Delete&lt;/b-link&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>


        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Tables Border Colors</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>border-</code> class with color variation class to set table border
                            color.</p>
                            <b-table-simple responsive bordered class="border-secondary table-nowrap align-middle mb-0">
                                <b-thead>
                                    <b-tr>
                                        <b-th scope="col">ID</b-th>
                                        <b-th scope="col">Title</b-th>
                                        <b-th scope="col">Status</b-th>
                                        <b-th scope="col">Assignee</b-th>
                                        <b-th scope="col">Price</b-th>
                                        <b-th scope="col"></b-th>
                                    </b-tr>
                                </b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td class="fw-medium">01</b-td>
                                        <b-td>Implement new UX</b-td>
                                        <b-td><span class="badge bg-primary-subtle text-primary">Backlog</span></b-td>
                                        <b-td>Lanora Sandoval</b-td>
                                        <b-td>$4,521</b-td>
                                        <b-td>
                                            <div class="dropdown">
                                                <b-link href="#" role="button" id="dropdownMenuLink5"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ri-more-2-fill"></i>
                                                </b-link>

                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink5">
                                                    <li><b-link class="dropdown-item" href="#">View</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#">Edit</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#">Delete</b-link></li>
                                                </ul>
                                            </div>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">02</b-td>
                                        <b-td>Design syntax</b-td>
                                        <b-td><span class="badge bg-secondary-subtle text-secondary">In
                                                Progress</span></b-td>
                                        <b-td>Calvin Garrett</b-td>
                                        <b-td>$7,546</b-td>
                                        <b-td>
                                            <div class="dropdown">
                                                <b-link href="#" role="button" id="dropdownMenuLink6"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ri-more-2-fill"></i>
                                                </b-link>

                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink6">
                                                    <li><b-link class="dropdown-item" href="#">View</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#">Edit</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#">Delete</b-link></li>
                                                </ul>
                                            </div>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">03</b-td>
                                        <b-td>Configurable resources</b-td>
                                        <b-td><span class="badge bg-success-subtle text-success">Done</span></b-td>
                                        <b-td>Florence Guzman</b-td>
                                        <b-td>$1,350</b-td>
                                        <b-td>
                                            <div class="dropdown">
                                                <b-link href="#" role="button" id="dropdownMenuLink7"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ri-more-2-fill"></i>
                                                </b-link>

                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink7">
                                                    <li><b-link class="dropdown-item" href="#">View</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#">Edit</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#">Delete</b-link></li>
                                                </ul>
                                            </div>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">04</b-td>
                                        <b-td>Implement extensions</b-td>
                                        <b-td><span class="badge bg-secondary-subtle text-secondary">In
                                                Progress</span></b-td>
                                        <b-td>Maritza Blanda</b-td>
                                        <b-td>$4,521</b-td>
                                        <b-td>
                                            <div class="dropdown">
                                                <b-link href="#" role="button" id="dropdownMenuLink8"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ri-more-2-fill"></i>
                                                </b-link>

                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink8">
                                                    <li><b-link class="dropdown-item" href="#">View</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#">Edit</b-link></li>
                                                    <li><b-link class="dropdown-item" href="#">Delete</b-link></li>
                                                </ul>
                                            </div>
                                        </b-td>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;b-table-simple responsive bordered class="border-secondary table-nowrap align-middle mb-0"&gt;
    &lt;b-thead&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="col"&gt;ID&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Title&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Status&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Assignee&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Price&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;&lt;/b-th&gt;
        &lt;/b-tr&gt;
    &lt;/b-thead&gt;
    &lt;b-tbody&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;01&lt;/b-td&gt;
            &lt;b-td&gt;Implement new UX&lt;/b-td&gt;
            &lt;b-td&gt;&lt;span class="badge bg-primary-subtle text-primary"&gt;Backlog&lt;/span&gt;&lt;/b-td&gt;
            &lt;b-td&gt;Lanora Sandoval&lt;/b-td&gt;
            &lt;b-td&gt;$4,521&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="dropdown"&gt;
                    &lt;b-link href="#" role="button" id="dropdownMenuLink5" data-bs-toggle="dropdown" aria-expanded="false"&gt;
                        &lt;i class="ri-more-2-fill"&gt;&lt;/i&gt;
                    &lt;/b-link&gt;

                    &lt;ul class="dropdown-menu" aria-labelledby="dropdownMenuLink5"&gt;
                        &lt;li&gt;&lt;b-link class="dropdown-item" href="#"&gt;View&lt;/b-link&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;b-link class="dropdown-item" href="#"&gt;Edit&lt;/b-link&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;b-link class="dropdown-item" href="#"&gt;Delete&lt;/b-link&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;02&lt;/b-td&gt;
            &lt;b-td&gt;Design syntax&lt;/b-td&gt;
            &lt;b-td&gt;&lt;span class="badge bg-secondary-subtle text-secondary"&gt;In Progress&lt;/span&gt;&lt;/b-td&gt;
            &lt;b-td&gt;Calvin Garrett&lt;/b-td&gt;
            &lt;b-td&gt;$7,546&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="dropdown"&gt;
                    &lt;b-link href="#" role="button" id="dropdownMenuLink6" data-bs-toggle="dropdown" aria-expanded="false"&gt;
                        &lt;i class="ri-more-2-fill"&gt;&lt;/i&gt;
                    &lt;/b-link&gt;

                    &lt;ul class="dropdown-menu" aria-labelledby="dropdownMenuLink6"&gt;
                        &lt;li&gt;&lt;b-link class="dropdown-item" href="#"&gt;View&lt;/b-link&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;b-link class="dropdown-item" href="#"&gt;Edit&lt;/b-link&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;b-link class="dropdown-item" href="#"&gt;Delete&lt;/b-link&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;03&lt;/b-td&gt;
            &lt;b-td&gt;Configurable resources&lt;/b-td&gt;
            &lt;b-td&gt;&lt;span class="badge bg-success-subtle text-success"&gt;Done&lt;/span&gt;&lt;/b-td&gt;
            &lt;b-td&gt;Florence Guzman&lt;/b-td&gt;
            &lt;b-td&gt;$1,350&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="dropdown"&gt;
                    &lt;b-link href="#" role="button" id="dropdownMenuLink7" data-bs-toggle="dropdown" aria-expanded="false"&gt;
                        &lt;i class="ri-more-2-fill"&gt;&lt;/i&gt;
                    &lt;/b-link&gt;

                    &lt;ul class="dropdown-menu" aria-labelledby="dropdownMenuLink7"&gt;
                        &lt;li&gt;&lt;b-link class="dropdown-item" href="#"&gt;View&lt;/b-link&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;b-link class="dropdown-item" href="#"&gt;Edit&lt;/b-link&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;b-link class="dropdown-item" href="#"&gt;Delete&lt;/b-link&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;04&lt;/b-td&gt;
            &lt;b-td&gt;Implement extensions&lt;/b-td&gt;
            &lt;b-td&gt;&lt;span class="badge bg-secondary-subtle text-secondary"&gt;In Progress&lt;/span&gt;&lt;/b-td&gt;
            &lt;b-td&gt;Maritza Blanda&lt;/b-td&gt;
            &lt;b-td&gt;$4,521&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="dropdown"&gt;
                    &lt;b-link href="#" role="button" id="dropdownMenuLink8" data-bs-toggle="dropdown" aria-expanded="false"&gt;
                        &lt;i class="ri-more-2-fill"&gt;&lt;/i&gt;
                    &lt;/b-link&gt;

                    &lt;ul class="dropdown-menu" aria-labelledby="dropdownMenuLink8"&gt;
                        &lt;li&gt;&lt;b-link class="dropdown-item" href="#"&gt;View&lt;/b-link&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;b-link class="dropdown-item" href="#"&gt;Edit&lt;/b-link&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;b-link class="dropdown-item" href="#"&gt;Delete&lt;/b-link&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0 flex-grow-1">Tables Without Borders</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>borderless</code> attribute to set a table without borders.</p>
                            <b-table-simple borderless responsive class="align-middle table-nowrap mb-0">
                                <b-thead>
                                    <b-tr>
                                        <b-th scope="col">ID</b-th>
                                        <b-th scope="col">Name</b-th>
                                        <b-th scope="col">Job Title</b-th>
                                        <b-th scope="col">Date</b-th>
                                        <b-th scope="col">Status</b-th>
                                        <b-th scope="col"></b-th>
                                    </b-tr>
                                </b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td class="fw-medium">01</b-td>
                                        <b-td>Annette Black</b-td>
                                        <b-td>Industrial Designer</b-td>
                                        <b-td>10, Nov 2021</b-td>
                                        <b-td><span class="badge bg-success-subtle text-success">Active</span></b-td>
                                        <b-td>
                                            <div class="hstack gap-3 fs-base">
                                                <b-link href="#" class="link-primary"><i
                                                        class="ri-settings-4-line"></i></b-link>
                                                <b-link href="#" class="link-danger"><i
                                                        class="ri-delete-bin-5-line"></i></b-link>
                                            </div>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">02</b-td>
                                        <b-td>Bessie Cooper</b-td>
                                        <b-td>Graphic Designer</b-td>
                                        <b-td>13, Nov 2021</b-td>
                                        <b-td><span class="badge bg-success-subtle text-success">Active</span></b-td>
                                        <b-td>
                                            <div class="hstack gap-3 fs-base">
                                                <b-link href="#" class="link-primary"><i
                                                        class="ri-settings-4-line"></i></b-link>
                                                <b-link href="#" class="link-danger"><i
                                                        class="ri-delete-bin-5-line"></i></b-link>
                                            </div>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">03</b-td>
                                        <b-td>Leslie Alexander</b-td>
                                        <b-td>Product Manager</b-td>
                                        <b-td>17, Nov 2021</b-td>
                                        <b-td><span class="badge bg-success-subtle text-success">Active</span></b-td>
                                        <b-td>
                                            <div class="hstack gap-3 fs-base">
                                                <b-link href="#" class="link-primary"><i
                                                        class="ri-settings-4-line"></i></b-link>
                                                <b-link href="#" class="link-danger"><i
                                                        class="ri-delete-bin-5-line"></i></b-link>
                                            </div>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">04</b-td>
                                        <b-td>Lenora Sandoval</b-td>
                                        <b-td>Applications Engineer</b-td>
                                        <b-td>25, Nov 2021</b-td>
                                        <b-td><span class="badge bg-danger-subtle text-danger">Disabled</span></b-td>
                                        <b-td>
                                            <div class="hstack gap-3 fs-base">
                                                <b-link href="#" class="link-primary"><i
                                                        class="ri-settings-4-line"></i></b-link>
                                                <b-link href="#" class="link-danger"><i
                                                        class="ri-delete-bin-5-line"></i></b-link>
                                            </div>
                                        </b-td>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;b-table-simple borderless responsive class="align-middle table-nowrap mb-0"&gt;
    &lt;b-thead&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="col"&gt;ID&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Name&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Job Title&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Date&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Status&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;&lt;/b-th&gt;
        &lt;/b-tr&gt;
    &lt;/b-thead&gt;
    &lt;b-tbody&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;01&lt;/b-td&gt;
            &lt;b-td&gt;Annette Black&lt;/b-td&gt;
            &lt;b-td&gt;Industrial Designer&lt;/b-td&gt;
            &lt;b-td&gt;10, Nov 2021&lt;/b-td&gt;
            &lt;b-td&gt;&lt;span class="badge bg-success-subtle text-success"&gt;Active&lt;/span&gt;&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="hstack gap-3 fs-base"&gt;
                    &lt;b-link href="#" class="link-primary"&gt;&lt;i class="ri-settings-4-line"&gt;&lt;/i&gt;&lt;/b-link&gt;
                    &lt;b-link href="#" class="link-danger"&gt;&lt;i class="ri-delete-bin-5-line"&gt;&lt;/i&gt;&lt;/b-link&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;02&lt;/b-td&gt;
            &lt;b-td&gt;Bessie Cooper&lt;/b-td&gt;
            &lt;b-td&gt;Graphic Designer&lt;/b-td&gt;
            &lt;b-td&gt;13, Nov 2021&lt;/b-td&gt;
            &lt;b-td&gt;&lt;span class="badge bg-success-subtle text-success"&gt;Active&lt;/span&gt;&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="hstack gap-3 fs-base"&gt;
                    &lt;b-link href="#" class="link-primary"&gt;&lt;i class="ri-settings-4-line"&gt;&lt;/i&gt;&lt;/b-link&gt;
                    &lt;b-link href="#" class="link-danger"&gt;&lt;i class="ri-delete-bin-5-line"&gt;&lt;/i&gt;&lt;/b-link&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;03&lt;/b-td&gt;
            &lt;b-td&gt;Leslie Alexander&lt;/b-td&gt;
            &lt;b-td&gt;Product Manager&lt;/b-td&gt;
            &lt;b-td&gt;17, Nov 2021&lt;/b-td&gt;
            &lt;b-td&gt;&lt;span class="badge bg-success-subtle text-success"&gt;Active&lt;/span&gt;&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="hstack gap-3 fs-base"&gt;
                    &lt;b-link href="#" class="link-primary"&gt;&lt;i class="ri-settings-4-line"&gt;&lt;/i&gt;&lt;/b-link&gt;
                    &lt;b-link href="#" class="link-danger"&gt;&lt;i class="ri-delete-bin-5-line"&gt;&lt;/i&gt;&lt;/b-link&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;04&lt;/b-td&gt;
            &lt;b-td&gt;Lenora Sandoval&lt;/b-td&gt;
            &lt;b-td&gt;Applications Engineer&lt;/b-td&gt;
            &lt;b-td&gt;25, Nov 2021&lt;/b-td&gt;
            &lt;b-td&gt;&lt;span class="badge bg-danger-subtle text-danger"&gt;Disabled&lt;/span&gt;&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="hstack gap-3 fs-base"&gt;
                    &lt;b-link href="#" class="link-primary"&gt;&lt;i class="ri-settings-4-line"&gt;&lt;/i&gt;&lt;/b-link&gt;
                    &lt;b-link href="#" class="link-danger"&gt;&lt;i class="ri-delete-bin-5-line"&gt;&lt;/i&gt;&lt;/b-link&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>


        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Small Tables</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>small</code> attribute to create any table more compact by cutting
                            all cell padding in half.</p>
                            <b-table-simple responsive small class="table-nowrap mb-0">
                                <b-thead>
                                    <b-tr>
                                        <b-th scope="col">ID</b-th>
                                        <b-th scope="col">Title</b-th>
                                        <b-th scope="col">Status</b-th>
                                        <b-th scope="col">Assignee</b-th>
                                    </b-tr>
                                </b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td class="fw-medium">01</b-td>
                                        <b-td>Implement new UX</b-td>
                                        <b-td><span class="badge bg-primary-subtle text-primary">Backlog</span></b-td>
                                        <b-td>Lanora Sandoval</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">02</b-td>
                                        <b-td>Design syntax</b-td>
                                        <b-td><span class="badge bg-secondary-subtle text-secondary">In
                                                Progress</span></b-td>
                                        <b-td>Calvin Garrett</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">03</b-td>
                                        <b-td>Configurable resources</b-td>
                                        <b-td><span class="badge bg-success-subtle text-success">Done</span></b-td>
                                        <b-td>Florence Guzman</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">04</b-td>
                                        <b-td>Implement extensions</b-td>
                                        <b-td><span class="badge bg-dark-subtle text-dark">Backlog</span></b-td>
                                        <b-td>Maritza Blanda</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">05</b-td>
                                        <b-td>Applications Engineer</b-td>
                                        <b-td>
                                            <span class="badge bg-success-subtle text-success">Done</span>
                                        </b-td>
                                        <b-td>Leslie Alexander</b-td>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;b-table-simple responsive small class="table-nowrap mb-0"&gt;
    &lt;b-thead&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="col"&gt;ID&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Title&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Status&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Assignee&lt;/b-th&gt;
        &lt;/b-tr&gt;
    &lt;/b-thead&gt;
    &lt;b-tbody&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;01&lt;/b-td&gt;
            &lt;b-td&gt;Implement new UX&lt;/b-td&gt;
            &lt;b-td&gt;&lt;span class="badge bg-primary-subtle text-primary"&gt;Backlog&lt;/span&gt;&lt;/b-td&gt;
            &lt;b-td&gt;Lanora Sandoval&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;02&lt;/b-td&gt;
            &lt;b-td&gt;Design syntax&lt;/b-td&gt;
            &lt;b-td&gt;&lt;span class="badge bg-secondary-subtle text-secondary"&gt;In Progress&lt;/span&gt;&lt;/b-td&gt;
            &lt;b-td&gt;Calvin Garrett&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;03&lt;/b-td&gt;
            &lt;b-td&gt;Configurable resources&lt;/b-td&gt;
            &lt;b-td&gt;&lt;span class="badge bg-success-subtle text-success"&gt;Done&lt;/span&gt;&lt;/b-td&gt;
            &lt;b-td&gt;Florence Guzman&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;04&lt;/b-td&gt;
            &lt;b-td&gt;Implement extensions&lt;/b-td&gt;
            &lt;b-td&gt;&lt;span class="badge bg-dark-subtle text-dark"&gt;Backlog&lt;/span&gt;&lt;/b-td&gt;
            &lt;b-td&gt;Maritza Blanda&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;05&lt;/b-td&gt;
            &lt;b-td&gt;Applications Engineer&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;span class="badge bg-success-subtle text-success"&gt;Done&lt;/span&gt;
            &lt;/b-td&gt;
            &lt;b-td&gt;Leslie Alexander&lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>


            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Table Head</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>table-light</code> or <code>table-dark</code> class to create
                            &lt;b-thead&gt; appear light or dark.</p>
                            <b-table-simple responsive class="align-middle table-nowrap mb-0">
                                <b-thead class="table-light">
                                    <b-tr>
                                        <b-th scope="col">Student</b-th>
                                        <b-th scope="col">Course</b-th>
                                        <b-th scope="col">Author</b-th>
                                        <b-th scope="col">Payment</b-th>
                                        <b-th scope="col">Process</b-th>
                                        <b-th scope="col">Status</b-th>
                                    </b-tr>
                                </b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td>Milana Scot</b-td>
                                        <b-td>UI/UX design</b-td>
                                        <b-td>Mitchell Flores</b-td>
                                        <b-td>$450</b-td>
                                        <b-td>
                                            <div class="progress progress-sm">
                                                <div class="progress-bar bg-success" role="progressbar" style="width: 100%"
                                                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </b-td>
                                        <b-td><b-link to="#" class="link-success">Confirmed</b-link></b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td>Jassica Welsh</b-td>
                                        <b-td>3d Animation</b-td>
                                        <b-td>Dan Evgeni</b-td>
                                        <b-td>$860</b-td>
                                        <b-td>
                                            <div class="progress progress-sm">
                                                <div class="progress-bar bg-warning" role="progressbar" style="width: 65%"
                                                    aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </b-td>
                                        <b-td><b-link to="#" class="link-warning">Waiting</b-link></b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td>Leslie Alexander</b-td>
                                        <b-td>Logotype Design</b-td>
                                        <b-td>Olimpia Jordan</b-td>
                                        <b-td>$450</b-td>
                                        <b-td>
                                            <div class="progress progress-sm">
                                                <div class="progress-bar bg-warning" role="progressbar" style="width: 35%"
                                                    aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </b-td>
                                        <b-td><b-link to="#" class="link-warning">Waiting</b-link></b-td>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;b-table-simple responsive class="align-middle table-nowrap mb-0"&gt;
    &lt;b-thead class="table-light"&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="col"&gt;Student&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Course&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Author&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Payment&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Process&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Status&lt;/b-th&gt;
        &lt;/b-tr&gt;
    &lt;/b-thead&gt;
    &lt;b-tbody&gt;
        &lt;b-tr&gt;
            &lt;b-td&gt;Milana Scot&lt;/b-td&gt;
            &lt;b-td&gt;UI/UX design&lt;/b-td&gt;
            &lt;b-td&gt;Mitchell Flores&lt;/b-td&gt;
            &lt;b-td&gt;$450&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="progress progress-sm"&gt;
                    &lt;div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100"
                        aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
            &lt;b-td&gt;&lt;b-link to="#" class="link-success"&gt;Confirmed&lt;/b-link&gt;&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td&gt;Jassica Welsh&lt;/b-td&gt;
            &lt;b-td&gt;3d Animation&lt;/b-td&gt;
            &lt;b-td&gt;Dan Evgeni&lt;/b-td&gt;
            &lt;b-td&gt;$860&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="progress progress-sm"&gt;
                    &lt;div class="progress-bar bg-warning" role="progressbar" style="width: 65%" aria-valuenow="65"
                        aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
            &lt;b-td&gt;&lt;b-link to="#" class="link-warning"&gt;Waiting&lt;/b-link&gt;&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td&gt;Leslie Alexander&lt;/b-td&gt;
            &lt;b-td&gt;Logotype Design&lt;/b-td&gt;
            &lt;b-td&gt;Olimpia Jordan&lt;/b-td&gt;
            &lt;b-td&gt;$450&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="progress progress-sm"&gt;
                    &lt;div class="progress-bar bg-warning" role="progressbar" style="width: 35%" aria-valuenow="35"
                        aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
            &lt;b-td&gt;&lt;b-link to="#" class="link-warning"&gt;Waiting&lt;/b-link&gt;&lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>


        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Table Foot</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Add <code>&lt;b-tbody&gt;</code> attribute to group footer content in an HTML
                            table.</p>
                            <b-table-simple responsive class="table table-nowrap mb-0">
                                <b-thead class="table-light">
                                    <b-tr>
                                        <b-th scope="col">ID</b-th>
                                        <b-th scope="col">Name</b-th>
                                        <b-th scope="col">Job Title</b-th>
                                        <b-th scope="col">Date</b-th>
                                        <b-th scope="col">Payment</b-th>
                                    </b-tr>
                                </b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td class="fw-medium">01</b-td>
                                        <b-td>Annette Black</b-td>
                                        <b-td>Industrial Designer</b-td>
                                        <b-td>10, Nov 2021</b-td>
                                        <b-td>$450</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">02</b-td>
                                        <b-td>Bessie Cooper</b-td>
                                        <b-td>Graphic Designer</b-td>
                                        <b-td>13, Nov 2021</b-td>
                                        <b-td>$875</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">03</b-td>
                                        <b-td>Leslie Alexander</b-td>
                                        <b-td>Product Manager</b-td>
                                        <b-td>17, Nov 2021</b-td>
                                        <b-td>$410</b-td>
                                    </b-tr>
                                </b-tbody>
                                <b-tfoot class="table-light">
                                    <b-tr>
                                        <b-td colspan="4">Total</b-td>
                                        <b-td>$940</b-td>
                                    </b-tr>
                                </b-tfoot>
                            </b-table-simple>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;b-table-simple responsive class="table table-nowrap mb-0"&gt;
    &lt;b-thead class="table-light"&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="col"&gt;ID&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Name&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Job Title&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Date&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Payment&lt;/b-th&gt;
        &lt;/b-tr&gt;
    &lt;/b-thead&gt;
    &lt;b-tbody&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;01&lt;/b-td&gt;
            &lt;b-td&gt;Annette Black&lt;/b-td&gt;
            &lt;b-td&gt;Industrial Designer&lt;/b-td&gt;
            &lt;b-td&gt;10, Nov 2021&lt;/b-td&gt;
            &lt;b-td&gt;$450&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;02&lt;/b-td&gt;
            &lt;b-td&gt;Bessie Cooper&lt;/b-td&gt;
            &lt;b-td&gt;Graphic Designer&lt;/b-td&gt;
            &lt;b-td&gt;13, Nov 2021&lt;/b-td&gt;
            &lt;b-td&gt;$875&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;03&lt;/b-td&gt;
            &lt;b-td&gt;Leslie Alexander&lt;/b-td&gt;
            &lt;b-td&gt;Product Manager&lt;/b-td&gt;
            &lt;b-td&gt;17, Nov 2021&lt;/b-td&gt;
            &lt;b-td&gt;$410&lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tbody&gt;
    &lt;b-tfoot class="table-light"&gt;
        &lt;b-tr&gt;
            &lt;b-td colspan="4"&gt;Total&lt;/b-td&gt;
            &lt;b-td&gt;$940&lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tfoot&gt;
&lt;/b-table-simple&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Captions</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">You can also put the <code>&lt;caption&gt;</code> attribute on the top of the
                            table with <code>caption-top</code> class.</p>
                            <b-table-simple responsive class="caption-top table-nowrap mb-0">
                                <caption>List of users</caption>
                                <b-thead class="table-light">
                                    <b-tr>
                                        <b-th scope="col">ID</b-th>
                                        <b-th scope="col">Student</b-th>
                                        <b-th scope="col">Course</b-th>
                                        <b-th scope="col">Author</b-th>
                                    </b-tr>
                                </b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td class="fw-medium">01</b-td>
                                        <b-td>Milana Scot</b-td>
                                        <b-td>UI/UX design</b-td>
                                        <b-td>Mitchell Flores</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">02</b-td>
                                        <b-td>Jassica Welsh</b-td>
                                        <b-td>3d Animation</b-td>
                                        <b-td>Dan Evgeni</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">03</b-td>
                                        <b-td>Leslie Alexander</b-td>
                                        <b-td>Logotype Design</b-td>
                                        <b-td>Olimpia Jordan</b-td>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;b-table-simple responsive class="caption-top table-nowrap mb-0"&gt;
    &lt;caption&gt;List of users&lt;/caption&gt;
    &lt;b-thead class="table-light"&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="col"&gt;ID&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Student&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Course&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Author&lt;/b-th&gt;
        &lt;/b-tr&gt;
    &lt;/b-thead&gt;
    &lt;b-tbody&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;01&lt;/b-td&gt;
            &lt;b-td&gt;Milana Scot&lt;/b-td&gt;
            &lt;b-td&gt;UI/UX design&lt;/b-td&gt;
            &lt;b-td&gt;Mitchell Flores&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;02&lt;/b-td&gt;
            &lt;b-td&gt;Jassica Welsh&lt;/b-td&gt;
            &lt;b-td&gt;3d Animation&lt;/b-td&gt;
            &lt;b-td&gt;Dan Evgeni&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;03&lt;/b-td&gt;
            &lt;b-td&gt;Leslie Alexander&lt;/b-td&gt;
            &lt;b-td&gt;Logotype Design&lt;/b-td&gt;
            &lt;b-td&gt;Olimpia Jordan&lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;</code>
                        </pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>


        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Table Nesting</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Example of basic table nesting. Border styles, active styles, and table
                            variants are not inherited by nested tables.</p>

                            <b-table-simple responsive class="table-nowrap mb-0">
                                <b-thead class="table-light">
                                    <b-tr>
                                        <b-th scope="col">ID</b-th>
                                        <b-th scope="col">Name</b-th>
                                        <b-th scope="col">Job Title</b-th>
                                        <b-th scope="col">Date</b-th>
                                        <b-th scope="col">Payment</b-th>
                                    </b-tr>
                                </b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td class="fw-medium">01</b-td>
                                        <b-td>Annette Black</b-td>
                                        <b-td>Industrial Designer</b-td>
                                        <b-td>10, Nov 2021</b-td>
                                        <b-td>$450</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td colspan="5">
                                            <b-table-simple class="table table-nowrap mb-0">
                                                <b-thead class="table-light">
                                                    <b-tr>
                                                        <b-th scope="col">ID</b-th>
                                                        <b-th scope="col">Student</b-th>
                                                        <b-th scope="col">Course</b-th>
                                                        <b-th scope="col">Author</b-th>
                                                    </b-tr>
                                                </b-thead>
                                                <b-tbody>
                                                    <b-tr>
                                                        <b-td class="fw-medium">I</b-td>
                                                        <b-td>Milana Scot</b-td>
                                                        <b-td>3d Animation</b-td>
                                                        <b-td>James Black</b-td>
                                                    </b-tr>
                                                    <b-tr>
                                                        <b-td class="fw-medium">II</b-td>
                                                        <b-td>Juston Eichmann</b-td>
                                                        <b-td>Design syntax</b-td>
                                                        <b-td>Olimpia Jordan</b-td>
                                                    </b-tr>
                                                </b-tbody>
                                            </b-table-simple>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">02</b-td>
                                        <b-td>Bessie Cooper</b-td>
                                        <b-td>Graphic Designer</b-td>
                                        <b-td>13, Nov 2021</b-td>
                                        <b-td>$875</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">03</b-td>
                                        <b-td>Leslie Alexander</b-td>
                                        <b-td>Product Manager</b-td>
                                        <b-td>16, Nov 2021</b-td>
                                        <b-td>$410</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">04</b-td>
                                        <b-td>Bettie Johson</b-td>
                                        <b-td>Applications Engineer</b-td>
                                        <b-td>24, Nov 2021</b-td>
                                        <b-td>$620</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="fw-medium">05</b-td>
                                        <b-td>Monkey Karry</b-td>
                                        <b-td>Implement new UX</b-td>
                                        <b-td>25, Nov 2021</b-td>
                                        <b-td>$795</b-td>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;b-table-simple responsive class="table-nowrap mb-0"&gt;
    &lt;b-thead class="table-light"&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="col"&gt;ID&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Name&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Job Title&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Date&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Payment&lt;/b-th&gt;
        &lt;/b-tr&gt;
    &lt;/b-thead&gt;
    &lt;b-tbody&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;01&lt;/b-td&gt;
            &lt;b-td&gt;Annette Black&lt;/b-td&gt;
            &lt;b-td&gt;Industrial Designer&lt;/b-td&gt;
            &lt;b-td&gt;10, Nov 2021&lt;/b-td&gt;
            &lt;b-td&gt;$450&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td colspan="5"&gt;
                &lt;b-table-simple class="table table-nowrap mb-0"&gt;
                    &lt;b-thead class="table-light"&gt;
                        &lt;b-tr&gt;
                            &lt;b-th scope="col"&gt;ID&lt;/b-th&gt;
                            &lt;b-th scope="col"&gt;Student&lt;/b-th&gt;
                            &lt;b-th scope="col"&gt;Course&lt;/b-th&gt;
                            &lt;b-th scope="col"&gt;Author&lt;/b-th&gt;
                        &lt;/b-tr&gt;
                    &lt;/b-thead&gt;
                    &lt;b-tbody&gt;
                        &lt;b-tr&gt;
                            &lt;b-td class="fw-medium"&gt;I&lt;/b-td&gt;
                            &lt;b-td&gt;Milana Scot&lt;/b-td&gt;
                            &lt;b-td&gt;3d Animation&lt;/b-td&gt;
                            &lt;b-td&gt;James Black&lt;/b-td&gt;
                        &lt;/b-tr&gt;
                        &lt;b-tr&gt;
                            &lt;b-td class="fw-medium"&gt;II&lt;/b-td&gt;
                            &lt;b-td&gt;Juston Eichmann&lt;/b-td&gt;
                            &lt;b-td&gt;Design syntax&lt;/b-td&gt;
                            &lt;b-td&gt;Olimpia Jordan&lt;/b-td&gt;
                        &lt;/b-tr&gt;
                    &lt;/b-tbody&gt;
                &lt;/b-table-simple&gt;
            &lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;02&lt;/b-td&gt;
            &lt;b-td&gt;Bessie Cooper&lt;/b-td&gt;
            &lt;b-td&gt;Graphic Designer&lt;/b-td&gt;
            &lt;b-td&gt;13, Nov 2021&lt;/b-td&gt;
            &lt;b-td&gt;$875&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;03&lt;/b-td&gt;
            &lt;b-td&gt;Leslie Alexander&lt;/b-td&gt;
            &lt;b-td&gt;Product Manager&lt;/b-td&gt;
            &lt;b-td&gt;16, Nov 2021&lt;/b-td&gt;
            &lt;b-td&gt;$410&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;04&lt;/b-td&gt;
            &lt;b-td&gt;Bettie Johson&lt;/b-td&gt;
            &lt;b-td&gt;Applications Engineer&lt;/b-td&gt;
            &lt;b-td&gt;24, Nov 2021&lt;/b-td&gt;
            &lt;b-td&gt;$620&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td class="fw-medium"&gt;05&lt;/b-td&gt;
            &lt;b-td&gt;Monkey Karry&lt;/b-td&gt;
            &lt;b-td&gt;Implement new UX&lt;/b-td&gt;
            &lt;b-td&gt;25, Nov 2021&lt;/b-td&gt;
            &lt;b-td&gt;$795&lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Variants</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>table-</code> class with below-mentioned color variation class
                            within &lt;tr&gt; to set color on table row.</p>
                            <b-table-simple responsive class="table-nowrap mb-0">
                                <b-thead>
                                    <b-tr>
                                        <b-th scope="col">#</b-th>
                                        <b-th scope="col">Name</b-th>
                                        <b-th scope="col">Position</b-th>
                                        <b-th scope="col">Department</b-th>
                                    </b-tr>
                                </b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td>Default</b-td>
                                        <b-td>Monkey Karry</b-td>
                                        <b-td>Medical Specialist</b-td>
                                        <b-td>Orthopedics</b-td>
                                    </b-tr>
                                    <b-tr class="table-primary">
                                        <b-td>Primary</b-td>
                                        <b-td>James White</b-td>
                                        <b-td>Medical Assistant</b-td>
                                        <b-td>Surgery</b-td>
                                    </b-tr>
                                    <b-tr class="table-secondary">
                                        <b-td>Secondary</b-td>
                                        <b-td>Aaron James</b-td>
                                        <b-td>Medical Specialist</b-td>
                                        <b-td>Neurology</b-td>
                                    </b-tr>
                                    <b-tr class="table-success">
                                        <b-td>Success</b-td>
                                        <b-td>Bettie Johson</b-td>
                                        <b-td>Medical Specialist</b-td>
                                        <b-td>Cardiology</b-td>
                                    </b-tr>
                                    <b-tr class="table-danger">
                                        <b-td>Danger</b-td>
                                        <b-td>Bessie Cooper</b-td>
                                        <b-td>Medical Assistant</b-td>
                                        <b-td>Surgery</b-td>
                                    </b-tr>
                                    <b-tr class="table-warning">
                                        <b-td>Warning</b-td>
                                        <b-td>Lenora Sandoval</b-td>
                                        <b-td>Medical Assistant</b-td>
                                        <b-td>Cardiology</b-td>
                                    </b-tr>
                                    <b-tr class="table-info">
                                        <b-td>Info</b-td>
                                        <b-td>Eric Pierce</b-td>
                                        <b-td>Medical Specialist</b-td>
                                        <b-td>Neurology</b-td>
                                    </b-tr>
                                    <b-tr class="table-light">
                                        <b-td>Light</b-td>
                                        <b-td>Ruth Zimmermann</b-td>
                                        <b-td>Medical Specialist</b-td>
                                        <b-td>Neurology</b-td>
                                    </b-tr>
                                    <b-tr class="table-dark">
                                        <b-td>Dark</b-td>
                                        <b-td>Leslie Alexander</b-td>
                                        <b-td>Medical Assistant</b-td>
                                        <b-td>Cardiology</b-td>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;b-table-simple responsive class="table-nowrap mb-0"&gt;
    &lt;b-thead&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="col"&gt;#&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Name&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Position&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Department&lt;/b-th&gt;
        &lt;/b-tr&gt;
    &lt;/b-thead&gt;
    &lt;b-tbody&gt;
        &lt;b-tr&gt;
            &lt;b-td&gt;Default&lt;/b-td&gt;
            &lt;b-td&gt;Monkey Karry&lt;/b-td&gt;
            &lt;b-td&gt;Medical Specialist&lt;/b-td&gt;
            &lt;b-td&gt;Orthopedics&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr class="table-primary"&gt;
            &lt;b-td&gt;Primary&lt;/b-td&gt;
            &lt;b-td&gt;James White&lt;/b-td&gt;
            &lt;b-td&gt;Medical Assistant&lt;/b-td&gt;
            &lt;b-td&gt;Surgery&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr class="table-secondary"&gt;
            &lt;b-td&gt;Secondary&lt;/b-td&gt;
            &lt;b-td&gt;Aaron James&lt;/b-td&gt;
            &lt;b-td&gt;Medical Specialist&lt;/b-td&gt;
            &lt;b-td&gt;Neurology&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr class="table-success"&gt;
            &lt;b-td&gt;Success&lt;/b-td&gt;
            &lt;b-td&gt;Bettie Johson&lt;/b-td&gt;
            &lt;b-td&gt;Medical Specialist&lt;/b-td&gt;
            &lt;b-td&gt;Cardiology&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr class="table-danger"&gt;
            &lt;b-td&gt;Danger&lt;/b-td&gt;
            &lt;b-td&gt;Bessie Cooper&lt;/b-td&gt;
            &lt;b-td&gt;Medical Assistant&lt;/b-td&gt;
            &lt;b-td&gt;Surgery&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr class="table-warning"&gt;
            &lt;b-td&gt;Warning&lt;/b-td&gt;
            &lt;b-td&gt;Lenora Sandoval&lt;/b-td&gt;
            &lt;b-td&gt;Medical Assistant&lt;/b-td&gt;
            &lt;b-td&gt;Cardiology&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr class="table-info"&gt;
            &lt;b-td&gt;Info&lt;/b-td&gt;
            &lt;b-td&gt;Eric Pierce&lt;/b-td&gt;
            &lt;b-td&gt;Medical Specialist&lt;/b-td&gt;
            &lt;b-td&gt;Neurology&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr class="table-light"&gt;
            &lt;b-td&gt;Light&lt;/b-td&gt;
            &lt;b-td&gt;Ruth Zimmermann&lt;/b-td&gt;
            &lt;b-td&gt;Medical Specialist&lt;/b-td&gt;
            &lt;b-td&gt;Neurology&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr class="table-dark"&gt;
            &lt;b-td&gt;Dark&lt;/b-td&gt;
            &lt;b-td&gt;Leslie Alexander&lt;/b-td&gt;
            &lt;b-td&gt;Medical Assistant&lt;/b-td&gt;
            &lt;b-td&gt;Cardiology&lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>


        <b-row>
            <b-col xl="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Vertical alignment</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Table cells of <code>&lt;thead&gt;</code> are always vertical aligned to the
                            bottom. Table cells in <code>&lt;tbody&gt;</code> inherit their alignment from
                            <code>&lt;table&gt;</code> and are aligned to the the top by default. Use the vertical align
                            classes to re-align where needed.
                        </p>
                        <div class="table-nowrap">
                            <b-table-simple responsive class="align-middle">
                                <b-thead>
                                    <b-tr>
                                        <b-th>Heading</b-th>
                                        <b-th>Heading</b-th>
                                        <b-th>Heading</b-th>
                                        <b-th>Heading</b-th>
                                    </b-tr>
                                </b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td>This cell inherits <code>vertical-align: middle;</code> from the table</b-td>
                                        <b-td>This cell inherits <code>vertical-align: middle;</code> from the table</b-td>
                                        <b-td>This cell inherits <code>vertical-align: middle;</code> from the table</b-td>
                                        <b-td>This here is some placeholder text, intended to take up quite a bit of
                                            vertical
                                            space, to demonstrate how the vertical alignment works in the preceding cells.
                                            Use the vertical align classes to re-align where needed. inherit their alignment
                                            from and are aligned to the the top by default.</b-td>
                                    </b-tr>
                                    <b-tr class="align-bottom">
                                        <b-td>This cell inherits <code>vertical-align: bottom;</code> from the table
                                            row</b-td>
                                        <b-td>This cell inherits <code>vertical-align: bottom;</code> from the table
                                            row</b-td>
                                        <b-td>This cell inherits <code>vertical-align: bottom;</code> from the table
                                            row</b-td>
                                        <b-td>This here is some placeholder text, intended to take up quite a bit of
                                            vertical
                                            space, to demonstrate how the vertical alignment works in the preceding cells.
                                            Use the vertical align classes to re-align where needed. inherit their alignment
                                            from and are aligned to the the top by default.</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td>This cell inherits <code>vertical-align: middle;</code> from the table</b-td>
                                        <b-td>This cell inherits <code>vertical-align: middle;</code> from the table</b-td>
                                        <b-td class="align-top">This cell is aligned to the top.</b-td>
                                        <b-td>This here is some placeholder text, intended to take up quite a bit of
                                            vertical
                                            space, to demonstrate how the vertical alignment works in the preceding cells.
                                            Use the vertical align classes to re-align where needed. inherit their alignment
                                            from and are aligned to the the top by default.</b-td>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;b-table-simple responsive class="align-middle"&gt;
    &lt;b-thead&gt;
        &lt;b-tr&gt;
            &lt;b-th&gt;Heading&lt;/b-th&gt;
            &lt;b-th&gt;Heading&lt;/b-th&gt;
            &lt;b-th&gt;Heading&lt;/b-th&gt;
            &lt;b-th&gt;Heading&lt;/b-th&gt;
        &lt;/b-tr&gt;
    &lt;/b-thead&gt;
    &lt;b-tbody&gt;
        &lt;b-tr&gt;
            &lt;b-td&gt;This cell inherits &lt;code&gt;vertical-align: middle;&lt;/code&gt; from the table&lt;/b-td&gt;
            &lt;b-td&gt;This cell inherits &lt;code&gt;vertical-align: middle;&lt;/code&gt; from the table&lt;/b-td&gt;
            &lt;b-td&gt;This cell inherits &lt;code&gt;vertical-align: middle;&lt;/code&gt; from the table&lt;/b-td&gt;
            &lt;b-td&gt;This here is some placeholder text, intended to take up quite a bit of
                vertical
                space, to demonstrate how the vertical alignment works in the preceding cells.
                Use the vertical align classes to re-align where needed. inherit their alignment
                from and are aligned to the the top by default.&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr class="align-bottom"&gt;
            &lt;b-td&gt;This cell inherits &lt;code&gt;vertical-align: bottom;&lt;/code&gt; from the table
                row&lt;/b-td&gt;
            &lt;b-td&gt;This cell inherits &lt;code&gt;vertical-align: bottom;&lt;/code&gt; from the table
                row&lt;/b-td&gt;
            &lt;b-td&gt;This cell inherits &lt;code&gt;vertical-align: bottom;&lt;/code&gt; from the table
                row&lt;/b-td&gt;
            &lt;b-td&gt;This here is some placeholder text, intended to take up quite a bit of
                vertical
                space, to demonstrate how the vertical alignment works in the preceding cells.
                Use the vertical align classes to re-align where needed. inherit their alignment
                from and are aligned to the the top by default.&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-td&gt;This cell inherits &lt;code&gt;vertical-align: middle;&lt;/code&gt; from the table&lt;/b-td&gt;
            &lt;b-td&gt;This cell inherits &lt;code&gt;vertical-align: middle;&lt;/code&gt; from the table&lt;/b-td&gt;
            &lt;b-td class="align-top"&gt;This cell is aligned to the top.&lt;/b-td&gt;
            &lt;b-td&gt;This here is some placeholder text, intended to take up quite a bit of
                vertical
                space, to demonstrate how the vertical alignment works in the preceding cells.
                Use the vertical align classes to re-align where needed. inherit their alignment
                from and are aligned to the the top by default.&lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>


        <b-row>
            <b-col xl="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Responsive Tables</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>table-responsive</code> class to make any table responsive across
                            all viewports. Responsive tables allow tables to be scrolled horizontally with ease.</p>
                            <b-table-simple responsive class="align-middle table-nowrap mb-0">
                                <b-thead class="table-light">
                                    <b-tr>
                                        <b-th scope="col" style="width: 42px;">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="responsivetableCheck">
                                                <label class="form-check-label" for="responsivetableCheck"></label>
                                            </div>
                                        </b-th>
                                        <b-th scope="col">ID</b-th>
                                        <b-th scope="col">Date</b-th>
                                        <b-th scope="col">Status</b-th>
                                        <b-th scope="col">Customer</b-th>
                                        <b-th scope="col">Purchased</b-th>
                                        <b-th scope="col">Revenue</b-th>
                                    </b-tr>
                                </b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-th scope="row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="responsivetableCheck01">
                                                <label class="form-check-label" for="responsivetableCheck01"></label>
                                            </div>
                                        </b-th>
                                        <b-td><b-link href="#" class="fw-medium">#VZ2110</b-link></b-td>
                                        <b-td>10 Oct, 14:47</b-td>
                                        <b-td class="text-success"><i
                                                class="ri-checkbox-circle-line fs-xl align-middle"></i>
                                            Paid</b-td>
                                        <b-td>
                                            <div class="d-flex gap-2 align-items-center">
                                                <div class="flex-shrink-0">
                                                    <img :src="avatar3" alt=""
                                                        class="avatar-xs rounded-circle" />
                                                </div>
                                                <div class="flex-grow-1">
                                                    Jordan Kennedy
                                                </div>
                                            </div>
                                        </b-td>
                                        <b-td>Mastering the grid</b-td>
                                        <b-td>$9.98</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-th scope="row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="responsivetableCheck02">
                                                <label class="form-check-label" for="responsivetableCheck02"></label>
                                            </div>
                                        </b-th>
                                        <b-td><b-link href="#" class="fw-medium">#VZ2109</b-link></b-td>
                                        <b-td>17 Oct, 02:10</b-td>
                                        <b-td class="text-success"><i
                                                class="ri-checkbox-circle-line fs-xl align-middle"></i>
                                            Paid</b-td>
                                        <b-td>
                                            <div class="d-flex gap-2 align-items-center">
                                                <div class="flex-shrink-0">
                                                    <img :src="avatar4" alt="" class="avatar-xs rounded-circle" />
                                                </div>
                                                <div class="flex-grow-1">
                                                    Jackson Graham
                                                </div>
                                            </div>
                                        </b-td>
                                        <b-td>Splashify</b-td>
                                        <b-td>$270.60</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-th scope="row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="responsivetableCheck03">
                                                <label class="form-check-label" for="responsivetableCheck03"></label>
                                            </div>
                                        </b-th>
                                        <b-td><b-link href="#" class="fw-medium">#VZ2108</b-link></b-td>
                                        <b-td>26 Oct, 08:20</b-td>
                                        <b-td class="text-primary"><i class="ri-refresh-line fs-xl align-middle"></i>
                                            Refunded
                                        </b-td>
                                        <b-td>
                                            <div class="d-flex gap-2 align-items-center">
                                                <div class="flex-shrink-0">
                                                    <img :src="avatar5" alt="" class="avatar-xs rounded-circle" />
                                                </div>
                                                <div class="flex-grow-1">
                                                    Lauren Trujillo
                                                </div>
                                            </div>
                                        </b-td>
                                        <b-td>Wireframing Kit for Figma</b-td>
                                        <b-td>$145.42</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-th scope="row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="responsivetableCheck04">
                                                <label class="form-check-label" for="responsivetableCheck04"></label>
                                            </div>
                                        </b-th>
                                        <b-td><b-link href="#" class="fw-medium">#VZ2107</b-link></b-td>
                                        <b-td>02 Nov, 04:52</b-td>
                                        <b-td class="text-danger"><i class="ri-close-circle-line fs-xl align-middle"></i>
                                            Cancel</b-td>
                                        <b-td>
                                            <div class="d-flex gap-2 align-items-center">
                                                <div class="flex-shrink-0">
                                                    <img :src="avatar6" alt="" class="avatar-xs rounded-circle" />
                                                </div>
                                                <div class="flex-grow-1">
                                                    Curtis Weaver
                                                </div>
                                            </div>
                                        </b-td>
                                        <b-td>Wireframing Kit for Figma</b-td>
                                        <b-td>$170.68</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-th scope="row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="responsivetableCheck05">
                                                <label class="form-check-label" for="responsivetableCheck05"></label>
                                            </div>
                                        </b-th>
                                        <b-td><b-link href="#" class="fw-medium">#VZ2106</b-link></b-td>
                                        <b-td>10 Nov, 07:20</b-td>
                                        <b-td class="text-success"><i
                                                class="ri-checkbox-circle-line fs-xl align-middle"></i>
                                            Paid</b-td>
                                        <b-td>
                                            <div class="d-flex gap-2 align-items-center">
                                                <div class="flex-shrink-0">
                                                    <img :src="avatar1" alt="" class="avatar-xs rounded-circle" />
                                                </div>
                                                <div class="flex-grow-1">
                                                    Jason schuller
                                                </div>
                                            </div>
                                        </b-td>
                                        <b-td>Splashify</b-td>
                                        <b-td>$350.87</b-td>
                                    </b-tr>
                                </b-tbody>
                                <b-tfoot class="table-light">
                                    <b-tr>
                                        <b-td colspan="6">Total</b-td>
                                        <b-td>$947.55</b-td>
                                    </b-tr>
                                </b-tfoot>
                            </b-table-simple>
                        <!-- end table responsive -->
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;b-table-simple responsive class="align-middle table-nowrap mb-0"&gt;
    &lt;b-thead class="table-light"&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="col" style="width: 42px;"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" value="" id="responsivetableCheck"&gt;
                    &lt;label class="form-check-label" for="responsivetableCheck"&gt;&lt;/label&gt;
                &lt;/div&gt;
            &lt;/b-th&gt;
            &lt;b-th scope="col"&gt;ID&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Date&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Status&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Customer&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Purchased&lt;/b-th&gt;
            &lt;b-th scope="col"&gt;Revenue&lt;/b-th&gt;
        &lt;/b-tr&gt;
    &lt;/b-thead&gt;
    &lt;b-tbody&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="row"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" value="" id="responsivetableCheck01"&gt;
                    &lt;label class="form-check-label" for="responsivetableCheck01"&gt;&lt;/label&gt;
                &lt;/div&gt;
            &lt;/b-th&gt;
            &lt;b-td&gt;&lt;b-link href="#" class="fw-medium"&gt;#VZ2110&lt;/b-link&gt;&lt;/b-td&gt;
            &lt;b-td&gt;10 Oct, 14:47&lt;/b-td&gt;
            &lt;b-td class="text-success"&gt;&lt;i class="ri-checkbox-circle-line fs-xl align-middle"&gt;&lt;/i&gt;
                Paid&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="d-flex gap-2 align-items-center"&gt;
                    &lt;div class="flex-shrink-0"&gt;
                        &lt;img src="@/assets/images/users/avatar-3.jpg" alt=""
                            class="avatar-xs rounded-circle" /&gt;
                    &lt;/div&gt;
                    &lt;div class="flex-grow-1"&gt;
                        Jordan Kennedy
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
            &lt;b-td&gt;Mastering the grid&lt;/b-td&gt;
            &lt;b-td&gt;$9.98&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="row"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" value="" id="responsivetableCheck02"&gt;
                    &lt;label class="form-check-label" for="responsivetableCheck02"&gt;&lt;/label&gt;
                &lt;/div&gt;
            &lt;/b-th&gt;
            &lt;b-td&gt;&lt;b-link href="#" class="fw-medium"&gt;#VZ2109&lt;/b-link&gt;&lt;/b-td&gt;
            &lt;b-td&gt;17 Oct, 02:10&lt;/b-td&gt;
            &lt;b-td class="text-success"&gt;&lt;i class="ri-checkbox-circle-line fs-xl align-middle"&gt;&lt;/i&gt;
                Paid&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="d-flex gap-2 align-items-center"&gt;
                    &lt;div class="flex-shrink-0"&gt;
                        &lt;img src="@/assets/images/users/avatar-4.jpg" alt=""
                            class="avatar-xs rounded-circle" /&gt;
                    &lt;/div&gt;
                    &lt;div class="flex-grow-1"&gt;
                        Jackson Graham
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
            &lt;b-td&gt;Splashify&lt;/b-td&gt;
            &lt;b-td&gt;$270.60&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="row"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" value="" id="responsivetableCheck03"&gt;
                    &lt;label class="form-check-label" for="responsivetableCheck03"&gt;&lt;/label&gt;
                &lt;/div&gt;
            &lt;/b-th&gt;
            &lt;b-td&gt;&lt;b-link href="#" class="fw-medium"&gt;#VZ2108&lt;/b-link&gt;&lt;/b-td&gt;
            &lt;b-td&gt;26 Oct, 08:20&lt;/b-td&gt;
            &lt;b-td class="text-primary"&gt;&lt;i class="ri-refresh-line fs-xl align-middle"&gt;&lt;/i&gt;
                Refunded
            &lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="d-flex gap-2 align-items-center"&gt;
                    &lt;div class="flex-shrink-0"&gt;
                        &lt;img src="@/assets/images/users/avatar-5.jpg" alt=""
                            class="avatar-xs rounded-circle" /&gt;
                    &lt;/div&gt;
                    &lt;div class="flex-grow-1"&gt;
                        Lauren Trujillo
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
            &lt;b-td&gt;Wireframing Kit for Figma&lt;/b-td&gt;
            &lt;b-td&gt;$145.42&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="row"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" value="" id="responsivetableCheck04"&gt;
                    &lt;label class="form-check-label" for="responsivetableCheck04"&gt;&lt;/label&gt;
                &lt;/div&gt;
            &lt;/b-th&gt;
            &lt;b-td&gt;&lt;b-link href="#" class="fw-medium"&gt;#VZ2107&lt;/b-link&gt;&lt;/b-td&gt;
            &lt;b-td&gt;02 Nov, 04:52&lt;/b-td&gt;
            &lt;b-td class="text-danger"&gt;&lt;i class="ri-close-circle-line fs-xl align-middle"&gt;&lt;/i&gt;
                Cancel&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="d-flex gap-2 align-items-center"&gt;
                    &lt;div class="flex-shrink-0"&gt;
                        &lt;img src="@/assets/images/users/avatar-6.jpg" alt=""
                            class="avatar-xs rounded-circle" /&gt;
                    &lt;/div&gt;
                    &lt;div class="flex-grow-1"&gt;
                        Curtis Weaver
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
            &lt;b-td&gt;Wireframing Kit for Figma&lt;/b-td&gt;
            &lt;b-td&gt;$170.68&lt;/b-td&gt;
        &lt;/b-tr&gt;
        &lt;b-tr&gt;
            &lt;b-th scope="row"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" value="" id="responsivetableCheck05"&gt;
                    &lt;label class="form-check-label" for="responsivetableCheck05"&gt;&lt;/label&gt;
                &lt;/div&gt;
            &lt;/b-th&gt;
            &lt;b-td&gt;&lt;b-link href="#" class="fw-medium"&gt;#VZ2106&lt;/b-link&gt;&lt;/b-td&gt;
            &lt;b-td&gt;10 Nov, 07:20&lt;/b-td&gt;
            &lt;b-td class="text-success"&gt;&lt;i class="ri-checkbox-circle-line fs-xl align-middle"&gt;&lt;/i&gt;
                Paid&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;div class="d-flex gap-2 align-items-center"&gt;
                    &lt;div class="flex-shrink-0"&gt;
                        &lt;img src="@/assets/images/users/avatar-1.jpg" alt=""
                            class="avatar-xs rounded-circle" /&gt;
                    &lt;/div&gt;
                    &lt;div class="flex-grow-1"&gt;
                        Jason schuller
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/b-td&gt;
            &lt;b-td&gt;Splashify&lt;/b-td&gt;
            &lt;b-td&gt;$350.87&lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tbody&gt;
    &lt;b-tfoot class="table-light"&gt;
        &lt;b-tr&gt;
            &lt;b-td colspan="6"&gt;Total&lt;/b-td&gt;
            &lt;b-td&gt;$947.55&lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tfoot&gt;
&lt;/b-table-simple&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

    </Layout>
</template>