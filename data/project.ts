export const projects: Project[] = [
  /*
  {
    title: '愧怍的小站',
    description: '🦖 基于 Docusaurus 静态网站生成器实现个人博客',
    preview: '/img/project/blog.png',
    website: 'https://kuizuo.cn',
    source: 'https://github.com/kuizuo/blog',
    tags: ['opensource', 'design', 'favorite'],
    type: 'web',
  },
  {
    title: 'Vitesse Nuxt3 Strapi',
    description: '一个 Vitesse Nuxt3 Strapi 的模板，灵感来源 Vitesse',
    preview: '/img/project/vitesse-nuxt3-strapi.png',
    website: 'https://vitesse-nuxt3-strapi.vercel.app',
    source: 'https://github.com/kuizuo/vitesse-nuxt3-strapi',
    tags: ['opensource'],
    type: 'web',
  },
  */
  {
    title: '蝈蝈',
    description: '✍️ 基于 Docusaurus 静态网站生成器实现个人博客',
    preview: '/img/project/blog.png',
    website: 'https://guo-fs.com',
    tags: ['design', 'favorite'],
    type: 'web',
  },
  {
    title: 'os-w Project',
    description: '🧰 一个 基于hugo+docsy的使用示例',
    preview: '/img/project/os-w.png',
    website: 'https://os-w.com',
    tags: ['favorite', 'product', 'large'],
    type: 'web',
  },
  {
    title: 'DevOps/k8s快速集成',
    description: '📥 DevOps CI/CD 配置实操，快速指导',
    preview: '/img/project/devopsk8s.png',
    website: 'https://guo-fs.com/docs/category/devops',
    tags: ['favorite', 'product', 'large'],
    type: 'web',
  },

]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'design'
  | 'large'
  | 'personal'

export type ProjectType = 'personal' | 'web' | 'app' | 'toy' | 'other' | 'Project'

export type Project = {
  title: string
  description: string
  preview?: any
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  large: {
    label: '大型',
    description: '大型项目，原多于平均数的页面',
    color: '#8c2f00',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce((group, project) => {
  const { type } = project
  group[type] = group[type] ?? []
  group[type].push(project)
  return group
}, {} as Record<ProjectType, Project[]>)
