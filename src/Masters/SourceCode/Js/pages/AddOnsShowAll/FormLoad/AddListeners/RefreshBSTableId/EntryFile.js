import { StartFunc as StartFuncfetchasGet } from "./fetchasGet/entryFile.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("RefreshBSTableId");

    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("click", StartFuncfetchasGet);
    };
};

export { StartFunc };