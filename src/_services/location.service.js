import locations from '../logements.json'

export const locationService = {
  findAll,
  findOne,
}

async function findAll() {
  return locations
}

async function findOne(params) {
  const location = locations.find((location) => location.id === params.id)

  return location
}
