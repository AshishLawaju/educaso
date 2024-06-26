import { universityData } from "@/data/services/university.data";
import UniversityCard from "./UniversityCard";

const Universities = () => {
  return (
    <main className="container">
      <section className="grid grid-cols-3 gap-6 my-8">
        {universityData.map((uni) => (
          <>
            <UniversityCard
              key={uni.universityName}
              flag={uni.flag}
              name={uni.universityName}
              photo={uni.universityPhoto}
            />
          </>
        ))}
      </section>
    </main>
  );
};

export default Universities;
