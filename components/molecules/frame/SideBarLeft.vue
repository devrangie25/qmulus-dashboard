<template>
  <div class="col-auto">
    <div class="d-flex flex-column min-vh-100">
      <div class="mx-auto mb-2">
        <!-- <b-img
          width="190px"
          :src="
            require('../../../../../public/images/CREWBLOOM_FINAL_LOGO_variation_white_edited.png')
          "
        ></b-img> -->
        <b-img
          width="190px"
          src="https://picsum.photos/250/250/?image=54"
          alt="Image 1"
        ></b-img>
      </div>
      <b-nav vertical justified>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
        <!-- <b-nav-item
          :to="nav.to"
          v-for="(nav, ind) in navItemsFiltered"
          :key="ind"
          class="nav-item nv-item"
          :disabled="disableNav.includes(routeName)"
        >
          <b-button
            :to="nav.to"
            block
            class="d-flex justify-content-start align-items-center cb-nav-btn"
            :class="{
              'bg-primary-light-green-1 text-primary-dark-green-1':
                activeRoute(nav),
            }"
            style="width: 100%; height: 48px"
            @mouseenter="indHover = ind"
            @mouseleave="indHover = null"
          >
            <component
              :is="nav.component"
              :active="activeRoute(nav) || indHover === ind"
              :name="nav.name"
              class="nav-icon me-2"
            />
            <span :class="`f-header-5 f-bold-4`">
              {{ nav.title }}
            </span>
          </b-button>
        </b-nav-item> -->
      </b-nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'side-bar',

  props: {
    permission: {
      type: String,
      default: 'admin',
    },
    url: {
      type: String,
      default: '',
    },
    routeName: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      indHover: null,
      navItems: [
        {
          component: 'cb-a-svg-nav-dashboard',
          name: 'dashboard-nav-svg',
          title: 'Dashboard',
          to: '/billing',
          permission: ['admin', 'user'],
        },
        {
          component: 'cb-a-svg-nav-clients',
          name: 'clients-nav-svg',
          title: 'Clients',
          to: '/billing/clients',
          permission: ['admin', 'user'],
        },
        {
          component: 'cb-a-svg-nav-prospects',
          name: 'clients-nav-svg',
          title: 'Prospects',
          to: '/billing/prospects',
          permission: ['admin', 'user'],
        },
        {
          component: 'cb-a-svg-nav-invoices1',
          name: 'invoice-nav-svg',
          title: 'Invoices',
          to: '/billing/invoices',
          permission: ['admin', 'user'],
        },
        {
          component: 'cb-a-svg-nav-product',
          name: 'product-nav-svg',
          title: 'Products',
          to: '/billing/products',
          permission: ['admin', 'user'],
        },
        {
          component: 'cb-a-svg-nav-user-permission',
          name: 'user-permission-nav-svg',
          title: 'User & Permissions',
          to: '/billing/users',
          permission: ['admin', 'user'],
        },
        {
          component: 'cb-a-svg-nav-settings',
          name: 'settings-nav-svg',
          title: 'Settings',
          to: '/billing/settings/update-password',
          permission: ['admin', 'user'],
        },
        // {
        //     component: "cb-a-svg-nav-bank-flow",
        //     name: "bank-flow-nav-svg",
        //     title: "Test Bank Page",
        //     to: '/billing/test-banks',
        //     permission: ["admin", "user"],
        // },
        // {
        //     component: "cb-a-svg-nav-bank-flow",
        //     name: "bank-flow-nav-svg",
        //     title: "Test Pay Invoices",
        //     to: '/billing/test-pay-invoice',
        //     permission: ["admin", "user"],
        // },
        {
          component: 'cb-a-svg-nav-invoices1',
          name: 'invoice-nav-svg',
          title: 'Invoice',
          to: '/pay-invoice',
          permission: ['prospect'],
        },
      ],
      disableNav: ['auth.prospects.payments'],
    }
  },

  computed: {
    navItemsFiltered() {
      return this.navItems.filter((nav) => {
        return nav.permission.includes(this.permission)
      })
    },

    currentUrl() {
      return window.location.pathname
    },

    getActiveRoute() {
      return this.navItems.find((nav) => {
        return nav.to === this.currentUrl
      })
    },
  },

  methods: {
    activeRoute(nav) {
      if (this.getActiveRoute)
        return this.getActiveRoute.to === nav.to ? true : false
      if (this.disableNav.includes(this.routeName))
        return this.disableNav.includes(this.routeName)
      const splitCurrentUrl = this.currentUrl.split('/').slice(0, 3).join('/')
      const { to } = nav
      return splitCurrentUrl === to ? true : false
    },
  },
}
</script>

<style scoped>
.nv-item {
  margin-bottom: -0.6rem !important;
}
</style>
