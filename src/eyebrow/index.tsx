import Up from "./up";
import Down from './down'
import UpWoman from "./upWoman";
import DownWoman from './downWoman'


export default function EyeBrow(props: { style: string }): JSX.Element {
  const { style } = props;
  switch (style) {
    case "upWoman": return <UpWoman />;
    case "downWoman": return <DownWoman />
    case "down": return <Down />
    case "up":
    default:
      return <Up />;
  }
}
