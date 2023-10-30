"use client";

import FormControls from "../form-controls";

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

export default function AdminHomeView({ formData, setFormData, handleSaveData }) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button onClick={()=>handleSaveData('home')} className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]">
          Adicionar informação
        </button>
      </div>
    </div>
  );
}
