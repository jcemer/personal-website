module Jekyll
  module Filters
    MONTHS = %w{Janeiro Fevereiro Março Abril Maio Junho Julho Agosto Setembro Outubro Novembro Dezembro}
    def date_month(input)
      MONTHS[input.strftime('%m').to_i]
    end

    def date_year(input)
      input.strftime('%Y')
    end
  end
end
