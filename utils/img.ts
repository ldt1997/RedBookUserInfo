import ColorThief from 'colorthief'
const colorThief = new ColorThief()

export function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.readAsDataURL(blob)
  })
}

async function base64ToImage(base64) {
  return new Promise((reslove, _) => {
    const img = new Image()
    img.src = 'data:image/png;base64;' + base64
    img.onload = () => reslove(img)
  })
}

export const getDomainColor = async (base64) => {
  if (base64) {
    const img = await base64ToImage(base64)
    const [r, g, b] = colorThief.getColor(img)
    return `rgb(${r},${g},${b})`
  }
  return 'rgb(198,225,232)'
}
