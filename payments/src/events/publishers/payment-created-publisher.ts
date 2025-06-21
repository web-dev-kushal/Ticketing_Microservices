import { Subjects, Publisher, PaymentCreatedEvent } from '@moviecon/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
