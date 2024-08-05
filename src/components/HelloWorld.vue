<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="欢迎" name="first">
      <div class="hello">
        <img src="/hello.gif" class="logo" alt="Vite logo" />
        <h3>Question Assistant</h3>
        <h4>提问小助手</h4>
      </div>
    </el-tab-pane>

    <el-tab-pane label="面试" name="second">
      <ol>
        <li class="active">技术栈是Vue还是React？</li>
        <li class="active">PC端，还是移动端？</li>
        <li class="active">开发什么系统？所属行业？</li>
        <li class="active">上线频率是多久？</li>
        <li>前端团队多少人？</li>
        <li>部门名称是？</li>
        <li class="active">上下班时间？加班情况？</li>
        <li>办公地点？</li>
        <br />
        <li class="active">试用期是否足额缴纳五险一金？</li>
        <li class="active">公积金基数和比例？</li>
        <li class="active">工资是否固定？是否包含绩效？</li>
        <li class="active">几号发工资？</li>
        <li class="active">与哪家公司签合同？</li>
        <li class="active">年假有多少天？</li>
        <li>十几薪？</li>
      </ol>
    </el-tab-pane>

    <el-tab-pane label="租房" name="third">
      <ol>
        <li class="active">面积？</li>
        <li class="active">朝向？</li>
        <li class="active">楼层？电梯？</li>
        <li class="active">是否隔断？</li>
        <li class="active">是否可以使用厨房？</li>
        <li class="active">押一付几？</li>
        <li class="active">是否和房东签合同？</li>
        <li class="active">周围是否有超市？</li>
        <li class="active">附近公交车站、地铁站？</li>
        <li>住了几户？</li>
        <li>空调、暖气、洗衣机、微波炉？</li>
        <li>网费多少？</li>
      </ol>
    </el-tab-pane>

    <el-tab-pane label="相亲" name="fourth">
      <ol>
        <li class="active">是否善良？</li>
        <li class="active">三观是否正常？</li>
        <li class="active">家乡？</li>
        <li class="active">工作年限？工作职业？</li>
        <li class="active">是否自己做饭？</li>
        <br />
        <li class="active">买房打算？</li>
        <li class="active">贷款或负债？</li>
        <li>月消费支出？</li>
        <li>如何理财？</li>
      </ol>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ref } from "vue";
const activeName = ref("first");

const handleClick = (tab) => {
  console.log(tab);
};
</script>



<style scoped lang="scss">
:deep(.el-tabs__content > div) {
  height: calc(100vh - 60px);
  overflow-y: auto;
}

:deep(.el-tabs__item) {
  font-size: 18px;
}

#pane-first {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#pane-first .hello img {
  width: 200px;
  margin-top: -100px;
}

li {
  line-height: 40px;
  font-size: 16px;
  color: #37474f;

  &.active {
    font-weight: bold;
    color: #2980b9;
  }
}
</style>
