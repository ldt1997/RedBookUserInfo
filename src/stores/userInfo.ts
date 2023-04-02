import { ref } from 'vue'
import { defineStore } from 'pinia'
import defaultIcon from '../assets/defaultIcon.jpg'
import defalutBg from '../assets/defalutBg.jpg'
import testBg from '../assets/testBg.jpg'

export interface IUserInfo {
  username: string
  icon: any
  bg: any
  introduce?: string
  gender?: {
    show?: boolean
    gender?: string
  }
  age?: {
    show?: boolean
    age?: number
  }
  location?: {
    show?: boolean
    location?: string
  }
  jobs?: {
    show?: boolean
    jobs?: string[]
  }
  school?: {
    show?: boolean
    school?: string
  }
}

export const useUserInfoStore = defineStore('userInfo', () => {
  const userInfo = ref<IUserInfo>({
    username: '小红薯',
    icon: defaultIcon,
    bg: testBg,
    introduce: '这是简介',
    // gender: {
    //   show: true,
    //   gender: 'male'
    // },
    // age: {
    //   show: true,
    //   age: 18
    // },
    // location: {
    //   show: true,
    //   location: '东京'
    // },
    // jobs: {
    //   show: true,
    //   jobs: ['程序员']
    // },
    // school: {
    //   show: true,
    //   school: '中山大学'
    // }
  })
  function setUserInfo(payload: IUserInfo) {
    this.userInfo = payload
  }

  return { userInfo, setUserInfo }
})
