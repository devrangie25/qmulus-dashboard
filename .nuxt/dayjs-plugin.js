import dayjs from 'dayjs'

export default (context, inject) => {
  context.$dayjs = dayjs
  inject('dayjs', dayjs)
}
