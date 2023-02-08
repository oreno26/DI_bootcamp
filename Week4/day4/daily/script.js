// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
const container = document.getElementById(`container`);

class Video {
  constructor(title, uploader, time) {
    (this.title = title), (this.uploader = uploader), (this.time = time);
  }
  //     Create a method called watch() which displays a string as follows:
  // “uploader parameter watched all time parameter of title parameter!”
  watch() {
    const para = document.createElement(`p`);
    const text = `${this.uploader} watched all ${this.time} seconds of ${this.title} `;
    const sent = document.createTextNode(text);
    para.appendChild(sent);
    container.appendChild(para);
  }
}
// Instantiate a new Video instance and call the watch() method.
const firstVid = new Video(`Orens Day`, `Oren`, 55);
firstVid.watch();
//  Instantiate a second Video instance with different values.
const SecondVid = new Video(`Summer Ride`, `Dave`, 32);
SecondVid.watch();
console.log(SecondVid);
const thirdVid = new Video(`fire potato`, `Drake`, 431);
const fourthVid = new Video(`beer?`, `BOB`, 3411);
const fifthVid = new Video(`who is cat?`, `aging dragon`, 545);

const vidList = [firstVid, SecondVid, thirdVid, fourthVid, fifthVid];
// console.log(vidList);

//  Bonus: Loop through the array to instantiate those instances.
vidList.forEach((video) => {
//   const { title, uploader, time } = video;
//   console.log(video);
  video.watch();
});
