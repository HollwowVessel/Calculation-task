import {
  addNumber,
  clearValues,
  easyOperations,
  endExpression,
  getResult,
  getResultWithoutEqualSign,
  startExpression,
  swapDisplayValues,
  wrongOperations,
} from "./calculatorHelpers/calculatorHelpers";

export const logicOfCalculator = (val, displayState, setHistoryItems) => {
  const { number, expression, operation } = displayState;
  const resObj = { val, number, expression, operation, setHistoryItems };
  const addNumberRes = addNumber(number, val);
  const wrongOperationsRes = wrongOperations(val, number, operation);
  const clearValuesRes = clearValues(val, number);
  const getResultWithoutEqualSignRes = getResultWithoutEqualSign(resObj);
  const swapDisplayValuesRes = swapDisplayValues(val, operation, number);
  const easyOperationsRes = easyOperations(val, number);
  const startExpressionRes = startExpression(val, number);
  const getResultRes = getResult(resObj);
  const endExpressionRes = endExpression(val, number);

  if (addNumberRes) {
    return addNumberRes;
  }

  if (!wrongOperationsRes) {
    return { type: "" };
  }

  if (clearValuesRes) {
    return clearValuesRes;
  }

  if (getResultWithoutEqualSignRes) {
    return getResultWithoutEqualSignRes;
  }

  if (swapDisplayValuesRes) {
    return swapDisplayValuesRes;
  }

  if (easyOperationsRes) {
    return easyOperationsRes;
  }

  if (startExpressionRes) {
    return startExpressionRes;
  }

  if (getResultRes) {
    return getResultRes;
  }

  if (endExpressionRes) {
    return endExpressionRes;
  }

  return { type: "" };
};
