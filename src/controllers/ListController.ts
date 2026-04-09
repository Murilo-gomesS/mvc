import { Request, Response } from "express";
import { list } from "../models/instances";
import { ListView } from "../views/ListView";

export class ListController {
  private readonly view = new ListView();

  public add(req: Request, res: Response): void {
    const { item } = req.body as { item?: unknown };

    if (item === undefined) {
      this.view.missingItem(res);
      return;
    }

    list.add(item);
    this.view.addSuccess(res);
  }

  public remove(_req: Request, res: Response): void {
    const removed = list.remove();

    if (removed === undefined) {
      this.view.removeEmpty(res);
      return;
    }

    this.view.removeSuccess(res, removed);
  }

  public removeAt(req: Request, res: Response): void {
    const index = Number(req.params.index);

    if (Number.isNaN(index)) {
      this.view.removeAtInvalidType(res);
      return;
    }

    const removed = list.removeAt(index);

    if (removed === undefined) {
      this.view.removeAtNotFound(res);
      return;
    }

    this.view.removeAtSuccess(res, removed, index);
  }

  public getAt(req: Request, res: Response): void {
    const index = Number(req.params.index);

    if (Number.isNaN(index)) {
      this.view.getAtInvalidType(res);
      return;
    }

    const item = list.getAt(index);

    if (item === undefined) {
      this.view.getAtNotFound(res);
      return;
    }

    this.view.getAtSuccess(res, item, index);
  }

  public peek(_req: Request, res: Response): void {
    const last = list.peek();

    if (last === undefined) {
      this.view.peekEmpty(res);
      return;
    }

    this.view.peekSuccess(res, last);
  }

  public getAll(_req: Request, res: Response): void {
    this.view.getAll(
      res,
      {
        id: list.getId(),
        name: list.name,
      },
      list.getSize(),
      list.getItems()
    );
  }

  public clear(_req: Request, res: Response): void {
    list.clear();
    this.view.clearSuccess(res);
  }
}
