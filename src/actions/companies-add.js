module.exports = {
    identifier: "companies-add",
    form: {
      header: "Add Companies",
      fields: [
        {
          key: "name",
          label: "Company Name",
          type: "input"
        },
        {
          key: "domain",
          label: "Company Domain",
          type: "input"
        },
        {
          key: "address",
          label: "Company Address",
          type: "input"
        },
        {
          key: "email",
          label: "Company Email",
          type: "input"
        },
        {
            key: "employer",
            label: "Employer Name",
            type: "input"
        }
      ]
    },
    validate: (form, db, fr, users) => {
      return { isValid: true, message: "form is valid" };
    },
    save: async (form, db, fr, users) => {
      console.log("adding company info ", form);
      return await db.companies.save(form);
    }
  };