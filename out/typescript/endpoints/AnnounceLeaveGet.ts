import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

export class AnnounceLeaveGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  static validate(subKey: string, channel: string, channelGroup: string, auth: string, callback: string, uuid: string) {
            if (typeof (subKey) !== 'string') {
              return false;
            }
            if (typeof (channel) !== 'string') {
              return false;
            }
            if (typeof (channelGroup) !== 'string') {
              return false;
            }
            if (typeof (auth) !== 'string') {
              return false;
            }
            if (typeof (callback) !== 'string') {
              return false;
            }
            if (typeof (uuid) !== 'string') {
              return false;
            }
    return true;
  }

  static execute(subKey: string, channel: string, channelGroup: string, auth: string, callback: string, uuid: string) {
    // ...
  }

}