import gql from "graphql-tag";
import Image from "next/image";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import LayoutBlog from "@/components/layout/BlogLayout";
import Sidebar from "@/components/common/blog/Sidebar";
import { client } from "../../../lib/apollo";

export default function SlugPage({ post, search, sidebar }: any) {
  return (
    <LayoutBlog
      ogTitle={post?.seo?.title ? post?.seo?.title : post?.title}
      // ogDate={post?.date}
      ogDescription={
        post?.seo?.description
          ? post?.seo?.description
          : post?.excerpt.replace(/<\/?[^>]+(>|$)/g, "")
      }
      ogImageUrl={post?.featuredImage?.node?.mediaItemUrl}
      ogKeywords={post?.seo?.keywords && post?.seo?.keywords}
      ogOriginalUrl={`https://toalheirosbo.vercel.app/blog${post?.uri}`}
    >
      <section className="bg-gradient-to-r bg-brand-200 relative">
        <div className="row relative">
          <div className="container">
            <h1 className="font-bold text-white text-xl sm:text-2xl lg:text-3xl mt-6">
              {post?.title}
            </h1>
            <p className="md:text-sm text-md font-medium text-brand-100">
              <strong className="text-brand-100">
                Toalheiros
              </strong>{" "}
              |{" "}
              {post && (
                <span className="text-md text-brand-100 font-bold">
                  {format(new Date(post?.date), "dd MMM yyyy", {
                    locale: ptBR,
                  })}
                </span>
              )}
            </p>
            {/*<p className="text-lg text-zinc-100 font-medium">
              Blog {`>`} {post?.title}
            </p>*/}
          </div>
        </div>
        {/*<div className="absolute w-11/12 h-2 bottom-4 rounded-r-md left-0 bg-brand-200 z-10"></div>
        <div className="absolute w-full h-[10px] bottom-0 left-0 bg-brand-200 z-10"></div>*/}
      </section>
      <section className="pt-0">
        <div className="row">
          <div className="container">
            <div className="md:grid grid-cols-3 gap-10">
              <article className="col-span-2 flex-col flex post_main">
                <figure className="rounded mt-5 overflow-hidden">
                  <Image
                    width={1200}
                    height={630}
                    src={post?.featuredImage?.node?.mediaItemUrl}
                    alt={post?.title}
                    title={post?.title}
                  />
                  <figcaption hidden>{post?.title}</figcaption>
                </figure>
                <div className="container_conteudo">
                  <div
                    className="blog_content "
                    dangerouslySetInnerHTML={{ __html: post?.content }}
                  ></div>
                </div>
              </article>
              <Sidebar data={sidebar} search={search} />
            </div>
          </div>
        </div>
      </section>
    </LayoutBlog>
  );
}
export async function getStaticProps({ params }: any) {
  const GET_POST_BY_URI = gql`
    query GetPostByURI($id: ID!) {
      post(id: $id, idType: URI) {
        content
        title
        date
        modified
        excerpt
        author {
          node {
            firstName
          }
        }
        uri
        featuredImage {
          node {
            mediaItemUrl
            altText
            caption
          }
        }
        seo {
          description
          keywords
          title
        }
      }
    }
  `;

  const GET_POSTS = gql`
    query GetAllPosts {
      posts(first: 100) {
        nodes {
          title
          uri
          date
          content
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
          seo {
            description
            keywords
            title
          }
        }
      }
    }
  `;

  const [response, responsePosts] = await Promise.all([
    client.query({
      query: GET_POST_BY_URI,
      fetchPolicy: "no-cache",
      variables: {
        id: params.uri,
      },
    }),
    client.query({
      query: GET_POSTS,
      fetchPolicy: "no-cache",
    }),
  ]);

  const posts = responsePosts.data.posts.nodes;
  const search = posts.map((item: any) => ({
    title: item.title,
    uri: item.uri,
  }));
  const sidebar = posts.slice(0, 3);

  const post = response?.data?.post;
  return {
    props: {
      post,
      search,
      sidebar,
    },
    revalidate: 100,
  };
}

export async function getStaticPaths() {
  const GET_POST = gql`
    query GetAllPost {
      posts(first: 100) {
        nodes {
          uri
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POST,
    fetchPolicy: "no-cache",
  });
  const teste = response?.data?.posts?.nodes.map((item: any) => {
    const string = `${item?.uri}`.replaceAll("/", "");
    return {
      uri: string,
    };
  });

  const paths = teste.map((item: any) => ({
    params: {
      uri: item.uri,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}
