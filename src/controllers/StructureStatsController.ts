import { Request, Response } from "express";
import { LinearStructure } from "../models/LinearStructure";
import { list, queue, stack } from "../models/instances";
import { StructureStatsView } from "../views/StructureStatsView";

export class StructureStatsController {
  private readonly view = new StructureStatsView();

  public getStats(_req: Request, res: Response): void {
    this.view.render(res, LinearStructure.getCreatedStructures(), [
      {
        id: stack.getId(),
        name: stack.name,
        tamanho: stack.getSize(),
        tipo: "pilha",
      },
      {
        id: queue.getId(),
        name: queue.name,
        tamanho: queue.getSize(),
        tipo: "fila",
      },
      {
        id: list.getId(),
        name: list.name,
        tamanho: list.getSize(),
        tipo: "lista",
      },
    ]);
  }
}
