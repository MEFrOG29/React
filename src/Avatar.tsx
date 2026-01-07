import { getImageUrl } from "./utils";
import type { AvatarProps } from "./types";

export default function Avatar({person, size}:AvatarProps){
  return(
    <img
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}