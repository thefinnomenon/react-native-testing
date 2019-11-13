describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show the learn more message', async () => {
    await expect(element(by.id('learnMore'))).toBeVisible();
  });
});
