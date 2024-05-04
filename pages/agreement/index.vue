<template>
  <div class="agreement-view view">
    <div class="user-agreement cloudea-area">
      <h1>用户协议</h1>
      <p>请仔细阅读以下用户协议，使用本论坛即表示您已接受本协议的所有条款。</p>

      <div class="agreement-item">
        <h2>一、前言</h2>
        <p>
          本协议由[论坛名称]（以下简称“本论坛”）与用户（以下简称“您”）共同签订。
        </p>
      </div>

      <div class="agreement-item">
        <h2>二、服务内容</h2>
        <p>1. 本公司提供包括但不限于[具体服务内容]的服务（以下简称“服务”）。</p>
        <p>
          2. 本公司有权随时对服务内容进行修改、更新或升级，而无须事先通知用户。
        </p>
      </div>

      <div class="agreement-item">
        <h2>三、用户义务</h2>
        <p>
          1.
          您应遵守中华人民共和国的法律法规，不得利用本公司服务从事任何非法活动。
        </p>
        <p>
          2.
          您应保证在使用本公司服务过程中提供的信息真实、准确、完整，并承担因提供虚假信息所产生的法律责任。
        </p>
        <p>
          3.
          您不得利用本公司服务进行任何侵犯他人权益的行为，包括但不限于侵犯知识产权、隐私权、名誉权等。
        </p>
        <p>
          4.
          您应妥善保管您的账号和密码，因您账号和密码泄露或被盗用所产生的后果，由您自行承担。
        </p>
      </div>
      <div class="agreement-item">
        <h2>四、知识产权</h2>
        <p>
          1.
          本公司及其关联公司对本公司的服务及其相关软件、技术、数据等享有完整的知识产权。
        </p>
        <p>
          2.
          未经本公司书面许可，您不得复制、传播、修改、出售或以其他方式使用本公司的服务及其相关软件、技术、数据等。
        </p>
      </div>
      <div class="agreement-item">
        <h2>五、免责条款</h2>
        <p>
          1.
          本公司对于因网络故障、自然灾害、政策调整等不可抗力因素导致的服务中断或延迟，不承担任何责任。
        </p>
        <p>
          2.
          本公司对于您在使用本公司服务过程中产生的任何直接、间接、偶然、特殊或惩罚性损失，不承担任何责任。
        </p>
      </div>
      <div class="agreement-item">
        <h2>六、协议变更与终止</h2>
        <p>
          1.
          本公司有权随时修改本协议的全部或部分条款，修改后的协议自发布之日起生效。您应定期查看并了解本协议的最新内容。
        </p>
        <p>
          2. 如您违反本协议的规定，本公司有权随时终止您的账号并停止提供服务。
        </p>
      </div>
      <div class="agreement-item">
        <h2>七、争议解决</h2>
        <p>
          1.
          如因本协议引起的或与本协议有关的任何争议，应首先通过友好协商解决；协商不成的，任何一方均有权向[公司名称]所在地人民法院提起诉讼。
        </p>
      </div>
      <div class="agreement-item">
        <h2>八、其他</h2>
        <p>
          1.
          本协议自您使用本公司服务之日起生效，并持续有效至您停止使用本公司服务或本协议被终止为止。
        </p>
        <p>
          2. 本协议的最终解释权归本公司所有。如有任何疑问，请随时与本公司联系。
        </p>
      </div>

      <div class="agreement-footer">
        <button @click="acceptAgreement">接受协议</button>
        <button @click="rejectAgreement">拒绝协议</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserAgreement',
  methods: {
    acceptAgreement() {
      // 这里可以添加接受协议后的逻辑，比如跳转到论坛首页或更新用户状态
      this.$emit('agreementAccepted')
    },
    rejectAgreement() {
      // 这里可以添加拒绝协议后的逻辑，比如跳转到登录页或显示错误消息
      this.$emit('agreementRejected')
    }
  }
}
</script>

<style scoped>
.user-agreement {
  padding: 20px;

  .agreement-item {
    margin-top: 20px;
  }
}

.agreement-footer {
  margin-top: 20px;
  text-align: right;
}
</style>
