import EarSmall from "./small";
import EarBig from "./big";

export default function ear(props: { color: string, size: string }): JSX.Element {
  const { color, size } = props;
  return (
    <>
      {size === "small" &&
        <EarSmall color={color} />
      }
      {size === "big" &&
        <EarBig color={color} />
      }
    </>

  );
}
