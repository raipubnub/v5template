import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class UpdateAUserSSpaceMembershipsPatch {
  private httpMethod: string = 'patch';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  
  validate(include: array, limit: integer, start: string, end: string, count: boolean, filter: string, sort: array) {

    if (!Array.isArray(include)) {
      return false;
    }

    if (!Number.isInteger(limit)) {
      return false;
    }

    if (typeof (start) !== 'string') {
      return false;
    }

    if (typeof (end) !== 'string') {
      return false;
    }

    if (typeof (count) !== 'boolean') {
      return false;
    }

    if (typeof (filter) !== 'string') {
      return false;
    }

    if (!Array.isArray(sort)) {
      return false;
    }

    return true;
  }

  execute(include: array, limit: integer, start: string, end: string, count: boolean, filter: string, sort: array) {
    // ...
  }

}