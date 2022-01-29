
export { helloFromCJS } from "example-cjs";
export { helloFromESM } from "example-esm";
import { helloFromPSESM } from "example-ps-esm"
export const helloFromPSESMviaFFI = helloFromPSESM
export const someoneForgotToRemoveMe = "Unused"
