"use client";
import Logo from "../logo/logo";
import Image from "next/legacy/image";
import iaImage from "@/public/assets/ai-image.png";
import { useState } from "react";

const controls = [
  {
    name: "name",
    placeholder: "Diga seu nome",
    type: "text",
    label: "Nome",
  },
  {
    name: "lestName",
    placeholder: "Diga seu nome",
    type: "text",
    label: "Sobre nome",
  },
  {
    name: "email",
    placeholder: "Informe Seu email",
    type: "email",
    label: "Email",
  },
  {
    name: "subject",
    placeholder: "Informe o assunto do e-mail",
    type: "text",
    label: "Assunto",
  },
];

interface FormData {
  [key: string]: string;
  message: string;
  name: string;
  email: string;
}

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

export default function Contato() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  return (
    <div className="relative isolate bg-white-100 px-6 py-24 sm:py-32 lg:px-8">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(90%_90%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            x="50%"
            y={-64}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-64} className="overflow-visible fill-gray-100">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
        />
      </svg>
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-green-500">
          Vamos falar sobre o seu projeto.
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Nós ajudamos empresas e indivíduos a deixamos sua impressão digital
          para o mundo.
        </p>
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form action="#" method="POST" className="lg:flex-auto">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {controls.map((control) => (
                <div key={control.name}>
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      {control.label}
                    </label>
                    <div className="mt-2.5">
                      <input
                        id={control.name}
                        name={control.name}
                        placeholder={control.placeholder}
                        // value={formData[controlItem.name]}
                        type={control.type}
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Escreva sua mensagem"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white-100 shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Vamos conversar
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-500">
              Ao enviar este formulário, concordo com o{" "}
              <a href="#" className="font-semibold text-green-600">
                política de&nbsp;privacidade.
              </a>
              .
            </p>
          </form>
          <div className="lg:mt-6 lg:w-80 lg:flex-none">
            <Logo />
            <figure className="mt-10">
              <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                <p>
                  "Estamos ansiosos para discutir oportunidades. Entre em
                  contato para explorar como podemos colaborar juntos em um novo
                  projeto. Fale conosco quando estiver pronto para dar o próximo
                  passo."
                </p>
              </blockquote>
              <figcaption className="mt-10 flex gap-x-6">
                <Image
                  src={iaImage}
                  alt=""
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  height={48}
                  width={48}
                />
                <div>
                  <div className="text-base font-semibold text-gray-900">
                    Igor Guariroba
                  </div>
                  <div className="text-sm leading-6 text-gray-600">
                    CEO of Blackboard Ti
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
