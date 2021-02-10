jest.setTimeout(40 * 1000);

const data = require("./testdata_config");
const tests = data.suite.fixtures[0].tests;

tests.forEach((tests: any) => {
  describe(data.suite.name, () => {
    console.log(tests.id);
    it(tests.id + tests.name, async () => {
      await page.goto(data.suite.baseurl + tests.navigateTo);
      await page.fill(
        tests.steps[0].fields[0].selector,
        tests.steps[0].fields[0].value
      );
      await page.fill(
        tests.steps[0].fields[1].selector,
        tests.steps[0].fields[1].value
      );
      await page.click(tests.steps[0].fields[2].selector);
      await page.screenshot({ path: "example.png" });
      const content = await page.textContent(
        tests.steps[0].assertions[0].selector
      );
      expect(content).toContain(tests.steps[0].assertions[0].value);
      console.log(tests.steps[0].assertions[0].message);
    });
  });
});
