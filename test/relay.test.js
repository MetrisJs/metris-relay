"use strict";
/*global describe, it, before, beforeEach, after, afterEach, expect, should */

var metris = require("../../metris/index.js"),
  metrisRelay;

describe("Relay", function () {

  beforeEach(function () {
    metrisRelay = new metris.Relay({});
  });

  it("addBase() should add that base to the Relay", function () {
    var mockBase = {name: "something"};

    metrisRelay.addBase('http', mockBase);

    expect(metrisRelay.bases["something"]).to.exist;
  });
});
