# This file is used by Rack-based servers to start the application.

require_relative "config/environment"

run Rails.application
Rails.application.load_server

set :application, "lokas"
set :repo_url, "git@github.com:DRY9p/lokas.git"
set :deploy_to, "/home/deploy/#{fetch :application}"
set :rbenv_prefix, '/usr/bin/rbenv exec'
append :linked_dirs, 'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', '.bundle', 'public/system', 'public/uploads'