<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import { basicCandlestickChart, comboCandlestickBrushChart, comboCandlestickChart, categoryXaxisChart, candlestickLineChart } from "./data";

export default {
    data() {
        return {
            basicCandlestickChart: basicCandlestickChart,
            comboCandlestickBrushChart: comboCandlestickBrushChart,
            comboCandlestickChart: comboCandlestickChart,
            categoryXaxisChart: categoryXaxisChart,
            candlestickLineChart: candlestickLineChart,
            title: "Candlestick Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Candlestick Charts",
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
                  <b-card-title class="mb-0">Basic Candlestick Chart</b-card-title>
                </b-card-header>
                <b-card-body>
                  <apexchart class="apex-charts" height="350" dir="ltr" :series="basicCandlestickChart.series" :options="basicCandlestickChart.chartOptions"></apexchart>
                </b-card-body>
              </b-card>
            </b-col>
            <b-col xl="6">
              <b-card no-body>
                <b-card-header>
                  <b-card-title class="mb-0">Candlestick Synced with Brush Chart (Combo)</b-card-title>
                </b-card-header>
                <b-card-body>
                  <apexchart class="apex-charts" height="200" dir="ltr" :series="comboCandlestickBrushChart.series" :options="comboCandlestickBrushChart.chartOptions"></apexchart>
                  <apexchart class="apex-charts" height="150" dir="ltr" :series="comboCandlestickChart.series" :options="comboCandlestickChart.chartOptions"></apexchart>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
      
          <b-row>
            <b-col xl="6">
              <b-card no-body>
                <b-card-header>
                  <b-card-title class="mb-0">Category X-Axis</b-card-title>
                </b-card-header>
                <b-card-body>
                  <apexchart class="apex-charts" height="350" dir="ltr" :series="categoryXaxisChart.series" :options="categoryXaxisChart.chartOptions"></apexchart>
                </b-card-body>
              </b-card>
            </b-col>
            <b-col xl="6">
              <b-card no-body>
                <b-card-header>
                  <b-card-title class="mb-0">Candlestick with line</b-card-title>
                </b-card-header>
                <b-card-body>
                  <apexchart class="apex-charts" height="350" dir="ltr" :series="candlestickLineChart.series" :options="candlestickLineChart.chartOptions"></apexchart>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
    </Layout>
</template>