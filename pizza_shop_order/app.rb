
orders_line = "product_1=10,product_2=4,product_3=11,"

def parse_order_line order_line

  s1 = order_line.split(',')

  arr = []
  s1.each do |x|
    s2 = x.split('=')

    s3 = s2[0].split('_')
    
    id = s3[1]
    cnt = s2[1]

    arr2 = [id, cnt]
    arr.push arr2
  end
    return arr
end

puts parse_order_line(orders_line).inspect
