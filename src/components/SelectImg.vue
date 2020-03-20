<template>
    <el-dialog
        title="提示"
        :visible.sync="accuseVisible"
        width="70%"
        :before-close="closeDialog"
    >
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
    </el-dialog>
</template>
<script>
export default {
  name: 'Form',
  data(){
      return{
      }
  },
  props: {
    accuseVisible: {
      type: Boolean,
      default: function () {
        return false
      }
    }
  },
  watch: {
    accuseVisible (newValue) {
      this.accuseVisible = newValue
    }
  },
  methods: {
    closeDialog () {
      this.$emit('close-dialogStatus', true)
    }
  }
}
</script>