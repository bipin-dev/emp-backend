module.exports = {
  identifier: "companies-delete",
  form: {
    header: "Delete Company Info",
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
    return await db.companies.removeOne({ _id: recordId });
  },
};
