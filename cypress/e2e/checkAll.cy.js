describe("checkArithmetical", () => {
  it("basicTestWithDivision", () => {
    cy.visit("http://localhost:3000");
    cy.get('input[value="3"]').click();
    cy.get('input[value="/"]').click();
    cy.get('input[value="2"]').click();
    cy.get('input[value="="]').click();
    cy.get('div[id="expression"]').should("have.text", "1.5");
  }),
    it("testDivisionWithDecimals", () => {
      cy.visit("http://localhost:3000");
      cy.get('input[value="0"]').click();
      cy.get('input[value="."]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="4"]').click();
      cy.get('input[value="/"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "0.12");
    }),
    it("basicMultiplicationTest", () => {
      cy.visit("http://localhost:3000");
      cy.get('input[value="3"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "6");
    }),
    it("testMultiplicationWithDecimals", () => {
      cy.visit("http://localhost:3000");
      cy.get('input[value="0"]').click();
      cy.get('input[value="."]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="4"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "0.48");
    }),
    it("basicTestAddition", () => {
      cy.visit("http://localhost:3000");
      cy.get('input[value="3"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "5");
    }),
    it("testAdditionWithDecimals", () => {
      cy.visit("http://localhost:3000");
      cy.get('input[value="0"]').click();
      cy.get('input[value="."]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="4"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "2.24");
    }),
    it("basicSubTest", () => {
      cy.visit("http://localhost:3000");
      cy.get('input[value="3"]').click();
      cy.get('input[value="-"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "1");
    }),
    it("testSubWithDecimals", () => {
      cy.visit("http://localhost:3000");
      cy.get('input[value="0"]').click();
      cy.get('input[value="."]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="4"]').click();
      cy.get('input[value="-"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "-1.76");
    }),
    it("testBasicExpression", () => {
      cy.visit("http://localhost:3000");
      cy.get('input[value="("]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value=")"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "8");
    }),
    it("testTwoExpressions", () => {
      cy.visit("http://localhost:3000");
      cy.get('input[value="("]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value=")"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="("]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value=")"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "16");
    }),
    it("testWithSecondValueAsExpression", () => {
      cy.visit("http://localhost:3000");
      cy.get('input[value="2"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="("]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value=")"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "8");
    }),
    it("testWithoutEqualSign", () => {
      cy.visit("http://localhost:3000");
      cy.get('input[value="2"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "8");
    }),
    it("basicTestWithDivision", () => {
      cy.visit("http://localhost:3000/Class");
      cy.get('input[value="3"]').click();
      cy.get('input[value="/"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "1.5");
    }),
    it("testDivisionWithDecimals", () => {
      cy.visit("http://localhost:3000/Class");
      cy.get('input[value="0"]').click();
      cy.get('input[value="."]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="4"]').click();
      cy.get('input[value="/"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "0.12");
    }),
    it("basicMultiplicationTest", () => {
      cy.visit("http://localhost:3000/Class");
      cy.get('input[value="3"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "6");
    }),
    it("testMultiplicationWithDecimals", () => {
      cy.visit("http://localhost:3000/Class");
      cy.get('input[value="0"]').click();
      cy.get('input[value="."]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="4"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "0.48");
    }),
    it("basicTestAddition", () => {
      cy.visit("http://localhost:3000/Class");
      cy.get('input[value="3"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "5");
    }),
    it("testAdditionWithDecimals", () => {
      cy.visit("http://localhost:3000/Class");
      cy.get('input[value="0"]').click();
      cy.get('input[value="."]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="4"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "2.24");
    }),
    it("basicSubTest", () => {
      cy.visit("http://localhost:3000/Class");
      cy.get('input[value="3"]').click();
      cy.get('input[value="-"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "1");
    }),
    it("testSubWithDecimals", () => {
      cy.visit("http://localhost:3000/Class");
      cy.get('input[value="0"]').click();
      cy.get('input[value="."]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="4"]').click();
      cy.get('input[value="-"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "-1.76");
    }),
    it("testBasicExpression", () => {
      cy.visit("http://localhost:3000/Class");
      cy.get('input[value="("]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value=")"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "8");
    }),
    it("testTwoExpressions", () => {
      cy.visit("http://localhost:3000/Class");
      cy.get('input[value="("]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value=")"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="("]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value=")"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "16");
    }),
    it("testWithSecondValueAsExpression", () => {
      cy.visit("http://localhost:3000/Class");
      cy.get('input[value="2"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="("]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value=")"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "8");
    }),
    it("testWithoutEqualSign", () => {
      cy.visit("http://localhost:3000/Class");
      cy.get('input[value="2"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="*"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]').should("have.text", "8");
    });
});

describe("checkHistory", () => {
  it("checkHistory", () => {
    cy.visit("http://localhost:3000/Settings");
    cy.get('button[id="history-clear"]').click();
    cy.visit("http://localhost:3000");
    cy.get('input[value="3"]').click();
    cy.get('input[value="/"]').click();
    cy.get('input[value="2"]').click();
    cy.get('input[value="="]').click();
    cy.get('div[id="expression"]');
    cy.get('button[id="show-history"]').click();

    cy.get('ul[id="history"]').should("have.text", "3 / 2 = 1.5");
  }),
    it("checkHistoryWithTwo", () => {
      cy.visit("http://localhost:3000/Settings");
      cy.get('button[id="history-clear"]').click();
      cy.visit("http://localhost:3000");
      cy.get('input[value="3"]').click();
      cy.get('input[value="/"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();

      cy.get('input[value="C"]').click();

      cy.get('input[value="3"]').click();
      cy.get('input[value="/"]').click();
      cy.get('input[value="2"]').click();

      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]');
      cy.get('button[id="show-history"]').click();

      cy.get('ul[id="history"]').should("have.text", "3 / 2 = 1.53 / 2 = 1.5");
    }),
    it("checkHistory", () => {
      cy.visit("http://localhost:3000/Settings");
      cy.get('button[id="history-clear"]').click();
      cy.visit("http://localhost:3000/Class");
      cy.get('input[value="3"]').click();
      cy.get('input[value="/"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]');
      cy.get('button[id="show-history"]').click();

      cy.get('ul[id="history"]').should("have.text", "3 / 2 = 1.5");
    }),
    it("checkHistoryWithTwo", () => {
      cy.visit("http://localhost:3000/Settings");
      cy.get('button[id="history-clear"]').click();
      cy.visit("http://localhost:3000/Class");
      cy.get('input[value="3"]').click();
      cy.get('input[value="/"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="="]').click();

      cy.get('input[value="C"]').click();

      cy.get('input[value="3"]').click();
      cy.get('input[value="/"]').click();
      cy.get('input[value="2"]').click();

      cy.get('input[value="="]').click();
      cy.get('div[id="expression"]');
      cy.get('button[id="show-history"]').click();

      cy.get('ul[id="history"]').should("have.text", "3 / 2 = 1.53 / 2 = 1.5");
    });
});

describe("checkKeyboard", () => {
  it("checkNumericValues", () => {
    cy.visit("http://localhost:3000");
    cy.get('input[value="1"]').click();
    cy.get('input[value="2"]').click();
    cy.get('input[value="3"]').click();
    cy.get('input[value="4"]').click();
    cy.get('input[value="5"]').click();
    cy.get('input[value="6"]').click();
    cy.get('input[value="7"]').click();
    cy.get('input[value="8"]').click();
    cy.get('input[value="9"]').click();
    cy.get('input[value="0"]').click();
    cy.get('div[id="expression"]').should("have.text", "1234567890");
  }),
    it("checkDelExpression", () => {
      cy.visit("http://localhost:3000");
      cy.get('input[value="1"]').click();
      cy.get('input[value="CE"]').click();
      cy.get('div[id="expression"]').should("have.text", "0");
    }),
    it("checkDots", () => {
      cy.visit("http://localhost:3000");
      cy.get('input[value="1"]').click();
      cy.get('input[value="."]').click();
      cy.get('input[value="."]').click();
      cy.get('div[id="expression"]').should("have.text", "1.");
    }),
    it("checkSignChange", () => {
      cy.visit("http://localhost:3000");
      cy.get('input[value="1"]').click();
      cy.get('input[value="+/-"]').click();
      cy.get('div[id="expression"]').should("have.text", "-1");
    }),
    it("checkDel", () => {
      cy.visit("http://localhost:3000");
      cy.get('input[value="1"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="1"]').click();
      cy.get('input[value="C"]').click();
      cy.get('div[id="expression"]').should("have.text", "0");
      cy.get('div[id="number"]').should("have.text", "0 ");
    }),
    it("checkNumericValues", () => {
      cy.visit("http://localhost:3000");
      cy.get('input[value="1"]').click();
      cy.get('input[value="2"]').click();
      cy.get('input[value="3"]').click();
      cy.get('input[value="4"]').click();
      cy.get('input[value="5"]').click();
      cy.get('input[value="6"]').click();
      cy.get('input[value="7"]').click();
      cy.get('input[value="8"]').click();
      cy.get('input[value="9"]').click();
      cy.get('input[value="0"]').click();
      cy.get('div[id="expression"]').should("have.text", "1234567890");
    }),
    it("checkDelExpression", () => {
      cy.visit("http://localhost:3000/Class");
      cy.get('input[value="1"]').click();
      cy.get('input[value="CE"]').click();
      cy.get('div[id="expression"]').should("have.text", "0");
    }),
    it("checkDots", () => {
      cy.visit("http://localhost:3000/Class");
      cy.get('input[value="1"]').click();
      cy.get('input[value="."]').click();
      cy.get('input[value="."]').click();
      cy.get('div[id="expression"]').should("have.text", "1.");
    }),
    it("checkSignChange", () => {
      cy.visit("http://localhost:3000/Class");
      cy.get('input[value="1"]').click();
      cy.get('input[value="+/-"]').click();
      cy.get('div[id="expression"]').should("have.text", "-1");
    }),
    it("checkDelExpression", () => {
      cy.visit("http://localhost:3000/Class");
      cy.get('input[value="1"]').click();
      cy.get('input[value="+"]').click();
      cy.get('input[value="1"]').click();
      cy.get('input[value="C"]').click();
      cy.get('div[id="expression"]').should("have.text", "0");
      cy.get('div[id="number"]').should("have.text", "0 ");
    });
});

describe("checkKeyboard", () => {
  it("checkNumericValues", () => {
    cy.visit("http://localhost:3000");
    cy.get('a[href="/Class"]').click();
    cy.get('a[href="/"]').click();
    cy.get('a[href="/Settings"]').click();
    cy.get('a[href="/"]').click();
    cy.url().should("eq", "http://localhost:3000/");
  }),
    it("checkNumericValues", () => {
      cy.visit("http://localhost:3000/Class");
      cy.get('a[href="/"]').click();
      cy.get('a[href="/Settings"]').click();
      cy.get('a[href="/Class"]').click();
      cy.get('a[href="/"]').click();
      cy.get('a[href="/"]').click();
      cy.get('a[href="/Class"]').click();
      cy.url().should("eq", "http://localhost:3000/Class");
    });
});

describe("checkTheme", () => {
  it("testAllThemes", () => {
    cy.visit("http://localhost:3000/Settings");
    cy.get("select").select("light");
    cy.get("select").select("dark");
    cy.get("select").select("colored");
    cy.get("select").select("dark");
    cy.get("button").click();
  });
});
