"use client";

export default function FormControls({ controls, formData, setFormData }) {
  return controls.map((controlItem) => (
  <div>
      <label htmlFor={controlItem.label} className="block text-sm font-medium leading-6 text-gray-900">
          {controlItem.label}
      </label>
      <div className="mt-2">
          <input
              placeholder={controlItem.placeholder}
              type={controlItem.type}
              name={controlItem.name}
              id={controlItem.name}
              value={formData[controlItem.name]}
              onChange={(e) => {
                  setFormData({
                      ...formData,
                      [controlItem.name]: e.target.value,
                  });
              }}
              autoComplete={controlItem.type}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
          />
      </div>
  </div>
  ));
}
