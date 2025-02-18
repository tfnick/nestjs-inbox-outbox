import { InboxOutboxTransportEvent } from '../model/inbox-outbox-transport-event.interface';

export interface DatabaseDriver {
  createInboxOutboxTransportEvent(eventName: string, eventPayload: any, expireAt: number, readyToRetryAfter: number | null): InboxOutboxTransportEvent;

  findAndExtendReadyToRetryEvents(limit: number): Promise<InboxOutboxTransportEvent[]>;

  persist<T>(entity: T): void;

  remove<T>(entity: T): void;

  flush(): Promise<void>;
}
