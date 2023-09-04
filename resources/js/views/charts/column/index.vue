<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import { basicColumnChart, columnDatalabelChart, stackedColumnsChart, columnStackedChart, columnMarkersChart, columnRotatedLabel, columnNegativeChart, rangeColumnChart, chartYearOption, quarterChartOption, distributedColumnchart, dynamicQuarterLoadedChart, columnGroupChart } from "./data";


export default {
    data() {
        return {
            title: "Column Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Column Charts",
                    active: true,
                },
            ],
            basicColumnChart: basicColumnChart,
            columnDatalabelChart: columnDatalabelChart,
            stackedColumnsChart: stackedColumnsChart,
            columnStackedChart: columnStackedChart,
            columnMarkersChart: columnMarkersChart,
            columnRotatedLabel: columnRotatedLabel,
            columnNegativeChart: columnNegativeChart,
            rangeColumnChart: rangeColumnChart,
            chartYearOption: chartYearOption,
            quarterChartOption: quarterChartOption,
            distributedColumnchart: distributedColumnchart,
            dynamicQuarterLoadedChart: dynamicQuarterLoadedChart,
            columnGroupChart: columnGroupChart
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
                        <b-card-title class="mb-0">Basic Column Charts</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="basicColumnChart.series"
                            :options="basicColumnChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Column with Data Labels</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="columnDatalabelChart.series"
                            :options="columnDatalabelChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Stacked Column Charts</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="stackedColumnsChart.series"
                            :options="stackedColumnsChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Stacked Column 100</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="columnStackedChart.series"
                            :options="columnStackedChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Column with Markers</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="columnMarkersChart.series"
                            :options="columnMarkersChart.chartOptions"></apexchart>
                        <div id="column_markers" class="apex-charts" dir="ltr"></div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Column with Rotated Labels</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="columnRotatedLabel.series"
                            :options="columnRotatedLabel.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Column with Nagetive Values</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="columnNegativeChart.series"
                            :options="columnNegativeChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Range Column Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="rangeColumnChart.series"
                            :options="rangeColumnChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Dynamic Loaded Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <div id="dynamicloadedchart-wrap">
                            <div id="chart-year">
                                <apexchart type="bar" height="330" ref="chart" :options="chartYearOption.chartOptions"
                                    :series="chartYearOption.series"></apexchart>
                            </div>
                            <div id="chart-quarter">
                                <apexchart type="bar" height="330" ref="chartQuarter"
                                    :options="dynamicQuarterLoadedChart.chartOptions"
                                    :series="dynamicQuarterLoadedChart.series"></apexchart>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Distributed Columns Charts</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="distributedColumnchart.series"
                            :options="distributedColumnchart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Dynamic Loaded Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart type="bar" height="330" ref="chart" :options="columnGroupChart.chartOptions" :series="columnGroupChart.series"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>