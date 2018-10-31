export const DatepickerMixin = {
  props: {
    value: {
      required: true
    },
    type: {
      default: 'date'
    },
    placeholder: {
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    currentValue(newValue) {
      this.$emit('input', this.GMTToStr(newValue))
    },
    value(newValue) {
      this.currentValue = newValue
    }
  },
  methods: {
    GMTToStr(time) {
      if (time) {
        let date = new Date(time)
        let Str = date.getFullYear() + '-' +
          (date.getMonth() + 1) + '-' +
          date.getDate()
        return Str
      }
      return null
    }
  }
}
