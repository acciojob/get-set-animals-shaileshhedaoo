class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound (this can be overridden by subclasses)
  makeSound() {
    console.log(`${this._species} makes a sound.`);
  }
}

class Dog extends Animal {
  // Method to make the dog bark
  bark() {
    console.log('woof');
  }
}

class Cat extends Animal {
  // Method to make the cat purr
  purr() {
    console.log('purr');
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
