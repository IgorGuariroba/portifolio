"use client";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const faqs = [
  {
    question:
      "Quais são os seus antecedentes e experiência em desenvolvimento de software?",
    answer:
      "Tenho X anos de experiência em desenvolvimento de software, com histórico de trabalhar em projetos semelhantes. Meu portfólio inclui aplicativos web e móveis bem-sucedidos.",
  },
  {
    question:
      "Como você abordaria o meu projeto e quais tecnologias você recomendaria?",
    answer:
      "Iniciaria com uma análise detalhada de seus requisitos e objetivos. Recomendaria tecnologias que se alinham com a complexidade e escopo do projeto, garantindo a escalabilidade e desempenho necessários.",
  },
  {
    question:
      "Qual é a sua metodologia de desenvolvimento e como você lida com prazos?",
    answer:
      "Sigo uma metodologia ágil, priorizando entregas incrementais. Tenho um histórico de cumprir prazos e comunicar de forma transparente com os clientes durante todo o processo.",
  },
  {
    question: "Como é a sua abordagem à segurança e proteção de dados?",
    answer:
      "Priorizo a segurança em todas as etapas do desenvolvimento. Implemento práticas recomendadas de segurança e estou ciente das regulamentações de proteção de dados para garantir a confidencialidade e integridade das informações.",
  },
  {
    question:
      "Como funcionaria o suporte pós-implantação e manutenção do meu projeto?",
    answer:
      "Ofereço suporte contínuo pós-implantação e contratos de manutenção para garantir que seu projeto funcione sem problemas. Isso inclui correção de bugs, atualizações e escalabilidade conforme necessário.",
  },
  {
    question:
      "Quais são os custos associados ao desenvolvimento do meu projeto?",
    answer:
      "Os custos podem variar com base no escopo, tecnologias e complexidade. Fornecerei uma estimativa detalhada após analisar seus requisitos. Trabalharemos juntos para definir um orçamento realista.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Perguntas mais comuns
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Não consegue encontrar a resposta que procura? Entre em contato
              com o nosso contato de suporte. {""}
              <a
                href="#"
                className="font-semibold text-green-600 hover:text-green-500"
              >
                Contato de supote
              </a>{" "}
              team.
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq, index) => (
                <div key={faq.question}>
                  <dt
                    className="flex gap-4 text-base font-semibold leading-7 text-gray-900 cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    {faq.question}{" "}
                    {openIndex === index ? (
                      <MinusIcon className="h-6 w-6 text-green-700" />
                    ) : (
                      <PlusIcon className="h-6 w-6 text-green-700" />
                    )}
                  </dt>
                  {openIndex === index && (
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {faq.answer}
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
