module Jekyll
	module Filters
		def date_format(input)
			months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
			months[input.strftime('%m').to_i] + ' de ' + input.strftime('%Y')
		end
	end
end