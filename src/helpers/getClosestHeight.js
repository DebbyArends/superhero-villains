function getClosestHeight(_heightInCm, _filter) {
    let heightCharacters = _filter && _filter.map((character) => {
        return(
            parseInt(character.appearance.height[1].replaceAll(" cm", ""), 10)
        )
    })

    let goal = parseInt(_heightInCm, 10)

    let closest = heightCharacters.reduce(function(prev, curr) {
        return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
    });

    return(
        closest
    )
}

export default getClosestHeight;