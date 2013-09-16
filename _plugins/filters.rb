module Jekyll
  module Filters
    MONTHS = %w{Janeiro Fevereiro Março Abril Maio Junho Julho Agosto Setembro Outubro Novembro Dezembro}
    def date_format(input)
      "#{MONTHS[input.strftime('%m').to_i]} de #{input.strftime('%Y')}"
    end
  end
end
