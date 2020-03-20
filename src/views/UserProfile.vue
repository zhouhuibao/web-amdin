<template>
  <div>
    <!-- <el-button type="primary"
               @click="showDilog">弹出框</el-button> -->
    <!-- <Form :accuseVisible="accuseVisible"
          @close-dialogStatus="Close_dialog" /> -->
          <select-image></select-image>
  </div>
</template>
<script>
import Form from '@/components/SelectImg'
import selectImage from '@/components/SelectImage'
export default {
  components: { Form,selectImage },
  data () {
    return {
      accuseitem: {},
      accuseVisible: false
    }
  },
  methods: {
    Close_dialog (val) {
      this.accuseVisible = false
    },
    showDilog () {
      this.accuseVisible = true
    }
  }
}

</script>