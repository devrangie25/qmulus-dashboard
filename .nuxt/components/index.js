export { default as CmBanner } from '../../components/molecules/Banner.vue'
export { default as CmWidget } from '../../components/molecules/Widget.vue'
export { default as CmChartjsBar } from '../../components/molecules/chartjs/Bar.vue'
export { default as CmChartjsDoughnut } from '../../components/molecules/chartjs/Doughnut.vue'
export { default as CmChartjsLine } from '../../components/molecules/chartjs/Line.vue'
export { default as CmChartjsPie } from '../../components/molecules/chartjs/Pie.vue'
export { default as CmApexjsApexChartDynamic } from '../../components/molecules/apexjs/ApexChartDynamic.vue'
export { default as CmFrameSideBarLeft } from '../../components/molecules/frame/SideBarLeft.vue'
export { default as CmFrameApexSideBarLeft } from '../../components/molecules/frame/apex/SideBarLeft.vue'
export { default as CoApexDashboard } from '../../components/organisms/apex/Dashboard.vue'
export { default as CoChartjsDashboard } from '../../components/organisms/chartjs/Dashboard.vue'

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
