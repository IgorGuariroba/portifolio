import ClientHomeView from "@/components/client-view/home";
import ClientAboutView from "@/components/client-view/about";
import ClientExperienceAndEducationView from "@/components/client-view/experience";
import ClientProjectView from "@/components/client-view/project";
import ClientContactView from "@/components/client-view/contact";
import Cta from "@/components/cta/cta";
import Footer from "@/components/footer/footer";
import Contato from "@/components/contato/contato";
import Faqs from "@/components/faqs/faqs";
import Banners from "@/components/banners/banners";
import Projects from "@/components/project/project";

interface PropsDatas {
  currentSection: string;
}

async function extractAllDatas({ currentSection }: PropsDatas) {
  const res = await fetch(`http://localhost:3000/api/${currentSection}/get`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  return data && data.data;
}

export default async function Home() {
  const homeSectionData = await extractAllDatas({ currentSection: "home" });
  const aboutSectionData = await extractAllDatas({ currentSection: "about" });
  const experienceSectionData = await extractAllDatas({
    currentSection: "experience",
  });
  const educationSectionData = await extractAllDatas({
    currentSection: "education",
  });
  const projectSectionData = await extractAllDatas({
    currentSection: "project",
  });
  return (
    <div>
      <ClientHomeView data={homeSectionData} />
      <ClientAboutView
        data={
          aboutSectionData && aboutSectionData.length ? aboutSectionData[0] : []
        }
      />
      <Cta />
      <ClientExperienceAndEducationView
        educationData={educationSectionData}
        experienceData={experienceSectionData}
      />
        {/*<Projects/>*/}
      <ClientProjectView data={projectSectionData} />
      {/* <ClientContactView/> */}
      <Faqs />
      <Contato />
      <Footer />
    </div>
  );
}
