<template>
    <div class="dropdown-menu dropdown-menu-xl dropdown-menu-end p-0 product-list"
    aria-labelledby="page-header-cart-dropdown">
    <div class="p-3 border-bottom">
      <b-row class="align-items-center">
        <b-col>
          <h6 class="m-0 fs-lg fw-semibold"> My Cart <span
              class="badge bg-secondary fs-sm cartitem-badge ms-1">7</span></h6>
        </b-col>
        <b-col cols="auto">
          <b-link href="#!">View All</b-link>
        </b-col>
      </b-row>
    </div>
    <SimpleBar style="max-height: 300px;">
      <div class="p-3">
        <div class="text-center empty-cart" id="empty-cart">
          <div class="avatar-md mx-auto my-3">
            <div class="avatar-title bg-info-subtle text-info fs-2 rounded-circle">
              <i class='bx bx-cart'></i>
            </div>
          </div>
          <h5 class="mb-3">Your Cart is Empty!</h5>
          <b-link href="#!" class="btn btn-success w-md mb-3">Shop Now</b-link>
        </div>

        <div class="d-block dropdown-item product text-wrap p-2">
          <div class="d-flex">
            <div class="avatar-sm me-3 flex-shrink-0">
              <div class="avatar-title bg-light rounded">
                <img :src="product1" class="avatar-xs" alt="user-pic" />
              </div>
            </div>
            <div class="flex-grow-1">
              <p class="mb-1 fs-sm text-muted">Fashion</p>
              <h6 class="mt-0 mb-3 fs-md">
                <b-link href="#!" class="text-reset">Blive Printed Men Round
                  Neck</b-link>
              </h6>
              <div class="text-muted fw-medium d-none">$<span class="product-price">327.49</span></div>
              <div class="input-step">
                <b-button type="button" variant="white" class="minus">–</b-button>
                <input type="number" class="product-quantity" value="2" min="0" max="100" readonly>
                <b-button type="button" variant="white" class="plus">+</b-button>
              </div>
            </div>
            <div class="ps-2 d-flex flex-column justify-content-between align-items-end">
              <b-button type="button" variant="ghost-primary" size="sm" class="btn-icon remove-cart-btn"
                @click="removeProduct"><i class="ri-close-fill fs-lg"></i></b-button>
              <h5 class="mb-0">$ <span class="product-line-price">654.98</span></h5>
            </div>
          </div>
        </div>

        <div class="d-block dropdown-item product text-wrap p-2">
          <div class="d-flex">
            <div class="avatar-sm me-3 flex-shrink-0">
              <div class="avatar-title bg-light rounded">
                <img :src="product5" class="avatar-xs" alt="user-pic" />
              </div>
            </div>
            <div class="flex-grow-1">
              <p class="mb-1 fs-sm text-muted">Sportwear</p>
              <h6 class="mt-0 mb-3 fs-md">
                <b-link href="#!" class="text-reset">Willage Volleyball Ball</b-link>
              </h6>
              <div class="text-muted fw-medium d-none">$<span class="product-price">49.06</span></div>
              <div class="input-step">
                <b-button variant="white" type="button" class="minus">–</b-button>
                <input type="number" class="product-quantity" value="3" min="0" max="100" readonly>
                <b-button variant="white" type="button" class="plus">+</b-button>
              </div>
            </div>
            <div class="ps-2 d-flex flex-column justify-content-between align-items-end">
              <b-button type="button" size="sm" variant="ghost-primary" class="btn-icon remove-cart-btn"
                @click="removeProduct"><i class="ri-close-fill fs-lg"></i></b-button>
              <h5 class="mb-0">$ <span class="product-line-price">147.18</span></h5>
            </div>
          </div>
        </div>

        <div class="d-block dropdown-item product text-wrap p-2">
          <div class="d-flex">
            <div class="avatar-sm me-3 flex-shrink-0">
              <div class="avatar-title bg-light rounded">
                <img :src="product10" class="avatar-xs" alt="user-pic" />
              </div>
            </div>
            <div class="flex-grow-1">
              <p class="mb-1 fs-sm text-muted">Fashion</p>
              <h6 class="mt-0 mb-3 fs-md">
                <b-link href="#!" class="text-reset">Cotton collar tshirts for
                  men</b-link>
              </h6>
              <div class="text-muted fw-medium d-none">$<span class="product-price">53.33</span></div>
              <div class="input-step">
                <b-button variant="white" type="button" class="minus">–</b-button>
                <input type="number" class="product-quantity" value="3" min="0" max="100" readonly>
                <b-button variant="white" type="button" class="plus">+</b-button>
              </div>
            </div>
            <div class="ps-2 d-flex flex-column justify-content-between align-items-end">
              <b-button type="button" size="sm" variant="ghost-primary" class="btn-icon remove-cart-btn"
                @click="removeProduct"><i class="ri-close-fill fs-lg"></i></b-button>
              <h5 class="mb-0">$ <span class="product-line-price">159.99</span></h5>
            </div>
          </div>
        </div>

        <div class="d-block dropdown-item product text-wrap p-2">
          <div class="d-flex">
            <div class="avatar-sm me-3 flex-shrink-0">
              <div class="avatar-title bg-light rounded">
                <img :src="product11" class="avatar-xs" alt="user-pic" />
              </div>
            </div>
            <div class="flex-grow-1">
              <p class="mb-1 fs-sm text-muted">Fashion</p>
              <h6 class="mt-0 mb-3 fs-md">
                <b-link href="#!" class="text-reset">Jeans blue men boxer</b-link>
              </h6>
              <div class="text-muted fw-medium d-none">$<span class="product-price">164.37</span></div>
              <div class="input-step">
                <b-button variant="white" type="button" class="minus">–</b-button>
                <input type="number" class="product-quantity" value="1" min="0" max="100" readonly>
                <b-button variant="white" type="button" class="plus">+</b-button>
              </div>
            </div>
            <div class="ps-2 d-flex flex-column justify-content-between align-items-end">
              <b-button type="button" variant="ghost-primary" size="sm" class="btn-icon remove-cart-btn"
                @click="removeProduct"><i class="ri-close-fill fs-lg"></i></b-button>
              <h5 class="mb-0">$ <span class="product-line-price">164.37</span></h5>
            </div>
          </div>
        </div>

        <div class="d-block dropdown-item product text-wrap p-2">
          <div class="d-flex">
            <div class="avatar-sm me-3 flex-shrink-0">
              <div class="avatar-title bg-light rounded">
                <img :src="product8" class="avatar-xs" alt="user-pic" />
              </div>
            </div>
            <div class="flex-grow-1">
              <p class="mb-1 fs-sm text-muted">Fashion</p>
              <h6 class="mt-0 mb-3 fs-md">
                <b-link href="#!" class="text-reset">Full Sleeve Solid Men
                  Sweatshirt</b-link>
              </h6>
              <div class="text-muted fw-medium d-none">$<span class="product-price">180.00</span></div>
              <div class="input-step">
                <b-button variant="white" type="button" class="minus">–</b-button>
                <input type="number" class="product-quantity" value="1" min="0" max="100" readonly>
                <b-button variant="white" type="button" class="plus">+</b-button>
              </div>
            </div>
            <div class="ps-2 d-flex flex-column justify-content-between align-items-end">
              <b-button type="button" variant="ghost-primary" size="sm" class="btn-icon remove-cart-btn"
                @click="removeProduct"><i class="ri-close-fill fs-lg"></i></b-button>
              <h5 class="mb-0">$ <span class="product-line-price">180.00</span></h5>
            </div>
          </div>
        </div>

        <div id="count-table">
          <table class="table table-borderless mb-0  fw-semibold">
            <tbody>
              <tr>
                <td>Sub Total :</td>
                <td class="text-end cart-subtotal">$1306.52</td>
              </tr>
              <tr>
                <td>Discount <span class="text-muted">(Steex15)</span>:</td>
                <td class="text-end cart-discount">- $195.98</td>
              </tr>
              <tr>
                <td>Shipping Charge :</td>
                <td class="text-end cart-shipping">$65.00</td>
              </tr>
              <tr>
                <td>Estimated Tax (12.5%) : </td>
                <td class="text-end cart-tax">$163.31</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </SimpleBar>
    <div class="p-3 border-bottom-0 border-start-0 border-end-0 border-dashed border" id="checkout-elem">
      <div class="d-flex justify-content-between align-items-center pb-3">
        <h5 class="m-0 text-muted">Total:</h5>
        <div class="px-2">
          <h5 class="m-0 cart-total">$1338.86</h5>
        </div>
      </div>

      <router-link to="/ecommerce/checkout" class="btn btn-info text-center w-100">
        Checkout
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>
