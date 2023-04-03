import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import defaultIcon from '../assets/defaultIcon.jpg'
import defalutBg from '../assets/defalutBg.jpg'
import testBg from '../assets/testBg.jpg'

export interface IUserInfo {
  username: string
  icon: any[]
  bg: any[]
  introduce?: string
  showGender?: boolean
  gender?: string
  showAge?: boolean
  age?: number
  showLocation?: boolean
  location?: string
  showJobs?: boolean
  jobs?: string // FIXME: multi
  showSchool?: boolean
  school?: string
  domainColor?: string
}

export const useUserInfoStore = defineStore('userInfo', () => {
  const userInfo = ref<IUserInfo>({
    username: '小红薯',
    icon: [],
    bg: [],
    introduce: '这是简介',
    showAge: false,
    // FIXME: not good
    domainColor: '#c6e1e8'
  })
  const showMore = computed(() =>
    Boolean(
      userInfo?.value?.showAge ||
        userInfo?.value?.showGender ||
        userInfo?.value?.showJobs ||
        userInfo?.value?.showLocation ||
        userInfo?.value?.showSchool
    )
  )
  const iconImg = computed(() => {
    const target = userInfo.value?.icon?.[0]
    return target?.content || defaultIcon
  })
  const bgImg = computed(() => {
    const target = userInfo.value?.bg?.[0]
    return target?.content || testBg
  })
  function setUserInfo(payload: IUserInfo) {
    this.userInfo = {
      ...this.userInfo,
      ...payload
    }
  }
  function setDomainColor(payload: string) {
    this.userInfo = {
      ...this.userInfo,
      domainColor: payload
    }
  }

  return { userInfo, showMore, iconImg, bgImg, setUserInfo, setDomainColor }
})
