import PickerColumn from './picker-column.vue'
import deepClone from '../../utils/deep-clone'
import Vue from 'vue'

// height of th option item
const ITEM_HEIGHT = 34

// Mixins
import Colorable from '../../mixins/colorable'

// Utils
import mixins from '../../utils/mixins'

// Types
import { PropValidator } from 'vue/types/options';
type PickerColumnInstance = InstanceType<typeof PickerColumn>
// TODO
// type columnType = string[] | object[]

interface options extends Vue {
}

export default mixins<options>(
  Colorable
).extend({
  name: 'wv-picker',

  components: {
    PickerColumn,
  },

  props: {
    visible: Boolean,
    confirmText: {
      type: String,
      default: '确定',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    columns: {
      type: Array,
      default: () => [],
    } as PropValidator<Array<Array<object | string>>>,
    valueKey: String,
    visibleItemCount: {
      type: Number,
      default: 7,
      validator: (val: number) => {
        return [3, 5, 7].indexOf(val) > -1
      },
    },
    value: {
      type: Array,
      default: () => [],
    } as PropValidator<any>,
  },

  data () {
    return {
      children: [] as Array<PickerColumnInstance>,
    }
  },

  computed: {
    pickerBodyStyle (): object {
      return {
        height: this.visibleItemCount * ITEM_HEIGHT + 'px',
      }
    },

    simple (): boolean {
      return this.columns.length && !this.columns[0].values
    },
  },

  watch: {
    columns () {
      this.setColumns()
    },

    value (val) {
      this.setValues(val)
    },
  },

  mounted () {
    this.setValues(this.value)
  },

  methods: {
    setColumns (): void {
      const columns = this.columns
      columns.forEach((column, index: number) => {
        this.setColumnValues(index, deepClone(column.values))
      })
    },

    columnValueChange (columnIndex: number): void {
      if (this.simple) {
        this.$emit(
          'change',
          this,
          this.getColumnValue(0),
          this.getColumnIndex(0)
        )
      } else {
        this.$emit('change', this, this.getValues(), columnIndex)
      }
    },

    // get column instance
    getColumn (columnIndex: number) {
      let { children } = this
      return children.find((child, index) => {
        return (
          child.$options.name === 'wv-picker-column' &&
          !child.divider &&
          index === columnIndex
        )
      })
    },

    // get column value by index
    getColumnValue (columnIndex: number): any {
      const column = this.getColumn(columnIndex)
      return column && column.getValue()
    },

    // set column value by index
    setColumnValue (columnIndex: number, value: any): void {
      const column = this.getColumn(columnIndex)
      column && column.setValue(value)
    },

    // set options of column by index
    setColumnValues (columnIndex: number, values: Array<any>): void {
      const column = this.columns[columnIndex]
      if (column) {
        column.values = values
      }
    },

    // get options of column by index
    getColumnValues (columnIndex: number): Array<any> {
      return (this.columns[columnIndex]).values
    },

    // get values of all columns
    getValues (): Array<any> {
      return this.children.map(child => child.getValue())
    },

    // set values of all columns
    setValues (values: Array<any>): void {
      values.forEach((value, index) => {
        this.setColumnValue(index, value)
      })
    },

    // get column option index by column index
    getColumnIndex (columnIndex: number): number {
      return (this.getColumn(columnIndex)).currentIndex
    },

    // set column option index by column index
    setColumnIndex (columnIndex: number, index: number): void {
      const column = this.getColumn(columnIndex)
      column && column.setIndex(index)
    },

    // get indexes of all columns
    getIndexes (): number[] {
      return this.children.map(child => child.currentIndex)
    },

    // set indexes of all columns
    setIndexes (indexes: Array<number>): void {
      indexes.forEach((optionIndex, columnIndex) => {
        this.setColumnIndex(columnIndex, optionIndex)
      })
    },

    // cancel event hand: Array<number>l: voider
    onCancel (): void {
      this.$emit('cancel', this)
      this.$emit('update:visible', false)
    },

    // confirm event handler
    onConfirm (): void {
      this.$emit('input', this.getValues())
      this.$emit('confirm', this)
      this.$emit('update:visible', false)
    },
  },
})
