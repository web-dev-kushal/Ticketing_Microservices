import { Publisher, OrderCreatedEvent, Subjects } from '@kushaltickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
