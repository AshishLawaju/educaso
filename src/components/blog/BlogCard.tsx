import blogImage from "./assets/blog.webp";
const BlogCard = () => {
  return (
    <div
      className="flex h-[360px] w-[397px]x items-end rounded-3xl bg-cover bg-center p-5 relative"
      style={{
        backgroundImage: `url(${blogImage.src})`,
      }}
    >
      <div className="absolute  rounded-3xl left-0 top-0 z-0 h-full w-full  bg-gradient-to-b from-[#00000000] to-[#0000207a]"></div>
      <p className="W-[60%] text-background relative">
        Insights for Your Success: A Consultancy Blog
      </p>
    </div>
  );
};

export default BlogCard;
