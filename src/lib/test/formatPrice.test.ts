import { describe, expect, test } from '@jest/globals';
import { formatPrice } from '../formatPrice';

describe('Formatação de preço com base na escolha de moeda', () => {
  test('transforma um número em uma string formatada em USD', () => {
    expect(formatPrice(1000 , { locale: "en-US", currency: "USD", notation: "standard" })).toBe("$1,000.00");
  });

  test('transforma um número em uma string formatada em EUR', () => {
    expect(formatPrice(1000,  { locale: "de-DE", currency: "EUR", notation: "standard" })).toBe("1.000,00€");
  });

  test('transforma um número em uma string formatada em BRL com 3 casas decimais', () => {
    expect(formatPrice(1000.23,  { locale: "pt-BR", currency: "BRL", notation: "standard" })).toBe("R$1.000,23");
  });
});