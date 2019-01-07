import '../../scss/badge.scss'

import mixins from '../../utils/mixins'

import Colorable from '../../mixins/colorable'

export default mixins(Colorable).extend({
  name: 'wv-badge',

  props: {
    color: String,
    isDot: Boolean,
  },
})
