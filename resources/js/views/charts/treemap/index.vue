<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";
import {
    treemapChart,
    multiSeriesChart,
    distributedChart,
    colorRangeChart,
} from "./data";

export default {
    data() {
        return {
            treemapChart: treemapChart,
            multiSeriesChart: multiSeriesChart,
            distributedChart: distributedChart,
            colorRangeChart: colorRangeChart,

            title: "Treemap Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Treemap Charts",
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
                        <b-card-title class="mb-0">Basic Treemap Charts</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="treemapChart.series"
                            :options="treemapChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Multi-Dimensional Treemap Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="multiSeriesChart.series"
                            :options="multiSeriesChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">
                            Distributed Treemap Chart (Different Color for each Cell)
                        </b-card-title>

                    </b-card-header>

                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="distributedChart.series"
                            :options="distributedChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Treemap Chart with Color Ranges</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="colorRangeChart.series"
                            :options="colorRangeChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>