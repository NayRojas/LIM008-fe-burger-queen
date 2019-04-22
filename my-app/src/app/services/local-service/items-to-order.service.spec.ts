import { TestBed } from '@angular/core/testing';
import { ItemsToOrderService } from './items-to-order.service';


describe('ItemsToOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemsToOrderService = TestBed.get(ItemsToOrderService);
    expect(service).toBeTruthy();
  });
});
