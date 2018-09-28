<!--
描述：table 组件的二次封装
开发人：sunlf
开发日期：2017年8月17日
-->

<template lang="pug">
  div.kalix-article
    keep-alive
      div.patientmanagement
        div.block
          div.block-box
            ul.block-ul
              li.block-li(v-for="site in sites")
                span.block-span  {{ site.name }}
                input.block-input(v-model="input")
          div.block-boxs
            el-table(:data="gridData" border="1px solid #3465cb" style="width: 100%;")
              el-table-column( fixed="left" prop="" label="" width="60" class="el-icon-caret-right" align="center")
              el-table-column(prop="diagnosis" label="诊断" width="300" align="center"  )
              el-table-column(prop="name" label="术式" width="300" align="center")
              el-table-column(prop="date" label="日期" width="300" align="center")
              el-table-column( prop="installment" label="分期" align="center")
          div.bottom
            div.bottom-box
              ul.right_ul
                li.right_li
                  button 保存
                li.right_li
                  button.el-icon-search 退出
        div.box
          ul.right_ul
            li.right_li
              button(v-on:onItemClick="onChild1_AItemClick") 增加照片
            li.right_li
              button(v-on:onItemClick="onChild1_AItemClick") 删除照片
          ul.right_ul
            li.right_li(v-for="photo in photos")
              img.right_img(v-bind:src="photo.url")
</template>

<script>
  export default {
    name: 'kalix-tableone',
    data () {
      return {
        sites: [
          { name: '姓名' },
          { name: '性别' },
          { name: '出生日期' },
          { name: '年龄' },
          { name: '身份证号' },
          { name: '床位号' },
          { name: '住院号' },
          { name: '主管医生' },
          { name: '入院日期' },
          { name: '出院日期' },
          { name: '身高 （cm）' },
          { name: '体重 （kg）' },
          { name: 'BMI' },
          { name: '血压' },
          { name: '特种疾患' },
          { name: '特种疾患描述' },
          { name: '过敏史' },
          { name: '医疗类别' },
          { name: '是否出院' },
          { name: '本人联系方式' },
          { name: '家属联系方式' },
          { name: '省' },
          { name: '市' },
          { name: '区' },
          { name: '详细地址' },
          { name: '备注' },
          { name: 'Harris评分' },
          { name: 'HSS评分' }
        ],
        input: '',
        gridData: [{
          imgurl: '/static/images/arrow.png',
          diagnosis: '病理性骨科',
          name: '术式',
          date: '2018-08-04',
          installment: '内科'
        }, {
          diagnosis: '病理性骨科',
          name: '术式',
          date: '2018-08-04',
          installment: '内科'
        }, {
          diagnosis: '病理性骨科',
          name: '术式',
          date: '2018-08-04',
          installment: '内科'
        }, {
          diagnosis: '病理性骨科',
          name: '术式',
          date: '2018-08-04',
          installment: '内科'
        }],
        photos: [{
          url: '/static/images/logo.png'
        },
        {
          url: '/static/images/logo.png'
        },
        {
          url: '/static/images/logo.png'
        },
        {
          url: '/static/images/logo.png'
        }
        ]
      }
    },
    methods: {
    }
  }
</script>
<style scoped lang="stylus" type="text/stylus">
  .Patientmanagement {
    width: 100%;
  }
    .block{
      width:69% ;
      float: left;
    }
      .block-box{
        width: 98%;
        height:500px;
        overflow-y:scroll;
        margin-bottom:100px;
      }
        .block-ul{
          width: 100%;
          list-style: none;
        }
          .block-li{
            width: 48%;
            display: inline-block;
            padding: 10px 0;
            height: 40px;
          }
            .block-span{
              width: 20%;
              display: inline-block;
              font-size: 18px;
              color: #3465cb;
              text-align: left;
            }
            .block-input{
              width: 50%;
              height: 30px;
              line-height: 30px;
              border:1px solid #3465cb;
            }
    .block-boxs {
      width: 98%;
      margin-top: 30px;
      height: 200px;
      overflow: scroll;
    }
      .row-expand-cover td:last-child .el-icon-arrow-right{visibility: hidden;}
  .bottom{width: 80%;height: 60px;}
    .bottom-box{width: 30%;float: right;}
  .box{width: 29%;float: right;border: 1px solid #3465cb;height: 800px;}
    .right_ul{
      width:80%;
      margin: 20px 10% 0 10%;
    }
      .right_li{
        width: 48%;
        display: inline-block;
        text-align: center;
      }
        button{
          width: 100px;
          height: 30px;
          border-radius: 5px;
          border: none;
          font-size: 16px;
          outline:none;
        }
        .right_li:first-child button{ color: #3465cb;}
        .right_li:last-child button{color: red}
        .right_img{
          width: 150px;
          height: 150px;
          margin-bottom: 20px;
          border: 1px solid #3465cb;
        }
</style>
