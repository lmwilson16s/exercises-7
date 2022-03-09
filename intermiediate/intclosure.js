function parent(x) {
    return function closure() {
      return x;
    };
  }
  
  const remember = parent("remembers me");
  
  console.log("remember:", remember("x"));
 