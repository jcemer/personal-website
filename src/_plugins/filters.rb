module Jekyll
  module Filters
    def date_month(input)
      input.strftime('%B')
    end

    def date_year(input)
      input.strftime('%Y')
    end
  end
end
