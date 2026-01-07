export function getImageUrl(person:Person, size:string = 's'):string{
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

export type Person = {
  name:string,
  imageId:string
}