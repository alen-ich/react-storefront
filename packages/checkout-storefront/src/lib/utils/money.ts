export interface Money {
  currency: string;
  amount: number;
}

export const getFormattedMoney = <TMoney extends Money>(
  money: TMoney | undefined | null,
  negative: boolean = false
) => {
  if (!money) {
    return "";
  }

  const { amount, currency } = money;

  return new Intl.NumberFormat("ru-KZ", {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
  }).format(negative ? -amount : amount);
};
