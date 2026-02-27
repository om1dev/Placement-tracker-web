import Layout from "../../components/Layout";

export default function ManageUsers() {
  return (
    <Layout>
      <h2>Manage Users</h2>

      <table
        width="100%"
        border="1"
        cellPadding="10"
        style={{ marginTop: "20px", background: "white" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rahul Patil</td>
            <td>student@gmail.com</td>
            <td>Student</td>
            <td>Active</td>
            <td>
              <button>Block</button>
            </td>
          </tr>
          <tr>
            <td>Company HR</td>
            <td>recruiter@gmail.com</td>
            <td>Recruiter</td>
            <td>Active</td>
            <td>
              <button>Block</button>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}