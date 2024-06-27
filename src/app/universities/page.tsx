import { universityData } from "@/data/services/university.data";
import UniversityCard from "./UniversityCard";

const Universities = () => {
  return (
    <main className="container">
      <section className="my-8 grid grid-cols-3 gap-6">
        {universityData.map((uni) => (
          <>
            <UniversityCard
              key={uni.universityName}
              flag={uni.flag}
              name={uni.universityName}
              photo={uni.universityPhoto}
              id={uni.id}
            />
          </>
        ))}
      </section>
    </main>
  );
};

export default Universities;
