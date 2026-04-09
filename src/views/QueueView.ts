import { Response } from "express";
import { StructureInfo } from "./StructureViewTypes";

export class QueueView {
  public missingItem(res: Response): void {
    res.status(400).json({ erro: "Informe o campo 'item' no corpo da requisição." });
  }

  public addSuccess(res: Response): void {
    res.status(201).json({ mensagem: "Item adicionado na fila." });
  }

  public removeEmpty(res: Response): void {
    res.status(404).json({ erro: "A fila está vazia." });
  }

  public removeSuccess(res: Response, removed: unknown): void {
    res.json({ removido: removed });
  }

  public peekEmpty(res: Response): void {
    res.status(404).json({ erro: "A fila está vazia." });
  }

  public peekSuccess(res: Response, front: unknown): void {
    res.json({ frente: front });
  }

  public getAll(res: Response, structure: StructureInfo, size: number, items: unknown[]): void {
    res.json({
      estrutura: structure,
      tamanho: size,
      itens: items,
    });
  }

  public clearSuccess(res: Response): void {
    res.json({ mensagem: "Fila limpa com sucesso." });
  }
}