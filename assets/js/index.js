'use strict';

const render = (root) => {
  root.empty();

  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(listStudents(_ => render(root)));
  root.append(wrapper);
}
const state = {
  students: null,
};

$( _ => {
  getJSON('api/v1/students', (err, json) => {
    if (err) { return alert(err.message);}
    state.students = json;
    const root = $('.root');
    render(root);
  });
});
