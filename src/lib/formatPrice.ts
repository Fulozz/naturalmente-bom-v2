export function formatPrice(price: number, options: { currency?: string, notation?: "standard" | "scientific" | "engineering" | "compact", locale?: string } = {}): string {
    const numberFormatter = new Intl.NumberFormat(options.locale || 'pt-BR', {
      style: 'currency',
      currency: options.currency || 'BRL',
      notation: options.notation || 'standard',
    });
  
    return numberFormatter.format(price).replace(/\s/g, '');
  }

export {};