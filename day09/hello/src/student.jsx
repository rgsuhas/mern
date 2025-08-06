import "./App.css";

function Student() {
  return <h1 className="title ">Student Information</h1>;
}

export default function Sinfo() {
  return (
    <>
      <Student />
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>aaa</td>
            <td>a@a.com</td>
            <td>12345</td>
          </tr>
          <tr>
            <td>bbb</td>
            <td>b@b.com</td>
            <td>67890</td>
          </tr>
          <tr>
            <td>ccc</td>
            <td>c@c.com</td>
            <td>13579</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
