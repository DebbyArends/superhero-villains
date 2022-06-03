function getClosestWeight(_WeightInKg, _filter) {
    let weightCharacters = _filter && _filter.map((character) => {
        return(
            parseInt(character.appearance.weight[1].replaceAll(" kg", ""), 10)
        )
    })

    let goal = parseInt(_WeightInKg, 10)

    let closest = weightCharacters.reduce(function(prev, curr) {
        return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
    });
    return(
        closest
    )
}

export default getClosestWeight;