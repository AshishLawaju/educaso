import { universityData } from "@/data/services/university.data";
export async function generateStaticParams() {
    return universityData.map(uni => ({
      singleuniversity: uni.id,
    }));
  }