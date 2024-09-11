import Link from "next/link";
import NamedGoblinCave from "../../assets/img/Named_Goblin_Cave.png";
import GoblinCave from "../../assets/img/Goblin_Cave.png";
import { useEffect, useState } from "react";
import Image from "next/image";
export interface images {
  url: string;
  caption: string;
}

const InitialPosition = `0px, 0px`;

export default function Home() {
  const fadeImages: images[] = [
    {
      url: "/img/Named_Goblin_Cave.png",
      caption: "Named Goblin Cave",
    },
    {
      url: "/img/Goblin_Cave.png",
      caption: "Goblin_Cave",
    },
  ];

  const [fadeImage, setFadeImages] = useState<images>(fadeImages[0]);

  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [imageCenter, setImageCenter] = useState<string>(InitialPosition);
  const [onImage, setOnImage] = useState<boolean>(false);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.x += e.movementX;
      mousePos.y += e.movementY;
    };

    const noScroll = (e: { preventDefault: () => void }) => {
      e.preventDefault();
    };
    if (onImage) {
      window.addEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", noScroll);
      document.removeEventListener("wheel", noScroll);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [onImage]);

  const [zoom, setZoom] = useState<number>(1);
  const wheelZoom = (deltaY: number) => {
    if (deltaY > 0) {
      setZoom(() => zoom - 0.1);
    } else {
      setZoom(() => zoom + 0.1);
    }
  };

  return (
    <div>
      <h1>dad</h1>
      <div style={{ display: "flex" }} key={`key_`}>
        {fadeImages.map((image, idx) => (
          <div style={{ margin: "10px" }} key={`key_${idx}`}>
            {image.caption}
          </div>
        ))}
        <button onClick={() => setImageCenter(InitialPosition)}>
          リセット
        </button>
      </div>

      <div
        style={{
          height: `100vh`,
          width: `100vw`,
          backgroundImage: `url(${fadeImage.url})`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: imageCenter,
          backgroundSize: `cover`,
          position: `relative`,
          zoom: zoom,
        }}
        onMouseDown={(e) => {
          setOnImage(true);
        }}
        onMouseUp={() => {
          setOnImage(false);
        }}
        onWheel={(e) => wheelZoom(e.deltaY)}
        onMouseMove={(e) => {
          if (onImage) {
            setImageCenter(`${mousePos.x}px ${mousePos.y}px`);
          }
        }}
      ></div>
    </div>
  );
}
