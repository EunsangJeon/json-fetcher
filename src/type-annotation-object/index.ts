const profile = {
  name: 'nick',
  age: 30,
  coords: {
    lat: 0,
    lng: 15,
  },

  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile; // object destructure
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile; // object destructure
