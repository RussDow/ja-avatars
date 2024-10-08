import Normal from "./normal";
import Thick from "./thick";
import Mohawk from "./mohawk";
import WomanLong from "./womanLong";
import WomanShort from "./womanShort";
import ThreeStrands from "./threeStrands";

export default function hair(props: { style: string, color: string, colorRandom: boolean }): JSX.Element {
  const { style, color, colorRandom } = props;
  switch (style) {
    case "thick": return <Thick color={color} colorRandom={colorRandom} />;
    case "mohawk": return <Mohawk color={color} colorRandom={colorRandom} />;
    case "strands": return <ThreeStrands color={color} />;
    case "womanLong": return <WomanLong color={color} />;
    case "womanShort": return <WomanShort color={color} />;
    case "none": return <></>;
    case "normal":
    default:
      return <Normal color={color} />;
  }
}
