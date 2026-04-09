import { Response } from "express";
import { StructureInfo } from "./StructureViewTypes";

export class ListView {
  public missingItem(res: Response): void {
    res.status(400).json({ erro: "Informe o campo 'item' no corpo da requisição." });
  }

  public addSuccess(res: Response): void {
    res.status(201).json({ mensagem: "Item adicionado na lista." });
  }

  public removeEmpty(res: Response): void {
    res.status(404).json({ erro: "A lista está vazia." });
  }

  public removeSuccess(res: Response, removed: unknown): void {
    res.json({ removido: removed });
  }

  public removeAtInvalidType(res: Response): void {
    res.status(400).json({ erro: "O parâmetro index deve ser um número." });
  }

  public removeAtNotFound(res: Response): void {
    res.status(404).json({ erro: "Índice inválido para remoção." });
  }

  public removeAtSuccess(res: Response, removed: unknown, index: number): void {
    res.json({ removido: removed, indice: index });
  }

  public getAtInvalidType(res: Response): void {
    res.status(400).json({ erro: "O parâmetro index deve ser um número." });
  }

  public getAtNotFound(res: Response): void {
    res.status(404).json({ erro: "Índice inválido para consulta." });
  }

  public getAtSuccess(res: Response, item: unknown, index: number): void {
    res.json({ indice: index, item });
  }

  public peekEmpty(res: Response): void {
    res.status(404).json({ erro: "A lista está vazia." });
  }

  public peekSuccess(res: Response, last: unknown): void {
    res.json({ ultimo: last });
  }

  public getAll(res: Response, structure: StructureInfo, size: number, items: unknown[]): void {
    res.json({
      estrutura: structure,
      tamanho: size,
      itens: items,
    });
  }

  public clearSuccess(res: Response): void {
    res.json({ mensagem: "Lista limpa com sucesso." });
  }
}