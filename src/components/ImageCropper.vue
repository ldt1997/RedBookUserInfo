<script setup lang="ts">
interface Props {
  img: any
  aspectRatio?: number
  show?: boolean
  onCancel?: () => void
  onSubmit?: (blob: Blob) => void | Promise<void>
}
const props = defineProps<Props>()
</script>

<template>
  <van-popup :show="props.show || false" :style="{ padding: '0px' }" @opened="opened">
    <div class="cropper">
      <img :src="props.img || ''" ref="img" />
    </div>
    <div class="cropperBtns">
      <van-button @click="props.onCancel">取消</van-button>
      <van-button type="primary" @click="handleCrop">确定</van-button>
    </div>
  </van-popup>
</template>

<script lang="ts">
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'

export default {
  data() {
    return {
      cropper: null // 用于接收 new Cropper 的实例对象
    }
  },
  methods: {
    handleCrop() {
      this.cropper.getCroppedCanvas().toBlob((blob) => {
        this.onSubmit?.(blob)
      })
    },
    opened() {
      const image = this.$refs.img
      if (this.cropper) {
        this.cropper?.destroy()
      }
      if (image) {
        this.cropper = new Cropper(image, {
          viewMode: 1,
          dragMode: 'move',
          aspectRatio: this.aspectRatio || 1,
          cropBoxMovable: false,
          cropBoxResizable: false,
          background: true
        })
      }
    }
  }
}
</script>

<style>
.cropper {
  width: 100%;
  height: 300px;
}

.cropperBtns {
  padding: 12px;
  display: flex;
  justify-content: center;
  gap: 16px;
}
</style>
