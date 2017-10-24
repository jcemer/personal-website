require "html/proofer"
require "w3c_validators"

task default: [:watch]

task :build do
  fail unless system("jekyll build")
end

task :w3c_validators do
  puts "Running W3C validators..."

  files = Dir["./_site/**/*.html"]
  puts "Scanning #{files.size} markup files."

  errors = files.map do |file|
    w3c_markup_validate(file).errors
  end.flatten

  unless errors.empty?
    puts errors
    fail
  end
end

task :html_proofer do
  HTML::Proofer.new("./_site", href_ignore: [
    "http://alistapart.com/article/responsive-web-design",
    "http://blog.realstuffforabstractpeople.com/post/31753521367/classnames-for-styling-data-attributes-for-behavior",
    "https://ajlopez.wordpress.com/2013/05/30/aplicaciones-distribuidas-y-node-js",
    "https://customelements.io"
  ]).run
end

task :watch do
  fail unless system("jekyll serve --watch")
end

def w3c_markup_validate(file)
  validator = W3CValidators::MarkupValidator.new
  validator.validate_file(file)
end
