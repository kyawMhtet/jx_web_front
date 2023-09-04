<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import { mixedLineChart, yAxisChart, lineAreaChart, lineColumnAreaChart } from "./data";

export default {
    data() {
        return {
            mixedLineChart: mixedLineChart,
            yAxisChart: yAxisChart,
            lineAreaChart: lineAreaChart,
            lineColumnAreaChart: lineColumnAreaChart,
            title: "Mixed Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Mixed Charts",
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
                        <b-card-title class="mb-0">Line & Column Charts</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="mixedLineChart.series"
                            :options="mixedLineChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Multiple Y-Axis Charts</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="yAxisChart.series"
                            :options="yAxisChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Line & Area Charts</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="lineAreaChart.series"
                            :options="lineAreaChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Line, Column & Area Charts</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="lineColumnAreaChart.series"
                            :options="lineColumnAreaChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
    </b-row>
</Layout></template>