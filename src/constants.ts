export const categories = {
  UI: 'UI',
  UX: 'UX',
  ENHANCEMENT: 'Enhancement',
  BUG: 'Bug',
  FEATURE: 'Feature'
}

export const categoriesNav = Object.keys(categories).map((categoryKey) => ({
  label: categories[categoryKey as keyof typeof categories],
  path: categoryKey.toLowerCase()
}))
