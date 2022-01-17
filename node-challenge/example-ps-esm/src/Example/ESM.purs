module Example.ESM
  ( helloFromPSESM
  )
  where

import Prelude

import Effect (Effect)
import Effect.Console (log)

foreign import helloFromPSESM :: String 
