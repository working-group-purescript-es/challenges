{ name = "project-node"
, dependencies =
  [ "console", "effect", "example-ps-esm", "prelude", "psci-support" ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs", "test/**/*.purs" ]
}
