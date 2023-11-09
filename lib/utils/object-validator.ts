import { z } from "zod";
import type {
  ObjectValidationFailResult,
  ObjectValidationSuccessResult,
} from "../types";

export function ValidateObject<T>(
  object: object,
  validator: z.AnyZodObject
): ObjectValidationSuccessResult<T> | ObjectValidationFailResult {
  try {
    const parseResult = validator.parse(object);
    return { success: true, payload: parseResult as T };
  } catch (error: any) {
    const errorLogs = error.issues.map((issue: any) => {
      return { path: issue.path[0], detail: issue.message };
    });
    return { success: false, reasons: errorLogs };
  }
}
