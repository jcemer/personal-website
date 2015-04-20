require "html/proofer"

deploy_dir = "_deploy"

task default: [:watch]

task :build do
  build_sass
  build_jekyll
end

task :test do
  build_sass
  build_jekyll
  HTML::Proofer.new("./_site", href_ignore: [
    "http://alistapart.com/article/responsive-web-design",
    "http://blog.realstuffforabstractpeople.com/post/31753521367/classnames-for-styling-data-attributes-for-behavior",
    "https://ajlopez.wordpress.com/2013/05/30/aplicaciones-distribuidas-y-node-js"
  ]).run
end

task :watch do
  build_sass

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
  build_sass
  build_jekyll
  cp_r "_site/.", deploy_dir
  cd deploy_dir do
    system "git add -A"
    message = "Site updated at #{Time.now.utc}"
    system "git commit --allow-empty -m '#{message}'"
    system "git push -f"
  end
end

def build_sass
  fail unless system("compass compile")
end

def build_jekyll
  fail unless system("jekyll build")
end
