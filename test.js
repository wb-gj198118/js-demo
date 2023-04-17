let obj = {
    name: 'Tom',
    age: 15,
    hobby: ['eat', 'game'],
    favorite: {
        food: 'bread',
        drink: {
          dname: 'milk',
          color: 'white',
        },
    }
  }
  let obj_new = _.cloneDeep(obj)
  
  console.log(obj)
  console.log(obj_new)
  console.log(obj.name === obj_new.name)
  console.log(obj.favorite === obj_new.favorite)
  console.log(obj.favorite.drink === obj_new.favorite.drink)