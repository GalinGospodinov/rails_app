class GooglemapsController < ApplicationController
  def show
    @requested_ip = request.remote_ip
    @remote_ip = request.env["HTTP_X_FORWARDED_FOR"]
    puts YAML::dump(@requested_ip)
  end
end
