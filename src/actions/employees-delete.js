module.exports = {
  identifier: "employees-delete",
  form: {
    header: "Delete Employee",
    fields: [
      {
        key: "text",
        label: "Do you want to delete",
        type: "confirm_message",
      },
    ],
  },
  validate: (form, db, fr, users, recordId) => {
    return { isValid: true, message: "delete" };
  },
  save: async (form, db, fr, users, recordId) => {
    return await db.employees.removeOne({ _id: recordId });
  },
};
