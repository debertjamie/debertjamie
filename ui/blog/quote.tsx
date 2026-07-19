type blockquoteType = {
  value: {
    quote: string;
  };
};

type calloutType = {
  value: {
    text: string;
    icon: string;
  };
};

export function BlockQuoteComponent({ value }: blockquoteType) {
  return (
    <div className="border-l-4 border-olivine-dark dark:border-olivine bg-porcelain-dark dark:bg-steel-grey px-4 py-2 my-4 rounded-md">
      <span>{value.quote}</span>
    </div>
  );
}

export function CalloutComponent({ value }: calloutType) {
  return (
    <div className="flex items-center gap-2 bg-porcelain-dark dark:bg-steel-grey px-4 py-2 my-4 rounded-md">
      <span className="text-2xl">{value.icon}</span>
      <span>{value.text}</span>
    </div>
  );
}
