function something()
{
  let x = window.localStorage.getItem('bbb'); // x = hh['bbb']

  x = x * 1 + 1; // x = x + 1

  window.localStorage.setItem('bbb', x); // hh['bbb'] = x

  alert(x);
}

function add_to_cart(id)
{

  let key = 'product_' + id;
  
  let x = window.localStorage.getItem(key); // x = hash['product_id']
  
  x = x * 1 + 1; // x += 1

  window.localStorage.setItem(key, x); // hash['product_id'] = x

  update_orders_input()
}

// Вывод колличества item'ов в корзине
function cart_get_number_of_items()
{
  let cnt = 0;
  for (let i = 0; i < window.localStorage.length; i++)
  {
    let key = window.localStorage.key(i); // Получаем ключ
    let value = window.localStorage.getItem(key); // Получаем значения, в Ruby: hh['key'] = x

    if (key.indexOf('product_') == 0) 
    {
      cnt += value * 1;
    }
  }

  return cnt;
}

function update_orders_input()
{
  let orders = cart_get_orders();
  $('#orders_input').val(orders);
}

function cart_get_orders()
{
  let orders = '';
  for (let i = 0; i < window.localStorage.length; i++)
  {
    let key = window.localStorage.key(i); // Получаем ключ
    let value = window.localStorage.getItem(key); // Получаем значения, в Ruby: hh['key'] = x

    if (key.indexOf('product_') == 0) 
    {
      orders += key + ' = ' + value * 1 + ', ';
    }
  }

  return orders;
}
