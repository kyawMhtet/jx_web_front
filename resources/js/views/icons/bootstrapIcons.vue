<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";
import { bootstrapIcons } from "../../common/data";

export default {
    data() {
        return {
            icons: bootstrapIcons,
            title: "Bootstrap",
            items: [
                {
                    text: "Icons",
                    href: "/",
                },
                {
                    text: "Bootstrap",
                    active: true,
                },
            ],
        };
    },
    mounted() {
        const keys = Object.keys(this.icons);
        this.loadIconList(keys);
    },
    methods: {
        loadIconList(iconKeys) {
            let allIcons = '';
            for (const icon of iconKeys) {
                allIcons += `<div class="col-xl-3 col-lg-4 col-sm-6"> <i class="bi bi-${icon}"></i> ${icon} </div>`;
            }
            document.getElementById("iconList").innerHTML = allIcons;
        }
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
            <b-col cols="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title>Examples</b-card-title>
                        <p class="text-muted mb-0">Use <code>&lt;i class="bi bi-**">&lt;/i></code> class.</p>
                    </b-card-header>
                    <b-card-body class="pt-0">
                        <b-row class="icon-demo-content" id="iconList"></b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>