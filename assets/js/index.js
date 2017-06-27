'use strict';

const render = (root) => {
    root.empty();

    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Coders(_ => render(root)));
    root.append(wrapper);
}
const state = {
    students: null,
};

$(_ => {
    getJSON('http://laboratoria.cuadra.co:9339/api/v1/students/', (err, json) => {
        if (err) {
            return alert(err.message);
        }
        state.students = json;
        console.log(state.students[0].name);
        const root = $('.coders');
        render(root);
    });
});
