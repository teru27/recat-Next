import { cardData, data, data2 } from "@util/data";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [list, setList] = useState<string[]>([]);

  const [cardData, setCardData] = useState<cardData>(data2);

  const checkbox = (
    cardData: { value: string; status: boolean },
    isChecked: boolean
  ) => {
    const ret = cardData.value.match(/[a-z].[1 - 9]|[a-z].[a-z]/);
    if (ret == null) {
      return;
    }
    if (isChecked) {
    } else {
    }

    console.log(ret[0]);
    console.log(isChecked);
  };

  return (
    <div style={{ display: "flex" }}>
      {Object.keys(cardData).map((keys) => (
        <div>
          {cardData[keys].map((cardData) => (
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                value={cardData.value}
                onChange={(a) => checkbox(cardData, a.target.checked)}
              />
              {cardData.value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
