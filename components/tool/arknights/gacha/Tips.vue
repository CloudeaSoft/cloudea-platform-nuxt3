<script setup lang="ts"></script>

<template>
  <div class="tips-main">
    <h2 class="tips-main-title">使用说明</h2>
    <ul class="tips-main-text">
      <li>
        <div class="title">
          1、使用浏览器打开鹰角官网，并登录需要查询记录的账号。 (注：B服请点击注册，选择使用bilibili账号登录)
        </div>
        <span>· 鹰角：</span
        ><el-link href="https://ak.hypergryph.com" target="blank"
          >https://ak.hypergryph.com</el-link
        >
      </li>
      <li>
        <el-divider content-position="left"></el-divider>
        <div class="title">2、复制下面的链接到浏览器打开，注意官服和B服需要复制不同的链接</div>
        <span>· 官服：</span
        ><el-link href="https://web-api.hypergryph.com/account/info/hg" target="blank">
          https://web-api.hypergryph.com/account/info/hg</el-link
        ><br />
        <span>· B服：</span
        ><el-link href="https://web-api.hypergryph.com/account/info/ak-b" target="blank">
          https://web-api.hypergryph.com/account/info/ak-b</el-link
        >
      </li>
      <li>
        <el-divider content-position="left"></el-divider>
        <div class="title">
          3、复制页面内的
          <span style="color: red; font-weight: 700px">所有!</span>
          内容，粘贴到输入框中。 (注：电脑端可以用Ctrl+A快捷键选中所有内容，再用Ctrl+C复制；手机端长按文本出现全选按钮)
        </div>
      </li>
      <li>
        <el-divider content-position="left"></el-divider>
        <div class="title">4、点击[获取寻访记录]即可查询到抽卡记录，再点击[生成分析图表]就可看到分析图表</div>
      </li>
    </ul>
    <h3 class="tips-main-warning">
      警告：通过该教程获取到的文本凭证与账号安全有高度关联，切勿泄露。在鹰角官网退出登录可以销毁该凭证
    </h3>
  </div>
</template>

<style scoped>
  .tips-main {
    padding: 20px;
  }
  .tips-main-title {
    margin-bottom: 20px;
  }
  .tips-main-text {
    padding-right: 40px;
  }

  .tips-main-text li .title{
    margin-bottom: 5px;
  }

  .tips-main-warning {
    margin-top: 40px;
    color: red;
    font-weight: 400;
  }
</style>
