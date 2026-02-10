import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
// import gql from "graphql-tag";
import LayoutBlog from "@/components/layout/BlogLayout";
// import { client } from "../../../lib/apollo";
import CardPost from "@/components/common/blog/CardPost";
import Sidebar from "@/components/common/blog/Sidebar";
import Paginacao from "@/components/common/blog/Pagination";
import Breadcrumb from "@/components/common/Hero/Breadcrumb";
import Image from "next/image";

export default function Blog({ posts, search, sidebar, categories }: any) {
  console.log("post", posts);
  // const seisPrimeiros = [
  //   // posts[0],
  //   //posts[1],
  //   //posts[2],
  //   //posts[3],
  //   //posts[4],
  //   //posts[5],
  // ];
  // console.log("seis", seisPrimeiros);
  // const paginas = Math.ceil(posts.length / 6);
  // let paginasItem = [];
  // for (let index = 0; index < paginas; index++) {
  //   paginasItem.push({ page: index + 1 });
  // }
  return (
    <LayoutBlog
      ogTitle="Blog"
      ogOriginalUrl="https://toalheirosbo.vercel.app/blog"
      ogDescription="Veja as ultimas novidades da Toalheiros"
      ogKeywords="Blog, Toalheiros Santa Bárbara Internet, Internet rápida, últimas notícias, Planos de internet"
    >
      <Breadcrumb title="Blog" desc="Confira nossas últimas notícias" />
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <div className="md:grid grid-cols-3 gap-10">
              <div className="col-span-2 flex-col flex divide-y">
                <article className="py-6 group">
                  <figure className="overflow-hidden rounded mb-1">
                    <Image
                      src="/img/toalha-industrial-blog.webp"
                      width={960}
                      height={500}
                      alt="pano industrial"
                    />
                  </figure>
                  <p className="md:text-sm text-sm font-semibold text-brand-100">
                    Toalheiros | 27 out 2023
                  </p>
                  <h1 className="text-xl md:text-3xl font-bold !leading-none text-brand-100 mt-2 mb-2">
                    Toalhas Industriais: A Escolha Inteligente para um Ambiente
                    de Trabalho Limpo e Eficiente
                  </h1>
                  <div className="md:text-base text-sm !text-justify text-brand-400 font-medium">
                    <p>
                      Olá, caros leitores! Vamos compartilhar com vocês algumas
                      informações sobre as toalhas industriais e como elas podem
                      ser uma escolha inteligente […]
                    </p>
                  </div>
                  <div className="mt-3 group">
                    <a
                      href="/toalhas-industriais-a-escolha-inteligente-para-um-ambiente-de-trabalho-limpo-e-eficiente"
                      className="text-brand-100 hover:text-brand-200/90 transition duration-700 font-semibold text-lg underline"
                    >
                      Saiba Mais
                    </a>
                  </div>
                </article>
                {/*{seisPrimeiros.map((item: any) => (
                  <CardPost key={item?.uri} data={item} />
                ))}*/}
              </div>
              <Sidebar data={sidebar} search={search} />
            </div>
          </div>
        </div>
      </section>
    </LayoutBlog>
  );
}

// export async function getStaticProps() {
//   const GET_POSTS = gql`
//     query GetAllPosts {
//       posts(first: 100) {
//         nodes {
//           title
//           uri
//           date
//           content
//           excerpt
//           featuredImage {
//             node {
//               sourceUrl
//             }
//           }
//           seo {
//             description
//             keywords
//             title
//           }
//         }
//       }
//     }
//   `;

//   const GET_CATEGORIES = gql`
//     query GetAllCategories {
//       categories {
//         edges {
//           node {
//             name
//             count
//             slug
//           }
//         }
//       }
//     }
//   `;

//   const [responsePosts, responseCategories] = await Promise.all([
//     client.query({
//       query: GET_POSTS,
//       fetchPolicy: "no-cache",
//     }),
//     client.query({
//       query: GET_CATEGORIES,
//       fetchPolicy: "no-cache",
//     }),
//   ]);

//   const posts = responsePosts.data.posts.nodes;
//   const search = posts.map((item: any) => ({
//     title: item.title,
//     uri: item.uri,
//   }));
//   const sidebar = posts.slice(0, 3);

//   const categories = responseCategories.data.categories.edges.map(
//     (item: any) => ({
//       name: item.node.name,
//       count: item.node.count,
//       slug: item.node.slug,
//     })
//   );

//   return {
//     props: {
//       posts,
//       search,
//       sidebar,
//       categories,
//     },
//     revalidate: 600,
//   };
// }
