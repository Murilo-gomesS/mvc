import { Request, Response } from "express";
import { queue } from "../models/instances";
import { QueueView } from "../views/QueueView";

export class QueueController {
  private readonly view = new QueueView();

  public add(req: Request, res: Response): void {
    const { item } = req.body as { item?: unknown };

    if (item === undefined) {
      this.view.missingItem(res);
      return;
    }

    queue.add(item);
    this.view.addSuccess(res);
  }

  public remove(_req: Request, res: Response): void {
    const removed = queue.remove();

    if (removed === undefined) {
      this.view.removeEmpty(res);
      return;
    }

    this.view.removeSuccess(res, removed);
  }

  public peek(_req: Request, res: Response): void {
    const front = queue.peek();

    if (front === undefined) {
      this.view.peekEmpty(res);
      return;
    }

    this.view.peekSuccess(res, front);
  }

  public getAll(_req: Request, res: Response): void {
    this.view.getAll(
      res,
      {
        id: queue.getId(),
        name: queue.name,
      },
      queue.getSize(),
      queue.getItems()
    );
  }

  public clear(_req: Request, res: Response): void {
    queue.clear();
    this.view.clearSuccess(res);
  }
}
