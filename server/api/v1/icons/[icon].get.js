import api from '@/hooks/api'

export default defineEventHandler(event => api.icons.get(event.context.params.icon))
