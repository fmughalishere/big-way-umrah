import { notFound } from "next/navigation";
import { getBlogBySlug, blogs } from "../../../data/blogData";
import BlogDetailClient from "../../../components/BlogDetailClient";

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  return <BlogDetailClient blog={blog} />;
}