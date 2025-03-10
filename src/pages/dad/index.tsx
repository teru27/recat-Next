import { useEffect, useState } from "react";
import styles from "./dad.module.scss";
import { IconDetail } from "@component/dad/IconDetail";

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

  // スクロールの制限
  const stopScrollingBackContent = () => {
    //document.body.style.overflow = "hidden";

    return () => {
      //document.body.style.overflow = "auto";
    };
  };

  useEffect(stopScrollingBackContent, []);

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
    <div className={styles.container}>
      <div className={styles.heder}>
        <h1>dad</h1>
      </div>

      <div className={styles.map} key={`key_`}>
        {fadeImages.map((image, idx) => (
          <div className={styles.mapInfo} key={`key_${idx}`}>
            {image.caption}
          </div>
        ))}
      </div>

      <div className={styles.main}>
        <div className={styles.box}>etc</div>
        <IconDetail total={10} top={5} under={5} x={0} y={0} />
        <div className={styles.imageBox}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${fadeImage.url})`,
              backgroundPosition: imageCenter,
              //zoom: zoom,
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
      </div>

      <div className={styles.footer}>footer</div>
    </div>
  );
}
