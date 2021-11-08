import { Response } from 'express';

export function badRequest(res: Response, err: string) {
  res.status(400).json({
    err,
  });
}

export function internalServerError(res: Response, err: Error) {
  res.status(500).json({
    err: err.message,
  });
}

export function unauthorized(res: Response, err: string) {
  res.status(401).json({
    err,
  });
}
