import { Request, Response } from "express";
import { stack } from "../models/instances";
import { StackView } from "../views/StackView";

export class StackController {
  private readonly view = new StackView();

  public add(req: Request, res: Response): void {
    const { item } = req.body as { item?: unknown };

    if (item === undefined) {
      this.view.missingItem(res);
      return;
    }

    stack.add(item);
    this.view.addSuccess(res);
  }

  public remove(_req: Request, res: Response): void {
    const removed = stack.remove();

    if (removed === undefined) {
      this.view.removeEmpty(res);
      return;
    }

    this.view.removeSuccess(res, removed);
  }

  public peek(_req: Request, res: Response): void {
    const top = stack.peek();

    if (top === undefined) {
      this.view.peekEmpty(res);
      return;
    }

    this.view.peekSuccess(res, top);
  }

  public getAll(_req: Request, res: Response): void {
    this.view.getAll(
      res,
      {
        id: stack.getId(),
        name: stack.name,
      },
      stack.getSize(),
      stack.getItems()
    );
  }

  public clear(_req: Request, res: Response): void {
    stack.clear();
    this.view.clearSuccess(res);
  }
}
