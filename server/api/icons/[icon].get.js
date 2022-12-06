import api from '@/hooks/api'

export default defineEventHandler(event => api.get(event.context.params.icon))
