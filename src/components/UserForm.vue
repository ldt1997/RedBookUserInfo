<script setup>
import { ref } from 'vue'
import { useUserInfoStore } from '../stores/userInfo'
const store = useUserInfoStore()
const userInfo = store.userInfo

const icon = ref([])
const bg = ref([])
const username = ref(userInfo.username || '')
const introduce = ref(userInfo.introduce || '')
const showGender = ref(false)
const gender = ref('female')
const showAge = ref(false)
const age = ref(18)
const showLocation = ref(false)
const location = ref('')
const showJobs = ref(false)
const jobs = ref('')
const showSchool = ref(false)
const school = ref('')

const onSubmit = (values) => {
  console.log('submit', values)
  store.setUserInfo(values)
  console.log('after submit', store.userInfo)
}
</script>

<template>
  <div class="userFormWrap">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <!-- TODO: cut -->
        <van-field name="icon" label="头像">
          <template #input>
            <van-uploader v-model="icon" max-count="1" />
          </template>
        </van-field>

        <van-field
          v-model="username"
          name="username"
          label="名字"
          placeholder="2-24字符"
          :rules="[{ required: true, message: '请填写用户名' }, { maxlength: 24 }]"
        />
        <van-field
          v-model="introduce"
          type="textarea"
          name="introduce"
          label="简介"
          maxlength="100"
          show-word-limit
        />

         <!-- TODO: cut -->
         <van-field name="bg" label="背景图">
          <template #input>
            <van-uploader v-model="bg" max-count="1" />
          </template>
        </van-field>

        <van-field name="showGender" label="展示性别">
          <template #input>
            <van-switch v-model="showGender" />
          </template>
        </van-field>
        <van-field name="gender" label="性别" v-if="showGender">
          <template #input>
            <van-radio-group v-model="gender" direction="horizontal">
              <van-radio name="female">女</van-radio>
              <van-radio name="male">男</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field name="showAge" label="展示年龄">
          <template #input>
            <van-switch v-model="showAge" />
          </template>
        </van-field>
        <van-field
          v-if="showAge"
          v-model="age"
          name="age"
          label="年龄"
          type="digit"
          placeholder="请填写整数"
          :rules="[{ required: true, message: '请填写整数' }]"
        />

        <van-field name="showLocation" label="展示地区">
          <template #input>
            <van-switch v-model="showLocation" />
          </template>
        </van-field>
        <van-field
          v-if="showLocation"
          v-model="location"
          name="location"
          label="地区"
          placeholder="请填写地区"
          :rules="[{ required: true, message: '请填写' }]"
        />

        <van-field name="showJobs" label="展示职业">
          <template #input>
            <van-switch v-model="showJobs" />
          </template>
        </van-field>
        <van-field
          v-if="showJobs"
          v-model="jobs"
          name="jobs"
          label="职业"
          placeholder="请填写职业"
          :rules="[{ required: true, message: '请填写' }]"
        />

        <van-field name="showSchool" label="展示学校">
          <template #input>
            <van-switch v-model="showSchool" />
          </template>
        </van-field>
        <van-field
          v-if="showSchool"
          v-model="school"
          name="school"
          label="学校"
          placeholder="请填写学校"
          :rules="[{ required: true, message: '请填写' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button type="primary" block native-type="submit">生成预览</van-button>
      </div>
    </van-form>
  </div>
</template>

<style scoped>
.userFormWrap {
  padding: 16px 0px;
}
</style>
