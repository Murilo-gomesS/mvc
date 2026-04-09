import { Response } from "express";
import { StructureInfo } from "./StructureViewTypes";

export class StackView {
  public missingItem(res: Response): void {
    res.status(400).json({ erro: "Informe o campo 'item' no corpo da requisição." });
  }

  public addSuccess(res: Response): void {
    res.status(201).json({ mensagem: "Item adicionado na pilha." });
  }

  public removeEmpty(res: Response): void {
    res.status(404).json({ erro: "A pilha está vazia." });
  }

  public removeSuccess(res: Response, removed: unknown): void {
    res.json({ removido: removed });
  }

  public peekEmpty(res: Response): void {
    res.status(404).json({ erro: "A pilha está vazia." });
  }

  public peekSuccess(res: Response, top: unknown): void {
    res.json({ topo: top });
  }

  public getAll(res: Response, structure: StructureInfo, size: number, items: unknown[]): void {
    res.json({
      estrutura: structure,
      tamanho: size,
      itens: items,
    });
  }

  public clearSuccess(res: Response): void {
    res.json({ mensagem: "Pilha limpa com sucesso." });
  }
}