<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import { boxChart, boxplotScatterChart, horizontalBoxplotChart } from "./data";

export default {
    data() {
        return {
            boxChart: boxChart,
            boxplotScatterChart: boxplotScatterChart,
            horizontalBoxplotChart: horizontalBoxplotChart,
            title: "Boxplot Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Boxplot Charts",
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
                        <b-card-title class="mb-0">Basic Box Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="boxChart.series"
                            :options="boxChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Boxplot with Scatter Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="boxplotScatterChart.series" :options="boxplotScatterChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Horizontal BoxPlot</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="horizontalBoxplotChart.series" :options="horizontalBoxplotChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>