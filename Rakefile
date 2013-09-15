task default: [:watch]

task :build do
  system('jekyll build')
end

task :watch do
  pids = [
    spawn('jekyll serve --watch')
  ]

  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end

  Process.wait *pids
end