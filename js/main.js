function createCard(id) {
  let container = document.getElementById('container');
  let flip_div = document.createElement('div');
  let back_div = document.createElement('div');
  let front_div = document.createElement('div');

  flip_div.setAttribute('class', 'flip');
  back_div.setAttribute('class', 'back');
  front_div.setAttribute('id', id);
  front_div.setAttribute('class', 'front');

  container.appendChild(flip_div);
  flip_div.appendChild(back_div);
  flip_div.appendChild(front_div);
}

function createDeck(n) {
  for (let id = 0; id < n; id++) {
    createCard(id);
    if (id > 0) {
      setBackgroundPosition(id, -149, 0);
    }
  }
}

function setBackgroundPosition(id, x_offset, y_offset) {
    var prev_div = $('#' + (id - 1));
    var current_div = $('#' + id);
    var current_position = prev_div.css('backgroundPosition').split(" ");
    var pos_x = parseInt(current_position[0]);
    var pos_y = parseInt(current_position[1]);

    current_div.css('background-position', (pos_x + x_offset) + 'px ' + (pos_y + y_offset) + 'px')
  // console.log(current_div.css('backgroundPosition'))
};

createDeck(4);
