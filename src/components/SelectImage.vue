<!-- 选择图片 -->
<template>
    <div>
        <div class="checkbox clearfix">
          <div class='imgList' v-for="(item,index) in checkedImgList" :key="item.id">
            <i class="el-icon-close deleteIcon" @click="deleteChecked(item,index)"></i>
            <el-image :src="item.url" style="width: 100%; height: 100px" fit="contain" ></el-image>
          </div>
          <div class='addImg' v-if="checkedImgList.length<9" @click="openImg(page)">
            <i class="el-icon-plus"></i>
          </div>
        </div>
        <el-dialog
          title="选择图片"
          :visible.sync="dialogVisible"
          width="1000px"
          :before-close="handleClose"
          class="imgModel"
        >
          <el-row :gutter="20" class="imgWrap">
            
              <el-col :span="4" v-for="item in allImg" :key="item.id">
                <div
                  class='imgItem'
                  @click='selectImg(item)'
                >
                  <el-image style="width: 100%; height: 120px" fit="contain" :src="item.url"></el-image>
                  <div class='checked' v-if="item.checked">
                    <i class="el-icon-check" style="font-size:40px;color:#fff"></i>
                  </div>
                  <div class="imgName">{{item.fileName}}</div>
                </div>

              </el-col>
          </el-row>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            :page-size="18"
            :current-page="page"
            @current-change="changePage"
          >
          </el-pagination>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="handleYes">确 定</el-button>
          </span>
        </el-dialog>
        
    </div>
</template>

<script>
import {MathRandom} from '@/utils/utils';
import {queryPicture} from '@/api/webRegion' 
export default {
  data() {
    return {
      checkedImgList:[],
      allImg:[],
      dialogVisible:false,
      total:0,
      page:1
    }
  },
//生命周期 - 创建完成（访问当前this实例）
  created() {
    for (let i=0;i<5;i+=1){
      const obj={}
      obj.id = MathRandom();
      obj.url = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg';
      this.checkedImgList.push(obj)
    }
   },
//生命周期 - 挂载完成（访问DOM元素）
   mounted() {
     
   },
   methods: {
     handleClose(){
       this.dialogVisible = false
     },
     changePage(val){
       this.openImg(val)
     },
     openImg(page){
       const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)',
          target:'.el-dialog__body'
        });
        
       const params= {
          pageNum: page,
          pageSize: 18
       }
       queryPicture(params).then(res=>{
         const {rows,total} = res.data;
         rows.forEach(item=>{
           item.checked = false
         })
         this.allImg= rows;
         this.total =total
          loading.close();
       })
       this.dialogVisible = true
     },
     selectImg(record){
       const {allImg} = this;
       const {id} = record;
       allImg.forEach(item=>{
         if(item.id === id){
           item.checked = !item.checked
         }
       })
       this.allImg = allImg
     },
     handleYes(){
       const {allImg} = this;
       const arr = []
       allImg.forEach(item=>{
         if(item.checked){
           arr.push(item)
         }
       })
       this.checkedImgList= arr
       this.dialogVisible=false
     },
     deleteChecked(record,index){
        this.checkedImgList.splice(index,1)
     }
   },
}
</script>
<style scoped lang="less">
/* @import url(); 引入css类 */
@imgHeight:160px;

  .checkbox {
    .imgList {
      position: relative;
      width: 100px;
      height: 100px;
      border: 1px dashed #ccc;
      padding: 5px;
      border-radius: 5px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 10px 10px 0;
      float: left;
      box-sizing: border-box;
      .deleteIcon{
        position: absolute;
        top: 0;
        right: 0;
        border: 1px dashed #ccc;
        cursor: pointer;
        border-right: 0;
        border-top: 0;
        background: #fff;
        z-index: 111;
      }
      img {
        display: block;
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
      }
    }
    .addImg {
      width: 100px;
      height: 100px;
      border: 1px dashed #ccc;
      text-align: center;
      line-height: 100px;
      border-radius: 5px;
      cursor: pointer;
      float: left;
    }
  }

  .imgItem{
    border: 1px solid #ccc;
    cursor: pointer;
    margin-bottom: 20px;
    position: relative;
    .checked{
      height: 120px;
      width: 100%;
      text-align: center;
      line-height: 120px;
      position: absolute;
      background: rgba(0,0,0,0.5);
      top: 0;
      left: 0;
      .checkedIcon {
        color: #fff;
        font-size: 36px;
      }
    }
    .imgName {
        text-align: center;
        line-height: 36px;
        padding: 0 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: 36px;
        border-top: 1px solid #ccc;
      }
    
  }

  
</style>