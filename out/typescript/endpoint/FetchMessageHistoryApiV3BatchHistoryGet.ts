import {
  Logger,
  Parser,
  Networking,
  TokenManager,
} from "pubnub-core";

export class FetchMessageHistoryApiV3BatchHistoryGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
    public token: TokenManager,
  ) {}

  static validate(subKey: string, channels: string, max: number, reverse: boolean, start: unknown, end: unknown, auth: string, includeMeta: boolean): boolean {

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (typeof (channels) !== 'string') {
      return false;
    }

    if (!Number.isInteger(max)) {
      return false;
    }

    if (typeof (reverse) !== 'boolean') {
      return false;
    }

    if (typeof (start) !== 'number') {
      return false;
    }

    if (typeof (end) !== 'number') {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (typeof (includeMeta) !== 'boolean') {
      return false;
    }

    return true;
  }

  static execute(subKey: string, channels: string, max: number, reverse: boolean, start: unknown, end: unknown, auth: string, includeMeta: boolean): boolean {
    // ...
    return true;
  }

}