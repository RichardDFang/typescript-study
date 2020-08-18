import './classTypes'
import './extending'
import './function'
import './hybrid'
import './indexable'
import './optionalProperties'
import './readonly'

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    // console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object", type: 2 };
printLabel(myObj);