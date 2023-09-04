<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import { basicScatterChart, dateTimeScatterChart, scatterImagesChart, } from "./data";

export default {
    data() {
        return {
            basicScatterChart: basicScatterChart,
            dateTimeScatterChart: dateTimeScatterChart,
            scatterImagesChart: scatterImagesChart,
            title: "Scatter Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Scatter Charts",
                    active: true,
                },
            ],
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
                        <b-card-title class="mb-0">Basic Scatter Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="basicScatterChart.series"
                            :options="basicScatterChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Scatter - Datetime Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="dateTimeScatterChart.series"
                            :options="dateTimeScatterChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Scatter Images Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="scatterImagesChart.series"
                            :options="scatterImagesChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>