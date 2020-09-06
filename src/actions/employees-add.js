module.exports = {
    identifier: "employees-add",
    form: {
      header: "Add employees",
      type : "array" , 
      fields: [
        {
          key: "phone",
          label: "Company Name",
          type: "file"
        },
        {
          key: "name",
          label: "Employee Name",
          type: "input"
        },
        {
            key: "email",
            label: "Email",
            type: "input"
        },
        {
          key: "position",
          label: "Designation",
          type: "input"
        },
        {
          key: "phone",
          label: "Phone",
          type: "number"
        }
      ]
    },
    validate: (form, db, fr, users) => {
      return { isValid: true, message: "form is valid" };
    },
    save: async (form, db, fr, users) => {
      console.log("adding employees info ", form);
      return await db.employees.save(form);
    }
  };