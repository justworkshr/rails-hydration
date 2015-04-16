$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "rails_hydration/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "rails_hydration"
  s.version     = RailsHydration::VERSION
  s.authors     = ["Nathan Hackley"]
  s.email       = ["nathanhackley@gmail.com"]
  s.homepage    = "https://github.com/hackley/rails-hydration"
  s.summary     = "Pass data from Ruby to Javascript the right way"
  s.description = "Pass data from Ruby to Javascript without writing JS in your .erb view files"
  s.licenses    = ['MIT']

  s.files = Dir["{app,lib}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.md"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", '~> 0'

  s.add_development_dependency "sqlite3", '~> 0'
end
