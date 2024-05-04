<script setup lang="ts">
const isZh = ref(true)

const zhText = `一、概述
我们非常重视您的隐私和个人信息保护。本隐私政策详细说明了我们如何收集、使用、存储、共享和保护您的个人信息。在使用我们的服务之前，请仔细阅读本隐私政策。
二、收集的信息
个人信息：我们可能会收集您的姓名、电子邮件地址、电话号码、地址等个人信息，以提供我们的服务或响应您的请求。
使用数据：当您使用我们的服务时，我们可能会收集有关您使用习惯的信息，例如您访问的页面、您使用的功能、您的设备信息等。
Cookie和类似技术：我们可能会使用Cookie、像素标签等跟踪技术来收集有关您使用我们服务的信息。
三、使用您的信息
提供服务：我们使用您的信息来提供、维护和改进我们的服务。
通信：我们可能会使用您的联系信息与您沟通，例如发送更新、促销活动或客户服务消息。
广告：我们可能会使用您的信息来展示与您兴趣相关的广告。
合规性和法律要求：我们可能会根据法律要求或为了遵守法律程序而使用您的信息。
四、共享您的信息
第三方服务提供者：我们可能会与第三方服务提供者共享您的信息，以便他们为我们提供服务，例如数据分析、支付处理等。
法律要求：我们可能会在法律要求或为了遵守法律程序的情况下共享您的信息。
五、您的权利 访问和更正：您有权访问和更正我们持有的您的个人信息。
删除：您有权要求我们删除我们持有的您的个人信息（在适用的法律范围内）。
反对营销：您有权选择不接收我们的营销通信。
投诉：如果您对我们的隐私政策或数据处理活动有任何疑问或投诉，请与我们联系。
六、安全措施
我们采取适当的安全措施来保护您的个人信息，包括物理、电子和程序性保障措施。但是，请注意，尽管我们采取了这些措施，互联网传输的数据并不总是安全的。
七、儿童隐私
我们的服务不针对13岁以下的儿童。如果您是儿童且正在使用我们的服务，请让您的父母或监护人参与并了解本隐私政策。
八、隐私政策的变更
我们可能会不时地更新本隐私政策。当隐私政策发生变更时，我们将在我们的网站上发布更新后的版本。请定期查看本隐私政策，以确保您了解我们如何收集、使用和保护您的信息`

const enText = ` I. Introduction

We take your privacy and the protection of your personal information seriously. This Privacy Policy outlines how we collect, use, store, share, and protect your personal information. Please read this Privacy Policy carefully before using our services.

II. Information We Collect

Personal Information: We may collect your name, email address, phone number, address, and other personal information to provide our services or respond to your requests.
Usage Data: When you use our services, we may collect information about your usage habits, such as the pages you visit, the features you use, your device information, etc.
Cookies and Similar Technologies: We may use cookies, pixel tags, and other tracking technologies to collect information about your use of our services.
III. Use of Your Information

Service Provision: We use your information to provide, maintain, and improve our services.
Communication: We may use your contact information to communicate with you, such as sending updates, promotional activities, or customer service messages.
Advertising: We may use your information to display advertisements that are relevant to your interests.
Compliance and Legal Requirements: We may use your information to comply with legal requirements or legal processes.
IV. Sharing Your Information

Third-Party Service Providers: We may share your information with third-party service providers who provide services to us, such as data analysis, payment processing, etc.
Legal Requirements: We may share your information when required by law or to comply with legal processes.
V. Your Rights

Access and Correction: You have the right to access and correct your personal information that we hold.
Deletion: You have the right to request that we delete your personal information (subject to applicable laws).
Opt-Out of Marketing: You have the right to opt-out of receiving marketing communications from us.
Complaints: If you have any questions or complaints about our Privacy Policy or data processing activities, please contact us.
VI. Security Measures

We take appropriate security measures to protect your personal information, including physical, electronic, and procedural safeguards. However, please note that no data transmission over the internet is always secure.

VII. Children's Privacy

Our services are not directed to children under 13 years of age. If you are a child and are using our services, please have your parent or guardian participate and understand this Privacy Policy.

VIII. Changes to the Privacy Policy

We may update this Privacy Policy from time to time. When changes are made, we will post the updated version on our website. Please review this Privacy Policy periodically to ensure that you are aware of how we collect, use, and protect your information.

IX. Contact Information

If you have any questions or require more information about this Privacy Policy, please contact us at: [your email/phone/address].`
</script>

<template>
  <div class="view privacy-view">
    <div class="privacy-container">
      <div class="privacy-content cloudea-area">
        <div class="zh-area" v-if="isZh">
          <h1 class="title">隐私政策</h1>
          <textarea class="content" rows="100" readonly> {{ zhText }}</textarea>
        </div>
        <div class="en-area" v-else>
          <h1 class="title">Privacy</h1>
          <textarea class="content" readonly>{{ enText }} </textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.privacy-container {
  display: flex;
  padding-bottom: 20px;

  .privacy-content {
    margin: auto;
    width: 700px;
    height: 900px;
    padding: 20px;

    .zh-area,
    .en-area {
      width: 100%;
      overflow: hidden;
      height: 100%;

      textarea {
        resize: none;
        height: 100%;
      }

      .content {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
