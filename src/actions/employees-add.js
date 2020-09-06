const fs = require("fs");
const _ = require("underscore");
const { isEmpty } = require("underscore");

module.exports = {
  identifier: "employees-add",
  form: {
    header: "Add employees",
    type: "array",
    fields: [
      {
        key: "pic",
        label: "Profile Pic",
        type: "file",
      },
      {
        key: "name",
        label: "Employee Name",
        type: "input",
      },
      {
        key: "email",
        label: "Email",
        type: "input",
      },
      {
        key: "position",
        label: "Designation",
        type: "input",
      },
      {
        key: "phone",
        label: "Phone",
        type: "number",
      },
    ],
  },
  validate: (form, db, fr, users) => {
    return { isValid: true, message: "form is valid" };
  },
  save: async (form, db, fr, users) => {
    for (let key in Object.keys(form)) {
      let frm = Object.assign({}, form[key]);
      if (frm.pic) {
        frm.pic = await saveFile(frm.pic, fr);
      }
      console.log("frm is.. ", frm);
      if (!_.isEmpty(frm)) {
        return await db.employees.save(frm);
      }
    }
    return "done";
  },
};

function saveFile(file, fr) {
  let fileData = file.data;
  let assetDir = "/img/" + file.filename;
  let fileURL = fr.config.app_url + assetDir;
  let finalPath = fr.config.dir.app + "/public" + assetDir;
  base64Image = fileData.split(";base64,").pop();
  return new Promise((resolve, rejects) => {
    fs.writeFile(finalPath, base64Image, { encoding: "base64" }, (err) => {
      resolve(fileURL);
    });
  });
}
