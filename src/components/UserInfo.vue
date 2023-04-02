<script setup>
import { useUserInfoStore } from '../stores/userInfo'
import SafeArea from '../components/SafeArea.vue'
import IconGender from '../components/icons/IconGender.vue'
import IconFollow from '../components/icons/IconFollow.vue'
import IconChat from '../components/icons/IconChat.vue'
const store = useUserInfoStore()
const userInfo = store.userInfo
const showMore =
  userInfo.age?.show ||
  userInfo.gender?.show ||
  userInfo.jobs?.show ||
  userInfo.location?.show ||
  userInfo.school?.show
</script>

<template>
  <div class="userInfoWrap">
    <!-- bgimg -->
    <!-- <div class="bgWrap">
      <div class="mask"></div>
      <img :src="userInfo.bg" alt="bgImg" class="bgImg" />
    </div> -->
    <!-- userinfo -->
    <SafeArea />
    <div class="user">
      <div class="bar">
        <svg
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.62132 9L10.0607 1.56066C10.2559 1.3654 10.2559 1.04882 10.0607 0.853553L9.35355 0.146447C9.15829 -0.0488155 8.84171 -0.0488155 8.64645 0.146447L0.146447 8.64645C-0.0488155 8.84171 -0.0488156 9.15829 0.146447 9.35355L8.64645 17.8536C8.84171 18.0488 9.15829 18.0488 9.35355 17.8536L10.0607 17.1464C10.2559 16.9512 10.2559 16.6346 10.0607 16.4393L2.62132 9Z"
            fill="white"
          />
        </svg>
        <svg
          width="18"
          height="4"
          viewBox="0 0 18 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 2C4 3.10457 3.10458 4 2 4C0.895416 4 0 3.10457 0 2C0 0.895432 0.895416 0 2 0C3.10458 0 4 0.895432 4 2Z"
            fill="white"
          />
          <path
            d="M11 2C11 3.10457 10.1046 4 9 4C7.89542 4 7 3.10457 7 2C7 0.895432 7.89542 0 9 0C10.1046 0 11 0.895432 11 2Z"
            fill="white"
          />
          <path
            d="M16 4C17.1046 4 18 3.10457 18 2C18 0.895432 17.1046 0 16 0C14.8954 0 14 0.895432 14 2C14 3.10457 14.8954 4 16 4Z"
            fill="white"
          />
        </svg>
      </div>

      <div class="content">
        <div class="userCard">
          <div class="icon">
            <img :src="userInfo.icon" alt="user-icon" />
          </div>
          <div class="nameBox">
            <div class="username">{{ userInfo.username }}</div>
            <div class="userId">小红书号：1234567890</div>
            <div class="userId">IP属地：中国</div>
          </div>
        </div>

        <div class="introduce" v-if="!!userInfo.introduce">{{ userInfo.introduce }}</div>
        <div class="more" v-if="showMore">
          <span class="tag" v-if="userInfo.gender?.show || userInfo.age?.show"
            ><IconGender :gender="userInfo.gender.gender" /><span
              v-if="userInfo.age?.show"
              style="margin-left: 4px"
              >{{ userInfo?.age?.age }} 岁</span
            ></span
          >
          <span class="tag" v-if="userInfo.location?.show">{{ userInfo.location?.location }}</span>
          <span class="tag" v-if="userInfo.jobs?.show" v-for="item in userInfo.jobs?.jobs">{{
            item
          }}</span>
          <span class="tag" v-if="userInfo.school?.show">{{ userInfo.school?.school }}</span>
        </div>
      </div>

      <div class="bottom">
        <div class="nums">
          <div class="numBox">
            <div class="num">99</div>
            <div class="desc">关注</div>
          </div>
          <div class="numBox">
            <div class="num">33 万</div>
            <div class="desc">粉丝</div>
          </div>
          <div class="numBox">
            <div class="num">330 万</div>
            <div class="desc">获赞与收藏</div>
          </div>
        </div>
        <div class="btns">
          <IconFollow />
          <IconChat />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.userInfoWrap {
  width: 100%;
  min-height: 211px;
  position: relative;
}

.bgWrap {
  filter: brightness(0.5);
  position: absolute;
  width: 100%;
  height: 100%;
}
.bgImg {
  height: 100%;
}
.bar {
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
}

.content {
  padding: 17px 14px 0px 14px;
  margin-bottom: 20px;
}

.userCard {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.userCard .icon {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #fff;
  margin-right: 15px;
}
.userCard .icon img {
  width: 100%;
  object-fit: cover;
}

.userCard .nameBox .username {
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 6px;
}
.userCard .nameBox .userId {
  color: rgba(255, 255, 255, 0.55);
  font-weight: 400;
  font-size: 10px;
}

.introduce {
  margin-bottom: 12px;
  color: #fff;
  font-size: 14px;
}

.more {
  display: flex;
  gap: 7px;
}
.more .tag {
  padding: 2px 8px;
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 10px;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px 18px;
}

.nums {
  display: flex;
  align-items: center;
  gap: 16px;
}

.numBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.numBox .num {
  font-weight: 600;
  font-size: 14px;
  color: #fff;
}
.numBox .desc {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
}
.btns {
  display: flex;
  align-items: center;
  gap: 14px;
}
</style>
