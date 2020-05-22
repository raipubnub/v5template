import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

export class UpdateAUserPatch {
  private httpMethod: string = 'patch';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  static validate(include: string[]) {
            if (!Array.isArray(include)) {
              return false;
            }
    return true;
  }

  static execute(include: string[]) {
    // ...
  }

}