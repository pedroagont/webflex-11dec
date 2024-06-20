=begin

CHALLENGE 6

Implement the incomplete wrap_array_items method

=end

class ArrayFormatter

    def wrap_array_items(items, left, right)
        items.map { |item| "#{left}#{item}#{right}" }
    end
  
  end

  af = ArrayFormatter.new

  result = af.wrap_array_items([0, 1, 2, 3, 4, 5, 6], '0', '.rb')

  puts result