import { universityData } from "@/data/services/university.data";
import UniversityCard from "./UniversityCard";

const Universities = () => {
  return (
    <main className="container">
      <section className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {universityData.map((uni) => (
          <div key={uni.universityName} className="hover:scale-95 transition-all duration-300  ease-in-out  " >
            <UniversityCard
              flag={uni.flag}
              name={uni.universityName}
              photo={uni.universityPhoto}
              id={uni.id}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Universities;
