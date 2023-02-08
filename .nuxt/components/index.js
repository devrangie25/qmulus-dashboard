export const CmBanner = () => import('../../components/molecules/Banner.vue' /* webpackChunkName: "components/cm-banner" */).then(c => wrapFunctional(c.default || c))
export const CmWidget = () => import('../../components/molecules/Widget.vue' /* webpackChunkName: "components/cm-widget" */).then(c => wrapFunctional(c.default || c))
export const CmChartsBar = () => import('../../components/molecules/charts/Bar.vue' /* webpackChunkName: "components/cm-charts-bar" */).then(c => wrapFunctional(c.default || c))
export const CmChartsDoughnut = () => import('../../components/molecules/charts/Doughnut.vue' /* webpackChunkName: "components/cm-charts-doughnut" */).then(c => wrapFunctional(c.default || c))
export const CmChartsLine = () => import('../../components/molecules/charts/Line.vue' /* webpackChunkName: "components/cm-charts-line" */).then(c => wrapFunctional(c.default || c))
export const CmChartsPie = () => import('../../components/molecules/charts/Pie.vue' /* webpackChunkName: "components/cm-charts-pie" */).then(c => wrapFunctional(c.default || c))
export const CmFrameSideBarLeft = () => import('../../components/molecules/frame/SideBarLeft.vue' /* webpackChunkName: "components/cm-frame-side-bar-left" */).then(c => wrapFunctional(c.default || c))
export const CoDashboard = () => import('../../components/organisms/Dashboard.vue' /* webpackChunkName: "components/co-dashboard" */).then(c => wrapFunctional(c.default || c))

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
