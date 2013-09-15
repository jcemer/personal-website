task default: [:watch]

task :build do
  build
end

task :watch do
  # build
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

def build
  system('sass --update assets/stylesheets')
  system('jekyll build')
end