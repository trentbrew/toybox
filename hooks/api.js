import icons from '@/data/icons'

export default {
  all: () => icons,
  get: (name) => icons.filter((icon) => icon.name == name)[0],
  add: (icon) => icons.push(icon),
  remove: (name) => index = icons.findIndex((icon) => icon.name == name),
}
