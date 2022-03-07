

function parent(name) 
{var name = "Dave"
function closure()
    return function (closure) {
      return `${Dave}! ${closure}`;
    };
  }
  
  const remember = parent("remembers me");
  
  
  
  
  closure(remember);
  // Returns "remembers me" because the inner
  // function remembers x.