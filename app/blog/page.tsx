import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Supercop',
  description: '%s | A Rede que é super em tudo que faz!',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Aqui é SuperCop!</h1>
      <BlogPosts />
    </section>
  )
}
