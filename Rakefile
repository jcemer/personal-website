require "html-proofer"
require "html5_validator/validator"

task default: [:watch]

task :build do
  fail unless system("jekyll build")
end

task :html_checker do
  failed = false
  puts "Running HTML checker..."

  files = Dir["./_site/**/*.html"]
  puts "Scanning #{files.size} markup files."

  validator = Html5Validator::Validator.new
  files.each do |file|
    puts "  Checking #{file}..."
    contents = File.read(file)
    validator.validate_text(contents)
    unless validator.valid?
      puts validator.errors
      failed = true
    end
  end

  fail if failed
end

task :html_proofer do
  HTMLProofer.check_directory("./_site", {
    url_ignore: [
      "https://www.linkedin.com/in/jcemer",
      "https://www.html5rocks.com/en/tutorials/webcomponents/shadowdom"
    ]
  }).run
end

task :watch do
  fail unless system("jekyll serve --watch")
end
