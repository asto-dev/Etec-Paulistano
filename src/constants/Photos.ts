class Photo {
  public image: string;
  constructor(photo: string) {
    this.image = photo;
  }
}
export const Gallery: Photo[] = [
  new Photo("./Courses/Gallery/Photo1.png"),
  new Photo("./Courses/Gallery/Photo2.png"),
  new Photo("./Courses/Gallery/Photo3.png"),
  new Photo("./Courses/Gallery/Photo4.jpg"),
  new Photo("./Courses/Gallery/Photo5.jpg"),
  new Photo("./Courses/Gallery/Photo6.jpg"),
  new Photo("./Courses/Gallery/Photo7.jpg"),
  new Photo("./Courses/Gallery/Photo8.jpg"),
 
];
