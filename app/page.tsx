import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">MISSÃO</h1>
      <p className="mb-4">
        {`Disponibilizar produtos e serviços de qualidade, com variedade,
         excelência no atendimento e consciência de cooperação, higiene e
         limpeza, respeitando os interesses dos consumidores, fornecedores,
         colaboradores, gestores e órgãos governamentais.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
