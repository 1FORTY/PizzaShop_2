function something()
{
  let x = window.localStorage.getItem('bbb'); // x = hh['bbb']

  x = x * 1 + 1; // x = x + 1

  window.localStorage.setItem('bbb', x); // hh['bbb'] = x

  alert(x);
}

function add_to_cart(id) {

  let key = 'product_' + id;
  
  let x = window.localStorage.getItem(key); // x = hash['product_id']
  
  x = x * 1 + 1; // x += 1

  window.localStorage.setItem(key, x); // hash['product_id'] = x

}
