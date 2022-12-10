import api from '@/hooks/api'

export default defineEventHandler(event => {
  const { size } = getQuery(event)
  const icon = api.icons.get(event.context.params.icon)
  const payload = {
    name: icon.name,
    svg: icon.svg.replace(
      /<svg[^>]*>/,
      `<svg width="${size}" height="${size}">`
    ),
  }
  return payload
})
