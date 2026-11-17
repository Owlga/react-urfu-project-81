export const expectedForms = {
  empty: '<form method="post" action="#"></form>',

  actionUrl: '<form method="post" action="/users"></form>',

  get: '<form method="get" action="#"></form>',

  oneInput:
    '<form method="post" action="#">' +
    '<label for="name">Name</label>' +
    '<input name="name" type="text" value="rob">' +
    "</form>",

  extraInput:
    '<form method="post" action="#">' +
    '<label for="name">Name</label>' +
    '<input name="name" type="text" value="rob" class="user-input">' +
    "</form>",

  textarea:
    '<form method="post" action="#">' +
    '<label for="job">Job</label>' +
    '<textarea cols="20" rows="40" name="job">hexlet</textarea>' +
    "</form>",

  textareaNewDefaults:
    '<form method="post" action="#">' +
    '<label for="job">Job</label>' +
    '<textarea cols="50" rows="50" name="job">hexlet</textarea>' +
    "</form>",

  extraAs:
    '<form method="post" action="#">' +
    '<label for="job">Job</label>' +
    '<textarea cols="20" rows="40" name="job" class="my-textarea">hexlet</textarea>' +
    "</form>",

  submitDefault:
    '<form method="post" action="#">' +
    '<label for="name">Name</label>' +
    '<input name="name" type="text" value="rob">' +
    '<label for="job">Job</label>' +
    '<input name="job" type="text" value="hexlet">' +
    '<input type="submit" value="Save">' +
    "</form>",

  submitExtra:
    '<form method="post" action="#">' +
    '<label for="name">Name</label>' +
    '<input name="name" type="text" value="rob">' +
    '<label for="job">Job</label>' +
    '<input name="job" type="text" value="hexlet">' +
    '<input type="submit" value="Wow">' +
    "</form>",

  labelHtml:
    '<form method="post" action="#">' +
    '<label for="name" class="form-label" id="name-label">User</label>' +
    '<input name="name" type="text" value="rob"><input type="submit" value="Ok"></form>',
};
