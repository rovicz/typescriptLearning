import _ from "lodash";
import ClipboardJS from "clipboard";

const button = new ClipboardJS("button");

function handleCopy(event: ClipboardJS.Event) {
  if (typeof event.text === "string") {
    return console.log("Foi Copiado com Sucesso.");
  }
}

button.on("success", handleCopy);

_.concat([2, 4, 8], [16, 32, 64]); // [2, 4, 8, 16, 32, 64];

interface Produto {
  nome: string;
}

const livro: Produto = {
  nome: "Star Wars: O Império Contra-Ataca",
};
