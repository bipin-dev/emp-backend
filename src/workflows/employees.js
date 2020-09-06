module.exports = {
  identifier: "employees",
  header: "Employees",
  // default: true,
  access: ["admin"],
  top_action: [
    { identifier: "employees-add", label: "Add Employees" }
  ],
  inline_action: [
    { identifier: "employees-delete", label: "Delete"  }
  ],
  db_config: {
    coll: "employees"
  },
  filter: { status: "requested" },
  display: [
    { key: "pic", label: "Photo" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "position", label: "Designation" },
    { key: "phone", label: "Phone" },

  ],
  formatter: async (items, fr, user) => {
    console.log("items is ... ", items); 
    return items;
  }
};

async function getBookInfo(bookId, fr) {
  return fr.DBManager.db.books.findOne({ _id: bookId });
}
