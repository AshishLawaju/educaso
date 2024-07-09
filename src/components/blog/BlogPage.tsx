import Capital from "../Capital/Capital";
import BlogCard from "./BlogCard";

const BlogPage = () => {
  return (
    <section className="bg-[#f7f7ff]">
      <div className="container py-10 sm:py-[60px] lg:py-[80px]">
        <div className="text-center">
          <h3 className="small-sub-heading">
            <span className="leading-5">
              <Capital character="B" />
            </span>
            LOGS
          </h3>
          <h2 className="sub-heading sm:mt-3">
            Recent Articles on Events, Offers, <br /> and Activities
          </h2>
        </div>
        <div className="mt-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
