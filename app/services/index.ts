interface PropsCurrenTab {
  currentTab: string
}

interface PropsFormData {
  formData: Object
}
export async function addData(currentTab: PropsCurrenTab, formData: PropsFormData) {
  try {
    const response = await fetch(`/api/${currentTab}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    return await response.json();
  } catch (e) {
    console.log(e);
  }
}

export async function getData(currentTab: PropsCurrenTab) {
  try {
    const response = await fetch(`/api/${currentTab}/get`, {
      method: "GET",
    });

    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function updateData(currentTab: PropsCurrenTab, formData: PropsFormData) {
  try {
    const response = await fetch(`/api/${currentTab}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function login(formData: PropsFormData) {
  try {
    const response = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}
