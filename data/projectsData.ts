interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'This Blog',
    description:
      'A lightweight personal site built with Next.js, MDX, and static export for GitHub Pages.',
    href: '/about',
  },
  {
    title: 'Writing Stack',
    description:
      'Short notes on the tools, patterns, and decisions I keep reusing while building software.',
    href: '/blog',
  },
  {
    title: 'Personal Notes',
    description:
      'A place for experiments, checklists, and ideas I do not want to lose in chat history.',
  },
]

export default projectsData
