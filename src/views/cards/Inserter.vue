<template>
  <div class="insertDialog">
    <div class="insert-title">
      <span>标题: </span>
      <el-input id="input-title" style="display: inline;" v-model="title" ></el-input>
    </div>
    <div class="insert-product-id">生产编号:
      <el-input id="input-product-id" style="display: inline;" v-model="productId"/>
    </div>
    <div class="insert-product-date" @click="OpenDatePannel">生产日期:
      <el-date-picker
          v-model="productDate"
          type="date"
          placeholder="请选择生产日期">
        </el-date-picker>
      <!--<input id="input-product-date" v-model="productDate"/>-->
    </div>
    <div class="insert-struct-id">结构号:
      <el-input id="input-struct-id" style="display: inline;" v-model="structId"/>
    </div>
    <div class="insert-plan-id">计划编号:
      <el-input id="input-plan-id" style="display: inline;" v-model="planId"/>
    </div>
    <hr class="dashed-line-1" />
    <div class="insert-product-type">产品规格:
      <el-input id="input-product-type-id" style="width: 300px; display: inline;" v-model="productType"/>
    </div>
    <div class="insert-complete-date">完工日期:
      <el-date-picker
          v-model="completeDate"
          type="date"
          placeholder="请选择完工日期">
      </el-date-picker>
    </div>
    <div class="insert-count">数量:
      <el-input id="input-count-id" style="display: inline;" v-model="count"/>
    </div>
    <div class="insert-content"><div>喷码内容:</div>
      <textarea id="input-content-id" style="position: relative; right: 5px; width: 85%; height: 150px" v-model="content"/>
      <div class="mosaic"></div>
    </div>
    <div class="insert-font-height">字符高度:
      <el-input id="input-font-height-id" style="display: inline;" v-model="fontHeight"/>
    </div>
    <div class="insert-note">备注:
      <el-input id="input-note-id" style="position: relative; width: 92%; right: 0px;" v-model="note"/>
    </div>
    <hr class="dashed-line-2" />
    <div class="appendix">
      <div class="appendix-cid">序号:
        <el-input id="input-appendix-id" v-model="appendixId"/>
      </div>
      <div class="appendix-order">
        工序:
        <el-input id="input-appendix-order-id" v-model="order"/>
      </div>
      <div class="appendix-material-code">
        材料编码:
        <el-input id="input-appendix-material-id" v-model="materialId"/>
      </div>
      <div class="appendix-material-name">
        材料名称:
        <el-input id="input-appendix-material-name-id" v-model="materialName"/>
      </div>
      <div class="appendix-material-type">
        规格:
        <el-input id="input-appendix-material-type-id" style="width: 130px; right: 0px" v-model="materialType"/>
      </div>
      <div class="appendix-material-unit">
        单位:
        <el-input id="input-appendix-material-unit-id" style="width: 130px; right: 0px" v-model="materialUnit"/>
      </div>
      <div class="appendix-material-plan-use">
        计划用量:
        <el-input id="input-appendix-material-plan-use-id" style="width: 130px; right: 0px" v-model="planUse"/>
      </div>
      <div class="appendix-material-give-use">
        领料数量:
        <el-input id="input-appendix-material-give-use-id" style="width: 130px; right: 0px" v-model="give"/>
      </div>
      <div class="appendix-material-real-use">
        实际用量:
        <el-input id="input-appendix-material-real-use-id" style="width: 130px; right: 0px" v-model="realUse"/>
      </div>
    </div>
    <div class="buttons">
      <button @click=submit style="width: 100px;position: relative; left: 30px">提交</button>
      <button style="width: 100px; position: relative; left: 60px">取消</button>
    </div>

  </div>
</template>

<script setup lang="ts" name="Inserter">

import axios from "axios";
import {useCardStore} from "@/store/card";
import {ref} from "vue";

const title = ref('') //标题
const productId = ref('') //产品编号
const productDate = ref('') //生产日期
const structId = ref('') //结构号
const planId = ref('') //计划编号
const productType = ref('') //产品规格
const completeDate = ref('') //完工日期
const count = ref('') //数量
const content = ref('') //喷马内容
const fontHeight = ref('') //字符高度
const note = ref('') //备注
const appendixId = ref('') //附件编号
const order = ref('') //附件获取工序
const materialId = ref('') //附件材料编号
const materialName = ref('') //附件材料名称
const materialType = ref('') //附件材料规格
const materialUnit = ref('')  //附件单位
const planUse = ref('') //附件计划用量
const give = ref('') //附件领料数量
const realUse = ref('') //附件实际用量

const OpenDatePannel = () => {

}

const GetCardObject = () => {
}

const submit = () => {
  axios.post(
      "/interface/api/write/", {
          "title": title.value,
          "productId":productId.value,
          "productDate":productDate.value,
          "structId":structId.value,
          "planId":planId.value,
          "productType":productType.value,
          "completeDate":completeDate.value,
          "count":count.value,
          "content":content.value,
          "fontHeight":fontHeight.value,
          "note":note.value,
          "appendixId":appendixId.value,
          "order":order.value,
          "materialId":materialId.value,
          "materialName":materialName.value,
          "materialType":materialType.value,
          "materialUnit":materialUnit.value,
          "planUse":planUse.value,
          "give":give.value,
          "realUse":realUse.value
      }, {headers:{ "Content-Type": "application/json" }}
  ).then(res => {
    console.log(res);
  })
}

</script>

<style scoped>
.insertDialog{
  position: relative;
  left: 10%;
  top: 5%;
  width: 80%;
  height: 90%;
  background-color: antiquewhite;
  border: 1px solid #242f42;
  border-radius: 15px;
  text-align: center
}

.insert-title{
  position: relative;
  display: inline-block;
  justify-self: center;
  top: 1%;
  text-align: left;
}

.insert-product-id{
  position: absolute;
  justify-self: left;
  left: 5%;
  top: 7%;
}

.insert-product-date{
  position: absolute;
  float: left;
  justify-self: left ;
  left: 28%;
  top: 7%;
}

.insert-struct-id{
  position: absolute;
  float: left;
  justify-self: left ;
  left: 53%;
  top: 7%;
}

.insert-plan-id{
  position: absolute;
  float: left;
  justify-self: left ;
  right: 5%;
  top: 7%;
}

.insert-product-type{
  position: absolute;
  float: left;
  justify-self: left ;
  left: 5%;
  top: 18%;
}

.insert-complete-date{
  position: absolute;
  float: left;
  justify-self: left ;
  left: 40%;
  top: 18%;
}

.insert-count{
  position: absolute;
  float: left;
  justify-self: left ;
  right: 5%;
  top: 18%;
}

.insert-font-height{
  position: absolute;
  float: left;
  justify-self: left ;
  left: 5%;
  top: 55%;
}

.insert-note{
  position: absolute;
  float: left;
  justify-self: left ;
  right: 4%;
  width: 70%;
  top: 55%;
}

.insert-content{
  position: absolute;
  float: left;
  justify-self: left ;
  left: 5%;
  width: 90%;
  top: 27%;
  text-align: left;
}

.mosaic{
  position: relative;
  float: right;
  justify-self: right ;
  right: 0%;
  top: 0%;
  background-color: #99a9bf;
  width: 150px;
  height: 150px;
}

.dashed-line-1{
  position: relative;
  top: 11%;
  left: 5%;
  width: 90%;
  opacity: 60%;
  border: 1px dashed black
}

.dashed-line-2{
  position: absolute;
  bottom: 37%;
  left: 5%;
  width: 90%;
  opacity: 60%;
  border: 1px dashed black
}

.appendix{
  position: absolute;
  bottom: 12%;
  left: 5%;
  width: 90%;
  height: 150px;
}

.appendix-cid{
  position: absolute;
  float: left;
  justify-self: left ;
  left: 0%;
  top: 0%;
}

.appendix-order{
  position: absolute;
  float: left;
  justify-self: left ;
  left: 25%;
  top: 0%;
}

.appendix-material-code{
  position: absolute;
  float: left;
  justify-self: left ;
  left: 50%;
  top: 0%;
}

.appendix-material-name{
  position: absolute;
  float: left;
  justify-self: left ;
  right: 0%;
  top: 0%;
}

.appendix-material-type{
  position: absolute;
  float: left;
  justify-self: left ;
  left: 0%;
  top: 55%;
}

.appendix-material-unit{
  position: absolute;
  float: left;
  justify-self: left ;
  left: 20%;
  top: 55%;
}
.appendix-material-plan-use{
  position: absolute;
  float: left;
  justify-self: left ;
  left: 40%;
  top: 55%;
}
.appendix-material-give-use{
  position: absolute;
  float: left;
  justify-self: left ;
  left: 60%;
  top: 55%;
}
.appendix-material-real-use{
  position: absolute;
  float: left;
  justify-self: left ;
  right: 0%;
  top: 50%;
}
.buttons{
  position: absolute;
  bottom: 5%;
  right: 10%;
}

</style>