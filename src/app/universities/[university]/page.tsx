import { universityData } from "@/data/services/university.data";
import Image from "next/image";

interface Params {
  singleuniversity: string; // Define the structure of your params object
}

const SinglePageUniversity = ({
  params,
}: {
  params: { university: string };
}) => {
  // console.log({ params });

  const university = universityData.find((uni) => {
    return uni.id === params.university;
  });

  // console.log({ university });
  // console.log("after university");

  return (
    <main className="container py-8">
      <h1 className="sub-heading text-primary">{university?.universityName}</h1>

      <div className="mt-6  lg:h-[583px] w-full">
        <Image
          src={university!.universityPhoto}
          alt="best universities"
          className="h-full w-full rounded-3xl object-cover object-top"
        ></Image>
      </div>

      {university?.data.split("\n").map((text) => (
        <p key={text} className="mt-6">
          {text}
        </p>
      ))}
    </main>
  );
};

export default SinglePageUniversity;
