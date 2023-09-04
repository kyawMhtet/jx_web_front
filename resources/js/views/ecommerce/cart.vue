<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

// product imgs
import pImg1 from "../../../images/products/img-1.png";
import pImg2 from "../../../images/products/img-2.png";
import pImg3 from "../../../images/products/img-3.png";
import pImg6 from "../../../images/products/img-6.png";
import pImg9 from "../../../images/products/img-9.png";

export default {
    data() {
        return {
            title: "Shop Cart",
            items: [
                {
                    text: "Ecommerce",
                    href: "/",
                },
                {
                    text: "Shop Cart",
                    active: true,
                },
            ],
            pImg1, pImg2, pImg3, pImg6, pImg9, 
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
            <b-row class="justify-content-center">
                <b-col xxl="10">
                    <b-card no-body>
                        <b-row class="g-0 product-list">
                            <b-col xxl="9">
                                <b-card-header class="d-flex align-items-center gap-2">
                                    <b-card-title title-tag="h5" class="flex-grow-1 mb-0">Shopping Cart</b-card-title>
                                    <div class="flex-shrink-0">
                                        <span class="badge bg-danger-subtle text-danger">5 Items</span>
                                    </div>
                                </b-card-header>
                                <b-card-body>
                                    <div class="table-responsive">
                                        <table class="table align-middle table-nowrap table-borderless mb-0">
                                            <thead class="table-active">
                                                <tr>
                                                    <th>Product Items</th>
                                                    <th>Item Price</th>
                                                    <th>Quantity</th>
                                                    <th class="text-end">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="product">
                                                    <td>
                                                        <div class="product-item d-flex align-items-center gap-3">
                                                            <div class="avatar-md flex-shrink-0">
                                                                <div class="avatar-title bg-light rounded">
                                                                    <img :src="pImg1" alt="" class="avatar-sm" />
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="fs-md mb-1"><router-link to="/ecommerce/product-details" class="text-reset">Branded T-Shirts</router-link></h6>
                                                                <p class="text-muted mb-2"><b-link href="#!" class="text-reset">Fashion</b-link></p>
                                                                <p class="mb-0"><span class="text-muted">Size:</span> XL <span class="text-muted">Color:</span> Blue</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>$<span class="product-price">161.25</span></td>
                                                    <td>
                                                        <div class="input-step">
                                                            <b-button type="button" variant="none" class="minus">–</b-button>
                                                            <input type="number" class="product-quantity" value="3" min="0" max="100" readonly>
                                                            <b-button type="button" variant="none" class="plus">+</b-button>
                                                        </div>
                                                    </td>
                                                    <td class="fw-medium text-end">$<span class="product-line-price">483.75</span></td>
                                                </tr>
                                                <tr class="product">
                                                    <td>
                                                        <div class="product-item d-flex align-items-center gap-3">
                                                            <div class="avatar-md flex-shrink-0">
                                                                <div class="avatar-title bg-light rounded">
                                                                    <img :src="pImg3" alt="" class="avatar-sm" />
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="fs-md mb-1"><router-link to="/ecommerce/product-details" class="text-reset">Fossil gen 5E smart watch</router-link></h6>
                                                                <p class="text-muted mb-2"><b-link href="#!" class="text-reset">Watchs</b-link></p>
                                                                <p class="mb-0"><span class="text-muted">Color:</span> White</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>$<span class="product-price">69.60</span></td>
                                                    <td>
                                                        <div class="input-step">
                                                            <b-button type="button" variant="none" class="minus">–</b-button>
                                                            <input type="number" class="product-quantity" value="2" min="0" max="100" readonly>
                                                            <b-button type="button" variant="none" class="plus">+</b-button>
                                                        </div>
                                                    </td>
                                                    <td class="fw-medium text-end">$<span class="product-line-price">139.20</span></td>
                                                </tr>
                                                <tr class="product">
                                                    <td>
                                                        <div class="product-item d-flex align-items-center gap-3">
                                                            <div class="avatar-md flex-shrink-0">
                                                                <div class="avatar-title bg-light rounded">
                                                                    <img :src="pImg6" alt="" class="avatar-sm" />
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="fs-md mb-1"><router-link to="/ecommerce/product-details" class="text-reset">Olive Printed Men Round Neck</router-link></h6>
                                                                <p class="text-muted mb-2"><b-link href="#!" class="text-reset">Fashion</b-link></p>
                                                                <p class="mb-0"><span class="text-muted">Size:</span> M <span class="text-muted">Color:</span> Brown</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>$<span class="product-price">250.00</span></td>
                                                    <td>
                                                        <div class="input-step">
                                                            <b-button type="button" variant="none" class="minus">–</b-button>
                                                            <input type="number" class="product-quantity" value="6" min="0" max="100" readonly>
                                                            <b-button type="button" variant="none" class="plus">+</b-button>
                                                        </div>
                                                    </td>
                                                    <td class="fw-medium text-end">$<span class="product-line-price">1500.00</span></td>
                                                </tr>
                                                <tr class="product">
                                                    <td>
                                                        <div class="product-item d-flex align-items-center gap-3">
                                                            <div class="avatar-md flex-shrink-0">
                                                                <div class="avatar-title bg-light rounded">
                                                                    <img :src="pImg9" alt="" class="avatar-sm" />
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="fs-md mb-1"><router-link to="/ecommerce/product-details" class="text-reset">Flip-Flops and House Slippers</router-link></h6>
                                                                <p class="text-muted mb-2"><b-link href="#!" class="text-reset">Footwear</b-link></p>
                                                                <p class="mb-0"><span class="text-muted">Size:</span> 8 <span class="text-muted">Color:</span> Green</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>$<span class="product-price">150.00</span></td>
                                                    <td>
                                                        <div class="input-step">
                                                            <b-button type="button" variant="none" class="minus">–</b-button>
                                                            <input type="number" class="product-quantity" value="1" min="0" max="100" readonly>
                                                            <b-button type="button" variant="none" class="plus">+</b-button>
                                                        </div>
                                                    </td>
                                                    <td class="fw-medium text-end">$<span class="product-line-price">150.00</span></td>
                                                </tr>
                                                <tr class="product">
                                                    <td>
                                                        <div class="product-item d-flex align-items-center gap-3">
                                                            <div class="avatar-md flex-shrink-0">
                                                                <div class="avatar-title bg-light rounded">
                                                                    <img :src="pImg2" alt="" class="avatar-sm" />
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="fs-md mb-1"><router-link to="/ecommerce/product-details" class="text-reset">Like style travel black handbag</router-link></h6>
                                                                <p class="text-muted mb-2"><b-link href="#!" class="text-reset">Luggage</b-link></p>
                                                                <p class="mb-0"><span class="text-muted">Color:</span> Green</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>$<span class="product-price">89.99</span></td>
                                                    <td>
                                                        <div class="input-step">
                                                            <b-button type="button" variant="none" class="minus">–</b-button>
                                                            <input type="number" class="product-quantity" value="0" min="0" max="100" readonly>
                                                            <b-button type="button" variant="none" class="plus">+</b-button>
                                                        </div>
                                                    </td>
                                                    <td class="fw-medium text-end">$<span class="product-line-price">00.00</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </b-card-body>
                            </b-col>
                            <b-col xxl="3">
                                <div class="border-start-xxl border-top-xxl-0 border-top h-100">
                                    <b-card-header>
                                        <b-card-title title-tag="h5" class="mb-0">Order Summary</b-card-title>
                                    </b-card-header>
                                    <b-card-body class="mt-2">
                                        <div class="table-responsive table-card">
                                            <table class="table table-borderless">
                                                <tbody>
                                                    <tr>
                                                        <td class="fw-semibold" colspan="2">Sub Total :</td>
                                                        <td class="fw-semibold text-end cart-subtotal">$2,272.95</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2">Discount <span class="text-muted">(STEEX30)</span> : </td>
                                                        <td class="text-end cart-discount">- $681.89</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2">Shipping Charge :</td>
                                                        <td class="text-end cart-shipping">$49.99</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2">Estimated Tax (18%): </td>
                                                        <td class="text-end cart-tax">$409.13</td>
                                                    </tr>
                                                    <tr>
                                                        <th colspan="2">Total (USD) :</th>
                                                        <td class="text-end">
                                                            <span class="fw-semibold cart-total">
                                                                $2,050.18
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div class="text-end mt-4">
                                            <router-link to="/ecommerce/products-grid" class="btn btn-secondary me-1">Continue Shopping</router-link>
                                            <router-link to="/ecommerce/checkout" class="btn btn-primary">Checkout</router-link>
                                        </div>
                                    </b-card-body>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
    </Layout>
</template>