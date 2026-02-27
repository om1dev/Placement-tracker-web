import { useState } from "react";
import API from "../../api/axios";
import Layout from "../../components/Layout";

export default function PostJob() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    package: "",
    requiredSkills: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await API.post("/jobs", {
        title: form.title,
        company: form.company,
        package: Number(form.package),
        requiredSkills: form.requiredSkills.split(","),
        deadline: form.deadline,
      });

      alert("Job Created Successfully");

    } catch (error) {
      alert(error.response?.data?.message || "Error creating job");
    }
  };

  return (
    <Layout>
      <h2>Create Job</h2>

      <input name="title" placeholder="Title" onChange={handleChange} />
      <br /><br />

      <input name="company" placeholder="Company" onChange={handleChange} />
      <br /><br />

      <input name="package" placeholder="Package" onChange={handleChange} />
      <br /><br />

      <input
        name="requiredSkills"
        placeholder="Skills (comma separated)"
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="date"
        name="deadline"
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={handleSubmit}>Create Job</button>
    </Layout>
  );
}