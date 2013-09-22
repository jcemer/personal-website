module Jekyll
  module Converters
    class Markdown
      class RedcarpetParser
        module WithPygments
          include CommonMethods
          def block_code(code, lang)
            require 'pygments'
            lang = lang && lang.split.first || "text"
            output = add_code_tags(
              Pygments.highlight(code, :lexer => lang, :options => { :encoding => 'utf-8', :lineanchors => 'line' }),
              lang
            )
          end
        end
      end
    end
  end
end
