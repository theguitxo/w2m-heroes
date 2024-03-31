import { LoadingService } from "./loader.service";

describe('LoadingService', () => {
  let service: LoadingService;
  
  beforeEach(() => { service = new LoadingService(); });

  it('should return true on show loading', (done: DoneFn) => {
    service.isLoading().subscribe(value => {
      expect(value).toBe(true);
      done();
    });

    service.showLoading();
  });

  it('should return false on hide loading', (done: DoneFn) => {
    service.isLoading().subscribe(value => {
      expect(value).toBe(false);
      done();
    });

    service.hideLoading();
  });
});