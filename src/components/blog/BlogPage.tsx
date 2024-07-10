import Link from "next/link";
import Capital from "../Capital/Capital";
import BlogCard from "./BlogCard";
import blog1 from "./assets/blog1.webp";
import blog2 from "./assets/blog2.webp";
import blog3 from "./assets/blog3.webp";
import { useRouter } from "next/navigation";
export const blogData = [
  /*   {
    id: "AComprehensiveGuidetoStudyingAbroad",
    title:
      "Navigating Your Path: A Comprehensive Guide to Studying Abroad",
    description1:
      "Discover how DK Solutions provides reliable production helpers to support your manufacturing processes. Our well-trained helpers offer versatile assistance to streamline operations, boost productivity, and enhance efficiency.",
    description2: [
      {
        title: "Versatile Assistance",
        subtitle:
          "Providing help in various production tasks to streamline operations.",
        descriptionList: [
          "Task Management: Efficiently handling diverse production tasks.",
          "Adaptability: Quickly adapting to changing production needs.",
          "Team Support: Working seamlessly with your existing team.",
        ],
      },
      {
        title: "Training and Support",
        subtitle:
          "Well-trained helpers ready to adapt to your specific production needs.",
        descriptionList: [
          "Comprehensive Training: Ensuring helpers are fully prepared for their roles.",
          "Ongoing Support: Continuous training and support for skill enhancement.",
          "Flexibility: Ready to tackle new challenges and tasks as they arise.",
        ],
      },
      {
        title: "Boosting Productivity",
        subtitle: "Enhancing efficiency and output in your production line.",
        descriptionList: [
          "Process Optimization: Streamlining operations for maximum productivity.",
          "Quality Improvement: Helping maintain high standards of quality.",
          "Efficient Workflows: Implementing best practices to improve workflow efficiency.",
        ],
      },
      {
        title: "Conclusion",
        subtitle:
          "DK Solutions offers reliable production helpers to support and enhance your manufacturing processes. Partner with us to ensure your production line runs smoothly, efficiently, and productively.",
        descriptionList: [],
      },
    ],
    photo: "",
    author: "DK Solutions Team",
    date: "8/30/24",
  },
  {
    id: "ExpertTipsforPursuingEducationOverseas",
    title:
      "Unlocking Global Opportunities: Expert Tips for Pursuing Education Overseas",
    description1:
      "Ensure timely and secure deliveries with DK Solutions' reliable delivery van and driver services. Our professional drivers and well-maintained delivery vans are dedicated to providing exceptional service and customer satisfaction.",
    description2: [
      {
        title: "Reliable Delivery Partners",
        subtitle:
          "Professional drivers to ensure timely and secure deliveries.",
        descriptionList: [
          "Experienced Drivers: Skilled drivers with extensive experience in logistics.",
          "Timely Deliveries: Commitment to meeting delivery schedules consistently.",
          "Customer Service: Providing excellent service and maintaining professionalism.",
        ],
      },
      {
        title: "Fleet Management",
        subtitle:
          "Well-maintained delivery vans to meet your logistical needs.",
        descriptionList: [
          "Regular Maintenance: Ensuring our fleet is in top condition.",
          "Safety Standards: Adhering to high safety standards for secure deliveries.",
          "Efficiency: Optimizing routes and processes for efficient logistics.",
        ],
      },
      {
        title: "Customer Satisfaction",
        subtitle:
          "Commitment to providing exceptional service and timely deliveries.",
        descriptionList: [
          "Communication: Keeping clients informed and updated on delivery status.",
          "Problem-Solving: Addressing and resolving delivery issues promptly.",
          "Client Focus: Prioritizing client needs and preferences in our services.",
        ],
      },
      {
        title: "Conclusion",
        subtitle:
          "DK Solutions' delivery van and driver services are designed to ensure seamless logistics and exceptional customer satisfaction. Partner with us for reliable, efficient, and professional delivery solutions.",
        descriptionList: [],
      },
    ],
    photo: "",
    author: "DK Solutions Team",
    date: "9/05/24",
  },
  {
    id:"YourUltimateStudyAbroadConsultancyGuide",
    title:
      "From Dreams to Degrees: Your Ultimate Study Abroad Consultancy Guide",
    description1:
      "Discover DK Solutions' comprehensive packaging services, designed to ensure your products are packaged with care and precision. From custom packaging solutions to using high-quality materials, our services are tailored to meet your specific requirements and enhance productivity.",
    description2: [
      {
        title: "Custom Packaging Solutions",
        subtitle:
          "Tailored packaging services to meet your specific requirements.",
        descriptionList: [
          "Personalized Designs: Custom packaging that reflects your brand.",
          "Flexible Options: Solutions adaptable to various product types and sizes.",
          "Client Collaboration: Working closely with clients to meet their packaging needs.",
        ],
      },
      {
        title: "Quality Materials",
        subtitle:
          "Using high-quality materials to ensure product safety and integrity.",
        descriptionList: [
          "Durable Materials: Selecting materials that offer maximum protection.",
          "Sustainable Choices: Incorporating eco-friendly materials and practices.",
          "Consistency: Maintaining high standards of quality in all packaging.",
        ],
      },
      {
        title: "Efficient Processes",
        subtitle:
          "Streamlined packaging operations to meet deadlines and enhance productivity.",
        descriptionList: [
          "Process Optimization: Implementing efficient workflows for timely packaging.",
          "Technology Integration: Using advanced technologies for precision packaging.",
          "Scalability: Capable of handling both small and large-scale packaging needs.",
        ],
      },
      {
        title: "Conclusion",
        subtitle:
          "DK Solutions' comprehensive packaging services are designed to ensure your products are packaged securely and efficiently. Partner with us to enhance your packaging operations with precision and quality.",
        descriptionList: [],
      },
    ],
    photo: "",
    author: "DK Solutions Team",
    date: "9/10/24",
  }, */

  {
    id: "AComprehensiveGuidetoStudyingAbroad",
    title: "Navigating Your Path: A Comprehensive Guide to Studying Abroad",
    description1:
      "Explore how Educaso Consultancy provides comprehensive support to help students navigate the complexities of studying abroad. Our well-rounded guidance ensures a smooth transition and successful academic journey.",
    description2: [
      {
        title: "University Selection",
        subtitle: "Helping you choose the right institution for your goals.",
        descriptionList: [
          "Personalized Advice: Tailored recommendations based on your academic and career objectives.",
          "Global Network: Access to a wide network of universities worldwide.",
          "Detailed Insights: In-depth information about universities' strengths and specializations.",
        ],
      },
      {
        title: "Application Assistance",
        subtitle: "Guiding you through the entire application process.",
        descriptionList: [
          "Document Preparation: Assistance with gathering and preparing necessary documents.",
          "Essay and Statement Guidance: Support in writing compelling personal statements and essays.",
          "Application Review: Thorough review of your applications to enhance acceptance chances.",
        ],
      },
      {
        title: "Financial Planning",
        subtitle:
          "Helping you manage the financial aspects of studying abroad.",
        descriptionList: [
          "Scholarship Guidance: Identifying and applying for relevant scholarships.",
          "Budgeting Tips: Effective strategies for managing your budget.",
          "Financial Aid: Information on loans and other financial aid options.",
        ],
      },
      {
        title: "Pre-departure Preparation",
        subtitle: "Ensuring you are well-prepared before you leave.",
        descriptionList: [
          "Visa Assistance: Guidance through the visa application process.",
          "Cultural Orientation: Preparing you for cultural differences and new environments.",
          "Travel and Accommodation: Help with booking flights and finding accommodation.",
        ],
      },
      {
        title: "Post-arrival Support",
        subtitle: "Providing continued assistance after your arrival.",
        descriptionList: [
          "Orientation Programs: Introduction to the local education system and culture.",
          "Academic Support: Resources and tutoring to ensure academic success.",
          "24/7 Assistance: Ongoing help and advice throughout your study period.",
        ],
      },
      {
        title: "Conclusion",
        subtitle:
          "Educaso Consultancy is dedicated to providing comprehensive support for your study abroad journey. Partner with us to ensure a successful and enriching experience.",
        descriptionList: [],
      },
    ],
    photo: blog1,
    author: "Educaso Team",
    date: "8/30/24",
  },
  {
    id: "ExpertTipsforPursuingEducationOverseas",
    title:
      "Unlocking Global Opportunities: Expert Tips for Pursuing Education Overseas",
    description1:
      "Discover how Educaso Consultancy offers expert guidance to help students pursue their education abroad. Our team provides personalized support to navigate the complexities of studying in a foreign country, ensuring a smooth and successful transition.",
    description2: [
      {
        title: "Personalized Guidance",
        subtitle:
          "Tailored advice to match individual academic and career goals.",
        descriptionList: [
          "Career Planning: Customized strategies to align education with career aspirations.",
          "University Selection: Assistance in choosing the right institutions based on your interests and qualifications.",
          "Application Support: Expert help with application processes to enhance acceptance chances.",
        ],
      },
      {
        title: "Financial Planning",
        subtitle: "Navigating the financial aspects of studying abroad.",
        descriptionList: [
          "Scholarship Assistance: Identifying and applying for scholarships to reduce financial burden.",
          "Budget Management: Helping students manage their finances effectively.",
          "Loan Guidance: Providing information on student loans and financial aid options.",
        ],
      },
      {
        title: "Pre-departure Preparation",
        subtitle: "Ensuring students are well-prepared before they leave.",
        descriptionList: [
          "Visa Assistance: Guidance through the visa application process.",
          "Cultural Orientation: Preparing students for cultural differences and new environments.",
          "Travel Arrangements: Help with booking flights and finding accommodation.",
        ],
      },
      {
        title: "Post-arrival Support",
        subtitle: "Continued assistance to ensure a smooth transition abroad.",
        descriptionList: [
          "Settling In: Support in adapting to the new country and its education system.",
          "Academic Assistance: Providing resources for academic success.",
          "24/7 Support: Ongoing help and advice throughout the study period.",
        ],
      },
      {
        title: "Conclusion",
        subtitle:
          "Educaso Consultancy is dedicated to helping students unlock global opportunities through expert guidance and personalized support. Partner with us to achieve your dream of studying abroad successfully.",
        descriptionList: [],
      },
    ],
    photo: blog2,
    author: "Educaso Team",
    date: "8/30/24",
  },
  {
    id: "YourUltimateStudyAbroadConsultancyGuide",
    title:
      "From Dreams to Degrees: Your Ultimate Study Abroad Consultancy Guide",
    description1:
      "Learn how Global Scholars Consultancy transforms students' dreams into degrees with our comprehensive study abroad services. We provide end-to-end support to ensure students achieve their academic ambitions in top international institutions.",
    description2: [
      {
        title: "Comprehensive Consultation",
        subtitle:
          "Offering in-depth consultations to understand and plan your study abroad journey.",
        descriptionList: [
          "Goal Assessment: Understanding students' academic and career objectives.",
          "Strategic Planning: Crafting a personalized plan to achieve those goals.",
          "Resource Provision: Offering resources and information tailored to individual needs.",
        ],
      },
      {
        title: "Application Process Management",
        subtitle: "Streamlining the application process for students.",
        descriptionList: [
          "Document Preparation: Assistance in gathering and preparing necessary documents.",
          "Essay Writing Support: Guidance in crafting compelling personal statements and essays.",
          "Deadline Tracking: Ensuring all applications are submitted on time.",
        ],
      },
      {
        title: "Academic Support",
        subtitle: "Providing resources and tutoring to excel academically.",
        descriptionList: [
          "Tutoring Services: Access to subject-specific tutors.",
          "Test Preparation: Resources for standardized test preparation (e.g., IELTS, TOEFL, SAT).",
          "Academic Workshops: Workshops to enhance study skills and academic performance.",
        ],
      },
      {
        title: "Career Development",
        subtitle: "Helping students build a successful career path.",
        descriptionList: [
          "Internship Placement: Assistance in finding relevant internships and work placements.",
          "Resume Building: Guidance on crafting effective resumes and cover letters.",
          "Networking Opportunities: Connecting students with industry professionals and alumni.",
        ],
      },
      {
        title: "Conclusion",
        subtitle:
          "Global Scholars Consultancy is your trusted partner in transforming academic dreams into degrees. With our comprehensive support, students can confidently navigate the journey to studying abroad and achieving their goals.",
        descriptionList: [],
      },
    ],
    photo: blog3,
    author: "Educaso Team",
    date: "8/30/24",
  },
];
const BlogPage = () => {
  const router = useRouter();

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
        <div className="mt-11 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog) => (
            <Link href={`/blog/${blog.id}`} key={blog.id}>
              <BlogCard
                title={blog.title}
                id={blog.id}
                description1={blog.description1}
                author={blog.author}
                date={blog.author}
                photo={blog.photo}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
