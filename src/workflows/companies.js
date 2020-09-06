module.exports = {
  identifier: "companies",
  header: "Companies",
  default: true,
  access: ["admin"],
  top_action: [
    {
      identifier: "companies-add",
      label: "Add Companies",
      icon: "plus-circle",
    },
  ],
  inline_action: [
    { identifier: "companies-delete", label: "Delete", icon: "pen" },
  ],
  db_config: {
    coll: "companies",
  },
  filter: {},
  searchField: "book_name",
  display: [
    { key: "name", label: "Company Name" },
    { key: "domain", label: "Domain" },
    { key: "address", label: "Address" },
    { key: "email", label: "Email" },
    { key: "employer", label: "Employer Name" },
  ],
};
