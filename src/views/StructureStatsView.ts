import { Response } from "express";
import { StructureStatsItem } from "./StructureViewTypes";

export class StructureStatsView {
  public render(res: Response, totalEstruturasCriadas: number, estruturas: StructureStatsItem[]): void {
    res.json({
      totalEstruturasCriadas,
      estruturas,
    });
  }
}