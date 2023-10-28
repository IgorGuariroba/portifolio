// import ClientAboutView from "@/NextJS-Fullstack-Portfolio-2023/src/components/client-view/about";
// import ClientExperienceAndEducationView from "@/NextJS-Fullstack-Portfolio-2023/src/components/client-view/experience";
// import ClientProjectView from "@/NextJS-Fullstack-Portfolio-2023/src/components/client-view/project";
// import ClientContactView from "@/NextJS-Fullstack-Portfolio-2023/src/components/client-view/contact";

import ClientHomeView from "@/components/client-view/home";

interface PropsDatas {
    currentSection: string
}

async function extractAllDatas({currentSection}: PropsDatas) {
    const res = await fetch(`http://localhost:3000/api/${currentSection}/get`, {
        method: "GET",
        cache: "no-store",
    });

    const data = await res.json();

    return data && data.data;
}

export default async function Home() {
    const homeSectionData = await extractAllDatas({currentSection: "home"});
    // const aboutSectionData = await extractAllDatas({currentSection: "about"});
    // const experienceSectionData = await extractAllDatas({currentSection: "experience"});
    // const educationSectionData = await extractAllDatas({currentSection: "education"});
    // const projectSectionData = await extractAllDatas({currentSection: "project"});
    return (
        <div>
            <ClientHomeView data={homeSectionData}/>
            {/*<ClientAboutView*/}
            {/*    data={*/}
            {/*        aboutSectionData && aboutSectionData.length ? aboutSectionData[0] : []*/}
            {/*    }*/}
            {/*/>*/}
            {/*<ClientExperienceAndEducationView*/}
            {/*    educationData={educationSectionData}*/}
            {/*    experienceData={experienceSectionData}*/}
            {/*/>*/}
            {/*<ClientProjectView data={projectSectionData}/>*/}
            {/*<ClientContactView/>*/}
        </div>
    )
}
