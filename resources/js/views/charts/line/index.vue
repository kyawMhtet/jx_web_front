<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import {
    basicLineChart,
    zoomableChart,
    lineDatalabelChart,
    lineAnnotation,
    syncingAreaChart,
    brushLineChart,
    brushAreaChart,
    steplineChart,
    gradientLineChart,
    realtimeLineChart,
    dashedLineChart,
    missingDataChart,
    syncingCharts1,
    syncingCharts2,
    syncingCharts3
} from "./data";

export default {
    data() {
        return {
            basicLineChart: basicLineChart,
            zoomableChart: zoomableChart,
            lineDatalabelChart: lineDatalabelChart,
            lineAnnotation: lineAnnotation,
            syncingAreaChart: syncingAreaChart,
            brushLineChart: brushLineChart,
            brushAreaChart: brushAreaChart,
            steplineChart: steplineChart,
            gradientLineChart: gradientLineChart,
            realtimeLineChart: realtimeLineChart,
            dashedLineChart: dashedLineChart,
            missingDataChart: missingDataChart,
            syncingCharts1: syncingCharts1,
            syncingCharts2: syncingCharts2,
            syncingCharts3: syncingCharts3,
            title: "Line Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Line Charts",
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
                        <b-card-title class="mb-0">Basic Line Chart</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="basicLineChart.series"
                            :options="basicLineChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Zoomable Timeseries</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="zoomableChart.series"
                            :options="zoomableChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Line with Data Labels</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <apexchart class="apex-charts" height="380" dir="ltr" :series="lineDatalabelChart.series"
                            :options="lineDatalabelChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Dashed Line</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <apexchart class="apex-charts" height="380" dir="ltr" :series="dashedLineChart.series"
                            :options="dashedLineChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Line with Annotations</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="lineAnnotation.series"
                            :options="lineAnnotation.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Brush Charts</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <div>
                            <apexchart class="apex-charts" height="210" dir="ltr" :series="brushLineChart.series"
                                :options="brushLineChart.chartOptions"></apexchart>
                            <apexchart class="apex-charts" height="130" dir="ltr" :series="brushAreaChart.series"
                                :options="brushAreaChart.chartOptions"></apexchart>
                            <div id="brushchart_line" data-colors='["--tb-info"]' class="apex-charts" dir="ltr"></div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>

            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Stepline Charts</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="steplineChart.series"
                            :options="steplineChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Gradient Charts</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="gradientLineChart.series"
                            :options="gradientLineChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>

            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Missing Data/ Null Value Charts</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="missingDataChart.series"
                            :options="missingDataChart.chartOptions"></apexchart>

                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Syncing Charts</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <div>
                            <apexchart class="apex-charts" height="160" dir="ltr" :series="syncingCharts1.series"
                                :options="syncingCharts1.chartOptions"></apexchart>
                            <apexchart class="apex-charts" height="160" dir="ltr" :series="syncingCharts2.series"
                                :options="syncingCharts2.chartOptions"></apexchart>
                            <apexchart class="apex-charts" height="160" dir="ltr" :series="syncingCharts3.series"
                                :options="syncingCharts3.chartOptions"></apexchart>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>