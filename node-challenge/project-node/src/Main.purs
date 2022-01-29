module Main where 

import Effect 
import Prelude
import Effect.Class.Console (log)
import Example.ESM (helloFromPSESM)
import Cjs as Cjs 

foreign import helloFromCJS :: String 
foreign import helloFromESM :: String
foreign import helloFromPSESMviaFFI :: String

main :: Effect Unit
main = do
    log "Hello from my project"
    log helloFromCJS
    log helloFromESM
    log helloFromPSESM
    log $ helloFromPSESMviaFFI <> " via FFI"
    h <- Cjs.anotherHelloFromCJs
    log $ "another" <> h
