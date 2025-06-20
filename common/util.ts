export type Result<T> =
    | { ok: true; value: T }
    | { ok: false; message: string; error?: Error; status?: number };
