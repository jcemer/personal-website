task default: [:watch]

task :build do
  build_sass
  build_jekyll
end

task :watch do
  build_sass

  pids = [
    spawn('sass --watch assets/stylesheets'),
    spawn('jekyll serve --watch')
  ]

  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end

  pids.each do |pid|
    Process.wait pid
  end
end

def build_sass
  system('sass --update assets/stylesheets')
end

def build_jekyll
  system('jekyll build')
end
