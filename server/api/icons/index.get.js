import api from '@/hooks/api'

export default defineEventHandler(() => api.all())
