interface newElement {
    createElement(tagName: any): Element;
}
interface newElement {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
}
interface newElement {
    createElement(tagName: string): HTMLElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
}

interface newElement {
    createElement(tagName: any): HTMLFormElement;
}

// let ele: newElement = {
//     createElement: (tagName: any) => {
//         if (typeof tagName === 'string') {
//             return HTMLDivElement;
//         }
//         return new Element();
//     }
// }
// let b = ele.createElement('span');