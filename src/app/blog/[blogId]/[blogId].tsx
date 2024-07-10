import { blogData } from "../../constant/constant";

export async function generateStaticParams() {
    return blogData.map(blog => ({
      blogId: blog.id,
    }));
  }