"use client";

import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminEducationView from "@/components/admin-view/education";
import AdminExperienceView from "@/components/admin-view/experience";
import AdminHomeView from "@/components/admin-view/home";
import Login from "@/components/admin-view/login";
import AdminProjectView from "@/components/admin-view/project";
import { addData, getData, login, updateData } from "@/app/services";
import { useEffect, useState } from "react";
import Image from "next/image";
import {MenuMobile} from "@/components/menu-mobile/menu-mobile";
import Logo from "@/components/logo/logo";
import aiImage from "@/public/assets/ai-image.png";
import {
  AcademicCapIcon, ArrowRightOnRectangleIcon,
  BeakerIcon,
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
  ServerStackIcon
} from "@heroicons/react/24/outline";
import {FcAbout} from "react-icons/fc";
import {MdCastForEducation, MdScience} from "react-icons/md";
import {AiFillProject} from "react-icons/ai";
import {GrContactInfo} from "react-icons/gr";

const initialHomeFormData = {
  heading: "",
  summary: "",
};

const initialAboutFormData = {
  aboutme: "",
  noofprojects: "",
  yearofexperience: "",
  noofclients: "",
  skills: "",
};

const initialExperienceFormData = {
  position: "",
  company: "",
  duration: "",
  location: "",
  jobprofile: "",
};

const initialEducationFormData = {
  degree: "",
  year: "",
  college: "",
};

const initialProjectFormData = {
  name: "",
  website: "",
  technologies: "",
  github: "",
};

const initialLoginFormData = {
  username: "",
  password: "",
};

export default function AdminView() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState("home");
  const [homeViewFormData, setHomeViewFormData] = useState(initialHomeFormData);
  const [aboutViewFormData, setAboutViewFormData] =
    useState(initialAboutFormData);
  const [experienceViewFormData, setExperienceViewFormData] = useState(
      initialExperienceFormData
  );
  const [educationViewFormData, setEducationViewFormData] = useState(
      initialEducationFormData
  );
  const [projectViewFormData, setProjectViewFormData] = useState(
      initialProjectFormData
  );


  const [allData, setAllData] = useState({});
  const [update, setUpdate] = useState(false);
  const [authUser, setAuthUser] = useState(false);
  const [loginFormData, setLoginFormData] = useState(initialLoginFormData);

  const menuItems = [
    {
      id: "home",
      label: "Home",
      component: (
        <AdminHomeView
          formData={homeViewFormData}
          setFormData={setHomeViewFormData}
          handleSaveData={handleSaveData}
        />
      ),
      icon: HomeIcon
    },
    {
      id: "about",
      label: "Sobre",
      component: (
        <AdminAboutView
          formData={aboutViewFormData}
          setFormData={setAboutViewFormData}
          handleSaveData={handleSaveData}
        />
      ),
      icon: InformationCircleIcon
    },
    {
      id: "experience",
      label: "Experiência",
      component: (
        <AdminExperienceView
          formData={experienceViewFormData}
          handleSaveData={handleSaveData}
          setFormData={setExperienceViewFormData}
          data={allData?.experience}
        />
      ),
      icon: BeakerIcon
    },
    {
      id: "education",
      label: "Educação",
      component: (
        <AdminEducationView
          formData={educationViewFormData}
          handleSaveData={handleSaveData}
          setFormData={setEducationViewFormData}
          data={allData?.education}
        />
      ),
      icon: AcademicCapIcon
    },
    {
      id: "project",
      label: "Projeto",
      component: (
        <AdminProjectView
          formData={projectViewFormData}
          handleSaveData={handleSaveData}
          setFormData={setProjectViewFormData}
          data={allData?.project}
        />
      ),
      icon: ServerStackIcon
    },
    {
      id: "contact",
      label: "Contato",
      component: <AdminContactView
      data={allData && allData?.contact}
      />,
      icon: PhoneIcon
    },
  ];

  async function extractAllDatas() {
    const response = await getData(currentSelectedTab);

    if (
      currentSelectedTab === "home" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setHomeViewFormData(response && response.data[0]);
      setUpdate(true);
    }

    if (
      currentSelectedTab === "about" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setAboutViewFormData(response && response.data[0]);
      setUpdate(true);
    }

    if (response?.success) {
      setAllData({
        ...allData,
        [currentSelectedTab]: response && response.data,
      });
    }
  }


  async function handleSaveData() {
    const dataMap = {
      home: homeViewFormData,
      about: aboutViewFormData,
      education: educationViewFormData,
      experience: experienceViewFormData,
      project: projectViewFormData,
    };

    const response = update
      ? await updateData(currentSelectedTab, dataMap[currentSelectedTab])
      : await addData(currentSelectedTab, dataMap[currentSelectedTab]);
    console.log(response, "response");

    if (response.success) {
      resetFormDatas();
      extractAllDatas();
    }
  }

  useEffect(() => {
    extractAllDatas();
  }, [currentSelectedTab]);

  function resetFormDatas() {
    setHomeViewFormData(initialHomeFormData);
    setAboutViewFormData(initialAboutFormData);
    setExperienceViewFormData(initialExperienceFormData);
    setEducationViewFormData(initialEducationFormData);
    setProjectViewFormData(initialProjectFormData);
  }


  useEffect(() => {
    setAuthUser(JSON.parse(sessionStorage.getItem("authUser")));
  }, []);

  async function handleLogin() {
    const res = await login(loginFormData);

    console.log(res, "login");

    if (res?.success) {
      setAuthUser(true);
      sessionStorage.setItem("authUser", JSON.stringify(true));
    }
  }

  if (!authUser)
    return (
      <Login
        formData={loginFormData}
        handleLogin={handleLogin}
        setFormData={setLoginFormData}
      />
    );

  return (
      <div>
        <MenuMobile/>
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
            <div className="flex h-16 shrink-0 items-center">
              <Logo/>
            </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-3">
                        {menuItems.map((item) => (
                            <li>
                                <a
                                    key={item.id}
                                    className={`text-orange-100 group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold hover:bg-gray-800 ${item.id === currentSelectedTab ? 'bg-gray-800' : ''}`}
                                    onClick={() => {
                                      setCurrentSelectedTab(item.id);
                                      resetFormDatas();
                                      setUpdate(false);
                                    }}
                                >
                                  <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                  {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                  </li>
                  <li className="-mx-6 mt-auto gap-x-2 items-center flex py-2 px-1">
                    <a href="#" className="inline-flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800 rounded-md">
                      <Image
                          className="h-8 w-8 rounded-full bg-gray-800" 
                          src={aiImage} 
                          alt="Imagem do usuario"
                          width={50}
                          height={50}
                      />
                        <span className="sr-only">Sua Foto</span>
                        <span aria-hidden="true" className="text-white-300 text-center">Igor Guariroba</span>
                    </a>
                    <a
                        className="hover:bg-gray-800 rounded-md inline-flex px-6 py-3"
                        onClick={() => {
                          setAuthUser(false);
                          sessionStorage.removeItem("authUser");
                        }}>
                      <ArrowRightOnRectangleIcon className="text-white-300 h-6 w-7 shrink-0"/>
                    </a>
                  </li>
                </ul>
              </nav>
          </div>
        </div>
        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">
            {menuItems.map(
                (item) => item.id === currentSelectedTab && item.component
            )}
          </div>
        </main>
      </div>
        
  );
}
