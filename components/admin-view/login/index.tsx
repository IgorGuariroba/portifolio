"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "username",
    placeholder: "Digite o Nome do Usuário",
    type: "text",
    label: "Nome do Usuário",
  },
  {
    name: "password",
    placeholder: "Digite a Senha do Usuário",
    type: "password",
    label: "Senha",
  },
];

export default function Login({ formData, setFormData, handleLogin }) {
    return (
        <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-green-main flex justify-center items-center" >
                    <div className="w-[40px] h-[40px] flex justify-center items-center p-3 rounded-[8px] border-green-main bg-green-main">
                        <span className="text-[#fff] text-[25px] font-bold">P</span>
                    </div>
                    ortfolio
                </div>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Faça login na sua conta
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="space-y-6">
                    <FormControls
                        controls={controls}
                        formData={formData}
                        setFormData={setFormData}
                    />
                    <div>
                        <button
                            onClick={handleLogin}
                            className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 text-white-300"
                        >
                            Login
                        </button>
                    </div>
                </div>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Está conta?{' '}
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-green-500">
                        pertence a um unico usuário
                    </a>
                </p>
            </div>
        </div>
    </>
    );
}
