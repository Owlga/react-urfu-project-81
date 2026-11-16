export const expectedForms = {
  empty: '<form action="#" method="post"></form>',

  actionUrl: '<form action="/users" method="post"></form>',

  get: '<form action="#" method="get"></form>',

  oneInput:
    '<form action="#" method="post">' +
    '<label for="name">Name</label>' +
    '<input name="name" type="text" value="rob">' +
    "</form>",

  extraInput:
    '<form action="#" method="post">' +
    '<label for="name">Name</label>' +
    '<input name="name" type="text" value="rob" class="user-input">' +
    "</form>",

  textarea:
    '<form action="#" method="post">' +
    '<label for="job">Job</label>' +
    '<textarea cols="20" rows="40" name="job">hexlet</textarea>' +
    "</form>",

  textareaNewDefaults:
    '<form action="#" method="post">' +
    '<label for="job">Job</label>' +
    '<textarea cols="50" rows="50" name="job">hexlet</textarea>' +
    "</form>",

  extraAs:
    '<form action="#" method="post">' +
    '<label for="job">Job</label>' +
    '<textarea cols="20" rows="40" name="job" class="my-textarea">hexlet</textarea>' +
    "</form>",

  submitDefault:
    '<form action="#" method="post">' +
    '<label for="name">Name</label>' +
    '<input name="name" type="text" value="rob">' +
    '<label for="job">Job</label>' +
    '<input name="job" type="text" value="hexlet">' +
    '<input type="submit" value="Save">' +
    "</form>",

  submitExtra:
    '<form action="#" method="post">' +
    '<label for="name">Name</label>' +
    '<input name="name" type="text" value="rob">' +
    '<label for="job">Job</label>' +
    '<input name="job" type="text" value="hexlet">' +
    '<input type="submit" value="Wow">' +
    "</form>",
};
