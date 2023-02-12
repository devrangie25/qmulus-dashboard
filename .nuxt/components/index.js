export const CmBanner = () => import('../../components/molecules/Banner.vue' /* webpackChunkName: "components/cm-banner" */).then(c => wrapFunctional(c.default || c))
export const CmWidget = () => import('../../components/molecules/Widget.vue' /* webpackChunkName: "components/cm-widget" */).then(c => wrapFunctional(c.default || c))
export const CmChartjsBar = () => import('../../components/molecules/chartjs/Bar.vue' /* webpackChunkName: "components/cm-chartjs-bar" */).then(c => wrapFunctional(c.default || c))
export const CmChartjsDoughnut = () => import('../../components/molecules/chartjs/Doughnut.vue' /* webpackChunkName: "components/cm-chartjs-doughnut" */).then(c => wrapFunctional(c.default || c))
export const CmChartjsLine = () => import('../../components/molecules/chartjs/Line.vue' /* webpackChunkName: "components/cm-chartjs-line" */).then(c => wrapFunctional(c.default || c))
export const CmChartjsPie = () => import('../../components/molecules/chartjs/Pie.vue' /* webpackChunkName: "components/cm-chartjs-pie" */).then(c => wrapFunctional(c.default || c))
export const CmApexjsApexChartDynamic = () => import('../../components/molecules/apexjs/ApexChartDynamic.vue' /* webpackChunkName: "components/cm-apexjs-apex-chart-dynamic" */).then(c => wrapFunctional(c.default || c))
export const CmFrameSideBarLeft = () => import('../../components/molecules/frame/SideBarLeft.vue' /* webpackChunkName: "components/cm-frame-side-bar-left" */).then(c => wrapFunctional(c.default || c))
export const CmFrameApexSideBarLeft = () => import('../../components/molecules/frame/apex/SideBarLeft.vue' /* webpackChunkName: "components/cm-frame-apex-side-bar-left" */).then(c => wrapFunctional(c.default || c))
export const CoChartjsDashboard = () => import('../../components/organisms/chartjs/Dashboard.vue' /* webpackChunkName: "components/co-chartjs-dashboard" */).then(c => wrapFunctional(c.default || c))
export const CoApexDashboard = () => import('../../components/organisms/apex/Dashboard.vue' /* webpackChunkName: "components/co-apex-dashboard" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
