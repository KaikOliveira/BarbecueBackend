import { Response } from 'express';

export function badRequest(res: Response, err: any) {
  res.status(400).json({ Error: err.message });
}

export function internalServerError(res: Response, err: Error) {
  res.status(500).json({
    Error: err.message,
  });
}

export function unauthorized(res: Response, err: string) {
  res.status(401).json({
    Error: err,
  });
}
