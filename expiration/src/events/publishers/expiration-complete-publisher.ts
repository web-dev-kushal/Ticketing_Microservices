import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@kushaltickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
