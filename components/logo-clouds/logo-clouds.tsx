import Image from "next/legacy/image";
export default function LogoClouds() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          <div className="bg-green-900/70 p-8 sm:p-10">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-green-900/70 p-6 sm:p-10">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
              alt="Reform"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-green-900/70 p-6 sm:p-10">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-green-900/70 p-6 sm:p-10">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg"
              alt="Laravel"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-green-900/70 p-6 sm:p-10">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-green-900/70 p-6 sm:p-10">
            <Image
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
