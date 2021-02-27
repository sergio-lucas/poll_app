const { debounce } = require("./helpers");

describe("debounce", function() {
  beforeEach(function() {
    jest.useFakeTimers();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });
  it("Call function once per ms", function() {
    let log = "";

    function fun(a) {
      log += a;
    }

    let f = debounce(fun, 1000);

    f(1);
    f(2);

    setTimeout(() => f(4), 1100);

    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1100);
  });

  it("save context", function() {
    let obj = {
      f() {
        expect(this).toEqual(obj);
      },
    };

    obj.f = debounce(obj.f, 1000);
    obj.f("test");
  });
});
