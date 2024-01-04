import axios from 'axios'
import React,{useEffect,useState} from "react";

function Axios() {
  const postobj = {
    userid: " ",
    title: " ",
    body: " ",
  };
  const [post, setpost] = useState(postobj);
  const [postdata, setpostdata] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.data)
      .then((ref) => {
        setpostdata(ref);
      });
  };

  const handleOnchange = (e) => {
    setpost({ ...post, [e.target.name]: e.target.value });
 };

  const submit = () => {
    axios.post("https://jsonplaceholder.typicode.com/posts", post)
      .then((response) => response.data)
      .then((ref) => {
        setpostdata([...postdata, ref]);
      });
  };

  return (
    <div>
      <input
        type="text"
        name="userid"
        className="border"
        onChange={handleOnchange}
      />
      <input
        type="text"
        name="title"
        className="border"
        onChange={handleOnchange}
      />
      <input
        type="text"
        name="body"
        className="border"
        onChange={handleOnchange}
      />
      <button onClick={submit}>Submit</button>
      <table border={1}>
        <tr>
          <th>USER ID</th>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>

        {postdata.map((user, id) => (
          <tr>
            <td>{user.userid}</td>
            <td>{id + 1}</td>
            <td>{user.title}</td>
            <td>{user.body}</td>
          </tr>
        ))};
      </table>
    </div>
  );
}

export default Axios;
