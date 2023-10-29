"use client";

import {useEffect, useState} from "react";
import AnimationWrapper from "../animation-wrapper";
import {addData} from "@/app/services";

const controls = [
    {
        name: "name",
        placeholder: "Diga seu nome",
        type: "text",
        label: "Nome",
    },
    {
        name: "email",
        placeholder: "Informe envie um email",
        type: "email",
        label: "Email",
    },
    {
        name: "message",
        placeholder: "Digite sua mensagem",
        type: "text",
        label: "Mensagem",
    },
];

interface FormData {
    [key: string]: string;
    message: string;
    name: string,
    email: string,
}
// const [formData, setFormData] = useState<FormData>({});

// interface PropsCurrenTab {
//     currentTab: string
// }

const initialFormData = {
    name: "",
    email: "",
    message: "",
};

export default function ClientContactView() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    async function handleSendMessage() {
        const res = await addData({currentTab: "contact"}, {formData: formData});
        console.log(res, 'contact-res');

        if (res && res.success) {
            setFormData(initialFormData)
            setShowSuccessMessage(true)
        }
    }

    useEffect(() => {
        if (showSuccessMessage) {
            setTimeout(() => {
                setShowSuccessMessage(false)
            }, 1500)
        }

    }, [showSuccessMessage])

    const isValidForm = () => {
        return formData &&
            formData.name !== "" &&
            formData.email !== "" &&
            formData.message !== "";
    };

    console.log(isValidForm(), 'isValidForm()');

    return (
        <div
            className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
            id="contact"
        >
            <AnimationWrapper className={"py-6"}>
                <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
                    <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                        {"Entre em Contato".split(" ").map((item, index) => (
                            <span
                                className={`${index === 1 ? "text-green-main" : "text-[#000]"}`}
                            >
                {item}{" "}
              </span>
                        ))}
                    </h1>
                </div>
            </AnimationWrapper>
            <div className="text-gray-500 relative">
                <div className="container px-5">
                    <div className="w-full">
                        <div className="flex flex-wrap -m-2">
                            {controls.map((controlItem) =>
                                controlItem.name === "message" ? (
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label className="text-sm text-[#000]">
                                                {controlItem.label}
                                            </label>
                                            <textarea
                                                id={controlItem.name}
                                                name={controlItem.name}
                                                value={formData[controlItem.name]}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        [controlItem.name]: e.target.value,
                                                    })
                                                }
                                                className="w-full border-green-main border-[2px] bg-[#ffffff] rounded  h-32 text-base outline-none text-[#000000] py-1 px-3 resize-none leading-6"
                                            ></textarea>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label className="text-sm text-[#000]">
                                                {controlItem.label}
                                            </label>
                                            <input
                                                id={controlItem.name}
                                                name={controlItem.name}
                                                value={formData[controlItem.name]}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        [controlItem.name]: e.target.value,
                                                    })
                                                }
                                                className="w-full border-green-main border-[2px] bg-[#ffffff] rounded  text-base outline-none text-[#000000] py-1 px-3 leading-6"
                                            />
                                        </div>
                                    </div>
                                )
                            )}
                            {
                                showSuccessMessage &&
                                <p className="text-[14px] font-bold my-[8px]">Mensagem enviada com Sucesso!
                                    !</p>
                            }
                            <div className="p-2 w-full">
                                <button
                                    disabled={!isValidForm()}
                                    onClick={handleSendMessage}
                                    className="disabled:opacity-50 py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg text-2xl tracking-widest bg-green-main outline-none"
                                >
                                    Enviar Mensagem
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
