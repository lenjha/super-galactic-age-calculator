export class User {
  constructor(age){
    this.age = age;
    this.ageSeconds = age * 31536000;
    this.ageMercurySeconds;
    this.ageMercury;
    this.ageVenusSeconds;
    this.ageVenus;
    this.ageMarsSeconds;
    this.ageMars;
    this.ageJupiterSeconds;
    this.ageJupiter;
  };

  calcAgeMercury(){
    this.ageMercurySeconds = this.ageSeconds * .24;
    this.ageMercury = this.ageMercurySeconds / 31536000;
    // return this.ageMercury;
  }

  calcAgeVenus(){
    this.ageVenusSeconds = this.ageSeconds * .62;
    this.ageVenus = this.ageVenusSeconds / 31536000;
    // return this.ageVenus;
  }

  calcAgeMars(){
    this.ageMarsSeconds = this.ageSeconds * 1.88;
    this.ageMars = this.ageMarsSeconds / 31536000;
    // return this.ageMars;
  }

  calcAgeJupiter(){
    this.ageJupiterSeconds = this.ageSeconds * 11.86;
    this.ageJupiter = this.ageJupiterSeconds / 31536000;
    // return this.ageJupiter;
  }
};
