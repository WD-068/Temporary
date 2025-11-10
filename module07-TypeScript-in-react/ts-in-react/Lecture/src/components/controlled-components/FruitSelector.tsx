// src/components/FruitSelector.tsx
import { type ChangeEventHandler, useState } from "react";

const fruitMap = {
  apple: {
    emoji:
      '<img draggable="false" role="img" class="emoji" alt="" src="https://s.w.org/images/core/emoji/16.0.1/svg/1f34e.svg">',
    label: "Red Apple",
  },
  banana: {
    emoji:
      '<img draggable="false" role="img" class="emoji" alt="" src="https://s.w.org/images/core/emoji/16.0.1/svg/1f34c.svg">',
    label: "Yellow Banana",
  },
  cherry: {
    emoji:
      '<img draggable="false" role="img" class="emoji" alt="" src="https://s.w.org/images/core/emoji/16.0.1/svg/1f352.svg">',
    label: "Sweet Cherry",
  },
  orange: {
    emoji:
      '<img draggable="false" role="img" class="emoji" alt="" src="https://s.w.org/images/core/emoji/16.0.1/svg/1f34a.svg">',
    label: "Juicy Orange",
  },
  grape: {
    emoji:
      '<img draggable="false" role="img" class="emoji" alt="" src="https://s.w.org/images/core/emoji/16.0.1/svg/1f347.svg">',
    label: "Purple Grapes",
  },
  watermelon: {
    emoji:
      '<img draggable="false" role="img" class="emoji" alt="" src="https://s.w.org/images/core/emoji/16.0.1/svg/1f349.svg">',
    label: "Fresh Watermelon",
  },
  strawberry: {
    emoji:
      '<img draggable="false" role="img" class="emoji" alt="" src="https://s.w.org/images/core/emoji/16.0.1/svg/1f353.svg">',
    label: "Sweet Strawberry",
  },
  pineapple: {
    emoji:
      '<img draggable="false" role="img" class="emoji" alt="" src="https://s.w.org/images/core/emoji/16.0.1/svg/1f34d.svg">',
    label: "Tropical Pineapple",
  },
  mango: {
    emoji:
      '<img draggable="false" role="img" class="emoji" alt="" src="https://s.w.org/images/core/emoji/16.0.1/svg/1f96d.svg">',
    label: "Ripe Mango",
  },
  lemon: {
    emoji:
      '<img draggable="false" role="img" class="emoji" alt="" src="https://s.w.org/images/core/emoji/16.0.1/svg/1f34b.svg">',
    label: "Zesty Lemon",
  },
  kiwi: {
    emoji:
      '<img draggable="false" role="img" class="emoji" alt="" src="https://s.w.org/images/core/emoji/16.0.1/svg/1f95d.svg">',
    label: "Green Kiwi",
  },
  peach: {
    emoji:
      '<img draggable="false" role="img" class="emoji" alt="" src="https://s.w.org/images/core/emoji/16.0.1/svg/1f351.svg">',
    label: "Juicy Peach",
  },
  blueberry: {
    emoji:
      '<img draggable="false" role="img" class="emoji" alt="" src="https://s.w.org/images/core/emoji/16.0.1/svg/1fad0.svg">',
    label: "Blueberry",
  },
} as const;

type Fruit = keyof typeof fruitMap;

const FruitSelector = () => {
  const [fruit, setFruit] = useState<Fruit>("apple");

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setFruit(e.target.value as Fruit);
  };

  const chosenFruit = fruitMap[fruit];

  return (
    <div>
      <label htmlFor="fruit">Pick a fruit:</label>
      <select id="fruit" value={fruit} onChange={handleChange}>
        {Object.entries(fruitMap).map(([key, value]) => (
          <option key={key} value={key}>
            {value.label}
          </option>
        ))}
      </select>
      <div>
        <span role="img" aria-label={chosenFruit.label}>
          {chosenFruit.emoji}
        </span>
        <span>{chosenFruit.label}</span>
      </div>
    </div>
  );
};

export default FruitSelector;
