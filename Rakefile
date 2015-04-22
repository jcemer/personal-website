require "html/proofer"
require "w3c_validators"

deploy_dir = "_deploy"

task default: [:build, :watch]

task :build do
  fail unless system("compass compile")
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
    "https://ajlopez.wordpress.com/2013/05/30/aplicaciones-distribuidas-y-node-js"
  ]).run
end

task :watch do
  pids = [
    spawn("compass watch"),
    spawn("jekyll serve --watch")
  ]

  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end

  pids.each do |pid|
    Process.wait pid
  end
end

task :setup_deploy, :repo, :branch do |t, args|
  rm_rf deploy_dir
  mkdir deploy_dir
  cd deploy_dir do
    system "git init"
    system "git add ."
    system "git commit --allow-empty -m 'Init'"
    system "git branch -m #{args.branch}"
    system "git remote add origin #{args.repo}"
    system "git fetch"
    system "git branch -u origin/#{args.branch}"
  end
end

task :deploy do
  cp_r "_site/.", deploy_dir
  cd deploy_dir do
    system "git add -A"
    message = "Site updated at #{Time.now.utc}"
    system "git commit --allow-empty -m '#{message}'"
    system "git push -f"
  end
end

def w3c_markup_validate(file)
  validator = W3CValidators::MarkupValidator.new
  validator.validate_file(file)
end
