import walkTree from "./walkTree";

describe("walkTree", () => {
  it("should call the callback function for each node in the tree", () => {
    const mockFn = jest.fn();
    const nodes = [
      { id: 1, children: [{ id: 2 }, { id: 3 }] },
      { id: 4, children: [{ id: 5 }] },
    ];

    walkTree(nodes, mockFn);

    expect(mockFn).toHaveBeenCalledTimes(5);
    expect(mockFn).toHaveBeenCalledWith(nodes[0], undefined);
    expect(mockFn).toHaveBeenCalledWith(nodes[0].children[0], nodes[0]);
    expect(mockFn).toHaveBeenCalledWith(nodes[0].children[1], nodes[0]);
    expect(mockFn).toHaveBeenCalledWith(nodes[1], undefined);
    expect(mockFn).toHaveBeenCalledWith(nodes[1].children[0], nodes[1]);
  });

  it('should return true if the callback function returns "end"', () => {
    const mockFn = jest.fn(() => "end");
    const nodes = [
      { id: 1, children: [{ id: 2 }, { id: 3 }] },
      { id: 4, children: [{ id: 5 }] },
    ];

    const result = walkTree(nodes, mockFn);

    expect(result).toBe(true);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(nodes[0], undefined);
  });

  it('should return false if the callback function returns "continue"', () => {
    const mockFn = jest.fn(() => "continue");
    const nodes = [
      { id: 1, children: [{ id: 2 }, { id: 3 }] },
      { id: 4, children: [{ id: 5 }] },
    ];

    const result = walkTree(nodes, mockFn);

    expect(result).toBe(false);
    expect(mockFn).toHaveBeenCalledTimes(5);
    expect(mockFn).toHaveBeenCalledWith(nodes[0], undefined);
    expect(mockFn).toHaveBeenCalledWith(nodes[0].children[0], nodes[0]);
    expect(mockFn).toHaveBeenCalledWith(nodes[0].children[1], nodes[0]);
    expect(mockFn).toHaveBeenCalledWith(nodes[1], undefined);
    expect(mockFn).toHaveBeenCalledWith(nodes[1].children[0], nodes[1]);
  });

  it("should traverse the tree using custom field names", () => {
    const mockFn = jest.fn();
    const nodes = [
      { id: 1, customChildren: [{ id: 2 }, { id: 3 }] },
      { id: 4, customChildren: [{ id: 5 }] },
    ];

    walkTree(nodes, mockFn, { children: "customChildren" });

    expect(mockFn).toHaveBeenCalledTimes(5);
    expect(mockFn).toHaveBeenCalledWith(nodes[0], undefined);
    expect(mockFn).toHaveBeenCalledWith(nodes[0].customChildren[0], nodes[0]);
    expect(mockFn).toHaveBeenCalledWith(nodes[0].customChildren[1], nodes[0]);
    expect(mockFn).toHaveBeenCalledWith(nodes[1], undefined);
    expect(mockFn).toHaveBeenCalledWith(nodes[1].customChildren[0], nodes[1]);
  });
});
