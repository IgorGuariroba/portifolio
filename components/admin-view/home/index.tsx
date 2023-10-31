"use client";

import FormControls from "../form-controls";
import ClientHomeView from "@/components/client-view/home";
import {useEffect, useState} from "react";
import SliderProfile from "@/components/slider-profile/slider-profile";
import {PlusIcon} from "@heroicons/react/24/outline";

const controls = [
  {
    name: "heading",
    placeholder: "Insira o texto do cabeçalho",
    type: "text",
    label: "Insira o texto do cabeçalho",
  },
  {
    name: "summary",
    placeholder: "Insira o resumo da carreira",
    type: "text",
    label: "Insira o resumo da carreira",
  },
];

interface DataType {
  heading?: string;
  summary?: string;
  id?: string;
}
export default function AdminHomeView() {
  const [data, setData] = useState<DataType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/home/get');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.error('A error occurred:', error);
      }
    }

    fetchData();
  }, []);

  const onAlterar = async (heading: string, summary: string) => {
    const method =  data[0]?.id ? 'PUT' : 'POST';
    const uri =  data[0]?.id ? '/api/home/update' : '/api/home/add';
    const response = await fetch(uri, {  //use o endpoint apropriado
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          _id: data[0]?.id || '',
          heading: heading,
          summary: summary
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    setData(data => [...data, {
      heading,
      summary,
      id: data[0]?.id
    }])
  }
  
  
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full">
      <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full bg-green-500 p-2 text-white-300 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 fixed top-6 right-6"
      >
        <PlusIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <ClientHomeView data={data}/>
      <SliderProfile open={open} setOpen={setOpen} data={data} onAlterar={onAlterar}/>
    </div>
  );
}
