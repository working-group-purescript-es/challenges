
{ name = "example-ps-esm"
, dependencies = [ "console", "effect", "prelude", "psci-support" ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs", "test/**/*.purs" ]
}
