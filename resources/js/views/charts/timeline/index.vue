<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import { basicTimeLineChart, differentColorChart, multiSeriesChart, advancedTimelineChart, multipleseriesChart } from "./data";

export default {
    data() {
        return {
            title: "Timeline Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Timeline Charts",
                    active: true,
                },
            ],
            basicTimeLineChart: basicTimeLineChart,
            differentColorChart: differentColorChart,
            multiSeriesChart: multiSeriesChart,
            advancedTimelineChart: advancedTimelineChart,
            multipleseriesChart: multipleseriesChart
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
                        <b-card-title class="mb-0">Basic TimeLine Charts</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="basicTimeLineChart.series" :options="basicTimeLineChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Different Color For Each Bar</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="differentColorChart.series" :options="differentColorChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Multi Series Timeline</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="multiSeriesChart.series" :options="multiSeriesChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Advanced Timeline (Multiple Range)</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="advancedTimelineChart.series" :options="advancedTimelineChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Multiple series � Group rows</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <!-- <apexchart class="apex-charts" height="350" dir="ltr" :series="multipleseriesChart.series" :options="multipleseriesChart.chartOptions"></apexchart> -->
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>