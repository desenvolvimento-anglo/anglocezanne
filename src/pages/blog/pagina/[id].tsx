import CardPost from "@/components/common/blog/CardPost";
import Paginacao from "@/components/common/blog/Pagination";
import Sidebar from "@/components/common/blog/Sidebar";
import LayoutBlog from "@/components/layout/BlogLayout";
import { gql } from "@apollo/client";
import { client } from "../../../../lib/apollo";
import Breadcrumb from "@/components/common/Hero/Breadcrumb";

export default function SlugPage({ posts, id, sidebar, search }: any) {
  console.log("paigna2", posts);
  return (
    <LayoutBlog
      ogTitle={`Blog Página ${id}`}
      ogDescription="Fique por dentro das últimas notícias do Toalheiros"
      ogOriginalUrl={`https://toalheirosbo.vercel.app/blog/pagina/${id}`}
      ogKeywords="Blog, Toalheiros Santa Bárbara, Posts"
    >
      <Breadcrumb title="Blog" desc="Confira nossas últimas notícias" />
      <section id="blog">
        <div className="row">
          <div className="container">
            <div className="grid sm:grid-cols-4 ">
              <div className="col-span-3">
                {posts.map((post: any) => {
                  return <CardPost key={post?.uri} data={post} />;
                })}
                <Paginacao tamanho={search.length} />
              </div>
              <div className="hidden md:flex">
                <Sidebar data={sidebar} search={search} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutBlog>
  );
}
const GET_POST = gql`
  query GetAllPost {
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
      }
    }
  }
`;

export async function getStaticProps({ params }: any) {
  const response = await client.query({
    query: GET_POST,
    fetchPolicy: "no-cache",
  });

  const posts = getPaginatedPosts(response, params.id);
  const search = getSearchData(response);
  const sidebar = getSidebarData(response);

  return {
    props: {
      posts,
      id: params.id,
      sidebar,
      search,
    },
    revalidate: 300,
  };
}

function getPaginatedPosts(response: any, pageId: any) {
  const { data } = response;
  const posts: any = [];
  const start = parseFloat(pageId) > 1 ? (parseFloat(pageId) - 1) * 6 : 0;
  const end = parseFloat(pageId) * 6;

  data.posts.nodes.forEach((item: any, index: any) => {
    if (index >= start && index < end) {
      posts.push(item);
    }
  });

  return posts;
}

function getSearchData(response: any) {
  const { data } = response;

  return data.posts.nodes.map(({ title, uri }: any) => ({
    title,
    url: uri,
  }));
}

function getSidebarData(response: any) {
  const { data } = response;

  return [data.posts.nodes[0], data.posts.nodes[1], data.posts.nodes[2]];
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

  const postCount = response?.data?.posts?.nodes.length;
  const pageCount = Math.ceil(postCount / 6);
  const paths = Array.from({ length: pageCount }, (_, index) => ({
    params: {
      id: `${index + 1}`,
    },
  }));

  return { paths, fallback: false };
}
