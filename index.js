class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter methods
    get diameter() {
      return this.radius * 2;
    }
  
    get circumference() {
      return 2 * Math.PI * this.radius;
    }
  
    get area() {
      return Math.PI * this.radius * this.radius;
    }
  
    // Setter methods
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    set circumference(circumference) {
      this.radius = circumference / (2 * Math.PI);
    }
  
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
  
  const myCircle = new Circle(5); 
  console.log(myCircle.radius); 
  
  console.log(myCircle.diameter); 
  console.log(myCircle.circumference); 
  console.log(myCircle.area);
  
  myCircle.diameter = 12;
  console.log(myCircle.radius); 
  
  myCircle.circumference = 20; 
  console.log(myCircle.radius); 
  
  myCircle.area = 50; 
  console.log(myCircle.radius); 
  