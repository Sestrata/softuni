function toJson(name, lastName, hairColor) {
    
    let result = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    };
    console.log(JSON.stringify(result));
}
toJson('George', 'Jones', 'Brown')
