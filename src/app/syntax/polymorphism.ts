interface Document {
  createElement(tagName: number): Element;
  createElement(tagName: string): HTMLElement;
  createElement(tagName: "div"): HTMLDivElement;
  createElement(tagName: "span"): HTMLSpanElement;
  createElement(tagName: "canvas"): HTMLCanvasElement;
}

const a : Document = new Document()

a.createElement(0);
a.createElement('0');
a.createElement('div');