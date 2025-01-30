import React from "react";

const UserForm = () => {
  const [userData, setUserData] = React.useState([]);
  const [formData, setFormData] = React.useState({
    name: "",
    age: "",
    country: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetFormData = () => {
    setFormData({
      name: "",
      age: "",
      country: "",
      mobile: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const filteredData = userData?.filter((data) => data.mobile === formData.mobile);
    if (filteredData.length > 0) {
      const modiData = userData.map(obj => { 
        if (obj.mobile === formData.mobile) {
            return { ...obj, 
              name: formData.name,
              age: formData.age,
              country: formData.country,
              mobile: formData.mobile,
            };
        }
        return obj;
    });
      setUserData(modiData);
      return;
    } else {
      setUserData((prevState) => {
        return [...prevState, formData];
      });
    }
    resetFormData();
  };

  const deleteData = (index) => {
    const newData = userData.filter((data, i) => i !== index);
    setUserData(newData);
  };

  const editData = (index) => {
    const newData = userData.filter((data, i) => i === index);
    console.log(newData);
    setFormData(newData);
  };

  const handleParentClick = (event) => {
    console.log('Parent clicked (capturing)');
    event.stopPropagation();
  };

  const handleChildClick = () => {
    console.log('Child clicked');
  };

  return (
    <div>
      <div style={styles.container}>
        <h2>User Data Form</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              min="1"
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="mobile">Mobile:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              placeholder="10-digit number"
            />
          </div>

          <button type="submit" style={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
      {userData?.length > 0 && (
        <div>
          {/* // Display user data in table format */}
          <h2 style={{ textAlign: "center" }}>User Data</h2>
          <table style={{ margin: "0 auto" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Country</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.country}</td>
                  <td>
                    <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                      {user.mobile}
                      <div style={{ display: "flex", gap: "10px" }}>
                        <button onClick={() => deleteData(index)}>Delete</button>
                        <button onClick={() => editData(index)}>Edit</button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* <div style={styles.parent} onClick={() => console.log('parent')}>
        <div style={styles.child} onClick={(event) => {
          console.log('child')
          // event.stopPropagation();
          }}
        >
        </div>
      </div>

      <div
      onClickCapture={handleParentClick} // Capturing phase
      style={{ padding: '20px', backgroundColor: '#f0f0f0' }}
    >
      <button onClick={handleChildClick} style={{ padding: '10px' }}>
        Click Me
      </button>
    </div> */}
    </div>
  );
};

export default UserForm;

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  submitButton: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  submitButtonHover: {
    backgroundColor: "#0056b3",
  },
  successMessage: {
    color: "#28a745",
    textAlign: "center",
  },
  parent: {
    height: '200px',
    width: '200px',
    backgroundColor: 'powderblue',
    display: "flex",
    margin: '0 auto',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  child: {
    height: '100px',
    width: '100px',
    backgroundColor: 'red',
  }
};
